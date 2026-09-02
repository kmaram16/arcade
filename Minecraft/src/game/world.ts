// The voxel world: a sparse map of "x,y,z" → block type, plus an *infinite*
// chunk generator. Terrain is streamed in around the player as they move; far
// chunks are unloaded so the block count (and therefore meshing cost) stays
// bounded no matter how far you walk. Generation is deterministic (hash/sine
// based), so chunks regenerate identically when you return to them.

import { BlockType, BLOCK_TYPES, TRANSPARENT } from './blocks';

export type WorldType = 'normal' | 'flat' | 'skyblock' | 'oneblock';

export const CHUNK = 8;           // chunk size on the x and z axes
export const RENDER_CHUNKS = 5;   // how many chunks out from the player stay loaded
export const GROUND_MIN = -8;     // bedrock floor depth
export const SPAWN_FLAT = 6;      // radius (blocks) of the flat spawn plaza
export const SPAWN_RADIUS = 18;   // used by the engine to bound mob roaming

/** The single regenerating block in a OneBlock world. */
export const ONEBLOCK_POS = { x: 0, y: 0, z: 0 };

// Deterministic 0..1 hash from integer coords (+ a salt to get independent fields).
function hash(x: number, z: number, salt = 0): number {
  let h = (x | 0) * 374761393 + (z | 0) * 668265263 + salt * 2246822519;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967295;
}

export class World {
  readonly map = new Map<string, BlockType>();
  private loaded = new Set<string>();
  private type: WorldType = 'normal';
  private mods: Set<string> = new Set();
  private renderDist = RENDER_CHUNKS; // adjustable view distance (graphics setting)

  private key(x: number, y: number, z: number) {
    return `${x},${y},${z}`;
  }

  get(x: number, y: number, z: number): BlockType | undefined {
    return this.map.get(this.key(x, y, z));
  }

  set(x: number, y: number, z: number, type: BlockType) {
    this.map.set(this.key(x, y, z), type);
  }

  remove(x: number, y: number, z: number) {
    this.map.delete(this.key(x, y, z));
  }

  /** Wipe all blocks + loaded chunks so a different world type can be generated. */
  reset() {
    this.map.clear();
    this.loaded.clear();
  }

  /** Adjust the view distance (chunks loaded around the player). */
  setRenderDistance(chunks: number) {
    this.renderDist = Math.max(1, Math.round(chunks));
  }

  /** Anything present blocks movement (you can stand on leaves and glass too). */
  isSolid(x: number, y: number, z: number): boolean {
    return this.map.has(this.key(x, y, z));
  }

  private isOpaque(x: number, y: number, z: number): boolean {
    const t = this.get(x, y, z);
    return t !== undefined && !TRANSPARENT.has(t);
  }

  /** A block is hidden (skipped when meshing) only if fully boxed in by opaque blocks. */
  isHidden(x: number, y: number, z: number): boolean {
    const t = this.get(x, y, z);
    if (t === undefined) return true;
    if (TRANSPARENT.has(t)) return false;
    return (
      this.isOpaque(x + 1, y, z) &&
      this.isOpaque(x - 1, y, z) &&
      this.isOpaque(x, y + 1, z) &&
      this.isOpaque(x, y - 1, z) &&
      this.isOpaque(x, y, z + 1) &&
      this.isOpaque(x, y, z - 1)
    );
  }

  /** Surface height of a column. Flat worlds are dead level; normal worlds get
   *  rolling hills, but the spawn plaza stays flat so the showroom sits nicely. */
  surfaceHeight(x: number, z: number): number {
    if (this.type !== 'normal') return 0; // flat / skyblock / oneblock
    const d = Math.max(Math.abs(x), Math.abs(z));
    let h = Math.sin(x * 0.18) * Math.cos(z * 0.16) * 2.3;
    h += Math.sin((x + z) * 0.07) * 1.7;
    h += (hash(x, z, 7) - 0.5) * 1.4;
    h += 1.5;
    // Ramp the hills in beyond the flat spawn plaza so there's no sudden cliff.
    const ramp = Math.min(1, Math.max(0, (d - SPAWN_FLAT) / 6));
    return Math.round(h * ramp);
  }

  // ── Infinite streaming ───────────────────────────────────────────────────────

  /** Set the world style and build the spawn area before the first frame. */
  init(type: WorldType, mods: Set<string>) {
    this.type = type;
    this.mods = mods;
    this.streamAround(0, 0);
    if (type === 'skyblock') this.skyblockIsland();
    else if (type === 'oneblock') this.set(ONEBLOCK_POS.x, ONEBLOCK_POS.y, ONEBLOCK_POS.z, 'grass');
    else this.showroom();
  }

  private chunkKey(cx: number, cz: number) {
    return `${cx},${cz}`;
  }

  /** Permanent 3×3 of chunks around the origin keeps the showroom alive. */
  private isSpawnChunk(cx: number, cz: number) {
    return Math.abs(cx) <= 1 && Math.abs(cz) <= 1;
  }

  /**
   * Load every chunk within RENDER_CHUNKS of the player and unload the rest.
   * Returns true if anything changed (so the engine knows to re-mesh).
   */
  streamAround(px: number, pz: number): boolean {
    const pcx = Math.floor(px / CHUNK);
    const pcz = Math.floor(pz / CHUNK);
    let changed = false;

    // Load missing chunks in range.
    for (let cx = pcx - this.renderDist; cx <= pcx + this.renderDist; cx++) {
      for (let cz = pcz - this.renderDist; cz <= pcz + this.renderDist; cz++) {
        if (this.ensureChunk(cx, cz)) changed = true;
      }
    }
    // Unload chunks that drifted out of range (never the spawn plaza).
    for (const k of this.loaded) {
      const [cx, cz] = k.split(',').map(Number);
      if (this.isSpawnChunk(cx, cz)) continue;
      if (Math.abs(cx - pcx) > this.renderDist || Math.abs(cz - pcz) > this.renderDist) {
        this.unloadChunk(cx, cz);
        changed = true;
      }
    }
    return changed;
  }

  private ensureChunk(cx: number, cz: number): boolean {
    const k = this.chunkKey(cx, cz);
    if (this.loaded.has(k)) return false;
    this.loaded.add(k);

    const x0 = cx * CHUNK;
    const z0 = cz * CHUNK;
    for (let x = x0; x < x0 + CHUNK; x++) {
      for (let z = z0; z < z0 + CHUNK; z++) this.column(x, z);
    }
    return true;
  }

  private unloadChunk(cx: number, cz: number) {
    const x0 = cx * CHUNK;
    const z0 = cz * CHUNK;
    for (let x = x0; x < x0 + CHUNK; x++) {
      for (let z = z0; z < z0 + CHUNK; z++) {
        for (let y = GROUND_MIN; y <= GROUND_MIN + 40; y++) this.remove(x, y, z);
      }
    }
    this.loaded.delete(this.chunkKey(cx, cz));
  }

  /** Build one vertical column of terrain (+ trees/ores depending on mods). */
  private column(x: number, z: number) {
    if (this.type === 'skyblock' || this.type === 'oneblock') return; // void everywhere but spawn
    const nether = this.mods.has('nether');
    const top = this.surfaceHeight(x, z);
    for (let y = top; y >= GROUND_MIN; y--) {
      if (y === GROUND_MIN) {
        this.set(x, y, z, 'bedrock');
      } else if (y === top) {
        this.set(x, y, z, nether ? 'netherrack' : 'grass');
      } else if (y >= top - 3) {
        this.set(x, y, z, nether ? 'soul_sand' : 'dirt');
      } else if (this.mods.has('ores') && hash(x, z, y * 131 + 3) < 0.08) {
        const ores: BlockType[] = ['coal_ore', 'coal_ore', 'iron_ore', 'iron_ore', 'gold_ore', 'diamond_ore', 'emerald_ore'];
        this.set(x, y, z, ores[Math.floor(hash(x, z, y * 131 + 4) * ores.length)]);
      } else {
        this.set(x, y, z, nether && hash(x, z, y * 131 + 5) < 0.05 ? 'lava_block' : 'stone');
      }
    }
    // Nether lava pools dimple the surface.
    if (nether && hash(x, z, 9) < 0.04) this.set(x, top, z, 'lava_block');

    // Trees on normal grassy ground (never on the flat spawn plaza or in nether).
    if (this.type === 'normal' && !nether && this.get(x, top, z) === 'grass') {
      const d = Math.max(Math.abs(x), Math.abs(z));
      if (d > SPAWN_FLAT + 1 && hash(x, z, 11) < 0.02) this.tree(x, z, top + 1);
    }
  }

  private tree(x: number, z: number, base: number) {
    const height = 4;
    for (let h = 0; h < height; h++) this.set(x, base + h, z, 'oak_log');
    for (let dy = 1; dy <= 2; dy++) {
      for (let dx = -2; dx <= 2; dx++) {
        for (let dz = -2; dz <= 2; dz++) {
          if (Math.abs(dx) === 2 && Math.abs(dz) === 2) continue;
          this.leafIfEmpty(x + dx, base + height - 2 + dy, z + dz);
        }
      }
    }
    for (let dx = -1; dx <= 1; dx++) {
      for (let dz = -1; dz <= 1; dz++) {
        if (Math.abs(dx) === 1 && Math.abs(dz) === 1) continue;
        this.leafIfEmpty(x + dx, base + height + 1, z + dz);
      }
    }
  }

  private leafIfEmpty(x: number, y: number, z: number) {
    if (!this.isSolid(x, y, z)) this.set(x, y, z, 'leaves');
  }

  /** Classic skyblock: a tiny starter island floating in the void. */
  private skyblockIsland() {
    // 5×5 grass platform over two dirt layers.
    for (let dx = -2; dx <= 2; dx++) {
      for (let dz = -2; dz <= 2; dz++) {
        this.set(dx, 0, dz, 'grass');
        this.set(dx, -1, dz, 'dirt');
        this.set(dx, -2, dz, 'dirt');
      }
    }
    // A tree in the corner + a couple of starter blocks to get going.
    this.tree(-2, -2, 1);
    this.set(2, 1, 2, 'crafting_table');
    this.set(2, 1, -2, 'bed');
    // A small bonus island a short jump away with a hint of ore.
    for (let dx = 6; dx <= 8; dx++) {
      for (let dz = -1; dz <= 1; dz++) this.set(dx, 0, dz, 'stone');
    }
    this.set(7, 1, 0, 'diamond_ore');
  }

  /**
   * Right where you spawn: a gallery of every block type, a diamond cube, an
   * oak-wood display, a TNT pyramid, a bed, and glowing lamps.
   */
  private showroom() {
    BLOCK_TYPES.forEach((type, i) => {
      const col = i % 9;
      const row = Math.floor(i / 9);
      this.set(col - 4, 1, -2 - row, type);
    });

    for (let dx = 0; dx <= 1; dx++) {
      for (let dz = 0; dz <= 1; dz++) {
        for (let dy = 1; dy <= 2; dy++) this.set(dx - 1, dy, dz + 2, 'diamond_block');
      }
    }

    for (let dy = 1; dy <= 4; dy++) this.set(3, dy, 2, 'oak_log');
    for (let dx = 4; dx <= 6; dx++) {
      for (let dy = 1; dy <= 3; dy++) this.set(dx, dy, 2, 'oak_planks');
    }
    this.set(4, 4, 2, 'glowstone');

    for (let dx = -1; dx <= 1; dx++) {
      for (let dz = -1; dz <= 1; dz++) this.set(dx - 5, 1, dz + 5, 'tnt');
    }
    this.set(-5, 2, 5, 'tnt');

    this.set(6, 1, 6, 'bed');
    this.set(5, 1, 6, 'torch');
    this.set(7, 1, 6, 'torch');
  }
}
