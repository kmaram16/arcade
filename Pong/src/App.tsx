import { useEffect, useRef, useState } from 'react';
import './App.css';

// ===== The playing field =====
const W = 600; // board width
const H = 380; // board height
const PADDLE_W = 12;
const PADDLE_H = 74;
const PADDLE_SPEED = 6.5; // how fast your paddle moves with keys/buttons
const BALL_R = 8;
const START_SPEED = 5; // how fast the ball starts
const MAX_SPEED = 13; // ball never goes faster than this
const CPU_SPEED = 4.6; // the computer's paddle speed (lower = easier to beat)
const WIN_SCORE = 7; // first to this many points wins

const NAMES_KEY = 'pong-names';
const WINS_KEY = 'pong-wins-by-user';

type Status = 'menu' | 'playing' | 'over';
type Wins = Record<string, number>;

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

  // Game state in refs so the fast loop always sees the latest values.
  const playerYRef = useRef(H / 2 - PADDLE_H / 2); // your paddle (left)
  const cpuYRef = useRef(H / 2 - PADDLE_H / 2); // computer paddle (right)
  const ballRef = useRef({ x: W / 2, y: H / 2, vx: START_SPEED, vy: 2 });
  const playerScoreRef = useRef(0);
  const cpuScoreRef = useRef(0);
  const statusRef = useRef<Status>('menu');
  // Which way your paddle is moving from keys/buttons: -1 up, +1 down, 0 still.
  const dirRef = useRef(0);
  const keysRef = useRef({ up: false, down: false });
  const btnRef = useRef({ up: false, down: false });

  const [status, setStatus] = useState<Status>('menu');
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [result, setResult] = useState<'win' | 'lose'>('win');
  const [wins, setWins] = useState<Wins>({});

  // Player menu (same as the other arcade games).
  const [names, setNames] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState('');
  const [username, setUsername] = useState('');
  const [nameInput, setNameInput] = useState('');

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  useEffect(() => {
    const savedWins: Wins = JSON.parse(localStorage.getItem(WINS_KEY) || '{}');
    const savedNames: string[] = JSON.parse(localStorage.getItem(NAMES_KEY) || '[]');
    const merged = Array.from(new Set([...savedNames, ...Object.keys(savedWins)]));
    setWins(savedWins);
    setNames(merged);
    if (merged.length > 0) setSelectedName(merged[0]);
  }, []);

  const myWins = username ? wins[username] || 0 : 0;

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
    if (wins[n] !== undefined) {
      const next = { ...wins };
      delete next[n];
      setWins(next);
      localStorage.setItem(WINS_KEY, JSON.stringify(next));
    }
    if (selectedName === n) setSelectedName('');
  };

  // Put the ball back in the middle and send it toward whoever was just scored on.
  const serve = (toward: number) => {
    const angle = (Math.random() * 0.6 - 0.3) * Math.PI; // a small random up/down angle
    ballRef.current = {
      x: W / 2,
      y: H / 2,
      vx: toward * START_SPEED,
      vy: Math.sin(angle) * START_SPEED
    };
  };

  const endGame = (won: boolean) => {
    statusRef.current = 'over';
    setResult(won ? 'win' : 'lose');
    setStatus('over');
    if (won && username) {
      const next = { ...wins, [username]: (wins[username] || 0) + 1 };
      setWins(next);
      localStorage.setItem(WINS_KEY, JSON.stringify(next));
    }
  };

  const startGame = () => {
    const name = selectedName || username;
    if (!name) return;
    setUsername(name);
    playerYRef.current = H / 2 - PADDLE_H / 2;
    cpuYRef.current = H / 2 - PADDLE_H / 2;
    playerScoreRef.current = 0;
    cpuScoreRef.current = 0;
    setPlayerScore(0);
    setCpuScore(0);
    serve(Math.random() < 0.5 ? -1 : 1);
    statusRef.current = 'playing';
    setStatus('playing');
  };

  const stopGame = () => {
    statusRef.current = 'menu';
    setStatus('menu');
  };

  // Keyboard controls (Up/Down or W/S).
  useEffect(() => {
    const setKey = (e: KeyboardEvent, down: boolean) => {
      const target = e.target as HTMLElement | null;
      if (target && target.tagName === 'INPUT') return;
      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        keysRef.current.up = down;
        e.preventDefault();
      } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        keysRef.current.down = down;
        e.preventDefault();
      }
    };
    const onDown = (e: KeyboardEvent) => setKey(e, true);
    const onUp = (e: KeyboardEvent) => setKey(e, false);
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    return () => {
      window.removeEventListener('keydown', onDown);
      window.removeEventListener('keyup', onUp);
    };
  }, []);

  // Drag your paddle by moving the mouse or finger over the board.
  const onPointerMove = (e: React.PointerEvent) => {
    if (statusRef.current !== 'playing') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scale = H / rect.height; // canvas is drawn bigger than it's shown
    const y = (e.clientY - rect.top) * scale - PADDLE_H / 2;
    playerYRef.current = Math.max(0, Math.min(H - PADDLE_H, y));
  };

  // ===== The game loop =====
  useEffect(() => {
    if (status === 'menu') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    let raf = 0;

    const update = () => {
      // Move your paddle from keys / on-screen buttons.
      dirRef.current =
        (keysRef.current.down || btnRef.current.down ? 1 : 0) -
        (keysRef.current.up || btnRef.current.up ? 1 : 0);
      playerYRef.current = Math.max(
        0,
        Math.min(H - PADDLE_H, playerYRef.current + dirRef.current * PADDLE_SPEED)
      );

      // The computer paddle drifts toward the ball (but not too fast — so you can win!).
      const cpuCenter = cpuYRef.current + PADDLE_H / 2;
      const diff = ballRef.current.y - cpuCenter;
      cpuYRef.current += Math.max(-CPU_SPEED, Math.min(CPU_SPEED, diff));
      cpuYRef.current = Math.max(0, Math.min(H - PADDLE_H, cpuYRef.current));

      // Move the ball.
      const ball = ballRef.current;
      ball.x += ball.vx;
      ball.y += ball.vy;

      // Bounce off the top and bottom walls.
      if (ball.y - BALL_R < 0) {
        ball.y = BALL_R;
        ball.vy = Math.abs(ball.vy);
      } else if (ball.y + BALL_R > H) {
        ball.y = H - BALL_R;
        ball.vy = -Math.abs(ball.vy);
      }

      // Bounce off your paddle (left).
      const py = playerYRef.current;
      if (
        ball.vx < 0 &&
        ball.x - BALL_R < 24 + PADDLE_W &&
        ball.x - BALL_R > 24 &&
        ball.y > py &&
        ball.y < py + PADDLE_H
      ) {
        ball.vx = Math.abs(ball.vx);
        const hit = (ball.y - (py + PADDLE_H / 2)) / (PADDLE_H / 2); // -1 top .. +1 bottom
        ball.vy = hit * 5;
        const speed = Math.min(MAX_SPEED, Math.hypot(ball.vx, ball.vy) * 1.05);
        const ang = Math.atan2(ball.vy, ball.vx);
        ball.vx = Math.cos(ang) * speed;
        ball.vy = Math.sin(ang) * speed;
      }

      // Bounce off the computer paddle (right).
      const cy = cpuYRef.current;
      const cpuX = W - 24 - PADDLE_W;
      if (
        ball.vx > 0 &&
        ball.x + BALL_R > cpuX &&
        ball.x + BALL_R < cpuX + PADDLE_W &&
        ball.y > cy &&
        ball.y < cy + PADDLE_H
      ) {
        ball.vx = -Math.abs(ball.vx);
        const hit = (ball.y - (cy + PADDLE_H / 2)) / (PADDLE_H / 2);
        ball.vy = hit * 5;
        const speed = Math.min(MAX_SPEED, Math.hypot(ball.vx, ball.vy) * 1.05);
        const ang = Math.atan2(ball.vy, ball.vx);
        ball.vx = Math.cos(ang) * speed;
        ball.vy = Math.sin(ang) * speed;
      }

      // Point scored!
      if (ball.x < -BALL_R) {
        // ball went past you → computer scores
        cpuScoreRef.current += 1;
        setCpuScore(cpuScoreRef.current);
        if (cpuScoreRef.current >= WIN_SCORE) return endGame(false);
        serve(-1);
      } else if (ball.x > W + BALL_R) {
        // ball went past the computer → you score
        playerScoreRef.current += 1;
        setPlayerScore(playerScoreRef.current);
        if (playerScoreRef.current >= WIN_SCORE) return endGame(true);
        serve(1);
      }
    };

    const draw = () => {
      // Court
      const bg = ctx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, '#0f172a');
      bg.addColorStop(1, '#1e293b');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Dashed center line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 4;
      ctx.setLineDash([12, 14]);
      ctx.beginPath();
      ctx.moveTo(W / 2, 0);
      ctx.lineTo(W / 2, H);
      ctx.stroke();
      ctx.setLineDash([]);

      // Your paddle (green)
      ctx.fillStyle = '#10b981';
      roundedRect(ctx, 24, playerYRef.current, PADDLE_W, PADDLE_H, 6);
      ctx.fill();

      // Computer paddle (sky blue)
      ctx.fillStyle = '#0ea5e9';
      roundedRect(ctx, W - 24 - PADDLE_W, cpuYRef.current, PADDLE_W, PADDLE_H, 6);
      ctx.fill();

      // Ball
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = 'rgba(255, 255, 255, 0.7)';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(ballRef.current.x, ballRef.current.y, BALL_R, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const loop = () => {
      if (statusRef.current === 'playing') update();
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
            Po<span className="accent">ng</span>
          </h1>
          <div className="menu-bird">🏓</div>
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
                    <span className="chip-best">🏆 {wins[n] || 0}</span>
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
              Playing as <strong>{selectedName}</strong> · 🏆 Wins {wins[selectedName] || 0}
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
        <span className="player-tag">🏓 {username}</span>
        <button className="stop-button" onClick={stopGame}>
          ■ Stop
        </button>
      </header>

      <div className="score-strip">
        <div className="score-chip you">
          <span>You</span>
          <strong>{playerScore}</strong>
        </div>
        <div className="score-chip cpu">
          <span>Computer</span>
          <strong>{cpuScore}</strong>
        </div>
        <div className="score-chip">
          <span>Wins</span>
          <strong>{myWins}</strong>
        </div>
      </div>

      <div className="board-stage">
        <div className="board-frame">
          <canvas
            ref={canvasRef}
            className="game-canvas"
            style={{ aspectRatio: `${W} / ${H}` }}
            onPointerMove={onPointerMove}
            onPointerDown={onPointerMove}
          />

          {status === 'over' && (
            <div className="overlay">
              <div className="overlay-card">
                <p className="overlay-eyebrow">Game over</p>
                <h2>{result === 'win' ? 'You win! 🎉' : 'Computer wins'}</h2>
                <div className="overlay-score">
                  <div>
                    <span>You</span>
                    <strong>{playerScore}</strong>
                  </div>
                  <div>
                    <span>CPU</span>
                    <strong>{cpuScore}</strong>
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

      {/* On-screen controls — hold to move your paddle (great on phones). */}
      <div className="controls">
        <button
          className="ctrl-btn"
          aria-label="Move up"
          onPointerDown={() => (btnRef.current.up = true)}
          onPointerUp={() => (btnRef.current.up = false)}
          onPointerLeave={() => (btnRef.current.up = false)}
          onPointerCancel={() => (btnRef.current.up = false)}
        >
          ▲ Up
        </button>
        <button
          className="ctrl-btn"
          aria-label="Move down"
          onPointerDown={() => (btnRef.current.down = true)}
          onPointerUp={() => (btnRef.current.down = false)}
          onPointerLeave={() => (btnRef.current.down = false)}
          onPointerCancel={() => (btnRef.current.down = false)}
        >
          ▼ Down
        </button>
      </div>

      <p className="hint">↑ ↓ or W / S to move · or drag on the board · first to {WIN_SCORE} wins</p>
    </div>
  );
}

export default App;
