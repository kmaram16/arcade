import * as THREE from 'three';
import { Character, LOOKS } from './characters';

// Policán 3D — a third/first-person chase through Ohkay City. Petey is always a
// few metres ahead taunting you; you close the gap by grabbing hot dogs and
// avoiding everything else. Catch him and the round is yours.
//
// The two book-accurate twists that make it Dog Man and not a generic runner:
//   · Balls. Dog Man is terrified of them (book 7), so a ball is an obstacle
//     that freezes him, not a pickup.
//   · Squirrels. He cannot help chasing them (running gag, and the trick that
//     beats the Robo-Brontosaurus in book 5), so they yank you across a lane.

export type Camera = 'third' | 'first';
export type Stats = { distance: number; dogs: number; gap: number };
export type Callbacks = {
  onStats: (s: Stats) => void;
  onCaught: (s: { distance: number; dogs: number }) => void;
  onLost: (s: { distance: number; dogs: number }) => void;
};

const LANES = [-2.2, 0, 2.2];
const ROAD_W = 8;
const SPAWN_Z = -90;
const CULL_Z = 14;
const GRAVITY = 42;
const JUMP_V = 15.5;
const SLIDE_TIME = 0.65;
const START_GAP = 9; // metres of Petey's head start
const WIN_GAP = 1.6; // close to this and you have caught him
const LOSE_GAP = 22; // let him get this far and he escapes

type Kind = 'ball' | 'bin' | 'bar' | 'squirrel' | 'dog';
type Thing = { mesh: THREE.Object3D; lane: number; z: number; kind: Kind; done: boolean; spin: number };

// Cheerful bleeps built in WebAudio — no sound files to ship.
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
      /* audio unavailable — the game plays fine silently */
    }
  }
  dog() {
    this.play(880, 0.07, 'square');
    this.play(1320, 0.08, 'square');
  }
  jump() {
    this.play(520, 0.12, 'sine', 0.04);
  }
  scared() {
    this.play(180, 0.22, 'sawtooth', 0.06);
  }
  squirrel() {
    this.play(1500, 0.06, 'sine', 0.04);
    this.play(1900, 0.07, 'sine', 0.04);
  }
  win() {
    for (let i = 0; i < 3; i += 1) setTimeout(() => this.play(660 + i * 220, 0.12, 'square', 0.05), i * 90);
  }
}

export class Game {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private cam: THREE.PerspectiveCamera;
  private raf = 0;
  private last = 0;
  private running = false;
  paused = false;
  view: Camera = 'third';

  private polican: Character;
  private pedrito: Character;
  private sfx = new Sfx();

  private laneIndex = 1;
  private px = 0;
  private py = 0;
  private vy = 0;
  private jumping = false;
  private slideTimer = 0;
  private scared = 0; // frozen-by-a-ball timer

  private speed = 15;
  private distance = 0;
  private dogs = 0;
  private gap = START_GAP;
  private pedritoLane = 1;
  private pedritoX = 0;
  private nextSpawn = 20;
  private over = false;

  private things: Thing[] = [];
  private stripes: THREE.Mesh[] = [];
  private blocks: { mesh: THREE.Object3D; z: number }[] = [];

  private mats: THREE.Material[] = [];
  private geos: THREE.BufferGeometry[] = [];

  constructor(private canvas: HTMLCanvasElement, private cb: Callbacks) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene.background = new THREE.Color('#bfe3ff');
    this.scene.fog = new THREE.Fog('#bfe3ff', 34, 88);

    this.cam = new THREE.PerspectiveCamera(62, 1, 0.1, 220);
    this.scene.add(this.cam);

    const hemi = new THREE.HemisphereLight('#ffffff', '#8aa0c0', 1.05);
    this.scene.add(hemi);
    const sun = new THREE.DirectionalLight('#fff6e0', 1.5);
    sun.position.set(6, 14, 4);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 60;
    const s = 18;
    sun.shadow.camera.left = -s;
    sun.shadow.camera.right = s;
    sun.shadow.camera.top = s;
    sun.shadow.camera.bottom = -s;
    this.scene.add(sun);
    this.scene.add(sun.target);

    const mat = (c: string, extra: THREE.MeshStandardMaterialParameters = {}) => {
      const m = new THREE.MeshStandardMaterial({ color: new THREE.Color(c), roughness: 0.85, ...extra });
      this.mats.push(m);
      return m;
    };
    const geo = <T extends THREE.BufferGeometry>(g: T) => {
      this.geos.push(g);
      return g;
    };

    // Road + pavements
    const road = new THREE.Mesh(geo(new THREE.PlaneGeometry(ROAD_W, 400)), mat('#5b6472'));
    road.rotation.x = -Math.PI / 2;
    road.position.z = -160;
    road.receiveShadow = true;
    this.scene.add(road);
    for (const sx of [-1, 1]) {
      const walk = new THREE.Mesh(geo(new THREE.BoxGeometry(4, 0.3, 400)), mat('#cbd5e1'));
      walk.position.set(sx * (ROAD_W / 2 + 2), 0.15, -160);
      walk.receiveShadow = true;
      this.scene.add(walk);
    }

    // Dashed centre line — recycled as the road scrolls past.
    const stripeGeo = geo(new THREE.PlaneGeometry(0.22, 2.4));
    const stripeMat = mat('#f8fafc', { roughness: 1 });
    for (let i = 0; i < 34; i += 1) {
      const st = new THREE.Mesh(stripeGeo, stripeMat);
      st.rotation.x = -Math.PI / 2;
      st.position.set(0, 0.02, -i * 6);
      this.scene.add(st);
      this.stripes.push(st);
    }

    // City blocks down both sides.
    const blockGeo = geo(new THREE.BoxGeometry(1, 1, 1));
    const blockMats = ['#e879a6', '#7dd3fc', '#fcd34d', '#a5b4fc', '#86efac'].map((c) => mat(c));
    for (let i = 0; i < 26; i += 1) {
      const sx = i % 2 === 0 ? -1 : 1;
      const b = new THREE.Mesh(blockGeo, blockMats[i % blockMats.length]);
      const h = 5 + ((i * 7) % 11);
      b.scale.set(4.5, h, 5 + ((i * 3) % 4));
      b.position.set(sx * (ROAD_W / 2 + 6.5), h / 2, -i * 8);
      b.castShadow = true;
      this.scene.add(b);
      this.blocks.push({ mesh: b, z: b.position.z });
    }

    this.polican = new Character(LOOKS.polican);
    this.scene.add(this.polican.group);
    // Characters are modelled facing -Z, which is the way both of them run, so
    // no rotation: we see Petey's back as he flees.
    this.pedrito = new Character(LOOKS.pedrito);
    this.scene.add(this.pedrito.group);

    this.resize();
  }

  resize() {
    const w = this.canvas.clientWidth || 1;
    const h = this.canvas.clientHeight || 1;
    this.renderer.setSize(w, h, false);
    this.cam.aspect = w / h;
    this.cam.updateProjectionMatrix();
  }

  setView(v: Camera) {
    this.view = v;
    // In first person the camera sits in Dog Man's head, so hide the body.
    this.polican.setVisible(v === 'third');
  }

  setMuted(m: boolean) {
    this.sfx.muted = m;
  }

  move(dir: -1 | 1) {
    if (!this.running || this.paused || this.scared > 0) return;
    this.laneIndex = Math.max(0, Math.min(LANES.length - 1, this.laneIndex + dir));
  }

  jump() {
    if (!this.running || this.paused || this.scared > 0 || this.jumping) return;
    this.jumping = true;
    this.vy = JUMP_V;
    this.sfx.jump();
  }

  slide() {
    if (!this.running || this.paused || this.scared > 0 || this.jumping) return;
    this.slideTimer = SLIDE_TIME;
  }

  start() {
    this.reset();
    this.running = true;
    this.last = 0;
    this.raf = requestAnimationFrame(this.loop);
  }

  private reset() {
    for (const t of this.things) this.scene.remove(t.mesh);
    this.things = [];
    this.laneIndex = 1;
    this.px = 0;
    this.py = 0;
    this.vy = 0;
    this.jumping = false;
    this.slideTimer = 0;
    this.scared = 0;
    this.speed = 15;
    this.distance = 0;
    this.dogs = 0;
    this.gap = START_GAP;
    this.pedritoLane = 1;
    this.pedritoX = 0;
    this.nextSpawn = 20;
    this.over = false;
  }

  stop() {
    this.running = false;
    cancelAnimationFrame(this.raf);
  }

  private spawnRow() {
    const roll = Math.random();
    // One lane is always left clear so every row is survivable.
    const free = Math.floor(Math.random() * 3);
    for (let lane = 0; lane < 3; lane += 1) {
      if (lane === free) continue;
      if (Math.random() < 0.34) continue;
      let kind: Kind;
      if (roll < 0.3) kind = 'ball';
      else if (roll < 0.55) kind = 'bin';
      else if (roll < 0.72) kind = 'bar';
      else kind = 'bin';
      this.addThing(kind, lane, SPAWN_Z);
    }
    // Rewards and squirrels go in the free lane so they are always reachable.
    if (Math.random() < 0.75) this.addThing('dog', free, SPAWN_Z);
    else this.addThing('squirrel', free, SPAWN_Z);
  }

  private addThing(kind: Kind, lane: number, z: number) {
    let mesh: THREE.Object3D;
    const m = (c: string, emissive = false) => {
      const mm = new THREE.MeshStandardMaterial({
        color: new THREE.Color(c),
        roughness: 0.6,
        ...(emissive ? { emissive: new THREE.Color(c), emissiveIntensity: 0.35 } : {})
      });
      this.mats.push(mm);
      return mm;
    };

    if (kind === 'ball') {
      // His phobia. Bright red so it reads as danger instantly.
      mesh = new THREE.Mesh(new THREE.SphereGeometry(0.42, 16, 12), m('#ef4444'));
      mesh.position.set(LANES[lane], 0.42, z);
    } else if (kind === 'bin') {
      mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.36, 1.05, 12), m('#64748b'));
      mesh.position.set(LANES[lane], 0.52, z);
    } else if (kind === 'bar') {
      // A high bar you slide under.
      const g = new THREE.Group();
      const barMesh = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.28, 0.4), m('#f59e0b'));
      barMesh.position.y = 1.65;
      g.add(barMesh);
      for (const sx of [-1, 1]) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.65, 0.12), m('#475569'));
        leg.position.set(sx * 0.85, 0.82, 0);
        g.add(leg);
      }
      g.position.set(LANES[lane], 0, z);
      mesh = g;
    } else if (kind === 'squirrel') {
      const g = new THREE.Group();
      const bodyMesh = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 10), m('#a16207'));
      g.add(bodyMesh);
      const tail = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.34, 0.12), m('#ca8a04'));
      tail.position.set(0, 0.2, 0.18);
      tail.rotation.x = -0.5;
      g.add(tail);
      g.position.set(LANES[lane], 0.7, z);
      mesh = g;
    } else {
      // Hot dog — the pickup. Book 1: the one that only wanted a friend.
      const g = new THREE.Group();
      const sausage = new THREE.Mesh(new THREE.CapsuleGeometry(0.13, 0.34, 6, 12), m('#dc2626', true));
      sausage.rotation.z = Math.PI / 2;
      g.add(sausage);
      const bun = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.14, 0.24), m('#fbbf24'));
      bun.position.y = -0.09;
      g.add(bun);
      g.position.set(LANES[lane], 0.85, z);
      mesh = g;
    }

    mesh.traverse((o) => {
      const mm = o as THREE.Mesh;
      if (mm.isMesh) mm.castShadow = true;
    });
    this.scene.add(mesh);
    this.things.push({ mesh, lane, z, kind, done: false, spin: Math.random() * Math.PI });
  }

  private hit(t: Thing) {
    t.done = true;
    if (t.kind === 'dog') {
      this.dogs += 1;
      this.gap = Math.max(WIN_GAP - 0.1, this.gap - 1.15); // closing in on Petey
      this.sfx.dog();
      this.scene.remove(t.mesh);
      return;
    }
    if (t.kind === 'squirrel') {
      // He cannot help himself: a squirrel drags him one lane over.
      this.sfx.squirrel();
      this.laneIndex = Math.max(0, Math.min(2, this.laneIndex + (Math.random() < 0.5 ? -1 : 1)));
      this.scene.remove(t.mesh);
      return;
    }
    // Ball / bin / bar: he freezes and Petey gains ground.
    this.scared = t.kind === 'ball' ? 1.1 : 0.75;
    this.gap += t.kind === 'ball' ? 3.4 : 2.4;
    this.sfx.scared();
  }

  private loop = (now: number) => {
    if (!this.running) return;
    this.raf = requestAnimationFrame(this.loop);
    if (!this.last) this.last = now;
    const dt = Math.min((now - this.last) / 1000, 0.05);
    this.last = now;
    if (this.paused || this.over) {
      this.renderer.render(this.scene, this.cam);
      return;
    }

    // Speed creeps up the longer the chase runs.
    this.speed = Math.min(30, 15 + this.distance * 0.02);
    this.distance += this.speed * dt;

    if (this.scared > 0) this.scared -= dt;
    if (this.slideTimer > 0) this.slideTimer -= dt;

    // Lane glide
    const targetX = LANES[this.laneIndex];
    this.px += (targetX - this.px) * Math.min(1, dt * 12);

    // Jump arc
    if (this.jumping) {
      this.vy -= GRAVITY * dt;
      this.py += this.vy * dt;
      if (this.py <= 0) {
        this.py = 0;
        this.vy = 0;
        this.jumping = false;
      }
    }

    // Petey drifts between lanes ahead of you and slowly pulls away.
    this.gap += 0.42 * dt;
    if (Math.random() < dt * 0.7) this.pedritoLane = Math.floor(Math.random() * 3);
    this.pedritoX += (LANES[this.pedritoLane] - this.pedritoX) * Math.min(1, dt * 4);

    // Scroll the world past the player.
    const dz = this.speed * dt;
    for (const st of this.stripes) {
      st.position.z += dz;
      if (st.position.z > CULL_Z) st.position.z -= 34 * 6;
    }
    for (const b of this.blocks) {
      b.mesh.position.z += dz;
      if (b.mesh.position.z > CULL_Z + 10) b.mesh.position.z -= 26 * 8;
    }

    this.nextSpawn -= dz;
    if (this.nextSpawn <= 0) {
      this.spawnRow();
      this.nextSpawn = 13 + Math.random() * 5;
    }

    for (const t of this.things) {
      t.z += dz;
      t.mesh.position.z = t.z;
      if (t.kind === 'dog' || t.kind === 'squirrel') {
        t.spin += dt * 3;
        t.mesh.rotation.y = t.spin;
        t.mesh.position.y = (t.kind === 'dog' ? 0.85 : 0.7) + Math.sin(t.spin * 1.6) * 0.09;
      }
      if (t.done) continue;
      // Collision: same lane, overlapping z, and not cleared by jumping/sliding.
      if (Math.abs(t.z) < 0.75 && t.lane === this.laneIndex) {
        const overBar = t.kind === 'bar' && this.slideTimer > 0;
        const overLow = (t.kind === 'ball' || t.kind === 'bin') && this.py > 1.05;
        if (!overBar && !overLow) this.hit(t);
        else t.done = true;
      }
    }
    this.things = this.things.filter((t) => {
      if (t.z > CULL_Z) {
        this.scene.remove(t.mesh);
        return false;
      }
      return true;
    });

    // Poses
    const mode = this.scared > 0 ? 'scared' : this.jumping ? 'air' : this.slideTimer > 0 ? 'slide' : 'run';
    this.polican.group.position.set(this.px, this.py, 0);
    this.polican.animate(dt, mode, this.speed * 1.1);
    this.pedrito.group.position.set(this.pedritoX, Math.abs(Math.sin(this.distance * 0.6)) * 0.12, -this.gap);
    this.pedrito.animate(dt, 'run', this.speed * 1.25);

    // Camera
    if (this.view === 'third') {
      const want = new THREE.Vector3(this.px * 0.55, 3.5 + this.py * 0.25, 6.4);
      this.cam.position.lerp(want, Math.min(1, dt * 6));
      this.cam.lookAt(this.pedritoX * 0.3, 1.5, -this.gap * 0.55 - 1);
    } else {
      // Eyes: just behind the muzzle, at head height.
      this.cam.position.set(this.px, 1.86 + this.py, -0.15);
      this.cam.lookAt(this.pedritoX * 0.55, 1.5, -this.gap - 2);
    }

    this.cb.onStats({ distance: Math.floor(this.distance), dogs: this.dogs, gap: this.gap });

    if (this.gap <= WIN_GAP) {
      this.over = true;
      this.sfx.win();
      this.cb.onCaught({ distance: Math.floor(this.distance), dogs: this.dogs });
    } else if (this.gap >= LOSE_GAP) {
      this.over = true;
      this.cb.onLost({ distance: Math.floor(this.distance), dogs: this.dogs });
    }

    this.renderer.render(this.scene, this.cam);
  };

  dispose() {
    this.stop();
    this.polican.dispose();
    this.pedrito.dispose();
    for (const g of this.geos) g.dispose();
    for (const m of this.mats) m.dispose();
    this.renderer.dispose();
  }
}
