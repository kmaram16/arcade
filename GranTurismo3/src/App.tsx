import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './App.css';
import { THEME } from './theme';
import { LANGS, RTL_LANGS, STR, initialLang, saveLang, type Lang } from './i18n';
import { startGamepad, bridgeGamepadToKeys } from './gamepad';

// ===== Track: a smooth closed loop centred on the origin (X/Z ground plane) =====
const ROAD_HALF = 52;
const LAPS = 3;

type P = { x: number; z: number };
// The circuit shape comes from THEME.track (harmonics on an ellipse), so each
// Gran Turismo has its OWN distinct track. Kept star-convex around the origin so
// the angle-based lap counter always works.
const TRACK_N = 44;
const WP: P[] = Array.from({ length: TRACK_N }, (_, i) => {
  const a = (i / TRACK_N) * Math.PI * 2;
  let r = 1;
  for (const [k, amp, ph] of THEME.track.harm) r += amp * Math.sin(k * a + ph);
  return { x: Math.cos(a) * THEME.track.rx * r, z: Math.sin(a) * THEME.track.rz * r };
});
const N = WP.length;
const CPS = WP.map((_, i) => i).filter((i) => i % 4 === 0);
const CP_R = 100;

// ===== Physics (frame-based, ~60fps) =====
const MAX_SPEED = 6.6;
const GRASS_MAX = 2.8;
const ACCEL = 0.16;
const BRAKE = 0.3;
const DRAG = 0.018;
const TURN = 0.05;

// ===== Cameras (positioned relative to the car each frame) =====
type Cam = { back: number; height: number; ahead: number; up: number; top?: boolean; attach?: boolean; cockpit?: boolean };
const CAM_MODES: Cam[] = [
  { back: -3, height: 8.5, ahead: 60, up: 6, attach: true, cockpit: true }, // cockpit (default — inside the car)
  { back: 34, height: 15, ahead: 24, up: 5 }, // chase
  { back: -12, height: 6, ahead: 45, up: 3, attach: true }, // hood
  { back: 62, height: 32, ahead: 18, up: 7 }, // far
  { back: 0, height: 150, ahead: 0, up: 0, top: true } // top
];
const CAM_LABEL: Record<Lang, string> = {
  es: 'Cámara', en: 'Camera', pt: 'Câmera', fr: 'Caméra', de: 'Kamera', it: 'Camera', zh: '镜头', ja: 'カメラ', ar: 'الكاميرا'
};
const CAM_NAMES: Record<Lang, string[]> = {
  es: ['Cabina', 'Persecución', 'Capó', 'Lejana', 'Cenital'],
  en: ['Cockpit', 'Chase', 'Hood', 'Far', 'Top'],
  pt: ['Cabine', 'Perseguição', 'Capô', 'Distante', 'Aérea'],
  fr: ['Cockpit', 'Poursuite', 'Capot', 'Éloignée', 'Dessus'],
  de: ['Cockpit', 'Verfolgung', 'Haube', 'Weit', 'Oben'],
  it: ['Abitacolo', 'Inseguimento', 'Cofano', 'Lontana', 'Dall’alto'],
  zh: ['驾驶舱', '追逐', '引擎盖', '远景', '俯视'],
  ja: ['コックピット', '追走', 'ボンネット', '遠距離', '俯瞰'],
  ar: ['المقصورة', 'المطاردة', 'غطاء المحرك', 'بعيدة', 'علوية']
};

const NAMES_KEY = 'gt-names';
const BEST_KEY = 'gt-bestlap-by-user';
const COLORS = ['#e10600', '#1e6fff', '#ffd400', '#22c55e', '#ffffff', '#f97316', '#ec4899', '#111827'];

type Status = 'menu' | 'count' | 'racing' | 'finished';
type Car = { x: number; z: number; ang: number; speed: number };
type Rival = { prog: number; rate: number; color: string };
type Best = Record<string, number>;

const dist2 = (ax: number, az: number, bx: number, bz: number) => (ax - bx) ** 2 + (az - bz) ** 2;

function distToRoad(px: number, pz: number): number {
  let best = Infinity;
  for (let i = 0; i < N; i++) {
    const a = WP[i];
    const b = WP[(i + 1) % N];
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    const len2 = dx * dx + dz * dz || 1;
    let t = ((px - a.x) * dx + (pz - a.z) * dz) / len2;
    t = Math.max(0, Math.min(1, t));
    const d = Math.hypot(px - (a.x + dx * t), pz - (a.z + dz * t));
    if (d < best) best = d;
  }
  return best;
}

const fmt = (ms: number) => {
  const s = Math.floor(ms / 1000);
  const cs = Math.floor((ms % 1000) / 10);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
};

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
  const [hud, setHud] = useState({ lap: 1, pos: 1, timeMs: 0, best: 0, count: 3 });
  const [camMode, setCamMode] = useState(0);
  const camModeRef = useRef(0);
  const [finalPos, setFinalPos] = useState(1);

  const [names, setNames] = useState<string[]>([]);
  const [selected, setSelected] = useState('');
  const [username, setUsername] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [color, setColor] = useState(THEME.playerCar);
  const [best, setBest] = useState<Best>({});

  const carRef = useRef<Car>({ x: WP[0].x, z: WP[0].z, ang: 0, speed: 0 });
  const keysRef = useRef({ up: false, down: false, left: false, right: false });
  const rivalsRef = useRef<Rival[]>([]);
  const angleAccumRef = useRef(0);
  const prevAngleRef = useRef(0);
  const lapRef = useRef(0);
  const startTimeRef = useRef(0);
  const lapStartRef = useRef(0);
  const bestLapRef = useRef(0);
  const countRef = useRef(0);
  const colorRef = useRef(color);
  colorRef.current = color;
  // Cockpit dashboard, updated imperatively each frame for smoothness.
  const wheelElRef = useRef<HTMLDivElement | null>(null);
  const speedElRef = useRef<HTMLSpanElement | null>(null);
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

  // ===== Gamepad: stick/A/RB drive; Y changes camera; Start races; B exits =====
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

  const startRace = () => {
    const name = selected || username;
    if (!name) return;
    setUsername(name);
    const ang = Math.atan2(WP[1].z - WP[0].z, WP[1].x - WP[0].x);
    carRef.current = { x: WP[0].x, z: WP[0].z, ang, speed: 0 };
    keysRef.current = { up: false, down: false, left: false, right: false };
    rivalsRef.current = THEME.rivalCars.map((c, i) => ({ prog: -1.2 * (i + 1), rate: 0.104 + i * 0.006, color: c }));
    angleAccumRef.current = 0;
    prevAngleRef.current = Math.atan2(WP[0].z, WP[0].x);
    lapRef.current = 0;
    bestLapRef.current = 0;
    countRef.current = 180;
    setFinalPos(1);
    setHud({ lap: 1, pos: 1, timeMs: 0, best: 0, count: 3 });
    statusRef.current = 'count';
    setStatus('count');
  };

  const stopToMenu = () => {
    statusRef.current = 'menu';
    setStatus('menu');
  };

  actionsRef.current = { start: startRace, exit: stopToMenu };

  // On-screen touch controls (mobile): press-and-hold sets the same key flags the
  // keyboard does, so phones drive with no keyboard or pad needed.
  const press = (key: 'up' | 'down' | 'left' | 'right', val: boolean) => (e: React.PointerEvent) => {
    e.preventDefault();
    keysRef.current[key] = val;
  };

  // ===== Three.js scene (built when a race starts, torn down back at the menu) =====
  useEffect(() => {
    if (status === 'menu') return;
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const sky = new THREE.Color(THEME.env.sky);
    scene.background = sky;
    scene.fog = new THREE.Fog(sky.getHex(), 520, 1500);

    const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 3000);
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

    // Lights (with a real sun casting soft shadows across the track)
    scene.add(new THREE.HemisphereLight(0xdfeeff, 0x24401f, 0.85));
    const sun = new THREE.DirectionalLight(0xffffff, 1.35);
    sun.position.set(260, 460, 180);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const sc = sun.shadow.camera as THREE.OrthographicCamera;
    sc.left = -580;
    sc.right = 580;
    sc.top = 580;
    sc.bottom = -580;
    sc.near = 50;
    sc.far = 1500;
    sc.updateProjectionMatrix();
    sun.shadow.bias = -0.0004;
    scene.add(sun);

    // Grass
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(5000, 5000),
      new THREE.MeshStandardMaterial({ color: new THREE.Color(THEME.env.grass) })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.1;
    ground.receiveShadow = true;
    scene.add(ground);

    // Road ribbon
    const pos: number[] = [];
    const idx: number[] = [];
    for (let i = 0; i < N; i++) {
      const a = WP[i];
      const b = WP[(i + 1) % N];
      const tx = b.x - a.x;
      const tz = b.z - a.z;
      const len = Math.hypot(tx, tz) || 1;
      const nx = -tz / len;
      const nz = tx / len;
      pos.push(a.x + nx * ROAD_HALF, 0, a.z + nz * ROAD_HALF);
      pos.push(a.x - nx * ROAD_HALF, 0, a.z - nz * ROAD_HALF);
    }
    for (let i = 0; i < N; i++) {
      const a = 2 * i;
      const b = 2 * i + 1;
      const c = (2 * (i + 1)) % (2 * N);
      const d = (2 * (i + 1) + 1) % (2 * N);
      idx.push(a, b, d, a, d, c);
    }
    const roadGeo = new THREE.BufferGeometry();
    roadGeo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    roadGeo.setIndex(idx);
    roadGeo.computeVertexNormals();
    const road = new THREE.Mesh(
      roadGeo,
      new THREE.MeshStandardMaterial({ color: new THREE.Color(THEME.env.road), roughness: 0.95, side: THREE.DoubleSide })
    );
    road.position.y = 0.02;
    road.receiveShadow = true;
    scene.add(road);

    // Red/white kerbs along both edges.
    const kerbGeo = new THREE.BoxGeometry(9, 0.6, 4);
    for (let i = 0; i < N; i++) {
      const a = WP[i];
      const b = WP[(i + 1) % N];
      const ka = Math.atan2(b.z - a.z, b.x - a.x);
      const nx = -Math.sin(ka);
      const nz = Math.cos(ka);
      const col = i % 2 === 0 ? 0xd83232 : 0xf2f2f2;
      for (const side of [1, -1]) {
        const kerb = new THREE.Mesh(kerbGeo, new THREE.MeshStandardMaterial({ color: col }));
        kerb.position.set(a.x + nx * ROAD_HALF * side, 0.28, a.z + nz * ROAD_HALF * side);
        kerb.rotation.y = -ka;
        scene.add(kerb);
      }
    }
    // Roadside trees.
    const trunkGeo = new THREE.CylinderGeometry(2, 2.6, 14, 6);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5b3b1a });
    const leafGeo = new THREE.ConeGeometry(11, 26, 7);
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x2f7d33 });
    for (let i = 0; i < N; i += 2) {
      const a = WP[i];
      const b = WP[(i + 1) % N];
      const ta = Math.atan2(b.z - a.z, b.x - a.x);
      const nx = -Math.sin(ta);
      const nz = Math.cos(ta);
      const off = ROAD_HALF + 60 + (i % 3) * 24;
      const tx = a.x + nx * off;
      const tz = a.z + nz * off;
      const trunk = new THREE.Mesh(trunkGeo, trunkMat);
      trunk.position.set(tx, 7, tz);
      trunk.castShadow = true;
      scene.add(trunk);
      const leaf = new THREE.Mesh(leafGeo, leafMat);
      leaf.position.set(tx, 24, tz);
      leaf.castShadow = true;
      scene.add(leaf);
    }
    // A couple of grandstands.
    const standMat = new THREE.MeshStandardMaterial({ color: 0xb8c2d0 });
    for (const gi of [Math.floor(N * 0.25), Math.floor(N * 0.7)]) {
      const a = WP[gi];
      const b = WP[(gi + 1) % N];
      const ga = Math.atan2(b.z - a.z, b.x - a.x);
      const nx = -Math.sin(ga);
      const nz = Math.cos(ga);
      const stand = new THREE.Mesh(new THREE.BoxGeometry(74, 22, 16), standMat);
      stand.position.set(a.x + nx * (ROAD_HALF + 42), 11, a.z + nz * (ROAD_HALF + 42));
      stand.rotation.y = -ga;
      stand.castShadow = true;
      stand.receiveShadow = true;
      scene.add(stand);
    }

    // Centre dashes + start line
    const dashMat = new THREE.MeshStandardMaterial({ color: 0xf5f5f5 });
    for (let i = 0; i < N; i += 2) {
      const a = WP[i];
      const b = WP[(i + 1) % N];
      const ang = Math.atan2(b.z - a.z, b.x - a.x);
      const dash = new THREE.Mesh(new THREE.BoxGeometry(14, 0.2, 2.4), dashMat);
      dash.position.set(a.x, 0.06, a.z);
      dash.rotation.y = -ang;
      scene.add(dash);
    }
    const sa = WP[0];
    const sb = WP[1];
    const sAng = Math.atan2(sb.z - sa.z, sb.x - sa.x);
    const startLine = new THREE.Mesh(
      new THREE.BoxGeometry(4, 0.25, ROAD_HALF * 2),
      new THREE.MeshStandardMaterial({ color: 0xffffff })
    );
    startLine.position.set(sa.x, 0.08, sa.z);
    startLine.rotation.y = -sAng;
    scene.add(startLine);

    // Cars
    const playerCar = makeCar(colorRef.current);
    scene.add(playerCar);
    const rivalCars = rivalsRef.current.map((r) => {
      const c = makeCar(r.color);
      scene.add(c);
      return c;
    });

    const fwd = new THREE.Vector3();
    const camPos = new THREE.Vector3();
    const lookAt = new THREE.Vector3();

    let raf = 0;
    let hudTick = 0;
    startTimeRef.current = performance.now();
    lapStartRef.current = performance.now();

    const placeAlong = (prog: number, mesh: THREE.Group) => {
      const pr = ((prog % N) + N) % N;
      const i0 = Math.floor(pr);
      const f = pr - i0;
      const p0 = WP[i0];
      const p1 = WP[(i0 + 1) % N];
      const x = p0.x + (p1.x - p0.x) * f;
      const z = p0.z + (p1.z - p0.z) * f;
      mesh.position.set(x, 0, z);
      mesh.rotation.y = -Math.atan2(p1.z - p0.z, p1.x - p0.x);
    };

    const update = () => {
      const st = statusRef.current;
      if (st === 'count') {
        countRef.current -= 1;
        if (countRef.current <= 0) {
          statusRef.current = 'racing';
          setStatus('racing');
          startTimeRef.current = performance.now();
          lapStartRef.current = performance.now();
        }
      } else if (st === 'racing') {
        const car = carRef.current;
        const k = keysRef.current;
        const off = distToRoad(car.x, car.z) > ROAD_HALF;
        const max = off ? GRASS_MAX : MAX_SPEED;
        // Auto-throttle: the car always rolls forward, so you can steer with just
        // the arrow keys the moment the race starts. Up is a boost, Down brakes.
        if (k.down) car.speed -= BRAKE;
        else car.speed += ACCEL * (k.up ? 1 : 0.5);
        car.speed -= DRAG * car.speed;
        if (off && car.speed > GRASS_MAX) car.speed -= 0.08;
        car.speed = Math.max(-2.2, Math.min(max, car.speed));
        const steer = (k.left ? -1 : 0) + (k.right ? 1 : 0);
        if (Math.abs(car.speed) > 0.25) {
          car.ang += steer * TURN * Math.min(1, Math.abs(car.speed) / 3) * Math.sign(car.speed);
        }
        car.x += Math.cos(car.ang) * car.speed;
        car.z += Math.sin(car.ang) * car.speed;

        // Lap tracking by the angle swept around the track centre — robust (no
        // missed checkpoints), so the race always finishes after LAPS laps.
        const a = Math.atan2(car.z, car.x);
        let d = a - prevAngleRef.current;
        if (d > Math.PI) d -= 2 * Math.PI;
        else if (d < -Math.PI) d += 2 * Math.PI;
        angleAccumRef.current += d;
        prevAngleRef.current = a;
        const lapsDone = Math.floor(Math.max(0, angleAccumRef.current) / (2 * Math.PI));
        if (lapsDone > lapRef.current) {
          lapRef.current = lapsDone;
          const now = performance.now();
          const lapMs = now - lapStartRef.current;
          lapStartRef.current = now;
          if (bestLapRef.current === 0 || lapMs < bestLapRef.current) bestLapRef.current = lapMs;
          if (lapRef.current >= LAPS) {
            const playerLaps = Math.max(0, angleAccumRef.current) / (2 * Math.PI);
            const ahead = rivalsRef.current.filter((r) => r.prog / N > playerLaps).length;
            setFinalPos(ahead + 1);
            const nm = selected || username;
            if (nm && bestLapRef.current > 0) {
              setBest((prev) => {
                const cur = prev[nm];
                if (cur && cur <= bestLapRef.current) return prev;
                const next = { ...prev, [nm]: bestLapRef.current };
                localStorage.setItem(BEST_KEY, JSON.stringify(next));
                return next;
              });
            }
            statusRef.current = 'finished';
            setStatus('finished');
          }
        }
        for (const r of rivalsRef.current) r.prog += r.rate;
      }

      // Sync meshes
      playerCar.position.set(carRef.current.x, 0, carRef.current.z);
      playerCar.rotation.y = -carRef.current.ang;
      rivalsRef.current.forEach((r, i) => placeAlong(Math.max(0, r.prog), rivalCars[i]));

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
      if (statusRef.current === 'racing' && ++hudTick % 6 === 0) {
        const prog = Math.max(0, angleAccumRef.current) / (2 * Math.PI);
        const ahead = rivalsRef.current.filter((r) => r.prog / N > prog).length;
        setHud({
          lap: Math.min(LAPS, lapRef.current + 1),
          pos: ahead + 1,
          timeMs: performance.now() - startTimeRef.current,
          best: bestLapRef.current,
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
  const camName = CAM_NAMES[lang][camMode];

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
                    {best[n] ? <span className="chip-best">⏱ {fmt(best[n])}</span> : null}
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

          <button className="btn primary big" onClick={startRace} disabled={!selected}>
            {s.start}
          </button>
          {selected && (
            <p className="best-line">
              {s.playingAs} <strong>{selected}</strong>
              {best[selected] ? ` · ${s.bestLap} ${fmt(best[selected])}` : ''}
            </p>
          )}
        </div>
      </div>
    );
  }

  // ===================== RACE (3D) =====================
  return (
    <div className="shell">
      <header className="bar">
        <span className="tag">🏁 {username}</span>
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
          <span>{s.pos}</span>
          <strong>{hud.pos}/4</strong>
        </div>
        <div className="hud-chip">
          <span>{s.lap}</span>
          <strong>{hud.lap}/{LAPS}</strong>
        </div>
        <div className="hud-chip">
          <span>{s.time}</span>
          <strong>{fmt(hud.timeMs)}</strong>
        </div>
        <div className="hud-chip">
          <span>{s.bestLap}</span>
          <strong>{hud.best ? fmt(hud.best) : '—'}</strong>
        </div>
      </div>

      <div className="stage">
        <div ref={mountRef} className="scene3d" />
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
              <h2>{finalPos === 1 ? s.won : s.finishPos(finalPos)}</h2>
              <div className="ov-row">
                <div>
                  <span>{s.pos}</span>
                  <strong>{s.finishPos(finalPos)}</strong>
                </div>
                <div>
                  <span>{s.bestLap}</span>
                  <strong>{myBest ? fmt(myBest) : fmt(hud.best)}</strong>
                </div>
              </div>
              <div className="ov-actions">
                <button className="btn primary" onClick={startRace}>
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
