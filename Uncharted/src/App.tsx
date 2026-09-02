import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './App.css';
import { THEME } from './theme';
import { LANGS, RTL_LANGS, STR, initialLang, saveLang, type Lang } from './i18n';
import { startGamepad, bridgeGamepadToKeys } from './gamepad';

// ===== The course: floating sandstone platforms over a void, leading to the
// golden treasure. Each platform is defined by a centre (x,z), a TOP height (y)
// and half-extents (hw, hd). The adventurer walks on the top surface. =====
type Plat = { x: number; y: number; z: number; hw: number; hd: number };
const PLATFORMS: Plat[] = [
  { x: 0, y: 0.0, z: 0, hw: 3.6, hd: 3.6 }, // start
  { x: 0, y: 0.4, z: 8, hw: 3.0, hd: 3.0 },
  { x: 4, y: 1.2, z: 15, hw: 2.8, hd: 2.8 },
  { x: 1, y: 0.6, z: 22, hw: 2.6, hd: 2.6 },
  { x: -3, y: 1.8, z: 29, hw: 2.8, hd: 2.8 },
  { x: -6, y: 1.0, z: 36.5, hw: 2.6, hd: 2.6 },
  { x: -2, y: 2.6, z: 43.5, hw: 2.6, hd: 2.6 },
  { x: 3, y: 2.0, z: 50.5, hw: 2.8, hd: 2.8 },
  { x: 6, y: 3.4, z: 57.5, hw: 2.6, hd: 2.6 },
  { x: 2, y: 2.2, z: 65, hw: 2.6, hd: 2.6 },
  { x: -3, y: 3.6, z: 72, hw: 2.8, hd: 2.8 },
  { x: 0, y: 3.0, z: 80, hw: 3.4, hd: 3.4 },
  { x: 0, y: 3.4, z: 90, hw: 5.0, hd: 5.0 } // goal (treasure)
];
const GOAL = PLATFORMS[PLATFORMS.length - 1];

// Coins sit above a handful of platforms; walking into one collects it.
const COIN_ON = [1, 3, 5, 7, 9, 11];
type Coin = { x: number; y: number; z: number };
const COINS: Coin[] = COIN_ON.map((i) => ({ x: PLATFORMS[i].x, y: PLATFORMS[i].y + 1.5, z: PLATFORMS[i].z }));

// ===== Physics (frame-based, ~60fps) =====
const MOVE = 0.18; // horizontal speed (world units / frame)
const GRAVITY = 0.024;
const JUMP = 0.47;
const MAX_FALL = -0.85;
const VOID_Y = -20; // below this → respawn at the last platform stood on

const NAMES_KEY = 'unch-names';
const BEST_KEY = 'unch-best-by-user';

type Status = 'menu' | 'count' | 'playing' | 'won';
type Best = Record<string, number>;

const fmt = (ms: number) => {
  const s = Math.floor(ms / 1000);
  const cs = Math.floor((ms % 1000) / 10);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
};

// A blocky adventurer: legs, torso, arms, a head and a wide-brimmed hat, with a
// small nose marking the +Z "forward" so his facing is readable as he turns.
function makeHero(): THREE.Group {
  const g = new THREE.Group();
  const shirt = new THREE.MeshStandardMaterial({ color: new THREE.Color(THEME.hero), roughness: 0.7, metalness: 0.05 });
  const pants = new THREE.MeshStandardMaterial({ color: 0x3a2712, roughness: 0.8 });
  const skin = new THREE.MeshStandardMaterial({ color: 0xd9a066, roughness: 0.6 });
  const hat = new THREE.MeshStandardMaterial({ color: 0x4a3016, roughness: 0.75 });

  const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.6, 0.3), pants);
  leftLeg.position.set(-0.17, 0.3, 0);
  const rightLeg = leftLeg.clone();
  rightLeg.position.x = 0.17;
  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.78, 0.42), shirt);
  torso.position.set(0, 0.99, 0);
  const pack = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.55, 0.24), pants);
  pack.position.set(0, 1.0, -0.32);
  const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.62, 0.22), shirt);
  leftArm.position.set(-0.47, 0.99, 0);
  const rightArm = leftArm.clone();
  rightArm.position.x = 0.47;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 18, 14), skin);
  head.position.set(0, 1.68, 0);
  const nose = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.12), skin);
  nose.position.set(0, 1.66, 0.3);
  const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.07, 18), hat);
  brim.position.set(0, 1.82, 0);
  const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.3, 0.26, 18), hat);
  crown.position.set(0, 1.96, 0);

  for (const m of [leftLeg, rightLeg, torso, pack, leftArm, rightArm, head, nose, brim, crown]) {
    m.castShadow = true;
    g.add(m);
  }
  return g;
}

function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const s = STR[lang];

  const mountRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<Status>('menu');
  const statusRef = useRef<Status>('menu');
  const [hud, setHud] = useState({ score: 0, treasures: 0, timeMs: 0, best: 0, count: 3 });
  const [result, setResult] = useState({ score: 0, treasures: 0, timeMs: 0 });
  const [showFell, setShowFell] = useState(false);

  const [names, setNames] = useState<string[]>([]);
  const [selected, setSelected] = useState('');
  const [username, setUsername] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [best, setBest] = useState<Best>({});

  // ===== Live game state (mutated inside the rAF loop) =====
  const posRef = useRef({ x: 0, y: 0, z: 0 });
  const velYRef = useRef(0);
  const groundedRef = useRef(true);
  const groundIndexRef = useRef(0);
  const facingRef = useRef(0);
  const keysRef = useRef({ up: false, down: false, left: false, right: false });
  const jumpReqRef = useRef(false);
  const spaceDownRef = useRef(false);
  const coinsRef = useRef(0);
  const collectedRef = useRef<boolean[]>([]);
  const scoreRef = useRef(0);
  const startTimeRef = useRef(0);
  const countRef = useRef(0);
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

  // ===== Keyboard: WASD/arrows move, Space jumps =====
  useEffect(() => {
    const set = (e: KeyboardEvent, down: boolean) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'SELECT')) return;
      const k = e.key;
      if (k === 'ArrowUp' || k === 'w' || k === 'W') keysRef.current.up = down;
      else if (k === 'ArrowDown' || k === 's' || k === 'S') keysRef.current.down = down;
      else if (k === 'ArrowLeft' || k === 'a' || k === 'A') keysRef.current.left = down;
      else if (k === 'ArrowRight' || k === 'd' || k === 'D') keysRef.current.right = down;
      else if (k === ' ' || e.code === 'Space') {
        if (down) {
          if (!spaceDownRef.current) {
            spaceDownRef.current = true;
            jumpReqRef.current = true;
          }
        } else {
          spaceDownRef.current = false;
        }
      } else return;
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

  // ===== Gamepad: stick/d-pad move, A jumps (via key bridge); Start plays, B exits =====
  useEffect(() => {
    const stopKeys = bridgeGamepadToKeys({
      up: 'ArrowUp',
      down: 'ArrowDown',
      left: 'ArrowLeft',
      right: 'ArrowRight',
      A: ' '
    });
    const stopPad = startGamepad({
      onButton: (b) => {
        const a = actionsRef.current;
        const st = statusRef.current;
        if (b === 'start') {
          if ((st === 'menu' || st === 'won') && a) a.start();
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

  const startGame = () => {
    const name = selected || username;
    if (!name) return;
    setUsername(name);
    const p0 = PLATFORMS[0];
    posRef.current = { x: p0.x, y: p0.y, z: p0.z };
    velYRef.current = 0;
    groundedRef.current = true;
    groundIndexRef.current = 0;
    facingRef.current = 0;
    keysRef.current = { up: false, down: false, left: false, right: false };
    jumpReqRef.current = false;
    coinsRef.current = 0;
    scoreRef.current = 0;
    collectedRef.current = COINS.map(() => false);
    countRef.current = 150;
    setShowFell(false);
    setHud({ score: 0, treasures: 0, timeMs: 0, best: 0, count: 3 });
    statusRef.current = 'count';
    setStatus('count');
  };

  const stopToMenu = () => {
    statusRef.current = 'menu';
    setStatus('menu');
  };

  actionsRef.current = { start: startGame, exit: stopToMenu };

  // On-screen touch controls: press-and-hold sets the same flags the keyboard does.
  const press = (key: 'up' | 'down' | 'left' | 'right', val: boolean) => (e: React.PointerEvent) => {
    e.preventDefault();
    keysRef.current[key] = val;
  };
  const jumpTouch = (e: React.PointerEvent) => {
    e.preventDefault();
    jumpReqRef.current = true;
  };

  // ===== Three.js scene (built when a run starts, torn down back at the menu) =====
  useEffect(() => {
    if (status === 'menu') return;
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const sky = new THREE.Color('#c9772f');
    scene.background = sky;
    scene.fog = new THREE.Fog(sky.getHex(), 70, 200);

    const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 1000);
    camera.position.set(0, 7, -12);

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

    // Lights: warm sunset sky + a low golden sun casting soft shadows.
    scene.add(new THREE.HemisphereLight(0xffd8a0, 0x2a1608, 0.85));
    const sun = new THREE.DirectionalLight(0xffe0b0, 1.5);
    sun.position.set(-40, 70, -30);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const sc = sun.shadow.camera as THREE.OrthographicCamera;
    sc.left = -70;
    sc.right = 70;
    sc.top = 70;
    sc.bottom = -70;
    sc.near = 10;
    sc.far = 260;
    sc.updateProjectionMatrix();
    sun.shadow.bias = -0.0005;
    scene.add(sun);

    // A dark "void" plane far below, to sell the drop.
    const mist = new THREE.Mesh(
      new THREE.PlaneGeometry(600, 600),
      new THREE.MeshStandardMaterial({ color: 0x1b0f06 })
    );
    mist.rotation.x = -Math.PI / 2;
    mist.position.y = -16;
    scene.add(mist);

    // Platforms (sandstone) with a slightly darker underside band.
    const stoneA = new THREE.MeshStandardMaterial({ color: 0xcaa768, roughness: 0.95 });
    const stoneB = new THREE.MeshStandardMaterial({ color: 0xb08e52, roughness: 0.95 });
    PLATFORMS.forEach((p, i) => {
      const isGoal = i === PLATFORMS.length - 1;
      const th = 1.6;
      const box = new THREE.Mesh(
        new THREE.BoxGeometry(p.hw * 2, th, p.hd * 2),
        isGoal ? new THREE.MeshStandardMaterial({ color: 0xd8b877, roughness: 0.9 }) : i % 2 === 0 ? stoneA : stoneB
      );
      box.position.set(p.x, p.y - th / 2, p.z);
      box.castShadow = true;
      box.receiveShadow = true;
      scene.add(box);
    });

    // Ruined pillars flanking the path — pure flavour (no collision).
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x9c7d48, roughness: 0.95 });
    for (let k = 0; k < 9; k++) {
      const side = k % 2 === 0 ? 1 : -1;
      const z = 6 + k * 10;
      const x = side * (9 + (k % 3) * 2.5);
      const h = 9 + ((k * 3) % 5) * 2.2;
      const pil = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.35, h, 12), pillarMat);
      pil.position.set(x, -10 + h / 2, z);
      pil.castShadow = true;
      pil.receiveShadow = true;
      scene.add(pil);
      const cap = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.7, 3.2), pillarMat);
      cap.position.set(x, -10 + h + 0.35, z);
      cap.castShadow = true;
      scene.add(cap);
    }

    // Coins (spinning, emissive gold).
    const coinGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.12, 20);
    const coinMat = new THREE.MeshStandardMaterial({
      color: 0xf0c060,
      emissive: 0xf0c060,
      emissiveIntensity: 0.55,
      metalness: 0.7,
      roughness: 0.3
    });
    const coinMeshes = COINS.map((c) => {
      const m = new THREE.Mesh(coinGeo, coinMat);
      m.rotation.x = Math.PI / 2; // stand it up like a wheel
      m.position.set(c.x, c.y, c.z);
      m.castShadow = true;
      scene.add(m);
      return m;
    });

    // Treasure: a golden chest with a glowing aura + a warm point light.
    const treasure = new THREE.Group();
    const chest = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 1.1, 1.2),
      new THREE.MeshStandardMaterial({ color: 0xf0c060, emissive: 0x6b4a12, emissiveIntensity: 0.5, metalness: 0.85, roughness: 0.25 })
    );
    chest.position.y = 0.8;
    chest.castShadow = true;
    treasure.add(chest);
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(1.3, 20, 16),
      new THREE.MeshBasicMaterial({ color: 0xffe8a0, transparent: true, opacity: 0.28 })
    );
    glow.position.y = 1.2;
    treasure.add(glow);
    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(0.5, 1.1, 10, 16, 1, true),
      new THREE.MeshBasicMaterial({ color: 0xffdf8a, transparent: true, opacity: 0.14, side: THREE.DoubleSide })
    );
    beam.position.y = 6;
    treasure.add(beam);
    const tLight = new THREE.PointLight(0xffd070, 1.6, 26, 2);
    tLight.position.set(0, 2.4, 0);
    treasure.add(tLight);
    treasure.position.set(GOAL.x, GOAL.y, GOAL.z);
    scene.add(treasure);

    // The adventurer.
    const hero = makeHero();
    scene.add(hero);

    const camTarget = new THREE.Vector3();
    const camDesired = new THREE.Vector3();
    let raf = 0;
    let frame = 0;
    let hudTick = 0;
    let lastFall = 0;

    const insidePlat = (p: Plat, x: number, z: number) => x >= p.x - p.hw && x <= p.x + p.hw && z >= p.z - p.hd && z <= p.z + p.hd;

    const win = () => {
      const timeMs = performance.now() - startTimeRef.current;
      const timeBonus = Math.max(0, Math.round((120000 - timeMs) / 200));
      const finalScore = coinsRef.current * 100 + 500 + timeBonus;
      scoreRef.current = finalScore;
      setResult({ score: finalScore, treasures: coinsRef.current, timeMs });
      const nm = selected || username;
      if (nm) {
        setBest((prev) => {
          if (prev[nm] && prev[nm] >= finalScore) return prev;
          const next = { ...prev, [nm]: finalScore };
          localStorage.setItem(BEST_KEY, JSON.stringify(next));
          return next;
        });
      }
      statusRef.current = 'won';
      setStatus('won');
    };

    const update = () => {
      frame++;
      const st = statusRef.current;
      const pos = posRef.current;

      if (st === 'count') {
        countRef.current -= 1;
        if (countRef.current <= 0) {
          statusRef.current = 'playing';
          setStatus('playing');
          startTimeRef.current = performance.now();
        }
      } else if (st === 'playing') {
        const k = keysRef.current;
        // World-direction movement (up = +Z, away from the trailing camera).
        let mx = (k.right ? 1 : 0) - (k.left ? 1 : 0);
        let mz = (k.up ? 1 : 0) - (k.down ? 1 : 0);
        if (mx !== 0 && mz !== 0) {
          const inv = 1 / Math.SQRT2;
          mx *= inv;
          mz *= inv;
        }

        // Jump (only from the ground).
        if (groundedRef.current && jumpReqRef.current) {
          velYRef.current = JUMP;
          groundedRef.current = false;
        }
        jumpReqRef.current = false;

        pos.x += mx * MOVE;
        pos.z += mz * MOVE;

        // Gravity + vertical integration.
        velYRef.current = Math.max(MAX_FALL, velYRef.current - GRAVITY);
        const prevFeet = pos.y;
        pos.y += velYRef.current;

        // Landing: snap to a platform top when descending onto it.
        let landed = false;
        if (velYRef.current <= 0) {
          for (let i = 0; i < PLATFORMS.length; i++) {
            const p = PLATFORMS[i];
            if (insidePlat(p, pos.x, pos.z) && pos.y <= p.y && prevFeet >= p.y - 1.0) {
              pos.y = p.y;
              velYRef.current = 0;
              landed = true;
              groundIndexRef.current = i;
              break;
            }
          }
        }
        groundedRef.current = landed;

        // Fell into the void → respawn on the last platform stood on.
        if (pos.y < VOID_Y) {
          const p = PLATFORMS[groundIndexRef.current];
          pos.x = p.x;
          pos.z = p.z;
          pos.y = p.y;
          velYRef.current = 0;
          groundedRef.current = true;
          const now = performance.now();
          if (now - lastFall > 400) {
            lastFall = now;
            setShowFell(true);
            window.setTimeout(() => setShowFell(false), 1200);
          }
        }

        // Collect coins.
        for (let i = 0; i < COINS.length; i++) {
          if (collectedRef.current[i]) continue;
          const c = COINS[i];
          const dx = pos.x - c.x;
          const dz = pos.z - c.z;
          if (dx * dx + dz * dz < 1.5 && Math.abs(pos.y + 1 - c.y) < 2.2) {
            collectedRef.current[i] = true;
            coinMeshes[i].visible = false;
            coinsRef.current += 1;
            scoreRef.current += 100;
          }
        }

        // Reached the treasure → win.
        const gdx = pos.x - GOAL.x;
        const gdz = pos.z - GOAL.z;
        if (gdx * gdx + gdz * gdz < 2.4 * 2.4) win();

        // Face the movement direction (smoothed).
        if (mx !== 0 || mz !== 0) {
          const target = Math.atan2(mx, mz);
          let d = target - facingRef.current;
          while (d > Math.PI) d -= Math.PI * 2;
          while (d < -Math.PI) d += Math.PI * 2;
          facingRef.current += d * 0.25;
        }
      }

      // Sync hero mesh.
      hero.position.set(pos.x, pos.y, pos.z);
      hero.rotation.y = facingRef.current;

      // Spin coins + treasure.
      const spin = frame * 0.06;
      for (let i = 0; i < coinMeshes.length; i++) {
        const m = coinMeshes[i];
        if (!m.visible) continue;
        m.rotation.y = spin;
        m.position.y = COINS[i].y + Math.sin(frame * 0.05 + i) * 0.15;
      }
      chest.rotation.y = Math.sin(frame * 0.02) * 0.12;
      glow.scale.setScalar(1 + Math.sin(frame * 0.06) * 0.08);

      // Trailing third-person chase camera (behind in -Z, elevated).
      camTarget.set(pos.x, pos.y + 1.2, pos.z);
      camDesired.set(pos.x, pos.y + 6, pos.z - 10);
      camera.position.lerp(camDesired, 0.1);
      camera.lookAt(camTarget.x, camTarget.y + 0.4, camTarget.z + 2);
    };

    const loop = () => {
      update();
      renderer.render(scene, camera);
      if (++hudTick % 6 === 0) {
        const st = statusRef.current;
        if (st === 'playing') {
          setHud({
            score: scoreRef.current,
            treasures: coinsRef.current,
            timeMs: performance.now() - startTimeRef.current,
            best: 0,
            count: 0
          });
        } else if (st === 'count') {
          setHud((h) => ({ ...h, count: Math.ceil(countRef.current / 60) }));
        }
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
                    {best[n] ? <span className="chip-best">🏆 {best[n]}</span> : null}
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

          <button className="btn primary big" onClick={startGame} disabled={!selected}>
            {s.start}
          </button>
          {selected && (
            <p className="best-line">
              {s.playingAs} <strong>{selected}</strong>
              {best[selected] ? ` · ${s.best} ${best[selected]}` : ''}
            </p>
          )}
        </div>
      </div>
    );
  }

  // ===================== GAME (3D) =====================
  return (
    <div className="shell">
      <header className="bar">
        <span className="tag">🗺️ {username}</span>
        <div className="bar-right">
          <button className="stop" onClick={stopToMenu}>
            {s.stop}
          </button>
        </div>
      </header>

      <div className="hud">
        <div className="hud-chip">
          <span>{s.score}</span>
          <strong>{hud.score}</strong>
        </div>
        <div className="hud-chip">
          <span>{s.treasures}</span>
          <strong>{hud.treasures}/{COINS.length}</strong>
        </div>
        <div className="hud-chip">
          <span>{s.time}</span>
          <strong>{fmt(hud.timeMs)}</strong>
        </div>
        <div className="hud-chip">
          <span>{s.best}</span>
          <strong>{myBest || '—'}</strong>
        </div>
      </div>

      <div className="stage">
        <div ref={mountRef} className="scene3d" />

        {status !== 'won' && (
          <div className="touch">
            <div className="touch-pad">
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
            <button className="tbtn jump" aria-label="jump" onPointerDown={jumpTouch}>
              ⤴
            </button>
          </div>
        )}

        {showFell && status === 'playing' && (
          <div className="flash" aria-hidden>
            <span>{s.fell}</span>
          </div>
        )}

        {status === 'count' && (
          <div className="count" aria-hidden>
            <span>{hud.count > 0 ? hud.count : s.go}</span>
          </div>
        )}

        {status === 'won' && (
          <div className="overlay">
            <div className="card">
              <p className="ov-eyebrow">{s.finish}</p>
              <h2>{s.won}</h2>
              <div className="ov-row">
                <div>
                  <span>{s.score}</span>
                  <strong>{result.score}</strong>
                </div>
                <div>
                  <span>{s.treasures}</span>
                  <strong>{result.treasures}/{COINS.length}</strong>
                </div>
                <div>
                  <span>{s.time}</span>
                  <strong>{fmt(result.timeMs)}</strong>
                </div>
              </div>
              <div className="ov-actions">
                <button className="btn primary" onClick={startGame}>
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

      <p className="hint">{s.hint}</p>
    </div>
  );
}

export default App;
