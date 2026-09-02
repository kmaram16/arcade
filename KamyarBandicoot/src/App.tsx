import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import './App.css';
import {
  GRAVITY, MOVE_SPEED, JUMP_V, JUMP_CUT, MAX_FALL, SPIN_TIME, SPIN_CD, SPIN_R,
  PLAYER_HX, PLAYER_HY, PLAYER_HZ, TNT_FUSE, TNT_R, HIT_INVULN, MAX_LEVELS, FRUIT_FOR_LIFE,
  genLevel, type Level3, type Crate3, type Enemy3,
} from './game3d';

// ===================== save keys & types =====================
const NAMES_KEY = 'crash-names';
const SCORES_KEY = 'crash-best-by-user';
const PROG_KEY = 'crash-progress-by-user';
const START_LIVES = 4;
// 3rd-person orbit distance presets ("zoom"). Closer camera makes the character
// look bigger, so "muy grande" is the nearest and "muy pequeño" the farthest.
const CAM_ZOOMS = { muyGrande: 4.3, grande: 6.2, pequeno: 8.4, muyPequeno: 11.0 };
type CamZoom = keyof typeof CAM_ZOOMS;
const ZOOM_ORDER: CamZoom[] = ['muyPequeno', 'pequeno', 'grande', 'muyGrande'];
const ZOOM_LABEL: Record<CamZoom, string> = {
  muyPequeno: 'Muy pequeño', pequeno: 'Pequeño', grande: 'Grande', muyGrande: 'Muy grande',
};
const LOOK_SENS = 0.005; // mouse / touch drag sensitivity

type Status = 'menu' | 'playing' | 'dead' | 'clear' | 'victory';
type Character = 'kamyar' | 'martina';
type CamMode = 'third' | 'first';
type Scores = Record<string, number>;
type Progress = Record<string, number>;

type Player = {
  x: number; y: number; z: number; yaw: number; vy: number;
  onGround: boolean; spin: number; spinCd: number; coyote: number; jumpBuf: number; invuln: number;
};
type Boss = { x: number; z: number; y: number; vy: number; hp: number; maxHp: number; invuln: number; t: number; hopT: number };
type Bomb = { x: number; y: number; z: number; vx: number; vy: number; vz: number; mesh: THREE.Mesh };

const CHARS: Record<Character, { name: string; emoji: string; fur: number; furDark: number; belly: number; tuft: number }> = {
  kamyar: { name: 'Kamyar', emoji: '🐶', fur: 0xf97316, furDark: 0xc2410c, belly: 0xfed7aa, tuft: 0x7c2d12 },
  martina: { name: 'Martina', emoji: '🐬', fur: 0x5b9bd5, furDark: 0x2f6fb0, belly: 0xeaf4fb, tuft: 0x1e40af },
};

const CRATE_COLORS: Record<string, number> = {
  wood: 0xb07a43, fruit: 0xca8a3a, tnt: 0xdc2626, iron: 0x94a3b8, bounce: 0x22c55e, life: 0x10b981, check: 0xf59e0b,
};

// ===================== procedural textures (realism) =====================
// Tiny canvas textures give the flat-colored blocks and crates real surface
// detail — grass blades, soil grain, rock cracks, wood planks — instead of a
// solid fill. Bases are cached; per-mesh materials clone them so each block can
// tile the texture to its own size without sharing repeat settings.
const _texCache = new Map<string, THREE.CanvasTexture>();
const hexColor = (n: number) => '#' + (n & 0xffffff).toString(16).padStart(6, '0');
function tintRGB(n: number, amt: number): string {
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  const f = (v: number) => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
  return `rgb(${f(r)},${f(g)},${f(b)})`;
}
type TexKind = 'grass' | 'soil' | 'rock' | 'wood';
type TexPair = { map: THREE.CanvasTexture; normal: THREE.CanvasTexture };
const _pairCache = new Map<string, TexPair>();
// Builds a color texture AND a matching normal map. The normal map is derived
// from the color's luminance (Sobel), so the painted grain becomes real bumpy
// relief under the light — flat blocks gain genuine surface depth.
function terrainMaps(color: number, kind: TexKind): TexPair {
  const key = kind + ':' + color;
  const cached = _pairCache.get(key); if (cached) return cached;
  const S = 128;
  const cv = document.createElement('canvas'); cv.width = cv.height = S;
  const ctx = cv.getContext('2d')!;
  ctx.fillStyle = hexColor(color); ctx.fillRect(0, 0, S, S);
  // soft baked ambient occlusion — a dark vignette in a few clumps for depth
  if (kind === 'grass') {
    for (let i = 0; i < 2600; i++) {
      ctx.fillStyle = tintRGB(color, (Math.random() - 0.45) * 0.4);
      ctx.fillRect(Math.random() * S, Math.random() * S, 1, 1 + Math.random() * 3); // blades
    }
  } else if (kind === 'soil') {
    for (let i = 0; i < 1300; i++) {
      ctx.fillStyle = tintRGB(color, (Math.random() - 0.5) * 0.45);
      ctx.beginPath(); ctx.arc(Math.random() * S, Math.random() * S, 0.6 + Math.random() * 2.0, 0, Math.PI * 2); ctx.fill();
    }
  } else if (kind === 'rock') {
    for (let i = 0; i < 1000; i++) {
      ctx.fillStyle = tintRGB(color, (Math.random() - 0.5) * 0.55);
      ctx.beginPath(); ctx.arc(Math.random() * S, Math.random() * S, 1 + Math.random() * 3.4, 0, Math.PI * 2); ctx.fill();
    }
    ctx.strokeStyle = 'rgba(0,0,0,0.28)'; ctx.lineWidth = 1.4;
    for (let i = 0; i < 12; i++) { ctx.beginPath(); ctx.moveTo(Math.random() * S, Math.random() * S); ctx.lineTo(Math.random() * S, Math.random() * S); ctx.stroke(); }
  } else { // wood
    for (let i = 0; i < 26; i++) { ctx.fillStyle = tintRGB(color, (Math.random() - 0.5) * 0.3); ctx.fillRect(0, (i / 26) * S, S, S / 26 + 1); }
    ctx.strokeStyle = 'rgba(0,0,0,0.2)'; ctx.lineWidth = 1.2;
    for (let i = 1; i < 4; i++) { ctx.beginPath(); ctx.moveTo((i / 4) * S, 0); ctx.lineTo((i / 4) * S, S); ctx.stroke(); } // plank seams
  }

  // Derive a normal map from the painted luminance (wraps at edges so it tiles).
  const img = ctx.getImageData(0, 0, S, S).data;
  const lum = (x: number, y: number) => {
    const i = (((y + S) % S) * S + ((x + S) % S)) * 4;
    return (img[i] * 0.299 + img[i + 1] * 0.587 + img[i + 2] * 0.114) / 255;
  };
  const strength = kind === 'rock' ? 2.6 : kind === 'wood' ? 1.6 : kind === 'soil' ? 1.8 : 1.1;
  const ncv = document.createElement('canvas'); ncv.width = ncv.height = S;
  const nctx = ncv.getContext('2d')!;
  const nimg = nctx.createImageData(S, S);
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    const dx = (lum(x + 1, y) - lum(x - 1, y)) * strength;
    const dy = (lum(x, y + 1) - lum(x, y - 1)) * strength;
    let nx = -dx, ny = -dy, nz = 1; const inv = 1 / Math.hypot(nx, ny, nz); nx *= inv; ny *= inv; nz *= inv;
    const i = (y * S + x) * 4;
    nimg.data[i] = (nx * 0.5 + 0.5) * 255; nimg.data[i + 1] = (ny * 0.5 + 0.5) * 255; nimg.data[i + 2] = (nz * 0.5 + 0.5) * 255; nimg.data[i + 3] = 255;
  }
  nctx.putImageData(nimg, 0, 0);

  const map = new THREE.CanvasTexture(cv);
  map.wrapS = map.wrapT = THREE.RepeatWrapping; map.colorSpace = THREE.SRGBColorSpace; map.anisotropy = 4;
  const normal = new THREE.CanvasTexture(ncv);
  normal.wrapS = normal.wrapT = THREE.RepeatWrapping; normal.anisotropy = 4; // normal maps stay linear (no sRGB)
  const pair: TexPair = { map, normal };
  _pairCache.set(key, pair);
  return pair;
}
// Per-mesh tiled clones (so each block tiles to its own size). Returns a ready
// MeshStandardMaterial with both color + normal map.
function terrainMaterial(color: number, kind: TexKind, w: number, h: number, roughness = 0.97): THREE.MeshStandardMaterial {
  const { map, normal } = terrainMaps(color, kind);
  const rx = Math.max(1, Math.round(w / 2)), ry = Math.max(1, Math.round(h / 2));
  const cm = map.clone(); cm.needsUpdate = true; cm.repeat.set(rx, ry);
  const cn = normal.clone(); cn.needsUpdate = true; cn.repeat.set(rx, ry);
  const scale = kind === 'rock' ? 1.1 : kind === 'soil' ? 0.9 : 0.6;
  return new THREE.MeshStandardMaterial({ map: cm, normalMap: cn, normalScale: new THREE.Vector2(scale, scale), roughness });
}
// Soft round blob — reused for the glowing sun and the drifting clouds.
function cloudTex(): THREE.CanvasTexture {
  const cached = _texCache.get('cloud'); if (cached) return cached;
  const S = 128; const cv = document.createElement('canvas'); cv.width = cv.height = S;
  const ctx = cv.getContext('2d')!;
  const g = ctx.createRadialGradient(S / 2, S / 2, 4, S / 2, S / 2, S / 2);
  g.addColorStop(0, 'rgba(255,255,255,0.95)'); g.addColorStop(0.6, 'rgba(255,255,255,0.5)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, S, S);
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace;
  _texCache.set('cloud', tex); return tex;
}

// ===================== mesh builders =====================
function buildPlayerMesh(char: Character): THREE.Group {
  return char === 'martina' ? buildDolphinMesh() : buildDogMesh();
}

// Kamyar — a friendly cartoon dog: snout, floppy ears, collar and a wagging tail.
function buildDogMesh(): THREE.Group {
  const c = CHARS.kamyar;
  const g = new THREE.Group();
  const fur = new THREE.MeshStandardMaterial({ color: c.fur, roughness: 0.62 });
  const furD = new THREE.MeshStandardMaterial({ color: c.furDark, roughness: 0.62 });
  const belly = new THREE.MeshStandardMaterial({ color: c.belly, roughness: 0.72 });
  const white = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.22 }); // glossy eyes/paws
  const black = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.15, metalness: 0.3 }); // shiny nose/pupils

  const body = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.8, 0.45), fur); g.add(body);
  const bel = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.5, 0.1), belly); bel.position.set(0, -0.05, 0.24); g.add(bel);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.33, 16, 12), fur); head.position.y = 0.62; g.add(head);
  // snout + shiny nose
  const snout = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.17, 0.2), belly); snout.position.set(0, 0.52, 0.32); g.add(snout);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), black); nose.position.set(0, 0.57, 0.44); g.add(nose);
  // eyes
  for (const sx of [-0.13, 0.13]) {
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), white); e.position.set(sx, 0.7, 0.26); g.add(e);
    const p = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 6), black); p.position.set(sx, 0.7, 0.33); g.add(p);
  }
  // floppy ears hanging beside the head
  for (const sx of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.34, 0.11), furD);
    ear.position.set(sx * 0.32, 0.58, 0); ear.rotation.z = sx * 0.25; g.add(ear);
  }
  // red collar
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.05, 8, 20), new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.5 }));
  collar.position.y = 0.36; collar.rotation.x = Math.PI / 2; g.add(collar);
  // wagging tail
  const tail = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.4, 8), furD);
  tail.position.set(0, 0.12, -0.3); tail.rotation.x = -0.9; g.add(tail);
  // front paws
  for (const sx of [-0.36, 0.36]) { const hand = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), white); hand.position.set(sx, -0.05, 0.05); g.add(hand); }
  // hind paws
  for (const sx of [-0.16, 0.16]) { const s = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.16, 0.34), furD); s.position.set(sx, -0.5, 0.06); g.add(s); }
  return g;
}

// Martina — a sleek dolphin: smooth body, beak, dorsal + pectoral fins and tail flukes.
function buildDolphinMesh(): THREE.Group {
  const c = CHARS.martina;
  const g = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({ color: c.fur, roughness: 0.35, metalness: 0.05 });
  const skinD = new THREE.MeshStandardMaterial({ color: c.furDark, roughness: 0.4 });
  const belly = new THREE.MeshStandardMaterial({ color: c.belly, roughness: 0.5 });
  const white = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.22 });
  const black = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.15, metalness: 0.3 });

  // sleek upright body + pale belly
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.34, 20, 16), skin);
  body.scale.set(0.9, 1.35, 0.9); body.position.y = 0.02; g.add(body);
  const bel = new THREE.Mesh(new THREE.SphereGeometry(0.28, 18, 14), belly);
  bel.scale.set(0.7, 1.15, 0.5); bel.position.set(0, -0.02, 0.16); g.add(bel);
  // head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 18, 14), skin); head.position.y = 0.58; g.add(head);
  // rostrum (beak) pointing forward
  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.34, 12), skin);
  beak.position.set(0, 0.5, 0.34); beak.rotation.x = Math.PI / 2; g.add(beak);
  // smiling mouth line
  const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.03, 0.02), black); mouth.position.set(0, 0.44, 0.44); g.add(mouth);
  // eyes
  for (const sx of [-0.15, 0.15]) {
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), white); e.position.set(sx, 0.64, 0.2); g.add(e);
    const p = new THREE.Mesh(new THREE.SphereGeometry(0.038, 8, 6), black); p.position.set(sx, 0.64, 0.26); g.add(p);
  }
  // blowhole
  const blow = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), skinD); blow.position.set(0, 0.84, -0.04); g.add(blow);
  // swept-back dorsal fin
  const dorsal = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.34, 0.24), skinD);
  dorsal.position.set(0, 0.42, -0.16); dorsal.rotation.x = -0.5; g.add(dorsal);
  // pectoral fins
  for (const sx of [-1, 1]) {
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.34, 0.16), skinD);
    fin.position.set(sx * 0.3, 0, 0.05); fin.rotation.set(0.3, 0, sx * 0.9); g.add(fin);
  }
  // horizontal tail flukes
  for (const sx of [-1, 1]) {
    const fluke = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.06, 0.22), skinD);
    fluke.position.set(sx * 0.18, -0.5, -0.02); fluke.rotation.y = sx * 0.4; g.add(fluke);
  }
  return g;
}

function buildCrateMesh(type: string): THREE.Mesh {
  const base = CRATE_COLORS[type] || 0xb07a43;
  let mat: THREE.MeshStandardMaterial;
  if (type === 'wood') {
    const w = terrainMaps(0xb07a43, 'wood');
    const wood = w.map.clone(); wood.needsUpdate = true;
    const woodN = w.normal.clone(); woodN.needsUpdate = true;
    mat = new THREE.MeshStandardMaterial({ map: wood, normalMap: woodN, roughness: 0.85 }); // real plank grain + relief
  } else if (type === 'iron') {
    mat = new THREE.MeshStandardMaterial({ color: base, metalness: 0.85, roughness: 0.32 }); // shiny metal
  } else {
    mat = new THREE.MeshStandardMaterial({ color: base, roughness: 0.55, emissive: type === 'tnt' ? 0x330000 : 0x000000 });
  }
  const m = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), mat);
  const edges = new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry), new THREE.LineBasicMaterial({ color: 0x1a1a1a }));
  m.add(edges);
  // a small marker cube on top for special crates
  if (type === 'check' || type === 'life' || type === 'bounce') {
    const mk = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.08, 0.3), new THREE.MeshStandardMaterial({ color: 0xffffff }));
    mk.position.y = 0.55; m.add(mk);
  }
  return m;
}

function buildEnemyMesh(type: string): THREE.Group {
  const g = new THREE.Group();
  const col = type === 'spinner' ? 0x7c3aed : 0x0ea5e9;
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.45, 20, 14), new THREE.MeshStandardMaterial({ color: col, roughness: 0.38, metalness: 0.12 }));
  body.scale.y = 0.85; g.add(body);
  if (type === 'spinner') {
    for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2; const sp = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.3, 6), new THREE.MeshStandardMaterial({ color: 0x4c1d95 })); sp.position.set(Math.cos(a) * 0.45, 0, Math.sin(a) * 0.45); sp.rotation.z = -Math.PI / 2; sp.rotation.y = -a; g.add(sp); }
  }
  for (const sx of [-0.16, 0.16]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), new THREE.MeshStandardMaterial({ color: 0xffffff })); e.position.set(sx, 0.15, 0.38); g.add(e); const p = new THREE.Mesh(new THREE.SphereGeometry(0.045, 6, 6), new THREE.MeshStandardMaterial({ color: 0x0f172a })); p.position.set(sx, 0.15, 0.44); g.add(p); }
  return g;
}

function buildMaskMesh(): THREE.Group {
  const g = new THREE.Group();
  const face = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.7, 0.18), new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.4, metalness: 0.15, emissive: 0x3a1d00 }));
  g.add(face);
  const r = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.35, 6), new THREE.MeshStandardMaterial({ color: 0xef4444 })); r.position.set(0, 0.5, 0); g.add(r);
  const b1 = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.3, 6), new THREE.MeshStandardMaterial({ color: 0x3b82f6 })); b1.position.set(-0.22, 0.42, 0); b1.rotation.z = 0.6; g.add(b1);
  const b2 = b1.clone(); b2.position.x = 0.22; b2.rotation.z = -0.6; g.add(b2);
  for (const sx of [-0.13, 0.13]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), new THREE.MeshStandardMaterial({ color: 0xffffff })); e.position.set(sx, 0.06, 0.1); g.add(e); }
  const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.08, 0.05), new THREE.MeshStandardMaterial({ color: 0xfde047 })); mouth.position.set(0, -0.2, 0.1); g.add(mouth);
  return g;
}

// A checkpoint flag on a pole. Starts grey + lowered; when reached it turns
// green and the flag rises (handled in the render loop). The flag mesh is kept
// in userData so the loop can recolor / raise / wave it.
function buildCheckpointMesh(): THREE.Group {
  const g = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 2.3, 10), new THREE.MeshStandardMaterial({ color: 0xcbd5e1, roughness: 0.45, metalness: 0.4 }));
  pole.position.y = 1.15; g.add(pole);
  const ball = new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 10), new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.3, metalness: 0.5 }));
  ball.position.y = 2.34; g.add(ball);
  const flag = new THREE.Mesh(new THREE.PlaneGeometry(0.85, 0.55), new THREE.MeshStandardMaterial({ color: 0x9aa5b1, roughness: 0.7, side: THREE.DoubleSide }));
  flag.position.set(0.46, 1.55, 0); g.add(flag);
  g.userData.flag = flag;
  return g;
}

// Norberto — an evil human villain in a dark suit: glowing red eyes, angry brows,
// slicked hair and a pointed goatee.
function buildBossMesh(): THREE.Group {
  const g = new THREE.Group();
  const suit = new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.55 });
  const suitD = new THREE.MeshStandardMaterial({ color: 0x0b1120, roughness: 0.6 });
  const skin = new THREE.MeshStandardMaterial({ color: 0xd8b4a0, roughness: 0.6 });
  const hair = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.7 });
  const white = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.22 });
  const evilRed = new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0x991b1b, emissiveIntensity: 0.9, roughness: 0.3 });

  // legs
  for (const sx of [-0.28, 0.28]) { const leg = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.8, 0.5), suitD); leg.position.set(sx, 0.4, 0); g.add(leg); }
  // torso (suit jacket) + blood-red tie
  const torso = new THREE.Mesh(new THREE.BoxGeometry(1.15, 1.05, 0.65), suit); torso.position.y = 1.3; g.add(torso);
  const tie = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.8, 0.1), new THREE.MeshStandardMaterial({ color: 0x7f1d1d })); tie.position.set(0, 1.3, 0.34); g.add(tie);
  // arms + hands
  for (const sx of [-1, 1]) {
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.95, 0.5), suit); arm.position.set(sx * 0.72, 1.28, 0); g.add(arm);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8), skin); hand.position.set(sx * 0.72, 0.78, 0); g.add(hand);
  }
  // high villain collar
  const collar = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.3, 0.55), suitD); collar.position.y = 1.9; g.add(collar);
  // head + slicked-back hair
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.42, 24, 18), skin); head.position.y = 2.35; g.add(head);
  const hairTop = new THREE.Mesh(new THREE.SphereGeometry(0.44, 20, 14), hair); hairTop.scale.set(1, 0.7, 1); hairTop.position.set(0, 2.5, -0.05); g.add(hairTop);
  // angry eyebrows angled inward
  for (const sx of [-1, 1]) {
    const brow = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.05, 0.06), hair);
    brow.position.set(sx * 0.17, 2.42, 0.36); brow.rotation.z = sx * 0.5; g.add(brow);
  }
  // glowing evil eyes
  for (const sx of [-0.16, 0.16]) {
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 10), white); e.position.set(sx, 2.34, 0.34); g.add(e);
    const p = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 6), evilRed); p.position.set(sx, 2.34, 0.4); g.add(p);
  }
  // sinister grin + pointed goatee
  const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.06, 0.05), suitD); mouth.position.set(0, 2.16, 0.38); g.add(mouth);
  const goatee = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.22, 6), hair); goatee.position.set(0, 2.0, 0.34); goatee.rotation.x = Math.PI; g.add(goatee);
  return g;
}

const clamp = (v: number, lo: number, hi: number) => (v < lo ? lo : v > hi ? hi : v);

function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Three.js objects
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sunRef = useRef<THREE.DirectionalLight | null>(null);
  const sunTargetRef = useRef<THREE.Object3D | null>(null);
  const skyRef = useRef<THREE.Mesh | null>(null);
  const sunSpriteRef = useRef<THREE.Sprite | null>(null);
  const cloudsRef = useRef<THREE.Group | null>(null);
  const levelGroupRef = useRef<THREE.Group | null>(null);
  const playerMeshRef = useRef<THREE.Group | null>(null);
  const blobRef = useRef<THREE.Mesh | null>(null);
  const bossMeshRef = useRef<THREE.Group | null>(null);
  const goalMeshRef = useRef<THREE.Group | null>(null);
  const crateMeshesRef = useRef<THREE.Mesh[]>([]);
  const enemyMeshesRef = useRef<THREE.Group[]>([]);
  const fruitMeshesRef = useRef<THREE.Mesh[]>([]);
  const maskMeshesRef = useRef<THREE.Group[]>([]);
  const checkpointMeshesRef = useRef<THREE.Group[]>([]);
  const activeCheckpointRef = useRef(-1); // highest checkpoint index reached this level
  const needsRebuildRef = useRef(false);

  // game state refs
  const playerRef = useRef<Player>({ x: 2, y: PLAYER_HY, z: 0, yaw: Math.PI / 2, vy: 0, onGround: false, spin: 0, spinCd: 0, coyote: 0, jumpBuf: 0, invuln: 0 });
  const levelRef = useRef<Level3 | null>(null);
  const levelNumRef = useRef(1);
  const checkpointRef = useRef({ x: 2, y: PLAYER_HY, z: 0 });
  const bossRef = useRef<Boss | null>(null);
  const bombsRef = useRef<Bomb[]>([]);
  const statusRef = useRef<Status>('menu');
  const charRef = useRef<Character>('kamyar');
  const camModeRef = useRef<CamMode>('third');
  const camYawRef = useRef(Math.PI / 2);   // camera orbit yaw (mouse/touch/Q-E)
  const camPitchRef = useRef(0.45);        // camera orbit pitch
  const camDistRef = useRef(CAM_ZOOMS.grande); // 3rd-person orbit distance (zoom)
  const livesRef = useRef(START_LIVES);
  const scoreRef = useRef(0);
  const fruitRef = useRef(0);
  const shieldRef = useRef(false);
  const invincRef = useRef(0);
  const mutedRef = useRef(false);
  const keysRef = useRef({ left: false, right: false, fwd: false, back: false, jump: false, jumpPressed: false, spinPressed: false, camL: false, camR: false });

  // UI state
  const [status, setStatus] = useState<Status>('menu');
  const [character, setCharacter] = useState<Character>('kamyar');
  const [cameraMode, setCameraMode] = useState<CamMode>('third');
  const [camZoom, setCamZoom] = useState<CamZoom>('grande');
  const [showBossTips, setShowBossTips] = useState(false);
  const bossTipsRef = useRef(false); // pauses the sim while the tips card is up
  const [checkpointToast, setCheckpointToast] = useState(false);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [lives, setLives] = useState(START_LIVES);
  const [score, setScore] = useState(0);
  const [fruit, setFruit] = useState(0);
  const [levelNum, setLevelNum] = useState(1);
  const [shield, setShield] = useState(false);
  const [invinc, setInvinc] = useState(0);
  const [bossHp, setBossHp] = useState(0);
  const [bossMax, setBossMax] = useState(0);
  const [muted, setMuted] = useState(false);
  const [scores, setScores] = useState<Scores>({});
  const [progress, setProgress] = useState<Progress>({});
  const [names, setNames] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState('');
  const [username, setUsername] = useState('');
  const [nameInput, setNameInput] = useState('');

  useEffect(() => { statusRef.current = status; }, [status]);
  useEffect(() => { charRef.current = character; }, [character]);
  useEffect(() => { camModeRef.current = cameraMode; }, [cameraMode]);
  useEffect(() => { camDistRef.current = CAM_ZOOMS[camZoom]; }, [camZoom]);
  useEffect(() => { bossTipsRef.current = showBossTips; }, [showBossTips]);
  useEffect(() => { mutedRef.current = muted; }, [muted]);

  useEffect(() => {
    const s: Scores = JSON.parse(localStorage.getItem(SCORES_KEY) || '{}');
    const p: Progress = JSON.parse(localStorage.getItem(PROG_KEY) || '{}');
    const n: string[] = JSON.parse(localStorage.getItem(NAMES_KEY) || '[]');
    const merged = Array.from(new Set([...n, ...Object.keys(s)]));
    setScores(s); setProgress(p); setNames(merged);
    if (merged.length) setSelectedName(merged[0]);
  }, []);

  const best = username ? scores[username] || 0 : 0;
  const unlocked = username ? progress[username] || 1 : 1;

  // ===================== sfx =====================
  const audioRef = useRef<AudioContext | null>(null);
  const tone = (freq: number, dur: number, type: OscillatorType, vol: number, slideTo?: number) => {
    if (mutedRef.current) return;
    let ctx = audioRef.current;
    if (!ctx) { try { ctx = new (window.AudioContext || (window as any).webkitAudioContext)(); audioRef.current = ctx; } catch { return; } }
    const t = ctx.currentTime; const osc = ctx.createOscillator(); const g = ctx.createGain();
    osc.type = type; osc.frequency.setValueAtTime(freq, t);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(Math.max(40, slideTo), t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g); g.connect(ctx.destination); osc.start(t); osc.stop(t + dur);
  };
  const sfx = {
    jump: () => tone(420, 0.16, 'square', 0.05, 720),
    spin: () => tone(180, 0.18, 'sawtooth', 0.05, 90),
    collect: () => tone(880, 0.08, 'square', 0.045, 1320),
    breakC: () => tone(220, 0.1, 'square', 0.05, 120),
    stomp: () => tone(300, 0.1, 'triangle', 0.05, 160),
    boom: () => tone(120, 0.32, 'sawtooth', 0.07, 50),
    hurt: () => tone(360, 0.3, 'sawtooth', 0.06, 90),
    power: () => { tone(660, 0.1, 'triangle', 0.05, 990); setTimeout(() => tone(990, 0.14, 'triangle', 0.05, 1480), 90); },
    win: () => { [523, 659, 784, 1046].forEach((f, i) => setTimeout(() => tone(f, 0.16, 'triangle', 0.05), i * 110)); },
  };

  // ===================== names / saves =====================
  const saveNames = (next: string[]) => { setNames(next); localStorage.setItem(NAMES_KEY, JSON.stringify(next)); };
  const addName = () => { const n = nameInput.trim(); if (!n) return; if (!names.includes(n)) saveNames([n, ...names]); setSelectedName(n); setNameInput(''); };
  const removeName = (n: string) => {
    saveNames(names.filter((x) => x !== n));
    const s = { ...scores }; delete s[n]; setScores(s); localStorage.setItem(SCORES_KEY, JSON.stringify(s));
    const p = { ...progress }; delete p[n]; setProgress(p); localStorage.setItem(PROG_KEY, JSON.stringify(p));
    if (selectedName === n) setSelectedName('');
  };
  const saveBest = () => { if (username && scoreRef.current > (scores[username] || 0)) { const next = { ...scores, [username]: scoreRef.current }; setScores(next); localStorage.setItem(SCORES_KEY, JSON.stringify(next)); } };
  const saveProgress = (lvl: number) => { if (username && lvl > (progress[username] || 1)) { const next = { ...progress, [username]: Math.min(lvl, MAX_LEVELS) }; setProgress(next); localStorage.setItem(PROG_KEY, JSON.stringify(next)); } };

  // ===================== level loading =====================
  const loadLevel = (n: number, fromCheckpoint: boolean) => {
    const lvl = genLevel(n);
    levelRef.current = lvl;
    levelNumRef.current = n;
    if (!fromCheckpoint) { checkpointRef.current = { ...lvl.spawn }; activeCheckpointRef.current = -1; }
    const cp = checkpointRef.current;
    const p = playerRef.current;
    p.x = cp.x; p.y = cp.y; p.z = cp.z; p.vy = 0; p.yaw = Math.PI / 2; p.spin = 0; p.spinCd = 0;
    p.onGround = false; p.invuln = 70; p.coyote = 0; p.jumpBuf = 0;
    camYawRef.current = Math.PI / 2; camPitchRef.current = 0.45;
    bombsRef.current = [];
    bossRef.current = lvl.boss ? { x: lvl.length - 2, z: 0, y: PLAYER_HY, vy: 0, hp: lvl.bossHp, maxHp: lvl.bossHp, invuln: 80, t: 150, hopT: 160 } : null;
    needsRebuildRef.current = true;
    setLevelNum(n);
    if (lvl.boss) { setBossHp(lvl.bossHp); setBossMax(lvl.bossHp); } else { setBossHp(0); setBossMax(0); }
    // Show the boss-fight tips on a fresh entry/retry (not on a mid-fight respawn).
    setShowBossTips(lvl.boss && !fromCheckpoint);
  };

  const start = (fromLevel: number) => {
    const name = selectedName || username; if (!name) return;
    setUsername(name);
    charRef.current = character;
    scoreRef.current = 0; setScore(0);
    livesRef.current = START_LIVES; setLives(START_LIVES);
    fruitRef.current = 0; setFruit(0);
    shieldRef.current = false; setShield(false);
    invincRef.current = 0; setInvinc(0);
    loadLevel(fromLevel, false);
    statusRef.current = 'playing'; setStatus('playing');
  };

  const toMenu = () => { statusRef.current = 'menu'; setStatus('menu'); };
  const toggleCam = () => setCameraMode((m) => (m === 'third' ? 'first' : 'third'));
  // Cycle the 3rd-person zoom: muy pequeño → pequeño → grande → muy grande → …
  const cycleZoom = () => setCamZoom((z) => ZOOM_ORDER[(ZOOM_ORDER.indexOf(z) + 1) % ZOOM_ORDER.length]);

  // ===================== gameplay events =====================
  const addScore = (n: number) => { scoreRef.current += n; setScore(scoreRef.current); };
  const addFruit = () => {
    fruitRef.current += 1; addScore(15);
    if (fruitRef.current >= FRUIT_FOR_LIFE) { fruitRef.current -= FRUIT_FOR_LIFE; livesRef.current += 1; setLives(livesRef.current); sfx.power(); }
    setFruit(fruitRef.current); sfx.collect();
  };
  const breakCrate = (cr: Crate3) => {
    if (cr.dead) return; cr.dead = true;
    if (cr.type === 'fruit') { for (let i = 0; i < 3; i++) addFruit(); addScore(20); }
    else if (cr.type === 'life') { livesRef.current += 1; setLives(livesRef.current); sfx.power(); }
    else if (cr.type === 'check') { checkpointRef.current = { x: cr.x - 1.5, y: PLAYER_HY, z: cr.z }; sfx.power(); }
    else addScore(20);
    sfx.breakC();
  };
  const explodeTNT = (cr: Crate3) => {
    if (cr.dead) return; cr.dead = true; sfx.boom();
    const lvl = levelRef.current!;
    for (const o of lvl.crates) { if (o.dead || o === cr) continue; if (Math.hypot(o.x - cr.x, o.z - cr.z) < TNT_R) { if (o.type === 'tnt') { if (o.fuse == null) o.fuse = 12; } else if (o.type !== 'iron') breakCrate(o); } }
    for (const e of lvl.enemies) { if (!e.dead && Math.hypot(e.x - cr.x, e.z - cr.z) < TNT_R) killEnemy(e); }
    const p = playerRef.current;
    if (Math.hypot(p.x - cr.x, p.z - cr.z) < TNT_R && Math.abs(p.y - cr.y) < 2) hitPlayer();
  };
  const killEnemy = (e: Enemy3) => { if (e.dead) return; e.dead = true; addScore(200); sfx.stomp(); };
  const hitPlayer = () => {
    const p = playerRef.current;
    if (p.invuln > 0 || invincRef.current > 0) return;
    if (shieldRef.current) { shieldRef.current = false; setShield(false); p.invuln = HIT_INVULN; p.vy = 0.18; sfx.hurt(); return; }
    die();
  };
  const die = () => {
    sfx.hurt();
    livesRef.current -= 1; setLives(livesRef.current);
    shieldRef.current = false; setShield(false); invincRef.current = 0; setInvinc(0);
    if (livesRef.current <= 0) { statusRef.current = 'dead'; setStatus('dead'); saveBest(); }
    else loadLevel(levelNumRef.current, true);
  };
  const completeLevel = () => {
    const n = levelNumRef.current;
    addScore(1000 + n * 100); saveBest(); saveProgress(n + 1); sfx.win();
    if (n >= MAX_LEVELS) { statusRef.current = 'victory'; setStatus('victory'); }
    else { statusRef.current = 'clear'; setStatus('clear'); }
  };

  // ===================== keyboard =====================
  useEffect(() => {
    const onKey = (e: KeyboardEvent, down: boolean) => {
      const t = e.target as HTMLElement | null;
      if (t && t.tagName === 'INPUT') return;
      const k = keysRef.current;
      switch (e.key) {
        case 'ArrowLeft': case 'a': case 'A': k.left = down; break;
        case 'ArrowRight': case 'd': case 'D': k.right = down; break;
        case 'ArrowUp': case 'w': case 'W': k.fwd = down; break;
        case 'ArrowDown': case 's': case 'S': k.back = down; break;
        case ' ': if (down && !k.jump) k.jumpPressed = true; k.jump = down; break;
        case 'j': case 'J': case 'k': case 'K': case 'x': case 'X': case 'Shift': if (down) k.spinPressed = true; break;
        case 'q': case 'Q': k.camL = down; break;
        case 'e': case 'E': k.camR = down; break;
        case 'c': case 'C': if (down) setCameraMode((m) => (m === 'third' ? 'first' : 'third')); break;
        default: return;
      }
      e.preventDefault();
    };
    const d = (e: KeyboardEvent) => onKey(e, true);
    const u = (e: KeyboardEvent) => onKey(e, false);
    window.addEventListener('keydown', d); window.addEventListener('keyup', u);
    return () => { window.removeEventListener('keydown', d); window.removeEventListener('keyup', u); };
  }, []);

  // ===================== Three.js scene + game loop =====================
  useEffect(() => {
    if (status === 'menu') {
      // tear down the renderer when we leave the game
      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current.domElement.remove();
        rendererRef.current = null; sceneRef.current = null; cameraRef.current = null; levelGroupRef.current = null;
      }
      return;
    }
    const container = containerRef.current;
    if (!container) return;

    // one-time setup
    if (!rendererRef.current) {
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(container.clientWidth, container.clientHeight);
      // More realistic look: filmic tone mapping, sRGB output and soft sun shadows.
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);
      renderer.domElement.style.display = 'block';
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(62, container.clientWidth / container.clientHeight, 0.1, 240);
      // Lower sky fill + a strong warm sun = stronger, more directional shading.
      const hemi = new THREE.HemisphereLight(0xffffff, 0x47536a, 0.55); scene.add(hemi);
      const sun = new THREE.DirectionalLight(0xfff4e0, 2.4); sun.position.set(14, 26, 10);
      sun.castShadow = true;
      sun.shadow.mapSize.set(4096, 4096); // sharper shadow edges
      sun.shadow.camera.near = 1; sun.shadow.camera.far = 90;
      sun.shadow.camera.left = -22; sun.shadow.camera.right = 22;
      sun.shadow.camera.top = 22; sun.shadow.camera.bottom = -22;
      sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.5;
      scene.add(sun);
      const sunTarget = new THREE.Object3D(); scene.add(sunTarget); sun.target = sunTarget;
      const fill = new THREE.DirectionalLight(0xbcd2ff, 0.35); fill.position.set(-10, 8, -8); scene.add(fill);

      // Image-based ambient light: a soft indoor environment makes every PBR
      // material (blocks, crates, characters) catch light + faint reflections
      // realistically, instead of looking flat. Generated once, reused forever.
      const pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

      // Gradient sky dome — deep blue overhead fading to a hazy horizon.
      const sky = new THREE.Mesh(
        new THREE.SphereGeometry(400, 32, 16),
        new THREE.ShaderMaterial({
          side: THREE.BackSide, depthWrite: false, fog: false,
          uniforms: { top: { value: new THREE.Color(0x3b7fd0) }, bottom: { value: new THREE.Color(0xcfe8ff) }, exponent: { value: 0.8 } },
          vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
          fragmentShader: 'varying vec3 vP; uniform vec3 top; uniform vec3 bottom; uniform float exponent; void main(){ float h = normalize(vP).y; float t = pow(clamp(smoothstep(-0.1,0.6,h),0.0,1.0), exponent); gl_FragColor = vec4(mix(bottom, top, t), 1.0); }',
        }),
      );
      sky.frustumCulled = false; scene.add(sky);

      // A soft glowing sun disc, parked far away in the sun's direction.
      const sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: cloudTex(), color: 0xfff2c0, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
      sunSprite.scale.setScalar(70); scene.add(sunSprite);

      // Drifting clouds (billboards that slowly slide and wrap around the player).
      const clouds = new THREE.Group();
      for (let i = 0; i < 14; i++) {
        const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: cloudTex(), transparent: true, opacity: 0.5, depthWrite: false, fog: false }));
        s.position.set((Math.random() - 0.5) * 240, 38 + Math.random() * 44, (Math.random() - 0.5) * 240);
        const sc = 18 + Math.random() * 26; s.scale.set(sc * 1.7, sc, 1);
        clouds.add(s);
      }
      scene.add(clouds);

      rendererRef.current = renderer; sceneRef.current = scene; cameraRef.current = camera;
      sunRef.current = sun; sunTargetRef.current = sunTarget;
      skyRef.current = sky; sunSpriteRef.current = sunSprite; cloudsRef.current = clouds;
    }

    const renderer = rendererRef.current!;
    const scene = sceneRef.current!;
    const camera = cameraRef.current!;

    const onResize = () => {
      const c = containerRef.current; if (!c) return;
      renderer.setSize(c.clientWidth, c.clientHeight);
      camera.aspect = c.clientWidth / c.clientHeight; camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    // ---------- mouse / touch drag → orbit the camera ----------
    // Pointer events cover both mouse and touch. Drag anywhere on the canvas to
    // swing the camera around the player; the on-screen control buttons sit in
    // their own elements, so pressing them never starts a camera drag.
    const canvasEl = renderer.domElement;
    canvasEl.style.touchAction = 'none'; // own touch drags (no page scroll/zoom)
    let dragging = false, lastX = 0, lastY = 0;
    const onPointerDown = (e: PointerEvent) => {
      dragging = true; lastX = e.clientX; lastY = e.clientY;
      canvasEl.setPointerCapture?.(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX, dy = e.clientY - lastY;
      lastX = e.clientX; lastY = e.clientY;
      camYawRef.current -= dx * LOOK_SENS; // drag right → look right
      camPitchRef.current = clamp(camPitchRef.current + dy * LOOK_SENS, -0.7, 1.4); // drag down → look down
    };
    const endDrag = (e: PointerEvent) => { dragging = false; canvasEl.releasePointerCapture?.(e.pointerId); };
    canvasEl.addEventListener('pointerdown', onPointerDown);
    canvasEl.addEventListener('pointermove', onPointerMove);
    canvasEl.addEventListener('pointerup', endDrag);
    canvasEl.addEventListener('pointercancel', endDrag);
    canvasEl.addEventListener('pointerleave', endDrag);

    // ---------- build / rebuild the level meshes ----------
    const disposeGroup = (g: THREE.Group) => {
      g.traverse((o) => {
        const m = o as THREE.Mesh;
        if (m.geometry) m.geometry.dispose();
        const mat = (m as any).material;
        const mats = Array.isArray(mat) ? mat : mat ? [mat] : [];
        // Dispose the per-mesh cloned terrain textures too, or they'd leak each
        // level load. (Cached base textures are never attached to a mesh.)
        for (const x of mats) { x.map?.dispose?.(); x.normalMap?.dispose?.(); x.dispose?.(); }
      });
    };

    const buildScene = (lvl: Level3) => {
      if (levelGroupRef.current) { scene.remove(levelGroupRef.current); disposeGroup(levelGroupRef.current); }
      const group = new THREE.Group();
      scene.background = new THREE.Color(lvl.theme.fog);
      scene.fog = new THREE.FogExp2(lvl.theme.fog, 0.011); // atmospheric depth haze
      // Recolor the gradient sky dome to match the theme (deeper at the zenith).
      if (skyRef.current) {
        const sm = skyRef.current.material as THREE.ShaderMaterial;
        sm.uniforms.top.value.set(lvl.theme.sky).multiplyScalar(0.82);
        sm.uniforms.bottom.value.set(lvl.theme.fog);
      }

      // boxes (ground / platforms / walls) — now with procedural terrain textures
      for (const b of lvl.boxes) {
        const kind: TexKind = b.kind === 'ground' ? 'soil' : 'rock'; // walls + floating platforms read as stone
        const color = b.kind === 'ground' ? lvl.theme.ground : lvl.theme.groundSide;
        const mat = terrainMaterial(color, kind, b.hx * 2, b.hz * 2, 0.97);
        const mesh = new THREE.Mesh(new THREE.BoxGeometry(b.hx * 2, b.hy * 2, b.hz * 2), mat);
        mesh.position.set(b.cx, b.cy, b.cz); group.add(mesh);
        if (b.kind === 'ground') {
          const grass = terrainMaterial(lvl.theme.accent, 'grass', b.hx * 2, b.hz * 2, 0.92);
          const top = new THREE.Mesh(new THREE.BoxGeometry(b.hx * 2, 0.12, b.hz * 2), grass);
          top.position.set(b.cx, b.cy + b.hy, b.cz); group.add(top);
        }
      }

      // crates
      crateMeshesRef.current = lvl.crates.map((cr) => { const m = buildCrateMesh(cr.type); m.position.set(cr.x, cr.y, cr.z); group.add(m); return m; });
      // enemies
      enemyMeshesRef.current = lvl.enemies.map((e) => { const m = buildEnemyMesh(e.type); m.position.set(e.x, e.y, e.z); group.add(m); return m; });
      // fruit
      const fruitGeo = new THREE.SphereGeometry(0.26, 12, 10);
      const fruitMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.4, emissive: 0x7c4a02, metalness: 0.2 });
      fruitMeshesRef.current = lvl.fruits.map((f) => { const m = new THREE.Mesh(fruitGeo, fruitMat); m.position.set(f.x, f.y, f.z); group.add(m); return m; });
      // masks
      maskMeshesRef.current = lvl.masks.map((mk) => { const m = buildMaskMesh(); m.position.set(mk.x, mk.y, mk.z); group.add(m); return m; });

      // goal ring
      if (!lvl.boss) {
        const goal = new THREE.Group();
        const ring = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.16, 12, 28), new THREE.MeshStandardMaterial({ color: lvl.theme.accent, emissive: 0x664400 }));
        ring.position.y = 1.3; goal.add(ring);
        const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 6, 16, 1, true), new THREE.MeshBasicMaterial({ color: lvl.theme.accent, transparent: true, opacity: 0.16, side: THREE.DoubleSide }));
        beam.position.y = 3; goal.add(beam);
        goal.position.set(lvl.goal.x, 0, lvl.goal.z); group.add(goal); goalMeshRef.current = goal;
      } else goalMeshRef.current = null;

      // player + blob shadow
      const pm = buildPlayerMesh(charRef.current); group.add(pm); playerMeshRef.current = pm;
      const blob = new THREE.Mesh(new THREE.CircleGeometry(0.45, 16), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28 }));
      blob.rotation.x = -Math.PI / 2; group.add(blob); blobRef.current = blob;

      // boss
      if (lvl.boss) { const bm = buildBossMesh(); group.add(bm); bossMeshRef.current = bm; } else bossMeshRef.current = null;

      // Real shadows: every solid mesh casts + receives; transparent FX (the goal
      // beam, the soft blob shadow) receive only, so they don't throw hard shadows.
      group.traverse((o) => {
        const m = o as THREE.Mesh;
        if (!(m as THREE.Mesh).isMesh) return;
        const mat = m.material as THREE.Material | THREE.Material[];
        const transparent = Array.isArray(mat) ? mat.some((x) => x.transparent) : mat?.transparent;
        m.receiveShadow = true;
        m.castShadow = !transparent;
      });

      scene.add(group); levelGroupRef.current = group;
    };

    // ---------- physics helpers ----------
    type AABB = { minx: number; maxx: number; miny: number; maxy: number; minz: number; maxz: number; crate?: Crate3 };
    const colliders = (lvl: Level3): AABB[] => {
      const out: AABB[] = [];
      for (const b of lvl.boxes) out.push({ minx: b.cx - b.hx, maxx: b.cx + b.hx, miny: b.cy - b.hy, maxy: b.cy + b.hy, minz: b.cz - b.hz, maxz: b.cz + b.hz });
      for (const cr of lvl.crates) if (!cr.dead) out.push({ minx: cr.x - 0.5, maxx: cr.x + 0.5, miny: cr.y - 0.5, maxy: cr.y + 0.5, minz: cr.z - 0.5, maxz: cr.z + 0.5, crate: cr });
      return out;
    };
    const hit = (p: Player, c: AABB) =>
      p.x - PLAYER_HX < c.maxx && p.x + PLAYER_HX > c.minx &&
      p.y - PLAYER_HY < c.maxy && p.y + PLAYER_HY > c.miny &&
      p.z - PLAYER_HZ < c.maxz && p.z + PLAYER_HZ > c.minz;

    // ---------- update ----------
    const update = () => {
      const p = playerRef.current;
      const lvl = levelRef.current!;
      const k = keysRef.current;

      if (p.invuln > 0) p.invuln--;
      if (p.spin > 0) p.spin--;
      if (p.spinCd > 0) p.spinCd--;
      if (p.coyote > 0) p.coyote--;
      if (p.jumpBuf > 0) p.jumpBuf--;
      if (invincRef.current > 0) { invincRef.current--; if (invincRef.current % 6 === 0 || invincRef.current === 0) setInvinc(invincRef.current); }

      // camera rotation via keyboard (Q/E) — mouse/touch drag is handled by listeners
      if (k.camL) camYawRef.current += 0.035;
      if (k.camR) camYawRef.current -= 0.035;
      // movement is relative to where the camera looks
      const cyaw = camYawRef.current;
      const cfx = Math.sin(cyaw), cfz = Math.cos(cyaw); // camera forward (ground plane)
      const crx = -Math.cos(cyaw), crz = Math.sin(cyaw); // camera right (ground plane)
      let ix = 0, iz = 0;
      if (k.fwd) { ix += cfx; iz += cfz; }
      if (k.back) { ix -= cfx; iz -= cfz; }
      if (k.right) { ix += crx; iz += crz; }
      if (k.left) { ix -= crx; iz -= crz; }
      const len = Math.hypot(ix, iz);
      if (len > 0) { ix /= len; iz /= len; }
      const dx = ix * MOVE_SPEED, dz = iz * MOVE_SPEED;
      // turn the character to face the way it runs
      if (len > 0) { let d = Math.atan2(ix, iz) - p.yaw; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; p.yaw += d * 0.3; }

      // spin
      if (k.spinPressed) { k.spinPressed = false; if (p.spinCd <= 0 && p.spin <= 0) { p.spin = SPIN_TIME; p.spinCd = SPIN_TIME + SPIN_CD; sfx.spin(); } }

      // jump
      if (k.jumpPressed) { p.jumpBuf = 6; k.jumpPressed = false; }
      if (p.jumpBuf > 0 && (p.onGround || p.coyote > 0)) { p.vy = JUMP_V; p.onGround = false; p.coyote = 0; p.jumpBuf = 0; sfx.jump(); }
      if (!k.jump && p.vy > JUMP_V * JUMP_CUT) p.vy = JUMP_V * JUMP_CUT;

      const cols = colliders(lvl);
      const wasGround = p.onGround;

      // resolve X
      p.x += dx;
      for (const c of cols) { if (hit(p, c)) { if (dx > 0) p.x = c.minx - PLAYER_HX; else if (dx < 0) p.x = c.maxx + PLAYER_HX; } }
      // resolve Z
      p.z += dz;
      for (const c of cols) { if (hit(p, c)) { if (dz > 0) p.z = c.minz - PLAYER_HZ; else if (dz < 0) p.z = c.maxz + PLAYER_HZ; } }
      // resolve Y
      p.vy -= GRAVITY; if (p.vy < -MAX_FALL) p.vy = -MAX_FALL;
      p.y += p.vy;
      p.onGround = false;
      let landed: Crate3 | null = null;
      for (const c of cols) {
        if (!hit(p, c)) continue;
        if (p.vy <= 0) { p.y = c.maxy + PLAYER_HY; p.vy = 0; p.onGround = true; if (c.crate) landed = c.crate; }
        else { p.y = c.miny - PLAYER_HY; p.vy = 0; }
      }
      if (wasGround && !p.onGround && p.vy <= 0) p.coyote = 6;

      // landing on a crate
      if (landed && !landed.dead) {
        if (landed.type === 'bounce') { p.vy = JUMP_V * 1.5; p.onGround = false; sfx.jump(); }
        else if (landed.type === 'tnt') { if (landed.fuse == null) { landed.fuse = TNT_FUSE; sfx.breakC(); } p.vy = JUMP_V * 0.7; p.onGround = false; }
        else if (landed.type === 'iron') { /* solid */ }
        else { breakCrate(landed); p.vy = JUMP_V * 0.7; p.onGround = false; }
      }

      // spin destroys crates & enemies in reach
      if (p.spin > 0) {
        for (const cr of lvl.crates) { if (cr.dead || cr.type === 'iron' || cr.type === 'tnt') continue; if (Math.hypot(cr.x - p.x, cr.z - p.z) < SPIN_R && Math.abs(cr.y - p.y) < 1.4) breakCrate(cr); }
        for (const e of lvl.enemies) { if (e.dead) continue; if (Math.hypot(e.x - p.x, e.z - p.z) < SPIN_R && Math.abs(e.y - p.y) < 1.4) killEnemy(e); }
      }

      // TNT fuses
      for (const cr of lvl.crates) { if (cr.dead || cr.fuse == null) continue; cr.fuse--; if (cr.fuse <= 0) explodeTNT(cr); }

      // enemies
      for (const e of lvl.enemies) {
        if (e.dead) continue;
        const v = e.speed * e.dir;
        if (e.axis === 'z') { e.z += v; if (e.z < e.min) { e.z = e.min; e.dir = 1; } if (e.z > e.max) { e.z = e.max; e.dir = -1; } }
        else { e.x += v; if (e.x < e.min) { e.x = e.min; e.dir = 1; } if (e.x > e.max) { e.x = e.max; e.dir = -1; } }
        if (Math.hypot(e.x - p.x, e.z - p.z) < 0.7 && Math.abs(e.y - p.y) < 1.1) {
          const stomp = p.vy <= 0 && p.y - PLAYER_HY > e.y + 0.1;
          if (p.spin > 0 || invincRef.current > 0) killEnemy(e);
          else if (stomp) { killEnemy(e); p.vy = JUMP_V * 0.8; p.onGround = false; }
          else hitPlayer();
        }
      }

      // fruit
      for (const f of lvl.fruits) { if (f.taken) continue; if (Math.hypot(f.x - p.x, f.z - p.z) < 0.8 && Math.abs(f.y - p.y) < 1.1) { f.taken = true; addFruit(); } }
      // mask
      for (const m of lvl.masks) {
        if (m.taken) continue;
        if (Math.hypot(m.x - p.x, m.z - p.z) < 0.9 && Math.abs(m.y - p.y) < 1.4) {
          m.taken = true;
          if (shieldRef.current) { invincRef.current = 360; setInvinc(360); } else { shieldRef.current = true; setShield(true); }
          sfx.power();
        }
      }

      // boss
      if (lvl.boss && bossRef.current) updateBoss(lvl);

      // pit
      if (p.y < -6) die();
      // goal
      if (!lvl.boss && Math.hypot(p.x - lvl.goal.x, p.z - lvl.goal.z) < 1.6 && statusRef.current === 'playing') completeLevel();
    };

    const updateBoss = (lvl: Level3) => {
      const b = bossRef.current!;
      const p = playerRef.current;
      if (b.invuln > 0) b.invuln--;
      b.vy -= GRAVITY * 0.8; b.y += b.vy; if (b.y < PLAYER_HY) { b.y = PLAYER_HY; b.vy = 0; }
      b.hopT--; if (b.hopT <= 0 && b.y <= PLAYER_HY + 0.01) { b.vy = 0.16; b.hopT = 140 - (b.maxHp - b.hp) * 14; }
      // drift toward the player on Z, keep distance on X
      b.z += clamp(p.z - b.z, -0.04, 0.04);
      b.x += clamp((lvl.length - 3) - b.x, -0.02, 0.02);

      b.t--;
      if (b.t <= 0) {
        const dx = p.x - b.x, dz = p.z - b.z; const d = Math.hypot(dx, dz) || 1;
        const sp = 0.11 + (b.maxHp - b.hp) * 0.012; // gentler: slower bombs
        const mat = new THREE.MeshStandardMaterial({ color: 0x1f2937 });
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.32, 10, 8), mat);
        levelGroupRef.current?.add(mesh);
        bombsRef.current.push({ x: b.x, y: b.y + 0.6, z: b.z, vx: (dx / d) * sp, vy: 0.18, vz: (dz / d) * sp, mesh });
        b.t = Math.max(70, 135 - (b.maxHp - b.hp) * 10); sfx.breakC(); // gentler: longer gaps between bombs
      }

      bombsRef.current = bombsRef.current.filter((bo) => {
        bo.vy -= GRAVITY * 0.7; bo.x += bo.vx; bo.y += bo.vy; bo.z += bo.vz;
        bo.mesh.position.set(bo.x, bo.y, bo.z);
        const gone = () => { levelGroupRef.current?.remove(bo.mesh); (bo.mesh.material as any).dispose?.(); bo.mesh.geometry.dispose(); };
        if (Math.hypot(bo.x - p.x, bo.z - p.z) < 0.7 && Math.abs(bo.y - p.y) < 1.1) { sfx.boom(); hitPlayer(); gone(); return false; }
        if (bo.y < 0.2) { gone(); return false; }
        return true;
      });

      // hit the boss
      if (Math.hypot(b.x - p.x, b.z - p.z) < 1.1 && Math.abs(b.y - p.y) < 2.2 && b.invuln <= 0) {
        const stomp = p.vy <= 0 && p.y - PLAYER_HY > b.y + 0.6;
        if (stomp || p.spin > 0) {
          b.hp -= 1; b.invuln = 80; setBossHp(b.hp);
          p.vy = JUMP_V; p.onGround = false; sfx.stomp();
          if (b.hp <= 0) { for (const bo of bombsRef.current) { levelGroupRef.current?.remove(bo.mesh); } bombsRef.current = []; completeLevel(); }
        } else hitPlayer();
      }
    };

    // ---------- sync meshes + camera ----------
    const t0 = { v: 0 };
    const syncAndRender = () => {
      const lvl = levelRef.current!;
      const p = playerRef.current;
      t0.v += 0.05;

      // Keep the sun (and its shadow frustum) centered on the player, so shadows
      // stay crisp no matter how far along the level we are.
      if (sunRef.current && sunTargetRef.current) {
        sunRef.current.position.set(p.x + 14, 26, p.z + 10);
        sunTargetRef.current.position.set(p.x, 0, p.z);
      }
      // Sky dome, sun disc and clouds ride with the camera so they read as
      // infinitely far; the clouds drift slowly and wrap around.
      if (skyRef.current) skyRef.current.position.copy(camera.position);
      if (sunSpriteRef.current) sunSpriteRef.current.position.set(camera.position.x + 150, 230, camera.position.z + 110);
      if (cloudsRef.current) {
        cloudsRef.current.position.set(camera.position.x, 0, camera.position.z);
        for (const c of cloudsRef.current.children) { c.position.x += 0.03; if (c.position.x > 130) c.position.x -= 260; }
      }

      for (let i = 0; i < lvl.crates.length; i++) { const m = crateMeshesRef.current[i]; if (m) m.visible = !lvl.crates[i].dead; }
      for (let i = 0; i < lvl.enemies.length; i++) { const e = lvl.enemies[i]; const m = enemyMeshesRef.current[i]; if (m) { m.visible = !e.dead; m.position.set(e.x, e.y + Math.abs(Math.sin(t0.v * 2)) * 0.06, e.z); m.rotation.y += e.type === 'spinner' ? 0.2 : 0.04; } }
      for (let i = 0; i < lvl.fruits.length; i++) { const f = lvl.fruits[i]; const m = fruitMeshesRef.current[i]; if (m) { m.visible = !f.taken; m.rotation.y += 0.06; m.position.y = f.y + Math.sin(t0.v * 2 + f.x) * 0.08; } }
      for (let i = 0; i < lvl.masks.length; i++) { const mk = lvl.masks[i]; const m = maskMeshesRef.current[i]; if (m) { m.visible = !mk.taken; m.rotation.y += 0.03; m.position.y = mk.y + Math.sin(t0.v * 1.5) * 0.12; } }
      if (goalMeshRef.current) goalMeshRef.current.rotation.y += 0.01;

      // player mesh
      const pm = playerMeshRef.current;
      if (pm) {
        pm.position.set(p.x, p.y, p.z);
        pm.rotation.y = p.yaw + (p.spin > 0 ? (SPIN_TIME - p.spin) * 0.9 : 0);
        const blink = p.invuln > 0 && Math.floor(p.invuln / 4) % 2 === 0;
        pm.visible = camModeRef.current === 'third' && !blink;
      }
      if (blobRef.current) { blobRef.current.position.set(p.x, 0.04, p.z); }

      // boss mesh
      if (bossRef.current && bossMeshRef.current) {
        const b = bossRef.current;
        bossMeshRef.current.position.set(b.x, b.y - PLAYER_HY, b.z);
        bossMeshRef.current.lookAt(p.x, b.y, p.z);
        const flash = b.invuln > 0 && Math.floor(b.invuln / 4) % 2 === 0;
        bossMeshRef.current.visible = !flash;
      }

      // camera (orbit driven by mouse / touch / Q-E)
      const cyaw2 = camYawRef.current, cpit = camPitchRef.current;
      const cfx2 = Math.sin(cyaw2), cfz2 = Math.cos(cyaw2);
      if (camModeRef.current === 'third') {
        const dist = camDistRef.current;
        const tx = p.x - cfx2 * dist, tz = p.z - cfz2 * dist, ty = p.y + 1.0 + clamp(cpit, -0.4, 1.3) * 4.2;
        camera.position.lerp(new THREE.Vector3(tx, ty, tz), 0.18);
        camera.lookAt(p.x, p.y + 0.5, p.z);
      } else {
        const pit = clamp(cpit, -0.7, 0.9);
        camera.position.set(p.x + cfx2 * 0.12, p.y + 0.5, p.z + cfz2 * 0.12);
        camera.lookAt(p.x + cfx2 * 4, p.y + 0.5 + pit * 4, p.z + cfz2 * 4);
      }

      renderer.render(scene, camera);
    };

    let raf = 0;
    const loop = () => {
      if (needsRebuildRef.current && levelRef.current) { buildScene(levelRef.current); needsRebuildRef.current = false; }
      if (statusRef.current === 'playing' && !bossTipsRef.current) update();
      if (levelRef.current && levelGroupRef.current) syncAndRender();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      canvasEl.removeEventListener('pointerdown', onPointerDown);
      canvasEl.removeEventListener('pointermove', onPointerMove);
      canvasEl.removeEventListener('pointerup', endDrag);
      canvasEl.removeEventListener('pointercancel', endDrag);
      canvasEl.removeEventListener('pointerleave', endDrag);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  // ===================== MENU =====================
  if (status === 'menu') {
    return (
      <div className="app-shell menu-shell">
        <div className="menu-panel">
          <p className="eyebrow">Premium Arcade · Aventura 3D</p>
          <h1>Aventura <span className="accent">Locura</span></h1>
          <div className="menu-bird">🐶</div>
          <p className="menu-copy">
            ¡Norberto ha encerrado a los animales de la isla! Kamyar y Martina, con la máscara mágica
            <strong> Javier</strong>, corren en <strong>3D</strong>, giran y rompen cajas para detenerlo.
            <strong> {MAX_LEVELS} niveles</strong> y jefes.
          </p>

          <div className="mode-row">
            <button type="button" className={`mode-btn ${cameraMode === 'third' ? 'selected' : ''}`} onClick={() => setCameraMode('third')}>🎥 3ª persona</button>
            <button type="button" className={`mode-btn ${cameraMode === 'first' ? 'selected' : ''}`} onClick={() => setCameraMode('first')}>👁️ 1ª persona</button>
          </div>

          <p className="eyebrow" style={{ marginBottom: 6 }}>🔍 Tamaño de cámara · arrastra con el ratón para mirar</p>
          <div className="mode-row zoom-row">
            {ZOOM_ORDER.map((z) => (
              <button key={z} type="button" className={`mode-btn ${camZoom === z ? 'selected' : ''}`} onClick={() => setCamZoom(z)}>{ZOOM_LABEL[z]}</button>
            ))}
          </div>

          <div className="char-row">
            {(Object.keys(CHARS) as Character[]).map((id) => (
              <button key={id} type="button" className={`char-card ${character === id ? 'selected' : ''}`} onClick={() => setCharacter(id)} style={{ ['--cfur' as any]: `#${CHARS[id].fur.toString(16).padStart(6, '0')}` }}>
                <span className="char-face" style={{ background: `#${CHARS[id].fur.toString(16).padStart(6, '0')}` }}>
                  <span className="char-belly" style={{ background: `#${CHARS[id].belly.toString(16).padStart(6, '0')}` }} />
                </span>
                <span className="char-name">{CHARS[id].emoji} {CHARS[id].name}</span>
              </button>
            ))}
          </div>

          <div className="players">
            {names.length > 0 ? (
              names.map((n) => (
                <div key={n} className={`player-chip ${selectedName === n ? 'selected' : ''}`}>
                  <button type="button" className="player-chip-main" onClick={() => setSelectedName(n)}>
                    <span className="avatar">{n.charAt(0).toUpperCase()}</span>
                    <span className="player-name">{n}</span>
                    <span className="chip-best">🏆 {scores[n] || 0} · 🗺️ {progress[n] || 1}</span>
                  </button>
                  <button type="button" className="player-chip-remove" aria-label={`Quitar ${n}`} onClick={() => removeName(n)}>×</button>
                </div>
              ))
            ) : (<p className="empty">Aún no hay jugadores — añade uno abajo.</p>)}
          </div>

          <div className="add-row">
            <input value={nameInput} onChange={(e) => setNameInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addName()} type="text" maxLength={16} placeholder="Añade un nombre" />
            <button className="add-button" onClick={addName} disabled={!nameInput.trim()}>+ Añadir</button>
          </div>

          <button className="button-primary button-full" onClick={() => start(1)} disabled={!selectedName}>▶ Empezar aventura</button>
          {selectedName && unlocked > 1 && (
            <button className="button-secondary button-full" style={{ marginTop: 8 }} onClick={() => start(unlocked)}>⏩ Continuar (Nivel {unlocked})</button>
          )}
          {selectedName && (
            <p className="best-line">Juegas como <strong>{selectedName}</strong> con <strong>{CHARS[character].name}</strong> · cámara <strong>{cameraMode === 'third' ? '3ª' : '1ª'} persona</strong> · 🏆 {scores[selectedName] || 0}</p>
          )}
        </div>
      </div>
    );
  }

  // ===================== GAME =====================
  const hold = (key: 'left' | 'right' | 'fwd' | 'back' | 'jump', down: boolean) => () => {
    const k = keysRef.current;
    if (key === 'jump') { if (down && !k.jump) k.jumpPressed = true; k.jump = down; }
    else k[key] = down;
  };
  const spinTap = () => { keysRef.current.spinPressed = true; };
  const nextLevel = () => { loadLevel(levelNumRef.current + 1, false); statusRef.current = 'playing'; setStatus('playing'); };
  const retryLevel = () => { livesRef.current = START_LIVES; setLives(START_LIVES); shieldRef.current = false; setShield(false); invincRef.current = 0; setInvinc(0); loadLevel(levelNumRef.current, false); statusRef.current = 'playing'; setStatus('playing'); };

  return (
    <div className="app-shell">
      <header className="game-bar">
        <span className="player-tag">{CHARS[character].emoji} {username}</span>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="icon-button" onClick={toggleCam} aria-label="Cámara">{cameraMode === 'third' ? '🎥 3ª' : '👁️ 1ª'}</button>
          <button className="icon-button" onClick={cycleZoom} aria-label="Tamaño de cámara">🔍 {ZOOM_LABEL[camZoom]}</button>
          <button className="icon-button" onClick={() => setMuted((m) => !m)} aria-label="Sonido">{muted ? '🔇' : '🔊'}</button>
          <button className="stop-button" onClick={toMenu}>■ Salir</button>
        </div>
      </header>

      <div className="score-strip four">
        <div className="score-chip"><span>Nivel</span><strong>{levelNum}/{MAX_LEVELS}</strong></div>
        <div className="score-chip"><span>Puntos</span><strong>{score}</strong></div>
        <div className="score-chip"><span>Vidas</span><strong>{CHARS[character].emoji.repeat(Math.max(0, Math.min(lives, 5))) || '—'}</strong></div>
        <div className="score-chip"><span>{invinc > 0 || shield ? 'Javier' : 'Frutas'}</span><strong>{invinc > 0 ? '✨' : shield ? '🛡️' : `${fruit}/100`}</strong></div>
      </div>

      <div className="board-stage">
        <div className="board-frame">
          <div ref={containerRef} className="game-3d" />

          {bossMax > 0 && status === 'playing' && (
            <div className="boss-bar">
              <span>Norberto</span>
              <div className="boss-bar-track"><div className="boss-bar-fill" style={{ width: `${(bossHp / bossMax) * 100}%` }} /></div>
            </div>
          )}

          {status === 'playing' && showBossTips && (
            <div className="overlay"><div className="overlay-card">
              <p className="overlay-eyebrow">¡Jefe! · Guarida de Norberto</p>
              <h2>Cómo vencerlo 🐶</h2>
              <ul className="boss-tips">
                <li>🦘 <strong>Salta sobre su cabeza</strong> (Espacio / ⤒) <em>o</em> <strong>gírale al lado</strong> (J · X · ⟳).</li>
                <li>💥 Cuando <strong>parpadea</strong> es invulnerable — espera a que pare y vuelve a pegarle.</li>
                <li>⚫ Esquiva sus <strong>bombas</strong> moviéndote de lado (← →).</li>
                <li>🎭 Coge a <strong>Javier</strong> (el centro) para un escudo.</li>
                <li>❤️ Le bastan <strong>{bossMax} golpe{bossMax === 1 ? '' : 's'}</strong>.</li>
              </ul>
              <div className="overlay-actions"><button className="button-primary" onClick={() => setShowBossTips(false)}>▶ ¡A por él!</button></div>
            </div></div>
          )}

          {status === 'clear' && (
            <div className="overlay"><div className="overlay-card">
              <p className="overlay-eyebrow">Nivel superado</p>
              <h2>¡Bien hecho! 🎉</h2>
              <div className="overlay-score"><div><span>Puntos</span><strong>{score}</strong></div><div><span>Siguiente</span><strong>{levelNum + 1}</strong></div></div>
              <div className="overlay-actions"><button className="button-primary" onClick={nextLevel}>▶ Siguiente nivel</button><button className="button-secondary" onClick={toMenu}>‹ Menú</button></div>
            </div></div>
          )}

          {status === 'dead' && (
            <div className="overlay"><div className="overlay-card">
              <p className="overlay-eyebrow">Fin de la partida</p>
              <h2>¡Norberto gana esta vez!</h2>
              <div className="overlay-score"><div><span>Puntos</span><strong>{score}</strong></div><div><span>Récord</span><strong>{Math.max(best, score)}</strong></div></div>
              <div className="overlay-actions"><button className="button-primary" onClick={retryLevel}>↻ Reintentar nivel {levelNum}</button><button className="button-secondary" onClick={toMenu}>‹ Menú</button></div>
            </div></div>
          )}

          {status === 'victory' && (
            <div className="overlay"><div className="overlay-card">
              <p className="overlay-eyebrow">¡Aventura completada!</p>
              <h2>🏆 ¡Has vencido a Norberto!</h2>
              <p className="menu-copy" style={{ color: '#475569', margin: '0 0 14px' }}>Los animales de la isla son libres. ¡{CHARS[character].name} y Javier son héroes!</p>
              <div className="overlay-score"><div><span>Puntos finales</span><strong>{score}</strong></div></div>
              <div className="overlay-actions"><button className="button-primary" onClick={() => start(1)}>↻ Jugar otra vez</button><button className="button-secondary" onClick={toMenu}>‹ Menú</button></div>
            </div></div>
          )}
        </div>
      </div>

      {/* On-screen controls */}
      <div className="controls six">
        <button className="ctrl-btn" aria-label="Girar izquierda" onPointerDown={hold('left', true)} onPointerUp={hold('left', false)} onPointerLeave={hold('left', false)} onPointerCancel={hold('left', false)}>↺</button>
        <button className="ctrl-btn" aria-label="Avanzar" onPointerDown={hold('fwd', true)} onPointerUp={hold('fwd', false)} onPointerLeave={hold('fwd', false)} onPointerCancel={hold('fwd', false)}>▲</button>
        <button className="ctrl-btn" aria-label="Girar derecha" onPointerDown={hold('right', true)} onPointerUp={hold('right', false)} onPointerLeave={hold('right', false)} onPointerCancel={hold('right', false)}>↻</button>
        <button className="ctrl-btn jump" aria-label="Saltar" onPointerDown={hold('jump', true)} onPointerUp={hold('jump', false)} onPointerLeave={hold('jump', false)} onPointerCancel={hold('jump', false)}>⤒</button>
        <button className="ctrl-btn spin" aria-label="Girar ataque" onPointerDown={spinTap}>⟳</button>
      </div>

      <p className="hint">← → girar · ↑ avanzar (↓ atrás) · Espacio saltar · J/X giro-ataque · C cambia cámara · 🖱️ arrastra para mover la cámara · 🔍 zoom</p>
    </div>
  );
}

export default App;
