// Block catalog + procedurally drawn 16×16 "pixel-art" textures.
//
// Every block face is painted onto a tiny canvas (Minecraft's textures are 16px)
// and sampled with NearestFilter, so the world keeps that crisp, blocky look no
// matter how close the camera gets. Nothing is loaded from disk — the whole
// texture atlas is generated in code at startup.

import * as THREE from 'three';

export type BlockType =
  | 'grass'
  | 'dirt'
  | 'stone'
  | 'cobblestone'
  | 'mossy_cobblestone'
  | 'sand'
  | 'snow'
  | 'oak_log'
  | 'oak_planks'
  | 'leaves'
  | 'bookshelf'
  | 'crafting_table'
  | 'furnace'
  | 'brick'
  | 'glass'
  | 'diamond_block'
  | 'gold_block'
  | 'iron_block'
  | 'emerald_block'
  | 'redstone_block'
  | 'lapis_block'
  | 'obsidian'
  | 'bedrock'
  | 'glowstone'
  | 'torch'
  | 'tnt'
  | 'bed'
  | 'pumpkin'
  | 'sponge'
  | 'wool_white'
  | 'wool_red'
  | 'wool_blue'
  | 'wool_green'
  | 'wool_yellow'
  | 'wool_black'
  // ── Mod blocks ──
  | 'steel_block'
  | 'security_camera'
  | 'laser_block'
  | 'slime_block'
  | 'ice_block'
  | 'neon_block'
  | 'cloud_block'
  | 'ironman_block'
  | 'cap_block'
  | 'hulk_block'
  | 'thor_block'
  | 'coal_ore'
  | 'iron_ore'
  | 'gold_ore'
  | 'diamond_ore'
  | 'emerald_ore'
  | 'rose_block'
  | 'lamp_block'
  | 'mushroom_block'
  | 'hay_block'
  | 'nuke_block'
  | 'dynamite_block'
  | 'netherrack'
  | 'soul_sand'
  | 'lava_block'
  | 'quartz_block'
  | 'rainbow_block'
  | 'magenta_glass';

interface BlockDef {
  label: string;
  top: HTMLCanvasElement;
  bottom: HTMLCanvasElement;
  side: HTMLCanvasElement;
  /** See-through (alpha-cutout) — its faces are never culled by neighbours. */
  transparent?: boolean;
  /** Semi-transparent (slime, ice) — 0..1 opacity. */
  opacity?: number;
  /** Self-illuminated (glowstone, torch, neon…). */
  emissive?: string;
  emissiveIntensity?: number;
  /** Can never be broken or destroyed by explosions (bedrock). */
  unbreakable?: boolean;
  /** Launches the player upward on landing (slime). */
  bouncy?: boolean;
  /** Low friction — you slide across it (ice). */
  slippery?: boolean;
}

/** Blocks you can see through. */
export const TRANSPARENT = new Set<BlockType>(['glass', 'slime_block', 'ice_block', 'magenta_glass']);

// ─────────────────────────────────────────────────────────────────────────────
// Pixel painting helpers
// ─────────────────────────────────────────────────────────────────────────────

const S = 16;

function paint(draw: (ctx: CanvasRenderingContext2D) => void): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = S;
  c.height = S;
  const ctx = c.getContext('2d')!;
  draw(ctx);
  return c;
}

const px = (ctx: CanvasRenderingContext2D, x: number, y: number, color: string) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
};

const fill = (ctx: CanvasRenderingContext2D, color: string) => {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, S, S);
};

function speckle(ctx: CanvasRenderingContext2D, shades: string[], density = 0.45) {
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      if (Math.random() < density) px(ctx, x, y, shades[(Math.random() * shades.length) | 0]);
    }
  }
}

/** Draw a 5×5 pixel glyph (used for the "TNT" lettering). */
function glyph(ctx: CanvasRenderingContext2D, rows: number[], ox: number, oy: number, color: string) {
  for (let y = 0; y < rows.length; y++) {
    for (let x = 0; x < 5; x++) {
      if ((rows[y] >> (4 - x)) & 1) px(ctx, ox + x, oy + y, color);
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Reusable texture recipes
// ─────────────────────────────────────────────────────────────────────────────

/** A smooth metal block: framed, with a highlight corner and shaded corner. */
function metalBlock(base: string, light: string, dark: string) {
  return paint((ctx) => {
    fill(ctx, base);
    speckle(ctx, [light, base, dark], 0.3);
    ctx.fillStyle = light; // top + left highlight
    ctx.fillRect(0, 0, S, 1);
    ctx.fillRect(0, 0, 1, S);
    ctx.fillStyle = dark; // bottom + right shadow
    ctx.fillRect(0, S - 1, S, 1);
    ctx.fillRect(S - 1, 0, 1, S);
    ctx.fillStyle = light;
    ctx.fillRect(3, 3, 4, 4); // glint
  });
}

/** A gem/mineral block: framed body scattered with little cut gems. */
function gemBlock(base: string, frame: string, gem: string, gemLight: string) {
  return paint((ctx) => {
    fill(ctx, base);
    speckle(ctx, [base, gem], 0.18);
    ctx.fillStyle = frame;
    ctx.fillRect(0, 0, S, 1);
    ctx.fillRect(0, S - 1, S, 1);
    ctx.fillRect(0, 0, 1, S);
    ctx.fillRect(S - 1, 0, 1, S);
    const cut = (cx: number, cy: number) => {
      px(ctx, cx, cy - 1, gemLight);
      px(ctx, cx - 1, cy, gemLight);
      px(ctx, cx + 1, cy, gem);
      px(ctx, cx, cy + 1, gem);
      px(ctx, cx, cy, '#ffffff');
      px(ctx, cx, cy - 2, frame);
    };
    cut(4, 5);
    cut(11, 4);
    cut(8, 9);
    cut(4, 12);
    cut(12, 12);
  });
}

function wool(base: string, dark: string) {
  return paint((ctx) => {
    fill(ctx, base);
    speckle(ctx, [base, dark], 0.35);
    ctx.fillStyle = dark; // faint woven weave
    for (let y = 1; y < S; y += 4) ctx.fillRect(0, y, S, 1);
    for (let x = 2; x < S; x += 4) ctx.fillRect(x, 0, 1, S);
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Individual textures
// ─────────────────────────────────────────────────────────────────────────────

const grassTop = paint((ctx) => {
  fill(ctx, '#5d9e3f');
  speckle(ctx, ['#54923a', '#69ab48', '#4f8a35', '#62a544'], 0.55);
});

const dirt = paint((ctx) => {
  fill(ctx, '#8a6843');
  speckle(ctx, ['#7d5d3a', '#95734c', '#74552f', '#83613e'], 0.5);
});

const grassSide = paint((ctx) => {
  fill(ctx, '#8a6843');
  speckle(ctx, ['#7d5d3a', '#95734c', '#74552f'], 0.45);
  for (let x = 0; x < S; x++) {
    const lip = 3 + ((Math.random() * 2) | 0);
    for (let y = 0; y < lip; y++) px(ctx, x, y, ['#5d9e3f', '#54923a', '#69ab48'][(Math.random() * 3) | 0]);
  }
});

const stone = paint((ctx) => {
  fill(ctx, '#8c8c8c');
  speckle(ctx, ['#828282', '#979797', '#7a7a7a', '#8f8f8f'], 0.5);
});

const cobblestone = paint((ctx) => {
  fill(ctx, '#7f7f7f');
  const cobbles: [number, number, number, number][] = [
    [1, 1, 5, 4], [8, 1, 6, 5], [1, 6, 4, 5], [6, 7, 4, 4],
    [11, 7, 4, 6], [1, 12, 5, 3], [7, 12, 3, 3]
  ];
  for (const [x, y, w, h] of cobbles) {
    ctx.fillStyle = ['#9a9a9a', '#909090', '#a2a2a2'][(Math.random() * 3) | 0];
    ctx.fillRect(x, y, w, h);
  }
  speckle(ctx, ['#6e6e6e', '#5f5f5f'], 0.18);
});

const mossyCobble = paint((ctx) => {
  fill(ctx, '#7f7f7f');
  const cobbles: [number, number, number, number][] = [[1, 1, 5, 4], [8, 1, 6, 5], [1, 6, 4, 5], [6, 7, 4, 4], [11, 7, 4, 6]];
  for (const [x, y, w, h] of cobbles) {
    ctx.fillStyle = ['#9a9a9a', '#909090'][(Math.random() * 2) | 0];
    ctx.fillRect(x, y, w, h);
  }
  speckle(ctx, ['#5f7d3f', '#4d6b32', '#6e6e6e'], 0.32); // moss
});

const sand = paint((ctx) => {
  fill(ctx, '#dcd29a');
  speckle(ctx, ['#d3c88d', '#e4dba8', '#cabd80'], 0.5);
});

const snow = paint((ctx) => {
  fill(ctx, '#f3f8ff');
  speckle(ctx, ['#e6eefb', '#ffffff', '#dde8f7'], 0.4);
});

const oakLogSide = paint((ctx) => {
  for (let x = 0; x < S; x++) {
    ctx.fillStyle = ['#6e5230', '#5b4426', '#7a5d36', '#634a2b'][(Math.random() * 4) | 0];
    ctx.fillRect(x, 0, 1, S);
  }
  for (let i = 0; i < 30; i++) px(ctx, (Math.random() * S) | 0, (Math.random() * S) | 0, '#4d3a20');
  ctx.fillStyle = '#4d3a20';
  ctx.fillRect(0, 0, S, 1);
  ctx.fillRect(0, S - 1, S, 1);
});

const oakLogTop = paint((ctx) => {
  fill(ctx, '#b08a4f');
  for (const [r, color] of [[6, '#9c7740'], [4, '#a8824a'], [2, '#8a6736']] as [number, string][]) {
    ctx.strokeStyle = color;
    ctx.strokeRect(8 - r, 8 - r, r * 2, r * 2);
  }
  px(ctx, 7, 7, '#7c5d31');
  px(ctx, 8, 8, '#7c5d31');
});

const oakPlanks = paint((ctx) => {
  fill(ctx, '#b08a4f');
  speckle(ctx, ['#a8824a', '#b88f55', '#9c7740'], 0.3);
  ctx.fillStyle = '#7c5d31';
  for (let y = 3; y < S; y += 4) ctx.fillRect(0, y, S, 1);
  for (const [x, y] of [[7, 0], [3, 4], [11, 4], [5, 8], [12, 8], [8, 12]] as [number, number][]) ctx.fillRect(x, y, 1, 3);
});

const leaves = paint((ctx) => {
  fill(ctx, '#3f7a32');
  speckle(ctx, ['#356b2a', '#4a8c3a', '#2f5f25', '#449235'], 0.7);
  for (let i = 0; i < 10; i++) px(ctx, (Math.random() * S) | 0, (Math.random() * S) | 0, '#274d1f');
});

const bookshelfSide = paint((ctx) => {
  fill(ctx, '#b08a4f');
  ctx.fillStyle = '#7c5d31'; // wood frame top & bottom
  ctx.fillRect(0, 0, S, 2);
  ctx.fillRect(0, 14, S, 2);
  const spines = ['#b6443a', '#3f7ab6', '#5fae46', '#d6a738', '#8a4fb6', '#c96a2f'];
  let x = 1;
  while (x < 15) {
    const w = 1 + ((Math.random() * 2) | 0);
    ctx.fillStyle = spines[(Math.random() * spines.length) | 0];
    ctx.fillRect(x, 3, w, 10);
    px(ctx, x, 3, '#2a2a2a');
    x += w + 1;
  }
});

const craftingTop = paint((ctx) => {
  fill(ctx, '#b08a4f');
  ctx.fillStyle = '#7c5d31';
  for (let i = 0; i <= S; i += 5) {
    ctx.fillRect(i === S ? S - 1 : i, 0, 1, S);
    ctx.fillRect(0, i === S ? S - 1 : i, S, 1);
  }
  ctx.fillStyle = '#5f4727';
  ctx.fillRect(6, 6, 4, 4);
});

const craftingSide = paint((ctx) => {
  fill(ctx, '#b08a4f');
  speckle(ctx, ['#a8824a', '#9c7740'], 0.25);
  ctx.fillStyle = '#7c5d31';
  ctx.fillRect(2, 3, 5, 1);
  ctx.fillRect(4, 3, 1, 6); // a little "saw" mark
  ctx.fillRect(9, 8, 5, 1);
});

const furnaceSide = paint((ctx) => {
  fill(ctx, '#7c7c7c');
  speckle(ctx, ['#727272', '#868686', '#6a6a6a'], 0.45);
});

const furnaceFront = paint((ctx) => {
  fill(ctx, '#7c7c7c');
  speckle(ctx, ['#727272', '#868686'], 0.3);
  ctx.fillStyle = '#2b2b2b'; // dark mouth
  ctx.fillRect(3, 6, 10, 7);
  ctx.fillStyle = '#5a3320'; // grate glow hint
  ctx.fillRect(5, 10, 2, 2);
  ctx.fillRect(9, 10, 2, 2);
});

const brick = paint((ctx) => {
  fill(ctx, '#9c4a36');
  ctx.fillStyle = '#b6b0a6';
  for (let y = 3; y < S; y += 4) ctx.fillRect(0, y, S, 1);
  for (let y = 0; y < S; y += 4) {
    const off = (y / 4) % 2 === 0 ? 0 : 8;
    ctx.fillRect((off + 7) % S, y, 1, 4);
    ctx.fillRect((off + 15) % S, y, 1, 4);
  }
  speckle(ctx, ['#923f2e', '#a85540'], 0.18);
});

const glass = paint((ctx) => {
  ctx.clearRect(0, 0, S, S);
  ctx.strokeStyle = '#cfeefe';
  ctx.strokeRect(0.5, 0.5, S - 1, S - 1);
  ctx.fillStyle = 'rgba(255,255,255,0.55)';
  for (let i = 0; i < 3; i++) ctx.fillRect(3 + i, 3 + i, 1, 1);
  ctx.fillStyle = 'rgba(207,238,254,0.18)';
  ctx.fillRect(1, 1, S - 2, S - 2);
});

const obsidian = paint((ctx) => {
  fill(ctx, '#120a1f');
  speckle(ctx, ['#3a2357', '#281a3d', '#0d0716', '#4a2f6e'], 0.4);
});

const bedrock = paint((ctx) => {
  fill(ctx, '#555555');
  const blocks: [number, number, number, number][] = [
    [0, 0, 6, 5], [7, 1, 5, 4], [12, 0, 4, 6], [1, 6, 4, 5],
    [6, 6, 5, 6], [12, 7, 4, 5], [0, 12, 6, 4], [11, 12, 5, 4]
  ];
  for (const [x, y, w, h] of blocks) {
    ctx.fillStyle = ['#3f3f3f', '#6a6a6a', '#4a4a4a', '#5f5f5f'][(Math.random() * 4) | 0];
    ctx.fillRect(x, y, w, h);
  }
});

const glowstone = paint((ctx) => {
  fill(ctx, '#f6d98a');
  speckle(ctx, ['#fff3c0', '#e7c266', '#ffe9a0'], 0.5);
  for (const [x, y] of [[3, 4], [10, 3], [6, 9], [12, 11], [2, 12]] as [number, number][]) {
    ctx.fillStyle = '#c9a347';
    ctx.fillRect(x, y, 2, 2);
    px(ctx, x, y, '#fff8d6');
  }
});

const torchTex = paint((ctx) => {
  fill(ctx, '#241c12');
  ctx.fillStyle = '#7a5a2e'; // stick
  ctx.fillRect(7, 6, 2, 9);
  ctx.fillStyle = '#ffd24a'; // flame
  ctx.fillRect(6, 2, 4, 4);
  ctx.fillStyle = '#ff8c2a';
  ctx.fillRect(7, 1, 2, 2);
  px(ctx, 7, 3, '#fff3b0');
});

const tntSide = paint((ctx) => {
  fill(ctx, '#b1351f');
  speckle(ctx, ['#a52f1b', '#bf3b22'], 0.18);
  ctx.fillStyle = '#7a2415'; // top & bottom dark stripes
  ctx.fillRect(0, 0, S, 2);
  ctx.fillRect(0, 14, S, 2);
  ctx.fillStyle = '#efe9df'; // white label band
  ctx.fillRect(0, 5, S, 7);
  // T N T
  glyph(ctx, [0b11111, 0b00100, 0b00100, 0b00100, 0b00100], 0, 6, '#b1351f');
  glyph(ctx, [0b10001, 0b11001, 0b10101, 0b10011, 0b10001], 6, 6, '#b1351f');
  glyph(ctx, [0b11111, 0b00100, 0b00100, 0b00100, 0b00100], 11, 6, '#b1351f');
});

const tntTop = paint((ctx) => {
  fill(ctx, '#8f8f8f');
  speckle(ctx, ['#828282', '#9a9a9a'], 0.35);
  ctx.fillStyle = '#3a2c1c'; // fuse hole
  ctx.beginPath();
  ctx.arc(8, 8, 2.5, 0, Math.PI * 2);
  ctx.fill();
  px(ctx, 8, 8, '#1f1710');
});

const bedTop = paint((ctx) => {
  fill(ctx, '#c0392b'); // blanket
  speckle(ctx, ['#b1331f', '#cf432f'], 0.2);
  ctx.fillStyle = '#f4f1ea'; // pillow
  ctx.fillRect(1, 1, S - 2, 4);
  ctx.fillStyle = '#7c5d31'; // wood edge
  ctx.fillRect(0, S - 1, S, 1);
});

const bedSide = paint((ctx) => {
  fill(ctx, '#7c5d31'); // wood base
  ctx.fillStyle = '#c0392b'; // mattress on top
  ctx.fillRect(0, 0, S, 9);
  ctx.fillStyle = '#f4f1ea'; // pillow corner
  ctx.fillRect(0, 0, 5, 4);
  speckle(ctx, ['#6e5230'], 0.12);
});

const pumpkinSide = paint((ctx) => {
  fill(ctx, '#e08a26');
  ctx.fillStyle = '#c0721c'; // vertical ridges
  for (let x = 2; x < S; x += 4) ctx.fillRect(x, 0, 1, S);
  // carved jack-o'-lantern face
  ctx.fillStyle = '#3a2410';
  ctx.fillRect(3, 4, 3, 2); // left eye
  ctx.fillRect(10, 4, 3, 2); // right eye
  ctx.fillRect(4, 9, 8, 2); // mouth
  px(ctx, 6, 11, '#3a2410');
  px(ctx, 9, 11, '#3a2410');
});

const pumpkinTop = paint((ctx) => {
  fill(ctx, '#d98220');
  ctx.fillStyle = '#c0721c';
  for (let x = 2; x < S; x += 4) ctx.fillRect(x, 0, 1, S);
  ctx.fillStyle = '#5f7d2e'; // stem
  ctx.fillRect(7, 6, 3, 3);
});

const sponge = paint((ctx) => {
  fill(ctx, '#c9b54e');
  speckle(ctx, ['#bda743', '#d6c45e'], 0.5);
  for (let i = 0; i < 16; i++) px(ctx, (Math.random() * S) | 0, (Math.random() * S) | 0, '#9c8a37');
});

// ─────────────────────────────────────────────────────────────────────────────
// Mod-block textures
// ─────────────────────────────────────────────────────────────────────────────

/** Solid colour with optional grain + an optional custom overlay pass. */
function solid(base: string, shades: string[] = [], density = 0.4, over?: (ctx: CanvasRenderingContext2D) => void) {
  return paint((ctx) => {
    fill(ctx, base);
    if (shades.length) speckle(ctx, shades, density);
    over?.(ctx);
  });
}

/** Stone shot through with a coloured ore vein. */
function oreTex(vein: string, veinLight: string) {
  return paint((ctx) => {
    fill(ctx, '#8c8c8c');
    speckle(ctx, ['#828282', '#979797', '#7a7a7a'], 0.5);
    for (const [x, y] of [[3, 4], [10, 3], [5, 10], [12, 11], [7, 7]] as [number, number][]) {
      ctx.fillStyle = vein;
      ctx.fillRect(x, y, 2, 2);
      px(ctx, x, y, veinLight);
      px(ctx, x + 1, y + 1, veinLight);
    }
  });
}

const steelTex = metalBlock('#9aa6b2', '#c4ccd6', '#6f7a86');

const cameraTex = solid('#3a3f44', ['#33373c', '#42474d'], 0.3, (ctx) => {
  ctx.fillStyle = '#16181a';
  ctx.beginPath();
  ctx.arc(8, 9, 4, 0, 7);
  ctx.fill();
  ctx.fillStyle = '#0a0a0a';
  ctx.beginPath();
  ctx.arc(8, 9, 2, 0, 7);
  ctx.fill();
  px(ctx, 7, 8, '#5fd0ff');
  ctx.fillStyle = '#ff3b3b';
  ctx.fillRect(12, 2, 2, 2);
});

const laserTex = solid('#2a0d0d', ['#3a1414'], 0.3, (ctx) => {
  ctx.fillStyle = '#ff2e2e';
  for (let i = 2; i < S; i += 4) {
    ctx.fillRect(0, i, S, 1);
    ctx.fillRect(i, 0, 1, S);
  }
});

const slimeTex = solid('#6fce5a', ['#5fbf4d', '#7fd96a'], 0.3, (ctx) => {
  ctx.strokeStyle = '#4fae3f';
  ctx.strokeRect(2.5, 2.5, 11, 11);
  ctx.strokeRect(5.5, 5.5, 5, 5);
});

const iceTex = solid('#a9d6f5', ['#bfe2fb', '#92c4ec'], 0.3, (ctx) => {
  ctx.strokeStyle = '#7fb6e0';
  ctx.beginPath();
  ctx.moveTo(2, 3);
  ctx.lineTo(7, 8);
  ctx.lineTo(5, 13);
  ctx.moveTo(11, 2);
  ctx.lineTo(9, 9);
  ctx.lineTo(13, 14);
  ctx.stroke();
});

const neonTex = solid('#ff2ec4', ['#ff5cd0', '#d61fa6'], 0.3);
const cloudTex = solid('#f2f6ff', ['#e6ecfb', '#ffffff'], 0.5);

const ironmanTex = solid('#b21f1f', ['#9c1a1a'], 0.25, (ctx) => {
  ctx.fillStyle = '#f4d03f';
  ctx.fillRect(0, 0, S, 2);
  ctx.fillRect(0, 14, S, 2);
  ctx.fillRect(2, 7, 12, 2);
  ctx.fillStyle = '#bff7ff';
  ctx.beginPath();
  ctx.arc(8, 8, 2.6, 0, 7);
  ctx.fill();
  px(ctx, 8, 8, '#ffffff');
});

const capTex = solid('#2f6fd0', ['#2356a8'], 0.25, (ctx) => {
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.moveTo(8, 2);
  ctx.lineTo(12, 7);
  ctx.lineTo(8, 12);
  ctx.lineTo(4, 7);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = '#c0392b';
  ctx.fillRect(0, 13, S, 3);
});

const hulkTex = solid('#4caf50', ['#3c9140', '#5fbf52', '#2f7d33'], 0.55);

const thorTex = solid('#9aa6b2', ['#c4ccd6', '#6f7a86'], 0.3, (ctx) => {
  ctx.fillStyle = '#3a6bd6';
  ctx.fillRect(5, 2, 6, 4);
  ctx.fillRect(7, 6, 2, 8);
});

const coalOre = oreTex('#2b2b2b', '#444444');
const ironOre = oreTex('#c9a27a', '#e0c4a0');
const goldOre = oreTex('#f4d03f', '#fff0a0');
const diamondOre = oreTex('#6fdedb', '#bff7f4');
const emeraldOre = oreTex('#2fae57', '#7fe6a0');

const roseTex = solid('#5d9e3f', ['#54923a', '#69ab48'], 0.45, (ctx) => {
  ctx.fillStyle = '#2f7d33';
  ctx.fillRect(7, 8, 1, 6);
  ctx.fillStyle = '#c0392b';
  ctx.fillRect(6, 4, 4, 4);
  px(ctx, 7, 5, '#ffd24a');
});

const lampTex = solid('#ffd98a', ['#ffe9a0', '#e7c266'], 0.4, (ctx) => {
  ctx.strokeStyle = '#b8862f';
  ctx.strokeRect(0.5, 0.5, 15, 15);
  ctx.strokeRect(4.5, 4.5, 7, 7);
});

const mushroomTex = solid('#c0392b', ['#a52f22'], 0.2, (ctx) => {
  ctx.fillStyle = '#f4f1ea';
  for (const [x, y] of [[2, 2], [8, 3], [12, 6], [4, 9], [10, 11], [6, 13]] as [number, number][]) ctx.fillRect(x, y, 3, 3);
});

const hayTex = solid('#d9b53b', ['#c9a52f', '#e6c455'], 0.4, (ctx) => {
  ctx.fillStyle = '#9c7f24';
  for (let y = 2; y < S; y += 4) ctx.fillRect(0, y, S, 1);
  ctx.fillRect(0, 0, S, 2);
  ctx.fillRect(0, 14, S, 2);
});

const nukeTex = solid('#9be000', ['#8ad000', '#aef21a'], 0.3, (ctx) => {
  ctx.fillStyle = '#111111';
  ctx.beginPath();
  ctx.arc(8, 8, 2, 0, 7);
  ctx.fill();
  for (const a of [-Math.PI / 2, Math.PI / 6, (Math.PI * 5) / 6]) {
    ctx.beginPath();
    ctx.moveTo(8, 8);
    ctx.arc(8, 8, 6, a - 0.5, a + 0.5);
    ctx.closePath();
    ctx.fill();
  }
});

const dynamiteTex = solid('#b1351f', ['#a52f1b'], 0.2, (ctx) => {
  ctx.fillStyle = '#7a2415';
  for (let x = 2; x < S; x += 5) ctx.fillRect(x, 2, 3, 12);
  ctx.fillStyle = '#3a2c1c';
  ctx.fillRect(0, 0, S, 2);
  px(ctx, 4, 1, '#ffd24a');
});

const netherrackTex = solid('#5a1f1f', ['#4a1818', '#6e2626', '#3a1212'], 0.55);

const soulSandTex = solid('#5a4632', ['#4a3a2a', '#6a5440'], 0.4, (ctx) => {
  ctx.fillStyle = '#2f241a';
  ctx.beginPath();
  ctx.arc(5, 6, 2, 0, 7);
  ctx.arc(11, 9, 2, 0, 7);
  ctx.fill();
});

const lavaTex = solid('#ff7a1a', ['#ff9a3a', '#e0560a'], 0.4, (ctx) => {
  ctx.fillStyle = '#b33a08';
  for (const [x, y] of [[3, 3], [9, 5], [6, 10], [12, 11]] as [number, number][]) ctx.fillRect(x, y, 3, 2);
});

const quartzTex = solid('#ece7df', ['#f5f1ea', '#ddd6cb'], 0.35);

const rainbowTex = solid('#f0f0f0', ['#e4e4e4', '#fafafa'], 0.3, (ctx) => {
  ctx.strokeStyle = '#d0d0d0';
  ctx.strokeRect(0.5, 0.5, 15, 15);
});

const magentaGlass = paint((ctx) => {
  ctx.clearRect(0, 0, S, S);
  ctx.strokeStyle = '#ff7ae0';
  ctx.strokeRect(0.5, 0.5, S - 1, S - 1);
  ctx.fillStyle = 'rgba(255,46,196,0.25)';
  ctx.fillRect(1, 1, S - 2, S - 2);
});

const all = (c: HTMLCanvasElement) => ({ top: c, bottom: c, side: c });

// ─────────────────────────────────────────────────────────────────────────────
// The catalog (insertion order = hotbar/gallery order)
// ─────────────────────────────────────────────────────────────────────────────

export const BLOCKS: Record<BlockType, BlockDef> = {
  grass: { label: 'Grass', top: grassTop, bottom: dirt, side: grassSide },
  dirt: { label: 'Dirt', ...all(dirt) },
  stone: { label: 'Stone', ...all(stone) },
  cobblestone: { label: 'Cobblestone', ...all(cobblestone) },
  mossy_cobblestone: { label: 'Mossy Cobble', ...all(mossyCobble) },
  sand: { label: 'Sand', ...all(sand) },
  snow: { label: 'Snow', ...all(snow) },
  oak_log: { label: 'Oak Wood', top: oakLogTop, bottom: oakLogTop, side: oakLogSide },
  oak_planks: { label: 'Oak Planks', ...all(oakPlanks) },
  leaves: { label: 'Oak Leaves', ...all(leaves) },
  bookshelf: { label: 'Bookshelf', top: oakPlanks, bottom: oakPlanks, side: bookshelfSide },
  crafting_table: { label: 'Crafting Table', top: craftingTop, bottom: oakPlanks, side: craftingSide },
  furnace: { label: 'Furnace', top: furnaceSide, bottom: furnaceSide, side: furnaceFront },
  brick: { label: 'Bricks', ...all(brick) },
  glass: { label: 'Glass', ...all(glass), transparent: true },
  diamond_block: { label: 'Diamond Block', ...all(gemBlock('#6fdedb', '#3f9d9a', '#7fdedb', '#eaffff')) },
  gold_block: { label: 'Gold Block', ...all(metalBlock('#f4d03f', '#fff0a0', '#c79a1e')) },
  iron_block: { label: 'Iron Block', ...all(metalBlock('#d8d8d8', '#f4f4f4', '#a8a8a8')) },
  emerald_block: { label: 'Emerald Block', ...all(gemBlock('#2fae57', '#1d7d3c', '#43c96d', '#d6ffe6')) },
  redstone_block: { label: 'Redstone Block', ...all(gemBlock('#a51d12', '#6e120a', '#d6362a', '#ffd0c0')) },
  lapis_block: { label: 'Lapis Block', ...all(gemBlock('#1f49a8', '#143173', '#3a6bd6', '#cfe0ff')) },
  obsidian: { label: 'Obsidian', ...all(obsidian) },
  bedrock: { label: 'Bedrock', ...all(bedrock), unbreakable: true },
  glowstone: { label: 'Glowstone', ...all(glowstone), emissive: '#ffe08a', emissiveIntensity: 0.9 },
  torch: { label: 'Torch', ...all(torchTex), emissive: '#ffb24a', emissiveIntensity: 1.0 },
  tnt: { label: 'TNT', top: tntTop, bottom: tntTop, side: tntSide },
  bed: { label: 'Bed', top: bedTop, bottom: oakPlanks, side: bedSide },
  pumpkin: { label: 'Pumpkin', top: pumpkinTop, bottom: pumpkinTop, side: pumpkinSide },
  sponge: { label: 'Sponge', ...all(sponge) },
  wool_white: { label: 'White Wool', ...all(wool('#e9ecef', '#cfd4da')) },
  wool_red: { label: 'Red Wool', ...all(wool('#c0392b', '#9c2d22')) },
  wool_blue: { label: 'Blue Wool', ...all(wool('#2f6fd0', '#2356a8')) },
  wool_green: { label: 'Green Wool', ...all(wool('#4caf50', '#3c9140')) },
  wool_yellow: { label: 'Yellow Wool', ...all(wool('#f4d03f', '#d4af1e')) },
  wool_black: { label: 'Black Wool', ...all(wool('#3a3f44', '#26292d')) },

  // ── Security ──
  steel_block: { label: 'Steel Block', ...all(steelTex) },
  security_camera: { label: 'Security Cam', ...all(cameraTex) },
  laser_block: { label: 'Laser Block', ...all(laserTex), emissive: '#ff2e2e', emissiveIntensity: 0.8 },
  // ── Special Blocks ──
  slime_block: { label: 'Slime Block', ...all(slimeTex), opacity: 0.82, bouncy: true },
  ice_block: { label: 'Ice', ...all(iceTex), opacity: 0.72, slippery: true },
  neon_block: { label: 'Neon Block', ...all(neonTex), emissive: '#ff2ec4', emissiveIntensity: 0.7 },
  cloud_block: { label: 'Cloud', ...all(cloudTex) },
  // ── Super Heroes ──
  ironman_block: { label: 'Iron Man Block', ...all(ironmanTex) },
  cap_block: { label: 'Captain Block', ...all(capTex) },
  hulk_block: { label: 'Hulk Block', ...all(hulkTex) },
  thor_block: { label: 'Thor Block', ...all(thorTex) },
  // ── More Ores ──
  coal_ore: { label: 'Coal Ore', ...all(coalOre) },
  iron_ore: { label: 'Iron Ore', ...all(ironOre) },
  gold_ore: { label: 'Gold Ore', ...all(goldOre) },
  diamond_ore: { label: 'Diamond Ore', ...all(diamondOre) },
  emerald_ore: { label: 'Emerald Ore', ...all(emeraldOre) },
  // ── Decorations ──
  rose_block: { label: 'Rose', ...all(roseTex) },
  lamp_block: { label: 'Lamp', ...all(lampTex), emissive: '#ffd98a', emissiveIntensity: 0.9 },
  mushroom_block: { label: 'Mushroom', ...all(mushroomTex) },
  hay_block: { label: 'Hay Bale', ...all(hayTex) },
  // ── Mega Explosives ──
  nuke_block: { label: 'Nuke', ...all(nukeTex), emissive: '#aef21a', emissiveIntensity: 0.6 },
  dynamite_block: { label: 'Dynamite', ...all(dynamiteTex) },
  // ── Nether ──
  netherrack: { label: 'Netherrack', ...all(netherrackTex) },
  soul_sand: { label: 'Soul Sand', ...all(soulSandTex) },
  lava_block: { label: 'Lava', ...all(lavaTex), emissive: '#ff6a10', emissiveIntensity: 0.8 },
  quartz_block: { label: 'Quartz', ...all(quartzTex) },
  // ── Rainbow ──
  rainbow_block: { label: 'Rainbow Block', ...all(rainbowTex) },
  magenta_glass: { label: 'Magenta Glass', ...all(magentaGlass), transparent: true }
};

export const BLOCK_TYPES = Object.keys(BLOCKS) as BlockType[];

// ─────────────────────────────────────────────────────────────────────────────
// Textures + materials (cached)
// ─────────────────────────────────────────────────────────────────────────────

const textureByCanvas = new Map<HTMLCanvasElement, THREE.Texture>();

function textureFor(canvas: HTMLCanvasElement): THREE.Texture {
  let t = textureByCanvas.get(canvas);
  if (!t) {
    t = new THREE.CanvasTexture(canvas);
    t.magFilter = THREE.NearestFilter;
    t.minFilter = THREE.NearestMipmapNearestFilter;
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    textureByCanvas.set(canvas, t);
  }
  return t;
}

function makeMaterial(canvas: HTMLCanvasElement, def: BlockDef): THREE.Material {
  const map = textureFor(canvas);
  const translucent = def.opacity != null;
  const mat = new THREE.MeshLambertMaterial({
    map,
    transparent: def.transparent || translucent,
    opacity: def.opacity ?? 1,
    alphaTest: def.transparent && !translucent ? 0.1 : 0
  });
  if (def.emissive) {
    mat.emissive = new THREE.Color(def.emissive);
    mat.emissiveMap = map;
    mat.emissiveIntensity = def.emissiveIntensity ?? 1;
  }
  return mat;
}

const materialsByType = new Map<BlockType, THREE.Material[]>();

/** Six materials in BoxGeometry group order: +x, −x, +y(top), −y(bottom), +z, −z. */
export function getMaterials(type: BlockType): THREE.Material[] {
  let mats = materialsByType.get(type);
  if (!mats) {
    const def = BLOCKS[type];
    const side = makeMaterial(def.side, def);
    const top = makeMaterial(def.top, def);
    const bottom = makeMaterial(def.bottom, def);
    mats = [side, side, top, bottom, side, side];
    materialsByType.set(type, mats);
  }
  return mats;
}

const previews = new Map<BlockType, string>();
export function previewURL(type: BlockType): string {
  let url = previews.get(type);
  if (!url) {
    url = BLOCKS[type].side.toDataURL();
    previews.set(type, url);
  }
  return url;
}
