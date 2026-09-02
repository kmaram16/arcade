// The game engine: renders the voxel world with Three.js and drives a
// first-person miner — walk, look, jump/fly, swing tools, place blocks, blow
// stuff up with TNT, sleep in a bed, all under a moving day/night sky.
//
// Rendering: one InstancedMesh per block type, rebuilt whenever the world is
// edited (cheap at this scale). Hidden interior blocks are skipped, and a
// crosshair raycast against those instances tells us which block + face we're
// pointing at.

import * as THREE from 'three';
import { BlockType, BLOCKS, getMaterials } from './blocks';
import { DEFAULT_HOTBAR, ITEM_REGISTRY, Item, buildHeldModel } from './items';
import { GameMode } from './modes';
import { CHUNK, GROUND_MIN, ONEBLOCK_POS, SPAWN_RADIUS, World, WorldType } from './world';

export type HudHooks = {
  onLock: (locked: boolean) => void;
  onSelect: (index: number) => void;
  onFps: (fps: number) => void;
  onMessage: (text: string) => void;
  onTime: (t: number) => void;
  /** Inventory opened/closed (E key or the ⋮ button). */
  onInventory: (open: boolean) => void;
  /** Hacks panel opened/closed (H key or the ⚡ button). */
  onHacks: (open: boolean) => void;
  /** Active hacks changed from inside the game (F / X keys) — sync the chips. */
  onHackState: (hacks: Set<string>) => void;
  /** Player health changed (survival/hardcore) — drives the hearts HUD. */
  onHealth: (current: number, max: number) => void;
  /** Player died in hardcore — show the Game Over screen. */
  onDead: (dead: boolean) => void;
  /** Player died in DeathBan mode — banned until this epoch-ms timestamp. */
  onBanned: (untilMs: number) => void;
  /** Command console opened (F1). */
  onConsole: (open: boolean) => void;
  /** Multiplayer: our player moved — relay position/look to peers (throttled). */
  onState?: (x: number, y: number, z: number, yaw: number, pitch: number) => void;
  /** Multiplayer: we edited a block — relay it (block null = broken). */
  onEdit?: (x: number, y: number, z: number, block: BlockType | null) => void;
};

/** What the player picked on the start screen. */
export type GameConfig = {
  /** Content packs (extra blocks/tools + world features + live systems). */
  mods: Set<string>;
  /** Cheats that flip engine behaviour flags. */
  hacks: Set<string>;
  /** The 9 hotbar slots (item ids, or null for an empty slot). */
  hotbar?: (string | null)[];
  /** Terrain style — both are infinite; 'flat' is a superflat world. */
  worldType?: WorldType;
  /** Rule set: creative (default), survival, hardcore, or spectator. */
  mode?: GameMode;
};

/** The hotbar always has exactly this many slots. */
export const HOTBAR_SIZE = 9;

// Player capsule + physics tuning.
const HALF_W = 0.3;
const HEIGHT = 1.8;
const EYE = 1.62;
const GRAVITY = 28;
const WALK = 4.8;
const SPRINT = 8.0;
const FLY = 9.0;
const JUMP = 9.2;
const REACH = 6;
const EPS = 1e-3;

// Fog hides the streamed-chunk boundary (nearest edge sits ~39 blocks out at RENDER_CHUNKS=5).
const FOG_NEAR = 16;
const FOG_FAR = 38;

// Altitude at which the sky starts fading to space, and where it's full space.
// At fly speed (~9 b/s) that's roughly a one-minute climb to the stars.
const SPACE_START = 130;
const SPACE_FULL = 470;

const DAY_LENGTH = 120; // seconds for a full day/night cycle
const TNT_FUSE = 1.6;
const TNT_RADIUS = 3.4;
const PARTICLE_CAP = 240;

// Blocks you can light by left-clicking → their blast radius.
const EXPLOSIVE_RADII: Partial<Record<BlockType, number>> = {
  tnt: TNT_RADIUS,
  dynamite_block: 5,
  nuke_block: 9
};

// The OneBlock cycles through these as you mine it (it never runs out).
const ONEBLOCK_CYCLE: BlockType[] = [
  'grass', 'dirt', 'stone', 'cobblestone', 'oak_log', 'sand', 'coal_ore', 'iron_ore',
  'oak_planks', 'gold_ore', 'mossy_cobblestone', 'snow', 'diamond_ore', 'glowstone', 'emerald_ore'
];

// X-Ray dissolves these common terrain fillers so buried ores pop out.
const XRAY_FILLER = new Set<BlockType>([
  'grass', 'dirt', 'stone', 'cobblestone', 'mossy_cobblestone', 'sand', 'snow', 'netherrack', 'soul_sand'
]);

const RAIN_CAP = 280;

// Real Mechanics mod: blocks that obey gravity (fall when unsupported), and the
// gravity used by both falling sand and toppling tree blocks.
const FALLABLE = new Set<BlockType>(['sand']);
const FALL_GRAVITY = 24;
const FELL_CAP = 360; // most blocks one chop can topple (runaway guard)

// Realism mod: light-emitting blocks that cast a *real* point light on their
// surroundings (not just a glowing texture). flicker = torches/fire wobble.
const BLOCK_LIGHT: Partial<Record<BlockType, { color: number; intensity: number; dist: number; flicker?: boolean }>> = {
  torch: { color: 0xffb24a, intensity: 9, dist: 10, flicker: true },
  glowstone: { color: 0xffe08a, intensity: 12, dist: 13 },
  lamp_block: { color: 0xffd98a, intensity: 10, dist: 12 },
  lava_block: { color: 0xff6a10, intensity: 8, dist: 9, flicker: true },
  neon_block: { color: 0xff2ec4, intensity: 6, dist: 8 },
  laser_block: { color: 0xff2e2e, intensity: 6, dist: 7 },
  nuke_block: { color: 0xaef21a, intensity: 5, dist: 7 }
};
const BLOCK_LIGHT_POOL = 14; // how many emitters can be lit near the player at once

// Survival/hardcore health & damage tuning.
const MAX_HEALTH = 20;          // shown as 10 hearts
const FALL_SAFE_VEL = 17;       // impact speed (blocks/s) you can land at unharmed (~5-block drop)
const FALL_DMG_SCALE = 2.4;     // bigger = gentler falls
const REGEN_DELAY = 3.2;        // seconds unharmed before health starts ticking back
const REGEN_INTERVAL = 1.4;     // seconds per +1 health while regenerating
const LAVA_DMG = 2;
const LAVA_INTERVAL = 0.4;      // seconds per lava damage tick
const MOB_DMG = 2;
const MOB_DMG_INTERVAL = 0.8;   // seconds between zombie bites
const MOB_TOUCH_DIST = 1.15;

// DeathBan (DanoMC-style): dying bans you for a while, persisted so a reload can't dodge it.
const DEATHBAN_SECONDS = 30;
const DEATHBAN_KEY = 'mc-from-kmm-deathban';

type Primed = { x: number; y: number; z: number; fuse: number; mesh: THREE.Mesh; radius: number };
// A block detached by the Real Mechanics mod. 'settle' lands and becomes a block
// again (sand); 'fade' tumbles and despawns (felled tree logs/leaves).
type Falling = {
  mesh: THREE.Mesh; bx: number; bz: number; y: number; vel: number;
  vx: number; vz: number; type: BlockType; target: number;
  mode: 'settle' | 'fade'; life: number; spin: number;
};
// Another player in a shared-world session: a blocky avatar + floating name tag,
// smoothly interpolated toward the latest position/look the relay sent.
type RemotePlayer = {
  group: THREE.Group; label: THREE.Sprite; name: string;
  pos: THREE.Vector3; target: THREE.Vector3; yaw: number; targetYaw: number; bob: number;
};
type Mob = { kind: 'zombie' | 'pig'; group: THREE.Group; pos: THREE.Vector3; dir: number; changeT: number; hp: number; bob: number; hurtT: number };

export class Game {
  private readonly canvas: HTMLCanvasElement;
  private readonly hud: HudHooks;

  // Start-screen selection + the 9-slot hotbar it fills.
  private readonly mods: Set<string>;
  private hacks: Set<string>;
  private worldType: WorldType;
  private hotbar: (Item | null)[];
  private inventoryOpen = false;
  private hacksOpen = false;

  // Last chunk the player stood in — we only stream/re-mesh when this changes.
  private chunkX = NaN;
  private chunkZ = NaN;
  private oneBlockCount = 0; // how many times the OneBlock has been mined

  // Tuning derived from the chosen hacks/mods (see deriveTuning()).
  private speedMul = 1;
  private jumpVel = JUMP;
  private reach = REACH;
  private noclip = false;
  private jetpack = false;
  private fullbright = false;
  private xray = false;
  private nuker = false;
  private killaura = false;
  private op = false; // admin/OP: invincible no matter the mode

  // Game-mode rules (can be switched live via the /gamemode command).
  private mode: GameMode;
  private spectator = false;
  private hardcore = false;
  private deathban = false;
  private damageable = false;
  private health = MAX_HEALTH;
  private dead = false;
  private timeSinceHurt = REGEN_DELAY;
  private regenTimer = 0;
  private lavaTimer = 0;
  private mobDmgCool = 0;

  // Live mod systems.
  private mobs: Mob[] = [];
  private rain?: THREE.InstancedMesh;
  private rainPos: THREE.Vector3[] = [];
  private auraCool = 0;

  private readonly renderer: THREE.WebGLRenderer;
  private readonly scene = new THREE.Scene();
  private readonly camera: THREE.PerspectiveCamera;
  private readonly world = new World();
  private readonly clock = new THREE.Clock();
  private readonly raycaster = new THREE.Raycaster();
  private readonly boxGeo = new THREE.BoxGeometry(1, 1, 1);

  private meshes: THREE.InstancedMesh[] = [];
  private highlight!: THREE.LineSegments;

  // Lighting (animated by the day/night cycle).
  private sun!: THREE.DirectionalLight;
  private hemi!: THREE.HemisphereLight;
  private ambient!: THREE.AmbientLight;

  // Realism mod: real sun shadows + filmic tone mapping (also toggleable live
  // from the ⚙️ settings panel). sunDir is the *visual* sun direction (drives the
  // sun disc + stars); the shadow rig is anchored on the player so shadows track.
  private realism = false;
  private readonly sunTarget = new THREE.Object3D();
  private readonly sunDir = new THREE.Vector3(0, 1, 0);

  // Real Mechanics mod: toppling trees + falling sand, and the live entities.
  private mechanics = false;
  private falling: Falling[] = [];

  // Realism mod: a pool of point lights re-pointed each frame at the nearest
  // emitting blocks, plus the source index rebuilt with the world mesh.
  private blockLights: THREE.PointLight[] = [];
  private lightSources: { x: number; y: number; z: number; type: BlockType }[] = [];

  // Multiplayer: remote players' avatars, queued incoming edits, and a throttle
  // for how often we relay our own position to the room.
  private peers = new Map<string, RemotePlayer>();
  private remoteEdits: { x: number; y: number; z: number; block: BlockType | null }[] = [];
  private stateCool = 0;

  // Sky decoration: a star field and a glowing sun disc (visible at night/in space).
  private stars!: THREE.Points;
  private sunSprite!: THREE.Sprite;

  // Held item (child of the camera, drawn over the world).
  private heldGroup = new THREE.Group();
  private readonly heldBasePos = new THREE.Vector3();
  private readonly heldBaseRot = new THREE.Euler();
  private swingT = 999;

  // Explosions.
  private primed: Primed[] = [];
  private particles!: THREE.InstancedMesh;
  private pool: { pos: THREE.Vector3; vel: THREE.Vector3; life: number; max: number }[] = [];

  // Player state.
  private readonly pos = new THREE.Vector3(0.5, 1, 9.5);
  private readonly vel = new THREE.Vector3();
  private yaw = 0;
  private pitch = 0;
  private onGround = false;
  private fly = false;

  private selected = 0;
  private locked = false;
  private touch = false; // on-screen touch controls active (phones/tablets)
  private readonly keys = new Set<string>();

  private time = 0.12; // start mid-morning
  private daySpeed = 1; // /ajustes: day-night speed multiplier
  private sensMul = 1;  // /ajustes: mouse-sensitivity multiplier
  private fogNear = FOG_NEAR; // graphics: fog scaled to the view distance
  private fogFar = FOG_FAR;
  private elapsed = 0;
  private shakeT = 0;
  private shakeDur = 0;
  private shakeMag = 0;
  private timeReport = 0;

  private fpsAccum = 0;
  private fpsFrames = 0;
  private raf = 0;
  private disposed = false;

  constructor(canvas: HTMLCanvasElement, hud: HudHooks, config: GameConfig = { mods: new Set(), hacks: new Set() }) {
    this.canvas = canvas;
    this.hud = hud;
    this.mods = config.mods;
    this.hacks = config.hacks;
    this.worldType = config.worldType ?? 'normal';
    this.mode = config.mode ?? 'creative';
    this.realism = config.mods.has('realism');
    this.mechanics = config.mods.has('mechanics');
    this.applyMode();
    this.hotbar = this.resolveHotbar(config.hotbar ?? DEFAULT_HOTBAR);
    this.deriveTuning();

    // high-performance asks the browser for the discrete GPU → more FPS on laptops.
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.camera = new THREE.PerspectiveCamera(72, 1, 0.1, 1000);
    this.camera.rotation.order = 'YXZ';
    this.scene.add(this.camera); // so the held item (its child) renders
    this.camera.add(this.heldGroup);

    // Fog is tuned to hide the streamed-chunk edge, so the world looks endless.
    this.scene.background = new THREE.Color('#9ad0ff');
    this.scene.fog = new THREE.Fog('#9ad0ff', FOG_NEAR, FOG_FAR);

    this.setupLights();
    this.setupHighlight();
    this.setupParticles();
    this.setupSky();
    this.applyRealism();

    this.world.init(this.worldType, this.mods);
    this.respawn(); // place the player on spawn (island, oneblock, or surface)
    this.rebuild();
    this.updateHeld();
    this.spawnMobs();
    this.setupRain();

    this.resize();
    this.bindEvents();
    this.hud.onSelect(this.selected);
    this.hud.onHealth(this.health, MAX_HEALTH);
    if (this.deathban) this.checkBan();
  }

  /** Translate the active hacks/mods into the numbers the simulation reads.
   *  (Flying is a live toggle owned by `this.fly`, so it's handled separately.) */
  private deriveTuning() {
    const has = (id: string) => this.hacks.has(id);
    const heroes = this.mods.has('heroes'); // Super Heroes grants super speed + jump too.
    this.speedMul = (has('speed') ? 1.9 : 1) * (heroes ? 1.6 : 1);
    this.jumpVel = has('superjump') ? 17 : heroes ? 13 : JUMP;
    this.reach = has('reach') ? 11 : REACH;
    this.noclip = has('noclip');
    this.jetpack = has('jetpack');
    this.fullbright = has('fullbright');
    this.xray = has('xray');
    this.nuker = has('nuker');
    this.killaura = has('killaura');
  }

  /** Spectator and No-Clip both pass through blocks and float freely. */
  private get ghost(): boolean {
    return this.noclip || this.spectator;
  }

  /** Derive the mode booleans from this.mode (called at boot and on /gamemode). */
  private applyMode() {
    this.spectator = this.mode === 'spectator';
    this.hardcore = this.mode === 'hardcore';
    this.deathban = this.mode === 'deathban';
    this.damageable = this.mode === 'survival' || this.mode === 'hardcore' || this.deathban;
  }

  /** Switch game mode on the fly (from the /gamemode command), with full health. */
  setMode(mode: GameMode) {
    this.mode = mode;
    this.applyMode();
    this.health = MAX_HEALTH;
    this.timeSinceHurt = REGEN_DELAY;
    this.hud.onHealth(this.health, MAX_HEALTH);
    this.updateHeld();
  }

  /** Regenerate the world as a different type live (from the /mundo command). */
  setWorld(type: WorldType) {
    this.worldType = type;
    this.oneBlockCount = 0;
    this.world.reset();
    this.world.init(type, this.mods);
    this.chunkX = NaN;
    this.chunkZ = NaN;
    this.respawn();
    this.rebuild();
  }

  // ── Hacks (live toggling) ────────────────────────────────────────────────────

  /** Re-apply the active hacks; re-mesh if X-Ray changed (it alters materials). */
  private applyHacks() {
    const wasXray = this.xray;
    this.deriveTuning();
    this.fly = this.hacks.has('fly');
    if (this.xray !== wasXray) this.rebuild();
  }

  /** Called by the in-game hacks panel when the player flips a hack live. */
  setHacks(hacks: Set<string>) {
    this.hacks = new Set(hacks);
    this.applyHacks();
  }

  /** Grant/revoke admin (OP) — invincibility on top of whatever hacks are active. */
  setOp(on: boolean) {
    this.op = on;
  }

  // ── Settings (/ajustes) ──────────────────────────────────────────────────────
  setSensitivity(mult: number) {
    this.sensMul = mult;
  }
  setFov(deg: number) {
    this.camera.fov = deg;
    this.camera.updateProjectionMatrix();
  }
  setDaySpeed(mult: number) {
    this.daySpeed = mult;
  }

  /** Render resolution: <1 = many more FPS, >1 = sharper. */
  setQuality(scale: number) {
    const base = Math.min(window.devicePixelRatio, 2);
    this.renderer.setPixelRatio(Math.min(2, Math.max(0.4, base * scale)));
    this.resize();
  }

  /** View distance in chunks — more = prettier/further, fewer = more FPS. */
  setRenderDistance(chunks: number) {
    this.world.setRenderDistance(chunks);
    this.fogFar = chunks * CHUNK * 0.95;
    this.fogNear = Math.max(8, this.fogFar - 22);
    this.chunkX = NaN;
    this.chunkZ = NaN;
    this.world.streamAround(this.pos.x, this.pos.z);
    this.rebuild();
  }

  /** Toggle a single hack from a keybind, then echo the new state to the HUD. */
  private toggleHack(id: string) {
    this.hacks.has(id) ? this.hacks.delete(id) : this.hacks.add(id);
    this.applyHacks();
    this.hud.onHackState(new Set(this.hacks));
    const on = this.hacks.has(id);
    this.hud.onMessage(`${id} ${on ? 'ON' : 'OFF'}`);
  }

  openHacks() {
    if (this.hacksOpen) return;
    this.hacksOpen = true;
    if (document.pointerLockElement === this.canvas) document.exitPointerLock();
    this.hud.onHacks(true);
  }

  closeHacks() {
    if (!this.hacksOpen) return;
    this.hacksOpen = false;
    this.hud.onHacks(false);
    this.canvas.requestPointerLock();
  }

  // ── Hotbar + inventory ───────────────────────────────────────────────────────

  /** Map 9 item ids (null = empty) to their Item objects, padded/clamped to size. */
  private resolveHotbar(ids: (string | null)[]): (Item | null)[] {
    const slots: (Item | null)[] = [];
    for (let i = 0; i < HOTBAR_SIZE; i++) {
      const id = ids[i] ?? null;
      slots.push(id ? ITEM_REGISTRY.get(id) ?? null : null);
    }
    return slots;
  }

  /** Called from the inventory UI when the player re-picks their 9 slots. */
  setHotbar(ids: (string | null)[]) {
    this.hotbar = this.resolveHotbar(ids);
    if (this.selected >= HOTBAR_SIZE) this.selected = HOTBAR_SIZE - 1;
    this.updateHeld();
  }

  openInventory() {
    if (this.inventoryOpen) return;
    this.inventoryOpen = true;
    if (document.pointerLockElement === this.canvas) document.exitPointerLock();
    this.hud.onInventory(true);
  }

  closeInventory() {
    if (!this.inventoryOpen) return;
    this.inventoryOpen = false;
    this.hud.onInventory(false);
    this.canvas.requestPointerLock();
  }

  /** Open the F1 command console (releases the pointer so you can type). */
  private openConsole() {
    if (this.dead) return; // no escaping death (hardcore/DeathBan) via the console
    if (document.pointerLockElement === this.canvas) document.exitPointerLock();
    this.hud.onConsole(true);
  }

  // ── Setup ──────────────────────────────────────────────────────────────────

  private setupLights() {
    this.hemi = new THREE.HemisphereLight('#cfe8ff', '#5a6a3a', 0.95);
    this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight('#fff6e0', 0.85);
    this.scene.add(this.sun);
    // The shadow-casting sun aims at this target, which we park on the player so
    // the (small, fast) shadow frustum always covers wherever they're standing.
    this.scene.add(this.sunTarget);
    this.sun.target = this.sunTarget;
    this.ambient = new THREE.AmbientLight('#ffffff', 0.25);
    this.scene.add(this.ambient);
  }

  /** Configure (or tear down) the Realism mod's renderer + sun-shadow pipeline. */
  private applyRealism() {
    const on = this.realism;
    // Filmic tone mapping + exposure gives the world deeper, more natural color.
    this.renderer.toneMapping = on ? THREE.ACESFilmicToneMapping : THREE.NoToneMapping;
    this.renderer.toneMappingExposure = on ? 1.12 : 1;
    this.renderer.shadowMap.enabled = on;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.sun.castShadow = on;
    if (on) {
      const s = this.sun.shadow;
      s.mapSize.set(2048, 2048);
      s.bias = -0.0004;
      s.normalBias = 0.6; // box faces need a healthy normal bias to kill acne
      const cam = s.camera as THREE.OrthographicCamera;
      cam.near = 1;
      cam.far = 360;
      cam.left = -52; cam.right = 52; cam.top = 52; cam.bottom = -52;
      cam.updateProjectionMatrix();
    }
    this.renderer.shadowMap.needsUpdate = true;

    // Build the point-light pool the first time realism switches on; when it goes
    // off, just park every light dark (cheap, and ready to re-light instantly).
    if (on && this.blockLights.length === 0) {
      for (let i = 0; i < BLOCK_LIGHT_POOL; i++) {
        const light = new THREE.PointLight(0xffffff, 0, 10, 1.6);
        light.castShadow = false; // point-light shadows are too costly at this count
        light.visible = false;
        this.scene.add(light);
        this.blockLights.push(light);
      }
    }
    if (!on) for (const l of this.blockLights) { l.visible = false; l.intensity = 0; }
  }

  /** Toggle the Realism look live (from the ⚙️ settings panel). */
  setRealism(on: boolean) {
    if (this.realism === on) return;
    this.realism = on;
    this.applyRealism();
    this.rebuild(); // re-flag every block mesh as a shadow caster/receiver
  }

  private setupHighlight() {
    const edges = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.002, 1.002, 1.002));
    const mat = new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.5 });
    this.highlight = new THREE.LineSegments(edges, mat);
    this.highlight.visible = false;
    this.scene.add(this.highlight);
  }

  private setupParticles() {
    const geo = new THREE.BoxGeometry(0.14, 0.14, 0.14);
    const mat = new THREE.MeshBasicMaterial();
    this.particles = new THREE.InstancedMesh(geo, mat, PARTICLE_CAP);
    this.particles.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.particles.frustumCulled = false;
    const hidden = new THREE.Matrix4().makeScale(0, 0, 0);
    for (let i = 0; i < PARTICLE_CAP; i++) {
      this.particles.setMatrixAt(i, hidden);
      this.pool.push({ pos: new THREE.Vector3(), vel: new THREE.Vector3(), life: 0, max: 0 });
    }
    this.scene.add(this.particles);
  }

  /** A star field + a glowing sun disc. Both follow the camera like a skybox and
   *  ignore fog, so they read as "infinitely far" — the stars come out at night
   *  and, as you fly up, when the sky fades to space. */
  private setupSky() {
    const N = 1400;
    const positions = new Float32Array(N * 3);
    const v = new THREE.Vector3();
    for (let i = 0; i < N; i++) {
      v.set(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1).normalize().multiplyScalar(480);
      positions.set([v.x, v.y, v.z], i * 3);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starMat = new THREE.PointsMaterial({ color: '#ffffff', size: 1.7, sizeAttenuation: false, transparent: true, opacity: 0, depthWrite: false, fog: false });
    this.stars = new THREE.Points(geo, starMat);
    this.stars.frustumCulled = false;
    this.scene.add(this.stars);

    // Sun disc: a soft radial-gradient sprite drawn additively.
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const ctx = c.getContext('2d')!;
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.35, 'rgba(255,244,214,0.95)');
    grad.addColorStop(0.7, 'rgba(255,210,130,0.35)');
    grad.addColorStop(1, 'rgba(255,200,120,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(c);
    const sunMat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false });
    this.sunSprite = new THREE.Sprite(sunMat);
    this.sunSprite.scale.setScalar(60);
    this.scene.add(this.sunSprite);
  }

  /** Tear down and rebuild the InstancedMesh for every visible block type. */
  private rebuild() {
    for (const m of this.meshes) {
      this.scene.remove(m);
      m.dispose();
    }
    this.meshes = [];

    const buckets = new Map<BlockType, [number, number, number][]>();
    this.lightSources = [];
    for (const [key, type] of this.world.map) {
      const [x, y, z] = key.split(',').map(Number);
      // Index emitters for the realism point-light pool (even if face-hidden).
      if (BLOCK_LIGHT[type]) this.lightSources.push({ x, y, z, type });
      if (this.world.isHidden(x, y, z)) continue;
      let list = buckets.get(type);
      if (!list) buckets.set(type, (list = []));
      list.push([x, y, z]);
    }

    const matrix = new THREE.Matrix4();
    for (const [type, coords] of buckets) {
      // X-Ray renders common terrain as faint ghosts so buried ores stand out.
      const mats = this.xray && XRAY_FILLER.has(type) ? this.xrayMaterial() : getMaterials(type);
      const mesh = new THREE.InstancedMesh(this.boxGeo, mats, coords.length);
      coords.forEach((c, i) => {
        matrix.makeTranslation(c[0] + 0.5, c[1] + 0.5, c[2] + 0.5);
        mesh.setMatrixAt(i, matrix);
      });
      mesh.instanceMatrix.needsUpdate = true;
      mesh.frustumCulled = false;
      mesh.castShadow = this.realism;
      mesh.receiveShadow = this.realism;
      mesh.userData.coords = coords;
      this.scene.add(mesh);
      this.meshes.push(mesh);
    }
  }

  private _xrayMat?: THREE.Material;
  private xrayMaterial(): THREE.Material {
    if (!this._xrayMat) {
      this._xrayMat = new THREE.MeshLambertMaterial({
        color: '#9fb4c9',
        transparent: true,
        opacity: 0.12,
        depthWrite: false
      });
    }
    return this._xrayMat;
  }

  // ── Lifecycle ────────────────────────────────────────────────────────────────

  start() {
    this.loop();
  }

  dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.raf);
    this.unbindEvents();
    for (const id of [...this.peers.keys()]) this.removePeer(id);
    if (document.pointerLockElement === this.canvas) document.exitPointerLock();
    this.renderer.dispose();
    this.boxGeo.dispose();
  }

  setSelected(index: number) {
    const n = HOTBAR_SIZE;
    this.selected = ((index % n) + n) % n;
    this.hud.onSelect(this.selected);
    this.updateHeld();
  }

  // ── Held item ────────────────────────────────────────────────────────────────

  private updateHeld() {
    this.camera.remove(this.heldGroup);
    this.heldGroup = new THREE.Group();
    const item = this.spectator ? null : this.hotbar[this.selected];
    if (!item) {
      this.camera.add(this.heldGroup); // empty slot → bare hand
      return;
    }
    const model = buildHeldModel(item);

    if (item.tool) {
      model.scale.setScalar(0.5);
      this.heldBasePos.set(0.42, -0.4, -0.85);
      this.heldBaseRot.set(0.1, -0.35, -0.5);
    } else {
      model.scale.setScalar(0.32);
      this.heldBasePos.set(0.5, -0.48, -0.85);
      this.heldBaseRot.set(-0.25, 0.6, 0.15);
    }
    this.heldGroup.add(model);
    this.camera.add(this.heldGroup);
  }

  private swing() {
    this.swingT = 0;
  }

  // ── Event wiring ─────────────────────────────────────────────────────────────

  private readonly onResize = () => this.resize();
  private readonly onKeyDown = (e: KeyboardEvent) => this.keyDown(e);
  private readonly onKeyUp = (e: KeyboardEvent) => this.keys.delete(e.code);
  private readonly onMouseMove = (e: MouseEvent) => this.mouseMove(e);
  private readonly onMouseDown = (e: MouseEvent) => this.mouseDown(e);
  private readonly onWheel = (e: WheelEvent) => {
    e.preventDefault();
    this.setSelected(this.selected + (e.deltaY > 0 ? 1 : -1));
  };
  private readonly onClick = () => {
    if (!this.locked) this.canvas.requestPointerLock();
  };
  private readonly onContextMenu = (e: Event) => e.preventDefault();
  private readonly onPointerLock = () => {
    this.locked = document.pointerLockElement === this.canvas;
    if (!this.locked) this.keys.clear();
    this.hud.onLock(this.locked);
  };

  private bindEvents() {
    window.addEventListener('resize', this.onResize);
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('pointerlockchange', this.onPointerLock);
    this.canvas.addEventListener('mousedown', this.onMouseDown);
    this.canvas.addEventListener('click', this.onClick);
    this.canvas.addEventListener('wheel', this.onWheel, { passive: false });
    this.canvas.addEventListener('contextmenu', this.onContextMenu);
  }

  private unbindEvents() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('pointerlockchange', this.onPointerLock);
    this.canvas.removeEventListener('mousedown', this.onMouseDown);
    this.canvas.removeEventListener('click', this.onClick);
    this.canvas.removeEventListener('wheel', this.onWheel);
    this.canvas.removeEventListener('contextmenu', this.onContextMenu);
  }

  private resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  private keyDown(e: KeyboardEvent) {
    // F1 opens the command console; while a text field is focused, don't hijack keys.
    const el = document.activeElement;
    const typing = !!el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA');
    if (e.code === 'F1') {
      e.preventDefault();
      if (!typing) this.openConsole();
      return;
    }
    if (typing) return;
    // E opens/closes the inventory; H the hacks panel — work mid-play or paused.
    if (e.code === 'KeyE') {
      this.inventoryOpen ? this.closeInventory() : this.openInventory();
      return;
    }
    if (e.code === 'KeyH') {
      this.hacksOpen ? this.closeHacks() : this.openHacks();
      return;
    }
    // X is a quick X-Ray toggle (the one everyone asks about).
    if (e.code === 'KeyX') {
      this.toggleHack('xray');
      return;
    }
    this.keys.add(e.code);
    if (e.code === 'KeyF') {
      this.fly = !this.fly;
      this.fly ? this.hacks.add('fly') : this.hacks.delete('fly');
      this.vel.y = 0;
      this.hud.onHackState(new Set(this.hacks));
      this.hud.onMessage(this.fly ? 'Fly ON ✈️' : 'Fly OFF');
    }
    if (e.code.startsWith('Digit')) {
      const n = Number(e.code.slice(5));
      if (n >= 1 && n <= 9) this.setSelected(n - 1);
    }
    if (e.code === 'Space' && this.locked) e.preventDefault();
  }

  private mouseMove(e: MouseEvent) {
    if (!this.locked) return;
    const sens = 0.0022 * this.sensMul;
    this.yaw -= e.movementX * sens;
    this.pitch -= e.movementY * sens;
    const limit = Math.PI / 2 - 0.01;
    this.pitch = Math.max(-limit, Math.min(limit, this.pitch));
  }

  private mouseDown(e: MouseEvent) {
    if (!this.locked) return;
    if (e.button === 0) this.primaryAction();
    else if (e.button === 2) this.secondaryAction();
  }

  // ── Touch controls (phones/tablets) ───────────────────────────────────────────
  // A touchscreen has no pointer lock, so the game would never update (the loop
  // gates on `locked`). App turns on touch mode and drives everything through the
  // methods below: a movement joystick toggles the WASD/Space keys, drag-to-look
  // feeds yaw/pitch, and the on-screen buttons mine / place.
  setTouchActive(on: boolean) {
    this.touch = on;
    if (!on) this.keys.clear();
  }

  /** Hold or release a movement key from the on-screen joystick (e.g. 'KeyW', 'Space'). */
  touchKey(code: string, down: boolean) {
    if (down) this.keys.add(code);
    else this.keys.delete(code);
  }

  /** Look by a finger-drag delta in pixels (a touch equivalent of mouse movement). */
  touchLook(dx: number, dy: number) {
    const sens = 0.004 * this.sensMul;
    this.yaw -= dx * sens;
    this.pitch -= dy * sens;
    const limit = Math.PI / 2 - 0.01;
    this.pitch = Math.max(-limit, Math.min(limit, this.pitch));
  }

  /** Mine / hit — the touch equivalent of a left click. */
  touchPrimary() { this.primaryAction(); }
  /** Place the held block — the touch equivalent of a right click. */
  touchSecondary() { this.secondaryAction(); }

  // ── Targeting + interaction ──────────────────────────────────────────────────

  private target(): { coord: [number, number, number]; normal: THREE.Vector3 } | null {
    this.raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);
    this.raycaster.far = this.reach;
    const hits = this.raycaster.intersectObjects(this.meshes, false);
    for (const hit of hits) {
      if (hit.instanceId == null || !hit.face) continue;
      const coords = (hit.object as THREE.InstancedMesh).userData.coords as [number, number, number][];
      return { coord: coords[hit.instanceId], normal: hit.face.normal.clone().round() };
    }
    return null;
  }

  /** Left click: swing/hit a mob, mine a block (or ignite an explosive). */
  private primaryAction() {
    if (this.spectator) return; // spectators can't touch the world
    this.swing();
    if (this.hitMobInFront()) return; // a melee hit takes priority over mining
    const t = this.target();
    if (!t) return;
    const [x, y, z] = t.coord;
    const type = this.world.get(x, y, z);
    if (!type) return;
    // OneBlock: the spawn block regenerates as a new type instead of vanishing.
    if (this.worldType === 'oneblock' && x === ONEBLOCK_POS.x && y === ONEBLOCK_POS.y && z === ONEBLOCK_POS.z) {
      this.oneBlockCount++;
      const next = ONEBLOCK_CYCLE[this.oneBlockCount % ONEBLOCK_CYCLE.length];
      this.world.set(x, y, z, next);
      this.emitEdit(x, y, z, next);
      this.spawnParticles(x + 0.5, y + 0.9, z + 0.5, 8, ['#ffffff', '#cfe8ff', '#9ad0ff']);
      this.rebuild();
      this.hud.onMessage(`OneBlock ×${this.oneBlockCount} → ${BLOCKS[next].label}`);
      return;
    }
    if (BLOCKS[type].unbreakable) {
      this.hud.onMessage('Bedrock is unbreakable');
      return;
    }
    const radius = EXPLOSIVE_RADII[type];
    if (radius != null) {
      this.primeTNT(x, y, z, TNT_FUSE, radius);
      this.rebuild();
      this.hud.onMessage(type === 'nuke_block' ? '☢️ NUKE armed!' : type === 'dynamite_block' ? 'Dynamite lit! 🧨' : 'TNT lit! 💥');
      return;
    }
    // Nuker hack smashes a 5×5×5 cluster; the Hammer breaks a 3×3×3.
    const cluster = this.nuker ? 2 : this.hotbar[this.selected]?.areaBreak ? 1 : 0;
    // Real Mechanics: a single chop to a trunk topples the whole connected tree.
    if (this.mechanics && cluster === 0 && type === 'oak_log') {
      this.fellTree(x, y, z);
      return;
    }
    if (cluster > 0) this.mineCluster(x, y, z, cluster);
    else { this.world.remove(x, y, z); this.emitEdit(x, y, z, null); }
    this.rebuild();
    // Real Mechanics: anything now hanging unsupported above the gap drops.
    if (this.mechanics) this.fallColumn(x, y + 1, z);
  }

  // ── Real Mechanics: toppling trees + falling blocks ──────────────────────────

  /** Chop one log → flood-fill the connected trunk + its canopy and topple it. */
  private fellTree(x: number, y: number, z: number) {
    // Connected oak_log blocks (26-neighbour flood fill, capped).
    const logs: [number, number, number][] = [];
    const seen = new Set<string>([`${x},${y},${z}`]);
    const queue: [number, number, number][] = [[x, y, z]];
    while (queue.length && logs.length < FELL_CAP) {
      const [cx, cy, cz] = queue.shift()!;
      if (this.world.get(cx, cy, cz) !== 'oak_log') continue;
      logs.push([cx, cy, cz]);
      for (let dx = -1; dx <= 1; dx++)
        for (let dy = -1; dy <= 1; dy++)
          for (let dz = -1; dz <= 1; dz++) {
            if (!dx && !dy && !dz) continue;
            const nx = cx + dx, ny = cy + dy, nz = cz + dz;
            const k = `${nx},${ny},${nz}`;
            if (seen.has(k)) continue;
            seen.add(k);
            if (this.world.get(nx, ny, nz) === 'oak_log') queue.push([nx, ny, nz]);
          }
    }

    // Canopy: leaves reachable from the trunk (so the foliage falls with it).
    const leaves: [number, number, number][] = [];
    const leafSeen = new Set<string>();
    const leafQ: [number, number, number][] = [];
    for (const [lx, ly, lz] of logs) {
      for (let dx = -1; dx <= 1; dx++)
        for (let dy = -1; dy <= 1; dy++)
          for (let dz = -1; dz <= 1; dz++) {
            const k = `${lx + dx},${ly + dy},${lz + dz}`;
            if (!leafSeen.has(k) && this.world.get(lx + dx, ly + dy, lz + dz) === 'leaves') {
              leafSeen.add(k);
              leafQ.push([lx + dx, ly + dy, lz + dz]);
            }
          }
    }
    while (leafQ.length && leaves.length < FELL_CAP) {
      const [cx, cy, cz] = leafQ.shift()!;
      leaves.push([cx, cy, cz]);
      for (let dx = -1; dx <= 1; dx++)
        for (let dz = -1; dz <= 1; dz++)
          for (let dy = -1; dy <= 1; dy++) {
            const k = `${cx + dx},${cy + dy},${cz + dz}`;
            if (!leafSeen.has(k) && this.world.get(cx + dx, cy + dy, cz + dz) === 'leaves') {
              leafSeen.add(k);
              leafQ.push([cx + dx, cy + dy, cz + dz]);
            }
          }
    }

    // Detach everything: remove from the world, spawn a tumbling, fading block.
    for (const [bx, by, bz] of logs) {
      this.world.remove(bx, by, bz);
      this.emitEdit(bx, by, bz, null);
      this.spawnFalling(bx, by, bz, 'oak_log', by, 'fade');
    }
    for (const [bx, by, bz] of leaves) {
      this.world.remove(bx, by, bz);
      this.emitEdit(bx, by, bz, null);
      this.spawnFalling(bx, by, bz, 'leaves', by, 'fade');
    }
    this.rebuild();
    this.spawnParticles(x + 0.5, y + 1, z + 0.5, 14, ['#6e5230', '#5b4426', '#3f7a32', '#356b2a']);
    this.hud.onMessage('🪵 ¡Timber!');
  }

  /** Drop the contiguous stack of fallable blocks starting at (x,y,z) into the gap below. */
  private fallColumn(x: number, y: number, z: number) {
    const stack: number[] = [];
    let yy = y;
    while (FALLABLE.has(this.world.get(x, yy, z) as BlockType)) { stack.push(yy); yy++; }
    if (!stack.length) return;
    // Find the floor the lowest block will rest on.
    let land = stack[0] - 1;
    while (land > GROUND_MIN && !this.world.isSolid(x, land, z)) land--;
    let restY = land + 1;
    for (const cy of stack) {
      const type = this.world.get(x, cy, z)!;
      this.world.remove(x, cy, z);
      this.emitEdit(x, cy, z, null);
      this.spawnFalling(x, cy, z, type, restY, 'settle');
      restY++;
    }
    this.rebuild();
  }

  /** Detach a block into a live falling entity (mesh tumbles/drops; world already cleared). */
  private spawnFalling(bx: number, by: number, bz: number, type: BlockType, target: number, mode: Falling['mode']) {
    if (this.falling.length > 600) return; // hard cap: skip the animation, stay cheap
    const mesh = new THREE.Mesh(this.boxGeo, getMaterials(type));
    mesh.position.set(bx + 0.5, by + 0.5, bz + 0.5);
    mesh.castShadow = this.realism;
    this.scene.add(mesh);
    this.falling.push({
      mesh, bx, bz, y: by + 0.5, vel: 0, type, target, mode,
      vx: mode === 'fade' ? (Math.random() * 2 - 1) * 1.1 : 0,
      vz: mode === 'fade' ? (Math.random() * 2 - 1) * 1.1 : 0,
      life: mode === 'fade' ? 0.9 + Math.random() * 0.5 : 0,
      spin: mode === 'fade' ? (Math.random() * 2 - 1) * 5 : 0
    });
  }

  private updateFalling(dt: number) {
    if (!this.falling.length) return;
    let settled = false;
    for (let i = this.falling.length - 1; i >= 0; i--) {
      const f = this.falling[i];
      f.vel -= FALL_GRAVITY * dt;
      f.y += f.vel * dt;
      if (f.mode === 'fade') {
        f.life -= dt;
        f.bx += f.vx * dt;
        f.bz += f.vz * dt;
        f.mesh.position.set(f.bx + 0.5, f.y, f.bz + 0.5);
        f.mesh.rotation.x += f.spin * dt;
        f.mesh.rotation.z += f.spin * 0.6 * dt;
        f.mesh.scale.setScalar(Math.max(0.02, Math.min(1, f.life * 1.6)));
        if (f.life <= 0) { this.scene.remove(f.mesh); this.falling.splice(i, 1); }
      } else {
        const rest = f.target + 0.5;
        if (f.y <= rest) {
          this.scene.remove(f.mesh);
          this.falling.splice(i, 1);
          this.world.set(f.bx, f.target, f.bz, f.type); // sand becomes a block again
          this.emitEdit(f.bx, f.target, f.bz, f.type);
          settled = true;
        } else {
          f.mesh.position.y = f.y;
        }
      }
    }
    if (settled) this.rebuild();
  }

  /** Realism: aim the point-light pool at the emitting blocks nearest the player,
   *  so torches/lamps/glowstone/lava actually light the room (torches flicker). */
  private updateBlockLights() {
    if (!this.realism || !this.blockLights.length) return;
    const ex = this.pos.x, ey = this.pos.y + EYE, ez = this.pos.z;

    // Nearest emitters first (only the closest BLOCK_LIGHT_POOL get a real light).
    const near = this.lightSources
      .map((s) => ({ s, d: (s.x - ex) ** 2 + (s.y - ey) ** 2 + (s.z - ez) ** 2 }))
      .sort((a, b) => a.d - b.d)
      .slice(0, BLOCK_LIGHT_POOL);

    for (let i = 0; i < this.blockLights.length; i++) {
      const light = this.blockLights[i];
      const hit = near[i];
      if (!hit) { light.visible = false; light.intensity = 0; continue; }
      const cfg = BLOCK_LIGHT[hit.s.type]!;
      light.visible = true;
      light.color.setHex(cfg.color);
      light.distance = cfg.dist;
      // Torches & lava breathe; everything else burns steady.
      const flick = cfg.flicker ? 0.78 + 0.22 * Math.sin(this.elapsed * 11 + hit.s.x * 1.7 + hit.s.z) : 1;
      light.intensity = cfg.intensity * flick;
      light.position.set(hit.s.x + 0.5, hit.s.y + 0.5, hit.s.z + 0.5);
    }
  }

  // ── Multiplayer: shared edits + remote player avatars ────────────────────────

  /** Relay a local block change to the room (no-op in single-player). */
  private emitEdit(x: number, y: number, z: number, block: BlockType | null) {
    this.hud.onEdit?.(x, y, z, block);
  }

  /** Apply a block change received from another player (batched, rebuilt once/frame). */
  applyRemoteEdit(x: number, y: number, z: number, block: BlockType | null) {
    this.remoteEdits.push({ x, y, z, block });
  }

  private drainRemoteEdits() {
    if (!this.remoteEdits.length) return;
    for (const e of this.remoteEdits) {
      if (e.block === null) this.world.remove(e.x, e.y, e.z);
      else this.world.set(e.x, e.y, e.z, e.block);
    }
    this.remoteEdits.length = 0;
    this.rebuild();
  }

  /** A player joined (or we learned their name): spawn/refresh their avatar. */
  addPeer(id: string, name: string) {
    const existing = this.peers.get(id);
    if (existing) { existing.name = name; return; }
    const { group, label } = this.makePeerAvatar(name);
    group.position.copy(this.pos);
    this.scene.add(group);
    this.peers.set(id, {
      group, label, name,
      pos: this.pos.clone(), target: this.pos.clone(), yaw: 0, targetYaw: 0, bob: 0
    });
  }

  /** Newest position/look for a peer — the avatar eases toward it each frame. */
  setPeerState(id: string, x: number, y: number, z: number, yaw: number, _pitch: number) {
    let p = this.peers.get(id);
    if (!p) { this.addPeer(id, 'Player'); p = this.peers.get(id)!; }
    p.target.set(x, y, z);
    p.targetYaw = yaw;
  }

  removePeer(id: string) {
    const p = this.peers.get(id);
    if (!p) return;
    this.scene.remove(p.group);
    (p.label.material as THREE.SpriteMaterial).map?.dispose();
    (p.label.material as THREE.SpriteMaterial).dispose();
    this.peers.delete(id);
  }

  private updatePeers(dt: number) {
    if (!this.peers.size) return;
    const k = Math.min(1, dt * 12);
    for (const p of this.peers.values()) {
      p.pos.lerp(p.target, k);
      // Shortest-arc turn so the avatar never spins the long way round.
      let d = p.targetYaw - p.yaw;
      d = Math.atan2(Math.sin(d), Math.cos(d));
      p.yaw += d * k;
      const moving = p.pos.distanceToSquared(p.target) > 0.0004;
      p.bob += dt * (moving ? 9 : 0);
      p.group.position.set(p.pos.x, p.pos.y + Math.abs(Math.sin(p.bob)) * 0.04, p.pos.z);
      p.group.rotation.y = p.yaw;
    }
  }

  /** Relay our own position/look to the room, a few times a second. */
  private sendState(dt: number) {
    if (!this.hud.onState) return;
    this.stateCool -= dt;
    if (this.stateCool > 0) return;
    this.stateCool = 0.05;
    this.hud.onState(this.pos.x, this.pos.y, this.pos.z, this.yaw, this.pitch);
  }

  /** A blocky Steve-ish avatar (head/torso/arms/legs) with a floating name tag. */
  private makePeerAvatar(name: string): { group: THREE.Group; label: THREE.Sprite } {
    const group = new THREE.Group();
    const box = (w: number, h: number, d: number, color: string, x: number, y: number, z: number) => {
      const m = new THREE.Mesh(this.boxGeo, new THREE.MeshLambertMaterial({ color }));
      m.scale.set(w, h, d);
      m.position.set(x, y, z);
      m.castShadow = true;
      group.add(m);
    };
    const skin = '#e8b98a', shirt = '#2f6fd0', pants = '#2b3a67';
    box(0.2, 0.7, 0.2, pants, -0.12, 0.35, 0); // legs
    box(0.2, 0.7, 0.2, pants, 0.12, 0.35, 0);
    box(0.5, 0.6, 0.28, shirt, 0, 1.0, 0); // torso
    box(0.16, 0.6, 0.18, skin, -0.33, 1.0, 0); // arms
    box(0.16, 0.6, 0.18, skin, 0.33, 1.0, 0);
    box(0.42, 0.42, 0.42, skin, 0, 1.55, 0); // head
    const label = this.makeNameTag(name);
    label.position.set(0, 2.15, 0);
    group.add(label);
    return { group, label };
  }

  /** A camera-facing name tag rendered to a small canvas texture. */
  private makeNameTag(name: string): THREE.Sprite {
    const text = name.slice(0, 16) || 'Player';
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    ctx.font = 'bold 28px system-ui, sans-serif';
    const w = Math.ceil(ctx.measureText(text).width) + 24;
    canvas.width = w;
    canvas.height = 40;
    const c = canvas.getContext('2d')!;
    c.font = 'bold 28px system-ui, sans-serif';
    c.textBaseline = 'middle';
    c.fillStyle = 'rgba(8,12,20,0.66)';
    c.fillRect(0, 0, w, 40);
    c.fillStyle = '#ffffff';
    c.fillText(text, 12, 21);
    const tex = new THREE.CanvasTexture(canvas);
    
    tex.colorSpace = THREE.SRGBColorSpace;
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, fog: false });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set((w / 40) * 0.6, 0.6, 1);
    return sprite;
  }

  /** Remove every breakable block within a Chebyshev radius (igniting any TNT it finds). */
  private mineCluster(cx: number, cy: number, cz: number, r: number) {
    for (let x = cx - r; x <= cx + r; x++) {
      for (let y = cy - r; y <= cy + r; y++) {
        for (let z = cz - r; z <= cz + r; z++) {
          const type = this.world.get(x, y, z);
          if (!type || BLOCKS[type].unbreakable) continue;
          if (EXPLOSIVE_RADII[type] != null) this.primeTNT(x, y, z, 0.2, EXPLOSIVE_RADII[type]!);
          else { this.world.remove(x, y, z); this.emitEdit(x, y, z, null); }
        }
      }
    }
  }

  /** Right click: place a block (or sleep when looking at a bed). */
  private secondaryAction() {
    if (this.spectator) return; // spectators can't touch the world
    this.swing();
    const t = this.target();
    if (!t) return;
    const looked = this.world.get(t.coord[0], t.coord[1], t.coord[2]);
    if (looked === 'bed') {
      this.sleep();
      return;
    }
    const item = this.hotbar[this.selected];
    if (!item?.block) return; // empty slots & tools can't be placed
    const x = t.coord[0] + t.normal.x;
    const y = t.coord[1] + t.normal.y;
    const z = t.coord[2] + t.normal.z;
    if (this.world.isSolid(x, y, z) || this.overlapsPlayer(x, y, z)) return;
    this.world.set(x, y, z, item.block);
    this.emitEdit(x, y, z, item.block);
    this.rebuild();
  }

  private overlapsPlayer(x: number, y: number, z: number): boolean {
    return (
      this.pos.x + HALF_W > x &&
      this.pos.x - HALF_W < x + 1 &&
      this.pos.y + HEIGHT > y &&
      this.pos.y < y + 1 &&
      this.pos.z + HALF_W > z &&
      this.pos.z - HALF_W < z + 1
    );
  }

  // ── Structures (/paste) ──────────────────────────────────────────────────────

  /** Build a prefab two-storey luxury mansion a few blocks in front of the player. */
  pasteMansion() {
    const fx = -Math.sin(this.yaw);
    const fz = -Math.cos(this.yaw);
    const cx = Math.round(this.pos.x + fx * 7);
    const cz = Math.round(this.pos.z + fz * 7);
    const fy = Math.floor(this.pos.y);

    const W = 5; // half-width (x)
    const D = 4; // half-depth (z)
    const set = (x: number, y: number, z: number, t: BlockType) => {
      this.world.set(cx + x, fy + y, cz + z, t);
      this.emitEdit(cx + x, fy + y, cz + z, t);
    };
    const clear = (x: number, y: number, z: number) => {
      this.world.remove(cx + x, fy + y, cz + z);
      this.emitEdit(cx + x, fy + y, cz + z, null);
    };

    // Slabs: ground floor, mid floor, roof.
    for (let x = -W; x <= W; x++) {
      for (let z = -D; z <= D; z++) {
        set(x, 0, z, 'quartz_block');
        set(x, 5, z, 'oak_planks');
        set(x, 10, z, 'quartz_block');
      }
    }

    // Perimeter walls for both storeys, with glass windows.
    const wall = (x: number, y: number, z: number) => {
      const local = y <= 4 ? y : y - 5; // height within the storey (1..4)
      const isWindow = (local === 2 || local === 3) && (x + z) % 2 === 0;
      set(x, y, z, isWindow ? 'glass' : 'quartz_block');
    };
    for (const base of [0, 5]) {
      for (let y = 1; y <= 4; y++) {
        for (let x = -W; x <= W; x++) { wall(x, base + y, -D); wall(x, base + y, D); }
        for (let z = -D; z <= D; z++) { wall(-W, base + y, z); wall(W, base + y, z); }
      }
    }

    // Oak-log corner columns + roof parapet + a glowstone beacon.
    for (let y = 0; y <= 10; y++) {
      set(-W, y, -D, 'oak_log'); set(W, y, -D, 'oak_log');
      set(-W, y, D, 'oak_log'); set(W, y, D, 'oak_log');
    }
    for (let x = -W; x <= W; x++) { set(x, 11, -D, 'quartz_block'); set(x, 11, D, 'quartz_block'); }
    for (let z = -D; z <= D; z++) { set(-W, 11, z, 'quartz_block'); set(W, 11, z, 'quartz_block'); }
    set(0, 11, 0, 'glowstone');

    // Front doors (ground + balcony) facing -z, and a staircase up through the slab.
    clear(0, 1, -D); clear(0, 2, -D);
    clear(0, 6, -D); clear(0, 7, -D);
    clear(3, 5, 0); clear(3, 5, 1);
    set(3, 1, 3, 'quartz_block');
    set(3, 2, 2, 'quartz_block');
    set(3, 3, 1, 'quartz_block');
    set(3, 4, 0, 'quartz_block');

    // Ground-floor luxury furnishing: bed, crafting table, diamond accents, lights.
    set(-W + 1, 1, D - 1, 'bed');
    set(W - 1, 1, D - 1, 'crafting_table');
    set(-W + 1, 1, -D + 1, 'diamond_block');
    set(W - 1, 1, -D + 1, 'diamond_block');
    set(-2, 4, -2, 'glowstone'); set(2, 4, 2, 'glowstone'); set(2, 4, -2, 'glowstone'); set(-2, 4, 2, 'glowstone');
    set(0, 3, D - 1, 'torch'); set(0, 3, -D + 1, 'torch');

    // Upper-floor bedroom.
    set(-W + 1, 6, D - 1, 'bed');
    set(W - 1, 6, D - 1, 'diamond_block');
    set(-2, 9, -2, 'glowstone'); set(2, 9, 2, 'glowstone');

    // Don't suffocate the player if a wall happened to land on them.
    const px = Math.floor(this.pos.x), py = Math.floor(this.pos.y), pz = Math.floor(this.pos.z);
    for (let y = 0; y < 3; y++) this.world.remove(px, py + y, pz);

    this.rebuild();
  }

  /** Build a huge ~1000 m² (32×32) five-storey house with two front doors. */
  pasteBigHouse() {
    const fx = -Math.sin(this.yaw);
    const fz = -Math.cos(this.yaw);
    const cx = Math.round(this.pos.x + fx * 20);
    const cz = Math.round(this.pos.z + fz * 20);
    const fy = Math.floor(this.pos.y);

    const HALF = 16;         // 32×32 footprint ≈ 1024 m²
    const FLOORS = 5;
    const FH = 4;            // floor-to-floor height
    const top = FLOORS * FH; // roof level
    const lo = -HALF;
    const hi = HALF - 1;

    const set = (x: number, y: number, z: number, t: BlockType) => {
      this.world.set(cx + x, fy + y, cz + z, t);
      this.emitEdit(cx + x, fy + y, cz + z, t);
    };
    const clear = (x: number, y: number, z: number) => {
      this.world.remove(cx + x, fy + y, cz + z);
      this.emitEdit(cx + x, fy + y, cz + z, null);
    };

    // Floor + ceiling slabs for each storey (and the roof).
    for (let f = 0; f <= FLOORS; f++) {
      const y = f * FH;
      const mat: BlockType = f === 0 || f === FLOORS ? 'quartz_block' : 'oak_planks';
      for (let x = lo; x <= hi; x++) {
        for (let z = lo; z <= hi; z++) set(x, y, z, mat);
      }
    }

    // Perimeter walls for every storey, with glass windows.
    for (let f = 0; f < FLOORS; f++) {
      const base = f * FH;
      for (let y = 1; y < FH; y++) {
        const win = (x: number, z: number) => y === 2 && (x + z) % 3 === 0;
        for (let x = lo; x <= hi; x++) {
          set(x, base + y, lo, win(x, lo) ? 'glass' : 'quartz_block');
          set(x, base + y, hi, win(x, hi) ? 'glass' : 'quartz_block');
        }
        for (let z = lo; z <= hi; z++) {
          set(lo, base + y, z, win(lo, z) ? 'glass' : 'quartz_block');
          set(hi, base + y, z, win(hi, z) ? 'glass' : 'quartz_block');
        }
      }
    }

    // Oak-log corner columns + roof parapet + a glowstone beacon.
    for (let y = 0; y <= top; y++) {
      set(lo, y, lo, 'oak_log'); set(hi, y, lo, 'oak_log');
      set(lo, y, hi, 'oak_log'); set(hi, y, hi, 'oak_log');
    }
    for (let x = lo; x <= hi; x++) { set(x, top + 1, lo, 'quartz_block'); set(x, top + 1, hi, 'quartz_block'); }
    for (let z = lo; z <= hi; z++) { set(lo, top + 1, z, 'quartz_block'); set(hi, top + 1, z, 'quartz_block'); }
    set(0, top + 1, 0, 'glowstone');

    // Two front doors (z = lo wall), each 2 wide and 3 tall.
    for (let y = 1; y <= 3; y++) {
      clear(-5, y, lo); clear(-4, y, lo);
      clear(4, y, lo); clear(5, y, lo);
    }

    // A staircase climbing every storey, punching through the slab above it.
    const sx0 = lo + 3;
    const srz = hi - 4;
    for (let f = 0; f < FLOORS; f++) {
      const base = f * FH;
      for (let i = 0; i < FH; i++) {
        const x = sx0 + i;
        set(x, base + 1 + i, srz, 'quartz_block');
        clear(x, base + 2 + i, srz);
        clear(x, base + 3 + i, srz);
        clear(x, (f + 1) * FH, srz);
        clear(x, (f + 1) * FH, srz - 1);
      }
    }

    // Furnish every storey: bed, crafting table, diamond accent, ceiling lights.
    for (let f = 0; f < FLOORS; f++) {
      const base = f * FH;
      set(lo + 2, base + 1, hi - 2, 'bed');
      set(hi - 2, base + 1, hi - 2, 'crafting_table');
      set(lo + 2, base + 1, lo + 2, 'diamond_block');
      set(0, base + 3, 0, 'glowstone');
      set(lo + 5, base + 3, lo + 5, 'glowstone');
      set(hi - 5, base + 3, hi - 5, 'glowstone');
      set(lo + 5, base + 3, hi - 5, 'glowstone');
      set(hi - 5, base + 3, lo + 5, 'glowstone');
    }

    // Don't suffocate the player.
    const px = Math.floor(this.pos.x), py = Math.floor(this.pos.y), pz = Math.floor(this.pos.z);
    for (let y = 0; y < 3; y++) this.world.remove(px, py + y, pz);

    this.rebuild();
  }

  // ── TNT, explosions, particles ───────────────────────────────────────────────

  private primeTNT(x: number, y: number, z: number, fuse: number, radius = TNT_RADIUS) {
    this.world.remove(x, y, z);
    this.emitEdit(x, y, z, null); // peers see the block go; the fuse itself is local
    const mat = new THREE.MeshLambertMaterial({ color: '#b1351f', emissive: '#ffffff', emissiveIntensity: 0 });
    const mesh = new THREE.Mesh(this.boxGeo, mat);
    mesh.position.set(x + 0.5, y + 0.5, z + 0.5);
    this.scene.add(mesh);
    this.primed.push({ x, y, z, fuse, mesh, radius });
  }

  private explode(cx: number, cy: number, cz: number, radius: number) {
    const big = radius / TNT_RADIUS;
    this.shake(0.45 * big, 0.4 * Math.min(big, 1.6));
    this.spawnParticles(cx, cy, cz, Math.min(50 + radius * 6, 140), ['#ffce54', '#ff8c2a', '#e0492a', '#8a8a8a', '#6e5230', '#fff3b0']);
    this.hurtMobsNear(cx, cy, cz, radius + 1); // mobs caught in the blast die

    const r = Math.ceil(radius);
    const chain: [number, number, number][] = [];
    for (let x = Math.floor(cx) - r; x <= Math.floor(cx) + r; x++) {
      for (let y = Math.floor(cy) - r; y <= Math.floor(cy) + r; y++) {
        for (let z = Math.floor(cz) - r; z <= Math.floor(cz) + r; z++) {
          const d = Math.hypot(x + 0.5 - cx, y + 0.5 - cy, z + 0.5 - cz);
          if (d > radius) continue;
          const type = this.world.get(x, y, z);
          if (!type || BLOCKS[type].unbreakable) continue;
          if (EXPLOSIVE_RADII[type] != null) {
            chain.push([x, y, z]);
            continue;
          }
          if (d > radius - 1 && Math.random() < 0.35) continue; // ragged crater rim
          this.world.remove(x, y, z);
          this.emitEdit(x, y, z, null);
        }
      }
    }
    for (const [x, y, z] of chain) this.primeTNT(x, y, z, 0.1 + Math.random() * 0.3, EXPLOSIVE_RADII[this.world.get(x, y, z) ?? 'tnt'] ?? TNT_RADIUS);
    this.rebuild();
  }

  private updatePrimed(dt: number) {
    for (let i = this.primed.length - 1; i >= 0; i--) {
      const p = this.primed[i];
      p.fuse -= dt;
      // Flash faster as the fuse runs out, and puff up slightly.
      const blink = 0.5 + 0.5 * Math.sin(this.elapsed * (8 + (TNT_FUSE - p.fuse) * 14));
      (p.mesh.material as THREE.MeshLambertMaterial).emissiveIntensity = blink * 0.9;
      const s = 1 + blink * 0.08;
      p.mesh.scale.setScalar(s);
      if (p.fuse <= 0) {
        this.scene.remove(p.mesh);
        (p.mesh.material as THREE.Material).dispose();
        this.primed.splice(i, 1);
        this.explode(p.x + 0.5, p.y + 0.5, p.z + 0.5, p.radius);
      }
    }
  }

  private spawnParticles(cx: number, cy: number, cz: number, count: number, palette: string[]) {
    const color = new THREE.Color();
    let spawned = 0;
    for (let i = 0; i < PARTICLE_CAP && spawned < count; i++) {
      const p = this.pool[i];
      if (p.life > 0) continue;
      p.pos.set(cx + (Math.random() - 0.5), cy + (Math.random() - 0.5), cz + (Math.random() - 0.5));
      p.vel.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize().multiplyScalar(2 + Math.random() * 7);
      p.vel.y += 2;
      p.max = 0.45 + Math.random() * 0.5;
      p.life = p.max;
      color.set(palette[(Math.random() * palette.length) | 0]);
      this.particles.setColorAt(i, color);
      spawned++;
    }
    if (this.particles.instanceColor) this.particles.instanceColor.needsUpdate = true;
  }

  private updateParticles(dt: number) {
    const m = new THREE.Matrix4();
    const hidden = new THREE.Matrix4().makeScale(0, 0, 0);
    let any = false;
    for (let i = 0; i < PARTICLE_CAP; i++) {
      const p = this.pool[i];
      if (p.life <= 0) continue;
      any = true;
      p.life -= dt;
      if (p.life <= 0) {
        this.particles.setMatrixAt(i, hidden);
        continue;
      }
      p.vel.y -= 18 * dt;
      p.pos.addScaledVector(p.vel, dt);
      const s = Math.max(0.05, p.life / p.max);
      m.makeScale(s, s, s);
      m.setPosition(p.pos.x, p.pos.y, p.pos.z);
      this.particles.setMatrixAt(i, m);
    }
    if (any) this.particles.instanceMatrix.needsUpdate = true;
  }

  private shake(mag: number, dur: number) {
    this.shakeMag = mag;
    this.shakeT = dur;
    this.shakeDur = dur;
  }

  // ── Day / night + sleeping ───────────────────────────────────────────────────

  private sleep() {
    this.time = 0.04; // dawn
    this.hud.onMessage('💤  …  Good morning! ☀️');
  }

  private updateSky() {
    const t = this.time;
    // Sun arc: rises in the east, noon at t=0.25, sets at t=0.5.
    const ang = t * Math.PI * 2;
    // Visual sun direction (drives the sun disc + star fade) — unchanged look.
    this.sunDir.set(Math.cos(ang) * 100, Math.sin(ang) * 100 + 12, 35).normalize();
    if (this.realism) {
      // Park the shadow-casting sun rig on the player so its tight frustum (and
      // therefore the crisp shadows) always covers wherever they're standing.
      this.sun.position.set(
        this.pos.x + this.sunDir.x * 140,
        this.pos.y + this.sunDir.y * 140,
        this.pos.z + this.sunDir.z * 140
      );
      this.sunTarget.position.copy(this.pos);
      this.sunTarget.updateMatrixWorld();
    } else {
      this.sun.position.set(Math.cos(ang) * 100, Math.sin(ang) * 100 + 12, 35);
    }

    const sky = _skyTmp;
    if (this.mods.has('nether')) {
      // The Nether mod swaps the day/night sky for a dim, smouldering red.
      sky.set('#2a0807');
      this.sun.intensity = 0.45;
      this.sun.color.set('#ff7a4a');
      this.hemi.intensity = 0.5;
      this.ambient.intensity = 0.45;
    } else {
      sky.copy(sampleColor(SKY_KEYS, t));
      this.sun.intensity = sampleNum(SUN_KEYS, t);
      this.sun.color.copy(sampleColor(SUNCOL_KEYS, t));
      this.hemi.intensity = sampleNum(HEMI_KEYS, t);
      this.ambient.intensity = sampleNum(AMB_KEYS, t);
      // Realism: a stronger, harder sun and softer fill so cast shadows read
      // with real contrast instead of washing out under flat ambient light.
      if (this.realism) {
        this.sun.intensity *= 1.45;
        this.hemi.intensity *= 0.72;
        this.ambient.intensity *= 0.55;
      }
      // Fullbright keeps the lights up so night never goes pitch black.
      if (this.fullbright) {
        this.sun.intensity = Math.max(this.sun.intensity, 0.55);
        this.hemi.intensity = Math.max(this.hemi.intensity, 0.95);
        this.ambient.intensity = Math.max(this.ambient.intensity, 0.7);
      }
    }

    // Fly high enough and the sky fades to deep space, the fog pulls back, and
    // the stars come out — about a one-minute climb at flying speed.
    const space = Math.max(0, Math.min(1, (this.pos.y - SPACE_START) / (SPACE_FULL - SPACE_START)));
    sky.lerp(_spaceColor.set('#05060d'), space);
    (this.scene.background as THREE.Color).copy(sky);
    const fog = this.scene.fog as THREE.Fog;
    fog.color.copy(sky);
    fog.near = this.fogNear + space * 240;
    fog.far = this.fogFar + space * 640;
    if (space > 0) this.ambient.intensity = Math.max(this.ambient.intensity, 0.25 + space * 0.3);

    this.updateSkyDecor(space);
  }

  /** Park the star field + sun disc on the camera and fade them in by night/altitude. */
  private updateSkyDecor(space: number) {
    const ex = this.pos.x;
    const ey = this.pos.y + EYE;
    const ez = this.pos.z;
    this.stars.position.set(ex, ey, ez);
    const night = 1 - Math.min(1, this.sun.intensity / 0.7);
    (this.stars.material as THREE.PointsMaterial).opacity = Math.min(1, Math.max(night, space));

    _sunDir.copy(this.sunDir);
    this.sunSprite.position.set(ex + _sunDir.x * 400, ey + _sunDir.y * 400, ez + _sunDir.z * 400);
    const visible = _sunDir.y > -0.1 ? 1 : 0;
    (this.sunSprite.material as THREE.SpriteMaterial).opacity = visible * Math.min(1, this.sun.intensity + space * 0.6);
  }

  // ── Simulation ───────────────────────────────────────────────────────────────

  private loop = () => {
    if (this.disposed) return;
    this.raf = requestAnimationFrame(this.loop);

    const dt = Math.min(this.clock.getDelta(), 0.05);
    this.elapsed += dt;
    this.time = (this.time + (dt / DAY_LENGTH) * this.daySpeed) % 1;

    if (this.locked || this.touch) this.update(dt);
    this.drainRemoteEdits();
    this.updatePeers(dt);
    this.sendState(dt);
    this.streamChunks();
    this.updateSurvival(dt);
    this.updatePrimed(dt);
    this.updateParticles(dt);
    this.updateFalling(dt);
    this.updateBlockLights();
    this.updateMobs(dt);
    this.updateRain(dt);
    this.updateRainbow();
    this.updateSky();
    this.updateHeldTransform(dt);

    // Camera with optional explosion shake.
    this.camera.position.set(this.pos.x, this.pos.y + EYE, this.pos.z);
    if (this.shakeT > 0) {
      const k = (this.shakeT / this.shakeDur) * this.shakeMag;
      this.camera.position.x += (Math.random() - 0.5) * k;
      this.camera.position.y += (Math.random() - 0.5) * k;
      this.camera.position.z += (Math.random() - 0.5) * k;
      this.shakeT -= dt;
    }
    this.camera.rotation.set(this.pitch, this.yaw, 0);

    this.updateHighlight();
    this.renderer.render(this.scene, this.camera);

    this.timeReport += dt;
    if (this.timeReport >= 0.25) {
      this.hud.onTime(this.time);
      this.timeReport = 0;
    }
    this.fpsAccum += dt;
    this.fpsFrames++;
    if (this.fpsAccum >= 0.5) {
      this.hud.onFps(Math.round(this.fpsFrames / this.fpsAccum));
      this.fpsAccum = 0;
      this.fpsFrames = 0;
    }
  };

  private updateHeldTransform(dt: number) {
    if (this.swingT < 0.28) this.swingT += dt;
    const prog = this.swingT < 0.28 ? this.swingT / 0.28 : -1;
    const s = prog >= 0 ? Math.sin(prog * Math.PI) : 0;
    this.heldGroup.position.set(this.heldBasePos.x, this.heldBasePos.y - 0.18 * s, this.heldBasePos.z + 0.12 * s);
    this.heldGroup.rotation.set(this.heldBaseRot.x - 1.3 * s, this.heldBaseRot.y, this.heldBaseRot.z);
  }

  private update(dt: number) {
    if (this.dead) return; // hardcore death freezes the player
    const forwardX = -Math.sin(this.yaw);
    const forwardZ = -Math.cos(this.yaw);
    const rightX = Math.cos(this.yaw);
    const rightZ = -Math.sin(this.yaw);

    let mx = 0;
    let mz = 0;
    if (this.keys.has('KeyW')) { mx += forwardX; mz += forwardZ; }
    if (this.keys.has('KeyS')) { mx -= forwardX; mz -= forwardZ; }
    if (this.keys.has('KeyD')) { mx += rightX; mz += rightZ; }
    if (this.keys.has('KeyA')) { mx -= rightX; mz -= rightZ; }
    const len = Math.hypot(mx, mz);
    const sprint = this.keys.has('ShiftLeft') || this.keys.has('ShiftRight');
    const flying = this.fly || this.ghost;
    const speed = (flying ? FLY : sprint ? SPRINT : WALK) * this.speedMul;
    const targetX = len > 0 ? (mx / len) * speed : 0;
    const targetZ = len > 0 ? (mz / len) * speed : 0;
    // On ice you accelerate (and stop) slowly, so you keep sliding.
    const grip = !flying && this.standingOn('slippery') ? 0.08 : 1;
    this.vel.x += (targetX - this.vel.x) * grip;
    this.vel.z += (targetZ - this.vel.z) * grip;

    if (flying) {
      // Vertical flight is fully manual: Space climbs, Shift descends, otherwise hover.
      let vy = 0;
      if (this.keys.has('Space')) vy += 1;
      if (sprint) vy -= 1;
      this.vel.y = vy * FLY;
    } else if (this.jetpack && this.keys.has('Space')) {
      this.vel.y = 8.5; // hold Space to rocket upward
    } else {
      this.vel.y -= GRAVITY * dt;
      if (this.vel.y < -55) this.vel.y = -55;
      if (this.onGround && this.keys.has('Space')) {
        this.vel.y = this.jumpVel;
        this.onGround = false;
      }
    }

    this.onGround = false;
    this.moveAxis(0, this.vel.x * dt);
    this.moveAxis(2, this.vel.z * dt);
    this.moveAxis(1, this.vel.y * dt);

    // Falling out of the world: lethal in survival/hardcore, a safety respawn otherwise.
    if (this.pos.y < -30) {
      if (this.damageable) this.hurt(MAX_HEALTH);
      else this.respawn();
    }
  }

  /** Drop the player back onto spawn (the island for sky worlds, surface else). */
  private respawn() {
    if (this.worldType === 'skyblock' || this.worldType === 'oneblock') {
      this.pos.set(0.5, 3, 0.5);
    } else {
      this.pos.set(0.5, this.world.surfaceHeight(0, 9) + 2, 9.5);
    }
    this.vel.set(0, 0, 0);
  }

  private moveAxis(axis: 0 | 1 | 2, amount: number) {
    if (amount === 0) return;
    const p = this.pos;
    p.setComponent(axis, p.getComponent(axis) + amount);
    if (this.ghost) return; // Spectator / No-Clip walk straight through everything.

    const minX = Math.floor(p.x - HALF_W);
    const maxX = Math.floor(p.x + HALF_W);
    const minY = Math.floor(p.y);
    const maxY = Math.floor(p.y + HEIGHT);
    const minZ = Math.floor(p.z - HALF_W);
    const maxZ = Math.floor(p.z + HALF_W);

    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        for (let z = minZ; z <= maxZ; z++) {
          if (!this.world.isSolid(x, y, z)) continue;
          if (axis === 0) {
            p.x = amount > 0 ? x - HALF_W - EPS : x + 1 + HALF_W + EPS;
            this.vel.x = 0;
          } else if (axis === 2) {
            p.z = amount > 0 ? z - HALF_W - EPS : z + 1 + HALF_W + EPS;
            this.vel.z = 0;
          } else {
            if (amount > 0) {
              p.y = y - HEIGHT - EPS;
              this.vel.y = 0;
            } else {
              p.y = y + 1 + EPS;
              const below = this.world.get(x, y, z);
              // Slime blocks fling you back up; everything else just stops you.
              if (below && BLOCKS[below].bouncy && this.vel.y < -6) {
                this.vel.y = Math.min(-this.vel.y * 0.72, 16);
              } else {
                // A hard enough landing hurts in survival/hardcore.
                if (this.damageable && this.vel.y < -FALL_SAFE_VEL) {
                  this.hurt(Math.round((-this.vel.y - FALL_SAFE_VEL) / FALL_DMG_SCALE));
                }
                this.vel.y = 0;
                this.onGround = true;
              }
            }
          }
          return;
        }
      }
    }
  }

  /** When the player crosses into a new chunk, stream terrain and re-mesh once. */
  private streamChunks() {
    const cx = Math.floor(this.pos.x / CHUNK);
    const cz = Math.floor(this.pos.z / CHUNK);
    if (cx === this.chunkX && cz === this.chunkZ) return;
    this.chunkX = cx;
    this.chunkZ = cz;
    if (this.world.streamAround(this.pos.x, this.pos.z)) this.rebuild();
  }

  /** Is the block directly under the player's feet of the given flavour? */
  private standingOn(flag: 'slippery' | 'bouncy'): boolean {
    const y = Math.floor(this.pos.y - 0.06);
    for (let x = Math.floor(this.pos.x - HALF_W); x <= Math.floor(this.pos.x + HALF_W); x++) {
      for (let z = Math.floor(this.pos.z - HALF_W); z <= Math.floor(this.pos.z + HALF_W); z++) {
        const t = this.world.get(x, y, z);
        if (t && BLOCKS[t][flag]) return true;
      }
    }
    return false;
  }

  private updateHighlight() {
    if (this.spectator) {
      this.highlight.visible = false;
      return;
    }
    const t = this.target();
    if (!t) {
      this.highlight.visible = false;
      return;
    }
    this.highlight.visible = true;
    this.highlight.position.set(t.coord[0] + 0.5, t.coord[1] + 0.5, t.coord[2] + 0.5);
  }

  // ── Mobs (Mobs mod) ──────────────────────────────────────────────────────────

  private spawnMobs() {
    if (!this.mods.has('mobs')) return;
    for (let i = 0; i < 7; i++) {
      const kind: Mob['kind'] = i % 2 === 0 ? 'zombie' : 'pig';
      const x = (Math.random() * 2 - 1) * (SPAWN_RADIUS - 2);
      const z = (Math.random() * 2 - 1) * (SPAWN_RADIUS - 2);
      const group = this.mobMesh(kind);
      const pos = new THREE.Vector3(x, this.world.surfaceHeight(Math.round(x), Math.round(z)) + 1, z);
      group.position.copy(pos);
      this.scene.add(group);
      this.mobs.push({ kind, group, pos, dir: Math.random() * Math.PI * 2, changeT: 0, hp: 3, bob: Math.random() * 6, hurtT: 0 });
    }
  }

  /** A chunky two-tone critter: legs, body, head. Zombies are green, pigs pink. */
  private mobMesh(kind: Mob['kind']): THREE.Group {
    const g = new THREE.Group();
    const body = kind === 'zombie' ? '#4a7a3a' : '#e89aa6';
    const head = kind === 'zombie' ? '#3a6a2f' : '#e08594';
    const limb = kind === 'zombie' ? '#34562a' : '#ca7d8a';
    const box = (w: number, h: number, d: number, color: string, x: number, y: number, z: number) => {
      const m = new THREE.Mesh(this.boxGeo, new THREE.MeshLambertMaterial({ color }));
      m.scale.set(w, h, d);
      m.position.set(x, y, z);
      m.castShadow = true; // no cost unless the Realism shadow map is on
      g.add(m);
    };
    box(0.18, 0.4, 0.18, limb, -0.13, 0.2, 0); // legs
    box(0.18, 0.4, 0.18, limb, 0.13, 0.2, 0);
    box(0.5, 0.5, 0.28, body, 0, 0.65, 0); // body
    box(0.36, 0.36, 0.36, head, 0, 1.08, 0.02); // head
    if (kind === 'pig') box(0.14, 0.1, 0.08, '#d97a88', 0, 1.06, 0.2); // snout
    return g;
  }

  private updateMobs(dt: number) {
    if (!this.mobs.length) return;
    if (this.killaura) this.auraCool -= dt;
    for (const mob of this.mobs) {
      // Wander: pick a fresh heading every couple of seconds and amble along it.
      mob.changeT -= dt;
      if (mob.changeT <= 0) {
        mob.dir = Math.random() * Math.PI * 2;
        mob.changeT = 1.5 + Math.random() * 2.5;
      }
      // Zombies home in on a nearby player; pigs just amble.
      if (mob.kind === 'zombie') {
        const dx = this.pos.x - mob.pos.x;
        const dz = this.pos.z - mob.pos.z;
        const d = Math.hypot(dx, dz);
        if (d < 11 && d > 0.001) mob.dir = Math.atan2(dz, dx);
      }
      const speed = mob.kind === 'zombie' ? 1.7 : 1.3;
      mob.pos.x += Math.cos(mob.dir) * speed * dt;
      mob.pos.z += Math.sin(mob.dir) * speed * dt;
      const lim = SPAWN_RADIUS; // mobs roam the spawn area (which never unloads)
      if (mob.pos.x < -lim || mob.pos.x > lim) { mob.pos.x = Math.max(-lim, Math.min(lim, mob.pos.x)); mob.dir = Math.PI - mob.dir; }
      if (mob.pos.z < -lim || mob.pos.z > lim) { mob.pos.z = Math.max(-lim, Math.min(lim, mob.pos.z)); mob.dir = -mob.dir; }
      mob.pos.y = this.world.surfaceHeight(Math.round(mob.pos.x), Math.round(mob.pos.z)) + 1;

      mob.bob += dt * 6;
      mob.group.position.set(mob.pos.x, mob.pos.y + Math.abs(Math.sin(mob.bob)) * 0.05, mob.pos.z);
      mob.group.rotation.y = -mob.dir + Math.PI / 2;
      if (mob.hurtT > 0) mob.hurtT -= dt;

      // A zombie that reaches you bites (survival/hardcore only).
      if (this.damageable && mob.kind === 'zombie' && this.mobDmgCool <= 0) {
        const d = Math.hypot(mob.pos.x - this.pos.x, mob.pos.z - this.pos.z);
        if (d < MOB_TOUCH_DIST && Math.abs(mob.pos.y - this.pos.y) < 2) {
          this.hurt(MOB_DMG);
          this.mobDmgCool = MOB_DMG_INTERVAL;
        }
      }

      // KillAura: auto-smack anything that strays within range.
      if (this.killaura && this.auraCool <= 0) {
        const d = Math.hypot(mob.pos.x - this.pos.x, mob.pos.z - this.pos.z);
        if (d < 4) { this.damageMob(mob, 1); this.swing(); }
      }
    }
    if (this.killaura && this.auraCool <= 0) this.auraCool = 0.5;
    this.mobs = this.mobs.filter((m) => m.hp > 0);
  }

  /** Left-click melee: hit the nearest mob roughly in front of the camera. */
  private hitMobInFront(): boolean {
    if (!this.mobs.length) return false;
    const fx = -Math.sin(this.yaw) * Math.cos(this.pitch);
    const fz = -Math.cos(this.yaw) * Math.cos(this.pitch);
    let best: Mob | null = null;
    let bestD = 4;
    for (const mob of this.mobs) {
      const dx = mob.pos.x - this.pos.x;
      const dz = mob.pos.z - this.pos.z;
      const d = Math.hypot(dx, dz);
      if (d > bestD || d < 0.001) continue;
      if ((dx / d) * fx + (dz / d) * fz < 0.55) continue; // must be in front
      best = mob;
      bestD = d;
    }
    if (!best) return false;
    this.damageMob(best, this.hotbar[this.selected]?.tool?.includes('sword') ? 3 : 1);
    return true;
  }

  private hurtMobsNear(cx: number, cy: number, cz: number, r: number) {
    for (const mob of this.mobs) {
      if (Math.hypot(mob.pos.x - cx, mob.pos.y - cy, mob.pos.z - cz) <= r) this.damageMob(mob, 99);
    }
  }

  private damageMob(mob: Mob, amount: number) {
    if (mob.hp <= 0) return;
    mob.hp -= amount;
    mob.hurtT = 0.12;
    const palette = mob.kind === 'zombie' ? ['#4a7a3a', '#6fae4a', '#2f5a26'] : ['#e89aa6', '#f4c0c8', '#ca7d8a'];
    this.spawnParticles(mob.pos.x, mob.pos.y + 0.7, mob.pos.z, mob.hp <= 0 ? 16 : 6, palette);
    if (mob.hp <= 0) {
      this.scene.remove(mob.group);
      this.hud.onMessage(mob.kind === 'zombie' ? '🧟 Zombie down!' : '🐷 Oink!');
    }
  }

  // ── Survival: health, damage & death ─────────────────────────────────────────

  /** Per-frame environmental damage + slow regen (no-op outside survival/hardcore). */
  private updateSurvival(dt: number) {
    if (!this.damageable || this.dead) return;
    this.mobDmgCool -= dt;

    // Standing in lava burns you on a timer.
    this.lavaTimer -= dt;
    if (this.lavaTimer <= 0 && this.inLava()) {
      this.hurt(LAVA_DMG);
      this.lavaTimer = LAVA_INTERVAL;
    }

    // Heal slowly once you've gone a few seconds without taking a hit.
    this.timeSinceHurt += dt;
    if (this.health < MAX_HEALTH && this.timeSinceHurt >= REGEN_DELAY) {
      this.regenTimer += dt;
      if (this.regenTimer >= REGEN_INTERVAL) {
        this.regenTimer = 0;
        this.health = Math.min(MAX_HEALTH, this.health + 1);
        this.hud.onHealth(this.health, MAX_HEALTH);
      }
    }
  }

  /** Does the player's body (or the block underfoot) overlap lava? */
  private inLava(): boolean {
    const x0 = Math.floor(this.pos.x - HALF_W);
    const x1 = Math.floor(this.pos.x + HALF_W);
    const z0 = Math.floor(this.pos.z - HALF_W);
    const z1 = Math.floor(this.pos.z + HALF_W);
    const y0 = Math.floor(this.pos.y - 0.06); // block underfoot
    const y1 = Math.floor(this.pos.y + HEIGHT);
    for (let x = x0; x <= x1; x++) {
      for (let z = z0; z <= z1; z++) {
        for (let y = y0; y <= y1; y++) {
          if (this.world.get(x, y, z) === 'lava_block') return true;
        }
      }
    }
    return false;
  }

  /** Apply damage; triggers death (respawn or hardcore Game Over) at 0 health. */
  private hurt(amount: number) {
    if (!this.damageable || this.dead || this.op || amount <= 0) return;
    this.health = Math.max(0, this.health - amount);
    this.timeSinceHurt = 0;
    this.regenTimer = 0;
    this.hud.onHealth(this.health, MAX_HEALTH);
    this.shake(0.22, 0.16);
    if (this.health <= 0) this.die();
  }

  private die() {
    this.spawnParticles(this.pos.x, this.pos.y + 0.9, this.pos.z, 18, ['#b1351f', '#e0492a', '#8a8a8a']);
    if (this.hardcore) {
      // One life: lock the player out so the HUD can show Game Over.
      this.dead = true;
      this.hud.onDead(true);
      this.hud.onMessage('☠️ Game Over');
      if (document.pointerLockElement === this.canvas) document.exitPointerLock();
    } else if (this.deathban) {
      // DanoMC-style: temporary ban, persisted so a reload can't skip it.
      const until = Date.now() + DEATHBAN_SECONDS * 1000;
      try { localStorage.setItem(DEATHBAN_KEY, String(until)); } catch { /* storage off */ }
      this.dead = true;
      this.hud.onDead(true);
      this.hud.onBanned(until);
      this.hud.onMessage('⏳ DeathBan!');
      if (document.pointerLockElement === this.canvas) document.exitPointerLock();
    } else {
      this.health = MAX_HEALTH;
      this.timeSinceHurt = REGEN_DELAY;
      this.respawn();
      this.hud.onHealth(this.health, MAX_HEALTH);
      this.hud.onMessage('💀 You died — respawned');
    }
  }

  /** True if the player is currently dead (hardcore game-over or DeathBan). */
  get isDead(): boolean {
    return this.dead;
  }

  /** On boot, restore an unexpired DeathBan so reloading can't dodge it. */
  private checkBan() {
    let until = 0;
    try { until = Number(localStorage.getItem(DEATHBAN_KEY)) || 0; } catch { /* storage off */ }
    if (until > Date.now()) {
      this.dead = true;
      this.hud.onDead(true);
      this.hud.onBanned(until);
    } else if (until) {
      try { localStorage.removeItem(DEATHBAN_KEY); } catch { /* storage off */ }
    }
  }

  /** Clear a DeathBan and drop back into the world. */
  rejoin() {
    if (!this.deathban) return;
    try { localStorage.removeItem(DEATHBAN_KEY); } catch { /* storage off */ }
    this.dead = false;
    this.health = MAX_HEALTH;
    this.timeSinceHurt = REGEN_DELAY;
    this.respawn();
    this.hud.onDead(false);
    this.hud.onHealth(this.health, MAX_HEALTH);
    this.canvas.requestPointerLock();
  }

  // ── Weather (Weather mod) ────────────────────────────────────────────────────

  private setupRain() {
    if (!this.mods.has('weather')) return;
    const geo = new THREE.BoxGeometry(0.025, 0.55, 0.025);
    const mat = new THREE.MeshBasicMaterial({ color: '#9fc4ff', transparent: true, opacity: 0.5 });
    this.rain = new THREE.InstancedMesh(geo, mat, RAIN_CAP);
    this.rain.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.rain.frustumCulled = false;
    for (let i = 0; i < RAIN_CAP; i++) {
      this.rainPos.push(new THREE.Vector3((Math.random() - 0.5) * 36, Math.random() * 22, (Math.random() - 0.5) * 36));
    }
    this.scene.add(this.rain);
  }

  private updateRain(dt: number) {
    if (!this.rain) return;
    const m = new THREE.Matrix4();
    for (let i = 0; i < RAIN_CAP; i++) {
      const d = this.rainPos[i];
      d.y -= 26 * dt;
      if (d.y < -4) { d.y += 26; d.x = (Math.random() - 0.5) * 36; d.z = (Math.random() - 0.5) * 36; }
      // Streaks fall in a column that follows the player so it always rains "here".
      m.makeTranslation(this.pos.x + d.x, this.pos.y + d.y, this.pos.z + d.z);
      this.rain.setMatrixAt(i, m);
    }
    this.rain.instanceMatrix.needsUpdate = true;
  }

  // ── Rainbow (Rainbow mod) ────────────────────────────────────────────────────

  private updateRainbow() {
    if (!this.mods.has('rainbow')) return;
    const hue = (this.elapsed * 0.12) % 1;
    for (const mat of getMaterials('rainbow_block')) {
      (mat as THREE.MeshLambertMaterial).color.setHSL(hue, 0.85, 0.6);
    }
  }
}

// ── Day/night keyframe tables (t: 0 dawn · 0.25 noon · 0.5 dusk · 0.75 midnight) ─

type Key<T> = { t: number; v: T };
const SKY_KEYS: Key<string>[] = [
  { t: 0.0, v: '#f7b27a' }, { t: 0.08, v: '#9ad0ff' }, { t: 0.45, v: '#9ad0ff' },
  { t: 0.52, v: '#f5895a' }, { t: 0.6, v: '#0b1026' }, { t: 0.92, v: '#0b1026' }, { t: 1.0, v: '#f7b27a' }
];
const SUNCOL_KEYS: Key<string>[] = [
  { t: 0.0, v: '#ffcaa0' }, { t: 0.12, v: '#fff6e0' }, { t: 0.5, v: '#ffb47a' },
  { t: 0.6, v: '#6a78c0' }, { t: 0.9, v: '#6a78c0' }, { t: 1.0, v: '#ffcaa0' }
];
const SUN_KEYS: Key<number>[] = [
  { t: 0.0, v: 0.3 }, { t: 0.12, v: 0.9 }, { t: 0.45, v: 0.9 },
  { t: 0.55, v: 0.25 }, { t: 0.6, v: 0.05 }, { t: 0.92, v: 0.05 }, { t: 1.0, v: 0.3 }
];
const HEMI_KEYS: Key<number>[] = [
  { t: 0.0, v: 0.6 }, { t: 0.12, v: 0.95 }, { t: 0.5, v: 0.7 },
  { t: 0.6, v: 0.28 }, { t: 0.92, v: 0.28 }, { t: 1.0, v: 0.6 }
];
const AMB_KEYS: Key<number>[] = [
  { t: 0.0, v: 0.2 }, { t: 0.12, v: 0.28 }, { t: 0.5, v: 0.22 },
  { t: 0.6, v: 0.1 }, { t: 0.92, v: 0.1 }, { t: 1.0, v: 0.2 }
];

function segment<T>(keys: Key<T>[], t: number): [Key<T>, Key<T>, number] {
  for (let i = 0; i < keys.length - 1; i++) {
    if (t >= keys[i].t && t <= keys[i + 1].t) {
      const local = (t - keys[i].t) / (keys[i + 1].t - keys[i].t || 1);
      return [keys[i], keys[i + 1], local];
    }
  }
  return [keys[keys.length - 1], keys[keys.length - 1], 0];
}

const _skyTmp = new THREE.Color();
const _spaceColor = new THREE.Color();
const _sunDir = new THREE.Vector3();
const _a = new THREE.Color();
const _b = new THREE.Color();
function sampleColor(keys: Key<string>[], t: number): THREE.Color {
  const [k0, k1, local] = segment(keys, t);
  _a.set(k0.v);
  _b.set(k1.v);
  return _a.lerp(_b, local);
}
function sampleNum(keys: Key<number>[], t: number): number {
  const [k0, k1, local] = segment(keys, t);
  return k0.v + (k1.v - k0.v) * local;
}
