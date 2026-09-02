import { useEffect, useRef, useState } from 'react';
import './App.css';
import mapsData from './maps.json';

// Touch device? (phones / tablets) → show an on-screen move stick, look-pad and
// fire/reload buttons instead of relying on a keyboard + pointer-lock mouse.
const IS_TOUCH =
  typeof window !== 'undefined' &&
  (window.matchMedia?.('(pointer: coarse)').matches || 'ontouchstart' in window);

/* ======================================================================
   RIVALS 2 — a first-person arena shooter.
   Build an avatar, spend keys to unlock an arsenal, pick a map, then
   drop into a textured raycast arena and eliminate every Rival Bot.
   The whole match is drawn straight onto one <canvas> by the engine in
   <GameCanvas>; React only owns the menus and the saved profile.
   ====================================================================== */

// ---------- Weapons ----------
type WeaponId =
  | 'knife' | 'revolver' | 'smg' | 'shotgun' | 'rifle'
  | 'sniper' | 'rocket' | 'grenade' | 'medikit';
type Category = 'melee' | 'pistol' | 'smg' | 'shotgun' | 'rifle' | 'sniper' | 'rocket' | 'thrown' | 'heal';

interface WeaponDef {
  id: WeaponId;
  name: string;
  icon: string;
  price: number; // 0 = starter, always owned
  category: Category;
  kind: 'hitscan' | 'shotgun' | 'projectile' | 'thrown' | 'heal' | 'melee';
  damage: number;
  fireDelay: number; // seconds between shots
  auto: boolean;
  mag: number; // magazine size (0 = no magazine: melee/thrown/heal)
  reserve: number; // spare ammo per match (Infinity = unlimited)
  reloadTime: number; // seconds
  spread: number; // base inaccuracy (radians)
  cone: number; // aim-assist forgiveness (radians)
  pellets?: number; // shotgun
  blast?: number; // explosion radius (rocket/grenade)
  range?: number; // melee reach
  speed?: number; // projectile speed
  scope?: boolean; // sniper zoom
  desc: string;
}

const WEAPON_ORDER: WeaponId[] = [
  'knife', 'revolver', 'smg', 'shotgun', 'rifle', 'sniper', 'rocket', 'grenade', 'medikit'
];

const WEAPONS: Record<WeaponId, WeaponDef> = {
  knife: {
    id: 'knife', name: 'Combat Knife', icon: '🔪', price: 0, category: 'melee', kind: 'melee',
    damage: 55, fireDelay: 0.45, auto: false, mag: 0, reserve: Infinity, reloadTime: 0,
    spread: 0, cone: 0.5, range: 1.7,
    desc: 'Silent close-range backup. No ammo, big damage up close.'
  },
  revolver: {
    id: 'revolver', name: 'Revolver', icon: '🔫', price: 0, category: 'pistol', kind: 'hitscan',
    damage: 26, fireDelay: 0.34, auto: false, mag: 6, reserve: Infinity, reloadTime: 1.0,
    spread: 0.012, cone: 0.02,
    desc: 'Reliable starter sidearm. Six rounds, unlimited reloads.'
  },
  smg: {
    id: 'smg', name: 'SMG', icon: '🧨', price: 300, category: 'smg', kind: 'hitscan',
    damage: 14, fireDelay: 0.085, auto: true, mag: 25, reserve: 125, reloadTime: 1.6,
    spread: 0.05, cone: 0.02,
    desc: 'Full-auto bullet hose. Shreds up close, sprays at range.'
  },
  shotgun: {
    id: 'shotgun', name: 'Shotgun', icon: '💥', price: 450, category: 'shotgun', kind: 'shotgun',
    damage: 11, fireDelay: 0.8, auto: false, mag: 6, reserve: 24, reloadTime: 2.2,
    spread: 0.13, cone: 0.012, pellets: 8,
    desc: 'Eight pellets per blast. Devastating in your rival’s face.'
  },
  rifle: {
    id: 'rifle', name: 'Assault Rifle', icon: '🎖️', price: 700, category: 'rifle', kind: 'hitscan',
    damage: 21, fireDelay: 0.11, auto: true, mag: 30, reserve: 120, reloadTime: 2.0,
    spread: 0.03, cone: 0.018,
    desc: 'Balanced full-auto workhorse. Good at every range.'
  },
  sniper: {
    id: 'sniper', name: 'Sniper', icon: '🎯', price: 850, category: 'sniper', kind: 'hitscan',
    damage: 96, fireDelay: 1.2, auto: false, mag: 5, reserve: 20, reloadTime: 2.5,
    spread: 0.02, cone: 0.012, scope: true,
    desc: 'Right-click to scope. One well-placed shot nearly kills.'
  },
  rocket: {
    id: 'rocket', name: 'Rocket Launcher', icon: '🚀', price: 1200, category: 'rocket', kind: 'projectile',
    damage: 115, fireDelay: 1.4, auto: false, mag: 1, reserve: 6, reloadTime: 2.8,
    spread: 0, cone: 0, blast: 2.9, speed: 11,
    desc: 'Splash death. Mind your own blast radius.'
  },
  grenade: {
    id: 'grenade', name: 'Grenade', icon: '💣', price: 250, category: 'thrown', kind: 'thrown',
    damage: 85, fireDelay: 0.8, auto: false, mag: 0, reserve: 3, reloadTime: 0,
    spread: 0, cone: 0, blast: 2.7,
    desc: 'Lob it around cover. Three per match, big splash.'
  },
  medikit: {
    id: 'medikit', name: 'Medikit', icon: '🩹', price: 200, category: 'heal', kind: 'heal',
    damage: 0, fireDelay: 0.9, auto: false, mag: 0, reserve: 2, reloadTime: 0,
    spread: 0, cone: 0,
    desc: 'Patch yourself for +50 health. Two charges per match.'
  }
};

// ---------- Profile (persisted) ----------
interface Avatar {
  name: string;
  body: string;
  visor: string;
  accent: string;
}
interface Profile {
  keys: number;
  owned: WeaponId[];
  avatar: Avatar;
}

const BODY_COLORS = ['#38bdf8', '#22c55e', '#f59e0b', '#a855f7', '#ec4899', '#e2e8f0', '#64748b', '#0ea5e9'];
const VISOR_COLORS = ['#22d3ee', '#f43f5e', '#a3e635', '#fbbf24', '#c084fc', '#ffffff'];
const ACCENT_COLORS = ['#ef4444', '#f97316', '#eab308', '#10b981', '#3b82f6', '#8b5cf6'];

const STORAGE_KEY = 'rivals2:profile:v3';
const LEGACY_KEYS = ['rivals2:profile:v2', 'rivals2:profile:v1'];
const STARTERS: WeaponId[] = ['knife', 'revolver'];
const START_KEYS = 20_000_000_000_000; // 20 trillion keys — buy the whole armory and then some

/** Compact display for huge key counts: 20000000000000 -> "20T". */
function fmtKeys(n: number): string {
  const f = (v: number, s: string) => v.toLocaleString(undefined, { maximumFractionDigits: 2 }) + s;
  if (n >= 1e12) return f(n / 1e12, 'T');
  if (n >= 1e9) return f(n / 1e9, 'B');
  if (n >= 1e6) return f(n / 1e6, 'M');
  if (n >= 1e3) return f(n / 1e3, 'K');
  return String(Math.round(n));
}

function defaultProfile(): Profile {
  return {
    keys: START_KEYS,
    owned: [...STARTERS],
    avatar: { name: 'Rookie', body: '#38bdf8', visor: '#22d3ee', accent: '#ef4444' }
  };
}
function normalize(p: Partial<Profile>, keys: number): Profile {
  const owned = new Set<WeaponId>([...STARTERS, ...(((p.owned ?? []) as WeaponId[]).filter((id) => id in WEAPONS))]);
  return { ...defaultProfile(), ...p, keys, owned: [...owned], avatar: { ...defaultProfile().avatar, ...(p.avatar ?? {}) } };
}
function loadProfile(): Profile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) { const p = JSON.parse(raw) as Profile; return normalize(p, typeof p.keys === 'number' ? p.keys : START_KEYS); }
    // Migrate an older save: keep the avatar + unlocked weapons, grant the new stash.
    for (const k of LEGACY_KEYS) {
      const old = localStorage.getItem(k);
      if (old) return normalize(JSON.parse(old) as Profile, START_KEYS);
    }
    return defaultProfile();
  } catch {
    return defaultProfile();
  }
}
function saveProfile(p: Profile) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch { /* ignore */ }
}

// ---------- Maps ----------
interface MapTheme {
  wall: string;
  wallColor: string;
  sky: string[];
  floor: string[];
  fog: number;
}
interface MapDef {
  name: string;
  blurb: string;
  theme: MapTheme;
  player: [number, number];
  enemies: [number, number][];
  grid: string[];
}
const MAPS = mapsData as unknown as MapDef[];

// ======================================================================
//  Avatar sketch — shared by menu previews and the in-game HUD chip.
// ======================================================================
function drawAvatar(ctx: CanvasRenderingContext2D, a: Avatar, cx: number, cy: number, s: number) {
  ctx.save();
  ctx.translate(cx, cy);
  const round = (x: number, y: number, w: number, h: number, r: number) => {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  };
  ctx.fillStyle = '#1f2937';
  round(-s * 0.34, s * 0.5, s * 0.26, s * 0.5, s * 0.1); ctx.fill();
  round(s * 0.08, s * 0.5, s * 0.26, s * 0.5, s * 0.1); ctx.fill();
  ctx.fillStyle = a.body;
  round(-s * 0.5, -s * 0.15, s * 1.0, s * 0.78, s * 0.18); ctx.fill();
  ctx.fillStyle = a.accent;
  round(-s * 0.5, s * 0.22, s * 1.0, s * 0.12, s * 0.04); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.18)';
  round(-s * 0.5, -s * 0.15, s * 1.0, s * 0.12, s * 0.1); ctx.fill();
  ctx.fillStyle = a.body;
  round(-s * 0.32, -s * 0.62, s * 0.64, s * 0.5, s * 0.16); ctx.fill();
  ctx.fillStyle = a.visor;
  ctx.shadowColor = a.visor; ctx.shadowBlur = s * 0.25;
  round(-s * 0.24, -s * 0.5, s * 0.48, s * 0.2, s * 0.08); ctx.fill();
  ctx.shadowBlur = 0;
  ctx.restore();
}

// ======================================================================
//  Procedural textures (one offscreen canvas per wall material).
// ======================================================================
const TEX = 64;
function hexToRgb(hex: string) {
  const h = hex.replace('#', '');
  return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16) };
}
function makeWallTexture(kind: string, color: string): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = TEX; c.height = TEX;
  const x = c.getContext('2d')!;
  const { r, g, b } = hexToRgb(color);
  const shade = (m: number) => `rgb(${Math.round(r * m)},${Math.round(g * m)},${Math.round(b * m)})`;
  x.fillStyle = shade(0.85);
  x.fillRect(0, 0, TEX, TEX);

  if (kind === 'brick') {
    const bh = 16, bw = 32;
    for (let row = 0; row < TEX / bh; row++) {
      const off = row % 2 ? bw / 2 : 0;
      for (let col = -1; col < TEX / bw + 1; col++) {
        const bx = col * bw + off, by = row * bh;
        x.fillStyle = shade(0.82 + ((row + col) % 2) * 0.18);
        x.fillRect(bx + 1, by + 1, bw - 2, bh - 2);
      }
    }
    x.strokeStyle = 'rgba(0,0,0,0.45)'; x.lineWidth = 2;
    for (let row = 0; row <= TEX / bh; row++) { x.beginPath(); x.moveTo(0, row * bh); x.lineTo(TEX, row * bh); x.stroke(); }
  } else if (kind === 'metal') {
    for (let i = 0; i < TEX; i += 16) {
      x.fillStyle = shade(0.7); x.fillRect(0, i, TEX, 2);
      x.fillStyle = shade(1.05); x.fillRect(0, i + 2, TEX, 1);
    }
    x.fillStyle = shade(0.6);
    x.fillRect(TEX / 2 - 1, 0, 2, TEX);
    for (const [px, py] of [[6, 6], [TEX - 8, 6], [6, TEX - 8], [TEX - 8, TEX - 8]]) {
      x.fillStyle = shade(0.5); x.beginPath(); x.arc(px, py, 2.5, 0, Math.PI * 2); x.fill();
      x.fillStyle = shade(1.1); x.beginPath(); x.arc(px - 0.6, py - 0.6, 1, 0, Math.PI * 2); x.fill();
    }
  } else if (kind === 'tech') {
    x.fillStyle = 'rgb(250,240,224)'; x.fillRect(0, 0, TEX, TEX);
    x.strokeStyle = shade(1.0); x.lineWidth = 1;
    x.globalAlpha = 0.5;
    for (let i = 8; i < TEX; i += 12) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, TEX); x.stroke(); }
    x.globalAlpha = 1;
    x.fillStyle = shade(1.0); x.shadowColor = color; x.shadowBlur = 6;
    x.fillRect(4, TEX / 2 - 1, TEX - 8, 2);
    x.fillRect(TEX / 2 - 1, 6, 2, TEX - 12);
    x.shadowBlur = 0;
  } else { // concrete
    for (let i = 0; i < 320; i++) {
      const px = Math.floor(Math.random() * TEX), py = Math.floor(Math.random() * TEX);
      x.fillStyle = `rgba(0,0,0,${Math.random() * 0.12})`;
      x.fillRect(px, py, 1, 1);
    }
    x.strokeStyle = 'rgba(0,0,0,0.3)'; x.lineWidth = 1;
    x.beginPath(); x.moveTo(8, 0); x.lineTo(20, 30); x.lineTo(14, TEX); x.stroke();
    x.beginPath(); x.moveTo(TEX, 18); x.lineTo(40, 26); x.lineTo(48, TEX); x.stroke();
  }
  return c;
}

// Procedural floor texture (sampled per-pixel by the floor caster).
function makeFloorTexture(kind: string, color: string): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = TEX; c.height = TEX;
  const x = c.getContext('2d')!;
  const { r, g, b } = hexToRgb(color);
  const lift = (v: number) => Math.min(255, v + 30);
  const shade = (m: number) => `rgb(${Math.round(Math.min(255, lift(r) * m))},${Math.round(Math.min(255, lift(g) * m))},${Math.round(Math.min(255, lift(b) * m))})`;
  x.fillStyle = `rgb(${lift(r)},${lift(g)},${lift(b)})`;
  x.fillRect(0, 0, TEX, TEX);
  if (kind === 'tiles') {
    x.strokeStyle = 'rgba(0,0,0,0.4)'; x.lineWidth = 2;
    for (let i = 0; i <= TEX; i += 32) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, TEX); x.moveTo(0, i); x.lineTo(TEX, i); x.stroke(); }
    x.fillStyle = shade(1.08); x.fillRect(2, 2, 28, 28); x.fillRect(34, 34, 28, 28);
  } else if (kind === 'grate') {
    x.fillStyle = shade(0.7); for (let yy = 4; yy < TEX; yy += 12) x.fillRect(0, yy, TEX, 3);
    x.fillStyle = shade(0.45); for (let xx = 8; xx < TEX; xx += 16) for (let yy = 8; yy < TEX; yy += 16) { x.beginPath(); x.arc(xx, yy, 3, 0, Math.PI * 2); x.fill(); }
  } else if (kind === 'techfloor') {
    x.fillStyle = 'rgb(250,238,218)'; x.fillRect(0, 0, TEX, TEX);
    x.strokeStyle = shade(1.0); x.lineWidth = 1; x.shadowColor = color; x.shadowBlur = 4;
    for (let i = 0; i <= TEX; i += 16) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, TEX); x.moveTo(0, i); x.lineTo(TEX, i); x.stroke(); }
    x.shadowBlur = 0;
  } else {
    for (let i = 0; i < 420; i++) { const pxx = Math.floor(Math.random() * TEX), pyy = Math.floor(Math.random() * TEX); x.fillStyle = `rgba(0,0,0,${Math.random() * 0.14})`; x.fillRect(pxx, pyy, 1, 1); }
  }
  return c;
}

// Pre-render the rival bot to an offscreen canvas (normal + hit-flash).
function makeRobotSprite(accent: string, flash: boolean): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 112;
  const x = c.getContext('2d')!;
  const metal = flash ? '#fee2e2' : '#9aa6bb';
  const metalD = flash ? '#fca5a5' : '#5b6678';
  const dark = flash ? '#f87171' : '#3a4151';
  const panel = (px: number, py: number, w: number, h: number) => {
    const grad = x.createLinearGradient(px, py, px + w, py);
    grad.addColorStop(0, metalD); grad.addColorStop(0.5, metal); grad.addColorStop(1, metalD);
    x.fillStyle = grad; x.fillRect(px, py, w, h);
  };
  x.fillStyle = dark; x.fillRect(20, 84, 10, 26); x.fillRect(34, 84, 10, 26);
  x.fillStyle = metalD; x.fillRect(19, 104, 12, 6); x.fillRect(33, 104, 12, 6);
  panel(16, 40, 32, 48);
  x.fillStyle = accent; x.shadowColor = accent; x.shadowBlur = 10;
  x.beginPath(); x.arc(32, 60, 7, 0, Math.PI * 2); x.fill(); x.shadowBlur = 0;
  x.fillStyle = dark; x.fillRect(8, 42, 8, 38); x.fillRect(48, 42, 8, 38);
  x.fillStyle = '#11161f'; x.fillRect(50, 56, 14, 6);
  panel(22, 14, 20, 24);
  x.fillStyle = accent; x.shadowColor = accent; x.shadowBlur = 12;
  x.fillRect(25, 22, 14, 6); x.shadowBlur = 0;
  x.strokeStyle = dark; x.lineWidth = 2;
  x.beginPath(); x.moveTo(32, 14); x.lineTo(32, 6); x.stroke();
  x.fillStyle = accent; x.beginPath(); x.arc(32, 5, 2.5, 0, Math.PI * 2); x.fill();
  return c;
}

// ======================================================================
//  Synthesized sound (Web Audio — no asset files).
// ======================================================================
function makeAudio() {
  let ctx: AudioContext | null = null;
  let noiseBuf: AudioBuffer | null = null;
  let muted = false;
  const ensure = () => {
    if (!ctx) {
      try { ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)(); }
      catch { ctx = null; }
    }
    if (ctx && ctx.state === 'suspended') ctx.resume();
    return ctx;
  };
  const noise = (c: AudioContext) => {
    if (!noiseBuf) {
      noiseBuf = c.createBuffer(1, c.sampleRate, c.sampleRate);
      const d = noiseBuf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    return noiseBuf;
  };
  const burst = (dur: number, freq: number, type: BiquadFilterType, gain: number, when = 0) => {
    const c = ensure(); if (!c || muted) return;
    const t = c.currentTime + when;
    const src = c.createBufferSource(); src.buffer = noise(c);
    const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq;
    const gn = c.createGain();
    gn.gain.setValueAtTime(gain, t); gn.gain.exponentialRampToValueAtTime(0.001, t + dur);
    src.connect(f); f.connect(gn); gn.connect(c.destination);
    src.start(t); src.stop(t + dur);
  };
  const tone = (dur: number, f0: number, f1: number, type: OscillatorType, gain: number, when = 0) => {
    const c = ensure(); if (!c || muted) return;
    const t = c.currentTime + when;
    const o = c.createOscillator(); o.type = type;
    o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), t + dur);
    const gn = c.createGain();
    gn.gain.setValueAtTime(gain, t); gn.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(gn); gn.connect(c.destination);
    o.start(t); o.stop(t + dur);
  };
  return {
    resume: () => ensure(),
    toggleMute: () => { muted = !muted; return muted; },
    shot: (cat: Category) => {
      switch (cat) {
        case 'pistol': burst(0.12, 1300, 'lowpass', 0.3); tone(0.12, 300, 60, 'square', 0.1); break;
        case 'smg': burst(0.06, 1700, 'lowpass', 0.2); break;
        case 'shotgun': burst(0.32, 600, 'lowpass', 0.5); tone(0.3, 170, 45, 'sine', 0.3); break;
        case 'rifle': burst(0.09, 1500, 'lowpass', 0.28); tone(0.09, 260, 70, 'square', 0.1); break;
        case 'sniper': burst(0.36, 1000, 'lowpass', 0.5); tone(0.36, 190, 45, 'sine', 0.25); break;
        case 'rocket': tone(0.45, 320, 90, 'sawtooth', 0.25); break;
        default: burst(0.1, 1000, 'lowpass', 0.22);
      }
    },
    explosion: () => { burst(0.55, 240, 'lowpass', 0.6); tone(0.6, 130, 35, 'sine', 0.45); },
    reload: () => { tone(0.05, 520, 360, 'square', 0.12); },
    hit: () => tone(0.06, 1500, 1900, 'square', 0.1),
    hurt: () => { burst(0.25, 440, 'lowpass', 0.32); tone(0.2, 200, 80, 'sine', 0.18); },
    empty: () => tone(0.05, 180, 140, 'square', 0.07),
    melee: () => burst(0.08, 2600, 'highpass', 0.2),
    step: () => burst(0.05, 320, 'lowpass', 0.05),
    death: () => { tone(0.5, 220, 40, 'sawtooth', 0.3); burst(0.5, 300, 'lowpass', 0.3); },
    win: () => { tone(0.15, 520, 660, 'square', 0.18); tone(0.2, 660, 880, 'square', 0.18, 0.15); }
  };
}

// ======================================================================
//  THE GAME ENGINE
// ======================================================================
type MatchResult = 'win' | 'lose';

interface Enemy { x: number; y: number; hp: number; maxHp: number; alive: boolean; fireCd: number; hitFlash: number; moveCd: number; strafe: number; deathT: number; }
interface Projectile { x: number; y: number; vx: number; vy: number; life: number; kind: 'grenade' | 'rocket'; blast: number; damage: number; }
interface Particle { x: number; y: number; vx: number; vy: number; life: number; max: number; color: string; size: number; }
interface Explosion { x: number; y: number; t: number; r: number; }
interface Tracer { x: number; y: number; t: number; }

function GameCanvas({ profile, mapIndex, onEnd, onExit }: {
  profile: Profile; mapIndex: number; onEnd: (r: MatchResult, earned: number) => void; onExit: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // On-screen touch controls (phones/tablets). The game loop below wires its
  // input straight into these elements when IS_TOUCH.
  const joyRef = useRef<HTMLDivElement>(null);
  const knobRef = useRef<HTMLDivElement>(null);
  const lookRef = useRef<HTMLDivElement>(null);
  const fireRef = useRef<HTMLButtonElement>(null);
  const reloadRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const W = canvas.width, H = canvas.height;
    const av = profile.avatar;
    const audio = makeAudio();

    const def = MAPS[mapIndex];
    const grid = def.grid;
    const MAP_W = grid[0].length, MAP_H = grid.length;
    const theme = def.theme;
    const ENEMY_COLOR = '#ff5252';

    const wallTex = makeWallTexture(theme.wall, theme.wallColor);
    const robot = makeRobotSprite(ENEMY_COLOR, false);
    const robotHit = makeRobotSprite(ENEMY_COLOR, true);

    // floor caster: a sampled texture + a reusable full-frame pixel buffer
    const FLOOR_KIND: Record<string, string> = { metal: 'grate', brick: 'tiles', tech: 'techfloor', concrete: 'concrete' };
    const floorCanvas = makeFloorTexture(FLOOR_KIND[theme.wall] ?? 'concrete', theme.floor[0]);
    const floorPix = floorCanvas.getContext('2d')!.getImageData(0, 0, TEX, TEX).data;
    const frameImg = ctx.createImageData(W, H);
    const fdata = frameImg.data;

    const isWall = (x: number, y: number) =>
      x < 0 || y < 0 || x >= MAP_W || y >= MAP_H || grid[Math.floor(y)][Math.floor(x)] === '#';
    const canStand = (x: number, y: number, r = 0.22) =>
      !isWall(x - r, y) && !isWall(x + r, y) && !isWall(x, y - r) && !isWall(x, y + r);
    const hasLOS = (ax: number, ay: number, bx: number, by: number) => {
      const dx = bx - ax, dy = by - ay, dist = Math.hypot(dx, dy);
      const steps = Math.ceil(dist / 0.08), sx = dx / steps, sy = dy / steps;
      let x = ax, y = ay;
      for (let i = 0; i < steps; i++) { x += sx; y += sy; if (isWall(x, y)) return false; }
      return true;
    };

    // ---- player ----
    let px = def.player[0], py = def.player[1];
    // face roughly toward the arena centre
    let angle = Math.atan2(MAP_H / 2 - py, MAP_W / 2 - px);
    const BASE_FOV = 1.05;
    let fov = BASE_FOV;
    let hp = 100;
    let bobT = 0, viewBob = 0, stepT = 0;
    let shake = 0, kick = 0; // kick = vertical recoil of the camera
    let clock = 0; // seconds since match start (for pulsing effects)
    let bloom = 0; // dynamic spread from sustained fire

    // ---- loadout ----
    const slots = WEAPON_ORDER.filter((id) => profile.owned.includes(id));
    let cur = Math.max(0, slots.indexOf('revolver'));
    type WState = { mag: number; reserve: number };
    const ws: Record<string, WState> = {};
    for (const id of slots) {
      const w = WEAPONS[id];
      ws[id] = { mag: w.mag, reserve: w.reserve };
    }
    let fireCd = 0, recoil = 0, muzzle = 0;
    let firing = false, shootQueued = false, zooming = false;
    let reloadT = 0, reloadingId: string | null = null;

    // ---- enemies & fx ----
    const enemies: Enemy[] = def.enemies.map(([ex, ey]) => ({
      x: ex, y: ey, hp: 120, maxHp: 120, alive: true, fireCd: 1.4 + Math.random(), hitFlash: 0, moveCd: 0, strafe: 1, deathT: 0
    }));
    const projectiles: Projectile[] = [];
    const explosions: Explosion[] = [];
    const particles: Particle[] = [];
    const tracers: Tracer[] = [];
    let hitMarker = 0, damageFlash = 0;
    let msg = '', msgT = 0;
    const flash = (m: string) => { msg = m; msgT = 1.4; };

    // ---- run state ----
    let started = false, paused = false, over = false;
    let result: MatchResult | null = null, overTimer = 0;

    // camera vectors (recomputed each frame)
    let dirX = 1, dirY = 0, planeX = 0, planeY = Math.tan(BASE_FOV / 2);
    const zBuffer = new Float32Array(W);

    const spawnParticles = (x: number, y: number, n: number, color: string, spd: number) => {
      for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2, s = Math.random() * spd;
        particles.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 0.4 + Math.random() * 0.3, max: 0.7, color, size: 1 + Math.random() * 2 });
      }
      if (particles.length > 220) particles.splice(0, particles.length - 220);
    };

    // ---------------- input ----------------
    const keys: Record<string, boolean> = {};
    const selectSlot = (i: number) => {
      if (i < 0 || i >= slots.length || i === cur) return;
      cur = i; reloadT = 0; reloadingId = null; bloom = 0;
    };
    const onKeyDown = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(k)) e.preventDefault();
      keys[k] = true;
      if (k === ' ') { firing = true; shootQueued = true; }
      if (k === 'r') startReload();
      if (k === 'q') selectSlot((cur - 1 + slots.length) % slots.length);
      if (k >= '1' && k <= '9') selectSlot(Number(k) - 1);
    };
    const onKeyUp = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      keys[k] = false;
      if (k === ' ') firing = false;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (document.pointerLockElement === canvas && !paused) angle += e.movementX * 0.0023;
    };
    const onMouseDown = (e: MouseEvent) => {
      if (e.button === 2) { zooming = true; return; }
      if (e.button !== 0) return;
      if (!started) { started = true; audio.resume(); flash('ELIMINATE THE RIVALS'); canvas.requestPointerLock?.(); return; }
      if (paused) { canvas.requestPointerLock?.(); return; }
      firing = true; shootQueued = true;
    };
    const onMouseUp = (e: MouseEvent) => {
      if (e.button === 2) zooming = false;
      if (e.button === 0) firing = false;
    };
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      selectSlot((cur + (e.deltaY > 0 ? 1 : -1) + slots.length) % slots.length);
    };
    const onCtx = (e: Event) => e.preventDefault();
    // Touch has no pointer lock, so never auto-pause on it.
    const onPlChange = () => { if (IS_TOUCH) return; if (started && !over && document.pointerLockElement !== canvas) paused = true; else paused = false; };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('wheel', onWheel, { passive: false });
    canvas.addEventListener('contextmenu', onCtx);
    document.addEventListener('pointerlockchange', onPlChange);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    // ---------------- touch controls (phones/tablets) ----------------
    const touchCleanup: Array<() => void> = [];
    // Begin the match on the first touch (a tap also resumes the audio engine).
    // Returns true if this call is what started it, so a start-tap doesn't also fire.
    const ensureStarted = (): boolean => {
      if (!started) { started = true; audio.resume(); flash('ELIMINATE THE RIVALS'); return true; }
      return false;
    };
    if (IS_TOUCH) {
      // Drag anywhere on the arena to turn.
      const lookEl = lookRef.current;
      if (lookEl) {
        let ptr: number | null = null, lx = 0;
        const down = (e: PointerEvent) => { if (ptr !== null) return; ptr = e.pointerId; lx = e.clientX; ensureStarted(); };
        const move = (e: PointerEvent) => { if (e.pointerId !== ptr) return; angle += (e.clientX - lx) * 0.005; lx = e.clientX; };
        const up = (e: PointerEvent) => { if (e.pointerId === ptr) ptr = null; };
        lookEl.addEventListener('pointerdown', down);
        lookEl.addEventListener('pointermove', move);
        lookEl.addEventListener('pointerup', up);
        lookEl.addEventListener('pointercancel', up);
        touchCleanup.push(() => {
          lookEl.removeEventListener('pointerdown', down);
          lookEl.removeEventListener('pointermove', move);
          lookEl.removeEventListener('pointerup', up);
          lookEl.removeEventListener('pointercancel', up);
        });
      }
      // Left-thumb joystick → WASD.
      const joyEl = joyRef.current, knobEl = knobRef.current;
      if (joyEl) {
        let ptr: number | null = null, cx = 0, cy = 0;
        const R = 50;
        const reset = () => { keys['w'] = keys['a'] = keys['s'] = keys['d'] = false; if (knobEl) knobEl.style.transform = 'translate(0px,0px)'; };
        const apply = (x: number, y: number) => {
          const dx = x - cx, dy = y - cy, dist = Math.hypot(dx, dy) || 1, cl = Math.min(dist, R);
          if (knobEl) knobEl.style.transform = `translate(${(dx / dist) * cl}px, ${(dy / dist) * cl}px)`;
          const nx = dx / R, ny = dy / R, dead = 0.35;
          keys['w'] = ny < -dead; keys['s'] = ny > dead; keys['a'] = nx < -dead; keys['d'] = nx > dead;
        };
        const down = (e: PointerEvent) => { ptr = e.pointerId; const r = joyEl.getBoundingClientRect(); cx = r.left + r.width / 2; cy = r.top + r.height / 2; joyEl.setPointerCapture(e.pointerId); ensureStarted(); apply(e.clientX, e.clientY); };
        const move = (e: PointerEvent) => { if (e.pointerId !== ptr) return; apply(e.clientX, e.clientY); };
        const up = (e: PointerEvent) => { if (e.pointerId !== ptr) return; ptr = null; reset(); };
        joyEl.addEventListener('pointerdown', down);
        joyEl.addEventListener('pointermove', move);
        joyEl.addEventListener('pointerup', up);
        joyEl.addEventListener('pointercancel', up);
        touchCleanup.push(() => {
          joyEl.removeEventListener('pointerdown', down);
          joyEl.removeEventListener('pointermove', move);
          joyEl.removeEventListener('pointerup', up);
          joyEl.removeEventListener('pointercancel', up);
        });
      }
      // Fire button (hold for automatic weapons).
      const fireEl = fireRef.current;
      if (fireEl) {
        const down = (e: PointerEvent) => { e.preventDefault(); if (ensureStarted()) return; firing = true; shootQueued = true; };
        const up = (e: PointerEvent) => { e.preventDefault(); firing = false; };
        fireEl.addEventListener('pointerdown', down);
        fireEl.addEventListener('pointerup', up);
        fireEl.addEventListener('pointercancel', up);
        fireEl.addEventListener('pointerleave', up);
        touchCleanup.push(() => {
          fireEl.removeEventListener('pointerdown', down);
          fireEl.removeEventListener('pointerup', up);
          fireEl.removeEventListener('pointercancel', up);
          fireEl.removeEventListener('pointerleave', up);
        });
      }
      // Reload button.
      const reloadEl = reloadRef.current;
      if (reloadEl) {
        const down = (e: PointerEvent) => { e.preventDefault(); ensureStarted(); startReload(); };
        reloadEl.addEventListener('pointerdown', down);
        touchCleanup.push(() => reloadEl.removeEventListener('pointerdown', down));
      }
    }

    // ---------------- weapon actions ----------------
    function startReload() {
      const w = WEAPONS[slots[cur]];
      if (w.mag <= 0 || reloadingId) return;
      const st = ws[w.id];
      if (st.mag >= w.mag || st.reserve <= 0) return;
      reloadingId = w.id; reloadT = w.reloadTime; audio.reload();
    }
    function finishReload(w: WeaponDef) {
      const st = ws[w.id];
      const need = w.mag - st.mag;
      const take = st.reserve === Infinity ? need : Math.min(need, st.reserve);
      st.mag += take;
      if (st.reserve !== Infinity) st.reserve -= take;
      reloadingId = null; audio.reload();
    }

    // angle-based hit test against the nearest alive enemy in the cone
    function pickHit(aimError: number, cone: number, maxRange = 99): Enemy | null {
      let best: Enemy | null = null, bestD = Infinity;
      for (const e of enemies) {
        if (!e.alive) continue;
        const ex = e.x - px, ey = e.y - py, d = Math.hypot(ex, ey);
        if (d > maxRange) continue;
        let diff = Math.atan2(ey, ex) - (angle + aimError);
        while (diff > Math.PI) diff -= Math.PI * 2;
        while (diff < -Math.PI) diff += Math.PI * 2;
        const half = Math.atan2(0.5, Math.max(0.4, d)) + cone;
        if (Math.abs(diff) < half && d < bestD && hasLOS(px, py, e.x, e.y)) { best = e; bestD = d; }
      }
      return best;
    }
    function damageEnemy(e: Enemy, dmg: number) {
      e.hp -= dmg; e.hitFlash = 0.16; hitMarker = 0.22; audio.hit();
      spawnParticles(e.x, e.y, 6, '#ffd27f', 2.4);
      if (e.hp <= 0 && e.alive) {
        e.alive = false; e.deathT = 0.55; audio.death();
        spawnParticles(e.x, e.y, 22, '#ff7043', 3.2);
        explosions.push({ x: e.x, y: e.y, t: 0.4, r: 1.4 });
      }
    }

    function doFire() {
      const w = WEAPONS[slots[cur]];
      const st = ws[w.id];
      if (reloadingId) return;

      if (w.kind === 'heal') {
        if (st.reserve > 0 && hp < 100) { hp = Math.min(100, hp + 50); st.reserve -= 1; recoil = 1; fireCd = w.fireDelay; flash('+50 HEALTH'); audio.reload(); }
        else { fireCd = 0.25; if (hp >= 100) flash('HEALTH FULL'); }
        return;
      }
      if (w.kind === 'melee') {
        recoil = 1; kick = Math.max(kick, 3); fireCd = w.fireDelay; audio.melee();
        const e = pickHit(0, w.cone, w.range);
        if (e) damageEnemy(e, w.damage);
        return;
      }
      if (w.kind === 'thrown') {
        if (st.reserve > 0) { projectiles.push({ x: px + dirX * 0.4, y: py + dirY * 0.4, vx: dirX * 7, vy: dirY * 7, life: 1.3, kind: 'grenade', blast: w.blast!, damage: w.damage }); st.reserve -= 1; recoil = 1; fireCd = w.fireDelay; }
        else fireCd = 0.25;
        return;
      }
      // mag weapons: handle ammo / reload
      if (st.mag <= 0) { if (st.reserve > 0) startReload(); else audio.empty(); fireCd = 0.2; return; }
      st.mag -= 1; recoil = 1; muzzle = 0.06; fireCd = w.fireDelay;
      shake = Math.max(shake, w.category === 'rocket' || w.category === 'sniper' ? 7 : w.category === 'shotgun' ? 6 : 3);
      kick = Math.max(kick, w.category === 'rocket' || w.category === 'sniper' ? 12 : w.category === 'shotgun' ? 10 : 5);
      bloom = Math.min(1, bloom + (w.auto ? 0.16 : 0.3));
      audio.shot(w.category);

      if (w.kind === 'projectile') {
        projectiles.push({ x: px + dirX * 0.5, y: py + dirY * 0.5, vx: dirX * w.speed!, vy: dirY * w.speed!, life: 2.2, kind: 'rocket', blast: w.blast!, damage: w.damage });
        return;
      }
      const scoped = w.scope && fov < BASE_FOV * 0.7;
      const spreadAmt = (w.spread + bloom * w.spread * 2) * (scoped ? 0.15 : 1);
      if (w.kind === 'shotgun') {
        for (let i = 0; i < (w.pellets ?? 1); i++) {
          const e = pickHit((Math.random() - 0.5) * 2 * w.spread, w.cone);
          if (e) damageEnemy(e, w.damage);
        }
      } else {
        tracers.push({ x: px + dirX, y: py + dirY, t: 0.05 });
        const e = pickHit((Math.random() - 0.5) * 2 * spreadAmt, w.cone);
        if (e) damageEnemy(e, w.damage);
      }
    }

    function explodeAt(x: number, y: number, blast: number, dmg: number) {
      explosions.push({ x, y, t: 0.45, r: blast });
      spawnParticles(x, y, 18, '#ffb74d', 3.4);
      audio.explosion(); shake = Math.max(shake, 9);
      for (const e of enemies) {
        if (!e.alive) continue;
        const d = Math.hypot(e.x - x, e.y - y);
        if (d < blast && hasLOS(x, y, e.x, e.y)) damageEnemy(e, Math.round(dmg * (1 - d / blast)));
      }
      const dp = Math.hypot(px - x, py - y);
      if (dp < blast && hasLOS(x, y, px, py)) { hp -= Math.round(dmg * 0.45 * (1 - dp / blast)); damageFlash = 0.6; }
    }

    // ---------------- update ----------------
    function update(dt: number) {
      fireCd = Math.max(0, fireCd - dt);
      recoil = Math.max(0, recoil - dt * 4);
      muzzle = Math.max(0, muzzle - dt);
      hitMarker = Math.max(0, hitMarker - dt);
      damageFlash = Math.max(0, damageFlash - dt * 1.6);
      msgT = Math.max(0, msgT - dt);
      shake = Math.max(0, shake - dt * 30);
      kick = Math.max(0, kick - dt * 36);
      clock += dt;
      bloom = Math.max(0, bloom - dt * 1.4);
      for (const e of enemies) {
        e.hitFlash = Math.max(0, e.hitFlash - dt);
        if (!e.alive && e.deathT > 0) e.deathT = Math.max(0, e.deathT - dt);
      }

      const w = WEAPONS[slots[cur]];
      const wantZoom = zooming && !!w.scope;
      fov += ((wantZoom ? BASE_FOV * 0.4 : BASE_FOV) - fov) * Math.min(1, dt * 12);
      dirX = Math.cos(angle); dirY = Math.sin(angle);
      const planeLen = Math.tan(fov / 2);
      planeX = -dirY * planeLen; planeY = dirX * planeLen;

      if (reloadingId) { reloadT -= dt; if (reloadT <= 0) finishReload(WEAPONS[reloadingId as WeaponId]); }

      if (over) { overTimer += dt; return; }
      if (!started || paused) return;

      // movement
      const moveSpeed = 2.8 * dt, turnSpeed = 2.4 * dt;
      const strafeX = -dirY, strafeY = dirX;
      let mx = 0, my = 0;
      if (keys['w'] || keys['arrowup']) { mx += dirX; my += dirY; }
      if (keys['s'] || keys['arrowdown']) { mx -= dirX; my -= dirY; }
      if (keys['a']) { mx += strafeX; my += strafeY; }
      if (keys['d']) { mx -= strafeX; my -= strafeY; }
      if (keys['arrowleft']) angle -= turnSpeed;
      if (keys['arrowright']) angle += turnSpeed;
      const moving = mx !== 0 || my !== 0;
      if (moving) {
        const ml = Math.hypot(mx, my);
        const nx = px + (mx / ml) * moveSpeed, ny = py + (my / ml) * moveSpeed;
        if (canStand(nx, py)) px = nx;
        if (canStand(px, ny)) py = ny;
        bobT += dt * 9; viewBob = Math.sin(bobT) * 5;
        stepT -= dt; if (stepT <= 0) { audio.step(); stepT = 0.42; }
      } else { viewBob *= 0.85; }

      // firing
      if (w.auto ? firing : shootQueued) { if (fireCd <= 0) doFire(); }
      shootQueued = false;

      // projectiles
      for (let i = projectiles.length - 1; i >= 0; i--) {
        const g = projectiles[i];
        g.life -= dt;
        const gx = g.x + g.vx * dt, gy = g.y + g.vy * dt;
        let boom = false;
        if (g.kind === 'rocket') {
          if (isWall(gx, gy)) boom = true;
          else { g.x = gx; g.y = gy; }
          for (const e of enemies) if (e.alive && Math.hypot(e.x - g.x, e.y - g.y) < 0.6) boom = true;
        } else {
          if (isWall(gx, g.y)) g.vx *= -0.4; else g.x = gx;
          if (isWall(g.x, gy)) g.vy *= -0.4; else g.y = gy;
          g.vx *= 0.985; g.vy *= 0.985;
        }
        if (boom || g.life <= 0) { explodeAt(g.x, g.y, g.blast, g.damage); projectiles.splice(i, 1); }
      }
      for (let i = explosions.length - 1; i >= 0; i--) { explosions[i].t -= dt; if (explosions[i].t <= 0) explosions.splice(i, 1); }
      for (let i = tracers.length - 1; i >= 0; i--) { tracers[i].t -= dt; if (tracers[i].t <= 0) tracers.splice(i, 1); }
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]; p.life -= dt;
        p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= 0.92; p.vy *= 0.92;
        if (p.life <= 0) particles.splice(i, 1);
      }

      // enemy AI
      for (const e of enemies) {
        if (!e.alive) continue;
        e.fireCd -= dt; e.moveCd -= dt;
        const dx = px - e.x, dy = py - e.y, dist = Math.hypot(dx, dy) || 1;
        const los = hasLOS(e.x, e.y, px, py);
        const espd = 1.7 * dt;
        let ex = 0, ey = 0;
        if (los) {
          if (dist > 5) { ex += dx / dist; ey += dy / dist; }
          else if (dist < 2.6) { ex -= dx / dist; ey -= dy / dist; }
          if (e.moveCd <= 0) { e.strafe = Math.random() < 0.5 ? 1 : -1; e.moveCd = 1.1; }
          ex += (-dy / dist) * e.strafe * 0.7; ey += (dx / dist) * e.strafe * 0.7;
        } else { ex += dx / dist; ey += dy / dist; }
        const el = Math.hypot(ex, ey) || 1;
        const enx = e.x + (ex / el) * espd, eny = e.y + (ey / el) * espd;
        if (canStand(enx, e.y, 0.3)) e.x = enx;
        if (canStand(e.x, eny, 0.3)) e.y = eny;
        if (los && e.fireCd <= 0) {
          e.fireCd = 0.9 + Math.random() * 0.8;
          tracers.push({ x: e.x, y: e.y, t: 0.1 });
          const hitChance = (moving ? 0.4 : 0.58) * Math.min(1, 5 / dist);
          if (Math.random() < hitChance) { hp -= 8 + Math.floor(Math.random() * 7); damageFlash = 0.6; shake = Math.max(shake, 4); audio.hurt(); }
        }
      }

      // win / lose
      if (hp <= 0) { hp = 0; result = 'lose'; over = true; }
      else if (enemies.every((e) => !e.alive)) { result = 'win'; over = true; audio.win(); }
    }

    // ---------------- projection ----------------
    function project(x: number, y: number) {
      const ex = x - px, ey = y - py;
      const invDet = 1 / (planeX * dirY - dirX * planeY);
      return { tx: invDet * (dirY * ex - dirX * ey), ty: invDet * (-planeY * ex + planeX * ey) };
    }

    // ---------------- render ----------------
    function render() {
      const sX = shake > 0.2 ? (Math.random() - 0.5) * shake : 0;
      const sY = shake > 0.2 ? (Math.random() - 0.5) * shake : 0;
      ctx.save();
      ctx.translate(sX, sY);
      const HALF = H / 2 + viewBob - kick;

      // sky / ceiling gradient over the whole frame (floor overwrites the lower half)
      const sky = ctx.createLinearGradient(0, -20, 0, HALF);
      const sc = theme.sky;
      sky.addColorStop(0, sc[0]); sky.addColorStop(1, sc[sc.length - 1]);
      ctx.fillStyle = sky; ctx.fillRect(-20, -20, W + 40, H + 40);

      // textured floor — perspective-correct floor casting into the pixel buffer
      const startRow = Math.max(0, Math.floor(HALF) + 1);
      if (startRow < H) {
        const rdx0 = dirX - planeX, rdy0 = dirY - planeY;
        const rdx1 = dirX + planeX, rdy1 = dirY + planeY;
        const posZ = 0.5 * H;
        for (let y = startRow; y < H; y++) {
          const p = y - HALF;
          const rowDist = posZ / p;
          const stepX = (rowDist * (rdx1 - rdx0)) / W * 2;
          const stepY = (rowDist * (rdy1 - rdy0)) / W * 2;
          let fx = px + rowDist * rdx0;
          let fy = py + rowDist * rdy0;
          const b = 0.16 + 0.84 * Math.max(0, Math.min(1, 1 - rowDist / theme.fog));
          // distance fades toward a warm white haze (not black) so the arena reads bright
          const w = 1 - b;
          const rowBase = y * W * 4;
          for (let x = 0; x < W; x += 2) {
            const tx = ((fx * TEX) | 0) & (TEX - 1);
            const ty = ((fy * TEX) | 0) & (TEX - 1);
            const si = (ty * TEX + tx) * 4;
            const di = rowBase + x * 4;
            const rr = floorPix[si] * b + 255 * w, gg = floorPix[si + 1] * b + 246 * w, bb = floorPix[si + 2] * b + 224 * w;
            fdata[di] = rr; fdata[di + 1] = gg; fdata[di + 2] = bb; fdata[di + 3] = 255;
            fdata[di + 4] = rr; fdata[di + 5] = gg; fdata[di + 6] = bb; fdata[di + 7] = 255;
            fx += stepX; fy += stepY;
          }
        }
        ctx.putImageData(frameImg, Math.round(sX), Math.round(sY), 0, startRow, W, H - startRow);
      }

      // walls (textured DDA raycast)
      for (let x = 0; x < W; x++) {
        const cameraX = (2 * x) / W - 1;
        const rdx = dirX + planeX * cameraX, rdy = dirY + planeY * cameraX;
        let mapX = Math.floor(px), mapY = Math.floor(py);
        const ddx = rdx === 0 ? 1e30 : Math.abs(1 / rdx), ddy = rdy === 0 ? 1e30 : Math.abs(1 / rdy);
        let stepX: number, stepY: number, sdx: number, sdy: number;
        if (rdx < 0) { stepX = -1; sdx = (px - mapX) * ddx; } else { stepX = 1; sdx = (mapX + 1 - px) * ddx; }
        if (rdy < 0) { stepY = -1; sdy = (py - mapY) * ddy; } else { stepY = 1; sdy = (mapY + 1 - py) * ddy; }
        let side = 0;
        for (let hops = 0; hops < 80; hops++) {
          if (sdx < sdy) { sdx += ddx; mapX += stepX; side = 0; }
          else { sdy += ddy; mapY += stepY; side = 1; }
          if (mapX < 0 || mapY < 0 || mapX >= MAP_W || mapY >= MAP_H) break;
          if (grid[mapY][mapX] === '#') break;
        }
        const perp = Math.max(0.0001, side === 0 ? sdx - ddx : sdy - ddy);
        zBuffer[x] = perp;
        const lineH = H / perp;
        const y0 = HALF - lineH / 2;
        // texture column
        let wallX = side === 0 ? py + perp * rdy : px + perp * rdx;
        wallX -= Math.floor(wallX);
        let texX = Math.floor(wallX * TEX);
        if (side === 0 && rdx > 0) texX = TEX - 1 - texX;
        if (side === 1 && rdy < 0) texX = TEX - 1 - texX;
        ctx.drawImage(wallTex, texX, 0, 1, TEX, x, y0, 1, lineH);
        // subtle darkening on side-facing walls keeps a sense of depth
        if (side === 1) { ctx.fillStyle = 'rgba(0,0,0,0.16)'; ctx.fillRect(x, y0, 1, lineH); }
        // distance fades toward a warm white haze so far walls stay bright, not black
        const fog = Math.max(0, Math.min(1, perp / theme.fog));
        ctx.fillStyle = `rgba(255,246,230,${0.9 * fog})`;
        ctx.fillRect(x, y0, 1, lineH);
      }

      // billboards (enemies + projectiles + explosions + particles), far → near
      type BB = { ty: number; draw: () => void };
      const bbs: BB[] = [];
      for (const e of enemies) {
        if (!e.alive && e.deathT <= 0) continue;
        const { tx, ty } = project(e.x, e.y);
        if (ty <= 0.2) continue;
        if (e.alive) bbs.push({ ty, draw: () => drawEnemy(e, tx, ty, HALF, 1, 0) });
        else { const k = e.deathT / 0.55; bbs.push({ ty, draw: () => drawEnemy(e, tx, ty, HALF, k, 1 - k) }); }
      }
      for (const g of projectiles) {
        const { tx, ty } = project(g.x, g.y);
        if (ty <= 0.2) continue;
        bbs.push({ ty, draw: () => {
          const sx = (W / 2) * (1 + tx / ty);
          if (sx < 0 || sx >= W || ty >= zBuffer[Math.floor(sx)]) return;
          const sy = HALF + (H / ty) * 0.32, size = Math.min(36, (H / ty) * 0.1);
          ctx.fillStyle = g.kind === 'rocket' ? '#fbbf24' : '#1f2937';
          ctx.beginPath(); ctx.arc(sx, sy, size, 0, Math.PI * 2); ctx.fill();
          if (g.kind === 'rocket') { ctx.fillStyle = 'rgba(255,120,40,0.7)'; ctx.beginPath(); ctx.arc(sx, sy, size * 1.7, 0, Math.PI * 2); ctx.fill(); }
        } });
      }
      for (const p of particles) {
        const { tx, ty } = project(p.x, p.y);
        if (ty <= 0.2) continue;
        bbs.push({ ty, draw: () => {
          const sx = (W / 2) * (1 + tx / ty);
          if (sx < 0 || sx >= W || ty >= zBuffer[Math.floor(sx)]) return;
          ctx.globalAlpha = Math.max(0, p.life / p.max);
          ctx.fillStyle = p.color;
          const s = p.size * (H / ty) * 0.012;
          ctx.fillRect(sx - s / 2, HALF + (H / ty) * 0.2 - s / 2, s, s);
          ctx.globalAlpha = 1;
        } });
      }
      for (const ex of explosions) {
        const { tx, ty } = project(ex.x, ex.y);
        if (ty <= 0.2) continue;
        bbs.push({ ty, draw: () => {
          const sx = (W / 2) * (1 + tx / ty), sy = HALF + (H / ty) * 0.18;
          const prog = 1 - ex.t / 0.45, rad = (H / ty) * 0.5 * ex.r * prog;
          const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, rad + 1);
          grad.addColorStop(0, `rgba(255,245,190,${0.9 * (1 - prog)})`);
          grad.addColorStop(0.5, `rgba(249,115,22,${0.8 * (1 - prog)})`);
          grad.addColorStop(1, 'rgba(120,20,20,0)');
          ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(sx, sy, rad + 1, 0, Math.PI * 2); ctx.fill();
        } });
      }
      bbs.sort((a, b) => b.ty - a.ty);
      for (const bb of bbs) bb.draw();

      // enemy shot tracers
      for (const tr of tracers) {
        const { tx, ty } = project(tr.x, tr.y);
        if (ty <= 0.2) continue;
        const sx = (W / 2) * (1 + tx / ty);
        ctx.strokeStyle = `rgba(255,90,90,${tr.t / 0.1})`; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(sx, HALF + (H / ty) * 0.1); ctx.lineTo(W / 2, H / 2); ctx.stroke();
      }

      // muzzle flash briefly lights the scene
      if (muzzle > 0) {
        const a = (muzzle / 0.06) * 0.45;
        const gl = ctx.createRadialGradient(W / 2, H * 0.6, 0, W / 2, H * 0.6, H * 0.85);
        gl.addColorStop(0, `rgba(255,225,160,${a})`);
        gl.addColorStop(1, 'rgba(255,180,80,0)');
        ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = gl; ctx.fillRect(-20, -20, W + 40, H + 40); ctx.restore();
      }

      drawViewmodel();
      ctx.restore(); // end shake

      drawHud();
      if (damageFlash > 0) {
        const g = ctx.createRadialGradient(W / 2, H / 2, H * 0.2, W / 2, H / 2, H * 0.75);
        g.addColorStop(0, 'rgba(220,30,30,0)');
        g.addColorStop(1, `rgba(200,20,20,${Math.min(0.6, damageFlash * 0.7)})`);
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      }
      if (hp > 0 && hp < 35 && !over) {
        const pulse = 0.22 + 0.16 * (0.5 + 0.5 * Math.sin(clock * 6));
        const g = ctx.createRadialGradient(W / 2, H / 2, H * 0.25, W / 2, H / 2, H * 0.8);
        g.addColorStop(0, 'rgba(160,0,0,0)');
        g.addColorStop(1, `rgba(150,0,0,${pulse})`);
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      }
      if (!started) drawStartOverlay();
      else if (paused && !over) drawPauseOverlay();
      if (over) drawEndOverlay();
    }

    function drawEnemy(e: Enemy, tx: number, ty: number, HALF: number, alpha: number, sink: number) {
      const spr = e.hitFlash > 0 ? robotHit : robot;
      const lineH = H / ty, sh = lineH * 0.92 * (1 - sink * 0.25), sw = sh * (spr.width / spr.height);
      const screenX = (W / 2) * (1 + tx / ty);
      const startX = screenX - sw / 2, floorY = HALF + lineH / 2, startY = floorY - sh + sink * lineH * 0.45;
      const x0 = Math.max(0, Math.floor(startX)), x1 = Math.min(W, Math.ceil(startX + sw));
      if (alpha < 1) ctx.globalAlpha = Math.max(0, alpha);
      let visL = W, visR = 0;
      for (let stripe = x0; stripe < x1; stripe++) {
        if (ty >= zBuffer[stripe]) continue;
        const texX = Math.floor(((stripe - startX) / sw) * spr.width);
        ctx.drawImage(spr, Math.max(0, Math.min(spr.width - 1, texX)), 0, 1, spr.height, stripe, startY, 1, sh);
        visL = Math.min(visL, stripe); visR = Math.max(visR, stripe);
      }
      ctx.globalAlpha = 1;
      if (sink === 0 && visR >= visL) {
        const bw = Math.min(sw * 0.9, 140), bx = screenX - bw / 2, by = startY - 12;
        ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(bx - 2, by - 2, bw + 4, 9);
        ctx.fillStyle = '#3a0d0d'; ctx.fillRect(bx, by, bw, 5);
        ctx.fillStyle = '#ff5252'; ctx.fillRect(bx, by, bw * Math.max(0, e.hp / e.maxHp), 5);
      }
    }

    // ---- viewmodel (drawn inside the shake transform) ----
    function drawViewmodel() {
      const w = WEAPONS[slots[cur]];
      const sway = Math.sin(bobT) * 6, sway2 = Math.cos(bobT * 2) * 3;
      const cx = W / 2 + 130 + sway, baseY = H - recoil * 24 + Math.abs(sway2);
      const tip = (len: number) => baseY - 150 - len + 90;
      ctx.save();
      const accent = av.accent, body = av.body;
      const gunBody = (len: number, barrelW: number) => {
        ctx.fillStyle = '#0f172a'; ctx.fillRect(cx - 40, baseY - 70, 130, 70);
        ctx.fillStyle = body; ctx.fillRect(cx - 10, baseY - 96, 40, 96);
        ctx.fillStyle = '#1e293b'; ctx.fillRect(cx - 30, baseY - 150, 28, 90);
        ctx.fillStyle = '#334155'; ctx.fillRect(cx - 26, tip(len), barrelW, len);
        ctx.fillStyle = accent; ctx.fillRect(cx + 6, baseY - 84, 10, 30);
        if (muzzle > 0) { ctx.fillStyle = `rgba(255,220,120,${muzzle / 0.06})`; ctx.beginPath(); ctx.arc(cx - 26 + barrelW / 2, tip(len), 22 * (muzzle / 0.06) + 6, 0, Math.PI * 2); ctx.fill(); }
      };
      switch (w.category) {
        case 'melee': {
          const sx = W / 2 + 180 + sway, sy = H - 40 - recoil * 60;
          ctx.translate(sx, sy); ctx.rotate(-0.5 - recoil * 0.6);
          ctx.fillStyle = body; ctx.fillRect(-14, 0, 28, 70);
          ctx.fillStyle = '#cbd5e1'; ctx.beginPath(); ctx.moveTo(-10, 0); ctx.lineTo(10, 0); ctx.lineTo(2, -110); ctx.lineTo(-2, -110); ctx.closePath(); ctx.fill();
          ctx.fillStyle = accent; ctx.fillRect(-16, -6, 32, 8);
          break;
        }
        case 'pistol': gunBody(110, 18); break;
        case 'smg': gunBody(120, 22); break;
        case 'rifle': gunBody(180, 18); break;
        case 'sniper': gunBody(240, 16); ctx.fillStyle = '#0f172a'; ctx.fillRect(cx - 38, baseY - 152, 42, 16); break;
        case 'shotgun':
          ctx.fillStyle = '#0f172a'; ctx.fillRect(cx - 44, baseY - 70, 140, 70);
          ctx.fillStyle = body; ctx.fillRect(cx - 12, baseY - 96, 44, 96);
          ctx.fillStyle = '#334155'; ctx.fillRect(cx - 34, baseY - 150, 16, 150); ctx.fillRect(cx - 14, baseY - 150, 16, 150);
          ctx.fillStyle = accent; ctx.fillRect(cx + 8, baseY - 80, 10, 28);
          if (muzzle > 0) { ctx.fillStyle = `rgba(255,220,120,${muzzle / 0.06})`; ctx.beginPath(); ctx.arc(cx - 18, baseY - 150, 26 * (muzzle / 0.06) + 6, 0, Math.PI * 2); ctx.fill(); }
          break;
        case 'rocket':
          ctx.fillStyle = '#1f2937'; ctx.fillRect(cx - 40, baseY - 80, 150, 56);
          ctx.fillStyle = '#374151'; ctx.fillRect(cx - 60, baseY - 78, 70, 52);
          ctx.fillStyle = accent; ctx.fillRect(cx - 60, baseY - 60, 70, 8);
          ctx.fillStyle = body; ctx.fillRect(cx - 6, baseY - 96, 40, 96);
          if (muzzle > 0) { ctx.fillStyle = `rgba(255,200,120,${muzzle / 0.06})`; ctx.beginPath(); ctx.arc(cx - 56, baseY - 52, 24, 0, Math.PI * 2); ctx.fill(); }
          break;
        case 'thrown': {
          const gy = baseY - 30 - recoil * 40;
          ctx.fillStyle = '#334155'; ctx.beginPath(); ctx.arc(cx, gy, 44, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = '#475569'; ctx.fillRect(cx - 10, gy - 62, 20, 26);
          ctx.fillStyle = accent; ctx.fillRect(cx - 26, gy - 6, 52, 8);
          ctx.fillStyle = body; ctx.fillRect(cx + 30, baseY - 70, 36, 70);
          break;
        }
        case 'heal':
          ctx.fillStyle = '#e2e8f0'; ctx.fillRect(cx - 70, baseY - 90, 150, 110);
          ctx.fillStyle = '#ef4444'; ctx.fillRect(cx - 12, baseY - 78, 34, 86); ctx.fillRect(cx - 40, baseY - 50, 90, 30);
          ctx.fillStyle = body; ctx.fillRect(cx - 84, baseY - 60, 22, 60);
          break;
      }
      ctx.restore();
    }

    // ---- HUD ----
    function drawHud() {
      const w = WEAPONS[slots[cur]];
      const st = ws[w.id];
      const scoped = !!w.scope && fov < BASE_FOV * 0.7;

      if (scoped) {
        ctx.fillStyle = 'rgba(0,0,0,0.92)';
        ctx.beginPath(); ctx.rect(0, 0, W, H); ctx.arc(W / 2, H / 2, H * 0.42, 0, Math.PI * 2, true); ctx.fill('evenodd');
        ctx.strokeStyle = 'rgba(0,0,0,0.9)'; ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(W / 2, H / 2, H * 0.42, 0, Math.PI * 2); ctx.stroke();
        ctx.strokeStyle = 'rgba(239,68,68,0.9)'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(W / 2 - H * 0.42, H / 2); ctx.lineTo(W / 2 + H * 0.42, H / 2); ctx.moveTo(W / 2, H / 2 - H * 0.42); ctx.lineTo(W / 2, H / 2 + H * 0.42); ctx.stroke();
      } else {
        const gap = 4 + bloom * 16, len = 7;
        ctx.strokeStyle = 'rgba(255,255,255,0.85)'; ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(W / 2 - gap - len, H / 2); ctx.lineTo(W / 2 - gap, H / 2);
        ctx.moveTo(W / 2 + gap, H / 2); ctx.lineTo(W / 2 + gap + len, H / 2);
        ctx.moveTo(W / 2, H / 2 - gap - len); ctx.lineTo(W / 2, H / 2 - gap);
        ctx.moveTo(W / 2, H / 2 + gap); ctx.lineTo(W / 2, H / 2 + gap + len);
        ctx.stroke();
      }
      if (hitMarker > 0) {
        ctx.strokeStyle = `rgba(255,80,80,${hitMarker / 0.22})`; ctx.lineWidth = 2.5;
        const o = 9;
        ctx.beginPath();
        ctx.moveTo(W / 2 - o, H / 2 - o); ctx.lineTo(W / 2 - 4, H / 2 - 4);
        ctx.moveTo(W / 2 + o, H / 2 - o); ctx.lineTo(W / 2 + 4, H / 2 - 4);
        ctx.moveTo(W / 2 - o, H / 2 + o); ctx.lineTo(W / 2 - 4, H / 2 + 4);
        ctx.moveTo(W / 2 + o, H / 2 + o); ctx.lineTo(W / 2 + 4, H / 2 + 4);
        ctx.stroke();
      }

      // health + avatar (bottom-left)
      drawAvatar(ctx, av, 52, H - 54, 22);
      ctx.textAlign = 'left';
      ctx.font = '700 16px Inter, sans-serif'; ctx.fillStyle = '#fff';
      ctx.fillText(av.name, 86, H - 70);
      ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.fillRect(86, H - 58, 190, 16);
      ctx.fillStyle = hp > 30 ? '#22c55e' : '#ef4444'; ctx.fillRect(86, H - 58, 190 * (hp / 100), 16);
      ctx.font = '800 12px Inter, sans-serif'; ctx.fillStyle = '#0b0f1a';
      ctx.fillText(`${Math.ceil(hp)} HP`, 94, H - 46);

      // weapon + ammo (bottom-right)
      ctx.textAlign = 'right';
      ctx.font = '800 22px Sora, sans-serif'; ctx.fillStyle = reloadingId ? '#fbbf24' : '#fff';
      ctx.fillText(`${w.icon} ${w.name}`, W - 24, H - 52);
      ctx.font = '700 16px Inter, sans-serif'; ctx.fillStyle = '#93a0b8';
      let ammoText: string;
      if (w.kind === 'melee') ammoText = '∞';
      else if (w.mag > 0) ammoText = `${st.mag} / ${st.reserve === Infinity ? '∞' : st.reserve}`;
      else ammoText = `x${st.reserve}`;
      ctx.fillText(reloadingId ? 'RELOADING…' : ammoText, W - 24, H - 30);

      // weapon strip (top-right)
      ctx.textAlign = 'center';
      slots.forEach((id, i) => {
        const bx = W - 24 - (slots.length - i) * 42;
        ctx.fillStyle = i === cur ? 'rgba(239,68,68,0.85)' : 'rgba(0,0,0,0.45)';
        ctx.fillRect(bx, 14, 36, 36);
        ctx.font = '18px Inter'; ctx.fillStyle = '#fff'; ctx.fillText(WEAPONS[id].icon, bx + 18, 38);
        ctx.font = '700 9px Inter'; ctx.fillStyle = '#cbd5e1'; ctx.fillText(String(i + 1), bx + 6, 24);
      });

      // rivals remaining (top-centre)
      const left = enemies.filter((e) => e.alive).length;
      ctx.textAlign = 'center';
      ctx.font = '800 16px Sora, sans-serif'; ctx.fillStyle = '#ff5252';
      ctx.fillText(`☠ RIVALS LEFT: ${left}`, W / 2, 30);

      drawMinimap();

      if (msgT > 0) {
        ctx.textAlign = 'center'; ctx.font = '800 28px Sora, sans-serif';
        ctx.fillStyle = `rgba(255,255,255,${Math.min(1, msgT)})`;
        ctx.fillText(msg, W / 2, 96);
      }
      ctx.textAlign = 'left';
    }

    function drawMinimap() {
      const s = 6, ox = 16, oy = 50;
      ctx.fillStyle = 'rgba(0,0,0,0.45)'; ctx.fillRect(ox - 3, oy - 3, MAP_W * s + 6, MAP_H * s + 6);
      for (let y = 0; y < MAP_H; y++) for (let x = 0; x < MAP_W; x++) {
        if (grid[y][x] === '#') { ctx.fillStyle = 'rgba(120,140,190,0.55)'; ctx.fillRect(ox + x * s, oy + y * s, s, s); }
      }
      for (const e of enemies) if (e.alive) { ctx.fillStyle = '#ff5252'; ctx.beginPath(); ctx.arc(ox + e.x * s, oy + e.y * s, 3, 0, Math.PI * 2); ctx.fill(); }
      ctx.fillStyle = av.visor;
      ctx.save(); ctx.translate(ox + px * s, oy + py * s); ctx.rotate(angle);
      ctx.beginPath(); ctx.moveTo(5, 0); ctx.lineTo(-3, -3); ctx.lineTo(-3, 3); ctx.closePath(); ctx.fill();
      ctx.restore();
    }

    function centerText(title: string, color: string, sub: string[], titleSize = 56) {
      ctx.textAlign = 'center';
      ctx.font = `800 ${titleSize}px Sora, sans-serif`; ctx.fillStyle = color;
      ctx.fillText(title, W / 2, H / 2 - 30);
      ctx.font = '600 15px Inter, sans-serif'; ctx.fillStyle = '#cbd5e1';
      sub.forEach((l, i) => ctx.fillText(l, W / 2, H / 2 + 18 + i * 26));
      ctx.textAlign = 'left';
    }
    function drawStartOverlay() {
      ctx.fillStyle = 'rgba(5,7,13,0.82)'; ctx.fillRect(0, 0, W, H);
      ctx.textAlign = 'center';
      ctx.font = '800 60px Sora, sans-serif'; ctx.fillStyle = '#fff'; ctx.fillText('RIVALS 2', W / 2, H / 2 - 96);
      ctx.font = '700 20px Inter, sans-serif'; ctx.fillStyle = '#ff5252'; ctx.fillText(`${def.name} — click to lock the mouse and fight`, W / 2, H / 2 - 54);
      ctx.font = '600 14px Inter, sans-serif'; ctx.fillStyle = '#93a0b8';
      [
        'WASD / Arrows move    Mouse look    Click / Space fire    R reload',
        '1–9 or wheel switch weapon    Right-click scope (sniper)    Esc pause',
        `Eliminate all ${def.enemies.length} Rival Bot${def.enemies.length > 1 ? 's' : ''} before they eliminate you.`
      ].forEach((l, i) => ctx.fillText(l, W / 2, H / 2 + i * 26));
      ctx.textAlign = 'left';
    }
    function drawPauseOverlay() {
      ctx.fillStyle = 'rgba(5,7,13,0.7)'; ctx.fillRect(0, 0, W, H);
      centerText('PAUSED', '#fff', ['Click to resume the match'], 48);
    }
    function drawEndOverlay() {
      ctx.fillStyle = 'rgba(5,7,13,0.78)'; ctx.fillRect(0, 0, W, H);
      centerText(result === 'win' ? 'RIVALS ELIMINATED' : 'YOU WERE ELIMINATED', result === 'win' ? '#22c55e' : '#ff5252', ['Returning to the lobby…'], 52);
    }

    // ---------------- loop ----------------
    let raf = 0, last = performance.now(), stopped = false;
    const frame = (t: number) => {
      const dt = Math.min(0.05, (t - last) / 1000); last = t;
      update(dt); render();
      if (over && overTimer > 1.4 && !stopped) {
        stopped = true;
        if (document.pointerLockElement === canvas) document.exitPointerLock();
        const cnt = def.enemies.length;
        const earned = result === 'win' ? 150 + 120 * cnt : 50;
        onEnd(result ?? 'lose', earned);
        return;
      }
      if (!stopped) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      stopped = true; cancelAnimationFrame(raf);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('wheel', onWheel);
      canvas.removeEventListener('contextmenu', onCtx);
      document.removeEventListener('pointerlockchange', onPlChange);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      touchCleanup.forEach((fn) => fn());
      if (document.pointerLockElement === canvas) document.exitPointerLock();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="game-stage">
      <div className="exit-hint">
        <button className="btn ghost" onClick={onExit}>← Leave match</button>
      </div>
      <canvas ref={canvasRef} width={960} height={540} />

      {IS_TOUCH && (
        <>
          <div ref={lookRef} className="r2-look" />
          <div ref={joyRef} className="r2-joy"><div ref={knobRef} className="r2-knob" /></div>
          <div className="r2-actions">
            <button ref={reloadRef} className="r2-btn reload" aria-label="Recargar">⟳</button>
            <button ref={fireRef} className="r2-btn fire" aria-label="Disparar">🔫</button>
          </div>
        </>
      )}
    </div>
  );
}

// ======================================================================
//  MULTIPLAYER ARENA  (local split-screen + online duels)
//  A self-contained duel engine that reuses the textures/sprites/maps but
//  keeps the single-player game above untouched. One hitscan blaster, HP,
//  respawns, first to a frag target wins.
// ======================================================================
const MP_FIRE_CD = 0.34;   // seconds between shots
const MP_DMG = 24;         // damage per hit
const MP_RANGE = 32;       // max hit distance (tiles)
const MP_RESPAWN = 1.8;    // seconds dead before respawn
const MP_FRAGS_TO_WIN = 7;
const MP_WS_PORT = 4287;   // the relay server (see server/mp.mjs)

// A default opponent look for player 2 in local split-screen.
const P2_AVATAR: Avatar = { name: 'Rival', body: '#ef4444', visor: '#fca5a5', accent: '#fbbf24' };

// Render a standing fighter (front view) to an offscreen sprite, optionally hit-flashed.
function makePlayerSprite(a: Avatar, flash: boolean): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 112;
  const x = c.getContext('2d')!;
  drawAvatar(x, a, 32, 56, 42);
  if (flash) { x.globalCompositeOperation = 'source-atop'; x.fillStyle = 'rgba(255,80,80,0.6)'; x.fillRect(0, 0, c.width, c.height); }
  return c;
}

interface Cam { px: number; py: number; ang: number; fov: number; }
interface Sprite { x: number; y: number; img: HTMLCanvasElement; label?: string; hp?: number; }
interface Arena {
  grid: string[]; MAP_W: number; MAP_H: number; theme: MapTheme; wallTex: HTMLCanvasElement;
}

function losClear(ax: number, ay: number, bx: number, by: number, solid: (x: number, y: number) => boolean) {
  const dx = bx - ax, dy = by - ay, dist = Math.hypot(dx, dy);
  const steps = Math.ceil(dist / 0.08), sx = dx / steps, sy = dy / steps;
  let x = ax, y = ay;
  for (let i = 0; i < steps; i++) { x += sx; y += sy; if (solid(x, y)) return false; }
  return true;
}
// Does a shot from (sx,sy) facing `ang` hit a target at (tx,ty)?
function aimHits(sx: number, sy: number, ang: number, tx: number, ty: number, solid: (x: number, y: number) => boolean) {
  const dx = tx - sx, dy = ty - sy, d = Math.hypot(dx, dy);
  if (d > MP_RANGE) return false;
  let diff = Math.atan2(dy, dx) - ang;
  while (diff > Math.PI) diff -= Math.PI * 2;
  while (diff < -Math.PI) diff += Math.PI * 2;
  if (Math.abs(diff) > Math.atan2(0.55, Math.max(0.5, d))) return false;
  return losClear(sx, sy, tx, ty, solid);
}

// Render one first-person view of the arena into a viewport rect.
function castScene(ctx: CanvasRenderingContext2D, vx: number, vy: number, vw: number, vh: number, cam: Cam, ar: Arena, sprites: Sprite[]) {
  ctx.save();
  ctx.beginPath(); ctx.rect(vx, vy, vw, vh); ctx.clip();
  ctx.translate(vx, vy);
  const W = vw, H = vh, HALF = H / 2;

  // sky (top) + floor (bottom), both fading to a warm haze at the horizon
  const sk = ar.theme.sky;
  const sky = ctx.createLinearGradient(0, 0, 0, HALF);
  sky.addColorStop(0, sk[0]); sky.addColorStop(1, sk[sk.length - 1]);
  ctx.fillStyle = sky; ctx.fillRect(0, 0, W, HALF);
  const fl = ctx.createLinearGradient(0, HALF, 0, H);
  fl.addColorStop(0, '#fff4e2'); fl.addColorStop(1, ar.theme.floor[0]);
  ctx.fillStyle = fl; ctx.fillRect(0, HALF, W, H - HALF);

  const dirX = Math.cos(cam.ang), dirY = Math.sin(cam.ang);
  const planeLen = Math.tan(cam.fov / 2);
  const planeX = -dirY * planeLen, planeY = dirX * planeLen;
  const px = cam.px, py = cam.py;
  const zb = new Float32Array(W);

  for (let x = 0; x < W; x++) {
    const cameraX = (2 * x) / W - 1;
    const rdx = dirX + planeX * cameraX, rdy = dirY + planeY * cameraX;
    let mapX = Math.floor(px), mapY = Math.floor(py);
    const ddx = rdx === 0 ? 1e30 : Math.abs(1 / rdx), ddy = rdy === 0 ? 1e30 : Math.abs(1 / rdy);
    let stepX: number, stepY: number, sdx: number, sdy: number;
    if (rdx < 0) { stepX = -1; sdx = (px - mapX) * ddx; } else { stepX = 1; sdx = (mapX + 1 - px) * ddx; }
    if (rdy < 0) { stepY = -1; sdy = (py - mapY) * ddy; } else { stepY = 1; sdy = (mapY + 1 - py) * ddy; }
    let side = 0;
    for (let hops = 0; hops < 80; hops++) {
      if (sdx < sdy) { sdx += ddx; mapX += stepX; side = 0; }
      else { sdy += ddy; mapY += stepY; side = 1; }
      if (mapX < 0 || mapY < 0 || mapX >= ar.MAP_W || mapY >= ar.MAP_H) break;
      if (ar.grid[mapY][mapX] === '#') break;
    }
    const perp = Math.max(0.0001, side === 0 ? sdx - ddx : sdy - ddy);
    zb[x] = perp;
    const lineH = H / perp, y0 = HALF - lineH / 2;
    let wallX = side === 0 ? py + perp * rdy : px + perp * rdx; wallX -= Math.floor(wallX);
    let texX = Math.floor(wallX * TEX);
    if (side === 0 && rdx > 0) texX = TEX - 1 - texX;
    if (side === 1 && rdy < 0) texX = TEX - 1 - texX;
    ctx.drawImage(ar.wallTex, texX, 0, 1, TEX, x, y0, 1, lineH);
    if (side === 1) { ctx.fillStyle = 'rgba(0,0,0,0.16)'; ctx.fillRect(x, y0, 1, lineH); }
    const fog = Math.max(0, Math.min(1, perp / ar.theme.fog));
    ctx.fillStyle = `rgba(255,246,230,${0.9 * fog})`; ctx.fillRect(x, y0, 1, lineH);
  }

  // billboards (the opponent), far → near, occluded by walls via zBuffer
  const invDet = 1 / (planeX * dirY - dirX * planeY);
  const proj = sprites.map((s) => {
    const ex = s.x - px, ey = s.y - py;
    return { s, tx: invDet * (dirY * ex - dirX * ey), ty: invDet * (-planeY * ex + planeX * ey) };
  }).filter((o) => o.ty > 0.25).sort((a, b) => b.ty - a.ty);
  for (const { s, tx, ty } of proj) {
    const lineH = H / ty, sh = lineH * 0.92, sw = sh * (s.img.width / s.img.height);
    const screenX = (W / 2) * (1 + tx / ty);
    const startX = screenX - sw / 2, startY = HALF + lineH / 2 - sh;
    const x0 = Math.max(0, Math.floor(startX)), x1 = Math.min(W, Math.ceil(startX + sw));
    let any = false;
    for (let stripe = x0; stripe < x1; stripe++) {
      if (ty >= zb[stripe]) continue;
      const texX = Math.floor(((stripe - startX) / sw) * s.img.width);
      ctx.drawImage(s.img, Math.max(0, Math.min(s.img.width - 1, texX)), 0, 1, s.img.height, stripe, startY, 1, sh);
      any = true;
    }
    if (any && s.label) {
      const bw = Math.min(sw * 1.1, 160), bx = screenX - bw / 2, by = startY - 18;
      ctx.textAlign = 'center'; ctx.font = '700 13px Inter, sans-serif';
      ctx.fillStyle = 'rgba(15,23,42,0.85)'; ctx.fillText(s.label, screenX, by - 4);
      ctx.fillStyle = 'rgba(0,0,0,0.45)'; ctx.fillRect(bx - 1, by - 1, bw + 2, 7);
      ctx.fillStyle = '#3a0d0d'; ctx.fillRect(bx, by, bw, 5);
      ctx.fillStyle = '#ef4444'; ctx.fillRect(bx, by, bw * Math.max(0, (s.hp ?? 0) / 100), 5);
      ctx.textAlign = 'left';
    }
  }

  // crosshair
  ctx.strokeStyle = 'rgba(15,23,42,0.7)'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(W / 2 - 11, HALF); ctx.lineTo(W / 2 - 4, HALF);
  ctx.moveTo(W / 2 + 4, HALF); ctx.lineTo(W / 2 + 11, HALF);
  ctx.moveTo(W / 2, HALF - 11); ctx.lineTo(W / 2, HALF - 4);
  ctx.moveTo(W / 2, HALF + 4); ctx.lineTo(W / 2, HALF + 11);
  ctx.stroke();

  ctx.restore();
}

// Small per-view HUD: name, HP bar, frag count.
function drawArenaHud(ctx: CanvasRenderingContext2D, vx: number, vy: number, vw: number, av: Avatar, hp: number, frags: number, dead: boolean) {
  ctx.save();
  ctx.translate(vx, vy);
  drawAvatar(ctx, av, 30, vy === 0 ? 34 : 34, 16);
  ctx.textAlign = 'left'; ctx.font = '800 14px Inter, sans-serif'; ctx.fillStyle = '#0f172a';
  ctx.fillText(av.name, 50, 26);
  ctx.fillStyle = 'rgba(15,23,42,0.18)'; ctx.fillRect(50, 32, 150, 12);
  ctx.fillStyle = hp > 30 ? '#16a34a' : '#ef4444'; ctx.fillRect(50, 32, 150 * Math.max(0, hp) / 100, 12);
  ctx.font = '800 18px Sora, sans-serif'; ctx.fillStyle = '#b91c1c'; ctx.textAlign = 'right';
  ctx.fillText(`${frags}`, vw - 16, 30);
  ctx.font = '700 10px Inter, sans-serif'; ctx.fillStyle = '#64748b';
  ctx.fillText('FRAGS', vw - 16, 42);
  if (dead) { ctx.textAlign = 'center'; ctx.font = '800 22px Sora, sans-serif'; ctx.fillStyle = '#ef4444'; ctx.fillText('DOWN', vw / 2, 30); }
  ctx.textAlign = 'left';
  ctx.restore();
}

function ArenaCanvas({ profile, mapIndex, mode, onExit }: {
  profile: Profile; mapIndex: number; mode: 'local' | 'online'; onExit: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [net, setNet] = useState<'connecting' | 'waiting' | 'playing' | 'left' | 'error'>(mode === 'online' ? 'connecting' : 'playing');
  const netRef = useRef(net);
  netRef.current = net;

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const W = canvas.width, H = canvas.height;
    const audio = makeAudio();
    const def = MAPS[mapIndex];
    const grid = def.grid;
    const ar: Arena = {
      grid, MAP_W: grid[0].length, MAP_H: grid.length, theme: def.theme,
      wallTex: makeWallTexture(def.theme.wall, def.theme.wallColor),
    };
    const solid = (x: number, y: number) =>
      x < 0 || y < 0 || x >= ar.MAP_W || y >= ar.MAP_H || grid[Math.floor(y)][Math.floor(x)] === '#';
    const canStand = (x: number, y: number, r = 0.24) =>
      !solid(x - r, y) && !solid(x + r, y) && !solid(x, y - r) && !solid(x, y + r);

    const spawns: [number, number][] = [def.player, def.enemies[0] ?? [def.player[0], def.player[1] + 2]];
    const faceCenter = (sx: number, sy: number) => Math.atan2(ar.MAP_H / 2 - sy, ar.MAP_W / 2 - sx);

    interface Fighter {
      px: number; py: number; ang: number; hp: number; frags: number; fireCd: number;
      dead: boolean; respawn: number; muzzle: number; av: Avatar;
      sprite: HTMLCanvasElement; spriteHit: HTMLCanvasElement; hitFlash: number;
    }
    const mkFighter = (slot: number, av: Avatar): Fighter => ({
      px: spawns[slot][0], py: spawns[slot][1], ang: faceCenter(spawns[slot][0], spawns[slot][1]),
      hp: 100, frags: 0, fireCd: 0, dead: false, respawn: 0, muzzle: 0, av,
      sprite: makePlayerSprite(av, false), spriteHit: makePlayerSprite(av, true), hitFlash: 0,
    });

    // FOV used everywhere
    const FOV = 1.05;

    // ---------- input ----------
    const down: Record<string, boolean> = {};
    const onKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', 'Enter'].includes(e.code)) e.preventDefault();
      down[e.code] = true;
    };
    const onKeyUp = (e: KeyboardEvent) => { down[e.code] = false; };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    // online: pointer-lock mouse look + click to fire
    let mouseFire = false;
    const onMouseMove = (e: MouseEvent) => { if (document.pointerLockElement === canvas) me.ang += e.movementX * 0.0024; };
    const onMouseDown = () => { if (mode !== 'online') return; if (document.pointerLockElement !== canvas) canvas.requestPointerLock?.(); else mouseFire = true; };
    const onMouseUp = () => { mouseFire = false; };
    if (mode === 'online') {
      window.addEventListener('mousemove', onMouseMove);
      canvas.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mouseup', onMouseUp);
    }

    // ---------- players ----------
    let over = false, overTimer = 0, result: 'win' | 'lose' = 'lose';
    // local mode: two fighters. online: `me` is local, `foe` is the remote mirror.
    const me = mkFighter(0, profile.avatar);
    const foe = mkFighter(1, mode === 'local' ? P2_AVATAR : P2_AVATAR);

    const moveFighter = (f: Fighter, fwd: number, turn: number, strafe: number, dt: number) => {
      f.ang += turn * 2.3 * dt;
      const dx = Math.cos(f.ang), dy = Math.sin(f.ang);
      let mx = dx * fwd + -dy * strafe, my = dy * fwd + dx * strafe;
      const ml = Math.hypot(mx, my);
      if (ml > 0) {
        const spd = 2.9 * dt; mx = (mx / ml) * spd; my = (my / ml) * spd;
        if (canStand(f.px + mx, f.py)) f.px += mx;
        if (canStand(f.px, f.py + my)) f.py += my;
      }
    };
    const killScored = (killer: Fighter, victim: Fighter) => {
      victim.dead = true; victim.respawn = MP_RESPAWN; victim.hp = 0;
      killer.frags += 1; audio.death();
      if (killer.frags >= MP_FRAGS_TO_WIN && !over) { over = true; result = killer === me ? 'win' : 'lose'; }
    };
    const respawnFighter = (f: Fighter, slot: number) => {
      f.dead = false; f.hp = 100; f.px = spawns[slot][0]; f.py = spawns[slot][1]; f.ang = faceCenter(f.px, f.py);
    };
    // local hitscan: shooter fires at target
    const tryShoot = (shooter: Fighter, target: Fighter, onHit: () => void) => {
      if (shooter.fireCd > 0 || shooter.dead) return;
      shooter.fireCd = MP_FIRE_CD; shooter.muzzle = 0.06; audio.shot('rifle');
      if (!target.dead && aimHits(shooter.px, shooter.py, shooter.ang, target.px, target.py, solid)) onHit();
    };

    // ---------- networking (online) ----------
    let sock: WebSocket | null = null;
    let mySlot = 0;
    let lastSend = 0;
    const remote = { px: spawns[1][0], py: spawns[1][1], ang: 0, hp: 100, deaths: 0, has: false };
    let myDeaths = 0;
    if (mode === 'online') {
      const url = `ws://${location.hostname}:${MP_WS_PORT}`;
      try {
        sock = new WebSocket(url);
        sock.onopen = () => sock!.send(JSON.stringify({ type: 'join', room: mapIndex, name: profile.avatar.name, avatar: profile.avatar }));
        sock.onerror = () => setNet((s) => (s === 'playing' ? s : 'error'));
        sock.onclose = () => { if (netRef.current === 'connecting' || netRef.current === 'waiting') setNet('error'); };
        sock.onmessage = (ev) => {
          let m: any; try { m = JSON.parse(ev.data); } catch { return; }
          if (m.type === 'waiting') setNet('waiting');
          else if (m.type === 'start') {
            mySlot = m.slot;
            if (m.opp) { foe.av = m.opp; foe.sprite = makePlayerSprite(m.opp, false); foe.spriteHit = makePlayerSprite(m.opp, true); }
            respawnFighter(me, mySlot);
            remote.px = spawns[mySlot === 0 ? 1 : 0][0]; remote.py = spawns[mySlot === 0 ? 1 : 0][1];
            setNet('playing');
          } else if (m.type === 'state') {
            remote.px = m.px; remote.py = m.py; remote.ang = m.ang; remote.hp = m.hp; remote.deaths = m.deaths; remote.has = true;
            if (m.fire) audio.shot('rifle');
          } else if (m.type === 'hit') {
            if (!me.dead) { me.hp -= m.dmg; me.hitFlash = 0.16; audio.hurt(); if (me.hp <= 0) { myDeaths += 1; me.dead = true; me.respawn = MP_RESPAWN; me.hp = 0; } }
          } else if (m.type === 'peer-left') setNet('left');
        };
      } catch { setNet('error'); }
    }
    const sendState = (fire: boolean) => {
      if (sock && sock.readyState === 1) sock.send(JSON.stringify({ type: 'state', px: me.px, py: me.py, ang: me.ang, hp: me.hp, deaths: myDeaths, fire }));
    };

    // ---------- update ----------
    const update = (dt: number) => {
      me.fireCd = Math.max(0, me.fireCd - dt); me.muzzle = Math.max(0, me.muzzle - dt); me.hitFlash = Math.max(0, me.hitFlash - dt);
      foe.fireCd = Math.max(0, foe.fireCd - dt); foe.muzzle = Math.max(0, foe.muzzle - dt); foe.hitFlash = Math.max(0, foe.hitFlash - dt);
      if (over) { overTimer += dt; return; }

      if (mode === 'local') {
        // Player 1 — WASD + Space
        if (!me.dead) {
          const fwd = (down['KeyW'] ? 1 : 0) - (down['KeyS'] ? 1 : 0);
          const turn = (down['KeyD'] ? 1 : 0) - (down['KeyA'] ? 1 : 0);
          const strafe = (down['KeyE'] ? 1 : 0) - (down['KeyQ'] ? 1 : 0);
          moveFighter(me, fwd, turn, strafe, dt);
          if (down['Space']) tryShoot(me, foe, () => { foe.hp -= MP_DMG; foe.hitFlash = 0.16; audio.hit(); if (foe.hp <= 0) killScored(me, foe); });
        }
        // Player 2 — Arrows + Enter
        if (!foe.dead) {
          const fwd = (down['ArrowUp'] ? 1 : 0) - (down['ArrowDown'] ? 1 : 0);
          const turn = (down['ArrowRight'] ? 1 : 0) - (down['ArrowLeft'] ? 1 : 0);
          moveFighter(foe, fwd, turn, 0, dt);
          if (down['Enter']) tryShoot(foe, me, () => { me.hp -= MP_DMG; me.hitFlash = 0.16; audio.hit(); if (me.hp <= 0) killScored(foe, me); });
        }
        // respawns
        if (me.dead) { me.respawn -= dt; if (me.respawn <= 0) respawnFighter(me, 0); }
        if (foe.dead) { foe.respawn -= dt; if (foe.respawn <= 0) respawnFighter(foe, 1); }
      } else {
        // ONLINE — only `me` is locally controlled; `foe` mirrors `remote`.
        if (netRef.current === 'playing' && !me.dead) {
          const fwd = (down['KeyW'] || down['ArrowUp'] ? 1 : 0) - (down['KeyS'] || down['ArrowDown'] ? 1 : 0);
          const turn = (down['KeyD'] || down['ArrowRight'] ? 1 : 0) - (down['KeyA'] || down['ArrowLeft'] ? 1 : 0);
          const strafe = (down['KeyE'] ? 1 : 0) - (down['KeyQ'] ? 1 : 0);
          moveFighter(me, fwd, turn, strafe, dt);
          if (down['Space'] || mouseFire) {
            tryShoot(me, { ...foe, px: remote.px, py: remote.py, dead: remote.hp <= 0 } as Fighter, () => {
              if (sock && sock.readyState === 1) sock.send(JSON.stringify({ type: 'hit', dmg: MP_DMG }));
            });
          }
        }
        // mirror remote into foe for rendering
        foe.px = remote.px; foe.py = remote.py; foe.ang = remote.ang; foe.hp = remote.hp; foe.dead = remote.hp <= 0;
        // my frags = opponent deaths; opp frags = my deaths
        me.frags = remote.deaths; foe.frags = myDeaths;
        if ((me.frags >= MP_FRAGS_TO_WIN || foe.frags >= MP_FRAGS_TO_WIN) && !over) { over = true; result = me.frags >= MP_FRAGS_TO_WIN ? 'win' : 'lose'; }
        if (me.dead) { me.respawn -= dt; if (me.respawn <= 0) respawnFighter(me, mySlot); }
        // throttled state broadcast (~22 Hz)
        lastSend += dt;
        if (lastSend >= 0.045) { sendState(!!(down['Space'] || mouseFire) && me.fireCd > MP_FIRE_CD - 0.05); lastSend = 0; }
      }
    };

    // ---------- render ----------
    const render = () => {
      ctx.clearRect(0, 0, W, H);
      if (mode === 'local') {
        const hw = W / 2;
        castScene(ctx, 0, 0, hw, H, { px: me.px, py: me.py, ang: me.ang, fov: FOV }, ar,
          me.dead ? [] : [{ x: foe.px, y: foe.py, img: foe.hitFlash > 0 ? foe.spriteHit : foe.sprite, label: foe.av.name, hp: foe.hp }]);
        castScene(ctx, hw, 0, hw, H, { px: foe.px, py: foe.py, ang: foe.ang, fov: FOV }, ar,
          foe.dead ? [] : [{ x: me.px, y: me.py, img: me.hitFlash > 0 ? me.spriteHit : me.sprite, label: me.av.name, hp: me.hp }]);
        // divider
        ctx.fillStyle = 'rgba(15,23,42,0.6)'; ctx.fillRect(hw - 1, 0, 2, H);
        drawArenaHud(ctx, 0, 0, hw, me.av, me.hp, me.frags, me.dead);
        drawArenaHud(ctx, hw, 0, hw, foe.av, foe.hp, foe.frags, foe.dead);
      } else {
        const sprites: Sprite[] = (netRef.current === 'playing' && remote.has && !foe.dead)
          ? [{ x: foe.px, y: foe.py, img: foe.sprite, label: foe.av.name, hp: foe.hp }] : [];
        castScene(ctx, 0, 0, W, H, { px: me.px, py: me.py, ang: me.ang, fov: FOV }, ar, sprites);
        drawArenaHud(ctx, 0, 0, W, me.av, me.hp, me.frags, me.dead);
        drawArenaHud(ctx, W - 220, 0, 220, foe.av, foe.hp, foe.frags, false);
        // connection / waiting overlays
        if (netRef.current !== 'playing') {
          ctx.fillStyle = 'rgba(253,242,243,0.92)'; ctx.fillRect(0, 0, W, H);
          ctx.textAlign = 'center'; ctx.fillStyle = '#0f172a'; ctx.font = '800 34px Sora, sans-serif';
          const t = netRef.current === 'connecting' ? 'Connecting…'
            : netRef.current === 'waiting' ? 'Waiting for an opponent…'
            : netRef.current === 'left' ? 'Opponent left' : 'Server offline';
          ctx.fillText(t, W / 2, H / 2 - 10);
          ctx.font = '600 15px Inter, sans-serif'; ctx.fillStyle = '#64748b';
          const sub = netRef.current === 'waiting' ? `Map: ${def.name} — open this map on another device on your Wi-Fi to join.`
            : netRef.current === 'error' ? 'The multiplayer server isn’t reachable. Run the arcade with “npm run dev”.'
            : netRef.current === 'left' ? 'Press “Leave match” to return to the lobby.' : 'Reaching the duel server…';
          ctx.fillText(sub, W / 2, H / 2 + 24);
          ctx.textAlign = 'left';
        }
      }

      // shared end overlay
      if (over) {
        ctx.fillStyle = 'rgba(253,242,243,0.86)'; ctx.fillRect(0, 0, W, H);
        ctx.textAlign = 'center';
        ctx.font = '800 56px Sora, sans-serif'; ctx.fillStyle = result === 'win' ? '#16a34a' : '#ef4444';
        ctx.fillText(mode === 'local' ? (me.frags >= MP_FRAGS_TO_WIN ? 'PLAYER 1 WINS' : 'PLAYER 2 WINS') : (result === 'win' ? 'VICTORY' : 'DEFEAT'), W / 2, H / 2 - 10);
        ctx.font = '600 16px Inter, sans-serif'; ctx.fillStyle = '#475569';
        ctx.fillText('Press “Leave match” to return to the lobby.', W / 2, H / 2 + 28);
        ctx.textAlign = 'left';
      }
    };

    // ---------- loop ----------
    let raf = 0, last = performance.now(), stopped = false;
    const frame = (t: number) => {
      const dt = Math.min(0.05, (t - last) / 1000); last = t;
      audio.resume();
      update(dt); render();
      if (!stopped) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      stopped = true; cancelAnimationFrame(raf);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      if (document.pointerLockElement === canvas) document.exitPointerLock();
      if (sock) { try { sock.send(JSON.stringify({ type: 'bye' })); } catch { /* ignore */ } sock.close(); }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="game-stage">
      <div className="exit-hint">
        <button className="btn ghost" onClick={onExit}>← Leave match</button>
        {mode === 'local' && <span className="mp-keys">P1: WASD + Q/E + Space　·　P2: Arrows + Enter</span>}
        {mode === 'online' && <span className="mp-keys">WASD move · A/D or mouse turn · Space/click fire · first to {MP_FRAGS_TO_WIN}</span>}
      </div>
      <canvas ref={canvasRef} width={960} height={540} />
    </div>
  );
}

// ======================================================================
//  MENU PIECES
// ======================================================================
function AvatarPreview({ avatar, size = 150 }: { avatar: Avatar; size?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current!; const ctx = cv.getContext('2d')!;
    ctx.clearRect(0, 0, cv.width, cv.height);
    drawAvatar(ctx, avatar, cv.width / 2, cv.height * 0.42, size * 0.42);
  }, [avatar, size]);
  return <canvas ref={ref} width={size} height={size * 1.2} />;
}

function MapThumb({ map }: { map: MapDef }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current!; const ctx = cv.getContext('2d')!;
    const W = map.grid[0].length, H = map.grid.length;
    const s = Math.min(cv.width / W, cv.height / H);
    ctx.clearRect(0, 0, cv.width, cv.height);
    ctx.fillStyle = map.theme.floor[0]; ctx.fillRect(0, 0, W * s, H * s);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      if (map.grid[y][x] === '#') { ctx.fillStyle = map.theme.wallColor; ctx.fillRect(x * s, y * s, s, s); }
    }
    ctx.fillStyle = '#38bdf8'; ctx.fillRect(map.player[0] * s - 1.5, map.player[1] * s - 1.5, 3, 3);
    for (const [ex, ey] of map.enemies) { ctx.fillStyle = '#ff5252'; ctx.beginPath(); ctx.arc(ex * s, ey * s, 2, 0, Math.PI * 2); ctx.fill(); }
  }, [map]);
  return <canvas ref={ref} width={240} height={150} className="map-thumb" />;
}

// ======================================================================
//  APP
// ======================================================================
function App() {
  const [profile, setProfile] = useState<Profile>(() => loadProfile());
  const [screen, setScreen] = useState<'home' | 'avatar' | 'shop' | 'mode' | 'maps' | 'play' | 'result'>('home');
  const [playMode, setPlayMode] = useState<'robot' | 'local' | 'online'>('robot');
  const [mapIndex, setMapIndex] = useState(0);
  const [result, setResult] = useState<{ outcome: MatchResult; earned: number } | null>(null);
  const [draft, setDraft] = useState<Avatar>(profile.avatar);

  useEffect(() => saveProfile(profile), [profile]);

  const startEditing = () => { setDraft(profile.avatar); setScreen('avatar'); };
  const saveAvatar = () => {
    const name = draft.name.trim() || 'Rookie';
    setProfile((p) => ({ ...p, avatar: { ...draft, name } }));
    setScreen('home');
  };
  const buy = (id: WeaponId) => {
    const w = WEAPONS[id];
    setProfile((p) => (p.owned.includes(id) || p.keys < w.price ? p : { ...p, keys: p.keys - w.price, owned: [...p.owned, id] }));
  };
  const endMatch = (outcome: MatchResult, earned: number) => {
    setProfile((p) => ({ ...p, keys: p.keys + earned }));
    setResult({ outcome, earned });
    setScreen('result');
  };

  // ---- PLAY ----
  if (screen === 'play') {
    if (playMode !== 'robot') {
      return <ArenaCanvas key={`${playMode}-${mapIndex}`} profile={profile} mapIndex={mapIndex} mode={playMode} onExit={() => setScreen('home')} />;
    }
    return <GameCanvas key={mapIndex} profile={profile} mapIndex={mapIndex} onEnd={endMatch} onExit={() => setScreen('home')} />;
  }

  // ---- RESULT ----
  if (screen === 'result' && result) {
    return (
      <div className="shell">
        <div className="panel result">
          <p className="eyebrow">{MAPS[mapIndex].name} · match over</p>
          <h2 className={result.outcome}>{result.outcome === 'win' ? 'Victory' : 'Defeated'}</h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            {result.outcome === 'win' ? 'Every rival is scrap. Outstanding.' : 'The rivals got the better of you this time.'}
          </p>
          <p className="earn">+{result.earned} 🔑 keys</p>
          <p className="keys" style={{ margin: '6px auto 0' }}>🔑 {fmtKeys(profile.keys)} keys</p>
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <button className="btn primary" onClick={() => setScreen('play')}>Play again</button>
            <button className="btn" onClick={() => setScreen('maps')}>Change map</button>
            <button className="btn" onClick={() => setScreen('shop')}>Shop</button>
            <button className="btn ghost" onClick={() => setScreen('home')}>Lobby</button>
          </div>
        </div>
      </div>
    );
  }

  // ---- AVATAR ----
  if (screen === 'avatar') {
    const Row = ({ label, colors, value, onPick }: { label: string; colors: string[]; value: string; onPick: (c: string) => void }) => (
      <div className="field">
        <label>{label}</label>
        <div className="swatches">
          {colors.map((c) => (
            <button key={c} className={`swatch ${value === c ? 'on' : ''}`} style={{ background: c }} onClick={() => onPick(c)} aria-label={c} />
          ))}
        </div>
      </div>
    );
    return (
      <div className="shell">
        <div className="panel">
          <p className="eyebrow">Step 1 — your fighter</p>
          <div className="brand"><span className="logo">Create your avatar</span></div>
          <div className="home-grid">
            <div className="preview-stage">
              <AvatarPreview avatar={draft} />
              <div className="preview-name">{draft.name.trim() || 'Rookie'}</div>
            </div>
            <div>
              <div className="field">
                <label htmlFor="nm">Call sign</label>
                <input id="nm" className="text-input" maxLength={14} value={draft.name}
                  onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))} placeholder="Rookie" />
              </div>
              <Row label="Body" colors={BODY_COLORS} value={draft.body} onPick={(c) => setDraft((d) => ({ ...d, body: c }))} />
              <Row label="Visor" colors={VISOR_COLORS} value={draft.visor} onPick={(c) => setDraft((d) => ({ ...d, visor: c }))} />
              <Row label="Accent" colors={ACCENT_COLORS} value={draft.accent} onPick={(c) => setDraft((d) => ({ ...d, accent: c }))} />
            </div>
          </div>
          <div className="btn-row">
            <button className="btn primary" onClick={saveAvatar}>Save fighter</button>
            <button className="btn ghost" onClick={() => setScreen('home')}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }

  // ---- SHOP ----
  if (screen === 'shop') {
    return (
      <div className="shell">
        <div className="panel">
          <div className="topbar">
            <div>
              <p className="eyebrow">Armory</p>
              <div className="brand"><span className="logo">Weapon shop</span></div>
              <p className="lead">Unlock gear with keys — Rivals style. Win matches to earn more.</p>
            </div>
            <span className="keys">🔑 {fmtKeys(profile.keys)} keys</span>
          </div>
          <div className="shop-grid">
            {WEAPON_ORDER.map((id) => {
              const w = WEAPONS[id];
              const owned = profile.owned.includes(id);
              const afford = profile.keys >= w.price;
              return (
                <div className="weapon-card" key={id}>
                  <div className="wi">{w.icon}</div>
                  <h3>{w.name}</h3>
                  <div className="weapon-meta">
                    {w.kind === 'heal' ? <span>+50 heal</span> : <span>{w.damage}{w.pellets ? `×${w.pellets}` : ''} dmg</span>}
                    <span>{w.mag > 0 ? `mag ${w.mag}` : w.kind === 'melee' ? 'melee' : `x${w.reserve}`}</span>
                    {w.auto && <span>auto</span>}
                    {w.scope && <span>scope</span>}
                  </div>
                  <p>{w.desc}</p>
                  {owned ? <div className="owned-tag">✓ Owned</div>
                    : <button className="btn primary" disabled={!afford} onClick={() => buy(id)}>{afford ? `Unlock — ${w.price} 🔑` : `Need ${w.price} 🔑`}</button>}
                </div>
              );
            })}
          </div>
          <div className="btn-row">
            <button className="btn primary" onClick={() => setScreen('maps')}>Choose map →</button>
            <button className="btn ghost" onClick={() => setScreen('home')}>Lobby</button>
          </div>
        </div>
      </div>
    );
  }

  // ---- MODE SELECT ----
  if (screen === 'mode') {
    return (
      <div className="shell">
        <div className="panel">
          <div className="topbar">
            <div>
              <p className="eyebrow">Step in</p>
              <div className="brand"><span className="logo">Choose your mode</span></div>
              <p className="lead">Fight the AI on your own, or face another player head-to-head.</p>
            </div>
            <span className="keys">🔑 {fmtKeys(profile.keys)} keys</span>
          </div>
          <div className="mode-grid">
            <button className="mode-card" onClick={() => { setPlayMode('robot'); setScreen('maps'); }}>
              <div className="mode-icon">🤖</div>
              <h3>Vs Robots</h3>
              <p>Take on 1–3 Rival Bots with your full arsenal. Earn keys for every win.</p>
              <span className="mode-cta">Play ▶</span>
            </button>
            <button className="mode-card" onClick={() => { setPlayMode('local'); setScreen('maps'); }}>
              <div className="mode-icon">🎮</div>
              <h3>Local 2P</h3>
              <p>Split-screen duel on one PC. P1 on WASD + Space, P2 on Arrows + Enter. First to {MP_FRAGS_TO_WIN} frags.</p>
              <span className="mode-cta">2-player ▶</span>
            </button>
            <button className="mode-card" onClick={() => { setPlayMode('online'); setScreen('maps'); }}>
              <div className="mode-icon">🌐</div>
              <h3>Online</h3>
              <p>Duel another player over your Wi-Fi. Pick the same map to be matched. First to {MP_FRAGS_TO_WIN} frags.</p>
              <span className="mode-cta">Find a match ▶</span>
            </button>
          </div>
          <div className="btn-row">
            <button className="btn ghost" onClick={() => setScreen('home')}>Lobby</button>
          </div>
        </div>
      </div>
    );
  }

  // ---- MAP SELECT ----
  if (screen === 'maps') {
    return (
      <div className="shell">
        <div className="panel">
          <div className="topbar">
            <div>
              <p className="eyebrow">Deploy</p>
              <div className="brand"><span className="logo">Select a map</span></div>
              <p className="lead">{playMode === 'robot'
                ? 'Five arenas, one to three rival bots each. More rivals, more keys.'
                : playMode === 'local'
                  ? 'Five arenas for your split-screen duel. Pick one and fight.'
                  : 'Five arenas. Pick the same one as your opponent to be matched.'}</p>
            </div>
            <span className="keys">🔑 {fmtKeys(profile.keys)} keys</span>
          </div>
          <div className="map-grid">
            {MAPS.map((m, i) => (
              <button key={m.name} className={`map-card ${i === mapIndex ? 'on' : ''}`} onClick={() => { setMapIndex(i); setScreen('play'); }}>
                <MapThumb map={m} />
                <div className="map-info">
                  <h3>{m.name} {playMode === 'robot' && <span className="rivals-tag">☠ {m.enemies.length}</span>}</h3>
                  <p>{m.blurb}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="btn-row">
            <button className="btn ghost" onClick={() => setScreen('home')}>Lobby</button>
          </div>
        </div>
      </div>
    );
  }

  // ---- HOME ----
  return (
    <div className="shell">
      <div className="panel">
        <div className="topbar">
          <div className="brand"><span className="logo">Rivals</span><span className="ver">2</span></div>
          <span className="keys">🔑 {fmtKeys(profile.keys)} keys</span>
        </div>
        <p className="lead">
          Build your own fighter, unlock a nine-weapon arsenal with keys, pick an arena, and take down every Rival Bot in first-person combat.
        </p>
        <div className="home-grid">
          <div className="preview-stage">
            <AvatarPreview avatar={profile.avatar} />
            <div className="preview-name">{profile.avatar.name}</div>
          </div>
          <div>
            <p className="eyebrow">Your arsenal ({profile.owned.length}/{WEAPON_ORDER.length})</p>
            <div className="loadout-strip">
              {WEAPON_ORDER.filter((id) => profile.owned.includes(id)).map((id) => (
                <span className="chip" key={id}>{WEAPONS[id].icon} {WEAPONS[id].name}</span>
              ))}
            </div>
            <p className="muted-note">Best played on desktop with mouse + keyboard. Sound on for the full effect.</p>
          </div>
        </div>
        <div className="btn-row">
          <button className="btn primary" onClick={() => setScreen('mode')}>▶ Play</button>
          <button className="btn" onClick={startEditing}>🎨 Edit avatar</button>
          <button className="btn" onClick={() => setScreen('shop')}>🔫 Shop</button>
        </div>
      </div>
    </div>
  );
}

export default App;
