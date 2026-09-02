import { useEffect, useRef, useState } from 'react';
import './App.css';
import { LANGS, RTL_LANGS, STR, initialLang, saveLang, type Lang } from './i18n';
import { startGamepad, bridgeGamepadToKeys } from './gamepad';

// ===== Playing field =====
const W = 480;
const H = 600;

// ===== Paddle =====
const PADDLE_W = 92;
const PADDLE_H = 14;
const PADDLE_Y = H - 42; // top edge of the paddle
const PADDLE_SPEED = 8; // keyboard glide speed

// ===== Ball =====
const BALL_R = 7;
const BASE_SPEED = 4.6;
const SPEED_PER_LEVEL = 0.6;
const MAX_SPEED = 9.5;

// ===== Bricks =====
const COLS = 8;
const ROWS = 5;
const BRICK_GAP = 6;
const BRICK_TOP = 72;
const SIDE_PAD = 18;
const BRICK_H = 22;

const START_LIVES = 3;

const NAMES_KEY = 'breakout-names';
const SCORES_KEY = 'breakout-best-by-user';

// Top rows are worth more; colors run pink → indigo down the stack.
const ROW_COLORS = ['#ec4899', '#f472b6', '#c084fc', '#a855f7', '#8b5cf6'];
const ROW_POINTS = [50, 40, 30, 20, 10];

type Status = 'menu' | 'playing' | 'over';
type Scores = Record<string, number>;
type Ball = { x: number; y: number; vx: number; vy: number; stuck: boolean };
type Brick = { x: number; y: number; w: number; h: number; alive: boolean; color: string; points: number };

// A fresh, full wall of bricks.
function buildBricks(): Brick[] {
  const brickW = (W - SIDE_PAD * 2 - BRICK_GAP * (COLS - 1)) / COLS;
  const bricks: Brick[] = [];
  for (let r = 0; r < ROWS; r += 1) {
    for (let c = 0; c < COLS; c += 1) {
      bricks.push({
        x: SIDE_PAD + c * (brickW + BRICK_GAP),
        y: BRICK_TOP + r * (BRICK_H + BRICK_GAP),
        w: brickW,
        h: BRICK_H,
        alive: true,
        color: ROW_COLORS[r],
        points: ROW_POINTS[r]
      });
    }
  }
  return bricks;
}

// A rounded rectangle path (used for bricks and the paddle).
function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const s = STR[lang];

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // Latest action closures, so the gamepad loop (set up once) always calls the
  // current handlers without capturing stale state.
  const actionsRef = useRef<{ start: () => void; exit: () => void } | null>(null);

  const paddleRef = useRef(W / 2);
  const ballRef = useRef<Ball>({ x: W / 2, y: PADDLE_Y - BALL_R, vx: 0, vy: 0, stuck: true });
  const bricksRef = useRef<Brick[]>([]);
  const statusRef = useRef<Status>('menu');
  const scoreRef = useRef(0);
  const livesRef = useRef(START_LIVES);
  const levelRef = useRef(1);
  const speedRef = useRef(BASE_SPEED);
  const ctrlRef = useRef({ left: false, right: false });

  const [status, setStatus] = useState<Status>('menu');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(START_LIVES);
  const [level, setLevel] = useState(1);
  const [scores, setScores] = useState<Scores>({});

  // Player menu (shared across the arcade games).
  const [names, setNames] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState('');
  const [username, setUsername] = useState('');
  const [nameInput, setNameInput] = useState('');

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

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

  const speedFor = (lvl: number) => Math.min(MAX_SPEED, BASE_SPEED + (lvl - 1) * SPEED_PER_LEVEL);

  // Park the ball on the paddle, waiting for a launch.
  const parkBall = () => {
    ballRef.current = { x: paddleRef.current, y: PADDLE_Y - BALL_R, vx: 0, vy: 0, stuck: true };
  };

  const launchBall = () => {
    const b = ballRef.current;
    if (!b.stuck || statusRef.current !== 'playing') return;
    const speed = speedRef.current;
    const angle = (Math.random() * 0.5 - 0.25) * Math.PI; // small upward spread
    b.vx = speed * Math.sin(angle);
    b.vy = -speed * Math.cos(angle);
    b.stuck = false;
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

  const startGame = (explicitName?: string) => {
    const name = explicitName || selectedName || username;
    if (!name) return;
    setUsername(name);
    scoreRef.current = 0;
    livesRef.current = START_LIVES;
    levelRef.current = 1;
    speedRef.current = speedFor(1);
    bricksRef.current = buildBricks();
    paddleRef.current = W / 2;
    parkBall();
    setScore(0);
    setLives(START_LIVES);
    setLevel(1);
    statusRef.current = 'playing';
    setStatus('playing');
  };

  const stopGame = () => {
    statusRef.current = 'menu';
    setStatus('menu');
  };

  // Start straight from a controller: if no player is picked yet, spin up a
  // guest so a pad user is never stuck at the mouse-only menu.
  const padStart = () => {
    let name = selectedName || username;
    if (!name) {
      name = names[0] ?? 'Player 1';
      if (!names.includes(name)) saveNames([name, ...names]);
      setSelectedName(name);
    }
    startGame(name);
  };

  // Publish the freshest handlers for the gamepad loop each render.
  actionsRef.current = { start: padStart, exit: stopGame };

  // Move the paddle toward a screen-x (pointer drag / mouse move).
  const movePaddleTo = (clientX: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * W;
    paddleRef.current = Math.max(PADDLE_W / 2, Math.min(W - PADDLE_W / 2, x));
  };

  // Keyboard controls.
  useEffect(() => {
    const set = (e: KeyboardEvent, down: boolean) => {
      const target = e.target as HTMLElement | null;
      if (target && target.tagName === 'INPUT') return;
      const k = e.key;
      if (k === 'ArrowLeft' || k === 'a' || k === 'A') ctrlRef.current.left = down;
      else if (k === 'ArrowRight' || k === 'd' || k === 'D') ctrlRef.current.right = down;
      else if (k === ' ') {
        if (down) launchBall();
      } else return;
      e.preventDefault();
    };
    const onDown = (e: KeyboardEvent) => set(e, true);
    const onUp = (e: KeyboardEvent) => set(e, false);
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    return () => {
      window.removeEventListener('keydown', onDown);
      window.removeEventListener('keyup', onUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the document language + direction (RTL for Arabic) in sync.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';
  }, [lang]);

  // Console gamepad: D-pad/stick slides the paddle (bridged to the existing
  // Arrow keys) and A launches the ball (bridged to Space); Start begins or
  // replays, B/Back returns to the menu.
  useEffect(() => {
    const stopKeys = bridgeGamepadToKeys({ left: 'ArrowLeft', right: 'ArrowRight', A: ' ' });
    const stopPad = startGamepad({
      onButton: (b) => {
        const a = actionsRef.current;
        if (!a) return;
        const st = statusRef.current;
        if (b === 'start') {
          if (st === 'menu' || st === 'over') a.start();
        } else if (b === 'B' || b === 'back') {
          if (st !== 'menu') a.exit();
        }
      }
    });
    return () => {
      stopKeys();
      stopPad();
    };
  }, []);

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

    const loseLife = () => {
      livesRef.current -= 1;
      setLives(livesRef.current);
      if (livesRef.current <= 0) gameOver();
      else parkBall();
    };

    const nextLevel = () => {
      levelRef.current += 1;
      setLevel(levelRef.current);
      speedRef.current = speedFor(levelRef.current);
      bricksRef.current = buildBricks();
      parkBall();
    };

    const update = () => {
      // Paddle (keyboard glide).
      if (ctrlRef.current.left) paddleRef.current -= PADDLE_SPEED;
      if (ctrlRef.current.right) paddleRef.current += PADDLE_SPEED;
      paddleRef.current = Math.max(PADDLE_W / 2, Math.min(W - PADDLE_W / 2, paddleRef.current));

      const b = ballRef.current;
      if (b.stuck) {
        b.x = paddleRef.current;
        b.y = PADDLE_Y - BALL_R;
        return;
      }

      b.x += b.vx;
      b.y += b.vy;

      // Walls.
      if (b.x - BALL_R < 0) {
        b.x = BALL_R;
        b.vx = Math.abs(b.vx);
      }
      if (b.x + BALL_R > W) {
        b.x = W - BALL_R;
        b.vx = -Math.abs(b.vx);
      }
      if (b.y - BALL_R < 0) {
        b.y = BALL_R;
        b.vy = Math.abs(b.vy);
      }

      // Paddle bounce — steer with where the ball lands on the paddle.
      const px = paddleRef.current;
      if (
        b.vy > 0 &&
        b.y + BALL_R >= PADDLE_Y &&
        b.y - BALL_R <= PADDLE_Y + PADDLE_H &&
        b.x >= px - PADDLE_W / 2 - BALL_R &&
        b.x <= px + PADDLE_W / 2 + BALL_R
      ) {
        const offset = Math.max(-1, Math.min(1, (b.x - px) / (PADDLE_W / 2)));
        const angle = offset * (Math.PI / 3); // up to 60° off vertical
        const speed = speedRef.current;
        b.vx = speed * Math.sin(angle);
        b.vy = -speed * Math.cos(angle);
        b.y = PADDLE_Y - BALL_R;
      }

      // Bricks — one hit per frame keeps the bounce clean.
      const bricks = bricksRef.current;
      for (const br of bricks) {
        if (!br.alive) continue;
        if (
          b.x + BALL_R > br.x &&
          b.x - BALL_R < br.x + br.w &&
          b.y + BALL_R > br.y &&
          b.y - BALL_R < br.y + br.h
        ) {
          br.alive = false;
          scoreRef.current += br.points;
          setScore(scoreRef.current);
          // Reflect off whichever side we overlapped least.
          const overlapX = Math.min(b.x + BALL_R - br.x, br.x + br.w - (b.x - BALL_R));
          const overlapY = Math.min(b.y + BALL_R - br.y, br.y + br.h - (b.y - BALL_R));
          if (overlapX < overlapY) b.vx = -b.vx;
          else b.vy = -b.vy;
          break;
        }
      }

      // Wall cleared → next, faster level.
      if (bricks.every((br) => !br.alive)) {
        nextLevel();
        return;
      }

      // Dropped off the bottom.
      if (b.y - BALL_R > H) loseLife();
    };

    const draw = () => {
      // Board backdrop.
      const bg = ctx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, '#0b1020');
      bg.addColorStop(1, '#15132b');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Bricks.
      for (const br of bricksRef.current) {
        if (!br.alive) continue;
        ctx.fillStyle = br.color;
        roundRect(ctx, br.x, br.y, br.w, br.h, 5);
        ctx.fill();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.18)';
        roundRect(ctx, br.x, br.y, br.w, Math.max(4, br.h * 0.32), 5);
        ctx.fill();
      }

      // Paddle.
      const px = paddleRef.current;
      const grad = ctx.createLinearGradient(0, PADDLE_Y, 0, PADDLE_Y + PADDLE_H);
      grad.addColorStop(0, '#f9a8d4');
      grad.addColorStop(1, '#a855f7');
      ctx.fillStyle = grad;
      roundRect(ctx, px - PADDLE_W / 2, PADDLE_Y, PADDLE_W, PADDLE_H, 7);
      ctx.fill();

      // Ball.
      const b = ballRef.current;
      ctx.fillStyle = '#fef08a';
      ctx.shadowColor = 'rgba(253, 224, 71, 0.9)';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(b.x, b.y, BALL_R, 0, Math.PI * 2);
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
            Break<span className="accent">out</span>
          </h1>
          <div className="menu-bird">🧱</div>
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
              {s.playingAs} <strong>{selectedName}</strong> · 🏆 {s.bestShort} {scores[selectedName] || 0}
            </p>
          )}
        </div>
      </div>
    );
  }

  // ===================== THE GAME =====================
  const hold = (key: 'left' | 'right', down: boolean) => () => {
    ctrlRef.current[key] = down;
  };

  return (
    <div className="app-shell">
      <header className="game-bar">
        <span className="player-tag">🧱 {username}</span>
        <button className="stop-button" onClick={stopGame}>
          {s.stop}
        </button>
      </header>

      <div className="score-strip">
        <div className="score-chip">
          <span>{s.score}</span>
          <strong>{score}</strong>
        </div>
        <div className="score-chip">
          <span>{s.lives}</span>
          <strong>{'⚪'.repeat(lives) || '—'}</strong>
        </div>
        <div className="score-chip">
          <span>{s.best}</span>
          <strong>{Math.max(best, score)}</strong>
        </div>
      </div>

      <div className="board-stage">
        <div className="board-frame">
          <canvas
            ref={canvasRef}
            className="game-canvas"
            style={{ aspectRatio: `${W} / ${H}` }}
            onPointerDown={(e) => {
              movePaddleTo(e.clientX);
              launchBall();
            }}
            onPointerMove={(e) => movePaddleTo(e.clientX)}
          />

          {status === 'over' && (
            <div className="overlay">
              <div className="overlay-card">
                <p className="overlay-eyebrow">{s.gameOver}</p>
                <h2>{score >= best && score > 0 ? s.newBest : s.niceRun}</h2>
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

      {/* Hold to slide the paddle, tap the ball to launch (great on phones). */}
      <div className="controls">
        <button
          className="ctrl-btn"
          aria-label={s.moveLeft}
          onPointerDown={hold('left', true)}
          onPointerUp={hold('left', false)}
          onPointerLeave={hold('left', false)}
          onPointerCancel={hold('left', false)}
        >
          ◀
        </button>
        <button className="ctrl-btn fire" aria-label={s.launchBall} onPointerDown={launchBall}>
          ⦿
        </button>
        <button
          className="ctrl-btn"
          aria-label={s.moveRight}
          onPointerDown={hold('right', true)}
          onPointerUp={hold('right', false)}
          onPointerLeave={hold('right', false)}
          onPointerCancel={hold('right', false)}
        >
          ▶
        </button>
      </div>

      <p className="hint">{s.level} {level} · {s.hint}</p>
    </div>
  );
}

export default App;
