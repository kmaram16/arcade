import { useEffect, useRef, useState } from 'react';
import './App.css';

// ===== The playing field =====
const COLS = 10; // how many columns wide
const ROWS = 20; // how many rows tall
const CELL = 30; // pixel size of one block (the canvas scales to fit any screen)

// The 7 classic Tetris pieces, drawn as little grids of 1s and 0s.
const SHAPES: Record<string, number[][]> = {
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  O: [
    [1, 1],
    [1, 1]
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0]
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0]
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
  ]
};

// Each piece has its own color.
const COLORS: Record<string, string> = {
  I: '#22d3ee',
  O: '#fbbf24',
  T: '#a855f7',
  S: '#22c55e',
  Z: '#ef4444',
  J: '#3b82f6',
  L: '#f97316'
};

const TYPES = Object.keys(SHAPES);
const LINE_POINTS = [0, 100, 300, 500, 800]; // points for clearing 0,1,2,3,4 lines

const NAMES_KEY = 'tetris-names';
const SCORES_KEY = 'tetris-best-by-user';

type Cell = string | null;
type Piece = { type: string; shape: number[][]; x: number; y: number };
type Status = 'menu' | 'playing' | 'over';
type Scores = Record<string, number>;

// Make an empty board (every cell starts empty / null).
function emptyBoard(): Cell[][] {
  return Array.from({ length: ROWS }, () => Array<Cell>(COLS).fill(null));
}

// Turn a piece's grid 90° clockwise.
function rotateCW(m: number[][]): number[][] {
  const rows = m.length;
  const cols = m[0].length;
  const out = Array.from({ length: cols }, () => Array(rows).fill(0));
  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      out[x][rows - 1 - y] = m[y][x];
    }
  }
  return out;
}

// Would this piece overlap a wall, the floor, or another block at (px, py)?
function collides(board: Cell[][], shape: number[][], px: number, py: number): boolean {
  for (let y = 0; y < shape.length; y += 1) {
    for (let x = 0; x < shape[y].length; x += 1) {
      if (!shape[y][x]) continue;
      const gx = px + x;
      const gy = py + y;
      if (gx < 0 || gx >= COLS || gy >= ROWS) return true; // off the sides or floor
      if (gy >= 0 && board[gy][gx]) return true; // hits a landed block
    }
  }
  return false;
}

function roundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // The whole game state lives in refs so the fast game loop always sees the latest.
  const boardRef = useRef<Cell[][]>(emptyBoard());
  const pieceRef = useRef<Piece | null>(null);
  const statusRef = useRef<Status>('menu');
  const scoreRef = useRef(0);
  const linesRef = useRef(0);
  const levelRef = useRef(1);
  const lastDropRef = useRef(0);

  const [status, setStatus] = useState<Status>('menu');
  const [score, setScore] = useState(0);
  const [lines, setLines] = useState(0);
  const [scores, setScores] = useState<Scores>({});

  // Player menu (same idea as the other arcade games).
  const [names, setNames] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState('');
  const [username, setUsername] = useState('');
  const [nameInput, setNameInput] = useState('');

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  // Load saved players + best scores.
  useEffect(() => {
    const savedScores: Scores = JSON.parse(localStorage.getItem(SCORES_KEY) || '{}');
    const savedNames: string[] = JSON.parse(localStorage.getItem(NAMES_KEY) || '[]');
    const merged = Array.from(new Set([...savedNames, ...Object.keys(savedScores)]));
    setScores(savedScores);
    setNames(merged);
    if (merged.length > 0) setSelectedName(merged[0]);
  }, []);

  const best = username ? scores[username] || 0 : 0;

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
      localStorage.setItem(SCORES_KEY, JSON.stringify(next));
    }
    if (selectedName === n) setSelectedName('');
  };

  // Drop a brand-new piece in at the top. Returns false if there's no room (game over).
  const spawn = (): boolean => {
    const type = TYPES[Math.floor(Math.random() * TYPES.length)];
    const shape = SHAPES[type].map((row) => [...row]);
    const x = Math.floor((COLS - shape[0].length) / 2);
    const piece: Piece = { type, shape, x, y: 0 };
    pieceRef.current = piece;
    return !collides(boardRef.current, shape, x, 0);
  };

  const gameOver = () => {
    statusRef.current = 'over';
    setStatus('over');
    if (username && scoreRef.current > (scores[username] || 0)) {
      const next = { ...scores, [username]: scoreRef.current };
      setScores(next);
      localStorage.setItem(SCORES_KEY, JSON.stringify(next));
    }
  };

  // Remove any full rows and award points.
  const clearLines = () => {
    let cleared = 0;
    const kept = boardRef.current.filter((row) => {
      const full = row.every((c) => c);
      if (full) cleared += 1;
      return !full;
    });
    while (kept.length < ROWS) kept.unshift(Array<Cell>(COLS).fill(null));
    boardRef.current = kept;
    if (cleared > 0) {
      scoreRef.current += LINE_POINTS[cleared] * levelRef.current;
      linesRef.current += cleared;
      levelRef.current = Math.floor(linesRef.current / 10) + 1;
      setScore(scoreRef.current);
      setLines(linesRef.current);
    }
  };

  // Stamp the current piece into the board, then bring in the next one.
  const lockPiece = () => {
    const p = pieceRef.current;
    if (!p) return;
    const color = COLORS[p.type];
    for (let y = 0; y < p.shape.length; y += 1) {
      for (let x = 0; x < p.shape[y].length; x += 1) {
        if (!p.shape[y][x]) continue;
        const gy = p.y + y;
        const gx = p.x + x;
        if (gy < 0) {
          gameOver(); // stacked above the top — game over
          return;
        }
        boardRef.current[gy][gx] = color;
      }
    }
    clearLines();
    if (!spawn()) gameOver();
  };

  // Move the piece down one row; if it can't, lock it in place.
  const moveDown = () => {
    const p = pieceRef.current;
    if (!p) return;
    if (!collides(boardRef.current, p.shape, p.x, p.y + 1)) {
      p.y += 1;
    } else {
      lockPiece();
    }
  };

  const move = (dir: number) => {
    const p = pieceRef.current;
    if (!p || statusRef.current !== 'playing') return;
    if (!collides(boardRef.current, p.shape, p.x + dir, p.y)) p.x += dir;
  };

  const rotate = () => {
    const p = pieceRef.current;
    if (!p || statusRef.current !== 'playing') return;
    const ns = rotateCW(p.shape);
    // "Wall kicks": if rotating bumps a wall, try nudging sideways.
    for (const dx of [0, -1, 1, -2, 2]) {
      if (!collides(boardRef.current, ns, p.x + dx, p.y)) {
        p.shape = ns;
        p.x += dx;
        return;
      }
    }
  };

  const softDrop = () => {
    if (statusRef.current !== 'playing') return;
    moveDown();
    scoreRef.current += 1;
    setScore(scoreRef.current);
    lastDropRef.current = 0; // reset the fall timer
  };

  const hardDrop = () => {
    const p = pieceRef.current;
    if (!p || statusRef.current !== 'playing') return;
    while (!collides(boardRef.current, p.shape, p.x, p.y + 1)) {
      p.y += 1;
      scoreRef.current += 2;
    }
    setScore(scoreRef.current);
    lockPiece();
  };

  const startGame = () => {
    const name = selectedName || username;
    if (!name) return;
    setUsername(name);
    boardRef.current = emptyBoard();
    scoreRef.current = 0;
    linesRef.current = 0;
    levelRef.current = 1;
    lastDropRef.current = 0;
    setScore(0);
    setLines(0);
    spawn();
    statusRef.current = 'playing';
    setStatus('playing');
  };

  const stopGame = () => {
    statusRef.current = 'menu';
    setStatus('menu');
  };

  // Keyboard controls.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.tagName === 'INPUT') return; // typing a name
      if (statusRef.current !== 'playing') return;
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          move(-1);
          break;
        case 'ArrowRight':
          e.preventDefault();
          move(1);
          break;
        case 'ArrowUp':
        case 'x':
        case 'X':
          e.preventDefault();
          rotate();
          break;
        case 'ArrowDown':
          e.preventDefault();
          softDrop();
          break;
        case ' ':
          e.preventDefault();
          hardDrop();
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // How fast pieces fall — faster as the level goes up.
  const dropMs = () => Math.max(110, 650 - (levelRef.current - 1) * 55);

  // ===== The game loop (draws every frame, drops on a timer) =====
  useEffect(() => {
    if (status === 'menu') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = COLS * CELL;
    const H = ROWS * CELL;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    let raf = 0;

    const drawCell = (gx: number, gy: number, color: string, alpha = 1) => {
      const x = gx * CELL;
      const y = gy * CELL;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      roundedRect(ctx, x + 1.5, y + 1.5, CELL - 3, CELL - 3, 6);
      ctx.fill();
      // glossy highlight on top
      ctx.globalAlpha = alpha * 0.35;
      ctx.fillStyle = '#ffffff';
      roundedRect(ctx, x + 3.5, y + 3.5, CELL - 7, (CELL - 7) * 0.4, 4);
      ctx.fill();
      ctx.globalAlpha = 1;
    };

    const draw = () => {
      // Board background
      const bg = ctx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, '#ffffff');
      bg.addColorStop(1, '#eef2f9');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Faint grid
      ctx.strokeStyle = 'rgba(15, 23, 42, 0.06)';
      ctx.lineWidth = 1;
      for (let i = 1; i < COLS; i += 1) {
        ctx.beginPath();
        ctx.moveTo(i * CELL + 0.5, 0);
        ctx.lineTo(i * CELL + 0.5, H);
        ctx.stroke();
      }
      for (let i = 1; i < ROWS; i += 1) {
        ctx.beginPath();
        ctx.moveTo(0, i * CELL + 0.5);
        ctx.lineTo(W, i * CELL + 0.5);
        ctx.stroke();
      }

      // Landed blocks
      const board = boardRef.current;
      for (let y = 0; y < ROWS; y += 1) {
        for (let x = 0; x < COLS; x += 1) {
          const c = board[y][x];
          if (c) drawCell(x, y, c);
        }
      }

      const p = pieceRef.current;
      if (p) {
        // Ghost: a faint preview of where the piece will land.
        let gy = p.y;
        while (!collides(board, p.shape, p.x, gy + 1)) gy += 1;
        const color = COLORS[p.type];
        for (let y = 0; y < p.shape.length; y += 1) {
          for (let x = 0; x < p.shape[y].length; x += 1) {
            if (p.shape[y][x]) drawCell(p.x + x, gy + y, color, 0.22);
          }
        }
        // The real falling piece.
        for (let y = 0; y < p.shape.length; y += 1) {
          for (let x = 0; x < p.shape[y].length; x += 1) {
            if (p.shape[y][x] && p.y + y >= 0) drawCell(p.x + x, p.y + y, color);
          }
        }
      }
    };

    const loop = (time: number) => {
      if (statusRef.current === 'playing') {
        if (lastDropRef.current === 0) lastDropRef.current = time;
        if (time - lastDropRef.current > dropMs()) {
          moveDown();
          lastDropRef.current = time;
        }
      }
      draw();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  // ===================== THE MENU =====================
  if (status === 'menu') {
    return (
      <div className="app-shell menu-shell">
        <div className="menu-panel">
          <p className="eyebrow">Premium Arcade</p>
          <h1>
            Tet<span className="accent">ris</span>
          </h1>
          <div className="menu-bird">🧱</div>
          <p className="menu-copy">Pick a player or add a new one, then press Start!</p>

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
              Playing as <strong>{selectedName}</strong> · 🏆 Best {scores[selectedName] || 0}
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
        <span className="player-tag">🧱 {username}</span>
        <button className="stop-button" onClick={stopGame}>
          ■ Stop
        </button>
      </header>

      <div className="score-strip">
        <div className="score-chip">
          <span>Score</span>
          <strong>{score}</strong>
        </div>
        <div className="score-chip">
          <span>Lines</span>
          <strong>{lines}</strong>
        </div>
        <div className="score-chip">
          <span>Best</span>
          <strong>{Math.max(best, score)}</strong>
        </div>
      </div>

      <div className="board-stage">
        <div className="board-frame">
          <canvas
            ref={canvasRef}
            className="game-canvas"
            style={{ aspectRatio: `${COLS} / ${ROWS}` }}
          />

          {status === 'over' && (
            <div className="overlay">
              <div className="overlay-card">
                <p className="overlay-eyebrow">Game over</p>
                <h2>{score >= best && score > 0 ? 'New best! 🎉' : 'Nice run!'}</h2>
                <div className="overlay-score">
                  <div>
                    <span>Score</span>
                    <strong>{score}</strong>
                  </div>
                  <div>
                    <span>Lines</span>
                    <strong>{lines}</strong>
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

      {/* On-screen controls so it works on phones and tablets too. */}
      <div className="controls">
        <button className="ctrl-btn" onClick={() => move(-1)} aria-label="Left">
          ◀
        </button>
        <button className="ctrl-btn" onClick={rotate} aria-label="Rotate">
          ⟳
        </button>
        <button className="ctrl-btn" onClick={() => move(1)} aria-label="Right">
          ▶
        </button>
        <button className="ctrl-btn" onClick={softDrop} aria-label="Down">
          ▼
        </button>
        <button className="ctrl-btn drop" onClick={hardDrop} aria-label="Drop">
          ⤓
        </button>
      </div>

      <p className="hint">← → move · ↑ rotate · ↓ soft drop · Space hard drop</p>
    </div>
  );
}

export default App;
