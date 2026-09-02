import { useEffect, useRef, useState } from 'react';
import './App.css';
import { LANGS, RTL_LANGS, STR, initialLang, saveLang, type Lang } from './i18n';
import { startGamepad, bridgeGamepadToKeys } from './gamepad';

const SIZE = 4; // 4 × 4 board
const CELLS = SIZE * SIZE;
const WIN_TILE = 2048;

const NAMES_KEY = '2048-names';
const BEST_KEY = '2048-best-by-user';

type Status = 'menu' | 'playing' | 'won' | 'over';
type Dir = 'left' | 'right' | 'up' | 'down';
type Scores = Record<string, number>;

// Board is a flat array of 16 (index = row * 4 + col). 0 means empty.
const emptyBoard = (): number[] => Array(CELLS).fill(0);

// The four indices of "line i" listed in the order tiles travel for a move
// (front of the list is where they pile up).
const LINE_INDEX: Record<Dir, (i: number) => number[]> = {
  left: (i) => [0, 1, 2, 3].map((c) => i * SIZE + c),
  right: (i) => [3, 2, 1, 0].map((c) => i * SIZE + c),
  up: (i) => [0, 1, 2, 3].map((r) => r * SIZE + i),
  down: (i) => [3, 2, 1, 0].map((r) => r * SIZE + i)
};

// Slide & merge one line toward the front. Returns the new line + points gained.
function slideLine(line: number[]): { line: number[]; gained: number } {
  const nums = line.filter((v) => v !== 0);
  const out: number[] = [];
  let gained = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      const merged = nums[i] * 2;
      out.push(merged);
      gained += merged;
      i += 1; // consume the pair
    } else {
      out.push(nums[i]);
    }
  }
  while (out.length < SIZE) out.push(0);
  return { line: out, gained };
}

// Drop a 2 (90%) or 4 (10%) into a random empty cell. Returns false if full.
function addRandomTile(board: number[]): boolean {
  const empties = board.map((v, i) => (v === 0 ? i : -1)).filter((i) => i >= 0);
  if (empties.length === 0) return false;
  const at = empties[Math.floor(Math.random() * empties.length)];
  board[at] = Math.random() < 0.9 ? 2 : 4;
  return true;
}

// Any empty cell, or any equal neighbour, means a move is still possible.
function hasMoves(board: number[]): boolean {
  for (let i = 0; i < CELLS; i += 1) if (board[i] === 0) return true;
  for (let r = 0; r < SIZE; r += 1) {
    for (let c = 0; c < SIZE; c += 1) {
      const v = board[r * SIZE + c];
      if (c < SIZE - 1 && board[r * SIZE + c + 1] === v) return true;
      if (r < SIZE - 1 && board[(r + 1) * SIZE + c] === v) return true;
    }
  }
  return false;
}

function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const s = STR[lang];

  // ---- Player menu (shared arcade pattern) ----
  const [names, setNames] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState('');
  const [username, setUsername] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [scores, setScores] = useState<Scores>({});

  // ---- Game state ----
  const [board, setBoard] = useState<number[]>(emptyBoard());
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState<Status>('menu');

  const boardRef = useRef<number[]>(board);
  const scoreRef = useRef(0);
  const statusRef = useRef<Status>('menu');
  const wonRef = useRef(false); // already reached 2048 (so we don't nag again)
  const swipeRef = useRef<{ x: number; y: number } | null>(null);
  // Latest action closures, so the gamepad loop (set up once) always calls the
  // current handlers without capturing stale state.
  const actionsRef = useRef<{
    start: () => void;
    restart: () => void;
    keepGoing: () => void;
    exit: () => void;
  } | null>(null);

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  useEffect(() => {
    const savedScores: Scores = JSON.parse(localStorage.getItem(BEST_KEY) || '{}');
    const savedNames: string[] = JSON.parse(localStorage.getItem(NAMES_KEY) || '[]');
    const merged = Array.from(new Set([...savedNames, ...Object.keys(savedScores)]));
    setScores(savedScores);
    setNames(merged);
    if (merged.length > 0) setSelectedName(merged[0]);
  }, []);

  const best = username ? scores[username] || 0 : 0;
  const highest = board.reduce((m, v) => Math.max(m, v), 0);

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
    if (scores[n] !== undefined) {
      const next = { ...scores };
      delete next[n];
      setScores(next);
      localStorage.setItem(BEST_KEY, JSON.stringify(next));
    }
    if (selectedName === n) setSelectedName('');
  };

  const saveBest = () => {
    if (username && scoreRef.current > (scores[username] || 0)) {
      const next = { ...scores, [username]: scoreRef.current };
      setScores(next);
      localStorage.setItem(BEST_KEY, JSON.stringify(next));
    }
  };

  // ---- Game lifecycle ----
  const startGame = (forced?: string) => {
    const name = forced || selectedName || username;
    if (!name) return;
    setUsername(name);
    const fresh = emptyBoard();
    addRandomTile(fresh);
    addRandomTile(fresh);
    boardRef.current = fresh;
    scoreRef.current = 0;
    wonRef.current = false;
    setBoard(fresh);
    setScore(0);
    statusRef.current = 'playing';
    setStatus('playing');
  };

  // Start straight from a controller: if there's no player yet, spin up a guest
  // one so a pad user is never stuck at the mouse-only menu.
  const padStart = () => {
    let name = selectedName || username;
    if (!name) {
      name = names[0] ?? 'Player 1';
      if (!names.includes(name)) saveNames([name, ...names]);
      setSelectedName(name);
    }
    startGame(name);
  };

  const stopGame = () => {
    statusRef.current = 'menu';
    setStatus('menu');
  };

  const keepGoing = () => {
    statusRef.current = 'playing';
    setStatus('playing');
  };

  // ---- A move in one direction ----
  const move = (dir: Dir) => {
    if (statusRef.current !== 'playing') return;
    const prev = boardRef.current;
    const next = prev.slice();
    let gained = 0;
    for (let i = 0; i < SIZE; i += 1) {
      const idx = LINE_INDEX[dir](i);
      const line = idx.map((j) => next[j]);
      const { line: slid, gained: g } = slideLine(line);
      gained += g;
      idx.forEach((j, k) => {
        next[j] = slid[k];
      });
    }

    // Nothing shifted → not a legal move, ignore it.
    if (next.every((v, i) => v === prev[i])) return;

    addRandomTile(next);
    boardRef.current = next;
    setBoard(next);
    if (gained > 0) {
      scoreRef.current += gained;
      setScore(scoreRef.current);
    }

    if (!wonRef.current && next.includes(WIN_TILE)) {
      wonRef.current = true;
      saveBest();
      statusRef.current = 'won';
      setStatus('won');
      return;
    }

    if (!hasMoves(next)) {
      saveBest();
      statusRef.current = 'over';
      setStatus('over');
    }
  };

  // ---- Keyboard ----
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.tagName === 'INPUT') return;
      const map: Record<string, Dir> = {
        ArrowLeft: 'left',
        a: 'left',
        A: 'left',
        ArrowRight: 'right',
        d: 'right',
        D: 'right',
        ArrowUp: 'up',
        w: 'up',
        W: 'up',
        ArrowDown: 'down',
        s: 'down',
        S: 'down'
      };
      const dir = map[e.key];
      if (!dir) return;
      e.preventDefault();
      move(dir);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the document language + direction (RTL for Arabic) in sync.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';
  }, [lang]);

  // Console gamepad. D-pad/stick is bridged to the arrow keys the game already
  // listens for (one synthetic keydown per press → one board move). The face /
  // menu buttons drive the lifecycle: A/Start starts or restarts (and continues
  // past a win / dismisses game over), B/Back exits to the menu.
  useEffect(() => {
    const stopKeys = bridgeGamepadToKeys({
      up: 'ArrowUp',
      down: 'ArrowDown',
      left: 'ArrowLeft',
      right: 'ArrowRight'
    });
    const stopButtons = startGamepad({
      onButton: (b) => {
        const a = actionsRef.current;
        if (!a) return;
        const st = statusRef.current;
        if (b === 'A' || b === 'start') {
          if (st === 'won') a.keepGoing();
          else if (st === 'menu') a.start();
          else if (st === 'over') a.restart();
          // playing → ignore, so A never restarts a game in progress
        } else if (b === 'B' || b === 'back') {
          if (st !== 'menu') a.exit();
        }
      }
    });
    return () => {
      stopKeys();
      stopButtons();
    };
  }, []);

  // ---- Swipe (touch / pointer drag) ----
  const onPointerDown = (e: React.PointerEvent) => {
    swipeRef.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const start = swipeRef.current;
    swipeRef.current = null;
    if (!start) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    const ax = Math.abs(dx);
    const ay = Math.abs(dy);
    if (Math.max(ax, ay) < 24) return; // too small to be a swipe
    if (ax > ay) move(dx > 0 ? 'right' : 'left');
    else move(dy > 0 ? 'down' : 'up');
  };

  // Publish the freshest handlers for the gamepad loop each render.
  actionsRef.current = {
    start: padStart,
    restart: () => startGame(),
    keepGoing,
    exit: stopGame
  };

  // ===================== THE MENU =====================
  if (status === 'menu') {
    return (
      <div className="app-shell menu-shell">
        <div className="menu-panel">
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
          <p className="eyebrow">{s.eyebrow}</p>
          <h1>
            20<span className="accent">48</span>
          </h1>
          <div className="menu-bird">🔢</div>
          <p className="menu-copy">{s.menuCopy}</p>

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
                    <span className="chip-best">🏆 {scores[n] || 0}</span>
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
            {s.startGame}
          </button>

          {selectedName && (
            <p className="best-line">
              {s.playingAs} <strong>{selectedName}</strong> · 🏆 {s.best} {scores[selectedName] || 0}
            </p>
          )}
        </div>
      </div>
    );
  }

  // ===================== THE GAME =====================
  const dpad = (dir: Dir, glyph: string, label: string) => (
    <button className="ctrl-btn" aria-label={label} onClick={() => move(dir)}>
      {glyph}
    </button>
  );

  return (
    <div className="app-shell">
      <header className="game-bar">
        <span className="player-tag">🔢 {username}</span>
        <button className="stop-button" onClick={stopGame}>
          {s.stop}
        </button>
      </header>

      <div className="score-strip">
        <div className="score-chip you">
          <span>{s.score}</span>
          <strong>{score}</strong>
        </div>
        <div className="score-chip cpu">
          <span>{s.best}</span>
          <strong>{Math.max(best, score)}</strong>
        </div>
        <div className="score-chip">
          <span>{s.highest}</span>
          <strong className="turn">{highest}</strong>
        </div>
      </div>

      <div className="board-stage">
        <div
          className="board-frame"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          <div className="grid-2048">
            {board.map((v, i) => (
              <div className="cell" key={i}>
                {v > 0 && (
                  <div className={`tile tile-${v <= 2048 ? v : 'super'}`} key={v}>
                    {v}
                  </div>
                )}
              </div>
            ))}
          </div>

          {(status === 'won' || status === 'over') && (
            <div className="overlay">
              <div className="overlay-card">
                <p className="overlay-eyebrow">{status === 'won' ? s.wonEyebrow : s.overEyebrow}</p>
                <h2>{status === 'won' ? s.wonTitle : s.overTitle}</h2>
                <div className="overlay-score">
                  <div>
                    <span>{s.score}</span>
                    <strong>{score}</strong>
                  </div>
                  <div>
                    <span>{s.best}</span>
                    <strong>{Math.max(best, score)}</strong>
                  </div>
                </div>
                <div className="overlay-actions">
                  {status === 'won' && (
                    <button className="button-primary" onClick={keepGoing}>
                      {s.keepGoing}
                    </button>
                  )}
                  <button
                    className={status === 'won' ? 'button-secondary' : 'button-primary'}
                    onClick={() => startGame()}
                  >
                    {s.newGame}
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

      {/* On-screen arrows (handy on phones — swiping the board also works). */}
      <div className="dpad">
        <div className="dpad-row">{dpad('up', '▲', s.up)}</div>
        <div className="dpad-row">
          {dpad('left', '◀', s.left)}
          {dpad('down', '▼', s.down)}
          {dpad('right', '▶', s.right)}
        </div>
      </div>

      <p className="hint">{s.hint}</p>
    </div>
  );
}

export default App;
