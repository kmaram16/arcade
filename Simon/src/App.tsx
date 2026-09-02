import { useEffect, useRef, useState } from 'react';
import './App.css';
import { LANGS, RTL_LANGS, SPEECH_LANG, STR, initialLang, saveLang, type Lang } from './i18n';
import { startGamepad } from './gamepad';

// ===== Actions & the four pads =====
// Real Simon Says: Simon calls out an action and the player acts it out. There's
// a big POOL of actions; each round a fresh set of four lands on the disc and the
// called action is always a new one — so the action changes every round. Each
// emoji is a person doing it, so the on-screen player can perform it too.
// `id` indexes the localized command names in i18n (STR[lang].actions); the
// English `name` stays as a fallback for speech/labels.
type Action = { emoji: string; name: string; freq: number; id: number };

const ACTIONS: Action[] = [
  { emoji: '🏊', name: 'go to the pool', freq: 329.63, id: 0 },
  { emoji: '🤸', name: 'do a cartwheel', freq: 392.0, id: 1 },
  { emoji: '🙇', name: 'take a bow', freq: 261.63, id: 2 },
  { emoji: '🏃', name: 'run in place', freq: 523.25, id: 3 },
  { emoji: '🕺', name: 'dance', freq: 349.23, id: 4 },
  { emoji: '🙆', name: 'raise your arms', freq: 440.0, id: 5 },
  { emoji: '🦶', name: 'touch your toes', freq: 293.66, id: 6 },
  { emoji: '🤚', name: 'wave hello', freq: 587.33, id: 7 },
  { emoji: '🧎', name: 'kneel down', freq: 246.94, id: 8 },
  { emoji: '🏋️', name: 'lift weights', freq: 466.16, id: 9 },
  { emoji: '🤾', name: 'spin around', freq: 415.3, id: 10 },
  { emoji: '🚶', name: 'walk in place', freq: 311.13, id: 11 }
];

// The four fixed pad slots — their colors and keys stay put; only the action
// shown on each slot changes from round to round.
const SLOTS = [
  { base: '#334155', lit: '#cbd5e1', key: '1' },
  { base: '#475569', lit: '#e2e8f0', key: '2' },
  { base: '#1e293b', lit: '#94a3b8', key: '3' },
  { base: '#3f3f46', lit: '#d4d4d8', key: '4' }
];
const SLOT_COUNT = SLOTS.length;

// Fisher–Yates shuffle (returns a new array).
function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Deal four distinct actions onto the disc and choose which slot is the target,
// making sure that target's action differs from last round's.
function makeRound(prev: Action | null): { board: Action[]; padId: number } {
  const board = shuffled(ACTIONS).slice(0, SLOT_COUNT);
  const choices = board.map((_, i) => i).filter((i) => board[i] !== prev);
  const padId = choices[Math.floor(Math.random() * choices.length)];
  return { board, padId };
}

const NAMES_KEY = 'simon-names';
const BEST_KEY = 'simon-best-by-user'; // classic: longest sequence repeated
const SAYS_BEST_KEY = 'simon-says-best-by-user'; // simon says: commands survived

// --- Classic playback timing (ms). The sequence speeds up as it grows. ---
const BASE_LIT = 520;
const BASE_GAP = 230;
const MIN_LIT = 240;
const MIN_GAP = 110;

// --- Simon Says timing (ms). The window to react shrinks as you survive. ---
const SAYS_BASE = 2400; // time to react to the first command
const SAYS_MIN = 950; // never tighter than this
const SAYS_STEP = 95; // shaved off per command survived
const SAYS_GAP = 650; // pause between commands
const SAYS_SAY_CHANCE = 0.68; // how often it's a real "Simon says" command

type Mode = 'classic' | 'says';
type Status = 'menu' | 'playing' | 'over';
type Phase = 'watch' | 'repeat'; // watch = Simon's turn, repeat = your turn
// The obeying player's mood: idle (waiting), listen (a command is up),
// happy (obeyed right), sad (obeyed a fake command or missed).
type Reaction = 'idle' | 'listen' | 'happy' | 'sad';
type Best = Record<string, number>;
type Command = { says: boolean; padId: number };

function randomPad(): number {
  return Math.floor(Math.random() * SLOT_COUNT);
}

function App() {
  // ---- Localization (shared arcade contract) ----
  const [lang, setLang] = useState<Lang>(initialLang);
  const s = STR[lang];
  // Show the current language's word for each action (falls back to English).
  const actionName = (a: Action) => s.actions[a.id] ?? a.name;

  // ---- Player menu (shared pattern across the arcade) ----
  const [names, setNames] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState('');
  const [username, setUsername] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [bestClassic, setBestClassic] = useState<Best>({});
  const [bestSays, setBestSays] = useState<Best>({});

  // ---- Game state ----
  const [mode, setMode] = useState<Mode>('classic');
  const [status, setStatus] = useState<Status>('menu');
  const [phase, setPhase] = useState<Phase>('watch');
  const [level, setLevel] = useState(0); // classic: sequence length · says: commands survived
  const [activePad, setActivePad] = useState<number | null>(null);

  // Simon Says display
  const [command, setCommand] = useState<Command | null>(null);
  const [windowMs, setWindowMs] = useState(0);
  const [cmdSeq, setCmdSeq] = useState(0); // restarts the countdown bar animation
  // The on-screen player who has to obey Simon. Drives the character's mood.
  const [reaction, setReaction] = useState<Reaction>('idle');
  // The action the player just performed (emoji) — null when they correctly did nothing.
  const [doneAction, setDoneAction] = useState<string | null>(null);
  // The four actions currently on the disc — reshuffled every round in Simon Says.
  const [board, setBoard] = useState<Action[]>(() => shuffled(ACTIONS).slice(0, SLOT_COUNT));

  // Refs so timeouts and the click handler always read the latest values.
  const seqRef = useRef<number[]>([]);
  const inputRef = useRef(0); // classic: pads matched this round
  const clearedRef = useRef(0); // classic: rounds fully repeated correctly
  const survivedRef = useRef(0); // says: commands obeyed correctly
  const cmdRef = useRef<Command | null>(null);
  const awaitingRef = useRef(false); // says: is the react-window open?
  const answeredRef = useRef(false); // says: has the player acted on this command?
  const modeRef = useRef<Mode>('classic');
  const phaseRef = useRef<Phase>('watch');
  const statusRef = useRef<Status>('menu');
  const timersRef = useRef<number[]>([]);
  const audioRef = useRef<AudioContext | null>(null);
  const boardRef = useRef<Action[]>(board); // latest board for timeout/click handlers
  const lastTargetRef = useRef<Action | null>(null); // last round's called action
  // Latest gamepad handlers, so the pad loop (set up once) always calls the
  // current closures without capturing stale state.
  const actionsRef = useRef<{ pressPad: (i: number) => void; startOrRestart: () => void } | null>(
    null
  );

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);
  useEffect(() => {
    statusRef.current = status;
  }, [status]);
  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  // Keep the document language + direction (RTL for Arabic) in sync.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';
  }, [lang]);

  // Load saved players + best scores (both modes).
  useEffect(() => {
    const savedClassic: Best = JSON.parse(localStorage.getItem(BEST_KEY) || '{}');
    const savedSays: Best = JSON.parse(localStorage.getItem(SAYS_BEST_KEY) || '{}');
    const savedNames: string[] = JSON.parse(localStorage.getItem(NAMES_KEY) || '[]');
    const merged = Array.from(
      new Set([...savedNames, ...Object.keys(savedClassic), ...Object.keys(savedSays)])
    );
    setBestClassic(savedClassic);
    setBestSays(savedSays);
    setNames(merged);
    if (merged.length > 0) setSelectedName(merged[0]);
  }, []);

  const cancelSpeech = () => {
    try {
      window.speechSynthesis?.cancel();
    } catch {
      /* speech not supported */
    }
  };

  // Clear any pending timers (on stop / unmount / game over).
  const clearTimers = () => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  };
  useEffect(
    () => () => {
      clearTimers();
      cancelSpeech();
    },
    []
  );

  const bestStore = mode === 'says' ? bestSays : bestClassic;
  const myBest = username ? bestStore[username] || 0 : 0;

  // ---- Player menu helpers ----
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
    if (bestClassic[n] !== undefined) {
      const next = { ...bestClassic };
      delete next[n];
      setBestClassic(next);
      localStorage.setItem(BEST_KEY, JSON.stringify(next));
    }
    if (bestSays[n] !== undefined) {
      const next = { ...bestSays };
      delete next[n];
      setBestSays(next);
      localStorage.setItem(SAYS_BEST_KEY, JSON.stringify(next));
    }
    if (selectedName === n) setSelectedName('');
  };

  // ---- Audio: a short tone per pad (and a low buzz on a mistake) ----
  const ensureAudio = () => {
    if (!audioRef.current) {
      const Ctx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioRef.current = new Ctx();
    }
    if (audioRef.current.state === 'suspended') audioRef.current.resume();
    return audioRef.current;
  };

  const playTone = (freq: number, duration = 0.32, type: OscillatorType = 'sine') => {
    const ctx = audioRef.current;
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.22, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration + 0.02);
  };

  // Simon literally tells you the command out loud.
  const speak = (text: string) => {
    try {
      const synth = window.speechSynthesis;
      if (!synth) return;
      synth.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = SPEECH_LANG[lang];
      u.rate = 1.05;
      u.pitch = 1;
      synth.speak(u);
    } catch {
      /* speech not supported — the on-screen text still shows the command */
    }
  };

  // Briefly light a pad (used by playback and the player's taps).
  const flash = (padId: number, lit: number) => {
    setActivePad(padId);
    const t = window.setTimeout(() => setActivePad((cur) => (cur === padId ? null : cur)), lit);
    timersRef.current.push(t);
  };

  // ===================== CLASSIC MODE =====================
  const playback = () => {
    setPhase('watch');
    phaseRef.current = 'watch';
    const speedup = Math.max(0, seqRef.current.length - 1);
    const lit = Math.max(MIN_LIT, BASE_LIT - speedup * 22);
    const gap = Math.max(MIN_GAP, BASE_GAP - speedup * 10);
    const step = lit + gap;

    seqRef.current.forEach((padId, i) => {
      const on = window.setTimeout(() => {
        flash(padId, lit);
        playTone(boardRef.current[padId].freq, lit / 1000);
      }, 600 + i * step);
      timersRef.current.push(on);
    });

    const done = window.setTimeout(() => {
      setPhase('repeat');
      phaseRef.current = 'repeat';
    }, 600 + seqRef.current.length * step);
    timersRef.current.push(done);
  };

  const nextRound = () => {
    seqRef.current = [...seqRef.current, randomPad()];
    inputRef.current = 0;
    setLevel(seqRef.current.length);
    playback();
  };

  // ===================== SIMON SAYS MODE =====================
  const nextCommand = () => {
    const win = Math.max(SAYS_MIN, SAYS_BASE - survivedRef.current * SAYS_STEP);
    // Fresh actions on the disc, and a brand-new target action this round.
    const { board: nextBoard, padId } = makeRound(lastTargetRef.current);
    boardRef.current = nextBoard;
    lastTargetRef.current = nextBoard[padId];
    setBoard(nextBoard);
    const cmd: Command = { says: Math.random() < SAYS_SAY_CHANCE, padId };
    cmdRef.current = cmd;
    answeredRef.current = false;
    awaitingRef.current = true;
    setCommand(cmd);
    setWindowMs(win);
    setCmdSeq((s) => s + 1);
    setReaction('listen'); // the player leans in to hear the command
    setPhase('repeat');
    phaseRef.current = 'repeat';
    speak((cmd.says ? s.simonSays + ' ' : '') + actionName(nextBoard[padId]));
    const t = window.setTimeout(resolveSaysTimeout, win);
    timersRef.current.push(t);
  };

  // The react-window closed with no tap.
  const resolveSaysTimeout = () => {
    if (answeredRef.current) return; // a tap already settled it
    awaitingRef.current = false;
    const cmd = cmdRef.current;
    if (cmd && !cmd.says) {
      setDoneAction(null); // correctly stood still — Simon didn't say
      saysPass();
    } else {
      endGame(); // failed to obey in time
    }
  };

  const saysPass = () => {
    survivedRef.current += 1;
    setLevel(survivedRef.current);
    setReaction('happy'); // obeyed correctly — the player celebrates
    setPhase('watch');
    phaseRef.current = 'watch';
    const t = window.setTimeout(nextCommand, SAYS_GAP);
    timersRef.current.push(t);
  };

  // ===================== SHARED LIFECYCLE =====================
  const startGame = (forcedName?: string) => {
    const name = forcedName || selectedName || username;
    if (!name) return;
    ensureAudio();
    setUsername(name);
    clearTimers();
    cancelSpeech();
    seqRef.current = [];
    inputRef.current = 0;
    clearedRef.current = 0;
    survivedRef.current = 0;
    cmdRef.current = null;
    awaitingRef.current = false;
    answeredRef.current = false;
    setCommand(null);
    setReaction('idle');
    setDoneAction(null);
    const freshBoard = shuffled(ACTIONS).slice(0, SLOT_COUNT);
    boardRef.current = freshBoard;
    lastTargetRef.current = null;
    setBoard(freshBoard);
    setLevel(0);
    setActivePad(null);
    statusRef.current = 'playing';
    setStatus('playing');
    if (modeRef.current === 'says') nextCommand();
    else nextRound();
  };

  const stopGame = () => {
    clearTimers();
    cancelSpeech();
    statusRef.current = 'menu';
    setStatus('menu');
    setActivePad(null);
    setReaction('idle');
  };

  const endGame = () => {
    clearTimers();
    cancelSpeech();
    awaitingRef.current = false;
    playTone(110, 0.6, 'sawtooth'); // low buzz
    const says = modeRef.current === 'says';
    if (says) setReaction('sad'); // obeyed a fake command or missed — the player slumps
    const reached = says ? survivedRef.current : clearedRef.current;
    const store = says ? bestSays : bestClassic;
    if (username && reached > (store[username] || 0)) {
      const next = { ...store, [username]: reached };
      if (says) {
        setBestSays(next);
        localStorage.setItem(SAYS_BEST_KEY, JSON.stringify(next));
      } else {
        setBestClassic(next);
        localStorage.setItem(BEST_KEY, JSON.stringify(next));
      }
    }
    statusRef.current = 'over';
    setStatus('over');
    setActivePad(null);
  };

  // The player taps (or keys) a pad.
  const press = (padId: number) => {
    if (statusRef.current !== 'playing') return;

    if (modeRef.current === 'says') {
      // Only the open react-window counts; ignore stray taps between commands.
      if (!awaitingRef.current || answeredRef.current) return;
      answeredRef.current = true;
      awaitingRef.current = false;
      flash(padId, 220);
      playTone(boardRef.current[padId].freq, 0.26);
      const cmd = cmdRef.current;
      if (cmd && cmd.says && padId === cmd.padId) {
        setDoneAction(boardRef.current[padId].emoji); // the player acts out the obeyed action
        saysPass();
      } else {
        endGame(); // obeyed a fake command, or tapped the wrong pad
      }
      return;
    }

    // Classic mode
    if (phaseRef.current !== 'repeat') return;
    flash(padId, 220);
    playTone(boardRef.current[padId].freq, 0.26);
    if (padId === seqRef.current[inputRef.current]) {
      inputRef.current += 1;
      if (inputRef.current === seqRef.current.length) {
        clearedRef.current = seqRef.current.length;
        setPhase('watch');
        phaseRef.current = 'watch';
        const t = window.setTimeout(nextRound, 700);
        timersRef.current.push(t);
      }
    } else {
      endGame();
    }
  };

  // Keyboard: 1-4 (or arrow keys) map to the four pads.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.tagName === 'INPUT') return;
      const map: Record<string, number> = {
        '1': 0, ArrowLeft: 0,
        '2': 1, ArrowUp: 1,
        '3': 2, ArrowDown: 2,
        '4': 3, ArrowRight: 3
      };
      const pad = map[e.key];
      if (pad !== undefined) {
        e.preventDefault();
        press(pad);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Start from a controller even with no player picked: spin up a guest so a
  // pad-only user is never stuck at the menu. On game-over it just replays.
  const padStartOrRestart = () => {
    if (statusRef.current === 'over') {
      startGame();
      return;
    }
    if (statusRef.current !== 'menu') return;
    let name = selectedName || username || names[0];
    if (!name) {
      name = 'Player 1';
      if (!names.includes(name)) saveNames([name, ...names]);
    }
    setSelectedName(name);
    startGame(name);
  };

  // Console gamepad: the four pads map to both the D-pad and the face buttons,
  // arranged to match the on-screen 2×2 disc (0 = top-left, 1 = top-right,
  // 2 = bottom-left, 3 = bottom-right). Start/A begins or replays a game. Pad
  // presses go through press(), which already ignores them unless it's your turn.
  useEffect(() => {
    const DIR_PAD: Record<string, number> = { up: 0, right: 1, down: 3, left: 2 };
    const BTN_PAD: Record<string, number> = { Y: 0, B: 1, A: 3, X: 2 };
    const stop = startGamepad({
      onDir: (d) => actionsRef.current?.pressPad(DIR_PAD[d]),
      onButton: (b) => {
        const a = actionsRef.current;
        if (!a) return;
        if (statusRef.current !== 'playing') {
          if (b === 'start' || b === 'A') a.startOrRestart();
          return;
        }
        const pad = BTN_PAD[b];
        if (pad !== undefined) a.pressPad(pad);
      }
    });
    return stop;
  }, []);

  // Publish the freshest handlers for the gamepad loop each render.
  actionsRef.current = { pressPad: press, startOrRestart: padStartOrRestart };

  // ===================== THE MENU =====================
  if (status === 'menu') {
    return (
      <div className="app-shell menu-shell">
        <div className="menu-panel">
          <div className="menu-lang">
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
          </div>
          <p className="eyebrow">{s.eyebrow}</p>
          <h1>
            Sim<span className="accent">on</span>
          </h1>
          <div className="menu-bird">🎵</div>

          <div className="mode-row" role="tablist" aria-label={s.modeAria}>
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'classic'}
              className={`mode-btn ${mode === 'classic' ? 'active' : ''}`}
              onClick={() => setMode('classic')}
            >
              <span className="mode-emoji">🧠</span>
              <span className="mode-name">{s.classicName}</span>
              <span className="mode-desc">{s.classicDesc}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'says'}
              className={`mode-btn ${mode === 'says' ? 'active' : ''}`}
              onClick={() => setMode('says')}
            >
              <span className="mode-emoji">🗣️</span>
              <span className="mode-name">{s.saysName}</span>
              <span className="mode-desc">{s.saysDesc}</span>
            </button>
          </div>

          <p className="menu-copy">{mode === 'says' ? s.copySays : s.copyClassic}</p>

          <div className="players">
            {names.length > 0 ? (
              names.map((n) => (
                <div key={n} className={`player-chip ${selectedName === n ? 'selected' : ''}`}>
                  <button
                    type="button"
                    className="player-chip-main"
                    onClick={() => setSelectedName(n)}
                  >
                    <span className="avatar">{n.charAt(0).toUpperCase()}</span>
                    <span className="player-name">{n}</span>
                    <span className="chip-best">🏆 {bestStore[n] || 0}</span>
                  </button>
                  <button
                    type="button"
                    className="player-chip-remove"
                    aria-label={s.remove(n)}
                    onClick={() => removeName(n)}
                  >
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
              type="text"
              maxLength={16}
              placeholder={s.addPlaceholder}
            />
            <button className="add-button" onClick={addName} disabled={!nameInput.trim()}>
              {s.add}
            </button>
          </div>

          <button
            className="button-primary button-full"
            onClick={() => startGame()}
            disabled={!selectedName}
          >
            {s.startWith(mode === 'says' ? s.saysName : s.classicName)}
          </button>

          {selectedName && (
            <p className="best-line">
              {s.playingAs} <strong>{selectedName}</strong> · 🏆 {s.best}{' '}
              {bestStore[selectedName] || 0}
            </p>
          )}
        </div>
      </div>
    );
  }

  // ===================== THE GAME =====================
  const watching = phase === 'watch';
  const saysMode = mode === 'says';

  // The obeying player's face + caption for each mood. When they obey a real
  // command they act it out (the action's emoji); when they rightly stand still
  // on a fake command, they just look pleased.
  const OBEYER: Record<Reaction, { face: string; label: string }> = {
    idle: { face: '🧍', label: s.readyToObey },
    listen: { face: '🧍', label: s.listening },
    happy: doneAction
      ? { face: doneAction, label: s.doingIt }
      : { face: '🙆', label: s.goodDidntSay },
    sad: { face: '🙅', label: s.outDidntSay }
  };
  const obeyer = OBEYER[reaction];
  return (
    <div className="app-shell">
      <header className="game-bar">
        <span className="player-tag">{saysMode ? '🗣️' : '🧠'} {username}</span>
        <button className="stop-button" onClick={stopGame}>
          {s.stop}
        </button>
      </header>

      <div className="score-strip">
        <div className="score-chip you">
          <span>{saysMode ? s.score : s.round}</span>
          <strong>{level}</strong>
        </div>
        <div className="score-chip cpu">
          <span>{s.best}</span>
          <strong>{Math.max(myBest, level)}</strong>
        </div>
        <div className="score-chip">
          <span>{s.turn}</span>
          <strong className="turn">
            {status === 'over'
              ? '—'
              : saysMode
                ? watching
                  ? s.turnWait
                  : s.turnListen
                : watching
                  ? s.turnWatch
                  : s.turnGo}
          </strong>
        </div>
      </div>

      {saysMode && (
        <div className="says-stage">
          {/* The player who has to obey Simon — reacts to how you're doing. */}
          <div className={`obeyer obeyer-${reaction}`} aria-hidden="true">
            <span className="obeyer-face">{obeyer.face}</span>
            <span className="obeyer-status">{obeyer.label}</span>
          </div>
          {status === 'playing' && (
          <>
          <div className={`cmd-banner ${command && phase === 'repeat' ? 'live' : 'idle'}`}>
            {command && phase === 'repeat' ? (
              <>
                {command.says && <span className="cmd-prefix">{s.simonSays}</span>}
                <span className="cmd-action">
                  <span className="cmd-glyph">{board[command.padId].emoji}</span>{' '}
                  {actionName(board[command.padId])}
                </span>
              </>
            ) : (
              <span className="cmd-wait">{s.cmdWait}</span>
            )}
          </div>
          <div className="cmd-bar">
            {command && phase === 'repeat' && (
              <div
                key={cmdSeq}
                className="cmd-bar-fill"
                style={{ animationDuration: `${windowMs}ms` }}
              />
            )}
          </div>
          </>
          )}
        </div>
      )}

      <div className="board-stage">
        <div className="board-frame">
          <div className={`simon-grid ${watching && status === 'playing' ? 'locked' : ''}`}>
            {board.map((action, i) => (
              <button
                key={i}
                className={`pad pad-${i} ${activePad === i ? 'active' : ''}`}
                style={
                  {
                    '--pad-base': SLOTS[i].base,
                    '--pad-lit': SLOTS[i].lit
                  } as React.CSSProperties
                }
                aria-label={actionName(action)}
                onPointerDown={() => press(i)}
              >
                <span className="pad-glyph">{action.emoji}</span>
                <span className="pad-label">{actionName(action)}</span>
              </button>
            ))}
            <div className="simon-hub">
              <span className="hub-label">{saysMode ? s.hubSays : s.hubSimon}</span>
              <span className="hub-count">{level}</span>
            </div>
          </div>

          {status === 'over' && (
            <div className="overlay">
              <div className="overlay-card">
                <p className="overlay-eyebrow">{s.gameOver}</p>
                <h2>{level > myBest ? s.newBest : s.niceRun}</h2>
                <div className="overlay-score">
                  <div>
                    <span>{saysMode ? s.survived : s.reached}</span>
                    <strong>{level}</strong>
                  </div>
                  <div>
                    <span>{s.best}</span>
                    <strong>{Math.max(myBest, level)}</strong>
                  </div>
                </div>
                <div className="overlay-actions">
                  <button className="button-primary" onClick={() => startGame()}>
                    {s.playAgain}
                  </button>
                  <button className="button-secondary" onClick={stopGame}>
                    {s.menu}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="hint">
        {saysMode
          ? s.hintSays
          : watching && status === 'playing'
            ? s.hintWatch
            : s.hintRepeat}
      </p>
    </div>
  );
}

export default App;
