// 3D world data + level generation for "Aventura Locura" — a Crash-style 3D
// platformer. No Three.js / React here: just types, tuning constants, themed
// worlds, a seeded RNG and deterministic level/boss generators.
//
// Coordinates: X runs forward along the level path, Z is lateral (left/right),
// Y is up. Ground top sits at y = 0. Everything is axis-aligned boxes so
// collision stays simple (AABB per axis).

// ===== Player physics (per-frame, ~60fps) =====
export const GRAVITY = 0.014;
export const MOVE_SPEED = 0.12;
export const TURN_SPEED = 0.052;
export const JUMP_V = 0.235; // ~2 units of jump height
export const JUMP_CUT = 0.45;
export const MAX_FALL = 0.55;
export const SPIN_TIME = 22;
export const SPIN_CD = 8;
export const SPIN_R = 1.7; // spin reaches this far (xz)
export const PLAYER_HX = 0.35;
export const PLAYER_HY = 0.7;
export const PLAYER_HZ = 0.35;
export const TNT_FUSE = 100;
export const TNT_R = 2.6;
export const HIT_INVULN = 90;

export const HALF_WIDTH = 3; // path half-width in Z
export const MAX_LEVELS = 15;
export const FRUIT_FOR_LIFE = 100;
export const CRATE = 1; // crate edge length (half = 0.5)

// ===================== TYPES =====================
export type Box = { cx: number; cy: number; cz: number; hx: number; hy: number; hz: number; kind: 'ground' | 'platform' | 'wall' };
export type CrateType = 'wood' | 'fruit' | 'tnt' | 'iron' | 'bounce' | 'life' | 'check';
export type Crate3 = { x: number; y: number; z: number; type: CrateType; dead?: boolean; fuse?: number };
export type EnemyType = 'walker' | 'spinner';
export type Enemy3 = { x: number; y: number; z: number; type: EnemyType; axis: 'x' | 'z'; min: number; max: number; dir: number; speed: number; dead?: boolean };
export type Fruit3 = { x: number; y: number; z: number; taken?: boolean };
export type Mask3 = { x: number; y: number; z: number; taken?: boolean };
export type Checkpoint3 = { x: number; y: number; z: number };

export type Theme = {
  name: string;
  sky: number;       // scene background / fog
  ground: number;    // ground top color
  groundSide: number;
  accent: number;
  fog: number;
};

export type Level3 = {
  num: number;
  name: string;
  boss: boolean;
  length: number;
  theme: Theme;
  boxes: Box[];
  crates: Crate3[];
  enemies: Enemy3[];
  fruits: Fruit3[];
  masks: Mask3[];
  checkpoints: Checkpoint3[];
  spawn: { x: number; y: number; z: number };
  goal: { x: number; z: number };
  bossHp: number;
};

// ===================== THEMES =====================
export const THEMES: Theme[] = [
  { name: 'Selva',     sky: 0x7dd3fc, ground: 0x4d7c0f, groundSide: 0x3f2d12, accent: 0xa3e635, fog: 0x9fd9f0 },
  { name: 'Playa',     sky: 0xfde68a, ground: 0xd6a861, groundSide: 0x92611e, accent: 0xfde047, fog: 0xfde7b0 },
  { name: 'Ruinas',    sky: 0xc4b5fd, ground: 0x78716c, groundSide: 0x44403c, accent: 0xf59e0b, fog: 0xc4b5fd },
  { name: 'Cueva',     sky: 0x1e293b, ground: 0x475569, groundSide: 0x1e293b, accent: 0x22d3ee, fog: 0x1e293b },
  { name: 'Atardecer', sky: 0xfb7185, ground: 0x9a3412, groundSide: 0x431407, accent: 0xfcd34d, fog: 0xfba6a6 },
];
export const THEME_LAB: Theme = { name: 'Laboratorio', sky: 0x6d28d9, ground: 0x4c1d95, groundSide: 0x1e1b4b, accent: 0x22d3ee, fog: 0x4c1d95 };

export function themeFor(n: number, boss: boolean): Theme {
  return boss ? THEME_LAB : THEMES[(n - 1) % THEMES.length];
}

// ===================== SEEDED RNG =====================
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
type RNG = () => number;
const pick = <T,>(r: RNG, arr: T[]): T => arr[Math.floor(r() * arr.length)];
function weighted<T>(r: RNG, entries: [T, number][]): T {
  const total = entries.reduce((s, e) => s + e[1], 0);
  let roll = r() * total;
  for (const [val, w] of entries) { roll -= w; if (roll <= 0) return val; }
  return entries[entries.length - 1][0];
}

function crateTypeFor(r: RNG, n: number): CrateType {
  const e: [CrateType, number][] = [['wood', 42], ['fruit', 26], ['bounce', 12], ['tnt', Math.min(6 + n, 22)], ['life', 4]];
  if (n >= 4) e.push(['iron', 9]);
  return weighted(r, e);
}

// ===================== NORMAL LEVEL =====================
function genNormal(n: number, theme: Theme): Level3 {
  const r = mulberry32((n * 73856093) ^ 0x9e3779b9);
  const length = Math.min(36 + n * 3, 72);
  const boxes: Box[] = [];
  const crates: Crate3[] = [];
  const enemies: Enemy3[] = [];
  const fruits: Fruit3[] = [];
  const masks: Mask3[] = [];

  const ground = (x0: number, x1: number) =>
    boxes.push({ cx: (x0 + x1) / 2, cy: -0.5, cz: 0, hx: (x1 - x0) / 2, hy: 0.5, hz: HALF_WIDTH, kind: 'ground' });

  // safe spawn pad
  ground(-2, 6);
  let x = 6;
  const segs: { x0: number; x1: number }[] = [{ x0: -2, x1: 6 }];

  const gapMax = 2.0 + Math.min(n * 0.08, 1.1); // up to ~3.1 (always jumpable)
  while (x < length - 10) {
    const gap = 1.7 + r() * (gapMax - 1.7);
    const gx = x;
    x += gap;

    // fruit arc over the gap
    const arc = 3 + Math.floor(r() * 2);
    for (let i = 0; i < arc; i++) {
      const t = (i + 1) / (arc + 1);
      fruits.push({ x: gx + t * gap, y: 1 + Math.sin(t * Math.PI) * 1.4, z: 0 });
    }

    const segLen = 4 + r() * 4;
    ground(x, x + segLen);
    segs.push({ x0: x, x1: x + segLen });

    // populate
    const midX = x + segLen / 2;
    if (r() < 0.85) {
      const count = 1 + Math.floor(r() * 3);
      const baseZ = -1.6 + r() * 3.2;
      for (let i = 0; i < count; i++) crates.push({ x: x + 1 + i * 1.1 + r() * (segLen - 2 - count), y: 0.5, z: baseZ, type: crateTypeFor(r, n) });
    }
    const ep = Math.min(0.3 + n * 0.04, 0.85);
    if (r() < ep) {
      const along = r() < 0.5 ? 'z' : 'x';
      if (along === 'z') enemies.push({ x: midX, y: 0.5, z: 0, type: pick(r, ['walker', 'spinner'] as EnemyType[]), axis: 'z', min: -HALF_WIDTH + 0.6, max: HALF_WIDTH - 0.6, dir: 1, speed: Math.min(0.03 + n * 0.004, 0.07), dead: false });
      else enemies.push({ x: midX, y: 0.5, z: -1 + r() * 2, type: pick(r, ['walker', 'spinner'] as EnemyType[]), axis: 'x', min: x + 0.8, max: x + segLen - 0.8, dir: 1, speed: Math.min(0.03 + n * 0.004, 0.07), dead: false });
    }
    // a line of fruit
    if (r() < 0.6) { const fn = 2 + Math.floor(r() * 3); const z = -1.5 + r() * 3; for (let i = 0; i < fn; i++) fruits.push({ x: x + 1 + i * 0.9, y: 1, z }); }

    // optional floating side platform with a reward
    if (r() < 0.4) {
      const py = 1.4 + r() * 1.0;
      const pz = (r() < 0.5 ? -1 : 1) * (HALF_WIDTH - 0.8);
      boxes.push({ cx: midX, cy: py - 0.25, cz: pz, hx: 1.1, hy: 0.25, hz: 0.9, kind: 'platform' });
      if (r() < 0.5) crates.push({ x: midX, y: py + 0.5, z: pz, type: pick(r, ['fruit', 'bounce', 'life'] as CrateType[]) });
      else fruits.push({ x: midX, y: py + 0.6, z: pz });
    }

    x += segLen;
  }

  ground(length - 10, length + 3);
  segs.push({ x0: length - 10, x1: length + 3 });

  // Several checkpoint flags spread along the level. Each one you reach becomes
  // your respawn point, so a fall doesn't send you back to the very start.
  const checkpoints: Checkpoint3[] = [];
  for (const frac of [0.3, 0.55, 0.8]) {
    const target = length * frac;
    let best = segs[0];
    for (const s of segs) if (Math.abs((s.x0 + s.x1) / 2 - target) < Math.abs((best.x0 + best.x1) / 2 - target)) best = s;
    const cx = (best.x0 + best.x1) / 2;
    // keep them apart and off the spawn/goal pads
    if (cx > 8 && cx < length - 8 && !checkpoints.some((c) => Math.abs(c.x - cx) < 6)) checkpoints.push({ x: cx, y: 0, z: 0 });
  }

  // the magic mask Javier, somewhere in the back half
  if (r() < 0.8) {
    const back = segs.filter((s) => s.x0 > length * 0.4);
    const ms = (back.length ? back : segs)[Math.floor(r() * (back.length ? back.length : segs.length))];
    masks.push({ x: (ms.x0 + ms.x1) / 2, y: 1.4, z: -1 + r() * 2 });
  }

  return {
    num: n, name: `${theme.name} ${Math.ceil(n / THEMES.length)}`, boss: false, length, theme,
    boxes, crates, enemies, fruits, masks, checkpoints,
    spawn: { x: 2, y: PLAYER_HY, z: 0 }, goal: { x: length - 3, z: 0 }, bossHp: 0,
  };
}

// ===================== BOSS LEVEL =====================
function genBoss(n: number, theme: Theme): Level3 {
  const S = 9; // arena half-size
  const boxes: Box[] = [
    { cx: S - 2, cy: -0.5, cz: 0, hx: S, hy: 0.5, hz: S, kind: 'ground' },
    // walls
    { cx: S - 2, cy: 1, cz: S, hx: S, hy: 1.5, hz: 0.5, kind: 'wall' },
    { cx: S - 2, cy: 1, cz: -S, hx: S, hy: 1.5, hz: 0.5, kind: 'wall' },
    { cx: S - 2 - S, cy: 1, cz: 0, hx: 0.5, hy: 1.5, hz: S, kind: 'wall' },
    { cx: S - 2 + S, cy: 1, cz: 0, hx: 0.5, hy: 1.5, hz: S, kind: 'wall' },
  ];
  return {
    num: n, name: `Guarida de Norberto ${n / 5}`, boss: true, length: 2 * S, theme,
    boxes, crates: [], enemies: [], checkpoints: [],
    fruits: [], masks: [{ x: S - 2, y: 1.6, z: 0 }],
    spawn: { x: 0, y: PLAYER_HY, z: 0 }, goal: { x: 9999, z: 0 }, bossHp: n >= 15 ? 3 : 2,
  };
}

export function genLevel(n: number): Level3 {
  return n % 5 === 0 ? genBoss(n, THEME_LAB) : genNormal(n, themeFor(n, false));
}
