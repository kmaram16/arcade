import { useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import './App.css';
import { Game, HOTBAR_SIZE } from './game/engine';
import { DEFAULT_HOTBAR, ITEM_REGISTRY, availableItems } from './game/items';
import { HACKS, MODS } from './game/mods';
import { GameMode, MODES, MODE_LABEL, SERVERS, ServerDef } from './game/modes';
import type { WorldType } from './game/world';
import { Net, type NetStatus } from './game/net';
import { Voice } from './game/voice';

// Which menu page the start screen is showing (before the game boots).
type Screen = 'title' | 'single' | 'multi' | 'friends' | 'online';

type ChatLine = { name: string; text: string; sys?: boolean };

// Random yellow splash line, Minecraft-style.
const SPLASHES = [
  'Now with hearts!', '100% block-powered!', 'Watch that lava!',
  '¡Vamos a minar!', 'Try Hardcore mode!', 'Diamonds below!',
  'Survival awaits!', 'Build something epic!', 'Mine, craft, repeat!',
  'Don’t dig straight down!', 'Spectator goes through walls!'
];

const MAX_HEALTH = 20;

// Touch device? (phones / tablets) → show the on-screen joystick + look-pad
// instead of relying on a keyboard and pointer-lock mouse.
const IS_TOUCH =
  typeof window !== 'undefined' &&
  (window.matchMedia?.('(pointer: coarse)').matches || 'ontouchstart' in window);

type Friend = { name: string; admin: boolean };
const FRIENDS_KEY = 'mc-from-kmm-friends';
function loadFriends(): Friend[] {
  try {
    const raw = localStorage.getItem(FRIENDS_KEY);
    if (raw) return JSON.parse(raw) as Friend[];
  } catch { /* storage off / bad JSON */ }
  return [
    { name: 'Mikecrack', admin: false },
    { name: 'DanoMC', admin: true }
  ];
}
/** Stable pseudo-random "online" flag from a name (purely cosmetic). */
function friendOnline(name: string): boolean {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h + name.charCodeAt(i) * (i + 1)) | 0;
  return h % 3 !== 0;
}

// Words the /gamemode (and shorthand) commands accept → the actual mode.
const MODE_WORDS: Record<string, GameMode> = {
  creative: 'creative', crea: 'creative', creativo: 'creative', c: 'creative',
  survival: 'survival', surv: 'survival', sv: 'survival', supervivencia: 'survival',
  spectator: 'spectator', spec: 'spectator', espectador: 'spectator',
  hardcore: 'hardcore', hc: 'hardcore',
  deathban: 'deathban', db: 'deathban'
};

// Words the /mundo (and shorthand) commands accept → the actual world type.
const WORLD_WORDS: Record<string, WorldType> = {
  normal: 'normal',
  flat: 'flat', plano: 'flat', plana: 'flat',
  skyblock: 'skyblock', isla: 'skyblock',
  oneblock: 'oneblock', unbloque: 'oneblock'
};

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gameRef = useRef<Game | null>(null);
  const activeRef = useRef<HTMLButtonElement | null>(null);
  const msgTimer = useRef<number | undefined>(undefined);

  // Menu navigation + start-screen selection.
  const [screen, setScreen] = useState<Screen>('title');
  const [splash] = useState(() => SPLASHES[Math.floor(Math.random() * SPLASHES.length)]);
  const [hacks, setHacks] = useState<Set<string>>(new Set());
  const [mods, setMods] = useState<Set<string>>(new Set());
  const [worldType, setWorldType] = useState<WorldType>('normal');
  const [mode, setMode] = useState<GameMode>('creative');
  const [started, setStarted] = useState(false);

  // The 9 hotbar slots (item ids, null = empty) + which one the chooser edits.
  const [hotbar, setHotbarIds] = useState<(string | null)[]>(() => DEFAULT_HOTBAR.slice(0, HOTBAR_SIZE));
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const [hacksOpen, setHacksOpen] = useState(false);
  const [editSlot, setEditSlot] = useState(0);

  const [locked, setLocked] = useState(false);
  const [selected, setSelected] = useState(0);
  const [fps, setFps] = useState(0);
  const [msg, setMsg] = useState<string | null>(null);
  const [dayT, setDayT] = useState(0.12);

  // Survival/hardcore health + hardcore death.
  const [health, setHealth] = useState(MAX_HEALTH);
  const [maxHealth, setMaxHealth] = useState(MAX_HEALTH);
  const [dead, setDead] = useState(false);
  const [banUntil, setBanUntil] = useState(0);
  const [nowTs, setNowTs] = useState(() => Date.now());

  // Friends list (persisted) + admin/OP self-toggle.
  const [friends, setFriends] = useState<Friend[]>(loadFriends);
  const [friendName, setFriendName] = useState('');
  const [op, setOp] = useState(false);
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [cmdInput, setCmdInput] = useState('');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [sensitivity, setSensitivity] = useState(1);
  const [fov, setFov] = useState(72);
  const [daySpeed, setDaySpeed] = useState(1);
  const [quality, setQuality] = useState(1);
  const [renderDist, setRenderDist] = useState(5);
  const [realismOn, setRealismOn] = useState(false);

  // ── Online multiplayer (shared world + chat + voice) ──
  const netRef = useRef<Net | null>(null);
  const voiceRef = useRef<Voice | null>(null);
  const pendingWelcome = useRef<{ edits: { k: string; b: string | null }[]; players: { id: string; name: string; x: number; y: number; z: number; yaw: number; pitch: number }[] } | null>(null);
  const [online, setOnline] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [netStatus, setNetStatus] = useState<NetStatus>('closed');
  const [roster, setRoster] = useState<{ id: string; name: string }[]>([]);
  const [chatLog, setChatLog] = useState<ChatLine[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [micOn, setMicOn] = useState(false);
  const [muted, setMuted] = useState(false);

  // The catalog the chooser offers = everything the picked mods unlock.
  const catalog = useMemo(() => availableItems(mods), [mods]);
  const slotItems = hotbar.map((id) => (id ? ITEM_REGISTRY.get(id) ?? null : null));
  const damageable = mode === 'survival' || mode === 'hardcore' || mode === 'deathban';

  // Boot the engine once the player presses Play (with their chosen config).
  useEffect(() => {
    if (!started) return;
    const game = new Game(
      canvasRef.current!,
      {
        onLock: setLocked,
        onSelect: setSelected,
        onFps: setFps,
        onTime: setDayT,
        onInventory: setInventoryOpen,
        onHacks: setHacksOpen,
        onHackState: setHacks,
        onHealth: (cur, max) => {
          setHealth(cur);
          setMaxHealth(max);
        },
        onDead: setDead,
        onBanned: setBanUntil,
        onConsole: setConsoleOpen,
        onMessage: (text) => {
          setMsg(text);
          window.clearTimeout(msgTimer.current);
          msgTimer.current = window.setTimeout(() => setMsg(null), 1700);
        },
        // Multiplayer: relay our movement/edits (only attached when online).
        ...(online && netRef.current
          ? {
              onState: (x: number, y: number, z: number, yaw: number, pitch: number) => netRef.current?.state(x, y, z, yaw, pitch),
              onEdit: (x: number, y: number, z: number, block: string | null) =>
                netRef.current?.edit(x, y, z, block as Parameters<NonNullable<typeof netRef.current.edit>>[3])
            }
          : {})
      },
      { mods, hacks, hotbar, worldType, mode }
    );
    gameRef.current = game;
    game.start();
    game.setSensitivity(sensitivity);
    game.setFov(fov);
    game.setDaySpeed(daySpeed);
    game.setQuality(quality);
    if (renderDist !== 5) game.setRenderDistance(renderDist);
    setRealismOn(mods.has('realism')); // mirror the start-screen Realism mod into Ajustes

    // Online: replay the room's existing build + populate everyone's avatars,
    // then open the mic and dial each peer for voice.
    if (online) {
      const pending = pendingWelcome.current;
      pendingWelcome.current = null;
      if (pending) {
        for (const e of pending.edits) {
          const [ex, ey, ez] = e.k.split(',').map(Number);
          game.applyRemoteEdit(ex, ey, ez, e.b as Parameters<typeof game.applyRemoteEdit>[3]);
        }
        for (const p of pending.players) {
          game.addPeer(p.id, p.name);
          game.setPeerState(p.id, p.x, p.y, p.z, p.yaw, p.pitch);
        }
      }
      const voice = voiceRef.current;
      voice?.start().then((ok) => {
        if (!ok) return;
        setMicOn(true);
        for (const p of pending?.players ?? []) voice.connectPeer(p.id);
      });
    }

    // Touch devices have no pointer lock — run the game in touch mode and let the
    // on-screen joystick / look-pad / buttons drive it instead.
    if (IS_TOUCH) game.setTouchActive(true);
    else if (!game.isDead) canvasRef.current?.requestPointerLock();
    return () => {
      window.clearTimeout(msgTimer.current);
      game.dispose();
      gameRef.current = null;
      voiceRef.current?.stop();
      netRef.current?.close();
      voiceRef.current = null;
      netRef.current = null;
    };
    // Snapshot config at launch; re-picking mods/world/mode needs a fresh game.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  // Keep the selected slot scrolled into view on the item belt.
  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest', inline: 'center' });
  }, [selected]);

  // Online: press T to open the chat (Minecraft-style); releases the pointer to type.
  useEffect(() => {
    if (!online) return;
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement;
      const typing = !!el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA');
      if (e.code === 'KeyT' && !typing && !chatOpen) {
        e.preventDefault();
        if (document.pointerLockElement) document.exitPointerLock();
        setChatOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [online, chatOpen]);

  // Tick the DeathBan countdown while banned.
  useEffect(() => {
    if (!(dead && mode === 'deathban')) return;
    const id = window.setInterval(() => setNowTs(Date.now()), 250);
    return () => window.clearInterval(id);
  }, [dead, mode]);
  const banLeft = Math.max(0, Math.ceil((banUntil - nowTs) / 1000));

  const isDay = dayT > 0.05 && dayT < 0.52;
  const current = slotItems[selected];

  const toggleMod = (id: string) => {
    const next = new Set(mods);
    next.has(id) ? next.delete(id) : next.add(id);
    setMods(next);
  };

  // Hacks can flip on the start screen AND live in-game (pushed to the engine).
  const toggleHack = (id: string) => {
    const next = new Set(hacks);
    next.has(id) ? next.delete(id) : next.add(id);
    setHacks(next);
    gameRef.current?.setHacks(next);
  };

  // Assign an item (or null) to the slot being edited, then advance to the next.
  const assign = (id: string | null) => {
    const next = [...hotbar];
    next[editSlot] = id;
    setHotbarIds(next);
    gameRef.current?.setHotbar(next);
    setEditSlot((s) => Math.min(s + 1, HOTBAR_SIZE - 1));
  };

  // Fresh health/life state, then boot.
  const launch = () => {
    setHealth(MAX_HEALTH);
    setMaxHealth(MAX_HEALTH);
    setDead(false);
    setStarted(true);
  };

  // "Join" a server = launch a world preset with that mode/world/mods.
  const joinServer = (s: ServerDef) => {
    setWorldType(s.worldType);
    setMods(new Set(s.mods));
    setHacks(new Set(s.hacks ?? []));
    setMode(s.mode);
    launch();
  };

  // ── Online multiplayer ──────────────────────────────────────────────────────

  const pushChat = (line: ChatLine) => setChatLog((log) => [...log.slice(-40), line]);

  /** Connect to a room, then boot the shared world once the server welcomes us. */
  const connectOnline = () => {
    const name = playerName.trim() || `Player${Math.floor(1000 + Math.random() * 9000)}`;
    const room = roomCode.trim().toLowerCase() || 'lobby';
    setPlayerName(name);
    setRoomCode(room);

    const net = new Net({
      onStatus: setNetStatus,
      onWelcome: (_id, config, edits, players) => {
        // Adopt the room's world so everyone generates identical terrain.
        if (config) {
          setWorldType(config.worldType);
          setMods(new Set(config.mods));
        }
        setMode('creative'); // shared building is creative-only for now
        pendingWelcome.current = { edits, players };
        setRoster(players.map((p) => ({ id: p.id, name: p.name })));
        setOnline(true);
        launch();
      },
      onPeerJoin: (id, name) => {
        gameRef.current?.addPeer(id, name);
        voiceRef.current?.connectPeer(id);
      },
      onPeerLeave: (id) => {
        gameRef.current?.removePeer(id);
        voiceRef.current?.removePeer(id);
      },
      onPeerState: (id, x, y, z, yaw, pitch) => gameRef.current?.setPeerState(id, x, y, z, yaw, pitch),
      onPeerEdit: (_id, x, y, z, block) => gameRef.current?.applyRemoteEdit(x, y, z, block),
      onChat: (_from, name, text) => pushChat({ name, text }),
      onSystem: (text) => pushChat({ name: '', text, sys: true }),
      onPresence: (users) => setRoster(users),
      onSignal: (from, data) => voiceRef.current?.onSignal(from, data)
    });
    netRef.current = net;
    const voice = new Voice(net);
    voice.onError = (m) => { flash(m); setMicOn(false); };
    voiceRef.current = voice;
    net.connect(room, name, { worldType, mods: [...mods] });
  };

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    voiceRef.current?.setMuted(next);
  };

  const sendChat = () => {
    const text = chatInput.trim();
    if (text) {
      netRef.current?.chat(text);
      pushChat({ name: playerName, text }); // echo locally (server skips the sender)
    }
    setChatInput('');
    setChatOpen(false);
    canvasRef.current?.requestPointerLock();
  };

  // Friends list management (persisted to localStorage).
  const saveFriends = (next: Friend[]) => {
    setFriends(next);
    try { localStorage.setItem(FRIENDS_KEY, JSON.stringify(next)); } catch { /* storage off */ }
  };
  const addFriend = () => {
    const n = friendName.trim();
    if (!n || friends.some((f) => f.name.toLowerCase() === n.toLowerCase())) return;
    saveFriends([...friends, { name: n, admin: false }]);
    setFriendName('');
  };
  const removeFriend = (name: string) => saveFriends(friends.filter((f) => f.name !== name));
  const toggleFriendAdmin = (name: string) =>
    saveFriends(friends.map((f) => (f.name === name ? { ...f, admin: !f.admin } : f)));

  // Admin / OP for yourself: invincibility + every hack on (or all off).
  const applyOp = (on: boolean) => {
    setOp(on);
    const set = on ? new Set(HACKS.map((h) => h.id)) : new Set<string>();
    setHacks(set);
    gameRef.current?.setHacks(set);
    gameRef.current?.setOp(on);
  };
  const toggleOp = () => applyOp(!op);

  // Briefly show a toast (mirrors the engine's onMessage).
  const flash = (text: string) => {
    setMsg(text);
    window.clearTimeout(msgTimer.current);
    msgTimer.current = window.setTimeout(() => setMsg(null), 1700);
  };

  // Drop an item into the first empty hotbar slot (or the selected one) and hold it.
  const giveItem = (id: string) => {
    const next = [...hotbar];
    let slot = next.findIndex((s) => s === null);
    if (slot === -1) slot = selected;
    next[slot] = id;
    setHotbarIds(next);
    gameRef.current?.setHotbar(next);
    gameRef.current?.setSelected(slot);
  };

  const setGameMode = (m: GameMode) => {
    setMode(m);
    gameRef.current?.setMode(m);
    flash(`Modo: ${MODE_LABEL[m]}`);
  };

  const setWorldKind = (w: WorldType) => {
    setWorldType(w);
    gameRef.current?.setWorld(w);
    flash(`🌍 Mundo: ${w}`);
  };

  // Live settings (from /ajustes or the ⚙️ panel).
  const changeSensitivity = (v: number) => { setSensitivity(v); gameRef.current?.setSensitivity(v); };
  const changeFov = (v: number) => { setFov(v); gameRef.current?.setFov(v); };
  const changeDaySpeed = (v: number) => { setDaySpeed(v); gameRef.current?.setDaySpeed(v); };
  const changeQuality = (v: number) => { setQuality(v); gameRef.current?.setQuality(v); };
  const changeRenderDist = (v: number) => { setRenderDist(v); gameRef.current?.setRenderDistance(v); };
  const changeRealism = (v: boolean) => { setRealismOn(v); gameRef.current?.setRealism(v); };
  const presetFast = () => { changeQuality(0.6); changeRenderDist(3); };
  const presetNormal = () => { changeQuality(1); changeRenderDist(5); };
  const presetPretty = () => { changeQuality(1.5); changeRenderDist(7); };
  const closeSettings = () => { setSettingsOpen(false); canvasRef.current?.requestPointerLock(); };

  // F1 command console. Returns true if it opened a panel (so we don't re-lock).
  const runCommand = (raw: string): boolean => {
    const text = raw.trim().replace(/^\//, '');
    if (!text) return false;
    const [cmd, ...args] = text.split(/\s+/);
    const c = cmd.toLowerCase();
    const targetAll = ['@t', '@e', '@todos', 'todos'].includes((args[0] ?? '').toLowerCase());
    const who = targetAll ? 'todos' : 'ti';
    if (c === 'objeto' || c === 'give' || c === 'item' || c === 'dar') {
      const q = args.join(' ').trim().toLowerCase();
      if (!q) { flash('Uso: /objeto <bloque>'); return false; }
      const qid = q.replace(/\s+/g, '_');
      const items = [...ITEM_REGISTRY.values()];
      const item =
        items.find((it) => it.id.toLowerCase() === qid || it.name.toLowerCase() === q) ||
        items.find((it) => it.id.toLowerCase().includes(qid) || it.name.toLowerCase().includes(q));
      if (!item) { flash(`No existe el bloque "${q}"`); return false; }
      giveItem(item.id);
      flash(`📦 Tienes: ${item.name}`);
    } else if (c === 'op') {
      applyOp(true);
      flash(`🛡️ OP activado para ${who}`);
    } else if (c === 'desop') {
      applyOp(false);
      flash(`OP quitado para ${who}`);
    } else if (c === 'gamemode' || c === 'modo' || c === 'gm') {
      const m = MODE_WORDS[(args[0] ?? '').toLowerCase()];
      if (!m) { flash('Uso: /gamemode <creative|survival|spectator|hardcore|deathban>'); return false; }
      setGameMode(m);
    } else if (MODE_WORDS[c]) {
      setGameMode(MODE_WORDS[c]);
    } else if (c === 'mundo' || c === 'world') {
      const w = WORLD_WORDS[(args[0] ?? '').toLowerCase()];
      if (!w) { flash('Uso: /mundo <normal|plano|skyblock|oneblock>'); return false; }
      setWorldKind(w);
    } else if (WORLD_WORDS[c]) {
      setWorldKind(WORLD_WORDS[c]);
    } else if (
      c === 'casa1000' || c === 'casagrande' || c === 'grande' || c === 'big' || c === 'mansiongrande' ||
      (c === 'casa' && args[0] === '1000') || (c === 'mansion' && args[0] === 'grande')
    ) {
      gameRef.current?.pasteBigHouse();
      flash('🏢 ¡Casa de 1000 m² · 5 plantas · 2 puertas!');
    } else if (c === 'paste' || c === 'mansion' || c === 'mansión' || c === 'casa') {
      gameRef.current?.pasteMansion();
      flash('🏰 ¡Mansión de lujo construida!');
    } else if (c === 'copy' || c === 'copiar') {
      flash('Mansión copiada — escribe /paste para construirla');
    } else if (c === 'ajustes' || c === 'settings' || c === 'opciones' || c === 'config') {
      setSettingsOpen(true);
      return true;
    } else {
      flash(`Comando desconocido: /${c}`);
    }
    return false;
  };

  const closeConsole = (resume = true) => {
    setConsoleOpen(false);
    setCmdInput('');
    if (resume) canvasRef.current?.requestPointerLock();
  };

  // ---- Touch controls (phones/tablets): joystick + look-pad + action buttons ----
  const lookId = useRef<number | null>(null);
  const lookLast = useRef({ x: 0, y: 0 });
  const stickId = useRef<number | null>(null);
  const stickCenter = useRef({ x: 0, y: 0 });
  const [stickKnob, setStickKnob] = useState({ x: 0, y: 0 });
  const mineTimer = useRef<number | null>(null);
  const STICK_R = 52; // px radius of the joystick travel

  // Clear the repeat-mine timer if we leave the game mid-hold.
  useEffect(() => () => { if (mineTimer.current != null) window.clearInterval(mineTimer.current); }, []);

  const onLookDown = (e: ReactPointerEvent) => {
    if (lookId.current !== null) return;
    lookId.current = e.pointerId;
    lookLast.current = { x: e.clientX, y: e.clientY };
  };
  const onLookMove = (e: ReactPointerEvent) => {
    if (e.pointerId !== lookId.current) return;
    gameRef.current?.touchLook(e.clientX - lookLast.current.x, e.clientY - lookLast.current.y);
    lookLast.current = { x: e.clientX, y: e.clientY };
  };
  const onLookUp = (e: ReactPointerEvent) => {
    if (e.pointerId === lookId.current) lookId.current = null;
  };

  const applyStick = (clientX: number, clientY: number) => {
    const dx = clientX - stickCenter.current.x;
    const dy = clientY - stickCenter.current.y;
    const dist = Math.hypot(dx, dy) || 1;
    const clamped = Math.min(dist, STICK_R);
    setStickKnob({ x: (dx / dist) * clamped, y: (dy / dist) * clamped });
    const nx = dx / STICK_R;
    const ny = dy / STICK_R;
    const dead = 0.35; // ignore tiny wobbles near the centre
    const g = gameRef.current;
    if (!g) return;
    g.touchKey('KeyW', ny < -dead);
    g.touchKey('KeyS', ny > dead);
    g.touchKey('KeyA', nx < -dead);
    g.touchKey('KeyD', nx > dead);
  };
  const onStickDown = (e: ReactPointerEvent) => {
    stickId.current = e.pointerId;
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    stickCenter.current = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    applyStick(e.clientX, e.clientY);
  };
  const onStickMove = (e: ReactPointerEvent) => {
    if (e.pointerId !== stickId.current) return;
    applyStick(e.clientX, e.clientY);
  };
  const clearStick = (e: ReactPointerEvent) => {
    if (e.pointerId !== stickId.current) return;
    stickId.current = null;
    setStickKnob({ x: 0, y: 0 });
    const g = gameRef.current;
    g?.touchKey('KeyW', false);
    g?.touchKey('KeyS', false);
    g?.touchKey('KeyA', false);
    g?.touchKey('KeyD', false);
  };

  const holdJump = (down: boolean) => gameRef.current?.touchKey('Space', down);
  const startMining = () => {
    gameRef.current?.touchPrimary();
    mineTimer.current = window.setInterval(() => gameRef.current?.touchPrimary(), 260);
  };
  const stopMining = () => {
    if (mineTimer.current != null) {
      window.clearInterval(mineTimer.current);
      mineTimer.current = null;
    }
  };

  return (
    <div className="game">
      <canvas ref={canvasRef} className="viewport" />

      {IS_TOUCH && started && !dead && (
        <>
          <div
            className="touch-look"
            onPointerDown={onLookDown}
            onPointerMove={onLookMove}
            onPointerUp={onLookUp}
            onPointerCancel={onLookUp}
          />
          <div
            className="touch-joystick"
            onPointerDown={onStickDown}
            onPointerMove={onStickMove}
            onPointerUp={clearStick}
            onPointerCancel={clearStick}
          >
            <div className="touch-knob" style={{ transform: `translate(${stickKnob.x}px, ${stickKnob.y}px)` }} />
          </div>
          <div className="touch-actions">
            <button
              className="touch-btn jump"
              aria-label="Saltar"
              onPointerDown={() => holdJump(true)}
              onPointerUp={() => holdJump(false)}
              onPointerLeave={() => holdJump(false)}
              onPointerCancel={() => holdJump(false)}
            >
              ⤒
            </button>
            <button
              className="touch-btn place"
              aria-label="Poner bloque"
              onPointerDown={() => gameRef.current?.touchSecondary()}
            >
              🧱
            </button>
            <button
              className="touch-btn mine"
              aria-label="Picar"
              onPointerDown={startMining}
              onPointerUp={stopMining}
              onPointerLeave={stopMining}
              onPointerCancel={stopMining}
            >
              ⛏️
            </button>
          </div>
        </>
      )}

      <div className="crosshair" aria-hidden>
        <span />
        <span />
      </div>

      <div className="topbar">
        <span className="fps">{fps} FPS</span>
        {started && !dead && (
          <span className="hud-btns">
            <button className="inv-btn" title="Hacks (H)" onClick={() => gameRef.current?.openHacks()}>⚡</button>
            <button className="inv-btn" title="Inventory — choose your 9 blocks (E)" onClick={() => gameRef.current?.openInventory()}>⋮</button>
            {online && (
              <>
                <button className="inv-btn" title="Chat (T)" onClick={() => { document.exitPointerLock(); setChatOpen(true); }}>💬</button>
                <button
                  className={`inv-btn${muted || !micOn ? ' off' : ''}`}
                  title={!micOn ? 'Micrófono no disponible' : muted ? 'Activar micrófono' : 'Silenciar micrófono'}
                  onClick={toggleMute}
                >
                  {micOn && !muted ? '🎙️' : '🔇'}
                </button>
              </>
            )}
          </span>
        )}
        {started && online && (
          <span className="roster" title="Jugadores en la sala">
            👥 {roster.length + 1}
          </span>
        )}
        <span className="clock" title="Time of day">
          {isDay ? '☀️' : '🌙'}
          <span className="clockbar">
            <span className="clockfill" style={{ width: `${Math.round(dayT * 100)}%` }} />
          </span>
        </span>
      </div>

      {msg && <div className="toast">{msg}</div>}

      {/* Online chat — last messages + an input opened with T or the 💬 button */}
      {started && online && (
        <div className={`chat${chatOpen ? ' open' : ''}`}>
          <div className="chat-log">
            {chatLog.slice(-7).map((l, i) => (
              <div key={i} className={`chat-line${l.sys ? ' sys' : ''}`}>
                {l.sys ? <em>{l.text}</em> : <><span className="chat-name">{l.name}:</span> {l.text}</>}
              </div>
            ))}
          </div>
          {chatOpen && (
            <input
              className="chat-input"
              autoFocus
              maxLength={280}
              value={chatInput}
              placeholder="Escribe un mensaje…  (Enter envía · Esc cierra)"
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') sendChat();
                else if (e.key === 'Escape') { setChatOpen(false); setChatInput(''); canvasRef.current?.requestPointerLock(); }
              }}
            />
          )}
        </div>
      )}

      {/* F1 command console */}
      {started && consoleOpen && (
        <div className="cmd-bar">
          <span className="cmd-prompt">/</span>
          <input
            className="cmd-input"
            autoFocus
            value={cmdInput}
            placeholder="objeto stone · gamemode creative · paste · op @a · ajustes"
            onChange={(e) => setCmdInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.code === 'F1') { e.preventDefault(); closeConsole(); }
              else if (e.key === 'Enter') { const opened = runCommand(cmdInput); closeConsole(!opened); }
              else if (e.key === 'Escape') closeConsole();
            }}
          />
        </div>
      )}

      {/* Hearts + 9-slot hotbar */}
      {started && (
        <div className="belt-wrap">
          {damageable && (
            <div className="hearts" title={`${health} / ${maxHealth} health`}>
              {Array.from({ length: maxHealth / 2 }).map((_, i) => {
                const fill = Math.max(0, Math.min(2, health - i * 2)); // 0, 1 or 2
                return (
                  <span key={i} className="heart">
                    <span className="heart-fill" style={{ width: `${(fill / 2) * 100}%` }} />
                  </span>
                );
              })}
            </div>
          )}
          <div className="held-name">{current?.name ?? '—'}</div>
          <div className="belt">
            {slotItems.map((item, i) => (
              <button
                key={i}
                ref={i === selected ? activeRef : undefined}
                className={`slot${i === selected ? ' active' : ''}${item ? '' : ' empty'}`}
                title={item?.name ?? 'Empty'}
                onClick={() => gameRef.current?.setSelected(i)}
              >
                {item && <img src={item.icon} alt={item.name} draggable={false} />}
                <span className="num">{i + 1}</span>
                {item?.tool && <span className="tooltag">tool</span>}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Title screen ───────────────────────────────────────────────── */}
      {!started && screen === 'title' && (
        <div className="overlay title-bg">
          <div className="title-screen">
            <h1 className="mc-title">
              MINECRAFT<span className="kmm-tag">from KMM</span>
            </h1>
            <div className="splash">{splash}</div>
            <div className="menu-btns">
              <button className="menu-btn primary" onClick={() => setScreen('single')}>🎮 Singleplayer</button>
              <button className="menu-btn" onClick={() => setScreen('online')}>🌍 Jugar con amigos</button>
              <button className="menu-btn" onClick={() => setScreen('multi')}>🌐 Servidores</button>
              <button className="menu-btn" onClick={() => setScreen('friends')}>👥 Amigos</button>
              <button className="menu-btn ghost" onClick={() => window.location.reload()}>↺ Reset</button>
            </div>
            <div className="title-foot">Mini-Game Arcade · KMM</div>
          </div>
        </div>
      )}

      {/* ── Singleplayer: world + mode + hacks + mods ──────────────────── */}
      {!started && screen === 'single' && (
        <div className="overlay">
          <div className="panel menu">
            <button className="back" onClick={() => setScreen('title')}>‹ Back</button>
            <h1>🎮 Singleplayer</h1>
            <p className="sub">Choose your world, mode, hacks &amp; mods.</p>

            <div className="picker">
              <div className="picker-head"><span>🌍 World</span></div>
              <div className="chips">
                <button className={`chip${worldType === 'normal' ? ' on' : ''}`} title="Infinite rolling hills with trees." onClick={() => setWorldType('normal')}>
                  <span className="chip-emoji">⛰️</span>Normal
                </button>
                <button className={`chip${worldType === 'flat' ? ' on' : ''}`} title="Infinite dead-level superflat." onClick={() => setWorldType('flat')}>
                  <span className="chip-emoji">🟩</span>Flat
                </button>
                <button className={`chip${worldType === 'skyblock' ? ' on' : ''}`} title="A tiny starter island floating in the void." onClick={() => setWorldType('skyblock')}>
                  <span className="chip-emoji">🏝️</span>Skyblock
                </button>
                <button className={`chip${worldType === 'oneblock' ? ' on' : ''}`} title="One block that regenerates forever — mine it for new types." onClick={() => setWorldType('oneblock')}>
                  <span className="chip-emoji">🧱</span>OneBlock
                </button>
              </div>

              <div className="picker-head"><span>🎯 Game mode</span></div>
              <div className="chips">
                {MODES.map((m) => (
                  <button key={m.id} className={`chip${mode === m.id ? ' on' : ''}`} title={m.desc} onClick={() => setMode(m.id)}>
                    <span className="chip-emoji">{m.emoji}</span>
                    {m.name}
                  </button>
                ))}
              </div>
              <p className="mode-desc">{MODES.find((m) => m.id === mode)?.desc}</p>

              <div className="picker-head">
                <span>⚡ Hacks</span>
                {hacks.size > 0 && <button className="clear" onClick={() => setHacks(new Set())}>clear</button>}
              </div>
              <div className="chips">
                {HACKS.map((h) => (
                  <button key={h.id} className={`chip${hacks.has(h.id) ? ' on' : ''}`} title={h.desc} onClick={() => toggleHack(h.id)}>
                    <span className="chip-emoji">{h.emoji}</span>
                    {h.name}
                  </button>
                ))}
              </div>

              <div className="picker-head">
                <span>🧩 Mods</span>
                {mods.size > 0 && <button className="clear" onClick={() => setMods(new Set())}>clear</button>}
              </div>
              <div className="chips">
                {MODS.map((m) => (
                  <button key={m.id} className={`chip${mods.has(m.id) ? ' on' : ''}`} title={m.desc} onClick={() => toggleMod(m.id)}>
                    <span className="chip-emoji">{m.emoji}</span>
                    {m.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="controls">
              <div><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd><span>Move</span></div>
              <div><kbd>E</kbd><span>Inventory</span></div>
              <div><kbd>H</kbd><span>Hacks panel</span></div>
              <div><kbd>X</kbd><span>X-Ray on/off</span></div>
              <div><kbd>F</kbd><span>Toggle fly</span></div>
              <div><kbd>Space</kbd><span>Jump / fly up</span></div>
              <div><kbd>Shift</kbd><span>Sprint / fly down</span></div>
              <div><kbd>F1</kbd><span>Comandos (/objeto, /op)</span></div>
            </div>

            <button className="play" onClick={launch}>
              Play · {MODE_LABEL[mode]}{hacks.size + mods.size > 0 ? ` · ${hacks.size + mods.size} active` : ''}
            </button>
          </div>
        </div>
      )}

      {/* ── Multiplayer: YouTuber server browser ───────────────────────── */}
      {!started && screen === 'multi' && (
        <div className="overlay">
          <div className="panel menu">
            <button className="back" onClick={() => setScreen('title')}>‹ Back</button>
            <h1>🌐 Multiplayer</h1>
            <p className="sub">Pick a server — each loads its own world.</p>

            <div className="servers">
              {SERVERS.map((s) => (
                <button key={s.id} className="server" onClick={() => joinServer(s)}>
                  <span className="server-icon">{s.emoji}</span>
                  <span className="server-body">
                    <span className="server-name">{s.name}</span>
                    <span className="server-motd">{s.motd}</span>
                    <span className="server-tags">
                      <span className="tag">{MODE_LABEL[s.mode]}</span>
                      <span className="tag">{s.worldType}</span>
                      {s.mods.length > 0 && <span className="tag">{s.mods.length} mods</span>}
                    </span>
                  </span>
                  <span className="server-meta">
                    <span className={`ping ping-${s.ping}`} title={`${s.ping}/5 connection`}>
                      <i /><i /><i /><i /><i />
                    </span>
                    <span className="server-players">👥 {s.players.toLocaleString()}</span>
                    <span className="join">Join ›</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Friends / amigos ───────────────────────────────────────────── */}
      {!started && screen === 'friends' && (
        <div className="overlay">
          <div className="panel menu">
            <button className="back" onClick={() => setScreen('title')}>‹ Back</button>
            <h1>👥 Amigos</h1>
            <p className="sub">Agrega amigos y dales permisos de admin (OP).</p>

            <div className="add-friend">
              <input
                className="friend-input"
                placeholder="Nombre del amigo…"
                value={friendName}
                maxLength={16}
                onChange={(e) => setFriendName(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') addFriend(); }}
              />
              <button className="friend-add" onClick={addFriend}>＋ Agregar</button>
            </div>

            <div className="friends">
              {friends.length === 0 && <p className="empty">Aún no tienes amigos. ¡Agrega uno!</p>}
              {friends.map((f) => {
                const online = friendOnline(f.name);
                return (
                  <div key={f.name} className="friend">
                    <span className={`dot${online ? ' on' : ''}`} title={online ? 'En línea' : 'Desconectado'} />
                    <span className="friend-name">{f.name}</span>
                    {f.admin && <span className="badge-admin">🛡️ Admin</span>}
                    <span className="friend-actions">
                      <button className={`role${f.admin ? ' on' : ''}`} onClick={() => toggleFriendAdmin(f.name)}>
                        {f.admin ? 'Quitar OP' : 'Hacer Admin'}
                      </button>
                      <button className="kick" title="Eliminar" onClick={() => removeFriend(f.name)}>✕</button>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ── Online: play together (shared world + chat + voice) ────────────── */}
      {!started && screen === 'online' && (
        <div className="overlay">
          <div className="panel menu">
            <button className="back" onClick={() => setScreen('title')}>‹ Back</button>
            <h1>🌍 Jugar con amigos</h1>
            <p className="sub">Mundo compartido en vivo · chat · voz por micrófono.</p>

            <div className="add-friend">
              <input
                className="friend-input"
                placeholder="Tu nombre…"
                value={playerName}
                maxLength={16}
                onChange={(e) => setPlayerName(e.target.value)}
              />
              <input
                className="friend-input"
                placeholder="Código de sala (ej: kmm)"
                value={roomCode}
                maxLength={24}
                onChange={(e) => setRoomCode(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') connectOnline(); }}
              />
            </div>
            <p className="sub" style={{ marginTop: 4 }}>
              Comparte el mismo código con tus amigos para caer en el mismo mundo. El primero en entrar elige el mundo y los mods.
            </p>

            <div className="picker">
              <div className="picker-head"><span>🌍 World</span></div>
              <div className="chips">
                {(['normal', 'flat', 'skyblock', 'oneblock'] as WorldType[]).map((w) => (
                  <button key={w} className={`chip${worldType === w ? ' on' : ''}`} onClick={() => setWorldType(w)}>{w}</button>
                ))}
              </div>
              <div className="picker-head">
                <span>🧩 Mods</span>
                {mods.size > 0 && <button className="clear" onClick={() => setMods(new Set())}>clear</button>}
              </div>
              <div className="chips">
                {MODS.map((m) => (
                  <button key={m.id} className={`chip${mods.has(m.id) ? ' on' : ''}`} title={m.desc} onClick={() => toggleMod(m.id)}>
                    <span className="chip-emoji">{m.emoji}</span>{m.name}
                  </button>
                ))}
              </div>
            </div>

            <p className="sub">🎙️ Al entrar se pedirá permiso del micrófono para la voz (puedes silenciarlo dentro).</p>
            <button className="play" onClick={connectOnline}>
              {netStatus === 'connecting' ? 'Conectando…' : '🚀 Conectar y jugar'}
            </button>
            <p className="sub" style={{ marginTop: 8, opacity: 0.7 }}>
              ¿Amigos en otra casa? Comparte tu enlace con un túnel (cloudflared) — todos abren ese link y caen aquí.
            </p>
          </div>
        </div>
      )}

      {/* Hacks panel — toggle cheats live (H or ⚡) */}
      {started && hacksOpen && (
        <div className="overlay inv-overlay">
          <div className="panel menu">
            <div className="inv-head">
              <h1>⚡ Hacks</h1>
              <span className="inv-hint">Click to toggle · <kbd>H</kbd> to close</span>
            </div>
            <div className="chips">
              {HACKS.map((h) => (
                <button key={h.id} className={`chip${hacks.has(h.id) ? ' on' : ''}`} title={h.desc} onClick={() => toggleHack(h.id)}>
                  <span className="chip-emoji">{h.emoji}</span>
                  {h.name}
                </button>
              ))}
            </div>
            <button className="play" onClick={() => gameRef.current?.closeHacks()}>Done</button>
          </div>
        </div>
      )}

      {/* Inventory chooser — pick which blocks fill the 9 slots, anytime (E or ⋮) */}
      {started && inventoryOpen && (
        <div className="overlay inv-overlay">
          <div className="panel inventory">
            <div className="inv-head">
              <h1>Inventory</h1>
              <span className="inv-hint">Pick a slot, then a block · <kbd>E</kbd> to close</span>
            </div>

            <div className="inv-hotbar">
              {slotItems.map((item, i) => (
                <button
                  key={i}
                  className={`slot${i === editSlot ? ' editing' : ''}${item ? '' : ' empty'}`}
                  title={`Slot ${i + 1}`}
                  onClick={() => setEditSlot(i)}
                >
                  {item && <img src={item.icon} alt={item.name} draggable={false} />}
                  <span className="num">{i + 1}</span>
                </button>
              ))}
            </div>

            <div className="inv-grid">
              <button className="inv-item clear-item" title="Empty this slot" onClick={() => assign(null)}>✕</button>
              {catalog.map((item) => (
                <button key={item.id} className="inv-item" title={item.name} onClick={() => assign(item.id)}>
                  <img src={item.icon} alt={item.name} draggable={false} />
                  {item.tool && <span className="tooltag">tool</span>}
                </button>
              ))}
            </div>

            <button className="play" onClick={() => gameRef.current?.closeInventory()}>Done</button>
          </div>
        </div>
      )}

      {/* Settings — /ajustes or the ⚙️ button */}
      {started && settingsOpen && (
        <div className="overlay inv-overlay">
          <div className="panel menu">
            <div className="inv-head">
              <h1>⚙️ Ajustes</h1>
              <span className="inv-hint">Cambios en vivo</span>
            </div>
            <div className="settings">
              <label className="setting">
                <span>Sensibilidad del ratón <b>{sensitivity.toFixed(1)}×</b></span>
                <input type="range" min={0.2} max={3} step={0.1} value={sensitivity}
                  onChange={(e) => changeSensitivity(Number(e.target.value))} />
              </label>
              <label className="setting">
                <span>Campo de visión (FOV) <b>{fov}°</b></span>
                <input type="range" min={50} max={110} step={1} value={fov}
                  onChange={(e) => changeFov(Number(e.target.value))} />
              </label>
              <label className="setting">
                <span>Velocidad día/noche <b>{daySpeed.toFixed(1)}×</b></span>
                <input type="range" min={0} max={3} step={0.1} value={daySpeed}
                  onChange={(e) => changeDaySpeed(Number(e.target.value))} />
              </label>

              <div className="picker-head"><span>🖥️ Gráficos</span></div>
              <label className="setting toggle-row">
                <span>🌅 Realismo <small>(sombras del sol + luz cinematográfica)</small></span>
                <input type="checkbox" checked={realismOn}
                  onChange={(e) => changeRealism(e.target.checked)} />
              </label>
              <label className="setting">
                <span>Resolución / nitidez <b>{quality.toFixed(1)}×</b> <small>(menos = más FPS)</small></span>
                <input type="range" min={0.4} max={2} step={0.1} value={quality}
                  onChange={(e) => changeQuality(Number(e.target.value))} />
              </label>
              <label className="setting">
                <span>Distancia de visión <b>{renderDist}</b> <small>(menos = más FPS)</small></span>
                <input type="range" min={2} max={8} step={1} value={renderDist}
                  onChange={(e) => changeRenderDist(Number(e.target.value))} />
              </label>
              <div className="chips">
                <button className="chip" onClick={presetFast}>⚡ Más FPS</button>
                <button className="chip" onClick={presetNormal}>⚖️ Normal</button>
                <button className="chip" onClick={presetPretty}>🌟 Bonito</button>
              </div>
            </div>
            <button className="play" onClick={closeSettings}>Listo</button>
          </div>
        </div>
      )}

      {/* Game Over — hardcore death */}
      {started && dead && mode === 'hardcore' && (
        <div className="overlay gameover-bg">
          <div className="panel gameover">
            <h1>☠️ Game Over</h1>
            <p className="sub">Hardcore is one life only. The world is gone.</p>
            <button className="play danger" onClick={() => window.location.reload()}>↺ New world</button>
          </div>
        </div>
      )}

      {/* DeathBan — DanoMC-style temporary ban */}
      {started && dead && mode === 'deathban' && (
        <div className="overlay gameover-bg">
          <div className="panel gameover">
            <h1>⏳ DeathBan</h1>
            <p className="sub">Moriste. Baneo temporal estilo DanoMC — espera para reconectar.</p>
            {banLeft > 0 ? (
              <button className="play" disabled>Reconectar en {banLeft}s…</button>
            ) : (
              <button className="play" onClick={() => gameRef.current?.rejoin()}>↩ Reconectar</button>
            )}
            <button className="reload" onClick={() => window.location.reload()}>‹ Menú</button>
          </div>
        </div>
      )}

      {/* Pause overlay — shown after launch when pointer-lock is released */}
      {started && !locked && !inventoryOpen && !hacksOpen && !dead && !consoleOpen && !settingsOpen && (
        <div className="overlay">
          <div className="panel pause">
            <h1>Paused</h1>
            <p className="sub">Click to jump back in.</p>
            <button className="play" onClick={() => canvasRef.current?.requestPointerLock()}>Resume</button>
            <button className="reload" onClick={() => gameRef.current?.openHacks()}>⚡ Hacks</button>
            <button className={`reload${op ? ' op-on' : ''}`} onClick={toggleOp}>🛡️ {op ? 'Quitar OP' : 'Hacerme OP (admin)'}</button>
            <button className="reload" onClick={() => setSettingsOpen(true)}>⚙️ Ajustes</button>
            <button className="reload" onClick={() => gameRef.current?.openInventory()}>⋮ Choose blocks</button>
            <button className="reload" onClick={() => window.location.reload()}>↺ New game</button>
          </div>
        </div>
      )}
    </div>
  );
}
