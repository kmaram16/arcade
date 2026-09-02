import { useEffect, useRef, useState } from 'react';
import './App.css';

// ===== Board sizes =====
type SizeKey = 'easy' | 'medium' | 'hard';
type Size = { key: SizeKey; label: string; cols: number; rows: number; desc: string };

const SIZES: Size[] = [
  { key: 'easy', label: 'Easy', cols: 4, rows: 3, desc: '6 pairs' },
  { key: 'medium', label: 'Medium', cols: 4, rows: 4, desc: '8 pairs' },
  { key: 'hard', label: 'Hard', cols: 5, rows: 4, desc: '10 pairs' }
];

// Card faces — one per pair (need up to 10 for the hard board).
const FACES = ['🐶', '🐱', '🦊', '🐼', '🐸', '🐵', '🦁', '🐯', '🐨', '🐷'];

const NAMES_KEY = 'memory-names';
const BEST_KEY = 'memory-best-by-user';

const REVEAL_MATCH = 420; // pause before a matched pair locks in
const REVEAL_MISS = 850; // how long a mismatched pair stays up

// vs-Robot tuning
const ROBOT_MEMORY = 0.8; // chance the robot remembers a card it just saw
const ROBOT_THINK = 700; // pause before the robot takes its turn
const ROBOT_FLIP_GAP = 720; // pause between the robot's two flips

type Status = 'menu' | 'playing' | 'won';
type Opponent = 'solo' | 'robot';
type Turn = 'you' | 'robot';
type Card = { id: number; face: string; matched: boolean };
type Record_ = { moves: number; time: number };
type Best = Record<string, Partial<Record<SizeKey, Record_>>>;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildDeck(size: Size): Card[] {
  const pairs = (size.cols * size.rows) / 2;
  const chosen = FACES.slice(0, pairs);
  const doubled = shuffle([...chosen, ...chosen]);
  return doubled.map((face, id) => ({ id, face, matched: false }));
}

function fmtTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

function App() {
  // ---- Player menu (shared arcade pattern) ----
  const [names, setNames] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState('');
  const [username, setUsername] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [best, setBest] = useState<Best>({});

  // ---- Game state ----
  const [size, setSize] = useState<Size>(SIZES[0]);
  const [status, setStatus] = useState<Status>('menu');
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]); // up to 2 unresolved indices
  const [moves, setMoves] = useState(0);
  const [matched, setMatched] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [started, setStarted] = useState(false); // clock runs after the first flip

  // vs-Robot state
  const [opponent, setOpponent] = useState<Opponent>('solo');
  const [turn, setTurn] = useState<Turn>('you');
  const [youPairs, setYouPairs] = useState(0);
  const [robotPairs, setRobotPairs] = useState(0);

  const lockRef = useRef(false); // ignore clicks while a pair resolves
  const startRef = useRef(0); // timestamp of the first flip
  const timersRef = useRef<number[]>([]);
  const movesRef = useRef(0); // latest move count (for the final record)
  const matchedRef = useRef(0); // matched-card count, robust across robot turns
  const turnRef = useRef<Turn>('you'); // whose turn it is (for click guards)
  const robotMemRef = useRef<Map<number, string>>(new Map()); // cards the robot recalls

  const total = cards.length;

  // Load saved players + best records.
  useEffect(() => {
    const savedBest: Best = JSON.parse(localStorage.getItem(BEST_KEY) || '{}');
    const savedNames: string[] = JSON.parse(localStorage.getItem(NAMES_KEY) || '[]');
    const merged = Array.from(new Set([...savedNames, ...Object.keys(savedBest)]));
    setBest(savedBest);
    setNames(merged);
    if (merged.length > 0) setSelectedName(merged[0]);
  }, []);

  const clearTimers = () => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  };
  useEffect(() => clearTimers, []);

  // Tick the clock while playing (starts when the first card is flipped).
  useEffect(() => {
    if (status !== 'playing' || !started) return;
    const id = window.setInterval(() => {
      setElapsed(Math.floor((Date.now() - startRef.current) / 1000));
    }, 250);
    return () => clearInterval(id);
  }, [status, started]);

  // Drive the robot: on its turn it takes a move — and again after each match
  // (robotPairs changes), since matching lets the same player keep going.
  useEffect(() => {
    if (status !== 'playing' || opponent !== 'robot' || turn !== 'robot') return;
    const t = window.setTimeout(() => {
      if (!lockRef.current) robotMove();
    }, ROBOT_THINK);
    timersRef.current.push(t);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, opponent, turn, robotPairs]);

  const myBest = username ? best[username]?.[size.key] : undefined;

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

  // ---- Game lifecycle ----
  const startGame = () => {
    const name = selectedName || username;
    if (!name) return;
    setUsername(name);
    clearTimers();
    lockRef.current = false;
    startRef.current = 0;
    movesRef.current = 0;
    matchedRef.current = 0;
    turnRef.current = 'you';
    robotMemRef.current = new Map();
    setCards(buildDeck(size));
    setFlipped([]);
    setMoves(0);
    setMatched(0);
    setElapsed(0);
    setStarted(false);
    setTurn('you');
    setYouPairs(0);
    setRobotPairs(0);
    setStatus('playing');
  };

  const stopGame = () => {
    clearTimers();
    lockRef.current = false;
    startRef.current = 0;
    setStatus('menu');
  };

  const endGame = () => {
    clearTimers();
    const time = startRef.current ? Math.floor((Date.now() - startRef.current) / 1000) : elapsed;
    setElapsed(time);
    setStatus('won');
    // Best records are kept for Solo only (vs-Robot is win/lose, not a time trial).
    if (opponent === 'solo' && username) {
      const finalMoves = movesRef.current;
      const prev = best[username]?.[size.key];
      const better = !prev || finalMoves < prev.moves || (finalMoves === prev.moves && time < prev.time);
      if (better) {
        const next: Best = {
          ...best,
          [username]: { ...best[username], [size.key]: { moves: finalMoves, time } }
        };
        setBest(next);
        localStorage.setItem(BEST_KEY, JSON.stringify(next));
      }
    }
  };

  // The robot watches every revealed card and recalls it (imperfectly).
  const remember = (idx: number, face: string) => {
    if (opponent !== 'robot') return;
    if (Math.random() < ROBOT_MEMORY) robotMemRef.current.set(idx, face);
  };

  // Resolve the two face-up cards for whoever flipped them.
  const resolvePair = (a: number, b: number, actor: Turn) => {
    lockRef.current = true;
    movesRef.current += 1;
    setMoves(movesRef.current);
    const isMatch = cards[a].face === cards[b].face;
    if (isMatch) {
      const t = window.setTimeout(() => {
        setCards((cs) => cs.map((c, idx) => (idx === a || idx === b ? { ...c, matched: true } : c)));
        setFlipped([]);
        robotMemRef.current.delete(a);
        robotMemRef.current.delete(b);
        matchedRef.current += 2;
        setMatched(matchedRef.current);
        if (actor === 'you') setYouPairs((p) => p + 1);
        else setRobotPairs((p) => p + 1);
        lockRef.current = false;
        if (matchedRef.current === cards.length) endGame();
        // A correct match means the same player goes again (turn unchanged).
      }, REVEAL_MATCH);
      timersRef.current.push(t);
    } else {
      const t = window.setTimeout(() => {
        setFlipped([]);
        lockRef.current = false;
        if (opponent === 'robot') {
          const nextTurn: Turn = actor === 'you' ? 'robot' : 'you';
          turnRef.current = nextTurn;
          setTurn(nextTurn);
        }
      }, REVEAL_MISS);
      timersRef.current.push(t);
    }
  };

  // ---- Your taps ----
  const flipCard = (i: number) => {
    if (status !== 'playing' || lockRef.current) return;
    if (opponent === 'robot' && turnRef.current !== 'you') return; // wait for the robot
    const card = cards[i];
    if (!card || card.matched || flipped.includes(i)) return;

    // Start the clock on the very first flip.
    if (startRef.current === 0) {
      startRef.current = Date.now();
      setStarted(true);
      setElapsed(0);
    }

    const next = [...flipped, i];
    setFlipped(next);
    remember(i, card.face);
    if (next.length < 2) return;
    resolvePair(next[0], next[1], 'you');
  };

  // ---- The robot's turn ----
  const robotMove = () => {
    if (lockRef.current) return;
    const unmatched = cards.map((c, i) => ({ c, i })).filter((x) => !x.c.matched);
    if (unmatched.length < 2) return;
    const mem = robotMemRef.current;

    let a = -1;
    let b = -1;

    // 1) Does the robot recall a full pair it can clear outright?
    const byFace = new Map<string, number[]>();
    for (const { i } of unmatched) {
      if (!mem.has(i)) continue;
      const f = mem.get(i)!;
      const arr = byFace.get(f) ?? [];
      arr.push(i);
      byFace.set(f, arr);
    }
    for (const idxs of byFace.values()) {
      if (idxs.length >= 2) {
        [a, b] = idxs;
        break;
      }
    }

    // 2) Otherwise flip an unknown card, then chase its match if recalled.
    if (a === -1) {
      const unknown = unmatched.filter((x) => !mem.has(x.i)).map((x) => x.i);
      const all = unmatched.map((x) => x.i);
      const pool = unknown.length ? unknown : all;
      a = pool[Math.floor(Math.random() * pool.length)];
      const faceA = cards[a].face;
      const known = unmatched.find((x) => x.i !== a && mem.get(x.i) === faceA)?.i;
      if (known !== undefined) {
        b = known;
      } else {
        const rest = (unknown.length ? unknown : all).filter((i) => i !== a);
        b = rest[Math.floor(Math.random() * rest.length)];
      }
    }

    // Flip the two cards with a beat between them so it reads as "thinking".
    lockRef.current = true;
    setFlipped([a]);
    remember(a, cards[a].face);
    const t = window.setTimeout(() => {
      setFlipped([a, b]);
      remember(b, cards[b].face);
      lockRef.current = false; // resolvePair takes the lock again
      resolvePair(a, b, 'robot');
    }, ROBOT_FLIP_GAP);
    timersRef.current.push(t);
  };

  // ===================== THE MENU =====================
  if (status === 'menu') {
    return (
      <div className="app-shell menu-shell">
        <div className="menu-panel">
          <p className="eyebrow">Premium Arcade</p>
          <h1>
            Memory <span className="accent">Match</span>
          </h1>
          <div className="menu-bird">🃏</div>

          <div className="mode-row" role="tablist" aria-label="Board size">
            {SIZES.map((s) => (
              <button
                key={s.key}
                type="button"
                role="tab"
                aria-selected={size.key === s.key}
                className={`mode-btn ${size.key === s.key ? 'active' : ''}`}
                onClick={() => setSize(s)}
              >
                <span className="mode-name">{s.label}</span>
                <span className="mode-desc">{s.desc}</span>
              </button>
            ))}
          </div>

          <div className="mode-row opp-row" role="tablist" aria-label="Opponent">
            <button
              type="button"
              role="tab"
              aria-selected={opponent === 'solo'}
              className={`mode-btn ${opponent === 'solo' ? 'active' : ''}`}
              onClick={() => setOpponent('solo')}
            >
              <span className="mode-emoji">🧍</span>
              <span className="mode-name">Solo</span>
              <span className="mode-desc">Beat your record</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={opponent === 'robot'}
              className={`mode-btn ${opponent === 'robot' ? 'active' : ''}`}
              onClick={() => setOpponent('robot')}
            >
              <span className="mode-emoji">🤖</span>
              <span className="mode-name">vs Robot</span>
              <span className="mode-desc">Most pairs wins</span>
            </button>
          </div>

          <p className="menu-copy">
            {opponent === 'robot'
              ? 'Take turns with the robot — match a pair to go again. Whoever has the most pairs when the board clears wins!'
              : 'Flip two cards at a time and find every matching pair in as few moves as you can.'}
          </p>

          <div className="players">
            {names.length > 0 ? (
              names.map((n) => {
                const rec = best[n]?.[size.key];
                return (
                  <div key={n} className={`player-chip ${selectedName === n ? 'selected' : ''}`}>
                    <button
                      type="button"
                      className="player-chip-main"
                      onClick={() => setSelectedName(n)}
                    >
                      <span className="avatar">{n.charAt(0).toUpperCase()}</span>
                      <span className="player-name">{n}</span>
                      <span className="chip-best">{rec ? `🏆 ${rec.moves}` : '—'}</span>
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
                );
              })
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
              Playing as <strong>{selectedName}</strong> ·{' '}
              {best[selectedName]?.[size.key]
                ? `🏆 Best ${best[selectedName]![size.key]!.moves} moves`
                : 'No record yet'}
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
        <span className="player-tag">🃏 {username}</span>
        <button className="stop-button" onClick={stopGame}>
          ■ Stop
        </button>
      </header>

      <div className="score-strip">
        {opponent === 'robot' ? (
          <>
            <div className={`score-chip you ${turn === 'you' ? 'active' : ''}`}>
              <span>You 🧍</span>
              <strong>{youPairs}</strong>
            </div>
            <div className={`score-chip cpu ${turn === 'robot' ? 'active' : ''}`}>
              <span>Robot 🤖</span>
              <strong>{robotPairs}</strong>
            </div>
            <div className="score-chip">
              <span>Turn</span>
              <strong className="turn">{turn === 'you' ? 'You' : 'Robot'}</strong>
            </div>
          </>
        ) : (
          <>
            <div className="score-chip you">
              <span>Moves</span>
              <strong>{moves}</strong>
            </div>
            <div className="score-chip cpu">
              <span>Pairs</span>
              <strong>
                {matched / 2}/{total / 2}
              </strong>
            </div>
            <div className="score-chip">
              <span>Time</span>
              <strong className="turn">{fmtTime(elapsed)}</strong>
            </div>
          </>
        )}
      </div>

      <div className="board-stage">
        <div className="board-frame">
          <div
            className={`card-grid ${opponent === 'robot' && turn === 'robot' ? 'locked' : ''}`}
            style={{ gridTemplateColumns: `repeat(${size.cols}, 1fr)` }}
          >
            {cards.map((card, i) => {
              const isUp = card.matched || flipped.includes(i);
              return (
                <button
                  key={card.id}
                  className={`card ${isUp ? 'flipped' : ''} ${card.matched ? 'matched' : ''}`}
                  aria-label={isUp ? card.face : 'Hidden card'}
                  onClick={() => flipCard(i)}
                >
                  <span className="card-inner">
                    <span className="card-face card-back">🃏</span>
                    <span className="card-face card-front">{card.face}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {status === 'won' && (
            <div className="overlay">
              <div className="overlay-card">
                {opponent === 'robot' ? (
                  <>
                    <p className="overlay-eyebrow">Board cleared</p>
                    <h2>
                      {youPairs > robotPairs
                        ? 'You win! 🎉'
                        : youPairs < robotPairs
                          ? 'Robot wins 🤖'
                          : "It's a tie 🤝"}
                    </h2>
                    <div className="overlay-score">
                      <div>
                        <span>You</span>
                        <strong>{youPairs}</strong>
                      </div>
                      <div>
                        <span>Robot</span>
                        <strong>{robotPairs}</strong>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="overlay-eyebrow">Cleared!</p>
                    <h2>{!myBest || moves <= myBest.moves ? 'New best! 🎉' : 'All matched 🃏'}</h2>
                    <div className="overlay-score">
                      <div>
                        <span>Moves</span>
                        <strong>{moves}</strong>
                      </div>
                      <div>
                        <span>Time</span>
                        <strong>{fmtTime(elapsed)}</strong>
                      </div>
                    </div>
                  </>
                )}
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

      <p className="hint">
        {opponent === 'robot'
          ? turn === 'you'
            ? 'Your turn — flip two cards'
            : 'Robot is thinking…'
          : `Flip two cards · match all ${total / 2} pairs · ${size.label} board`}
      </p>
    </div>
  );
}

export default App;
