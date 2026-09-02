import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './App.css';
import { THEME } from './theme';
import { LANGS, RTL_LANGS, STR, initialLang, saveLang, type Lang } from './i18n';
import { startGamepad, bridgeGamepadToKeys } from './gamepad';

// ===== Pitch geometry (X/Z ground plane). You attack toward +Z. =====
const HALF_W = 46; // touchline half-width (X)
const HALF_L = 66; // goal-line half-length (Z)
const GOAL_HALF = 13; // goal mouth: posts at x = ±GOAL_HALF
const GOAL_H = 15; // goal height
const BALL_R = 1.4;

// ===== Physics / tuning (frame-based, ~60fps) =====
const PLAYER_SPEED = 0.9;
const CPU_SPEED = 0.72;
const KEEPER_SPEED = 0.6;
const KEEPER_HALF = 3.6; // keeper box half-width
const KEEPER_RANGE = GOAL_HALF + 2; // how far a keeper tracks along its line
const KEEPER_A_Z = HALF_L - 2.5; // opponent keeper line (+Z)
const KEEPER_B_Z = -HALF_L + 2.5; // your keeper line (-Z)
const DRIBBLE_R = 5.5; // pick up / control radius
const DRIBBLE_OFFSET = 2.4; // how far ahead the ball rides
const SHOT_POWER = 2.7;
const FRICTION = 0.976;
const MATCH_FRAMES = 90 * 60; // 90-second match
const COUNT_FRAMES = 180; // 3-2-1
const CELEBRATE_FRAMES = 96; // goal flash / reset pause

const NAMES_KEY = 'fifa-names';
const BEST_KEY = 'fifa-bestscore-by-user';

const CAM_LABEL: Record<Lang, string> = {
  es: 'Cámara', en: 'Camera', pt: 'Câmera', fr: 'Caméra', de: 'Kamera', it: 'Camera', zh: '镜头', ja: 'カメラ', ar: 'الكاميرا'
};
const CAM_NAMES: Record<Lang, [string, string]> = {
  es: ['Persecución', 'Difusión'],
  en: ['Chase', 'Broadcast'],
  pt: ['Perseguição', 'Transmissão'],
  fr: ['Poursuite', 'Diffusion'],
  de: ['Verfolgung', 'Übertragung'],
  it: ['Inseguimento', 'Diretta'],
  zh: ['追逐', '转播'],
  ja: ['追走', '放送'],
  ar: ['المطاردة', 'البث']
};

type Status = 'menu' | 'count' | 'playing' | 'finished';
type Mover = { x: number; z: number; dirX: number; dirZ: number };
type Ball = { x: number; z: number; vx: number; vz: number };
type Best = Record<string, number>;
type Ctrl = 'none' | 'player' | 'cpu';

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const moveToward = (cur: number, target: number, step: number) =>
  Math.abs(target - cur) <= step ? target : cur + Math.sign(target - cur) * step;

const fmtClock = (frames: number) => {
  const s = Math.max(0, Math.ceil(frames / 60));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
};

// A simple humanoid footballer: legs + shorts + shirt + head (+ arms). Built
// facing +Z so rotation.y = atan2(dirX, dirZ) points it along its heading.
function makePlayer(kit: string): THREE.Group {
  const g = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({ color: 0xf1c27d, roughness: 0.8 });
  const kitMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(kit), roughness: 0.55, metalness: 0.05 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.7 });

  const legGeo = new THREE.BoxGeometry(1.3, 4.2, 1.5);
  for (const lx of [-1.1, 1.1]) {
    const leg = new THREE.Mesh(legGeo, skin);
    leg.position.set(lx, 2.1, 0);
    leg.castShadow = true;
    g.add(leg);
  }
  const shorts = new THREE.Mesh(new THREE.BoxGeometry(4.2, 2.6, 2.7), dark);
  shorts.position.y = 5.4;
  shorts.castShadow = true;
  g.add(shorts);
  const shirt = new THREE.Mesh(new THREE.BoxGeometry(4.4, 5, 2.7), kitMat);
  shirt.position.y = 8.6;
  shirt.castShadow = true;
  g.add(shirt);
  const armGeo = new THREE.BoxGeometry(1.1, 4.6, 1.1);
  for (const ax of [-2.7, 2.7]) {
    const arm = new THREE.Mesh(armGeo, kitMat);
    arm.position.set(ax, 8.6, 0);
    arm.castShadow = true;
    g.add(arm);
  }
  const head = new THREE.Mesh(new THREE.SphereGeometry(1.6, 16, 16), skin);
  head.position.y = 12;
  head.castShadow = true;
  g.add(head);
  return g;
}

function makeGoal(): THREE.Group {
  const g = new THREE.Group();
  const white = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
  const postGeo = new THREE.CylinderGeometry(0.5, 0.5, GOAL_H, 12);
  for (const px of [-GOAL_HALF, GOAL_HALF]) {
    const post = new THREE.Mesh(postGeo, white);
    post.position.set(px, GOAL_H / 2, 0);
    post.castShadow = true;
    g.add(post);
  }
  const bar = new THREE.Mesh(new THREE.BoxGeometry(GOAL_HALF * 2 + 1, 0.7, 0.7), white);
  bar.position.set(0, GOAL_H, 0);
  bar.castShadow = true;
  g.add(bar);
  // Translucent net (back + sides) behind the line, extending +Z locally.
  const netMat = new THREE.MeshStandardMaterial({
    color: 0xeaf2ff,
    transparent: true,
    opacity: 0.16,
    side: THREE.DoubleSide,
    roughness: 1
  });
  const back = new THREE.Mesh(new THREE.PlaneGeometry(GOAL_HALF * 2, GOAL_H), netMat);
  back.position.set(0, GOAL_H / 2, 6);
  g.add(back);
  const sideGeo = new THREE.PlaneGeometry(6, GOAL_H);
  for (const sx of [-GOAL_HALF, GOAL_HALF]) {
    const side = new THREE.Mesh(sideGeo, netMat);
    side.position.set(sx, GOAL_H / 2, 3);
    side.rotation.y = Math.PI / 2;
    g.add(side);
  }
  return g;
}

function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const s = STR[lang];

  const mountRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<Status>('menu');
  const statusRef = useRef<Status>('menu');
  const [hud, setHud] = useState({ you: 0, cpu: 0, timeFrames: MATCH_FRAMES, count: 3, flash: false });
  const [camMode, setCamMode] = useState(0);
  const camModeRef = useRef(0);

  const [names, setNames] = useState<string[]>([]);
  const [selected, setSelected] = useState('');
  const [username, setUsername] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [best, setBest] = useState<Best>({});

  // ===== Game state (mutated each frame, kept out of React for smoothness) =====
  const playerRef = useRef<Mover>({ x: 0, z: -14, dirX: 0, dirZ: 1 });
  const cpuRef = useRef<Mover>({ x: 0, z: 24, dirX: 0, dirZ: -1 });
  const ballRef = useRef<Ball>({ x: 0, z: 0, vx: 0, vz: 0 });
  const keeperARef = useRef({ x: 0 }); // opponent keeper (+Z)
  const keeperBRef = useRef({ x: 0 }); // your keeper (-Z)
  const scoreRef = useRef({ you: 0, cpu: 0 });
  const keysRef = useRef({ up: false, down: false, left: false, right: false });
  const wantShootRef = useRef(false);
  const shootHeldRef = useRef(false);
  const shotTimerRef = useRef(0);
  const countRef = useRef(0);
  const matchLeftRef = useRef(MATCH_FRAMES);
  const celebrateRef = useRef(0);
  const actionsRef = useRef<{ start: () => void; exit: () => void } | null>(null);

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';
    const r = document.documentElement.style;
    r.setProperty('--accent', THEME.accent);
    r.setProperty('--accent2', THEME.accent2);
  }, [lang]);

  useEffect(() => {
    try {
      setNames(JSON.parse(localStorage.getItem(NAMES_KEY) || '[]'));
      setBest(JSON.parse(localStorage.getItem(BEST_KEY) || '{}'));
    } catch {
      /* ignore */
    }
  }, []);

  const saveNames = (next: string[]) => {
    setNames(next);
    localStorage.setItem(NAMES_KEY, JSON.stringify(next));
  };
  const addName = () => {
    const n = nameInput.trim();
    if (!n) return;
    if (!names.includes(n)) saveNames([n, ...names]);
    setSelected(n);
    setNameInput('');
  };
  const removeName = (n: string) => {
    saveNames(names.filter((x) => x !== n));
    if (selected === n) setSelected('');
  };

  const cycleCam = () => {
    camModeRef.current = (camModeRef.current + 1) % 2;
    setCamMode(camModeRef.current);
  };

  const shoot = () => {
    wantShootRef.current = true;
  };

  // ===== Keyboard =====
  useEffect(() => {
    const set = (e: KeyboardEvent, down: boolean) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'SELECT')) return;
      const k = e.key;
      if (k === 'ArrowUp' || k === 'w' || k === 'W') keysRef.current.up = down;
      else if (k === 'ArrowDown' || k === 's' || k === 'S') keysRef.current.down = down;
      else if (k === 'ArrowLeft' || k === 'a' || k === 'A') keysRef.current.left = down;
      else if (k === 'ArrowRight' || k === 'd' || k === 'D') keysRef.current.right = down;
      else if (k === ' ' || k === 'Spacebar') {
        if (down) {
          if (!shootHeldRef.current) {
            shootHeldRef.current = true;
            shoot();
          }
        } else {
          shootHeldRef.current = false;
        }
      } else if ((k === 'c' || k === 'C') && down) cycleCam();
      else return;
      e.preventDefault();
    };
    const dn = (e: KeyboardEvent) => set(e, true);
    const up = (e: KeyboardEvent) => set(e, false);
    window.addEventListener('keydown', dn);
    window.addEventListener('keyup', up);
    return () => {
      window.removeEventListener('keydown', dn);
      window.removeEventListener('keyup', up);
    };
  }, []);

  // ===== Gamepad: stick/d-pad move; A/RB shoot; Y camera; Start play; B exits =====
  useEffect(() => {
    const stopKeys = bridgeGamepadToKeys({
      up: 'ArrowUp',
      down: 'ArrowDown',
      left: 'ArrowLeft',
      right: 'ArrowRight',
      A: ' ',
      RB: ' '
    });
    const stopPad = startGamepad({
      onButton: (b) => {
        const a = actionsRef.current;
        const st = statusRef.current;
        if (b === 'Y' || b === 'X' || b === 'LB') cycleCam();
        else if (b === 'start') {
          if ((st === 'menu' || st === 'finished') && a) a.start();
        } else if (b === 'B' || b === 'back') {
          if (st !== 'menu' && a) a.exit();
        }
      }
    });
    return () => {
      stopKeys();
      stopPad();
    };
  }, []);

  const resetKickoff = () => {
    playerRef.current = { x: 0, z: -14, dirX: 0, dirZ: 1 };
    cpuRef.current = { x: 0, z: 24, dirX: 0, dirZ: -1 };
    ballRef.current = { x: 0, z: 0, vx: 0, vz: 0 };
    keeperARef.current = { x: 0 };
    keeperBRef.current = { x: 0 };
    keysRef.current = { up: false, down: false, left: false, right: false };
    wantShootRef.current = false;
    shotTimerRef.current = 0;
  };

  const startMatch = () => {
    const name = selected || username;
    if (!name) return;
    setUsername(name);
    scoreRef.current = { you: 0, cpu: 0 };
    matchLeftRef.current = MATCH_FRAMES;
    countRef.current = COUNT_FRAMES;
    celebrateRef.current = 0;
    resetKickoff();
    camModeRef.current = 0;
    setCamMode(0);
    setHud({ you: 0, cpu: 0, timeFrames: MATCH_FRAMES, count: 3, flash: false });
    statusRef.current = 'count';
    setStatus('count');
  };

  const stopToMenu = () => {
    statusRef.current = 'menu';
    setStatus('menu');
  };

  actionsRef.current = { start: startMatch, exit: stopToMenu };

  // On-screen touch controls (mobile): press-and-hold sets the same key flags the
  // keyboard does, so phones play with no keyboard or pad needed.
  const press = (key: 'up' | 'down' | 'left' | 'right', val: boolean) => (e: React.PointerEvent) => {
    e.preventDefault();
    keysRef.current[key] = val;
  };
  const pressShoot = (e: React.PointerEvent) => {
    e.preventDefault();
    shoot();
  };

  // ===== Three.js scene (built when a match starts, torn down back at the menu) =====
  useEffect(() => {
    if (status === 'menu') return;
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const sky = new THREE.Color(0x061a10); // stadium night
    scene.background = sky;
    scene.fog = new THREE.Fog(sky.getHex(), 260, 620);

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';

    const resize = () => {
      const w = mount.clientWidth || 1;
      const h = mount.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener('resize', resize);

    // Lights — floodlit stadium with a real sun casting soft shadows on the pitch.
    scene.add(new THREE.HemisphereLight(0xbfe3ff, 0x0a2414, 0.9));
    const sun = new THREE.DirectionalLight(0xffffff, 1.25);
    sun.position.set(120, 220, 80);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const sc = sun.shadow.camera as THREE.OrthographicCamera;
    sc.left = -120;
    sc.right = 120;
    sc.top = 120;
    sc.bottom = -120;
    sc.near = 40;
    sc.far = 520;
    sc.updateProjectionMatrix();
    sun.shadow.bias = -0.0005;
    scene.add(sun);

    // Grass base
    const grass = new THREE.Mesh(
      new THREE.PlaneGeometry(600, 600),
      new THREE.MeshStandardMaterial({ color: 0x0f4223, roughness: 1 })
    );
    grass.rotation.x = -Math.PI / 2;
    grass.position.y = -0.05;
    grass.receiveShadow = true;
    scene.add(grass);

    // Mowing stripes across the pitch (alternating green bands running along X).
    const stripes = 14;
    const stripeDepth = (HALF_L * 2) / stripes;
    for (let i = 0; i < stripes; i++) {
      const band = new THREE.Mesh(
        new THREE.PlaneGeometry(HALF_W * 2, stripeDepth),
        new THREE.MeshStandardMaterial({ color: i % 2 === 0 ? 0x1a7a3b : 0x156d33, roughness: 1 })
      );
      band.rotation.x = -Math.PI / 2;
      band.position.set(0, 0, -HALF_L + stripeDepth * (i + 0.5));
      band.receiveShadow = true;
      scene.add(band);
    }

    // ===== White line markings (thin boxes just above the grass) =====
    const lineMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6 });
    const LW = 0.5; // line width
    const addLine = (x: number, z: number, w: number, d: number) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, 0.1, d), lineMat);
      m.position.set(x, 0.05, z);
      scene.add(m);
    };
    // Boundary
    addLine(0, HALF_L, HALF_W * 2, LW);
    addLine(0, -HALF_L, HALF_W * 2, LW);
    addLine(-HALF_W, 0, LW, HALF_L * 2);
    addLine(HALF_W, 0, LW, HALF_L * 2);
    // Halfway line
    addLine(0, 0, HALF_W * 2, LW);
    // Center circle
    const ring = new THREE.Mesh(new THREE.TorusGeometry(11, 0.28, 8, 48), lineMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.05;
    scene.add(ring);
    const spot = new THREE.Mesh(new THREE.CircleGeometry(0.7, 16), lineMat);
    spot.rotation.x = -Math.PI / 2;
    spot.position.y = 0.06;
    scene.add(spot);
    // Penalty boxes at both ends
    const BOX_W = GOAL_HALF * 2 + 16; // 42 wide
    const BOX_D = 20; // depth into pitch
    for (const dir of [1, -1]) {
      const lineZ = HALF_L * dir;
      const inner = lineZ - BOX_D * dir;
      addLine(0, inner, BOX_W, LW); // front of box
      addLine(-BOX_W / 2, lineZ - (BOX_D / 2) * dir, LW, BOX_D); // left side
      addLine(BOX_W / 2, lineZ - (BOX_D / 2) * dir, LW, BOX_D); // right side
    }

    // ===== Goals =====
    const goalA = makeGoal(); // opponent goal (+Z) — net faces +Z (already local +Z)
    goalA.position.set(0, 0, HALF_L);
    scene.add(goalA);
    const goalB = makeGoal(); // your goal (-Z)
    goalB.position.set(0, 0, -HALF_L);
    goalB.rotation.y = Math.PI;
    scene.add(goalB);

    // Simple stands framing the pitch (atmosphere; behind each goal + one side).
    const standMat = new THREE.MeshStandardMaterial({ color: 0x16303f, roughness: 0.9 });
    const mkStand = (x: number, z: number, w: number, d: number, ry: number) => {
      const st = new THREE.Mesh(new THREE.BoxGeometry(w, 16, d), standMat);
      st.position.set(x, 8, z);
      st.rotation.y = ry;
      st.receiveShadow = true;
      scene.add(st);
    };
    mkStand(0, HALF_L + 26, HALF_W * 2 + 40, 18, 0);
    mkStand(0, -HALF_L - 26, HALF_W * 2 + 40, 18, 0);
    mkStand(-HALF_W - 26, 0, 18, HALF_L * 2 + 40, 0);
    mkStand(HALF_W + 26, 0, 18, HALF_L * 2 + 40, 0);

    // ===== Actors =====
    const playerMesh = makePlayer(THEME.kit);
    scene.add(playerMesh);
    const cpuMesh = makePlayer(THEME.rivalKit);
    scene.add(cpuMesh);
    const keeperMat = new THREE.MeshStandardMaterial({ color: 0xfde047, roughness: 0.5 });
    const keeperA = new THREE.Mesh(new THREE.BoxGeometry(KEEPER_HALF * 2, 9, 2.4), keeperMat);
    keeperA.position.set(0, 4.5, KEEPER_A_Z);
    keeperA.castShadow = true;
    scene.add(keeperA);
    const keeperB = new THREE.Mesh(new THREE.BoxGeometry(KEEPER_HALF * 2, 9, 2.4), keeperMat);
    keeperB.position.set(0, 4.5, KEEPER_B_Z);
    keeperB.castShadow = true;
    scene.add(keeperB);
    const ballMesh = new THREE.Mesh(
      new THREE.SphereGeometry(BALL_R, 20, 20),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4, metalness: 0.05 })
    );
    ballMesh.castShadow = true;
    scene.add(ballMesh);

    const camPos = new THREE.Vector3();
    const lookAt = new THREE.Vector3();
    camera.position.set(0, 26, -HALF_L - 24);
    camera.lookAt(0, 0, 0);

    let raf = 0;
    let hudTick = 0;

    const finishMatch = () => {
      const you = scoreRef.current.you;
      const nm = selected || username;
      if (nm) {
        setBest((prev) => {
          const cur = prev[nm] ?? -1;
          if (you <= cur) return prev;
          const next = { ...prev, [nm]: you };
          localStorage.setItem(BEST_KEY, JSON.stringify(next));
          return next;
        });
      }
      statusRef.current = 'finished';
      setStatus('finished');
    };

    const scoreGoal = (side: 'you' | 'cpu') => {
      if (side === 'you') scoreRef.current.you += 1;
      else scoreRef.current.cpu += 1;
      celebrateRef.current = CELEBRATE_FRAMES;
      setHud({
        you: scoreRef.current.you,
        cpu: scoreRef.current.cpu,
        timeFrames: matchLeftRef.current,
        count: 0,
        flash: true
      });
    };

    const update = () => {
      const st = statusRef.current;
      if (st === 'count') {
        countRef.current -= 1;
        if (countRef.current <= 0) {
          statusRef.current = 'playing';
          setStatus('playing');
        }
      } else if (st === 'playing') {
        if (celebrateRef.current > 0) {
          celebrateRef.current -= 1;
          if (celebrateRef.current === 0) {
            resetKickoff();
            setHud((h) => ({ ...h, flash: false }));
          }
        } else {
          matchLeftRef.current -= 1;
          if (shotTimerRef.current > 0) shotTimerRef.current -= 1;

          const p = playerRef.current;
          const c = cpuRef.current;
          const b = ballRef.current;
          const k = keysRef.current;

          // --- Player movement (8-directional, faces heading) ---
          let ix = (k.right ? 1 : 0) - (k.left ? 1 : 0);
          let iz = (k.up ? 1 : 0) - (k.down ? 1 : 0);
          if (ix || iz) {
            const l = Math.hypot(ix, iz) || 1;
            ix /= l;
            iz /= l;
            p.x += ix * PLAYER_SPEED;
            p.z += iz * PLAYER_SPEED;
            p.dirX = ix;
            p.dirZ = iz;
          }
          p.x = clamp(p.x, -HALF_W + 2, HALF_W - 2);
          p.z = clamp(p.z, -HALF_L + 2, HALF_L - 2);

          // --- Possession (nearest actor within range while ball is calm) ---
          const speed = Math.hypot(b.vx, b.vz);
          let ctrl: Ctrl = 'none';
          if (speed < 1.3 && shotTimerRef.current <= 0) {
            const dp = Math.hypot(b.x - p.x, b.z - p.z);
            const dc = Math.hypot(b.x - c.x, b.z - c.z);
            if (dp < DRIBBLE_R && dp <= dc) ctrl = 'player';
            else if (dc < DRIBBLE_R) ctrl = 'cpu';
          }

          // --- Player shot: strong kick toward the opponent goal, aim via facing ---
          if (wantShootRef.current) {
            wantShootRef.current = false;
            if (ctrl === 'player' || Math.hypot(b.x - p.x, b.z - p.z) < DRIBBLE_R + 1.5) {
              let dx = 0 - b.x + p.dirX * 20;
              let dz = HALF_L + 6 - b.z;
              const l = Math.hypot(dx, dz) || 1;
              b.vx = (dx / l) * SHOT_POWER;
              b.vz = (dz / l) * SHOT_POWER;
              shotTimerRef.current = 16;
              ctrl = 'none';
            }
          }

          // --- CPU AI: dribble toward your goal & shoot, else chase the ball ---
          if (ctrl === 'cpu') {
            let dx = 0 - c.x;
            let dz = -HALF_L - 6 - c.z;
            const l = Math.hypot(dx, dz) || 1;
            dx /= l;
            dz /= l;
            c.x += dx * CPU_SPEED;
            c.z += dz * CPU_SPEED;
            c.dirX = dx;
            c.dirZ = dz;
            if (c.z < -HALF_L * 0.45 || Math.random() < 0.02) {
              let sx = 0 - b.x + (Math.random() * 2 - 1) * 10;
              let sz = -HALF_L - 6 - b.z;
              const sl = Math.hypot(sx, sz) || 1;
              b.vx = (sx / sl) * SHOT_POWER * 0.9;
              b.vz = (sz / sl) * SHOT_POWER * 0.9;
              shotTimerRef.current = 16;
              ctrl = 'none';
            }
          } else {
            let dx = b.x - c.x;
            let dz = b.z - c.z;
            const l = Math.hypot(dx, dz) || 1;
            dx /= l;
            dz /= l;
            c.x += dx * CPU_SPEED * 0.92;
            c.z += dz * CPU_SPEED * 0.92;
            c.dirX = dx;
            c.dirZ = dz;
          }
          c.x = clamp(c.x, -HALF_W + 2, HALF_W - 2);
          c.z = clamp(c.z, -HALF_L + 2, HALF_L - 2);

          // --- Ball: glued to controller, else friction + integrate ---
          if (ctrl === 'player') {
            b.x = p.x + p.dirX * DRIBBLE_OFFSET;
            b.z = p.z + p.dirZ * DRIBBLE_OFFSET;
            b.vx = 0;
            b.vz = 0;
          } else if (ctrl === 'cpu') {
            b.x = c.x + c.dirX * DRIBBLE_OFFSET;
            b.z = c.z + c.dirZ * DRIBBLE_OFFSET;
            b.vx = 0;
            b.vz = 0;
          } else {
            b.vx *= FRICTION;
            b.vz *= FRICTION;
            if (Math.abs(b.vx) < 0.01) b.vx = 0;
            if (Math.abs(b.vz) < 0.01) b.vz = 0;
            b.x += b.vx;
            b.z += b.vz;
          }

          // --- Keepers slide along their line toward the ball's X ---
          const kA = keeperARef.current;
          const kB = keeperBRef.current;
          kA.x = moveToward(kA.x, clamp(b.x, -KEEPER_RANGE, KEEPER_RANGE), KEEPER_SPEED);
          kB.x = moveToward(kB.x, clamp(b.x, -KEEPER_RANGE, KEEPER_RANGE), KEEPER_SPEED);

          // --- Keeper saves (push the ball back off the line) ---
          if (b.vz > 0 && b.z > KEEPER_A_Z - 4 && b.z < KEEPER_A_Z + 3 && Math.abs(b.x - kA.x) < KEEPER_HALF + BALL_R) {
            b.z = KEEPER_A_Z - 4;
            b.vz = -Math.abs(b.vz) * 0.55 - 0.5;
            b.vx += (b.x - kA.x) * 0.35;
            shotTimerRef.current = 12;
          }
          if (b.vz < 0 && b.z < KEEPER_B_Z + 4 && b.z > KEEPER_B_Z - 3 && Math.abs(b.x - kB.x) < KEEPER_HALF + BALL_R) {
            b.z = KEEPER_B_Z + 4;
            b.vz = Math.abs(b.vz) * 0.55 + 0.5;
            b.vx += (b.x - kB.x) * 0.35;
            shotTimerRef.current = 12;
          }

          // --- Side touchlines bounce the ball back in ---
          if (b.x < -HALF_W + BALL_R) {
            b.x = -HALF_W + BALL_R;
            b.vx = Math.abs(b.vx) * 0.6;
          } else if (b.x > HALF_W - BALL_R) {
            b.x = HALF_W - BALL_R;
            b.vx = -Math.abs(b.vx) * 0.6;
          }

          // --- Goal lines: score between the posts, else bounce off the end line ---
          if (b.z > HALF_L) {
            if (Math.abs(b.x) < GOAL_HALF) scoreGoal('you');
            else {
              b.z = HALF_L;
              b.vz = -Math.abs(b.vz) * 0.6;
            }
          } else if (b.z < -HALF_L) {
            if (Math.abs(b.x) < GOAL_HALF) scoreGoal('cpu');
            else {
              b.z = -HALF_L;
              b.vz = Math.abs(b.vz) * 0.6;
            }
          }

          if (celebrateRef.current === 0 && matchLeftRef.current <= 0) finishMatch();
        }
      }

      // ===== Sync meshes =====
      const p = playerRef.current;
      const c = cpuRef.current;
      const b = ballRef.current;
      playerMesh.position.set(p.x, 0, p.z);
      playerMesh.rotation.y = Math.atan2(p.dirX, p.dirZ);
      cpuMesh.position.set(c.x, 0, c.z);
      cpuMesh.rotation.y = Math.atan2(c.dirX, c.dirZ);
      ballMesh.position.set(b.x, BALL_R, b.z);
      ballMesh.rotation.x += b.vz * 0.12;
      ballMesh.rotation.z -= b.vx * 0.12;
      keeperA.position.x = keeperARef.current.x;
      keeperB.position.x = keeperBRef.current.x;

      // ===== Camera =====
      if (camModeRef.current === 0) {
        // Chase: sits behind the player, always looking up the pitch (+Z).
        camPos.set(p.x * 0.6, 15, p.z - 26);
        lookAt.set(p.x * 0.4, 2, p.z + 16);
      } else {
        // Broadcast: high and back, following the action down the pitch.
        camPos.set(b.x * 0.25, 66, b.z * 0.3 - 92);
        lookAt.set(b.x * 0.15, 0, b.z * 0.35 + 20);
      }
      camera.up.set(0, 1, 0);
      camera.position.lerp(camPos, camModeRef.current === 0 ? 0.14 : 0.08);
      camera.lookAt(lookAt);
    };

    const loop = () => {
      update();
      renderer.render(scene, camera);
      if (statusRef.current === 'playing' && celebrateRef.current === 0 && ++hudTick % 6 === 0) {
        setHud({
          you: scoreRef.current.you,
          cpu: scoreRef.current.cpu,
          timeFrames: matchLeftRef.current,
          count: 0,
          flash: false
        });
      } else if (statusRef.current === 'count') {
        setHud((h) => ({ ...h, count: Math.ceil(countRef.current / 60) }));
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
      scene.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((mm) => mm.dispose());
        else if (mat) mat.dispose();
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status === 'menu']);

  const myKey = username || selected;
  const myBest = myKey && best[myKey] != null ? best[myKey] : 0;
  const camName = CAM_NAMES[lang][camMode];
  const won = hud.you > hud.cpu;

  // ===================== MENU =====================
  if (status === 'menu') {
    return (
      <div className="shell menu">
        <div className="panel">
          <div className="head">
            <div>
              <p className="eyebrow">{THEME.console} · {s.eyebrow}</p>
              <h1>
                {THEME.title} <span className="ed">{THEME.edition}</span>
              </h1>
              <p className="copy">{s.heroCopy}</p>
            </div>
            <div className="head-side">
              <select
                className="lang-select"
                value={lang}
                onChange={(e) => {
                  setLang(e.target.value as Lang);
                  saveLang(e.target.value as Lang);
                }}
                aria-label={s.langLabel}
              >
                {LANGS.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.label}
                  </option>
                ))}
              </select>
              <span className="pill">● {s.live}</span>
            </div>
          </div>

          <h2 className="section">{s.players}</h2>
          <div className="players">
            {names.length ? (
              names.map((n) => (
                <div key={n} className={`chip ${selected === n ? 'sel' : ''}`}>
                  <button type="button" className="chip-main" onClick={() => setSelected(n)}>
                    <span className="avatar">{n.charAt(0).toUpperCase()}</span>
                    <span>{n}</span>
                    {best[n] != null ? <span className="chip-best">⚽ {best[n]}</span> : null}
                  </button>
                  <button type="button" className="chip-x" aria-label={s.remove(n)} onClick={() => removeName(n)}>
                    ×
                  </button>
                </div>
              ))
            ) : (
              <p className="empty">{s.noPlayers}</p>
            )}
          </div>

          <div className="add-row">
            <input
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addName()}
              maxLength={16}
              placeholder={s.addPlaceholder}
            />
            <button className="btn" onClick={addName} disabled={!nameInput.trim()}>
              {s.add}
            </button>
          </div>

          <button className="btn primary big" onClick={startMatch} disabled={!selected}>
            {s.start}
          </button>
          {selected && (
            <p className="best-line">
              {s.playingAs} <strong>{selected}</strong>
              {best[selected] != null ? ` · ${s.best} ${best[selected]}` : ''}
            </p>
          )}
        </div>
      </div>
    );
  }

  // ===================== MATCH (3D) =====================
  return (
    <div className="shell">
      <header className="bar">
        <span className="tag">⚽ {username}</span>
        <div className="bar-right">
          <button className="cam-btn" onClick={cycleCam}>
            📷 {camName}
          </button>
          <button className="stop" onClick={stopToMenu}>
            {s.stop}
          </button>
        </div>
      </header>

      <div className="hud">
        <div className="hud-chip wide">
          <span>{s.score}</span>
          <strong>
            {s.you} {hud.you} – {hud.cpu} {s.cpu}
          </strong>
        </div>
        <div className="hud-chip">
          <span>{s.time}</span>
          <strong>{fmtClock(hud.timeFrames)}</strong>
        </div>
        <div className="hud-chip">
          <span>{s.best}</span>
          <strong>{myBest || '—'}</strong>
        </div>
      </div>

      <div className="stage">
        <div ref={mountRef} className="scene3d" />

        {status !== 'finished' && (
          <div className="touch">
            <div className="dpad">
              <button
                className="tbtn up"
                aria-label="▲"
                onPointerDown={press('up', true)}
                onPointerUp={press('up', false)}
                onPointerLeave={press('up', false)}
                onPointerCancel={press('up', false)}
              >
                ▲
              </button>
              <button
                className="tbtn left"
                aria-label="◀"
                onPointerDown={press('left', true)}
                onPointerUp={press('left', false)}
                onPointerLeave={press('left', false)}
                onPointerCancel={press('left', false)}
              >
                ◀
              </button>
              <button
                className="tbtn right"
                aria-label="▶"
                onPointerDown={press('right', true)}
                onPointerUp={press('right', false)}
                onPointerLeave={press('right', false)}
                onPointerCancel={press('right', false)}
              >
                ▶
              </button>
              <button
                className="tbtn down"
                aria-label="▼"
                onPointerDown={press('down', true)}
                onPointerUp={press('down', false)}
                onPointerLeave={press('down', false)}
                onPointerCancel={press('down', false)}
              >
                ▼
              </button>
            </div>
            <div className="touch-actions">
              <button className="tbtn cam" aria-label={CAM_LABEL[lang]} onPointerDown={(e) => { e.preventDefault(); cycleCam(); }}>
                📷
              </button>
              <button className="tbtn shoot" aria-label={s.goal} onPointerDown={pressShoot}>
                ⚽
              </button>
            </div>
          </div>
        )}

        {status === 'count' && (
          <div className="count" aria-hidden>
            <span>{hud.count > 0 ? hud.count : s.go}</span>
          </div>
        )}

        {hud.flash && status === 'playing' && (
          <div className="goal-flash" aria-hidden>
            <span>{s.goal}</span>
          </div>
        )}

        {status === 'finished' && (
          <div className="overlay">
            <div className="card">
              <p className="ov-eyebrow">{s.finish}</p>
              <h2>{won ? s.won : `${hud.you} – ${hud.cpu}`}</h2>
              <div className="ov-row">
                <div>
                  <span>{s.you}</span>
                  <strong>{hud.you}</strong>
                </div>
                <div>
                  <span>{s.cpu}</span>
                  <strong>{hud.cpu}</strong>
                </div>
                <div>
                  <span>{s.best}</span>
                  <strong>{myBest}</strong>
                </div>
              </div>
              <div className="ov-actions">
                <button className="btn primary" onClick={startMatch}>
                  {s.playAgain}
                </button>
                <button className="btn" onClick={stopToMenu}>
                  {s.menu}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <p className="hint">
        {s.hint} · 📷 {CAM_LABEL[lang]}: C / Y
      </p>
    </div>
  );
}

export default App;
