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

const SCORES_KEY = 'flappy-best-by-user';
const NAMES_KEY = 'flappy-names';

type Status = 'menu' | 'playing' | 'over';
type Pipe = { x: number; gapY: number; scored: boolean };
type Scores = Record<string, number>;

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
  const statusRef = useRef<Status>('menu');
  const scoreRef = useRef(0);

  const [status, setStatus] = useState<Status>('menu');
  const [score, setScore] = useState(0);
  const [scores, setScores] = useState<Scores>({});

  // The list of saved players, who is playing, and the new-name box text.
  const [names, setNames] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState('');
  const [username, setUsername] = useState('');
  const [nameInput, setNameInput] = useState('');

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  // Load saved players and their best scores when the game opens.
  useEffect(() => {
    const savedScores: Scores = JSON.parse(localStorage.getItem(SCORES_KEY) || '{}');
    const savedNames: string[] = JSON.parse(localStorage.getItem(NAMES_KEY) || '[]');
    // Make sure any name that has a score also shows up in the list.
    const merged = Array.from(new Set([...savedNames, ...Object.keys(savedScores)]));
    setScores(savedScores);
    setNames(merged);
    if (merged.length > 0) setSelectedName(merged[0]);
  }, []);

  // The best score for whoever is playing right now.
  const best = username ? scores[username] || 0 : 0;

  // Save the list of player names.
  const saveNames = (next: string[]) => {
    setNames(next);
    localStorage.setItem(NAMES_KEY, JSON.stringify(next));
  };

  // Add a new player from the name box (or just select it if it already exists).
  const addName = () => {
    const n = nameInput.trim();
    if (!n) return;
    if (!names.includes(n)) saveNames([n, ...names]);
    setSelectedName(n);
    setNameInput('');
  };

  // Remove a player and their saved score.
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

  // Clear the bird and pipes back to the start.
  const reset = () => {
    birdRef.current = { y: HEIGHT / 2, vy: FLAP }; // start with a little hop up
    pipesRef.current = [makePipe(WIDTH + 60)];
    scoreRef.current = 0;
    setScore(0);
  };

  // Begin a new game (called by the Start button on the menu).
  const startGame = () => {
    const name = selectedName || username;
    if (!name) return;
    setUsername(name);
    reset();
    statusRef.current = 'playing';
    setStatus('playing');
  };

  // Stop the game and go back to the menu.
  const stopGame = () => {
    statusRef.current = 'menu';
    setStatus('menu');
  };

  const gameOver = () => {
    statusRef.current = 'over';
    setStatus('over');
    // Save a new best score for this player if they beat it.
    if (username && scoreRef.current > (scores[username] || 0)) {
      const next = { ...scores, [username]: scoreRef.current };
      setScores(next);
      localStorage.setItem(SCORES_KEY, JSON.stringify(next));
    }
  };

  // What happens when you tap / press space while playing.
  const flap = () => {
    if (statusRef.current === 'playing') {
      birdRef.current.vy = FLAP; // RULE 2: boost up!
    } else if (statusRef.current === 'over') {
      reset(); // tapping after game over tries again
      statusRef.current = 'playing';
      setStatus('playing');
    }
  };

  // Listen for the spacebar.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      // Don't flap while typing your name in the box.
      if (target && target.tagName === 'INPUT') return;
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
  // It only runs while we are on the game screen (playing or game over).
  useEffect(() => {
    if (status === 'menu') return;
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

      // Sky — red at the top fading down into blue.
      const sky = ctx.createLinearGradient(0, 0, 0, HEIGHT);
      sky.addColorStop(0, '#ef4444'); // red
      sky.addColorStop(0.5, '#a855f7'); // blends through purple
      sky.addColorStop(1, '#3b82f6'); // blue
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
        grad.addColorStop(0, '#1d4ed8');
        grad.addColorStop(0.5, '#3b82f6');
        grad.addColorStop(1, '#1e40af');
        ctx.fillStyle = grad;
        // top pipe
        roundedRect(ctx, p.x, 0, PIPE_W, p.gapY, 8);
        ctx.fill();
        // bottom pipe
        roundedRect(ctx, p.x, p.gapY + GAP, PIPE_W, GROUND_Y - (p.gapY + GAP), 8);
        ctx.fill();
        // little lip on the ends of each pipe
        ctx.fillStyle = '#1e3a8a';
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

      // Score number, big at the top (white with a soft shadow so it shows up
      // clearly against the red/blue sky).
      ctx.font = '800 44px Sora, Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.35)';
      ctx.shadowBlur = 8;
      ctx.fillStyle = '#ffffff';
      ctx.fillText(String(scoreRef.current), WIDTH / 2, 70);
      ctx.restore();
    };

    const loop = (time: number) => {
      if (statusRef.current === 'playing') {
        update();
      }
      draw(time);
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
            Flappy <span className="accent">Bird</span>
          </h1>
          <div className="menu-bird">🐤</div>
          <p className="menu-copy">Pick a player or add a new one, then press Start!</p>

          <div className="players">
            {names.length > 0 ? (
              names.map((n) => (
                <div
                  key={n}
                  className={`player-chip ${selectedName === n ? 'selected' : ''}`}
                >
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
        <span className="player-tag">🐤 {username}</span>
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
          <span>Best</span>
          <strong>{Math.max(best, score)}</strong>
        </div>
      </div>

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

          {status === 'over' && (
            <div
              className="overlay"
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
            >
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
                    <strong>{Math.max(best, score)}</strong>
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

      <p className="hint">Click / tap the board · or press Space to flap 🐤</p>
    </div>
  );
}

export default App;
