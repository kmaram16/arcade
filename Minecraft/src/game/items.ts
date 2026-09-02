// Items = tools you wield + every block you can place. Holds the registry the
// inventory/hotbar resolve against, the first-person hand models, and the helper
// that lists what's available given the enabled mods.

import * as THREE from 'three';
import { BlockType, BLOCK_TYPES, BLOCKS, getMaterials, previewURL } from './blocks';
import { MOD_BLOCKS, MOD_TOOLS, MODS } from './mods';

export type ToolKind = 'pickaxe' | 'sword' | 'axe' | 'shovel' | 'diamond_pickaxe' | 'diamond_sword' | 'hammer';

export interface Item {
  id: string;
  name: string;
  icon: string;
  block?: BlockType;
  tool?: ToolKind;
  /** Hammer breaks a 3×3 area. */
  areaBreak?: boolean;
}

// ── Tool icons (16×16 side-view pixel art) ───────────────────────────────────

function iconCanvas(draw: (ctx: CanvasRenderingContext2D) => void): string {
  const c = document.createElement('canvas');
  c.width = 16;
  c.height = 16;
  const ctx = c.getContext('2d')!;
  draw(ctx);
  return c.toDataURL();
}

const WOOD = '#7a5a2e';

function pickIcon(head: string): string {
  return iconCanvas((ctx) => {
    ctx.strokeStyle = head;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(2, 5);
    ctx.quadraticCurveTo(8, 1, 14, 5);
    ctx.stroke();
    ctx.fillStyle = WOOD;
    ctx.fillRect(7, 4, 2, 11);
  });
}
function swordIcon(blade: string): string {
  return iconCanvas((ctx) => {
    ctx.fillStyle = blade;
    ctx.fillRect(7, 1, 2, 9);
    ctx.fillStyle = '#9aa0a8';
    ctx.fillRect(6, 9, 4, 1);
    ctx.fillStyle = WOOD;
    ctx.fillRect(7, 10, 2, 4);
  });
}

const toolIcons: Record<ToolKind, string> = {
  pickaxe: pickIcon('#c2c6cc'),
  diamond_pickaxe: pickIcon('#6fdedb'),
  sword: swordIcon('#dfe3e8'),
  diamond_sword: swordIcon('#6fdedb'),
  axe: iconCanvas((ctx) => {
    ctx.fillStyle = '#c2c6cc';
    ctx.fillRect(7, 2, 6, 5);
    ctx.fillRect(6, 3, 1, 3);
    ctx.fillStyle = WOOD;
    ctx.fillRect(8, 4, 2, 11);
  }),
  shovel: iconCanvas((ctx) => {
    ctx.fillStyle = '#c2c6cc';
    ctx.fillRect(5, 2, 6, 5);
    ctx.fillStyle = WOOD;
    ctx.fillRect(7, 6, 2, 9);
  }),
  hammer: iconCanvas((ctx) => {
    ctx.fillStyle = '#9aa0a8';
    ctx.fillRect(3, 2, 10, 5);
    ctx.fillStyle = '#c2c6cc';
    ctx.fillRect(4, 3, 8, 2);
    ctx.fillStyle = WOOD;
    ctx.fillRect(7, 6, 2, 9);
  })
};

const TOOL_NAMES: Record<ToolKind, string> = {
  pickaxe: 'Pickaxe',
  sword: 'Sword',
  axe: 'Axe',
  shovel: 'Shovel',
  diamond_pickaxe: 'Diamond Pickaxe',
  diamond_sword: 'Diamond Sword',
  hammer: 'Hammer (3×3)'
};

function toolItem(kind: ToolKind): Item {
  return { id: kind, name: TOOL_NAMES[kind], tool: kind, icon: toolIcons[kind], areaBreak: kind === 'hammer' };
}
function blockItem(b: BlockType): Item {
  return { id: b, name: BLOCKS[b].label, block: b, icon: previewURL(b) };
}

// ── Registry of every possible item ──────────────────────────────────────────

const BASE_TOOLS: ToolKind[] = ['pickaxe', 'sword', 'axe', 'shovel'];

export const ITEM_REGISTRY = new Map<string, Item>();
for (const t of ['pickaxe', 'sword', 'axe', 'shovel', 'diamond_pickaxe', 'diamond_sword', 'hammer'] as ToolKind[]) {
  ITEM_REGISTRY.set(t, toolItem(t));
}
for (const b of BLOCK_TYPES) ITEM_REGISTRY.set(b, blockItem(b));

/** Block ids that only exist when their mod is enabled. */
const MODDED_BLOCKS = new Set<string>(Object.values(MOD_BLOCKS).flat());
const CORE_BLOCKS = BLOCK_TYPES.filter((b) => !MODDED_BLOCKS.has(b));

/** Everything the inventory should show for the given set of enabled mods. */
export function availableItems(mods: Set<string>): Item[] {
  const items: Item[] = [];
  for (const t of BASE_TOOLS) items.push(ITEM_REGISTRY.get(t)!);
  if (mods.has('tools')) for (const id of MOD_TOOLS.tools) items.push(ITEM_REGISTRY.get(id)!);
  for (const b of CORE_BLOCKS) items.push(ITEM_REGISTRY.get(b)!);
  for (const mod of MODS) {
    if (!mods.has(mod.id)) continue;
    for (const b of MOD_BLOCKS[mod.id] ?? []) items.push(ITEM_REGISTRY.get(b)!);
  }
  return items;
}

export const DEFAULT_HOTBAR: (string | null)[] = [
  'pickaxe',
  'sword',
  'tnt',
  'grass',
  'dirt',
  'stone',
  'oak_planks',
  'glass',
  'diamond_block'
];

// ── First-person held models ─────────────────────────────────────────────────

const heldBoxGeo = new THREE.BoxGeometry(1, 1, 1);

function bar(w: number, h: number, d: number, color: string, x = 0, y = 0, z = 0): THREE.Mesh {
  const mesh = new THREE.Mesh(heldBoxGeo, new THREE.MeshLambertMaterial({ color, depthTest: false }));
  mesh.scale.set(w, h, d);
  mesh.position.set(x, y, z);
  mesh.renderOrder = 999;
  return mesh;
}

function toolModel(kind: ToolKind): THREE.Group {
  const g = new THREE.Group();
  const metal = kind === 'diamond_pickaxe' || kind === 'diamond_sword' ? '#6fdedb' : '#b9bdc4';
  if (kind === 'pickaxe' || kind === 'diamond_pickaxe') {
    g.add(bar(0.07, 0.75, 0.07, '#7a5a2e'));
    g.add(bar(0.55, 0.12, 0.08, metal, 0, 0.34, 0));
    g.add(bar(0.12, 0.12, 0.08, '#9aa0a8', -0.27, 0.3, 0));
    g.add(bar(0.12, 0.12, 0.08, '#9aa0a8', 0.27, 0.3, 0));
  } else if (kind === 'sword' || kind === 'diamond_sword') {
    g.add(bar(0.07, 0.2, 0.07, '#5a3b22', 0, -0.22, 0));
    g.add(bar(0.26, 0.06, 0.07, '#8a6a3a', 0, -0.09, 0));
    g.add(bar(0.09, 0.62, 0.04, metal, 0, 0.24, 0));
  } else if (kind === 'axe') {
    g.add(bar(0.07, 0.75, 0.07, '#7a5a2e'));
    g.add(bar(0.24, 0.26, 0.08, '#b9bdc4', 0.14, 0.3, 0));
    g.add(bar(0.06, 0.26, 0.08, '#9aa0a8', 0.01, 0.3, 0));
  } else if (kind === 'hammer') {
    g.add(bar(0.07, 0.7, 0.07, '#7a5a2e'));
    g.add(bar(0.42, 0.26, 0.26, '#9aa0a8', 0, 0.34, 0));
    g.add(bar(0.44, 0.12, 0.28, '#c2c6cc', 0, 0.34, 0));
  } else {
    g.add(bar(0.07, 0.7, 0.07, '#7a5a2e'));
    g.add(bar(0.22, 0.24, 0.05, '#b9bdc4', 0, 0.42, 0));
  }
  return g;
}

/** Build the object held in the player's hand for a given item. */
export function buildHeldModel(item: Item): THREE.Object3D {
  if (item.tool) {
    const g = toolModel(item.tool);
    g.traverse((o) => (o.renderOrder = 999));
    return g;
  }
  const mats = getMaterials(item.block!).map((m) => {
    const c = m.clone();
    c.depthTest = false;
    return c;
  });
  const mesh = new THREE.Mesh(heldBoxGeo, mats);
  mesh.renderOrder = 999;
  const g = new THREE.Group();
  g.add(mesh);
  return g;
}
