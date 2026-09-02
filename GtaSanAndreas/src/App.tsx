import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './App.css';
import { THEME } from './theme';
import { LANGS, RTL_LANGS, STR, initialLang, saveLang, type Lang } from './i18n';
import { startGamepad, bridgeGamepadToKeys } from './gamepad';

// ===== City grid (X/Z ground plane) =====
// A regular grid of roads (at every multiple of BLOCK) carves the map into
// square blocks; buildings sit INSIDE the blocks, off the tarmac. Missions are a
// chain of glowing checkpoints placed at road intersections.
const GRID = 5; // intersections span -GRID..GRID
const BLOCK = 220; // spacing between parallel roads
const ROAD_HALF = 26; // half road width
const EXTENT = GRID * BLOCK + BLOCK * 0.5; // world half-size (car is clamped here)
const CP_REACH = 30; // how close (X/Z) counts as "reached"
const REWARD = 250; // cash per checkpoint
const RUN_MS = 120000; // 120s countdown

// ===== Physics (frame-based, ~60fps) — same feel as the racer =====
const MAX_SPEED = 6.6;
const OFFROAD_MAX = 3.2;
const ACCEL = 0.16;
const BRAKE = 0.3;
const DRAG = 0.018;
const TURN = 0.05;

// ===== World tones (dusk / sun-baked city) =====
const SKY = '#d7a866';
const GROUND = '#4a4534';
const ROAD = '#33353b';
const BUILDING_COLORS = [
  '#6b7280', '#78716c', '#57534e', '#7c6f57', '#8a7f6a',
  '#5b6470', '#736b5e', '#847c6d', '#4d5560', '#6d6152'
];

// ===== Cameras (positioned relative to the car each frame) =====
type Cam = { back: number; height: number; ahead: number; up: number; top?: boolean; attach?: boolean; cockpit?: boolean };
const CAM_MODES: Cam[] = [
  { back: -3, height: 8.5, ahead: 60, up: 6, attach: true, cockpit: true }, // cockpit (default — inside the car)
  { back: 34, height: 15, ahead: 24, up: 5 }, // chase
  { back: -12, height: 6, ahead: 45, up: 3, attach: true }, // hood
  { back: 62, height: 32, ahead: 18, up: 7 }, // far
  { back: 0, height: 210, ahead: 0, up: 0, top: true } // top
];

const NAMES_KEY = 'gta-names';
const BEST_KEY = 'gta-bestcash-by-user';
const COLORS = ['#16a34a', '#e10600', '#1e6fff', '#ffd400', '#ffffff', '#f97316', '#ec4899', '#111827'];

type Status = 'menu' | 'count' | 'driving' | 'finished';
type Car = { x: number; z: number; ang: number; speed: number };
type Best = Record<string, number>;
type P = { x: number; z: number };

const dist2 = (ax: number, az: number, bx: number, bz: number) => (ax - bx) ** 2 + (az - bz) ** 2;

// A point is "on the road" when it's within ROAD_HALF of any grid line.
function onRoad(x: number, z: number): boolean {
  const dx = Math.abs(x - Math.round(x / BLOCK) * BLOCK);
  const dz = Math.abs(z - Math.round(z / BLOCK) * BLOCK);
  return dx <= ROAD_HALF || dz <= ROAD_HALF;
}

function randIntersection(): P {
  const i = Math.floor(Math.random() * (2 * GRID + 1)) - GRID;
  const j = Math.floor(Math.random() * (2 * GRID + 1)) - GRID;
  return { x: i * BLOCK, z: j * BLOCK };
}
// Next checkpoint: a road intersection at least ~2 blocks from the current spot.
function nextCheckpoint(fromX: number, fromZ: number): P {
  let p = randIntersection();
  let guard = 0;
  while (dist2(p.x, p.z, fromX, fromZ) < (BLOCK * 2) ** 2 && guard++ < 40) p = randIntersection();
  return p;
}

const fmtClock = (ms: number) => {
  const s = Math.max(0, Math.floor(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
};
const fmtCash = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`;

// A simple low-poly car: body + cabin + four wheels, pointing +X (its "forward").
function makeCar(color: string): THREE.Group {
  const g = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(22, 6, 11),
    new THREE.MeshStandardMaterial({ color, metalness: 0.55, roughness: 0.35 })
  );
  body.position.y = 4.2;
  body.castShadow = true;
  g.add(body);
  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(10, 5, 9),
    new THREE.MeshStandardMaterial({ color: 0x0b1220, metalness: 0.3, roughness: 0.25 })
  );
  cabin.position.set(-1, 8.5, 0);
  cabin.castShadow = true;
  g.add(cabin);
  const spoiler = new THREE.Mesh(
    new THREE.BoxGeometry(2.4, 3.4, 12),
    new THREE.MeshStandardMaterial({ color: 0x111214 })
  );
  spoiler.position.set(-10.5, 6.6, 0);
  spoiler.castShadow = true;
  g.add(spoiler);
  const wheelGeo = new THREE.CylinderGeometry(3, 3, 3.4, 14);
  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 0.85 });
  for (const [wx, wz] of [[8, 6], [8, -6], [-8, 6], [-8, -6]]) {
    const w = new THREE.Mesh(wheelGeo, wheelMat);
    w.rotation.x = Math.PI / 2;
    w.position.set(wx, 3, wz);
    w.castShadow = true;
    g.add(w);
  }
  return g;
}

function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const s = STR[lang];

  const mountRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<Status>('menu');
  const statusRef = useRef<Status>('menu');
  const [hud, setHud] = useState({ cash: 0, timeMs: RUN_MS, objective: 1, count: 3 });
  const [camMode, setCamMode] = useState(0);
  const camModeRef = useRef(0);
  const [finalCash, setFinalCash] = useState(0);

  const [names, setNames] = useState<string[]>([]);
  const [selected, setSelected] = useState('');
  const [username, setUsername] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [color, setColor] = useState(THEME.playerCar);
  const [best, setBest] = useState<Best>({});

  const carRef = useRef<Car>({ x: 0, z: 0, ang: 0, speed: 0 });
  const keysRef = useRef({ up: false, down: false, left: false, right: false });
  const cpRef = useRef<P>({ x: 0, z: 0 });
  const cashRef = useRef(0);
  const objRef = useRef(1);
  const flashRef = useRef(0);
  const startTimeRef = useRef(0);
  const countRef = useRef(0);
  const colorRef = useRef(color);
  colorRef.current = color;
  // Cockpit dashboard, updated imperatively each frame for smoothness.
  const wheelElRef = useRef<HTMLDivElement | null>(null);
  const speedElRef = useRef<HTMLSpanElement | null>(null);
  const flashElRef = useRef<HTMLDivElement | null>(null);
  const wheelDegRef = useRef(0);
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
    camModeRef.current = (camModeRef.current + 1) % CAM_MODES.length;
    setCamMode(camModeRef.current);
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
      else if ((k === 'c' || k === 'C') && down) cycleCam();
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

  // ===== Gamepad: stick/A/RB drive; Y changes camera; Start drives; B exits =====
  useEffect(() => {
    const stopKeys = bridgeGamepadToKeys({
      up: 'ArrowUp',
      down: 'ArrowDown',
      left: 'ArrowLeft',
      right: 'ArrowRight',
      A: 'ArrowUp',
      RB: 'ArrowUp',
      R2: 'ArrowUp', // R2 = accelerate
      L2: 'ArrowDown' // L2 = brake
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

  const startDrive = () => {
    const name = selected || username;
    if (!name) return;
    setUsername(name);
    carRef.current = { x: 0, z: 0, ang: 0, speed: 0 };
    keysRef.current = { up: false, down: false, left: false, right: false };
    cpRef.current = nextCheckpoint(0, 0);
    cashRef.current = 0;
    objRef.current = 1;
    flashRef.current = 0;
    countRef.current = 180;
    setFinalCash(0);
    setHud({ cash: 0, timeMs: RUN_MS, objective: 1, count: 3 });
    statusRef.current = 'count';
    setStatus('count');
  };

  const stopToMenu = () => {
    statusRef.current = 'menu';
    setStatus('menu');
  };

  actionsRef.current = { start: startDrive, exit: stopToMenu };

  // On-screen touch controls (mobile): press-and-hold sets the same key flags the
  // keyboard does, so phones drive with no keyboard or pad needed.
  const press = (key: 'up' | 'down' | 'left' | 'right', val: boolean) => (e: React.PointerEvent) => {
    e.preventDefault();
    keysRef.current[key] = val;
  };

  // ===== Three.js scene (built when a drive starts, torn down back at the menu) =====
  useEffect(() => {
    if (status === 'menu') return;
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const sky = new THREE.Color(SKY);
    scene.background = sky;
    scene.fog = new THREE.Fog(sky.getHex(), 620, 1900);

    const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 4000);
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

    // Lights (with a warm sun casting soft shadows across the city)
    scene.add(new THREE.HemisphereLight(0xffe6bf, 0x3a3524, 0.9));
    const sun = new THREE.DirectionalLight(0xfff1d6, 1.3);
    sun.position.set(320, 480, -160);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const sc = sun.shadow.camera as THREE.OrthographicCamera;
    sc.left = -700;
    sc.right = 700;
    sc.top = 700;
    sc.bottom = -700;
    sc.near = 50;
    sc.far = 1700;
    sc.updateProjectionMatrix();
    sun.shadow.bias = -0.0004;
    scene.add(sun);

    // Ground
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(6000, 6000),
      new THREE.MeshStandardMaterial({ color: new THREE.Color(GROUND) })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.1;
    ground.receiveShadow = true;
    scene.add(ground);

    // Roads: one long strip per grid line, both directions.
    const roadLen = EXTENT * 2 + BLOCK;
    const roadMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(ROAD), roughness: 0.96 });
    const dashMat = new THREE.MeshStandardMaterial({ color: 0xf5d76e });
    for (let i = -GRID; i <= GRID; i++) {
      const at = i * BLOCK;
      const hRoad = new THREE.Mesh(new THREE.BoxGeometry(roadLen, 0.2, ROAD_HALF * 2), roadMat);
      hRoad.position.set(0, 0.02, at);
      hRoad.receiveShadow = true;
      scene.add(hRoad);
      const vRoad = new THREE.Mesh(new THREE.BoxGeometry(ROAD_HALF * 2, 0.2, roadLen), roadMat);
      vRoad.position.set(at, 0.02, 0);
      vRoad.receiveShadow = true;
      scene.add(vRoad);
    }
    // Sparse centre dashes along the horizontal roads (cheap lane markings).
    for (let i = -GRID; i <= GRID; i++) {
      const at = i * BLOCK;
      for (let x = -GRID * BLOCK; x <= GRID * BLOCK; x += 40) {
        if (Math.abs(x - Math.round(x / BLOCK) * BLOCK) <= ROAD_HALF) continue; // skip intersections
        const dash = new THREE.Mesh(new THREE.BoxGeometry(14, 0.1, 2.2), dashMat);
        dash.position.set(x, 0.14, at);
        scene.add(dash);
      }
    }

    // Buildings: boxes of varied heights/muted colors, placed inside blocks (off
    // the tarmac). Runtime Math.random keeps every session's skyline different.
    const buildMats = BUILDING_COLORS.map((c) => new THREE.MeshStandardMaterial({ color: new THREE.Color(c), roughness: 0.9 }));
    const boxGeo = new THREE.BoxGeometry(1, 1, 1); // scaled per building
    const usable = BLOCK / 2 - ROAD_HALF - 8; // interior half-extent of a block
    for (let bi = -GRID; bi < GRID; bi++) {
      for (let bj = -GRID; bj < GRID; bj++) {
        const cx = (bi + 0.5) * BLOCK;
        const cz = (bj + 0.5) * BLOCK;
        const count = 1 + Math.floor(Math.random() * 3);
        for (let n = 0; n < count; n++) {
          const w = 26 + Math.random() * (usable * 0.9);
          const d = 26 + Math.random() * (usable * 0.9);
          const h = 30 + Math.random() * 230;
          const maxOff = Math.max(0, usable - Math.max(w, d) / 2);
          const ox = (Math.random() * 2 - 1) * maxOff;
          const oz = (Math.random() * 2 - 1) * maxOff;
          const px = cx + ox;
          const pz = cz + oz;
          if (onRoad(px, pz)) continue; // never on the tarmac
          const b = new THREE.Mesh(boxGeo, buildMats[Math.floor(Math.random() * buildMats.length)]);
          b.scale.set(w, h, d);
          b.position.set(px, h / 2, pz);
          b.castShadow = true;
          b.receiveShadow = true;
          scene.add(b);
        }
      }
    }

    // A few parked cars for street flavour (static, off the driving line).
    const parkedColors = ['#9ca3af', '#b91c1c', '#1d4ed8', '#d97706', '#e5e7eb'];
    for (let n = 0; n < 14; n++) {
      const inter = randIntersection();
      const side = Math.random() < 0.5 ? 1 : -1;
      const along = (Math.random() * 2 - 1) * (BLOCK / 2 - 30);
      let px: number;
      let pz: number;
      let rotY: number;
      if (Math.random() < 0.5) {
        px = inter.x + along;
        pz = inter.z + side * (ROAD_HALF + 8);
        rotY = 0;
      } else {
        px = inter.x + side * (ROAD_HALF + 8);
        pz = inter.z + along;
        rotY = Math.PI / 2;
      }
      const pc = makeCar(parkedColors[n % parkedColors.length]);
      pc.position.set(px, 0, pz);
      pc.rotation.y = rotY;
      pc.scale.setScalar(0.9);
      scene.add(pc);
    }

    // Player car
    const playerCar = makeCar(colorRef.current);
    scene.add(playerCar);

    // Mission checkpoint: a translucent emissive ring + a tall beam you can see
    // from across the map. It's re-positioned each time you reach it.
    const accent = new THREE.Color(THEME.accent);
    const cpGroup = new THREE.Group();
    const ring = new THREE.Mesh(
      new THREE.CylinderGeometry(24, 24, 3, 30, 1, true),
      new THREE.MeshStandardMaterial({
        color: accent, emissive: accent, emissiveIntensity: 1.1,
        transparent: true, opacity: 0.55, side: THREE.DoubleSide
      })
    );
    ring.position.y = 2;
    cpGroup.add(ring);
    const disc = new THREE.Mesh(
      new THREE.CylinderGeometry(24, 24, 0.4, 30),
      new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.22 })
    );
    disc.position.y = 0.2;
    cpGroup.add(disc);
    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(4.5, 4.5, 320, 18, 1, true),
      new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.32, side: THREE.DoubleSide })
    );
    beam.position.y = 160;
    cpGroup.add(beam);
    cpGroup.position.set(cpRef.current.x, 0, cpRef.current.z);
    scene.add(cpGroup);

    const fwd = new THREE.Vector3();
    const camPos = new THREE.Vector3();
    const lookAt = new THREE.Vector3();

    let raf = 0;
    let hudTick = 0;
    startTimeRef.current = performance.now();

    const finish = () => {
      const nm = selected || username;
      const total = cashRef.current;
      setFinalCash(total);
      if (nm) {
        setBest((prev) => {
          const cur = prev[nm] || 0;
          if (total <= cur) return prev;
          const next = { ...prev, [nm]: total };
          localStorage.setItem(BEST_KEY, JSON.stringify(next));
          return next;
        });
      }
      statusRef.current = 'finished';
      setStatus('finished');
    };

    const update = () => {
      const st = statusRef.current;
      if (st === 'count') {
        countRef.current -= 1;
        if (countRef.current <= 0) {
          statusRef.current = 'driving';
          setStatus('driving');
          startTimeRef.current = performance.now();
        }
      } else if (st === 'driving') {
        const car = carRef.current;
        const k = keysRef.current;
        const off = !onRoad(car.x, car.z);
        const max = off ? OFFROAD_MAX : MAX_SPEED;
        // Auto-throttle: the car always rolls forward, so you can steer from the
        // moment the drive starts. Up is a boost, Down brakes.
        if (k.down) car.speed -= BRAKE;
        else car.speed += ACCEL * (k.up ? 1 : 0.5);
        car.speed -= DRAG * car.speed;
        if (off && car.speed > OFFROAD_MAX) car.speed -= 0.09;
        car.speed = Math.max(-2.2, Math.min(max, car.speed));
        const steer = (k.left ? -1 : 0) + (k.right ? 1 : 0);
        if (Math.abs(car.speed) > 0.25) {
          car.ang += steer * TURN * Math.min(1, Math.abs(car.speed) / 3) * Math.sign(car.speed);
        }
        car.x += Math.cos(car.ang) * car.speed;
        car.z += Math.sin(car.ang) * car.speed;
        // Keep the car inside the city.
        car.x = Math.max(-EXTENT, Math.min(EXTENT, car.x));
        car.z = Math.max(-EXTENT, Math.min(EXTENT, car.z));

        // Reached the checkpoint? (X/Z distance) → cash + flash + spawn next.
        const cp = cpRef.current;
        if (dist2(car.x, car.z, cp.x, cp.z) < CP_REACH * CP_REACH) {
          cashRef.current += REWARD;
          objRef.current += 1;
          flashRef.current = 1;
          const np = nextCheckpoint(car.x, car.z);
          cpRef.current = np;
          cpGroup.position.set(np.x, 0, np.z);
        }

        // 120s countdown → finish.
        const elapsed = performance.now() - startTimeRef.current;
        if (elapsed >= RUN_MS) finish();
      }

      // Sync player car
      playerCar.position.set(carRef.current.x, 0, carRef.current.z);
      playerCar.rotation.y = -carRef.current.ang;

      // Checkpoint animation
      ring.rotation.y += 0.03;
      const pulse = 1 + Math.sin(performance.now() * 0.005) * 0.04;
      ring.scale.set(pulse, 1, pulse);

      // Reached-flash fade (imperative, no re-render)
      if (flashRef.current > 0) {
        flashRef.current = Math.max(0, flashRef.current - 0.05);
        if (flashElRef.current) flashElRef.current.style.opacity = (flashRef.current * 0.6).toFixed(3);
      }

      // Camera
      const car = carRef.current;
      const m = CAM_MODES[camModeRef.current];
      playerCar.visible = !m.cockpit; // from inside, you don't see your own car
      fwd.set(Math.cos(car.ang), 0, Math.sin(car.ang));
      const kmh = Math.max(0, Math.abs(car.speed) * 30);
      const wantFov = 60 + Math.min(24, kmh * 0.1); // speed sensation
      if (Math.abs(camera.fov - wantFov) > 0.1) {
        camera.fov = wantFov;
        camera.updateProjectionMatrix();
      }
      if (m.top) {
        camera.up.set(fwd.x, 0, fwd.z);
        camera.position.set(car.x, m.height, car.z);
        camera.lookAt(car.x, 0, car.z);
      } else {
        camera.up.set(0, 1, 0);
        camPos.set(car.x - fwd.x * m.back, m.height, car.z - fwd.z * m.back);
        lookAt.set(car.x + fwd.x * m.ahead, m.up, car.z + fwd.z * m.ahead);
        if (m.attach) camera.position.copy(camPos);
        else camera.position.lerp(camPos, 0.22);
        camera.lookAt(lookAt);
      }
      // Cockpit dashboard readouts (wheel turns with steering, live speed).
      if (m.cockpit) {
        if (speedElRef.current) speedElRef.current.textContent = String(Math.round(kmh));
        const target = ((keysRef.current.left ? -1 : 0) + (keysRef.current.right ? 1 : 0)) * 135;
        wheelDegRef.current += (target - wheelDegRef.current) * 0.2;
        if (wheelElRef.current) wheelElRef.current.style.transform = `rotate(${wheelDegRef.current.toFixed(1)}deg)`;
      }
    };

    const loop = () => {
      update();
      renderer.render(scene, camera);
      if (statusRef.current === 'driving' && ++hudTick % 6 === 0) {
        const elapsed = performance.now() - startTimeRef.current;
        setHud({
          cash: cashRef.current,
          timeMs: Math.max(0, RUN_MS - elapsed),
          objective: objRef.current,
          count: 0
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

  const myBest = username && best[username] ? best[username] : selected && best[selected] ? best[selected] : 0;
  const camName = s.cams[camMode];

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
                    {best[n] ? <span className="chip-best">💰 {fmtCash(best[n])}</span> : null}
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

          <h2 className="section">{s.carColor}</h2>
          <div className="colors">
            {COLORS.map((c) => (
              <button
                key={c}
                className={`swatch ${color === c ? 'on' : ''}`}
                style={{ background: c }}
                aria-label={c}
                onClick={() => setColor(c)}
              />
            ))}
          </div>

          <button className="btn primary big" onClick={startDrive} disabled={!selected}>
            {s.start}
          </button>
          {selected && (
            <p className="best-line">
              {s.playingAs} <strong>{selected}</strong>
              {best[selected] ? ` · ${s.best} ${fmtCash(best[selected])}` : ''}
            </p>
          )}
        </div>
      </div>
    );
  }

  // ===================== DRIVE (3D) =====================
  return (
    <div className="shell">
      <header className="bar">
        <span className="tag">🚗 {username}</span>
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
        <div className="hud-chip">
          <span>{s.cash}</span>
          <strong>{fmtCash(hud.cash)}</strong>
        </div>
        <div className="hud-chip">
          <span>{s.objective}</span>
          <strong>#{hud.objective}</strong>
        </div>
        <div className="hud-chip">
          <span>{s.time}</span>
          <strong>{fmtClock(hud.timeMs)}</strong>
        </div>
        <div className="hud-chip">
          <span>{s.best}</span>
          <strong>{myBest ? fmtCash(myBest) : '—'}</strong>
        </div>
      </div>

      <div className="stage">
        <div ref={mountRef} className="scene3d" />
        <div className="flash" ref={flashElRef} aria-hidden />
        {camMode === 0 && status !== 'finished' && (
          <div className="cockpit" aria-hidden>
            <div className="frame" />
            <div className="dash">
              <div className="wheel" ref={wheelElRef}>
                <div className="wheel-hub" />
                <div className="wheel-grip left" />
                <div className="wheel-grip right" />
              </div>
              <div className="gauge">
                <span className="gauge-num" ref={speedElRef}>0</span>
                <span className="gauge-unit">km/h</span>
              </div>
            </div>
          </div>
        )}
        {status !== 'finished' && (
          <div className="touch">
            <div className="touch-steer">
              <button
                className="tbtn"
                aria-label="◀"
                onPointerDown={press('left', true)}
                onPointerUp={press('left', false)}
                onPointerLeave={press('left', false)}
                onPointerCancel={press('left', false)}
              >
                ◀
              </button>
              <button
                className="tbtn"
                aria-label="▶"
                onPointerDown={press('right', true)}
                onPointerUp={press('right', false)}
                onPointerLeave={press('right', false)}
                onPointerCancel={press('right', false)}
              >
                ▶
              </button>
            </div>
            <div className="touch-pedals">
              <button
                className="tbtn brake"
                aria-label="brake"
                onPointerDown={press('down', true)}
                onPointerUp={press('down', false)}
                onPointerLeave={press('down', false)}
                onPointerCancel={press('down', false)}
              >
                ⏹
              </button>
              <button
                className="tbtn gas"
                aria-label="gas"
                onPointerDown={press('up', true)}
                onPointerUp={press('up', false)}
                onPointerLeave={press('up', false)}
                onPointerCancel={press('up', false)}
              >
                ⛽
              </button>
            </div>
          </div>
        )}
        {status === 'count' && (
          <div className="count" aria-hidden>
            <span>{hud.count > 0 ? hud.count : s.go}</span>
          </div>
        )}
        {status === 'finished' && (
          <div className="overlay">
            <div className="card">
              <p className="ov-eyebrow">{s.finish}</p>
              <h2>{s.won}</h2>
              <div className="ov-row">
                <div>
                  <span>{s.cash}</span>
                  <strong>{fmtCash(finalCash)}</strong>
                </div>
                <div>
                  <span>{s.best}</span>
                  <strong>{myBest ? fmtCash(myBest) : fmtCash(finalCash)}</strong>
                </div>
              </div>
              <div className="ov-actions">
                <button className="btn primary" onClick={startDrive}>
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
        {s.hint} · 📷 {s.camera}: C / Y
      </p>
    </div>
  );
}

export default App;
