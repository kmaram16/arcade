import { useEffect, useRef, useState } from 'react';
import './App.css';
import { LANGS, RTL_LANGS, STR, initialLang, saveLang, type Lang } from './i18n';
import { startGamepad, bridgeGamepadToKeys } from './gamepad';

// ===== Playing field =====
const W = 480;
const H = 600;

// ===== Player cannon =====
const PLAYER_W = 42;
const PLAYER_H = 18;
const PLAYER_Y = H - 38; // top edge of the cannon
const PLAYER_SPEED = 6;
const INVULN = 90; // frames of safety after being hit

// ===== Bullets =====
const BULLET_SPEED = 8;
const FIRE_COOLDOWN = 16; // frames between shots
const MAX_BULLETS = 2;
const INV_BULLET_SPEED = 4.2;

// ===== Invaders =====
const ROWS = 5;
const COLS = 8;
const INV_W = 30;
const INV_H = 24;
const INV_GAP_X = 12;
const INV_GAP_Y = 14;
const INV_TOP = 64;
const INV_BASE_SPEED = 0.45;
const INV_DROP = 16;
const INV_FIRE_BASE = 0.012;
const EDGE = 12;

const START_LIVES = 3;

const NAMES_KEY = 'invaders-names';
const SCORES_KEY = 'invaders-best-by-user';

// Top rows are worth more.
const ROW_POINTS = [50, 40, 30, 20, 10];
const ROW_EMOJI = ['🛸', '👾', '👾', '👽', '👽'];

type Status = 'menu' | 'playing' | 'over';
type Scores = Record<string, number>;
type Invader = { x: number; y: number; row: number; col: number; alive: boolean };
type Bullet = { x: number; y: number };
type Star = { x: number; y: number; r: number };

function buildFleet(): Invader[] {
  const fleetW = COLS * INV_W + (COLS - 1) * INV_GAP_X;
  const left = (W - fleetW) / 2;
  const fleet: Invader[] = [];
  for (let r = 0; r < ROWS; r += 1) {
    for (let c = 0; c < COLS; c += 1) {
      fleet.push({
        x: left + c * (INV_W + INV_GAP_X),
        y: INV_TOP + r * (INV_H + INV_GAP_Y),
        row: r,
        col: c,
        alive: true
      });
    }
  }
  return fleet;
}

function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const s = STR[lang];

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Latest action closures, so the gamepad loop (set up once) always calls the
  // current handlers without capturing stale state.
  const actionsRef = useRef<{
    start: () => void;
    restart: () => void;
    exit: () => void;
  } | null>(null);

  const playerRef = useRef(W / 2);
  const bulletsRef = useRef<Bullet[]>([]);
  const invBulletsRef = useRef<Bullet[]>([]);
  const invadersRef = useRef<Invader[]>([]);
  const dirRef = useRef(1); // fleet horizontal direction
  const cooldownRef = useRef(0);
  const invulnRef = useRef(0);
  const frameRef = useRef(0);
  const starsRef = useRef<Star[]>([]);
  const ctrlRef = useRef({ left: false, right: false, fire: false });

  const statusRef = useRef<Status>('menu');
  const scoreRef = useRef(0);
  const livesRef = useRef(START_LIVES);
  const waveRef = useRef(1);

  const [status, setStatus] = useState<Status>('menu');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(START_LIVES);
  const [wave, setWave] = useState(1);
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

  const fire = () => {
    if (statusRef.current !== 'playing') return;
    if (cooldownRef.current > 0 || bulletsRef.current.length >= MAX_BULLETS) return;
    bulletsRef.current.push({ x: playerRef.current, y: PLAYER_Y - 4 });
    cooldownRef.current = FIRE_COOLDOWN;
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
    waveRef.current = 1;
    invadersRef.current = buildFleet();
    bulletsRef.current = [];
    invBulletsRef.current = [];
    dirRef.current = 1;
    cooldownRef.current = 0;
    invulnRef.current = 0;
    playerRef.current = W / 2;
    setScore(0);
    setLives(START_LIVES);
    setWave(1);
    statusRef.current = 'playing';
    setStatus('playing');
  };

  const stopGame = () => {
    statusRef.current = 'menu';
    setStatus('menu');
  };

  // Start straight from a controller: if there's no player yet, spin up a guest
  // one so a pad user is never stuck at the mouse-only menu.
  const padStart = () => {
    const name = selectedName || username || names[0] || 'Player 1';
    if (!names.includes(name)) saveNames([name, ...names]);
    setSelectedName(name);
    startGame(name);
  };

  // Keep the document language + direction (RTL for Arabic) in sync.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';
  }, [lang]);

  // Console gamepad. The D-pad/stick and A/RB are bridged to the game's existing
  // keyboard controls: left/right steer the cannon, A or RB fire (Space). Start
  // begins or replays; B/Back drops back to the menu.
  useEffect(() => {
    const stopKeys = bridgeGamepadToKeys({
      left: 'ArrowLeft',
      right: 'ArrowRight',
      A: ' ',
      RB: ' '
    });
    const stopPad = startGamepad({
      onButton: (b) => {
        const a = actionsRef.current;
        if (!a) return;
        const st = statusRef.current;
        if (b === 'start') {
          if (st === 'menu') a.start();
          else if (st === 'over') a.restart();
        } else if (b === 'B' || b === 'back') {
          if (st !== 'menu') a.exit();
        }
      }
    });
    return () => {
      stopKeys();
      stopPad();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Move the cannon toward a screen-x (pointer drag).
  const movePlayerTo = (clientX: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * W;
    playerRef.current = Math.max(PLAYER_W / 2, Math.min(W - PLAYER_W / 2, x));
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
        ctrlRef.current.fire = down;
        if (down) fire();
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

    if (starsRef.current.length === 0) {
      starsRef.current = Array.from({ length: 60 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.3
      }));
    }

    let raf = 0;

    const loseLife = () => {
      livesRef.current -= 1;
      setLives(livesRef.current);
      invBulletsRef.current = [];
      if (livesRef.current <= 0) gameOver();
      else invulnRef.current = INVULN;
    };

    const nextWave = () => {
      waveRef.current += 1;
      setWave(waveRef.current);
      invadersRef.current = buildFleet();
      bulletsRef.current = [];
      invBulletsRef.current = [];
      dirRef.current = 1;
      invulnRef.current = INVULN;
    };

    const fleetSpeed = (aliveCount: number) => {
      const total = ROWS * COLS;
      const progress = 1 - aliveCount / total;
      return INV_BASE_SPEED * (1 + progress * 3.5) * (1 + (waveRef.current - 1) * 0.25);
    };

    const update = () => {
      frameRef.current += 1;
      if (cooldownRef.current > 0) cooldownRef.current -= 1;
      if (invulnRef.current > 0) invulnRef.current -= 1;

      // Cannon movement.
      if (ctrlRef.current.left) playerRef.current -= PLAYER_SPEED;
      if (ctrlRef.current.right) playerRef.current += PLAYER_SPEED;
      playerRef.current = Math.max(PLAYER_W / 2, Math.min(W - PLAYER_W / 2, playerRef.current));
      if (ctrlRef.current.fire) fire();

      // Fleet movement.
      const invaders = invadersRef.current;
      const alive = invaders.filter((a) => a.alive);
      if (alive.length === 0) {
        nextWave();
        return;
      }
      const speed = fleetSpeed(alive.length);
      let minX = Infinity;
      let maxX = -Infinity;
      for (const a of alive) {
        minX = Math.min(minX, a.x);
        maxX = Math.max(maxX, a.x + INV_W);
      }
      const hitEdge =
        (dirRef.current > 0 && maxX + speed > W - EDGE) ||
        (dirRef.current < 0 && minX - speed < EDGE);
      if (hitEdge) {
        dirRef.current *= -1;
        for (const a of alive) a.y += INV_DROP;
      } else {
        for (const a of alive) a.x += dirRef.current * speed;
      }

      // Reached the cannon line → invasion.
      for (const a of alive) {
        if (a.y + INV_H >= PLAYER_Y) {
          gameOver();
          return;
        }
      }

      // Invaders fire — from the lowest invader in a random column.
      const fireChance = INV_FIRE_BASE * (1 + (waveRef.current - 1) * 0.4);
      if (Math.random() < fireChance) {
        const shooter = alive[Math.floor(Math.random() * alive.length)];
        let low = shooter;
        for (const a of alive) if (a.col === shooter.col && a.y > low.y) low = a;
        invBulletsRef.current.push({ x: low.x + INV_W / 2, y: low.y + INV_H });
      }

      // Player bullets.
      bulletsRef.current = bulletsRef.current.filter((b) => {
        b.y -= BULLET_SPEED;
        return b.y > -BULLET_SPEED;
      });

      // Player bullet → invader.
      for (const b of bulletsRef.current) {
        for (const a of invaders) {
          if (!a.alive) continue;
          if (b.x > a.x && b.x < a.x + INV_W && b.y > a.y && b.y < a.y + INV_H) {
            a.alive = false;
            scoreRef.current += ROW_POINTS[a.row];
            setScore(scoreRef.current);
            b.y = -999; // spend the bullet
            break;
          }
        }
      }
      bulletsRef.current = bulletsRef.current.filter((b) => b.y > -900);

      // Invader bullets.
      invBulletsRef.current = invBulletsRef.current.filter((b) => {
        b.y += INV_BULLET_SPEED;
        return b.y < H + 10;
      });

      // Invader bullet → cannon.
      if (invulnRef.current <= 0) {
        const px = playerRef.current;
        for (const b of invBulletsRef.current) {
          if (
            b.x > px - PLAYER_W / 2 &&
            b.x < px + PLAYER_W / 2 &&
            b.y > PLAYER_Y &&
            b.y < PLAYER_Y + PLAYER_H
          ) {
            loseLife();
            break;
          }
        }
      }
    };

    const draw = () => {
      // Space.
      const bg = ctx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, '#0b1020');
      bg.addColorStop(1, '#1a1342');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Stars.
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      for (const st of starsRef.current) {
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Invaders (a gentle two-step bob).
      const bob = Math.sin(frameRef.current * 0.06) * 2;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = `${INV_H}px "Segoe UI Emoji", "Apple Color Emoji", sans-serif`;
      for (const a of invadersRef.current) {
        if (!a.alive) continue;
        ctx.fillText(ROW_EMOJI[a.row], a.x + INV_W / 2, a.y + INV_H / 2 + bob);
      }

      // Player bullets.
      ctx.fillStyle = '#22d3ee';
      ctx.shadowColor = 'rgba(34, 211, 238, 0.9)';
      ctx.shadowBlur = 8;
      for (const b of bulletsRef.current) ctx.fillRect(b.x - 2, b.y - 10, 4, 12);
      ctx.shadowBlur = 0;

      // Invader bullets.
      ctx.fillStyle = '#f472b6';
      for (const b of invBulletsRef.current) ctx.fillRect(b.x - 2, b.y, 4, 11);

      // Cannon (blinks while invulnerable).
      const px = playerRef.current;
      const blink = invulnRef.current > 0 && Math.floor(invulnRef.current / 6) % 2 === 0;
      if (!blink) {
        const grad = ctx.createLinearGradient(0, PLAYER_Y, 0, PLAYER_Y + PLAYER_H);
        grad.addColorStop(0, '#a5b4fc');
        grad.addColorStop(1, '#6366f1');
        ctx.fillStyle = grad;
        // base
        ctx.fillRect(px - PLAYER_W / 2, PLAYER_Y + 7, PLAYER_W, PLAYER_H - 7);
        ctx.fillRect(px - PLAYER_W / 2 + 6, PLAYER_Y + 3, PLAYER_W - 12, 6);
        // barrel
        ctx.fillRect(px - 3, PLAYER_Y - 5, 6, 9);
      }
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

  // Publish the freshest handlers for the gamepad loop each render.
  actionsRef.current = {
    start: padStart,
    restart: () => startGame(),
    exit: stopGame
  };

  // ===================== THE MENU =====================
  if (status === 'menu') {
    return (
      <div className="app-shell menu-shell">
        <div className="menu-panel">
          <div className="menu-top">
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
            {s.titlePre}
            <span className="accent">{s.titleAccent}</span>
          </h1>
          <div className="menu-bird">👾</div>
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
              placeholder={s.addName}
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
            <p className="best-line">{s.playingAs(selectedName, scores[selectedName] || 0)}</p>
          )}
        </div>
      </div>
    );
  }

  // ===================== THE GAME =====================
  const hold = (key: 'left' | 'right' | 'fire', down: boolean) => () => {
    ctrlRef.current[key] = down;
    if (key === 'fire' && down) fire();
  };

  return (
    <div className="app-shell">
      <header className="game-bar">
        <span className="player-tag">👾 {username}</span>
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
          <strong>{'❤️'.repeat(lives) || '—'}</strong>
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
              movePlayerTo(e.clientX);
              fire();
            }}
            onPointerMove={(e) => movePlayerTo(e.clientX)}
          />

          {status === 'over' && (
            <div className="overlay">
              <div className="overlay-card">
                <p className="overlay-eyebrow">{s.gameOver}</p>
                <h2>{score >= best && score > 0 ? s.newBest : s.goodFight}</h2>
                <div className="overlay-score">
                  <div>
                    <span>{s.score}</span>
                    <strong>{score}</strong>
                  </div>
                  <div>
                    <span>{s.wave}</span>
                    <strong>{wave}</strong>
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

      {/* Hold to move, tap to shoot (great on phones). Dragging the board also moves you. */}
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
        <button
          className="ctrl-btn fire"
          aria-label={s.shoot}
          onPointerDown={hold('fire', true)}
          onPointerUp={hold('fire', false)}
          onPointerLeave={hold('fire', false)}
          onPointerCancel={hold('fire', false)}
        >
          🔥
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

      <p className="hint">{s.hint(wave)}</p>
    </div>
  );
}

export default App;
