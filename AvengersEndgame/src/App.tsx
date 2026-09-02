import { useEffect, useRef, useState } from 'react';
import './App.css';

// ============================================================================
//  Avengers Endgame — open-world FIRST-PERSON action on planet Titan.
//  Free roam: walk/strafe across the planet, jump, double-jump into a flip,
//  and dodge-dash with i-frames while Thanos and his outriders hunt you.
//  Hand-drawn pseudo-3D (no 3D libs); full-screen canvas fits any device.
// ============================================================================

// ===== Camera / projection =====
const FOV = 1.5; // ~86°
const EYE = 1.7; // eye height (world units)
const TURN_SPEED = 0.045;
const AIM_ASSIST = 0.05;

// ===== Movement / physics =====
const MOVE_SPEED = 0.17; // units / frame at full input
const MOVE_SMOOTH = 0.2;
const GRAVITY = 0.02;
const JUMP_V = 0.34;
const DASH_V = 0.72; // stronger burst so a dodge clearly moves you out of the way
const DASH_TIME = 13;
const DASH_CD = 22; // short cooldown — you can dodge almost back-to-back
const DASH_IFRAMES = 34; // generous invulnerability window during the dodge
const FLIP_DUR = 34;
const ARENA_R = 60; // how far you can roam from the centre

// ===== Thanos =====
const THANOS_START = 17;
const THANOS_H = 6.4;
const THANOS_W = 4.2;
const THANOS_MAX_HP = 620;
const THANOS_KEEP = 13; // distance he likes to keep

// ===== Outriders =====
const OUT_H = 2.0;
const OUT_W = 2.0;
const OUT_HP = 14;
const OUT_SPAWN = 28;
const CONTACT = 1.7;

// ===== Beams =====
const BEAM_H = 1.0;
const BEAM_W = 1.0;
const BEAM_LIFE = 220;

// ===== Hero / rules =====
const INVULN = 80;
const START_LIVES = 20;
const ULT_MAX = 100;
const ULT_DAMAGE = 150;

// ===== Allied Avengers (the rest of the team fighting beside you) =====
const ALLY_H = 2.0;
const ALLY_W = 1.3;
const ALLY_RANGE = 24; // how far an ally will engage an outrider
const ALLY_DMG_MULT = 0.85; // they hit harder now — the team ends the fight faster
const ALLY_MAX_HP = 60;
const DOWN_TIME = 210; // ~3.5s downed before an ally gets back up
const BEAM_ALLY_DMG = 26; // Thanos's gauntlet blast vs an ally
const OUT_ALLY_DMG = 30; // an outrider crashing into an ally

const FOG = { r: 96, g: 46, b: 52 };
const NAMES_KEY = 'avengers-names';
const SCORES_KEY = 'avengers-best-by-user';

type Status = 'menu' | 'playing' | 'won' | 'over';
type Scores = Record<string, number>;

type Hero = {
  id: string;
  name: string;
  emoji: string;
  power: string;
  color: string;
  fireCd: number;
  dmg: number;
  weapon: 'web' | 'repulsor' | 'shield' | 'claw' | 'hammer';
  accent: [string, string];
};

const HEROES: Hero[] = [
  { id: 'spiderman', name: 'Spider-Man', emoji: '🕷️', power: 'Web Barrage', color: '#ef4444', fireCd: 7, dmg: 7, weapon: 'web', accent: ['#ef4444', '#1d4ed8'] },
  { id: 'ironman', name: 'Iron Man', emoji: '🤖', power: 'Repulsor Blast', color: '#f59e0b', fireCd: 11, dmg: 12, weapon: 'repulsor', accent: ['#f59e0b', '#b91c1c'] },
  { id: 'cap', name: 'Captain America', emoji: '🛡️', power: 'Shield Throw', color: '#3b82f6', fireCd: 15, dmg: 15, weapon: 'shield', accent: ['#2563eb', '#dc2626'] },
  { id: 'panther', name: 'Black Panther', emoji: '🐾', power: 'Kinetic Daggers', color: '#a855f7', fireCd: 9, dmg: 9, weapon: 'claw', accent: ['#7c3aed', '#111827'] },
  { id: 'thor', name: 'Thor', emoji: '⚡', power: 'Mjolnir Strike', color: '#38bdf8', fireCd: 19, dmg: 24, weapon: 'hammer', accent: ['#38bdf8', '#1e3a8a'] }
];

type Vec = { x: number; z: number };
type Ally = { hero: Hero; x: number; z: number; fire: number; muzzle: number; aimx: number; aimz: number; hp: number; maxHp: number; down: number };
type Outrider = { x: number; z: number; hp: number; seed: number; target: Ally | null };
type Beam = { x: number; z: number; vx: number; vz: number; life: number };
type Tracer = { x1: number; y1: number; x2: number; y2: number; life: number; color: string };
type Float = { x: number; y: number; vy: number; life: number; text: string; color: string };
type Star = { angle: number; y: number; r: number };
type Rock = { x: number; z: number; s: number };
type Particle = { x: number; y: number; vx: number; vy: number; life: number; max: number; size: number; color: string; grav: number };
type Shock = { life: number; max: number };
type Target = { type: 'thanos' | 'out' | 'beam'; ref: Outrider | Beam | null; x: number; z: number; dist: number };

function norm(a: number): number {
  return ((((a + Math.PI) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) - Math.PI;
}

// Project a world point (x,z, height worldH) onto screen, relative to the camera.
function project(ex: number, ez: number, worldH: number, worldW: number, px: number, pz: number, py: number, yaw: number, w: number, h: number, horizon: number) {
  const dx = ex - px;
  const dz = ez - pz;
  const dist = Math.hypot(dx, dz);
  const rel = norm(Math.atan2(dx, dz) - yaw);
  if (Math.cos(rel) <= 0.05) return null; // behind camera
  const focal = w / 2 / Math.tan(FOV / 2);
  const x = w / 2 + focal * Math.tan(rel);
  const eye = EYE + py;
  const baseY = horizon + (focal * eye) / dist;
  const sh = (focal * worldH) / dist;
  const sw = (focal * worldW) / dist;
  return { x, baseY, topY: baseY - sh, sw, sh, rel, dist, focal, horizon };
}

function fogAmount(dist: number): number {
  return Math.max(0, Math.min(0.82, (dist - 6) / 32));
}

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // camera + player body
  const posRef = useRef<Vec>({ x: 0, z: 0 });
  const velRef = useRef<Vec>({ x: 0, z: 0 });
  const yawRef = useRef(0);
  const yawVelRef = useRef(0);
  const prevYawRef = useRef(0);
  const pyRef = useRef(0); // height (jump)
  const vyRef = useRef(0);
  const jumpsRef = useRef(2);
  const dashRef = useRef({ t: 0, vx: 0, vz: 0, cd: 0 });
  const flipRef = useRef({ active: false, t: 0, dir: 1, dur: FLIP_DUR });
  const rollRef = useRef(0);
  const dodgeFxRef = useRef(0); // blue "you dodged" glow timer
  const sizeRef = useRef({ w: window.innerWidth, h: window.innerHeight });

  // scenery
  const starsRef = useRef<Star[]>([]);
  const rocksRef = useRef<Rock[]>([]);
  const ridgeRef = useRef<number[]>([]);

  // hero weapon
  const heroRef = useRef<Hero>(HEROES[0]);
  const cooldownRef = useRef(0);
  const invulnRef = useRef(0);
  const muzzleRef = useRef(0);
  const recoilRef = useRef(0);

  // input
  const ctrlRef = useRef({ fwd: false, back: false, left: false, right: false, turnL: false, turnR: false, fire: false });
  const joyRef = useRef({ active: false, bx: 0, by: 0, kx: 0, ky: 0 });
  const joyMoveRef = useRef({ f: 0, s: 0 });
  const pointersRef = useRef<Record<number, { role: 'move' | 'look'; lx: number; moved: boolean }>>({});
  const pressedRef = useRef<Set<string>>(new Set());

  // enemies
  const thanosRef = useRef<Vec>({ x: 0, z: THANOS_START });
  const thanosDirRef = useRef(1);
  const thanosHpRef = useRef(THANOS_MAX_HP);
  const thanosHitRef = useRef(0);
  const outridersRef = useRef<Outrider[]>([]);
  const beamsRef = useRef<Beam[]>([]);
  const alliesRef = useRef<Ally[]>([]);

  // effects
  const tracersRef = useRef<Tracer[]>([]);
  const floatsRef = useRef<Float[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const shockRef = useRef<Shock[]>([]);
  const shakeRef = useRef(0);

  const ultRef = useRef(0);
  const ultFlashRef = useRef(0);
  const frameRef = useRef(0);

  const statusRef = useRef<Status>('menu');
  const scoreRef = useRef(0);
  const livesRef = useRef(START_LIVES);

  // HUD mirror state
  const [status, setStatus] = useState<Status>('menu');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(START_LIVES);
  const [hp, setHp] = useState(THANOS_MAX_HP);
  const [ult, setUlt] = useState(0);
  const [heroId, setHeroId] = useState(HEROES[0].id);
  const [scores, setScores] = useState<Scores>({});
  const [showHelp, setShowHelp] = useState(true); // controls card, shown on first play

  const [names, setNames] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState('');
  const [username, setUsername] = useState('');
  const [nameInput, setNameInput] = useState('');

  const hero = HEROES.find((h) => h.id === heroId) ?? HEROES[0];

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  useEffect(() => {
    const savedScores: Scores = JSON.parse(localStorage.getItem(SCORES_KEY) || '{}');
    const savedNames: string[] = JSON.parse(localStorage.getItem(NAMES_KEY) || '[]');
    const merged = Array.from(new Set([...savedNames, ...Object.keys(savedScores)]));
    setScores(savedScores);
    setNames(merged);
    if (merged.length > 0) setSelectedName(merged[0]);
  }, []);

  const best = username ? scores[username] || 0 : 0;

  const saveNames = (next: string[]) => {
    setNames(next);
    localStorage.setItem(NAMES_KEY, JSON.stringify(next));
  };
  const addName = () => {
    const n = nameInput.trim();
    if (!n) return;
    if (!names.includes(n)) saveNames([n, ...names]);
    setSelectedName(n);
    setNameInput('');
  };
  const removeName = (n: string) => {
    saveNames(names.filter((x) => x !== n));
    if (scores[n] !== undefined) {
      const next = { ...scores };
      delete next[n];
      setScores(next);
      localStorage.setItem(SCORES_KEY, JSON.stringify(next));
    }
    if (selectedName === n) setSelectedName('');
  };

  const spawnParticles = (x: number, y: number, n: number, color: string, spread: number, grav = 0.12) => {
    const arr = particlesRef.current;
    for (let i = 0; i < n; i += 1) {
      const a = Math.random() * Math.PI * 2;
      const sp = Math.random() * spread;
      arr.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - spread * 0.4, life: 0, max: 20 + Math.random() * 26, size: 1.5 + Math.random() * 2.5, color, grav });
    }
    if (arr.length > 300) arr.splice(0, arr.length - 300);
  };

  // Effective movement input this frame (joystick + keyboard, clamped).
  const moveInput = () => {
    const j = joyMoveRef.current;
    const c = ctrlRef.current;
    let f = j.f + (c.fwd ? 1 : 0) - (c.back ? 1 : 0);
    let s = j.s + (c.right ? 1 : 0) - (c.left ? 1 : 0);
    const m = Math.hypot(f, s);
    if (m > 1) {
      f /= m;
      s /= m;
    }
    return { f, s };
  };

  // Nearest enemy/threat under the crosshair.
  const currentTarget = (): Target | null => {
    const yaw = yawRef.current;
    const px = posRef.current.x;
    const pz = posRef.current.z;
    let best: Target | null = null;
    let bd = Infinity;
    const consider = (ex: number, ez: number, halfW: number, type: Target['type'], ref: Outrider | Beam | null) => {
      const dx = ex - px;
      const dz = ez - pz;
      const dist = Math.hypot(dx, dz);
      const rel = norm(Math.atan2(dx, dz) - yaw);
      const tol = Math.atan2(halfW, Math.max(1, dist)) + AIM_ASSIST;
      if (Math.abs(rel) < tol && dist < bd) {
        best = { type, ref, x: ex, z: ez, dist };
        bd = dist;
      }
    };
    if (thanosHpRef.current > 0) consider(thanosRef.current.x, thanosRef.current.z, THANOS_W / 2, 'thanos', null);
    for (const o of outridersRef.current) consider(o.x, o.z, OUT_W / 2, 'out', o);
    for (const b of beamsRef.current) consider(b.x, b.z, BEAM_W / 2, 'beam', b);
    return best;
  };

  const fire = () => {
    if (statusRef.current !== 'playing') return;
    if (cooldownRef.current > 0) return;
    const h = heroRef.current;
    cooldownRef.current = h.fireCd;
    muzzleRef.current = 5;
    recoilRef.current = 1;

    const { w, h: hh } = sizeRef.current;
    const horizon = hh * 0.46;
    spawnParticles(w / 2, hh - 92, 5, 'rgba(255,240,210,0.9)', 1.4, -0.04);
    const tgt = currentTarget();
    const start = { x: w / 2, y: hh - 78 };
    let end = { x: w / 2, y: horizon };

    if (tgt) {
      const p = project(tgt.x, tgt.z, 1, 1, posRef.current.x, posRef.current.z, pyRef.current, yawRef.current, w, hh, horizon);
      if (p) end = { x: p.x, y: p.baseY - p.focal / Math.max(1, tgt.dist) };
      if (tgt.type === 'thanos') {
        thanosHpRef.current = Math.max(0, thanosHpRef.current - h.dmg);
        thanosHitRef.current = 6;
        shakeRef.current = Math.max(shakeRef.current, 2.5);
        scoreRef.current += h.dmg;
        ultRef.current = Math.min(ULT_MAX, ultRef.current + h.dmg * 0.5);
        spawnParticles(end.x, end.y, 8, '#fde68a', 2.4);
        setHp(thanosHpRef.current);
        setScore(scoreRef.current);
        setUlt(ultRef.current);
        if (thanosHpRef.current <= 0) win();
      } else if (tgt.type === 'out') {
        const o = tgt.ref as Outrider;
        o.hp -= h.dmg;
        spawnParticles(end.x, end.y, 6, '#a3e635', 2.2);
        if (o.hp <= 0) {
          outridersRef.current = outridersRef.current.filter((x) => x !== o);
          scoreRef.current += 25;
          ultRef.current = Math.min(ULT_MAX, ultRef.current + 6);
          spawnParticles(end.x, end.y, 18, '#84cc16', 3.4);
          setScore(scoreRef.current);
          setUlt(ultRef.current);
          floatsRef.current.push({ x: end.x, y: end.y, vy: -0.8, life: 34, text: '+25', color: '#fbbf24' });
        }
      } else {
        beamsRef.current = beamsRef.current.filter((x) => x !== (tgt.ref as Beam));
        spawnParticles(end.x, end.y, 12, '#c084fc', 3);
        floatsRef.current.push({ x: end.x, y: end.y, vy: -0.8, life: 26, text: 'BLOCK', color: '#a5f3fc' });
      }
    }
    tracersRef.current.push({ x1: start.x, y1: start.y, x2: end.x, y2: end.y, life: 6, color: h.color });
  };

  const triggerFlip = (dir: number, dur = FLIP_DUR) => {
    flipRef.current = { active: true, t: 0, dir, dur };
  };

  const jump = () => {
    if (statusRef.current !== 'playing') return;
    if (pyRef.current <= 0.001 && jumpsRef.current >= 2) {
      vyRef.current = JUMP_V;
      jumpsRef.current = 1;
      const { w, h } = sizeRef.current;
      spawnParticles(w / 2, h - 40, 8, 'rgba(200,150,120,0.6)', 1.6);
    } else if (jumpsRef.current > 0) {
      // Mid-air second jump → acrobatic flip.
      vyRef.current = JUMP_V * 0.92;
      jumpsRef.current = 0;
      const inp = moveInput();
      triggerFlip(inp.s >= 0 ? 1 : -1);
      invulnRef.current = Math.max(invulnRef.current, 14);
    }
  };

  const dodge = () => {
    if (statusRef.current !== 'playing') return;
    if (dashRef.current.cd > 0) return;
    const yaw = yawRef.current;
    const fx = Math.sin(yaw);
    const fz = Math.cos(yaw);
    const rx = Math.cos(yaw);
    const rz = -Math.sin(yaw);
    const inp = moveInput();
    let dx = fx * inp.f + rx * inp.s;
    let dz = fz * inp.f + rz * inp.s;
    if (Math.hypot(dx, dz) < 0.1) {
      dx = fx;
      dz = fz;
    }
    const m = Math.hypot(dx, dz) || 1;
    dashRef.current = { t: DASH_TIME, vx: (dx / m) * DASH_V, vz: (dz / m) * DASH_V, cd: DASH_CD };
    invulnRef.current = Math.max(invulnRef.current, DASH_IFRAMES);
    dodgeFxRef.current = 18;
    shakeRef.current = Math.max(shakeRef.current, 3);
    triggerFlip(inp.s >= 0 ? 1 : -1, 22); // quick acrobatic roll
    const { w, h } = sizeRef.current;
    spawnParticles(w / 2, h - 50, 16, 'rgba(150,200,255,0.7)', 2.8);
    floatsRef.current.push({ x: w / 2, y: h * 0.5 + 44, vy: -1, life: 28, text: 'DODGE!', color: '#7dd3fc' });
  };

  const unleashUlt = () => {
    if (statusRef.current !== 'playing') return;
    if (ultRef.current < ULT_MAX) return;
    ultRef.current = 0;
    setUlt(0);
    ultFlashRef.current = 24;
    shakeRef.current = 14;
    shockRef.current.push({ life: 0, max: 36 });
    thanosHpRef.current = Math.max(0, thanosHpRef.current - ULT_DAMAGE);
    thanosHitRef.current = 16;
    setHp(thanosHpRef.current);
    scoreRef.current += ULT_DAMAGE + outridersRef.current.length * 25;
    setScore(scoreRef.current);
    const { w, h } = sizeRef.current;
    spawnParticles(w / 2, h * 0.46, 40, heroRef.current.color, 6);
    outridersRef.current = [];
    beamsRef.current = [];
    if (thanosHpRef.current <= 0) win();
  };

  const win = () => {
    statusRef.current = 'won';
    setStatus('won');
    scoreRef.current += livesRef.current * 200;
    setScore(scoreRef.current);
    saveBest();
  };
  const gameOver = () => {
    statusRef.current = 'over';
    setStatus('over');
    saveBest();
  };
  const saveBest = () => {
    if (username && scoreRef.current > (scores[username] || 0)) {
      const next = { ...scores, [username]: scoreRef.current };
      setScores(next);
      localStorage.setItem(SCORES_KEY, JSON.stringify(next));
    }
  };

  const startGame = () => {
    const name = selectedName || username;
    if (!name) return;
    setUsername(name);
    heroRef.current = hero;
    posRef.current = { x: 0, z: 0 };
    velRef.current = { x: 0, z: 0 };
    yawRef.current = 0;
    yawVelRef.current = 0;
    prevYawRef.current = 0;
    pyRef.current = 0;
    vyRef.current = 0;
    jumpsRef.current = 2;
    dashRef.current = { t: 0, vx: 0, vz: 0, cd: 0 };
    flipRef.current = { active: false, t: 0, dir: 1, dur: FLIP_DUR };
    rollRef.current = 0;
    dodgeFxRef.current = 0;
    thanosRef.current = { x: 0, z: THANOS_START };
    thanosDirRef.current = 1;
    thanosHpRef.current = THANOS_MAX_HP;
    thanosHitRef.current = 0;
    outridersRef.current = [];
    beamsRef.current = [];
    alliesRef.current = HEROES.filter((h) => h.id !== hero.id).map((h, i) => ({
      hero: h,
      x: (i - 1.5) * 4,
      z: -3 - (i % 2) * 2,
      fire: 30 + i * 12,
      muzzle: 0,
      aimx: 0,
      aimz: THANOS_START,
      hp: ALLY_MAX_HP,
      maxHp: ALLY_MAX_HP,
      down: 0
    }));
    tracersRef.current = [];
    floatsRef.current = [];
    particlesRef.current = [];
    shockRef.current = [];
    shakeRef.current = 0;
    cooldownRef.current = 0;
    invulnRef.current = 0;
    muzzleRef.current = 0;
    recoilRef.current = 0;
    ultRef.current = 0;
    ultFlashRef.current = 0;
    scoreRef.current = 0;
    livesRef.current = START_LIVES;
    ctrlRef.current = { fwd: false, back: false, left: false, right: false, turnL: false, turnR: false, fire: false };
    joyMoveRef.current = { f: 0, s: 0 };
    joyRef.current.active = false;
    pointersRef.current = {};
    setScore(0);
    setLives(START_LIVES);
    setHp(THANOS_MAX_HP);
    setUlt(0);
    statusRef.current = 'playing';
    setStatus('playing');
  };

  const stopGame = () => {
    statusRef.current = 'menu';
    setStatus('menu');
  };

  // Keyboard.
  useEffect(() => {
    const onDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.tagName === 'INPUT') return;
      const k = e.key.toLowerCase();
      const c = ctrlRef.current;
      let handled = true;
      if (k === 'w') c.fwd = true;
      else if (k === 's') c.back = true;
      else if (k === 'a') c.left = true;
      else if (k === 'd') c.right = true;
      else if (k === 'arrowleft' || k === 'q') c.turnL = true;
      else if (k === 'arrowright' || k === 'e') c.turnR = true;
      else if (k === ' ' || k === 'j' || k === 'k') {
        // Space (and J/K) fire — hold for auto-fire.
        c.fire = true;
        fire();
      } else if (k === 'arrowup') {
        if (!pressedRef.current.has(k)) jump();
      } else if (k === 'arrowdown' || k === 'shift') {
        if (!pressedRef.current.has(k)) dodge();
      } else if (k === 'f' || k === 'enter') {
        if (!pressedRef.current.has(k)) unleashUlt();
      } else handled = false;
      if (handled) {
        pressedRef.current.add(k);
        e.preventDefault();
      }
    };
    const onUp = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      const c = ctrlRef.current;
      pressedRef.current.delete(k);
      if (k === 'w') c.fwd = false;
      else if (k === 's') c.back = false;
      else if (k === 'a') c.left = false;
      else if (k === 'd') c.right = false;
      else if (k === 'arrowleft' || k === 'q') c.turnL = false;
      else if (k === 'arrowright' || k === 'e') c.turnR = false;
      else if (k === ' ' || k === 'j' || k === 'k') c.fire = false;
    };
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    return () => {
      window.removeEventListener('keydown', onDown);
      window.removeEventListener('keyup', onUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ===== Game loop =====
  useEffect(() => {
    if (status === 'menu') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (starsRef.current.length === 0) {
      starsRef.current = Array.from({ length: 130 }, () => ({ angle: Math.random() * Math.PI * 2, y: Math.random() * 0.36, r: Math.random() * 1.4 + 0.3 }));
    }
    if (rocksRef.current.length === 0) {
      // Landmarks spread across the disk-shaped arena (you walk past them).
      rocksRef.current = Array.from({ length: 46 }, () => {
        const r = Math.sqrt(Math.random()) * ARENA_R;
        const a = Math.random() * Math.PI * 2;
        return { x: Math.sin(a) * r, z: Math.cos(a) * r, s: 0.5 + Math.random() * 2.4 };
      });
    }
    if (ridgeRef.current.length === 0) ridgeRef.current = Array.from({ length: 96 }, () => Math.random());

    let raf = 0;
    const rage = () => 1 - thanosHpRef.current / THANOS_MAX_HP;
    const phase = () => (rage() < 0.34 ? 1 : rage() < 0.67 ? 2 : 3);

    const loseLife = () => {
      livesRef.current -= 1;
      setLives(livesRef.current);
      shakeRef.current = 9;
      if (livesRef.current <= 0) gameOver();
      else invulnRef.current = INVULN;
    };

    const spawnOutrider = () => {
      const a = Math.random() * Math.PI * 2;
      // Roughly 40% of outriders peel off to hunt an ally instead of you.
      const upAllies = alliesRef.current.filter((x) => x.down <= 0);
      const target = upAllies.length && Math.random() < 0.4 ? upAllies[Math.floor(Math.random() * upAllies.length)] : null;
      outridersRef.current.push({ x: posRef.current.x + Math.sin(a) * OUT_SPAWN, z: posRef.current.z + Math.cos(a) * OUT_SPAWN, hp: OUT_HP, seed: Math.random() * 100, target });
    };

    // Damage an ally; knock them down (to revive later) when their HP runs out.
    const damageAlly = (a: Ally, dmg: number) => {
      if (a.down > 0) return;
      a.hp -= dmg;
      if (a.hp <= 0) {
        a.hp = 0;
        a.down = DOWN_TIME;
        shakeRef.current = Math.max(shakeRef.current, 4);
      }
    };

    const clampArena = (v: Vec) => {
      const r = Math.hypot(v.x, v.z);
      if (r > ARENA_R) {
        v.x = (v.x / r) * ARENA_R;
        v.z = (v.z / r) * ARENA_R;
      }
    };

    const update = () => {
      frameRef.current += 1;
      const c = ctrlRef.current;
      if (cooldownRef.current > 0) cooldownRef.current -= 1;
      if (invulnRef.current > 0) invulnRef.current -= 1;
      if (thanosHitRef.current > 0) thanosHitRef.current -= 1;
      if (muzzleRef.current > 0) muzzleRef.current -= 1;
      if (recoilRef.current > 0) recoilRef.current = Math.max(0, recoilRef.current - 0.12);
      if (ultFlashRef.current > 0) ultFlashRef.current -= 1;
      if (dashRef.current.cd > 0) dashRef.current.cd -= 1;
      if (dodgeFxRef.current > 0) dodgeFxRef.current -= 1;
      shakeRef.current *= 0.86;

      if (c.fire) fire();

      // Turn (keyboard) + look-velocity tracking for weapon sway.
      if (c.turnL) yawRef.current -= TURN_SPEED;
      if (c.turnR) yawRef.current += TURN_SPEED;
      yawVelRef.current = yawVelRef.current * 0.8 + (yawRef.current - prevYawRef.current) * 0.2;
      prevYawRef.current = yawRef.current;

      // Flip (barrel-roll) animation.
      if (flipRef.current.active) {
        flipRef.current.t += 1;
        const pr = flipRef.current.t / flipRef.current.dur;
        const e = pr < 0.5 ? 2 * pr * pr : 1 - Math.pow(-2 * pr + 2, 2) / 2;
        rollRef.current = e * Math.PI * 2 * flipRef.current.dir;
        if (pr >= 1) {
          flipRef.current.active = false;
          rollRef.current = 0;
        }
      }

      const yaw = yawRef.current;
      const fx = Math.sin(yaw);
      const fz = Math.cos(yaw);
      const rx = Math.cos(yaw);
      const rz = -Math.sin(yaw);
      const inp = moveInput();
      const dvx = (fx * inp.f + rx * inp.s) * MOVE_SPEED;
      const dvz = (fz * inp.f + rz * inp.s) * MOVE_SPEED;
      velRef.current.x += (dvx - velRef.current.x) * MOVE_SMOOTH;
      velRef.current.z += (dvz - velRef.current.z) * MOVE_SMOOTH;

      let mx = velRef.current.x;
      let mz = velRef.current.z;
      if (dashRef.current.t > 0) {
        mx += dashRef.current.vx;
        mz += dashRef.current.vz;
        dashRef.current.t -= 1;
        dashRef.current.vx *= 0.9;
        dashRef.current.vz *= 0.9;
      }
      posRef.current.x += mx;
      posRef.current.z += mz;
      clampArena(posRef.current);

      // Vertical (jump / gravity / landing).
      if (pyRef.current > 0 || vyRef.current !== 0) {
        vyRef.current -= GRAVITY;
        pyRef.current += vyRef.current;
        if (pyRef.current <= 0) {
          if (vyRef.current < -0.25) {
            shakeRef.current = Math.max(shakeRef.current, 5);
            const { w, h } = sizeRef.current;
            spawnParticles(w / 2, h - 38, 12, 'rgba(210,160,130,0.6)', 2.6);
          }
          pyRef.current = 0;
          vyRef.current = 0;
          jumpsRef.current = 2;
        }
      }

      // Footstep dust while running on the ground.
      const spd = Math.hypot(mx, mz);
      if (pyRef.current <= 0 && spd > 0.06 && frameRef.current % 9 === 0) {
        const { w, h } = sizeRef.current;
        spawnParticles(w / 2 + (Math.random() - 0.5) * 40, h - 30, 3, 'rgba(190,140,110,0.45)', 1.2);
      }

      const ph = phase();
      const px = posRef.current.x;
      const pz = posRef.current.z;

      // Thanos roams: keeps his distance, strafes, closes in if you flee.
      if (thanosHpRef.current > 0) {
        const t = thanosRef.current;
        let tdx = px - t.x;
        let tdz = pz - t.z;
        const td = Math.hypot(tdx, tdz) || 1;
        tdx /= td;
        tdz /= td;
        const tspeed = 0.03 * (1 + (ph - 1) * 0.5);
        if (td > THANOS_KEEP + 3) {
          t.x += tdx * tspeed;
          t.z += tdz * tspeed;
        } else if (td < THANOS_KEEP - 3) {
          t.x -= tdx * tspeed;
          t.z -= tdz * tspeed;
        }
        // strafe (perpendicular) for menace
        thanosDirRef.current += 0;
        t.x += -tdz * tspeed * 0.6 * Math.sin(frameRef.current * 0.01);
        t.z += tdx * tspeed * 0.6 * Math.sin(frameRef.current * 0.01);
        clampArena(t);

        if (Math.random() < 0.011 + (ph - 1) * 0.009 && beamsRef.current.length < 6) {
          // Aim at you, or sometimes blast an ally.
          let aimX = px;
          let aimZ = pz;
          const upAllies = alliesRef.current.filter((x) => x.down <= 0);
          if (upAllies.length && Math.random() < 0.4) {
            const a = upAllies[Math.floor(Math.random() * upAllies.length)];
            aimX = a.x;
            aimZ = a.z;
          }
          const bdx = aimX - t.x;
          const bdz = aimZ - t.z;
          const bd = Math.hypot(bdx, bdz) || 1;
          const sp = 0.16 + (ph - 1) * 0.05;
          beamsRef.current.push({ x: t.x, z: t.z, vx: (bdx / bd) * sp, vz: (bdz / bd) * sp, life: BEAM_LIFE });
        }
        if (Math.random() < 0.006 + (ph - 1) * 0.006 && outridersRef.current.length < 8) spawnOutrider();
      }

      // Outriders chase the player.
      const outSpeed = 0.045 * (1 + (ph - 1) * 0.6);
      let struck = false;
      const survOut: Outrider[] = [];
      for (const o of outridersRef.current) {
        // Chase the assigned ally (if still up) — otherwise come for you.
        const aim = o.target && o.target.down <= 0 ? o.target : null;
        const tgX = aim ? aim.x : px;
        const tgZ = aim ? aim.z : pz;
        const dx = tgX - o.x;
        const dz = tgZ - o.z;
        const d = Math.hypot(dx, dz) || 1;
        o.x += (dx / d) * outSpeed;
        o.z += (dz / d) * outSpeed;
        if (d <= CONTACT) {
          if (aim) damageAlly(aim, OUT_ALLY_DMG); // crashes into the ally
          else struck = true;
        } else survOut.push(o);
      }
      outridersRef.current = survOut;

      // Beams fly straight; dodge them by moving!
      const survBeam: Beam[] = [];
      for (const b of beamsRef.current) {
        b.x += b.vx;
        b.z += b.vz;
        b.life -= 1;
        let consumed = false;
        if (Math.hypot(px - b.x, pz - b.z) <= CONTACT) {
          struck = true;
          consumed = true;
        } else {
          for (const a of alliesRef.current) {
            if (a.down > 0) continue;
            if (Math.hypot(a.x - b.x, a.z - b.z) <= CONTACT) {
              damageAlly(a, BEAM_ALLY_DMG);
              consumed = true;
              break;
            }
          }
        }
        if (!consumed && b.life > 0) survBeam.push(b);
      }
      beamsRef.current = survBeam;

      if (struck && invulnRef.current <= 0) loseLife();

      // ===== Allied Avengers fighting beside you =====
      // They flank toward Thanos, clear nearby outriders, and chip the boss.
      const tx = thanosRef.current.x;
      const tz = thanosRef.current.z;
      let dirx = tx - px;
      let dirz = tz - pz;
      const dl = Math.hypot(dirx, dirz) || 1;
      dirx /= dl;
      dirz /= dl;
      const perpx = -dirz;
      const perpz = dirx;
      const sideAmt = [-9, -5, 5, 9];
      const fwdAmt = [1.5, 3.5, 3.5, 1.5];
      const allies = alliesRef.current;
      for (let i = 0; i < allies.length; i += 1) {
        const a = allies[i];
        if (a.muzzle > 0) a.muzzle -= 1;
        // Downed: count down, then get back up at full health.
        if (a.down > 0) {
          a.down -= 1;
          a.muzzle = 0;
          if (a.down === 0) a.hp = a.maxHp;
          continue;
        }
        // Hold a battle-line formation slot beside the player, facing Thanos.
        const sx = px + dirx * fwdAmt[i] + perpx * sideAmt[i];
        const sz = pz + dirz * fwdAmt[i] + perpz * sideAmt[i];
        a.x += (sx - a.x) * 0.045;
        a.z += (sz - a.z) * 0.045;

        // Target: nearest outrider in range, else Thanos.
        let outTgt: Outrider | null = null;
        let od = ALLY_RANGE;
        for (const o of outridersRef.current) {
          const d = Math.hypot(o.x - a.x, o.z - a.z);
          if (d < od) {
            od = d;
            outTgt = o;
          }
        }
        a.aimx = outTgt ? outTgt.x : tx;
        a.aimz = outTgt ? outTgt.z : tz;

        a.fire -= 1;
        if (a.fire <= 0 && (outTgt || thanosHpRef.current > 0)) {
          a.fire = 42 + a.hero.fireCd * 3;
          a.muzzle = 5;
          const dmg = a.hero.dmg * ALLY_DMG_MULT;
          if (outTgt) {
            outTgt.hp -= dmg;
            if (outTgt.hp <= 0) {
              const dead = outTgt;
              outridersRef.current = outridersRef.current.filter((x) => x !== dead);
              scoreRef.current += 15;
              setScore(scoreRef.current);
            }
          } else {
            thanosHpRef.current = Math.max(0, thanosHpRef.current - dmg);
            thanosHitRef.current = 4;
            scoreRef.current += Math.round(dmg * 0.5);
            setHp(thanosHpRef.current);
            setScore(scoreRef.current);
            if (thanosHpRef.current <= 0) win();
          }
        }
      }

      // Effects.
      tracersRef.current = tracersRef.current.filter((t) => (t.life -= 1) > 0);
      floatsRef.current = floatsRef.current.filter((f) => {
        f.y += f.vy;
        f.life -= 1;
        return f.life > 0;
      });
      shockRef.current = shockRef.current.filter((s) => (s.life += 1) < s.max);
      if (frameRef.current % 3 === 0) {
        const { w, h } = sizeRef.current;
        particlesRef.current.push({ x: Math.random() * w, y: h * 0.5 + Math.random() * h * 0.5, vx: (Math.random() - 0.5) * 0.3, vy: -0.15 - Math.random() * 0.2, life: 0, max: 90 + Math.random() * 80, size: 0.6 + Math.random() * 1.2, color: 'rgba(255,210,180,0.5)', grav: -0.002 });
      }
      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.grav;
        p.life += 1 / p.max;
      }
      particlesRef.current = particlesRef.current.filter((p) => p.life < 1);
      if (particlesRef.current.length > 300) particlesRef.current.splice(0, particlesRef.current.length - 300);
    };

    const draw = () => {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      sizeRef.current = { w, h };
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const yaw = yawRef.current;
      const px = posRef.current.x;
      const pz = posRef.current.z;
      const py = pyRef.current;
      const speed = Math.hypot(velRef.current.x, velRef.current.z);
      const horizon = h * 0.46 - py * 26; // jumping lifts the horizon view

      // ===== WORLD (inside shake + flip-roll transform) =====
      ctx.save();
      const bobAmt = 1.4 + speed * 14;
      const bob = Math.sin(frameRef.current * 0.05 * (1 + speed * 8)) * bobAmt;
      const sk = shakeRef.current;
      ctx.translate((Math.random() - 0.5) * sk, (Math.random() - 0.5) * sk + bob);
      const roll = rollRef.current;
      if (roll) {
        ctx.translate(w / 2, h / 2);
        ctx.rotate(roll);
        ctx.translate(-w / 2, -h / 2);
      }
      const M = roll ? Math.hypot(w, h) : 18;
      const focal = w / 2 / Math.tan(FOV / 2);

      // Sky.
      const sky = ctx.createLinearGradient(0, -M, 0, horizon);
      sky.addColorStop(0, '#241033');
      sky.addColorStop(0.6, '#4a1a36');
      sky.addColorStop(1, '#8a3a2e');
      ctx.fillStyle = sky;
      ctx.fillRect(-M, -M, w + M * 2, horizon + M);

      const sunRel = norm(-0.5 - yaw);
      if (Math.abs(sunRel) < 1.4) {
        const sx = w / 2 + focal * Math.tan(Math.max(-1.2, Math.min(1.2, sunRel)));
        const glow = ctx.createRadialGradient(sx, horizon, 0, sx, horizon, h * 0.5);
        glow.addColorStop(0, 'rgba(255,180,120,0.5)');
        glow.addColorStop(1, 'rgba(255,180,120,0)');
        ctx.fillStyle = glow;
        ctx.fillRect(-M, -M, w + M * 2, horizon + M);
      }

      ctx.fillStyle = 'rgba(255, 240, 230, 0.7)';
      for (const st of starsRef.current) {
        const rel = norm(st.angle - yaw);
        if (Math.abs(rel) > FOV / 2) continue;
        const x = w / 2 + focal * Math.tan(rel);
        ctx.beginPath();
        ctx.arc(x, st.y * horizon, st.r, 0, Math.PI * 2);
        ctx.fill();
      }

      const moonRel = norm(0.9 - yaw);
      if (Math.abs(moonRel) < FOV / 2 + 0.4) {
        const mx = w / 2 + focal * Math.tan(moonRel);
        const my = horizon * 0.42;
        const mr = Math.min(w, h) * 0.09;
        ctx.save();
        ctx.globalAlpha = 0.55;
        const mg = ctx.createRadialGradient(mx - mr * 0.3, my - mr * 0.3, mr * 0.2, mx, my, mr);
        mg.addColorStop(0, '#ffd8b0');
        mg.addColorStop(1, '#9c5a3c');
        ctx.fillStyle = mg;
        ctx.beginPath();
        ctx.arc(mx, my, mr, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 0.3;
        ctx.strokeStyle = '#fcd9b8';
        ctx.lineWidth = mr * 0.16;
        ctx.beginPath();
        ctx.ellipse(mx, my, mr * 1.9, mr * 0.5, -0.5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      drawRidge(ctx, ridgeRef.current, yaw, w, horizon, M);

      // Ground.
      const ground = ctx.createLinearGradient(0, horizon, 0, h + M);
      ground.addColorStop(0, '#8a3a2a');
      ground.addColorStop(0.4, '#5e261c');
      ground.addColorStop(1, '#180a0c');
      ctx.fillStyle = ground;
      ctx.fillRect(-M, horizon, w + M * 2, h - horizon + M);
      const haze = ctx.createLinearGradient(0, horizon - 18, 0, horizon + 40);
      haze.addColorStop(0, 'rgba(150,80,70,0)');
      haze.addColorStop(0.5, 'rgba(170,95,80,0.55)');
      haze.addColorStop(1, 'rgba(150,80,70,0)');
      ctx.fillStyle = haze;
      ctx.fillRect(-M, horizon - 18, w + M * 2, 58);

      // ===== Build & sort all ground sprites (rocks + enemies) far → near =====
      type Item = { dist: number; render: () => void };
      const items: Item[] = [];

      for (const rk of rocksRef.current) {
        const p = project(rk.x, rk.z, 0.5 * rk.s, rk.s, px, pz, py, yaw, w, h, horizon);
        if (!p || Math.abs(p.rel) > FOV / 2 + 0.2 || p.dist > 55) continue;
        items.push({
          dist: p.dist,
          render: () => {
            const rw = Math.max(3, p.sw * 0.7);
            const rh = Math.max(2, p.sh * 0.7);
            ctx.fillStyle = '#1f0d0c';
            ctx.beginPath();
            ctx.ellipse(p.x, p.baseY, rw, rh, 0, Math.PI, 0);
            ctx.fill();
            ctx.fillStyle = 'rgba(190,110,80,0.25)';
            ctx.beginPath();
            ctx.ellipse(p.x - rw * 0.25, p.baseY - rh * 0.35, rw * 0.5, rh * 0.4, 0, Math.PI, 0);
            ctx.fill();
            applyFog(ctx, p.x - rw, p.baseY - rh, rw * 2, rh, p.dist);
          }
        });
      }

      if (thanosHpRef.current > 0) {
        const p = project(thanosRef.current.x, thanosRef.current.z, THANOS_H, THANOS_W, px, pz, py, yaw, w, h, horizon);
        if (p && Math.abs(p.rel) < FOV / 2 + 0.3) {
          items.push({
            dist: p.dist,
            render: () => {
              drawGroundShadow(ctx, p.x, p.baseY, p.sw * 0.95);
              drawThanos(ctx, p.x, p.baseY, p.sh, thanosHitRef.current > 0, frameRef.current, rage());
              applyFog(ctx, p.x - p.sw, p.topY, p.sw * 2, p.sh, p.dist);
            }
          });
        }
      }
      for (const o of outridersRef.current) {
        const p = project(o.x, o.z, OUT_H, OUT_W, px, pz, py, yaw, w, h, horizon);
        if (!p || Math.abs(p.rel) > FOV / 2 + 0.3) continue;
        items.push({
          dist: p.dist,
          render: () => {
            drawGroundShadow(ctx, p.x, p.baseY, p.sw * 0.6);
            drawOutrider(ctx, p.x, p.baseY, p.sh, frameRef.current + o.seed * 9);
            applyFog(ctx, p.x - p.sw, p.topY, p.sw * 2, p.sh, p.dist);
          }
        });
      }
      for (const a of alliesRef.current) {
        const p = project(a.x, a.z, ALLY_H, ALLY_W, px, pz, py, yaw, w, h, horizon);
        if (!p || Math.abs(p.rel) > FOV / 2 + 0.3) continue;
        items.push({
          dist: p.dist,
          render: () => {
            drawGroundShadow(ctx, p.x, p.baseY, p.sw * 0.5);
            if (a.muzzle > 0) {
              const pt = project(a.aimx, a.aimz, 1, 1, px, pz, py, yaw, w, h, horizon);
              if (pt) {
                ctx.save();
                ctx.globalAlpha = a.muzzle / 5;
                ctx.strokeStyle = a.hero.color;
                ctx.lineWidth = 2.5;
                ctx.shadowColor = a.hero.color;
                ctx.shadowBlur = 10;
                ctx.beginPath();
                ctx.moveTo(p.x, p.topY + p.sh * 0.42);
                ctx.lineTo(pt.x, pt.baseY - pt.focal / Math.max(1, pt.dist));
                ctx.stroke();
                ctx.restore();
              }
            }
            drawAlly(ctx, p.x, p.baseY, p.sh, a.hero, frameRef.current, a.muzzle > 0, a.hp, a.maxHp, a.down > 0 ? a.down / DOWN_TIME : 0, p.dist < 18);
            if (a.down <= 0) applyFog(ctx, p.x - p.sw, p.topY, p.sw * 2, p.sh, p.dist);
          }
        });
      }
      for (const b of beamsRef.current) {
        const p = project(b.x, b.z, BEAM_H, BEAM_W, px, pz, py, yaw, w, h, horizon);
        if (!p || Math.abs(p.rel) > FOV / 2 + 0.3) continue;
        items.push({
          dist: p.dist,
          render: () => {
            const cy = p.topY + p.sh / 2;
            const rr = Math.max(4, p.sw / 2);
            const g = ctx.createRadialGradient(p.x, cy, 0, p.x, cy, rr * 1.8);
            g.addColorStop(0, '#fbe8ff');
            g.addColorStop(0.4, '#c084fc');
            g.addColorStop(1, 'rgba(124,58,237,0)');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(p.x, cy, rr * 1.8, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      }
      items.sort((a, b) => b.dist - a.dist);
      for (const it of items) it.render();

      // Particles.
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      for (const pt of particlesRef.current) {
        ctx.globalAlpha = Math.max(0, 1 - pt.life);
        ctx.fillStyle = pt.color;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      ctx.globalAlpha = 1;

      // Tracers.
      for (const t of tracersRef.current) {
        ctx.save();
        ctx.globalAlpha = t.life / 6;
        ctx.strokeStyle = t.color;
        ctx.lineWidth = 3;
        ctx.shadowColor = t.color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.moveTo(t.x1, t.y1);
        ctx.lineTo(t.x2, t.y2);
        ctx.stroke();
        ctx.restore();
      }

      // Shockwaves.
      for (const s of shockRef.current) {
        const t = s.life / s.max;
        ctx.save();
        ctx.globalAlpha = (1 - t) * 0.7;
        ctx.strokeStyle = heroRef.current.color;
        ctx.lineWidth = 6 * (1 - t) + 1;
        ctx.beginPath();
        ctx.arc(w / 2, horizon, t * Math.max(w, h) * 0.7, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // Floating popups.
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (const f of floatsRef.current) {
        ctx.globalAlpha = Math.max(0, Math.min(1, f.life / 26));
        ctx.fillStyle = f.color;
        ctx.font = '800 16px Inter, sans-serif';
        ctx.fillText(f.text, f.x, f.y);
      }
      ctx.globalAlpha = 1;

      // First-person weapon (rolls with flips).
      drawWeapon(ctx, w, h, heroRef.current, recoilRef.current, muzzleRef.current, frameRef.current, yawVelRef.current, py);

      ctx.restore(); // end world transform

      // ===== SCREEN-SPACE HUD on canvas =====
      const cxs = w / 2;
      const cys = h * 0.46;
      const lock = currentTarget() !== null;
      ctx.save();
      ctx.strokeStyle = lock ? '#f87171' : 'rgba(255,255,255,0.85)';
      ctx.lineWidth = 2;
      ctx.shadowColor = lock ? '#f87171' : 'transparent';
      ctx.shadowBlur = lock ? 10 : 0;
      const r = lock ? 16 : 13;
      ctx.beginPath();
      ctx.arc(cxs, cys, r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]] as const) {
        ctx.moveTo(cxs + dx * (r - 5), cys + dy * (r - 5));
        ctx.lineTo(cxs + dx * (r + 6), cys + dy * (r + 6));
      }
      ctx.stroke();
      ctx.restore();

      // Off-screen threat arrows.
      const arrow = (onLeft: boolean, color: string) => {
        const ax = onLeft ? 26 : w - 26;
        const ay = h / 2;
        ctx.save();
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.85;
        ctx.beginPath();
        if (onLeft) {
          ctx.moveTo(ax - 12, ay);
          ctx.lineTo(ax + 8, ay - 11);
          ctx.lineTo(ax + 8, ay + 11);
        } else {
          ctx.moveTo(ax + 12, ay);
          ctx.lineTo(ax - 8, ay - 11);
          ctx.lineTo(ax - 8, ay + 11);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      };
      let aL: string | null = null;
      let aR: string | null = null;
      const flag = (ex: number, ez: number, color: string) => {
        const rel = norm(Math.atan2(ex - px, ez - pz) - yaw);
        if (Math.abs(rel) <= FOV / 2 + 0.2) return;
        if (rel < 0) aL = color;
        else aR = color;
      };
      for (const b of beamsRef.current) flag(b.x, b.z, '#c084fc');
      for (const o of outridersRef.current) if (Math.hypot(o.x - px, o.z - pz) < 16) flag(o.x, o.z, '#fb7185');
      if (thanosHpRef.current > 0) flag(thanosRef.current.x, thanosRef.current.z, '#a855f7');
      if (aL) arrow(true, aL);
      if (aR) arrow(false, aR);

      // Virtual joystick.
      if (joyRef.current.active) {
        const j = joyRef.current;
        ctx.save();
        ctx.globalAlpha = 0.5;
        ctx.strokeStyle = 'rgba(255,255,255,0.6)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(j.bx, j.by, 64, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = 'rgba(255,255,255,0.35)';
        ctx.beginPath();
        ctx.arc(j.kx, j.ky, 28, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Flashes + vignette (screen space).
      if (dodgeFxRef.current > 0) {
        const a = dodgeFxRef.current / 18;
        const g = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.2, w / 2, h / 2, Math.max(w, h) * 0.72);
        g.addColorStop(0, 'rgba(56,189,248,0)');
        g.addColorStop(1, `rgba(56,189,248,${0.5 * a})`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }
      if (invulnRef.current > INVULN - 14) {
        ctx.fillStyle = `rgba(220,38,38,${(invulnRef.current - (INVULN - 14)) / 28})`;
        ctx.fillRect(0, 0, w, h);
      }
      if (ultFlashRef.current > 0) {
        ctx.fillStyle = `rgba(255,255,255,${ultFlashRef.current / 40})`;
        ctx.fillRect(0, 0, w, h);
      }
      const vig = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.38, w / 2, h / 2, Math.max(w, h) * 0.75);
      vig.addColorStop(0, 'rgba(0,0,0,0)');
      vig.addColorStop(1, 'rgba(0,0,0,0.5)');
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, w, h);
    };

    const loop = () => {
      if (statusRef.current === 'playing') update();
      draw();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  // ===================== MENU =====================
  if (status === 'menu') {
    return (
      <div className="app-shell menu-shell">
        <div className="menu-panel">
          <p className="eyebrow">Open-World First-Person · Planet Titan</p>
          <h1>
            Avengers <span className="accent">Endgame</span>
          </h1>
          <div className="menu-bird">🦸</div>
          <p className="menu-copy">Lead one hero — the rest of the Avengers fight at your side. Roam Titan, dodge the gauntlet, and take down Thanos.</p>

          <p className="section-label">Choose your hero</p>
          <div className="hero-grid">
            {HEROES.map((h) => (
              <button
                key={h.id}
                type="button"
                className={`hero-card ${heroId === h.id ? 'selected' : ''}`}
                style={{ ['--from' as string]: h.accent[0], ['--to' as string]: h.accent[1] }}
                onClick={() => setHeroId(h.id)}
              >
                <span className="hero-emoji">{h.emoji}</span>
                <span className="hero-name">{h.name}</span>
                <span className="hero-power">{h.power}</span>
              </button>
            ))}
          </div>

          <p className="section-label">Player</p>
          <div className="players">
            {names.length > 0 ? (
              names.map((n) => (
                <div key={n} className={`player-chip ${selectedName === n ? 'selected' : ''}`}>
                  <button type="button" className="player-chip-main" onClick={() => setSelectedName(n)}>
                    <span className="avatar">{n.charAt(0).toUpperCase()}</span>
                    <span className="player-name">{n}</span>
                    <span className="chip-best">🏆 {scores[n] || 0}</span>
                  </button>
                  <button type="button" className="player-chip-remove" aria-label={`Remove ${n}`} onClick={() => removeName(n)}>
                    ×
                  </button>
                </div>
              ))
            ) : (
              <p className="empty">No players yet — add one below.</p>
            )}
          </div>

          <div className="add-row">
            <input
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addName()}
              type="text"
              maxLength={16}
              placeholder="Add a new name"
            />
            <button className="add-button" onClick={addName} disabled={!nameInput.trim()}>
              + Add
            </button>
          </div>

          <button className="button-primary button-full" onClick={startGame} disabled={!selectedName}>
            ▶ Assemble
          </button>

          {selectedName && (
            <p className="best-line">
              Playing as <strong>{selectedName}</strong> · {hero.emoji} {hero.name} · 🏆 Best {scores[selectedName] || 0}
            </p>
          )}
        </div>
      </div>
    );
  }

  // ===================== GAME =====================
  const ultReady = ult >= ULT_MAX;
  const hpPct = Math.max(0, (hp / THANOS_MAX_HP) * 100);

  const onCanvasDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    const left = e.clientX < sizeRef.current.w * 0.5;
    const hasMove = Object.values(pointersRef.current).some((p) => p.role === 'move');
    if (left && !hasMove) {
      pointersRef.current[e.pointerId] = { role: 'move', lx: e.clientX, moved: false };
      joyRef.current = { active: true, bx: e.clientX, by: e.clientY, kx: e.clientX, ky: e.clientY };
    } else {
      pointersRef.current[e.pointerId] = { role: 'look', lx: e.clientX, moved: false };
    }
  };
  const onCanvasMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const p = pointersRef.current[e.pointerId];
    if (!p) return;
    if (p.role === 'move') {
      const j = joyRef.current;
      let dx = e.clientX - j.bx;
      let dy = e.clientY - j.by;
      const m = Math.hypot(dx, dy);
      const R = 64;
      if (m > R) {
        dx = (dx / m) * R;
        dy = (dy / m) * R;
      }
      j.kx = j.bx + dx;
      j.ky = j.by + dy;
      joyMoveRef.current = { f: -dy / R, s: dx / R };
    } else {
      const dx = e.clientX - p.lx;
      p.lx = e.clientX;
      if (Math.abs(dx) > 2) p.moved = true;
      yawRef.current += (dx * FOV) / sizeRef.current.w;
    }
  };
  const onCanvasUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const p = pointersRef.current[e.pointerId];
    if (p) {
      if (p.role === 'move') {
        joyRef.current.active = false;
        joyMoveRef.current = { f: 0, s: 0 };
      } else if (!p.moved) {
        fire();
      }
      delete pointersRef.current[e.pointerId];
    }
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
  };

  const tapBtn = (fn: () => void) => (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    fn();
  };
  const holdFire = (down: boolean) => (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    ctrlRef.current.fire = down;
    if (down) fire();
  };

  return (
    <div className="fp-shell">
      <canvas
        ref={canvasRef}
        className="fp-canvas"
        onPointerDown={onCanvasDown}
        onPointerMove={onCanvasMove}
        onPointerUp={onCanvasUp}
        onPointerCancel={onCanvasUp}
      />

      <div className="hud">
        <div className="hud-top">
          <button className="stop-button" onClick={stopGame}>
            ■
          </button>
          <button className="help-toggle" onClick={() => setShowHelp((s) => !s)} aria-label="Controls">
            ⌨
          </button>
          <div className="boss-bar">
            <div className="boss-label">
              <span>🟣 Thanos</span>
              <strong>{Math.ceil(hp)} HP</strong>
            </div>
            <div className="boss-track">
              <div className="boss-fill" style={{ width: `${hpPct}%` }} />
            </div>
          </div>
          <div className="mini-chips">
            <span className="mini-chip">❤️ {lives}</span>
            <span className="mini-chip">⭐ {score}</span>
          </div>
        </div>

        <div className="hud-bottom">
          <button className={`ult-bar ${ultReady ? 'ready' : ''}`} onClick={unleashUlt} disabled={!ultReady}>
            <div className="ult-fill" style={{ width: `${ult}%` }} />
            <span className="ult-text">{ultReady ? `⚡ ${hero.power} — RELEASE!` : `Super power… ${Math.floor(ult)}%`}</span>
          </button>

          <div className="action-row">
            <div className="move-hint">🕹️ Drag to move/look · ⌨ keyboard: WASD + Space to fire</div>
            <div className="actions">
              <button className="act-btn" aria-label="Dodge" onPointerDown={tapBtn(dodge)}>
                <span>⟲</span>
                <small>Dodge</small>
              </button>
              <button className="act-btn" aria-label="Jump" onPointerDown={tapBtn(jump)}>
                <span>⤴</span>
                <small>Jump</small>
              </button>
              <button
                className="act-btn fire"
                aria-label="Fire"
                onPointerDown={holdFire(true)}
                onPointerUp={holdFire(false)}
                onPointerLeave={holdFire(false)}
                onPointerCancel={holdFire(false)}
              >
                💥
              </button>
            </div>
          </div>
        </div>

        {showHelp && status === 'playing' && (
          <div className="help-card">
            <div className="help-head">
              <span>⌨ How to play</span>
              <button className="help-close" onClick={() => setShowHelp(false)} aria-label="Close">
                ×
              </button>
            </div>
            <div className="help-grid">
              <div className="help-row">
                <span className="help-act">Move</span>
                <span className="keys">
                  <b>W</b> <b>A</b> <b>S</b> <b>D</b>
                </span>
              </div>
              <div className="help-row">
                <span className="help-act">Look</span>
                <span className="keys">
                  <b>Q</b> <b>E</b> / <b>←</b> <b>→</b> / drag
                </span>
              </div>
              <div className="help-row">
                <span className="help-act">Fire</span>
                <span className="keys">
                  <b>Space</b> / <b>J</b> / click
                </span>
              </div>
              <div className="help-row">
                <span className="help-act">Jump</span>
                <span className="keys">
                  <b>↑</b> <small>(×2 = flip)</small>
                </span>
              </div>
              <div className="help-row">
                <span className="help-act">Dodge</span>
                <span className="keys">
                  <b>Shift</b> / <b>↓</b>
                </span>
              </div>
              <div className="help-row">
                <span className="help-act">Super</span>
                <span className="keys">
                  <b>F</b>
                </span>
              </div>
            </div>
            <p className="help-touch">📱 Touch: drag left = move · drag right = look · buttons for Jump / Dodge / Fire</p>
          </div>
        )}

        {(status === 'won' || status === 'over') && (
          <div className="overlay">
            <div className="overlay-card">
              <p className="overlay-eyebrow">{status === 'won' ? 'Victory on Titan' : 'You fell'}</p>
              <h2>{status === 'won' ? 'Thanos is defeated! 🏆' : score >= best && score > 0 ? 'New best! 🎉' : 'Avenge them next time'}</h2>
              <div className="overlay-score">
                <div>
                  <span>Score</span>
                  <strong>{score}</strong>
                </div>
                <div>
                  <span>Thanos HP</span>
                  <strong>{Math.ceil(hp)}</strong>
                </div>
              </div>
              <div className="overlay-actions">
                <button className="button-primary" onClick={startGame}>
                  ↻ Fight again
                </button>
                <button className="button-secondary" onClick={stopGame}>
                  ‹ Menu
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ===========================================================================
//  Drawing helpers (pure canvas) — the "realistic" layer.
// ===========================================================================

function applyFog(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, dist: number) {
  const a = fogAmount(dist);
  if (a <= 0.01) return;
  ctx.save();
  ctx.globalAlpha = a;
  ctx.fillStyle = `rgb(${FOG.r},${FOG.g},${FOG.b})`;
  ctx.fillRect(x, y, w, h);
  ctx.restore();
}

function drawGroundShadow(ctx: CanvasRenderingContext2D, cx: number, baseY: number, rw: number) {
  ctx.save();
  ctx.globalAlpha = 0.4;
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.ellipse(cx, baseY, rw, rw * 0.26, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawRidge(ctx: CanvasRenderingContext2D, ridge: number[], yaw: number, w: number, horizon: number, M: number) {
  const span = 2.6;
  const N = ridge.length;
  ctx.save();
  ctx.fillStyle = '#2a1322';
  ctx.beginPath();
  ctx.moveTo(-M, horizon + 2);
  for (let i = 0; i <= 80; i += 1) {
    const t = i / 80;
    const ang = norm(yaw) + (t - 0.5) * span;
    const idx = ((Math.floor((ang / (Math.PI * 2)) * N) % N) + N) % N;
    const hgt = ridge[idx] * 46 + 10;
    ctx.lineTo(-M + t * (w + M * 2), horizon - hgt + 6);
  }
  ctx.lineTo(w + M, horizon + 2);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = 'rgba(60,28,46,0.6)';
  ctx.beginPath();
  ctx.moveTo(-M, horizon + 2);
  for (let i = 0; i <= 80; i += 1) {
    const t = i / 80;
    const ang = norm(yaw) * 0.6 + (t - 0.5) * span;
    const idx = ((Math.floor((ang / (Math.PI * 2)) * N + 13) % N) + N) % N;
    const hgt = ridge[idx] * 28 + 26;
    ctx.lineTo(-M + t * (w + M * 2), horizon - hgt + 6);
  }
  ctx.lineTo(w + M, horizon + 2);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawThanos(ctx: CanvasRenderingContext2D, cx: number, baseY: number, H: number, flash: boolean, frame: number, rage: number) {
  const u = H / 6.4;
  const sway = Math.sin(frame * 0.03) * 2 * u;
  const breathe = Math.sin(frame * 0.05) * 0.02 + 1;
  const skin = flash ? '#ffffff' : '#7c4fb0';
  const skinDark = flash ? '#e9d5ff' : '#583a82';
  const armor = flash ? '#fff' : '#caa84a';
  const armorDark = '#8a6b1f';
  ctx.save();
  ctx.translate(cx + sway, 0);

  const topY = baseY - H * breathe;
  const midY = topY + H * 0.5;
  const bodyW = H * 0.34;

  ctx.fillStyle = skinDark;
  for (const s of [-1, 1]) {
    ctx.beginPath();
    ctx.moveTo(s * bodyW * 0.18, midY + H * 0.18);
    ctx.lineTo(s * bodyW * 0.5, baseY);
    ctx.lineTo(s * bodyW * 0.1, baseY);
    ctx.lineTo(s * bodyW * 0.08, midY + H * 0.2);
    ctx.closePath();
    ctx.fill();
  }
  ctx.fillStyle = armor;
  for (const s of [-1, 1]) ctx.fillRect(s * bodyW * 0.42 - (s < 0 ? bodyW * 0.18 : 0), baseY - H * 0.14, bodyW * 0.2, H * 0.14);

  ctx.fillStyle = skin;
  ctx.beginPath();
  ctx.moveTo(-bodyW * 0.55, midY + H * 0.2);
  ctx.quadraticCurveTo(-bodyW * 0.72, midY - H * 0.08, -bodyW * 0.5, topY + H * 0.2);
  ctx.lineTo(bodyW * 0.5, topY + H * 0.2);
  ctx.quadraticCurveTo(bodyW * 0.72, midY - H * 0.08, bodyW * 0.55, midY + H * 0.2);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = skinDark;
  ctx.globalAlpha = 0.4;
  ctx.fillRect(-bodyW * 0.06, topY + H * 0.26, bodyW * 0.12, H * 0.22);
  ctx.globalAlpha = 1;

  ctx.fillStyle = armorDark;
  ctx.beginPath();
  ctx.moveTo(-bodyW * 0.6, topY + H * 0.2);
  ctx.lineTo(bodyW * 0.6, topY + H * 0.2);
  ctx.lineTo(bodyW * 0.42, topY + H * 0.34);
  ctx.lineTo(-bodyW * 0.42, topY + H * 0.34);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = armor;
  for (const s of [-1, 1]) {
    ctx.beginPath();
    ctx.ellipse(s * bodyW * 0.5, topY + H * 0.2, bodyW * 0.26, H * 0.07, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = skin;
  ctx.save();
  ctx.translate(-bodyW * 0.55, topY + H * 0.22);
  ctx.rotate(0.3 + Math.sin(frame * 0.03) * 0.05);
  ctx.fillRect(-bodyW * 0.18, 0, bodyW * 0.26, H * 0.34);
  ctx.restore();

  ctx.save();
  ctx.translate(bodyW * 0.55, topY + H * 0.22);
  ctx.rotate(-0.3 - rage * 0.5 - Math.sin(frame * 0.04) * 0.05);
  ctx.fillStyle = skin;
  ctx.fillRect(-bodyW * 0.08, 0, bodyW * 0.26, H * 0.3);
  const gx = bodyW * 0.05;
  const gy = H * 0.3;
  const gw = bodyW * 0.34;
  const gg = ctx.createLinearGradient(gx - gw, gy, gx + gw, gy + gw);
  gg.addColorStop(0, '#e8c249');
  gg.addColorStop(1, '#9c7a1e');
  ctx.fillStyle = gg;
  ctx.beginPath();
  ctx.ellipse(gx, gy + gw * 0.5, gw, gw * 0.8, 0, 0, Math.PI * 2);
  ctx.fill();
  const gems = ['#a855f7', '#f59e0b', '#ef4444', '#22c55e', '#3b82f6', '#f97316'];
  const glow = 0.5 + Math.sin(frame * 0.1) * 0.3 + rage * 0.4;
  for (let i = 0; i < 6; i += 1) {
    const a = (i / 6) * Math.PI * 2 + frame * 0.01;
    ctx.fillStyle = gems[i];
    ctx.shadowColor = gems[i];
    ctx.shadowBlur = 8 * glow;
    ctx.beginPath();
    ctx.arc(gx + Math.cos(a) * gw * 0.45, gy + gw * 0.5 + Math.sin(a) * gw * 0.4, gw * 0.16, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.shadowBlur = 0;
  ctx.restore();

  const hx = 0;
  const hy = topY + H * 0.02;
  const hw = bodyW * 0.34;
  const hh = H * 0.2;
  ctx.fillStyle = skin;
  ctx.beginPath();
  ctx.moveTo(hx - hw, hy + hh * 0.2);
  ctx.quadraticCurveTo(hx - hw, hy - hh * 0.5, hx, hy - hh * 0.5);
  ctx.quadraticCurveTo(hx + hw, hy - hh * 0.5, hx + hw, hy + hh * 0.2);
  ctx.quadraticCurveTo(hx + hw * 0.8, hy + hh, hx, hy + hh * 1.15);
  ctx.quadraticCurveTo(hx - hw * 0.8, hy + hh, hx - hw, hy + hh * 0.2);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = skinDark;
  ctx.lineWidth = Math.max(1, u);
  ctx.beginPath();
  ctx.moveTo(hx - hw * 0.32, hy + hh * 0.55);
  ctx.lineTo(hx - hw * 0.32, hy + hh * 1.0);
  ctx.moveTo(hx + hw * 0.32, hy + hh * 0.55);
  ctx.lineTo(hx + hw * 0.32, hy + hh * 1.0);
  ctx.stroke();
  ctx.fillStyle = skinDark;
  ctx.fillRect(hx - hw * 0.8, hy - hh * 0.1, hw * 1.6, hh * 0.16);
  ctx.fillStyle = flash ? '#7c3aed' : '#fde68a';
  for (const s of [-1, 1]) {
    ctx.beginPath();
    ctx.ellipse(hx + s * hw * 0.42, hy + hh * 0.12, hw * 0.18, hh * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawOutrider(ctx: CanvasRenderingContext2D, cx: number, baseY: number, H: number, t: number) {
  const bodyH = H * 0.5;
  const cy = baseY - bodyH * 0.7;
  const skin = '#3a2b3a';
  const skinLit = '#6b5170';
  ctx.save();
  ctx.translate(cx, 0);
  const step = Math.sin(t * 0.25) * H * 0.06;

  ctx.strokeStyle = skin;
  ctx.lineWidth = Math.max(1.5, H * 0.04);
  ctx.lineCap = 'round';
  for (let i = 0; i < 6; i += 1) {
    const s = i < 3 ? -1 : 1;
    const k = i % 3;
    const ph = Math.sin(t * 0.25 + i * 1.1) * H * 0.12;
    ctx.beginPath();
    ctx.moveTo(s * H * 0.05, cy + bodyH * 0.2);
    ctx.lineTo(s * H * (0.18 + k * 0.07), cy + bodyH * 0.4 + ph * 0.3);
    ctx.lineTo(s * H * (0.26 + k * 0.09), baseY - Math.abs(ph));
    ctx.stroke();
  }

  const bg = ctx.createLinearGradient(0, cy - bodyH * 0.5, 0, cy + bodyH * 0.5);
  bg.addColorStop(0, skinLit);
  bg.addColorStop(1, skin);
  ctx.fillStyle = bg;
  ctx.beginPath();
  ctx.ellipse(0, cy + step * 0.2, H * 0.2, bodyH * 0.55, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = skin;
  ctx.beginPath();
  ctx.ellipse(0, cy - bodyH * 0.4 + step * 0.2, H * 0.13, bodyH * 0.3, 0, 0, Math.PI * 2);
  ctx.fill();
  const mawY = cy - bodyH * 0.18 + step * 0.2;
  ctx.fillStyle = '#d8c3cf';
  ctx.beginPath();
  ctx.ellipse(0, mawY, H * 0.07, bodyH * 0.16, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#1a1016';
  ctx.beginPath();
  ctx.ellipse(0, mawY, H * 0.035, bodyH * 0.1, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#f3e8ee';
  ctx.lineWidth = Math.max(1, H * 0.012);
  for (let i = -2; i <= 2; i += 1) {
    ctx.beginPath();
    ctx.moveTo(i * H * 0.025, mawY - bodyH * 0.12);
    ctx.lineTo(i * H * 0.025, mawY + bodyH * 0.12);
    ctx.stroke();
  }
  ctx.strokeStyle = 'rgba(168,85,247,0.3)';
  ctx.lineWidth = Math.max(1, H * 0.02);
  ctx.beginPath();
  ctx.ellipse(0, cy + step * 0.2, H * 0.2, bodyH * 0.55, 0, -0.6, Math.PI + 0.6);
  ctx.stroke();
  ctx.restore();
}

// An allied Avenger fighting beside you — a hero-coloured figure with a name,
// a health bar, and a collapsed "downed" state that ticks down to a revive.
function drawAlly(
  ctx: CanvasRenderingContext2D,
  cx: number,
  baseY: number,
  H: number,
  hero: Hero,
  frame: number,
  firing: boolean,
  hp: number,
  maxHp: number,
  downT: number,
  showName: boolean
) {
  ctx.save();
  ctx.translate(cx, 0);

  // ===== Downed: lying on the ground with a revive ring =====
  if (downT > 0) {
    ctx.globalAlpha = 0.85;
    ctx.fillStyle = hero.accent[1];
    ctx.beginPath();
    ctx.ellipse(0, baseY - H * 0.08, H * 0.32, H * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#caa68f';
    ctx.beginPath();
    ctx.arc(-H * 0.28, baseY - H * 0.1, H * 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
    const ry = baseY - H * 0.42;
    const rr = H * 0.3;
    ctx.lineWidth = Math.max(2, H * 0.05);
    ctx.strokeStyle = 'rgba(255,255,255,0.25)';
    ctx.beginPath();
    ctx.arc(0, ry, rr, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = hero.color;
    ctx.beginPath();
    ctx.arc(0, ry, rr, -Math.PI / 2, -Math.PI / 2 + (1 - downT) * Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#fca5a5';
    ctx.font = `800 ${Math.max(10, H * 0.13)}px Inter, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('DOWN', 0, ry);
    ctx.restore();
    return;
  }

  const bob = Math.sin(frame * 0.12 + cx * 0.05) * H * 0.02;
  const topY = baseY - H + bob;
  const bodyW = H * 0.3;

  // Legs.
  ctx.fillStyle = hero.accent[1];
  for (const s of [-1, 1]) ctx.fillRect(s * bodyW * 0.36 - (s < 0 ? bodyW * 0.22 : 0), baseY - H * 0.42, bodyW * 0.22, H * 0.42);

  // Torso.
  const g = ctx.createLinearGradient(0, topY, 0, baseY);
  g.addColorStop(0, hero.accent[0]);
  g.addColorStop(1, hero.accent[1]);
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.moveTo(-bodyW * 0.5, baseY - H * 0.4);
  ctx.lineTo(-bodyW * 0.5, topY + H * 0.3);
  ctx.quadraticCurveTo(0, topY + H * 0.2, bodyW * 0.5, topY + H * 0.3);
  ctx.lineTo(bodyW * 0.5, baseY - H * 0.4);
  ctx.closePath();
  ctx.fill();

  // Arms.
  ctx.fillStyle = hero.accent[0];
  ctx.fillRect(-bodyW * 0.72, topY + H * 0.32, bodyW * 0.2, H * 0.3);
  ctx.fillRect(bodyW * 0.52, topY + H * 0.32, bodyW * 0.2, H * 0.3);

  // Head.
  ctx.fillStyle = '#caa68f';
  ctx.beginPath();
  ctx.arc(0, topY + H * 0.18, bodyW * 0.32, 0, Math.PI * 2);
  ctx.fill();

  // Muzzle glow when firing.
  if (firing) {
    ctx.fillStyle = hero.color;
    ctx.shadowColor = hero.color;
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.arc(bodyW * 0.7, topY + H * 0.46, Math.max(2, H * 0.06), 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  // ===== Floating tag: emoji marker + health bar (+ name when close) =====
  const np = Math.max(13, H * 0.18);
  const markerY = topY - H * 0.2;
  ctx.fillStyle = hero.color;
  ctx.globalAlpha = 0.85;
  ctx.beginPath();
  ctx.arc(0, markerY, np * 0.62, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.font = `${np}px "Segoe UI Emoji", "Apple Color Emoji", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(hero.emoji, 0, markerY);

  // Health bar just above the head.
  const bw = Math.max(18, bodyW * 1.7);
  const bh = Math.max(3, H * 0.045);
  const by = topY + H * 0.02;
  const ratio = Math.max(0, hp / maxHp);
  ctx.fillStyle = 'rgba(0,0,0,0.55)';
  ctx.fillRect(-bw / 2, by, bw, bh);
  ctx.fillStyle = ratio > 0.5 ? '#4ade80' : ratio > 0.25 ? '#fbbf24' : '#ef4444';
  ctx.fillRect(-bw / 2, by, bw * ratio, bh);

  // Name (only when the ally is near, to avoid clutter).
  if (showName) {
    ctx.font = `700 ${Math.max(9, H * 0.1)}px Inter, sans-serif`;
    ctx.fillStyle = '#fff';
    ctx.shadowColor = 'rgba(0,0,0,0.8)';
    ctx.shadowBlur = 3;
    ctx.fillText(hero.name, 0, markerY - np * 0.85);
    ctx.shadowBlur = 0;
  }

  ctx.restore();
}

function drawWeapon(ctx: CanvasRenderingContext2D, w: number, h: number, hero: Hero, recoil: number, muzzle: number, frame: number, yawVel: number, py: number) {
  const bob = Math.sin(frame * 0.045) * 4 - py * 40;
  const swayX = -yawVel * 700;
  const cx = w / 2 + swayX;
  const ry = recoil * 16 + bob;
  ctx.save();

  if (muzzle > 0) {
    const fg = ctx.createRadialGradient(cx, h - 96 + ry, 0, cx, h - 96 + ry, 60);
    fg.addColorStop(0, `rgba(255,250,220,${muzzle / 6})`);
    fg.addColorStop(1, 'rgba(255,200,120,0)');
    ctx.fillStyle = fg;
    ctx.fillRect(cx - 80, h - 170 + ry, 160, 120);
  }

  const A = hero.accent;
  const grad = ctx.createLinearGradient(0, h - 120 + ry, 0, h);
  grad.addColorStop(0, A[0]);
  grad.addColorStop(1, A[1]);

  if (hero.weapon === 'hammer') {
    ctx.fillStyle = grad;
    ctx.fillRect(cx - 26, h - 70 + ry, 52, 80);
    ctx.fillStyle = '#9aa3ad';
    ctx.fillRect(cx - 46, h - 132 + ry, 92, 54);
    ctx.fillStyle = '#5b626b';
    ctx.fillRect(cx - 10, h - 90 + ry, 20, 40);
    if (muzzle > 0) {
      ctx.strokeStyle = '#bae6fd';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 16;
      for (let i = 0; i < 3; i += 1) {
        ctx.beginPath();
        ctx.moveTo(cx, h - 132 + ry);
        let lx = cx;
        let lyy = h - 132 + ry;
        for (let j = 0; j < 4; j += 1) {
          lx += (Math.random() - 0.5) * 50;
          lyy -= 24;
          ctx.lineTo(lx, lyy);
        }
        ctx.stroke();
      }
    }
  } else if (hero.weapon === 'shield') {
    ctx.fillStyle = grad;
    ctx.fillRect(cx - 24, h - 64 + ry, 48, 70);
    const sr = 60;
    const rings = ['#b91c1c', '#e5e7eb', '#b91c1c', '#1d4ed8'];
    for (let i = 0; i < rings.length; i += 1) {
      ctx.fillStyle = rings[i];
      ctx.beginPath();
      ctx.arc(cx, h - 50 + ry, sr - i * (sr / 4.2), Math.PI, 0);
      ctx.fill();
    }
    ctx.fillStyle = '#e5e7eb';
    star(ctx, cx, h - 58 + ry, 12, 5);
  } else {
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(cx - 50, h);
    ctx.lineTo(cx - 22, h - 92 + ry);
    ctx.quadraticCurveTo(cx, h - 108 + ry, cx + 22, h - 92 + ry);
    ctx.lineTo(cx + 50, h);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.18)';
    ctx.fillRect(cx - 26, h - 74 + ry, 52, 8);
    ctx.fillRect(cx - 22, h - 58 + ry, 44, 7);
    if (hero.weapon === 'claw') {
      ctx.strokeStyle = '#e5e7eb';
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      for (let i = -2; i <= 2; i += 1) {
        ctx.beginPath();
        ctx.moveTo(cx + i * 12, h - 92 + ry);
        ctx.lineTo(cx + i * 14, h - 124 + ry);
        ctx.stroke();
      }
    }
    ctx.fillStyle = muzzle > 0 ? '#ffffff' : hero.color;
    ctx.shadowColor = hero.color;
    ctx.shadowBlur = muzzle > 0 ? 26 : 14;
    ctx.beginPath();
    ctx.arc(cx, h - 96 + ry, hero.weapon === 'claw' ? 8 : 14, 0, Math.PI * 2);
    ctx.fill();
    if (hero.weapon === 'web' && muzzle > 0) {
      ctx.strokeStyle = 'rgba(255,255,255,0.85)';
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 0;
      for (let i = 0; i < 6; i += 1) {
        const a = -Math.PI / 2 + (i - 2.5) * 0.18;
        ctx.beginPath();
        ctx.moveTo(cx, h - 96 + ry);
        ctx.lineTo(cx + Math.cos(a) * 70, h - 96 + ry + Math.sin(a) * 70);
        ctx.stroke();
      }
    }
  }
  ctx.restore();
}

function star(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, points: number) {
  ctx.beginPath();
  for (let i = 0; i < points * 2; i += 1) {
    const rad = i % 2 === 0 ? r : r * 0.45;
    const a = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
    const x = cx + Math.cos(a) * rad;
    const y = cy + Math.sin(a) * rad;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
}

export default App;
