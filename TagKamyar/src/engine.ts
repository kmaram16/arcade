import * as THREE from 'three';
import { Runner, type Palette } from './skins';
import { WORLDS, type WorldTheme } from './worlds';

export type Stats = { distance: number; coins: number; world: string; chase: number };
export type Callbacks = {
  onStats: (s: Stats) => void;
  onDead: (s: { distance: number; coins: number }) => void;
};

const LANES = [-2, 0, 2];
const GROUND_W = 7.2;
const SPAWN_Z = -85;
const CULL_Z = 12;
const ROW_GAP = 13; // world-units between spawned rows (bigger = easier)
const WORLD_DIST = 200; // metres before the world changes
const GRAVITY = 40;
const JUMP_V = 15;
const SLIDE_TIME = 0.7;

type Obstacle = { mesh: THREE.Object3D; lane: number; type: 'low' | 'high'; z: number; resolved: boolean };
type Coin = { mesh: THREE.Mesh; lane: number; z: number; taken: boolean };
type Decor = { mesh: THREE.Object3D; z: number };

// A tiny WebAudio blip generator — no assets, just cheerful arcade sounds.
class Sfx {
  private ctx: AudioContext | null = null;
  muted = false;
  private ensure() {
    if (!this.ctx) this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    return this.ctx;
  }
  play(freq: number, dur: number, type: OscillatorType = 'square', vol = 0.05) {
    if (this.muted) return;
    try {
      const ctx = this.ensure();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = type;
      o.frequency.value = freq;
      g.gain.setValueAtTime(vol, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
      o.connect(g).connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + dur);
    } catch {
      /* audio not available */
    }
  }
  coin() {
    this.play(880, 0.08, 'square');
    this.play(1320, 0.09, 'square');
  }
  jump() {
    this.play(520, 0.12, 'sine', 0.04);
  }
  hit() {
    this.play(140, 0.18, 'sawtooth', 0.06);
  }
  caught() {
    this.play(200, 0.3, 'sawtooth', 0.07);
    this.play(120, 0.5, 'sawtooth', 0.06);
  }
}

export class Game {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private clock = { last: 0 };
  private raf = 0;
  private running = false;
  paused = false;

  private player: Runner;
  private norberto: Runner;
  private sfx = new Sfx();

  // Player kinematics
  private laneIndex = 1;
  private px = 0;
  private py = 0; // feet height above ground
  private vy = 0;
  private jumping = false;
  private slideTimer = 0;
  private stumble = 0;

  // World scroll
  private speed = 16;
  private distance = 0;
  private coins = 0;
  private nextRowDist = 22;
  private worldIndex = 0;

  // Chaser
  private chaseGap = 5.2;
  private caught = false;

  private obstacles: Obstacle[] = [];
  private coinList: Coin[] = [];
  private decor: Decor[] = [];
  private stripes: THREE.Mesh[] = [];

  // Shared, theme-tinted materials
  private groundMat: THREE.MeshStandardMaterial;
  private obstacleMat: THREE.MeshStandardMaterial;
  private barMat: THREE.MeshStandardMaterial;
  private coinMat: THREE.MeshStandardMaterial;
  private stripeMat: THREE.MeshStandardMaterial;
  private decorMat: THREE.MeshStandardMaterial;
  private fog: THREE.Fog;

  // Shared geometry
  private blockGeo = new THREE.BoxGeometry(1.5, 1.05, 1.0);
  private barGeo = new THREE.BoxGeometry(GROUND_W, 0.45, 0.7);
  private coinGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.08, 18);
  private decorGeo = new THREE.BoxGeometry(1, 1, 1);

  // Colour lerp targets
  private curSky = new THREE.Color();
  private tgtSky = new THREE.Color();

  private shake = 0;
  private readonly cb: Callbacks;
  private lastStatWorld = '';
  private statAcc = 0;

  // Touch swipe tracking (mobile). We remember where a touch began so we can
  // read its *direction* on release — a swipe left really moves left.
  private touchStart: { x: number; y: number; t: number } | null = null;

  constructor(canvas: HTMLCanvasElement, palette: Palette, cb: Callbacks) {
    this.cb = cb;
    const theme = WORLDS[0];

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.camera = new THREE.PerspectiveCamera(62, 1, 0.1, 200);
    this.camera.position.set(0, 3.7, 7.2);
    this.camera.lookAt(0, 1.3, -6);

    this.curSky.set(theme.sky);
    this.tgtSky.set(theme.sky);
    this.scene.background = this.curSky;
    this.fog = new THREE.Fog(new THREE.Color(theme.fog).getHex(), 22, 78);
    this.scene.fog = this.fog;

    // Lights
    const hemi = new THREE.HemisphereLight(0xffffff, 0x445566, 1.0);
    this.scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xffffff, 1.5);
    sun.position.set(6, 14, 6);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 40;
    sun.shadow.camera.left = -10;
    sun.shadow.camera.right = 10;
    sun.shadow.camera.top = 12;
    sun.shadow.camera.bottom = -6;
    this.scene.add(sun);
    this.scene.add(sun.target);

    // Materials
    this.groundMat = new THREE.MeshStandardMaterial({ color: theme.ground, roughness: 0.95 });
    this.obstacleMat = new THREE.MeshStandardMaterial({ color: theme.obstacle, roughness: 0.6 });
    this.barMat = new THREE.MeshStandardMaterial({ color: theme.obstacle, roughness: 0.5, metalness: 0.2 });
    this.coinMat = new THREE.MeshStandardMaterial({ color: '#fbbf24', roughness: 0.3, metalness: 0.6, emissive: '#7c4a03' });
    this.stripeMat = new THREE.MeshStandardMaterial({ color: theme.lane, roughness: 0.6 });
    this.decorMat = new THREE.MeshStandardMaterial({ color: theme.decor, roughness: 0.9 });

    // Ground
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(GROUND_W, 220), this.groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.z = -85;
    ground.receiveShadow = true;
    this.scene.add(ground);

    // Side skirts (darker rails so the track reads clearly)
    for (const sx of [-1, 1]) {
      const rail = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 0.5, 220),
        new THREE.MeshStandardMaterial({ color: '#0f172a', roughness: 0.9, transparent: true, opacity: 0.25 })
      );
      rail.position.set(sx * (GROUND_W / 2 + 0.1), 0.25, -85);
      this.scene.add(rail);
    }

    // Moving lane stripes for a sense of speed
    for (let i = 0; i < 26; i++) {
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(GROUND_W, 0.02, 0.5), this.stripeMat);
      stripe.position.set(0, 0.02, -i * 4);
      this.scene.add(stripe);
      this.stripes.push(stripe);
    }

    // Side decor
    for (let i = 0; i < 24; i++) {
      this.spawnDecor(-i * 7 - 4);
    }

    // Player
    this.player = new Runner(palette);
    this.player.group.position.set(0, 0, 0);
    this.scene.add(this.player.group);

    // Norberto the chaser — the arcade's recurring villain
    this.norberto = new Runner({
      skin: '#86efac',
      hair: '#0b0b0b',
      eyes: '#ef4444',
      shirt: '#4c1d95',
      pants: '#1e1b4b',
      headband: '#7f1d1d'
    });
    this.norberto.group.position.set(0, 0, this.chaseGap);
    this.scene.add(this.norberto.group);

    this.applyTheme(theme, true);
  }

  // ---- public controls ----
  start() {
    if (this.running) return;
    this.running = true;
    this.resize();
    window.addEventListener('resize', this.resize);
    window.addEventListener('keydown', this.onKey);
    const el = this.renderer.domElement;
    el.addEventListener('pointerdown', this.onPointerDown);
    el.addEventListener('pointerup', this.onPointerUp);
    el.addEventListener('pointercancel', this.onPointerCancel);
    this.clock.last = performance.now();
    this.raf = requestAnimationFrame(this.loop);
  }

  setMuted(m: boolean) {
    this.sfx.muted = m;
  }

  setPaused(p: boolean) {
    this.paused = p;
    if (!p) this.clock.last = performance.now();
  }

  jump = () => {
    if (this.caught || this.paused) return;
    if (!this.jumping && this.py <= 0.001 && this.slideTimer <= 0) {
      this.vy = JUMP_V;
      this.jumping = true;
      this.sfx.jump();
    }
  };

  slide = () => {
    if (this.caught || this.paused) return;
    if (!this.jumping && this.py <= 0.001) {
      this.slideTimer = SLIDE_TIME;
    }
  };

  moveLane = (dir: -1 | 1) => {
    if (this.caught || this.paused) return;
    this.laneIndex = Math.max(0, Math.min(2, this.laneIndex + dir));
  };

  dispose() {
    this.running = false;
    cancelAnimationFrame(this.raf);
    window.removeEventListener('resize', this.resize);
    window.removeEventListener('keydown', this.onKey);
    const el = this.renderer.domElement;
    el.removeEventListener('pointerdown', this.onPointerDown);
    el.removeEventListener('pointerup', this.onPointerUp);
    el.removeEventListener('pointercancel', this.onPointerCancel);
    this.player.dispose();
    this.norberto.dispose();
    this.scene.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.geometry) m.geometry.dispose();
    });
    [this.groundMat, this.obstacleMat, this.barMat, this.coinMat, this.stripeMat, this.decorMat].forEach((m) =>
      m.dispose()
    );
    this.renderer.dispose();
  }

  // ---- input ----
  private onKey = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
      case ' ':
        e.preventDefault();
        this.jump();
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        e.preventDefault();
        this.slide();
        break;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        this.moveLane(-1);
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        this.moveLane(1);
        break;
    }
  };

  // Mobile players swipe, so we must read the *direction* of the gesture, not
  // where the finger first landed. (The old code used the touch-start position
  // as a tap zone — a swipe-left starts on the right of the screen, so it read
  // as "tap right" and moved the wrong way. That's why it felt reversed.)
  private onPointerDown = (e: PointerEvent) => {
    this.touchStart = { x: e.clientX, y: e.clientY, t: performance.now() };
  };

  private onPointerCancel = () => {
    this.touchStart = null;
  };

  private onPointerUp = (e: PointerEvent) => {
    const s = this.touchStart;
    if (!s) return;
    this.touchStart = null;
    const dx = e.clientX - s.x;
    const dy = e.clientY - s.y;
    const adx = Math.abs(dx);
    const ady = Math.abs(dy);
    const SWIPE = 22; // px a finger must travel before it counts as a swipe
    if (adx < SWIPE && ady < SWIPE) {
      this.jump(); // a plain tap = jump
    } else if (adx > ady) {
      this.moveLane(dx > 0 ? 1 : -1); // swipe right → right lane, left → left lane
    } else if (dy < 0) {
      this.jump(); // swipe up = jump
    } else {
      this.slide(); // swipe down = slide
    }
  };

  private resize = () => {
    const el = this.renderer.domElement;
    const w = el.clientWidth || window.innerWidth;
    const h = el.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  };

  // ---- world helpers ----
  private spawnDecor(z: number) {
    const theme = WORLDS[this.worldIndex];
    const side = Math.random() < 0.5 ? -1 : 1;
    let mesh: THREE.Object3D;
    const color = Math.random() < 0.5 ? theme.decor : theme.decorAlt;
    const m = new THREE.MeshStandardMaterial({ color, roughness: 0.9 });
    if (theme.kind === 'tree' || theme.kind === 'cactus') {
      const g = new THREE.Group();
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 1.4, 8), new THREE.MeshStandardMaterial({ color: '#78350f' }));
      trunk.position.y = 0.7;
      const top = new THREE.Mesh(new THREE.ConeGeometry(0.9, 2.2, 9), m);
      top.position.y = 2.2;
      g.add(trunk, top);
      mesh = g;
    } else if (theme.kind === 'crystal') {
      mesh = new THREE.Mesh(new THREE.ConeGeometry(0.7, 2.6, 6), m);
      (mesh as THREE.Mesh).position.y = 1.3;
    } else {
      const h = 2 + Math.random() * 4;
      mesh = new THREE.Mesh(this.decorGeo, m);
      mesh.scale.set(1.4, h, 1.4);
      mesh.position.y = h / 2;
    }
    mesh.position.x = side * (GROUND_W / 2 + 1.6 + Math.random() * 3.5);
    mesh.position.z = z;
    (mesh as any)._m = m;
    mesh.castShadow = true;
    this.scene.add(mesh);
    this.decor.push({ mesh, z });
  }

  private spawnRow() {
    const roll = Math.random();
    if (roll < 0.22) {
      // High bar spanning the track — slide under it.
      const bar = new THREE.Mesh(this.barGeo, this.barMat);
      bar.position.set(0, 1.55, SPAWN_Z);
      bar.castShadow = true;
      this.scene.add(bar);
      this.obstacles.push({ mesh: bar, lane: -1, type: 'high', z: SPAWN_Z, resolved: false });
      this.addCoinArc(Math.floor(Math.random() * 3), SPAWN_Z);
    } else if (roll < 0.6) {
      // 1–2 ground blocks; always leave a lane open (mostly just one block).
      const blocked = new Set<number>();
      const count = Math.random() < 0.2 ? 2 : 1;
      while (blocked.size < count) blocked.add(Math.floor(Math.random() * 3));
      for (const lane of blocked) {
        const block = new THREE.Mesh(this.blockGeo, this.obstacleMat);
        block.position.set(LANES[lane], 0.52, SPAWN_Z);
        block.castShadow = true;
        block.receiveShadow = true;
        this.scene.add(block);
        this.obstacles.push({ mesh: block, lane, type: 'low', z: SPAWN_Z, resolved: false });
      }
      // Coins in an open lane
      const open = [0, 1, 2].filter((l) => !blocked.has(l));
      this.addCoinLine(open[Math.floor(Math.random() * open.length)], SPAWN_Z);
    } else {
      // Coin lane only
      this.addCoinLine(Math.floor(Math.random() * 3), SPAWN_Z);
    }
  }

  private addCoinLine(lane: number, z: number) {
    for (let i = 0; i < 5; i++) {
      const c = new THREE.Mesh(this.coinGeo, this.coinMat);
      c.rotation.x = Math.PI / 2;
      c.position.set(LANES[lane], 1.0, z - i * 1.6);
      this.scene.add(c);
      this.coinList.push({ mesh: c, lane, z: z - i * 1.6, taken: false });
    }
  }

  private addCoinArc(lane: number, z: number) {
    // A little arc of coins you grab mid-jump.
    for (let i = 0; i < 5; i++) {
      const t = i / 4;
      const c = new THREE.Mesh(this.coinGeo, this.coinMat);
      c.rotation.x = Math.PI / 2;
      c.position.set(LANES[lane], 1.0 + Math.sin(t * Math.PI) * 1.5, z - i * 1.4);
      this.scene.add(c);
      this.coinList.push({ mesh: c, lane, z: z - i * 1.4, taken: false });
    }
  }

  private applyTheme(theme: WorldTheme, instant: boolean) {
    this.tgtSky.set(theme.sky);
    this.fog.color.set(theme.fog);
    this.obstacleMat.color.set(theme.obstacle);
    this.barMat.color.set(theme.obstacle);
    this.stripeMat.color.set(theme.lane);
    this.groundMat.color.set(theme.ground);
    if (instant) this.curSky.copy(this.tgtSky);
  }

  // ---- main loop ----
  private loop = (now: number) => {
    if (!this.running) return;
    this.raf = requestAnimationFrame(this.loop);
    let dt = (now - this.clock.last) / 1000;
    this.clock.last = now;
    // Guard against non-finite / negative deltas (clock skew, tab restore) that
    // would otherwise poison `distance` and index WORLDS out of range.
    if (!Number.isFinite(dt) || dt < 0) dt = 0;
    if (dt > 1 / 20) dt = 1 / 20;
    if (this.paused) {
      this.renderer.render(this.scene, this.camera);
      return;
    }
    this.update(dt);
    this.renderer.render(this.scene, this.camera);
  };

  private update(dt: number) {
    // Speed ramps up with distance (gentle — the game should stay approachable).
    this.speed = 13 + Math.min(13, this.distance / 95);
    const move = this.speed * dt;
    this.distance += move;

    // World changes (guard the index into 0..n-1 no matter what)
    const n = WORLDS.length;
    const wi = ((Math.floor(this.distance / WORLD_DIST) % n) + n) % n;
    if (wi !== this.worldIndex) {
      this.worldIndex = wi;
      this.applyTheme(WORLDS[wi], false);
    }
    // Smoothly fade the sky toward the target.
    this.curSky.lerp(this.tgtSky, Math.min(1, dt * 1.4));

    // Player lane / jump / slide
    const targetX = LANES[this.laneIndex];
    this.px += (targetX - this.px) * Math.min(1, dt * 14);
    if (this.jumping || this.py > 0) {
      this.vy -= GRAVITY * dt;
      this.py += this.vy * dt;
      if (this.py <= 0) {
        this.py = 0;
        this.vy = 0;
        this.jumping = false;
      }
    }
    if (this.slideTimer > 0) this.slideTimer -= dt;
    if (this.stumble > 0) this.stumble -= dt;

    const mode: 'run' | 'air' | 'slide' = this.jumping || this.py > 0.02 ? 'air' : this.slideTimer > 0 ? 'slide' : 'run';
    this.player.group.position.set(this.px, this.py, 0);
    this.player.group.rotation.y = Math.PI; // face away from camera (down the track)
    this.player.animate(dt, mode, this.stumble > 0 ? 6 : 15);
    // flash red while stumbling handled via scale wobble
    this.player.group.scale.setScalar(this.stumble > 0 ? 0.94 : 1);

    // Stripes scroll
    for (const s of this.stripes) {
      s.position.z += move;
      if (s.position.z > CULL_Z) s.position.z -= this.stripes.length * 4;
    }

    // Decor scroll + recycle
    for (const d of this.decor) {
      d.mesh.position.z += move;
      d.z = d.mesh.position.z;
      if (d.z > CULL_Z + 4) {
        this.scene.remove(d.mesh);
        const mm = (d.mesh as any)._m as THREE.Material | undefined;
        if (mm) mm.dispose();
        d.mesh.traverse((o) => {
          const me = o as THREE.Mesh;
          if (me.geometry && me.geometry !== this.decorGeo) me.geometry.dispose();
        });
        this.spawnDecor(-80 - Math.random() * 8);
        // mark for removal
        d.z = NaN;
      }
    }
    this.decor = this.decor.filter((d) => !Number.isNaN(d.z));

    // Spawn rows on a distance cadence
    if (this.distance >= this.nextRowDist) {
      this.nextRowDist += ROW_GAP;
      this.spawnRow();
    }

    // Obstacles
    for (const o of this.obstacles) {
      o.z += move;
      o.mesh.position.z = o.z;
      if (!o.resolved && o.z >= -0.35) {
        o.resolved = true;
        const sliding = this.slideTimer > 0 && this.py <= 0.02;
        const jumping = this.py >= 0.85;
        let safe: boolean;
        if (o.type === 'high') safe = sliding;
        else safe = this.laneIndex !== o.lane || jumping;
        if (!safe) this.onHit();
      }
    }
    this.obstacles = this.obstacles.filter((o) => {
      if (o.z > CULL_Z) {
        this.scene.remove(o.mesh);
        return false;
      }
      return true;
    });

    // Coins
    for (const c of this.coinList) {
      c.z += move;
      c.mesh.position.z = c.z;
      c.mesh.rotation.z += dt * 6;
      if (!c.taken && Math.abs(c.z) < 0.9 && c.lane === this.laneIndex) {
        // grabbable if roughly at the coin's height
        if (Math.abs(this.py + 1.0 - c.mesh.position.y) < 1.6) {
          c.taken = true;
          this.coins += 1;
          this.sfx.coin();
          this.scene.remove(c.mesh);
        }
      }
    }
    this.coinList = this.coinList.filter((c) => {
      if (c.taken) return false;
      if (c.z > CULL_Z) {
        this.scene.remove(c.mesh);
        return false;
      }
      return true;
    });

    // Chaser: recovers quickly when clean, closes in when you stumble. Tuned to
    // be forgiving so casual players get a long, fun run.
    const targetGap = this.stumble > 0 ? this.chaseGap - dt * 2.2 : this.chaseGap + dt * 0.85;
    this.chaseGap = Math.max(0, Math.min(5.8, targetGap));
    if (this.chaseGap <= 0.4 && !this.caught) {
      this.onCaught();
    }
    const nx = this.norberto.group.position.x;
    this.norberto.group.position.x = nx + (this.px * 0.7 - nx) * Math.min(1, dt * 8);
    this.norberto.group.position.z = this.chaseGap;
    this.norberto.group.rotation.y = Math.PI;
    this.norberto.animate(dt, 'run', 15);

    // Camera follows the player's lane a little + shake
    const camX = this.px * 0.32;
    this.camera.position.x += (camX - this.camera.position.x) * Math.min(1, dt * 6);
    if (this.shake > 0) {
      this.shake -= dt;
      this.camera.position.x += (Math.random() - 0.5) * 0.25;
      this.camera.position.y = 3.7 + (Math.random() - 0.5) * 0.2;
    } else {
      this.camera.position.y += (3.7 - this.camera.position.y) * Math.min(1, dt * 6);
    }
    this.camera.lookAt(this.px * 0.25, 1.3, -6);

    // Stats to the UI (~12/s)
    this.statAcc += dt;
    const worldName = WORLDS[this.worldIndex].name;
    if (this.statAcc > 0.08 || worldName !== this.lastStatWorld) {
      this.statAcc = 0;
      this.lastStatWorld = worldName;
      this.cb.onStats({
        distance: Math.floor(this.distance),
        coins: this.coins,
        world: worldName,
        chase: 1 - Math.min(1, this.chaseGap / 5.2)
      });
    }
  }

  private onHit() {
    if (this.stumble > 0) return; // already reeling
    this.stumble = 0.5;
    this.shake = 0.35;
    this.chaseGap = Math.max(0, this.chaseGap - 1.5);
    this.sfx.hit();
  }

  private onCaught() {
    this.caught = true;
    this.sfx.caught();
    this.cb.onDead({ distance: Math.floor(this.distance), coins: this.coins });
  }
}
