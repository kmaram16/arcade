import { useEffect, useRef, useState } from 'react';
import './App.css';

// ===== Difficulty =====
type DiffKey = 'easy' | 'medium' | 'hard';
type Diff = {
  key: DiffKey;
  label: string;
  desc: string;
  popMin: number; // shortest gap between pop-ups (ms)
  popMax: number; // longest gap
  dur: number; // how long a critter stays up (ms)
  maxUp: number; // how many can be up at once
};

const DIFFS: Diff[] = [
  { key: 'easy', label: 'Easy', desc: 'Relaxed', popMin: 720, popMax: 1100, dur: 1150, maxUp: 2 },
  { key: 'medium', label: 'Medium', desc: 'Quick', popMin: 520, popMax: 820, dur: 920, maxUp: 2 },
  { key: 'hard', label: 'Hard', desc: 'Frantic', popMin: 340, popMax: 600, dur: 680, maxUp: 3 }
];

const HOLES = 9; // 3 × 3 field
const GAME_TIME = 30; // seconds per round

const GOLD_CHANCE = 0.14; // a shiny mole worth more
const BOMB_CHANCE = 0.14; // a bomb you must NOT whack
const GOLD_POINTS = 3;
const MOLE_POINTS = 1;
const BOMB_PENALTY = 2;

const NAMES_KEY = 'whack-names';
const BEST_KEY = 'whack-best-by-user';

type Status = 'menu' | 'playing' | 'over';
type Kind = 'none' | 'mole' | 'gold' | 'bomb';
type Hole = { kind: Kind; hit: boolean };
type Best = Record<string, Partial<Record<DiffKey, number>>>;

const emptyHoles = (): Hole[] => Array.from({ length: HOLES }, () => ({ kind: 'none', hit: false }));
const randInt = (min: number, max: number) => Math.floor(min + Math.random() * (max - min));

function App() {
  // ---- Player menu (shared arcade pattern) ----
  const [names, setNames] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState('');
  const [username, setUsername] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [best, setBest] = useState<Best>({});

  // ---- Game state ----
  const [diff, setDiff] = useState<Diff>(DIFFS[0]);
  const [status, setStatus] = useState<Status>('menu');
  const [holes, setHoles] = useState<Hole[]>(emptyHoles());
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_TIME);
  const [shake, setShake] = useState(false);

  // Refs so the spawn/whack timers always read the latest values.
  const statusRef = useRef<Status>('menu');
  const scoreRef = useRef(0);
  const diffRef = useRef<Diff>(DIFFS[0]);
  const holesRef = useRef<Hole[]>(holes);
  const spawnTimerRef = useRef<number | null>(null);
  const countdownRef = useRef<number | null>(null);
  const holeTimersRef = useRef<(number | null)[]>(Array(HOLES).fill(null));
  const shakeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    statusRef.current = status;
  }, [status]);
  useEffect(() => {
    diffRef.current = diff;
  }, [diff]);

  // Load saved players + best scores.
  useEffect(() => {
    const savedBest: Best = JSON.parse(localStorage.getItem(BEST_KEY) || '{}');
    const savedNames: string[] = JSON.parse(localStorage.getItem(NAMES_KEY) || '[]');
    const merged = Array.from(new Set([...savedNames, ...Object.keys(savedBest)]));
    setBest(savedBest);
    setNames(merged);
    if (merged.length > 0) setSelectedName(merged[0]);
  }, []);

  const clearAllTimers = () => {
    if (spawnTimerRef.current !== null) clearTimeout(spawnTimerRef.current);
    if (countdownRef.current !== null) clearInterval(countdownRef.current);
    if (shakeTimerRef.current !== null) clearTimeout(shakeTimerRef.current);
    spawnTimerRef.current = null;
    countdownRef.current = null;
    shakeTimerRef.current = null;
    holeTimersRef.current.forEach((t) => t !== null && clearTimeout(t));
    holeTimersRef.current = Array(HOLES).fill(null);
  };
  useEffect(() => clearAllTimers, []);

  const myBest = username ? best[username]?.[diff.key] ?? 0 : 0;

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
    if (best[n] !== undefined) {
      const next = { ...best };
      delete next[n];
      setBest(next);
      localStorage.setItem(BEST_KEY, JSON.stringify(next));
    }
    if (selectedName === n) setSelectedName('');
  };

  // Update holes through the ref so timers never read a stale board.
  const updateHoles = (fn: (hs: Hole[]) => Hole[]) => {
    const next = fn(holesRef.current);
    holesRef.current = next;
    setHoles(next);
  };

  // ---- Pop-up engine ----
  const spawnOne = () => {
    if (statusRef.current !== 'playing') return;
    const d = diffRef.current;
    const current = holesRef.current;
    const upCount = current.filter((h) => h.kind !== 'none').length;
    const empties = current.map((h, i) => ({ h, i })).filter((x) => x.h.kind === 'none');
    if (upCount >= d.maxUp || empties.length === 0) return;

    const pick = empties[randInt(0, empties.length)].i;
    const roll = Math.random();
    const kind: Kind = roll < BOMB_CHANCE ? 'bomb' : roll < BOMB_CHANCE + GOLD_CHANCE ? 'gold' : 'mole';
    updateHoles((hs) => hs.map((h, i) => (i === pick ? { kind, hit: false } : h)));

    // Auto-retract if it isn't whacked in time.
    const t = window.setTimeout(() => {
      updateHoles((hs) =>
        hs.map((h, i) => (i === pick && !h.hit && h.kind === kind ? { kind: 'none', hit: false } : h))
      );
    }, d.dur);
    holeTimersRef.current[pick] = t;
  };

  const scheduleSpawn = () => {
    const d = diffRef.current;
    const delay = randInt(d.popMin, d.popMax);
    spawnTimerRef.current = window.setTimeout(() => {
      spawnOne();
      scheduleSpawn();
    }, delay);
  };

  const whack = (i: number) => {
    if (statusRef.current !== 'playing') return;
    const h = holesRef.current[i];
    if (h.kind === 'none' || h.hit) return;

    const t = holeTimersRef.current[i];
    if (t !== null) clearTimeout(t);

    if (h.kind === 'bomb') {
      scoreRef.current = Math.max(0, scoreRef.current - BOMB_PENALTY);
      setScore(scoreRef.current);
      setShake(true);
      if (shakeTimerRef.current !== null) clearTimeout(shakeTimerRef.current);
      shakeTimerRef.current = window.setTimeout(() => setShake(false), 320);
    } else {
      scoreRef.current += h.kind === 'gold' ? GOLD_POINTS : MOLE_POINTS;
      setScore(scoreRef.current);
    }

    updateHoles((hs) => hs.map((hh, idx) => (idx === i ? { ...hh, hit: true } : hh)));
    const clear = window.setTimeout(() => {
      updateHoles((hs) => hs.map((hh, idx) => (idx === i ? { kind: 'none', hit: false } : hh)));
    }, 260);
    holeTimersRef.current[i] = clear;
  };

  // ---- Lifecycle ----
  const startGame = () => {
    const name = selectedName || username;
    if (!name) return;
    setUsername(name);
    clearAllTimers();
    scoreRef.current = 0;
    holesRef.current = emptyHoles();
    setHoles(holesRef.current);
    setScore(0);
    setTimeLeft(GAME_TIME);
    setShake(false);
    statusRef.current = 'playing';
    setStatus('playing');

    scheduleSpawn();
    countdownRef.current = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          endGame();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const stopGame = () => {
    clearAllTimers();
    statusRef.current = 'menu';
    setStatus('menu');
    holesRef.current = emptyHoles();
    setHoles(holesRef.current);
  };

  const endGame = () => {
    clearAllTimers();
    statusRef.current = 'over';
    setStatus('over');
    holesRef.current = emptyHoles();
    setHoles(holesRef.current);
    const final = scoreRef.current;
    if (username) {
      const prev = best[username]?.[diffRef.current.key] ?? 0;
      if (final > prev) {
        const next: Best = {
          ...best,
          [username]: { ...best[username], [diffRef.current.key]: final }
        };
        setBest(next);
        localStorage.setItem(BEST_KEY, JSON.stringify(next));
      }
    }
  };

  // ===================== THE MENU =====================
  if (status === 'menu') {
    return (
      <div className="app-shell menu-shell">
        <div className="menu-panel">
          <p className="eyebrow">Premium Arcade</p>
          <h1>
            Whack-a-<span className="accent">Mole</span>
          </h1>
          <div className="menu-bird">🐹</div>

          <div className="mode-row" role="tablist" aria-label="Difficulty">
            {DIFFS.map((d) => (
              <button
                key={d.key}
                type="button"
                role="tab"
                aria-selected={diff.key === d.key}
                className={`mode-btn ${diff.key === d.key ? 'active' : ''}`}
                onClick={() => setDiff(d)}
              >
                <span className="mode-name">{d.label}</span>
                <span className="mode-desc">{d.desc}</span>
              </button>
            ))}
          </div>

          <p className="menu-copy">
            Bonk the moles 🐹 (and golden ones ✨ for triple points), but never the bombs 💣! You
            get {GAME_TIME} seconds.
          </p>

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
                    <span className="chip-best">🏆 {best[n]?.[diff.key] ?? 0}</span>
                  </button>
                  <button
                    type="button"
                    className="player-chip-remove"
                    aria-label={`Remove ${n}`}
                    onClick={() => removeName(n)}
                  >
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

          <button
            className="button-primary button-full"
            onClick={startGame}
            disabled={!selectedName}
          >
            ▶ Start game
          </button>

          {selectedName && (
            <p className="best-line">
              Playing as <strong>{selectedName}</strong> · 🏆 Best {best[selectedName]?.[diff.key] ?? 0}
            </p>
          )}
        </div>
      </div>
    );
  }

  // ===================== THE GAME =====================
  return (
    <div className="app-shell">
      <header className="game-bar">
        <span className="player-tag">🔨 {username}</span>
        <button className="stop-button" onClick={stopGame}>
          ■ Stop
        </button>
      </header>

      <div className="score-strip">
        <div className="score-chip you">
          <span>Score</span>
          <strong>{score}</strong>
        </div>
        <div className={`score-chip cpu ${timeLeft <= 5 ? 'low' : ''}`}>
          <span>Time</span>
          <strong className="turn">{timeLeft}s</strong>
        </div>
        <div className="score-chip">
          <span>Best</span>
          <strong>{Math.max(myBest, score)}</strong>
        </div>
      </div>

      <div className="board-stage">
        <div className={`board-frame ${shake ? 'shake' : ''}`}>
          <div className="mole-grid">
            {holes.map((h, i) => (
              <button
                key={i}
                className={`hole kind-${h.kind} ${h.kind !== 'none' ? 'up' : ''} ${h.hit ? 'hit' : ''}`}
                aria-label="Hole"
                onPointerDown={() => whack(i)}
              >
                <span className="hole-dirt" />
                <span className="critter">
                  {h.hit ? '💥' : h.kind === 'bomb' ? '💣' : h.kind === 'none' ? '' : '🐹'}
                </span>
                {h.kind === 'gold' && !h.hit && <span className="sparkle">✨</span>}
              </button>
            ))}
          </div>

          {status === 'over' && (
            <div className="overlay">
              <div className="overlay-card">
                <p className="overlay-eyebrow">Time's up!</p>
                <h2>{score >= myBest && score > 0 ? 'New best! 🎉' : 'Nice whacking! 🔨'}</h2>
                <div className="overlay-score">
                  <div>
                    <span>Score</span>
                    <strong>{score}</strong>
                  </div>
                  <div>
                    <span>Best</span>
                    <strong>{Math.max(myBest, score)}</strong>
                  </div>
                </div>
                <div className="overlay-actions">
                  <button className="button-primary" onClick={startGame}>
                    ↻ Play again
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

      <p className="hint">🐹 +1 · ✨ +{GOLD_POINTS} · 💣 −{BOMB_PENALTY} · {diff.label} mode</p>
    </div>
  );
}

export default App;
