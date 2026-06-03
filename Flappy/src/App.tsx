import { useEffect, useRef, useState } from 'react';
import './App.css';

// ===== The numbers that make the game feel the way it does =====
// Change these to make the game easier or harder!
const WIDTH = 400; // how wide the game is
const HEIGHT = 560; // how tall the game is
const GROUND_H = 70; // height of the grassy ground at the bottom
const GROUND_Y = HEIGHT - GROUND_H; // the y where the ground starts

const BIRD_X = 96; // the bird stays at this spot across the screen
const BIRD_R = 15; // how big the bird is (its radius)

const GRAVITY = 0.46; // RULE 1: how hard gravity pulls the bird DOWN each frame
const FLAP = -7.8; // RULE 2: the upward boost when you flap (negative = up)

const PIPE_W = 64; // how wide each pipe is
const GAP = 158; // the hole the bird flies through (bigger = easier)
const PIPE_SPEED = 2.4; // RULE 3: how fast pipes slide left
const PIPE_SPACING = 220; // distance between one pipe and the next

const BEST_KEY = 'flappy-best-score';

type Status = 'idle' | 'playing' | 'over';
type Pipe = { x: number; gapY: number; scored: boolean };

// Pick a random height for the gap in a new pipe.
function makePipe(x: number): Pipe {
  const top = 60;
  const bottom = GROUND_Y - GAP - 60;
  const gapY = top + Math.random() * (bottom - top);
  return { x, gapY, scored: false };
}

// A little helper to draw rectangles with rounded corners.
function roundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  const radius = Math.min(r, w / 2, Math.abs(h) / 2);
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

  // The bird: where it is (y) and how fast it is moving up/down (vy).
  const birdRef = useRef({ y: HEIGHT / 2, vy: 0 });
  // All the pipes currently on screen.
  const pipesRef = useRef<Pipe[]>([]);
  const statusRef = useRef<Status>('idle');
  const scoreRef = useRef(0);

  const [status, setStatus] = useState<Status>('idle');
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  // Load the best score the player ever got.
  useEffect(() => {
    const saved = Number(localStorage.getItem(BEST_KEY) || 0);
    if (saved > 0) setBest(saved);
  }, []);

  // Clear everything back to the start.
  const reset = () => {
    birdRef.current = { y: HEIGHT / 2, vy: 0 };
    pipesRef.current = [makePipe(WIDTH + 60)];
    scoreRef.current = 0;
    setScore(0);
  };

  const startGame = () => {
    reset();
    setStatus('playing');
  };

  const gameOver = () => {
    setStatus('over');
    // Save a new best score if this run beat it.
    if (scoreRef.current > best) {
      setBest(scoreRef.current);
      localStorage.setItem(BEST_KEY, String(scoreRef.current));
    }
  };

  // What happens when you tap / press space.
  const flap = () => {
    if (statusRef.current === 'idle') {
      startGame();
      birdRef.current.vy = FLAP; // RULE 2: give the first boost up
    } else if (statusRef.current === 'playing') {
      birdRef.current.vy = FLAP; // RULE 2: boost up!
    } else if (statusRef.current === 'over') {
      startGame(); // tapping after game over tries again
    }
  };

  // Listen for the spacebar.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        e.preventDefault();
        flap();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ===== The game loop: this runs about 60 times every second =====
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Make the picture sharp on phones and retina screens.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = WIDTH * dpr;
    canvas.height = HEIGHT * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    let raf = 0;

    const update = () => {
      const bird = birdRef.current;

      // RULE 1: GRAVITY — the bird always falls, faster and faster.
      bird.vy += GRAVITY;
      bird.y += bird.vy;

      // Don't let the bird fly off the top of the screen.
      if (bird.y < BIRD_R) {
        bird.y = BIRD_R;
        bird.vy = 0;
      }

      // RULE 3: PIPES move to the left.
      for (const p of pipesRef.current) p.x -= PIPE_SPEED;

      // Add a new pipe when the last one has moved far enough in.
      const last = pipesRef.current[pipesRef.current.length - 1];
      if (last && last.x < WIDTH - PIPE_SPACING) {
        pipesRef.current.push(makePipe(WIDTH + PIPE_W));
      }
      // Throw away pipes that have left the screen.
      pipesRef.current = pipesRef.current.filter((p) => p.x + PIPE_W > -10);

      for (const p of pipesRef.current) {
        // RULE 5: SCORE — +1 when the bird passes a pipe.
        if (!p.scored && p.x + PIPE_W < BIRD_X) {
          p.scored = true;
          scoreRef.current += 1;
          setScore(scoreRef.current);
        }

        // RULE 4: CRASH — did the bird hit this pipe?
        const hitX = BIRD_X + BIRD_R > p.x && BIRD_X - BIRD_R < p.x + PIPE_W;
        const hitGap = bird.y - BIRD_R < p.gapY || bird.y + BIRD_R > p.gapY + GAP;
        if (hitX && hitGap) {
          gameOver();
          return;
        }
      }

      // RULE 4: CRASH — did the bird hit the ground?
      if (bird.y + BIRD_R >= GROUND_Y) {
        bird.y = GROUND_Y - BIRD_R;
        gameOver();
      }
    };

    const draw = (time: number) => {
      const bird = birdRef.current;

      // Sky
      const sky = ctx.createLinearGradient(0, 0, 0, HEIGHT);
      sky.addColorStop(0, '#bae6fd');
      sky.addColorStop(1, '#e0f2fe');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      // Fluffy clouds drifting by (just for looks)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      for (let i = 0; i < 3; i += 1) {
        const cx = ((time / 40 + i * 160) % (WIDTH + 80)) - 40;
        const cy = 80 + i * 90;
        ctx.beginPath();
        ctx.arc(cx, cy, 20, 0, Math.PI * 2);
        ctx.arc(cx + 22, cy + 4, 16, 0, Math.PI * 2);
        ctx.arc(cx - 20, cy + 6, 14, 0, Math.PI * 2);
        ctx.fill();
      }

      // Pipes
      for (const p of pipesRef.current) {
        const grad = ctx.createLinearGradient(p.x, 0, p.x + PIPE_W, 0);
        grad.addColorStop(0, '#16a34a');
        grad.addColorStop(0.5, '#22c55e');
        grad.addColorStop(1, '#15803d');
        ctx.fillStyle = grad;
        // top pipe
        roundedRect(ctx, p.x, 0, PIPE_W, p.gapY, 8);
        ctx.fill();
        // bottom pipe
        roundedRect(ctx, p.x, p.gapY + GAP, PIPE_W, GROUND_Y - (p.gapY + GAP), 8);
        ctx.fill();
        // little lip on the ends of each pipe
        ctx.fillStyle = '#15803d';
        roundedRect(ctx, p.x - 4, p.gapY - 16, PIPE_W + 8, 16, 6);
        ctx.fill();
        roundedRect(ctx, p.x - 4, p.gapY + GAP, PIPE_W + 8, 16, 6);
        ctx.fill();
      }

      // Ground
      ctx.fillStyle = '#65a30d';
      ctx.fillRect(0, GROUND_Y, WIDTH, GROUND_H);
      ctx.fillStyle = '#84cc16';
      ctx.fillRect(0, GROUND_Y, WIDTH, 8);

      // The bird — drawn tilted depending on whether it is rising or falling.
      const angle = Math.max(-0.5, Math.min(1.3, bird.vy / 11));
      ctx.save();
      ctx.translate(BIRD_X, bird.y);
      ctx.rotate(angle);
      // body
      const body = ctx.createLinearGradient(-BIRD_R, -BIRD_R, BIRD_R, BIRD_R);
      body.addColorStop(0, '#fde047');
      body.addColorStop(1, '#f59e0b');
      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.arc(0, 0, BIRD_R, 0, Math.PI * 2);
      ctx.fill();
      // wing
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.ellipse(-3, 3, 7, 5, 0, 0, Math.PI * 2);
      ctx.fill();
      // eye
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(6, -5, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.arc(7, -5, 2.4, 0, Math.PI * 2);
      ctx.fill();
      // beak
      ctx.fillStyle = '#f97316';
      ctx.beginPath();
      ctx.moveTo(BIRD_R - 2, -2);
      ctx.lineTo(BIRD_R + 8, 1);
      ctx.lineTo(BIRD_R - 2, 4);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Score number, big at the top
      if (statusRef.current !== 'idle') {
        ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
        ctx.font = '800 44px Sora, Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(String(scoreRef.current), WIDTH / 2, 70);
      }
    };

    const loop = (time: number) => {
      if (statusRef.current === 'playing') {
        update();
      } else if (statusRef.current === 'idle') {
        // Gentle bobbing while waiting to start.
        birdRef.current.y = HEIGHT / 2 + Math.sin(time / 280) * 8;
        birdRef.current.vy = 0;
      }
      draw(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Premium Arcade</p>
          <h1>
            Flappy <span className="accent">Bird</span>
          </h1>
        </div>
        <div className="scoreboard">
          <div className="score-chip">
            <span>Score</span>
            <strong>{score}</strong>
          </div>
          <div className="score-chip">
            <span>Best</span>
            <strong>{best}</strong>
          </div>
        </div>
      </header>

      <div
        className="board-stage"
        onMouseDown={flap}
        onTouchStart={(e) => {
          e.preventDefault();
          flap();
        }}
      >
        <div className="board-frame">
          <canvas
            ref={canvasRef}
            className="game-canvas"
            style={{ aspectRatio: `${WIDTH} / ${HEIGHT}` }}
          />

          {status === 'idle' && (
            <div className="overlay">
              <div className="overlay-card">
                <div className="overlay-bird">🐤</div>
                <h2>Tap to fly</h2>
                <p>Click, tap, or press Space to flap. Fly through the pipes!</p>
                <button className="button-primary" onClick={startGame}>
                  ▶ Start
                </button>
              </div>
            </div>
          )}

          {status === 'over' && (
            <div className="overlay">
              <div className="overlay-card">
                <p className="overlay-eyebrow">Game over</p>
                <h2>{score >= best && score > 0 ? 'New best! 🎉' : 'Nice try!'}</h2>
                <div className="overlay-score">
                  <div>
                    <span>Score</span>
                    <strong>{score}</strong>
                  </div>
                  <div>
                    <span>Best</span>
                    <strong>{best}</strong>
                  </div>
                </div>
                <button className="button-primary" onClick={startGame}>
                  ↻ Play again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="hint">Click / tap the board · or press Space to flap 🐤</p>
    </div>
  );
}

export default App;
