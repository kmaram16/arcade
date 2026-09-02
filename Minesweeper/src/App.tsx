import { useEffect, useRef, useState } from 'react';
import './App.css';

// ===== Difficulty =====
type DiffKey = 'easy' | 'medium' | 'hard';
type Diff = { key: DiffKey; label: string; desc: string; cols: number; rows: number; mines: number };

const DIFFS: Diff[] = [
  { key: 'easy', label: 'Easy', desc: '9×9 · 10', cols: 9, rows: 9, mines: 10 },
  { key: 'medium', label: 'Medium', desc: '12×12 · 24', cols: 12, rows: 12, mines: 24 },
  { key: 'hard', label: 'Hard', desc: '14×14 · 40', cols: 14, rows: 14, mines: 40 }
];

const NAMES_KEY = 'minesweeper-names';
const BEST_KEY = 'minesweeper-best-by-user'; // fastest clear time (seconds), lower is better

type Status = 'menu' | 'playing' | 'won' | 'lost';
type Cell = { mine: boolean; revealed: boolean; flag: boolean; count: number; boom: boolean };
type Best = Record<string, Partial<Record<DiffKey, number>>>;

const NUM_COLORS = ['', 'n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8'];

const blankBoard = (n: number): Cell[] =>
  Array.from({ length: n }, () => ({ mine: false, revealed: false, flag: false, count: 0, boom: false }));

// Neighbour indices (up to 8) for a cell on a cols × rows board.
function neighbours(i: number, cols: number, rows: number): number[] {
  const r = Math.floor(i / cols);
  const c = i % cols;
  const out: number[] = [];
  for (let dr = -1; dr <= 1; dr += 1) {
    for (let dc = -1; dc <= 1; dc += 1) {
      if (dr === 0 && dc === 0) continue;
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) out.push(nr * cols + nc);
    }
  }
  return out;
}

// Lay mines after the first click, keeping the clicked cell + its neighbours clear,
// then fill in every cell's adjacent-mine count.
function layMines(board: Cell[], diff: Diff, safe: number) {
  const safeSet = new Set([safe, ...neighbours(safe, diff.cols, diff.rows)]);
  const candidates = board.map((_, i) => i).filter((i) => !safeSet.has(i));
  for (let i = candidates.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }
  const mineCount = Math.min(diff.mines, candidates.length);
  for (let k = 0; k < mineCount; k += 1) board[candidates[k]].mine = true;
  for (let i = 0; i < board.length; i += 1) {
    if (board[i].mine) continue;
    board[i].count = neighbours(i, diff.cols, diff.rows).filter((n) => board[n].mine).length;
  }
}

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
  const [board, setBoard] = useState<Cell[]>([]);
  const [flags, setFlags] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [started, setStarted] = useState(false);
  const [flagMode, setFlagMode] = useState(false);

  const statusRef = useRef<Status>('menu');
  const boardRef = useRef<Cell[]>([]);
  const diffRef = useRef<Diff>(DIFFS[0]);
  const minedRef = useRef(false);
  const startRef = useRef(0);

  useEffect(() => {
    statusRef.current = status;
  }, [status]);
  useEffect(() => {
    diffRef.current = diff;
  }, [diff]);

  // Load saved players + best times.
  useEffect(() => {
    const savedBest: Best = JSON.parse(localStorage.getItem(BEST_KEY) || '{}');
    const savedNames: string[] = JSON.parse(localStorage.getItem(NAMES_KEY) || '[]');
    const merged = Array.from(new Set([...savedNames, ...Object.keys(savedBest)]));
    setBest(savedBest);
    setNames(merged);
    if (merged.length > 0) setSelectedName(merged[0]);
  }, []);

  // Clock — counts up from the first reveal.
  useEffect(() => {
    if (status !== 'playing' || !started) return;
    const id = window.setInterval(() => {
      setElapsed(Math.min(999, Math.floor((Date.now() - startRef.current) / 1000)));
    }, 250);
    return () => clearInterval(id);
  }, [status, started]);

  const myBest = username ? best[username]?.[diff.key] : undefined;

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

  const commit = (next: Cell[]) => {
    boardRef.current = next;
    setBoard(next);
    setFlags(next.filter((c) => c.flag && !c.revealed).length);
  };

  // ---- Lifecycle ----
  const startGame = () => {
    const name = selectedName || username;
    if (!name) return;
    setUsername(name);
    minedRef.current = false;
    startRef.current = 0;
    const fresh = blankBoard(diff.cols * diff.rows);
    boardRef.current = fresh;
    setBoard(fresh);
    setFlags(0);
    setElapsed(0);
    setStarted(false);
    setFlagMode(false);
    statusRef.current = 'playing';
    setStatus('playing');
  };

  const stopGame = () => {
    statusRef.current = 'menu';
    setStatus('menu');
  };

  const win = (final: Cell[]) => {
    final.forEach((c) => {
      if (c.mine) c.flag = true; // flag the mines for a tidy finish
    });
    commit(final);
    const time = Math.min(999, Math.floor((Date.now() - startRef.current) / 1000));
    setElapsed(time);
    statusRef.current = 'won';
    setStatus('won');
    if (username) {
      const prev = best[username]?.[diffRef.current.key];
      if (prev === undefined || time < prev) {
        const next: Best = {
          ...best,
          [username]: { ...best[username], [diffRef.current.key]: time }
        };
        setBest(next);
        localStorage.setItem(BEST_KEY, JSON.stringify(next));
      }
    }
  };

  const lose = (final: Cell[]) => {
    final.forEach((c) => {
      if (c.mine) c.revealed = true;
    });
    commit(final);
    statusRef.current = 'lost';
    setStatus('lost');
  };

  // Flood-reveal from a zero-count cell.
  const floodReveal = (b: Cell[], start: number, d: Diff) => {
    const stack = [start];
    while (stack.length) {
      const i = stack.pop()!;
      const cell = b[i];
      if (cell.revealed || cell.flag || cell.mine) continue;
      cell.revealed = true;
      if (cell.count === 0) {
        for (const n of neighbours(i, d.cols, d.rows)) {
          if (!b[n].revealed && !b[n].flag) stack.push(n);
        }
      }
    }
  };

  const isWon = (b: Cell[]) => b.every((c) => c.mine || c.revealed);

  // ---- Reveal / flag a cell ----
  const reveal = (i: number) => {
    if (statusRef.current !== 'playing') return;
    const cur = boardRef.current[i];
    if (cur.revealed || cur.flag) return;

    const d = diffRef.current;
    const next = boardRef.current.map((c) => ({ ...c }));

    // First reveal seeds the mines (and starts the clock).
    if (!minedRef.current) {
      layMines(next, d, i);
      minedRef.current = true;
      startRef.current = Date.now();
      setStarted(true);
    }

    const target = next[i];
    if (target.mine) {
      target.boom = true;
      lose(next);
      return;
    }

    floodReveal(next, i, d);
    if (isWon(next)) {
      win(next);
      return;
    }
    commit(next);
  };

  const toggleFlag = (i: number) => {
    if (statusRef.current !== 'playing') return;
    const cur = boardRef.current[i];
    if (cur.revealed) return;
    const next = boardRef.current.map((c) => ({ ...c }));
    next[i].flag = !next[i].flag;
    commit(next);
  };

  const onCellClick = (i: number) => {
    if (flagMode) toggleFlag(i);
    else reveal(i);
  };

  const onCellContext = (e: React.MouseEvent, i: number) => {
    e.preventDefault();
    toggleFlag(i);
  };

  const minesLeft = diff.mines - flags;
  const over = status === 'won' || status === 'lost';

  // ===================== THE MENU =====================
  if (status === 'menu') {
    return (
      <div className="app-shell menu-shell">
        <div className="menu-panel">
          <p className="eyebrow">Premium Arcade</p>
          <h1>
            Mine<span className="accent">sweeper</span>
          </h1>
          <div className="menu-bird">💣</div>

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
            Clear every safe square without hitting a 💣. Numbers tell you how many mines touch that
            square — flag the ones you're sure about!
          </p>

          <div className="players">
            {names.length > 0 ? (
              names.map((n) => {
                const t = best[n]?.[diff.key];
                return (
                  <div key={n} className={`player-chip ${selectedName === n ? 'selected' : ''}`}>
                    <button
                      type="button"
                      className="player-chip-main"
                      onClick={() => setSelectedName(n)}
                    >
                      <span className="avatar">{n.charAt(0).toUpperCase()}</span>
                      <span className="player-name">{n}</span>
                      <span className="chip-best">{t !== undefined ? `⏱ ${t}s` : '—'}</span>
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
              {best[selectedName]?.[diff.key] !== undefined
                ? `⏱ Best ${best[selectedName]![diff.key]}s`
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
        <span className="player-tag">💣 {username}</span>
        <button className="stop-button" onClick={stopGame}>
          ■ Stop
        </button>
      </header>

      <div className="score-strip">
        <div className="score-chip you">
          <span>Mines</span>
          <strong>{minesLeft}</strong>
        </div>
        <div className="score-chip cpu">
          <span>Time</span>
          <strong className="turn">{elapsed}s</strong>
        </div>
        <div className="score-chip">
          <span>Best</span>
          <strong>{myBest !== undefined ? `${myBest}s` : '—'}</strong>
        </div>
      </div>

      <div className="board-stage">
        <div className="board-frame">
          <div
            className={`mine-grid ${over ? 'done' : ''}`}
            style={{ gridTemplateColumns: `repeat(${diff.cols}, 1fr)` }}
          >
            {board.map((c, i) => {
              const cls = c.revealed
                ? `cell open ${c.boom ? 'boom' : ''} ${c.mine ? 'is-mine' : NUM_COLORS[c.count]}`
                : `cell ${c.flag ? 'flagged' : ''}`;
              return (
                <button
                  key={i}
                  className={cls}
                  onClick={() => onCellClick(i)}
                  onContextMenu={(e) => onCellContext(e, i)}
                  aria-label={c.revealed ? (c.mine ? 'Mine' : `${c.count}`) : c.flag ? 'Flag' : 'Hidden'}
                >
                  {c.revealed
                    ? c.mine
                      ? '💣'
                      : c.count > 0
                        ? c.count
                        : ''
                    : c.flag
                      ? '🚩'
                      : ''}
                </button>
              );
            })}
          </div>

          {over && (
            <div className="overlay">
              <div className="overlay-card">
                <p className="overlay-eyebrow">{status === 'won' ? 'Field cleared' : 'Boom!'}</p>
                <h2>
                  {status === 'won'
                    ? myBest === undefined || elapsed <= myBest
                      ? 'New best! 🎉'
                      : 'Swept clean! 🚩'
                    : 'You hit a mine 💥'}
                </h2>
                <div className="overlay-score">
                  <div>
                    <span>Time</span>
                    <strong>{elapsed}s</strong>
                  </div>
                  <div>
                    <span>Best</span>
                    <strong>{myBest !== undefined ? `${Math.min(myBest, elapsed)}s` : `${elapsed}s`}</strong>
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

      <div className="controls">
        <button
          className={`mode-toggle ${flagMode ? 'on' : ''}`}
          onClick={() => setFlagMode((f) => !f)}
        >
          {flagMode ? '🚩 Flagging — tap to dig' : '⛏️ Digging — tap to flag'}
        </button>
      </div>

      <p className="hint">Tap to dig · long-press / right-click or flag mode to 🚩 · {diff.label} board</p>
    </div>
  );
}

export default App;
