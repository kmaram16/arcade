import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import { LANGS, RTL_LANGS, STR, initialLang, saveLang, type Lang } from './i18n';
import { startGamepad } from './gamepad';

type Point = { x: number; y: number };
type Direction = 'up' | 'down' | 'left' | 'right';
type Status = 'idle' | 'playing' | 'paused' | 'over';
type UserStats = {
  bestScore: number;
  gamesPlayed: number;
  totalFood: number;
  lastScore: number;
};

const GRID_SIZE = 20;
const CELL_SIZE = 26;
const CANVAS_SIZE = GRID_SIZE * CELL_SIZE;
const TICK_MS = 120;
const INITIAL_SNAKE: Point[] = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 }
];
const USER_NAMES_KEY = 'snake-game-users';
const USER_STATS_KEY = 'snake-game-user-stats';
const INITIAL_STATS: UserStats = {
  bestScore: 0,
  gamesPlayed: 0,
  totalFood: 0,
  lastScore: 0
};

const OPPOSITE: Record<Direction, Direction> = {
  up: 'down',
  down: 'up',
  left: 'right',
  right: 'left'
};

function randomFood(snake: Point[]) {
  const used = new Set(snake.map((point) => `${point.x},${point.y}`));
  while (true) {
    const x = Math.floor(Math.random() * GRID_SIZE);
    const y = Math.floor(Math.random() * GRID_SIZE);
    if (!used.has(`${x},${y}`)) {
      return { x, y };
    }
  }
}

function nextHead(head: Point, direction: Direction) {
  switch (direction) {
    case 'up':
      return { x: head.x, y: (head.y + GRID_SIZE - 1) % GRID_SIZE };
    case 'down':
      return { x: head.x, y: (head.y + 1) % GRID_SIZE };
    case 'left':
      return { x: (head.x + GRID_SIZE - 1) % GRID_SIZE, y: head.y };
    case 'right':
      return { x: (head.x + 1) % GRID_SIZE, y: head.y };
  }
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

function drawBoard(
  ctx: CanvasRenderingContext2D,
  snake: Point[],
  food: Point,
  direction: Direction,
  time: number,
  dimmed: boolean
) {
  // Board background — soft light gradient.
  const bg = ctx.createLinearGradient(0, 0, 0, CANVAS_SIZE);
  bg.addColorStop(0, '#ffffff');
  bg.addColorStop(1, '#eef2f9');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

  // Subtle grid lines.
  ctx.strokeStyle = 'rgba(15, 23, 42, 0.05)';
  ctx.lineWidth = 1;
  for (let i = 1; i < GRID_SIZE; i += 1) {
    ctx.beginPath();
    ctx.moveTo(i * CELL_SIZE + 0.5, 0);
    ctx.lineTo(i * CELL_SIZE + 0.5, CANVAS_SIZE);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i * CELL_SIZE + 0.5);
    ctx.lineTo(CANVAS_SIZE, i * CELL_SIZE + 0.5);
    ctx.stroke();
  }

  // Food — pulsing glowing orb.
  const pulse = 0.5 + 0.5 * Math.sin(time / 260);
  const fx = food.x * CELL_SIZE + CELL_SIZE / 2;
  const fy = food.y * CELL_SIZE + CELL_SIZE / 2;
  const baseR = CELL_SIZE * 0.32;
  ctx.save();
  ctx.shadowColor = 'rgba(244, 63, 94, 0.9)';
  ctx.shadowBlur = 14 + pulse * 12;
  const glow = ctx.createRadialGradient(fx, fy, 1, fx, fy, baseR + 2);
  glow.addColorStop(0, '#fda4af');
  glow.addColorStop(0.6, '#f43f5e');
  glow.addColorStop(1, '#be123c');
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(fx, fy, baseR + pulse * 1.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
  // Highlight dot.
  ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
  ctx.beginPath();
  ctx.arc(fx - baseR * 0.3, fy - baseR * 0.3, baseR * 0.28, 0, Math.PI * 2);
  ctx.fill();

  // Snake — rounded gradient segments, brightest at the head.
  const total = snake.length;
  for (let i = total - 1; i >= 0; i -= 1) {
    const segment = snake[i];
    const t = total > 1 ? i / (total - 1) : 0; // 0 = head, 1 = tail
    const pad = 2 + t * 1.5;
    const x = segment.x * CELL_SIZE + pad;
    const y = segment.y * CELL_SIZE + pad;
    const size = CELL_SIZE - pad * 2;

    const grad = ctx.createLinearGradient(x, y, x + size, y + size);
    if (i === 0) {
      grad.addColorStop(0, '#0ea5e9');
      grad.addColorStop(1, '#6366f1');
    } else {
      const lightness = 1 - t * 0.45;
      grad.addColorStop(0, `rgba(56, 189, 248, ${0.65 + lightness * 0.35})`);
      grad.addColorStop(1, `rgba(99, 102, 241, ${0.55 + lightness * 0.35})`);
    }

    ctx.save();
    if (i === 0) {
      ctx.shadowColor = 'rgba(14, 165, 233, 0.45)';
      ctx.shadowBlur = 12;
    }
    ctx.fillStyle = grad;
    roundedRect(ctx, x, y, size, size, CELL_SIZE * 0.32);
    ctx.fill();
    ctx.restore();
  }

  // Eyes on the head, oriented by direction.
  const head = snake[0];
  const hx = head.x * CELL_SIZE;
  const hy = head.y * CELL_SIZE;
  const c = CELL_SIZE;
  const eye = c * 0.12;
  const off = c * 0.26;
  let e1: Point;
  let e2: Point;
  if (direction === 'left' || direction === 'right') {
    const ex = direction === 'right' ? hx + c - off : hx + off;
    e1 = { x: ex, y: hy + off };
    e2 = { x: ex, y: hy + c - off };
  } else {
    const ey = direction === 'down' ? hy + c - off : hy + off;
    e1 = { x: hx + off, y: ey };
    e2 = { x: hx + c - off, y: ey };
  }
  [e1, e2].forEach((pos) => {
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, eye, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f8fafc';
    ctx.beginPath();
    ctx.arc(pos.x - eye * 0.3, pos.y - eye * 0.3, eye * 0.45, 0, Math.PI * 2);
    ctx.fill();
  });

  if (dimmed) {
    ctx.fillStyle = 'rgba(248, 250, 252, 0.62)';
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const s = STR[lang];

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // Latest action closures, so the gamepad loop (set up once) always calls the
  // current handlers without capturing stale state.
  const actionsRef = useRef<{
    steer: (d: Direction) => void;
    start: () => void;
    restart: () => void;
    pause: () => void;
    exit: () => void;
  } | null>(null);
  const directionRef = useRef<Direction>('right');
  const queuedDirectionRef = useRef<Direction | null>(null);
  const scoreRef = useRef(0);
  const snakeRef = useRef<Point[]>(INITIAL_SNAKE);
  const foodRef = useRef<Point>(randomFood(INITIAL_SNAKE));
  const statusRef = useRef<Status>('idle');
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const [users, setUsers] = useState<string[]>([]);
  const [username, setUsername] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [profileInput, setProfileInput] = useState('');
  const [stats, setStats] = useState<Record<string, UserStats>>({});
  const [activeStats, setActiveStats] = useState<UserStats>(INITIAL_STATS);
  const [snake, setSnake] = useState<Point[]>(INITIAL_SNAKE);
  const [direction, setDirection] = useState<Direction>('right');
  const [food, setFood] = useState<Point>(foodRef.current);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState(s.msgCreate);

  useEffect(() => {
    const savedUsers = localStorage.getItem(USER_NAMES_KEY);
    const savedStats = localStorage.getItem(USER_STATS_KEY);
    if (savedUsers) setUsers(JSON.parse(savedUsers));
    if (savedStats) setStats(JSON.parse(savedStats));
  }, []);

  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);
  useEffect(() => {
    snakeRef.current = snake;
  }, [snake]);
  useEffect(() => {
    foodRef.current = food;
  }, [food]);
  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  // Continuous render loop while the board is on screen — keeps the food glow alive.
  useEffect(() => {
    if (status === 'idle') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = CANVAS_SIZE * dpr;
    canvas.height = CANVAS_SIZE * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    let raf = 0;
    const loop = (time: number) => {
      drawBoard(
        ctx,
        snakeRef.current,
        foodRef.current,
        directionRef.current,
        time,
        statusRef.current === 'paused' || statusRef.current === 'over'
      );
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [status]);

  const changeDirection = (next: Direction) => {
    if (statusRef.current !== 'playing') return;
    const current = queuedDirectionRef.current ?? directionRef.current;
    if (OPPOSITE[next] === current || next === current) return;
    queuedDirectionRef.current = next;
  };

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      // Never hijack keys while the user is typing in a field.
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      // Game controls only apply once a game is on screen.
      if (statusRef.current === 'idle') return;

      if (event.key === ' ' || event.key === 'p' || event.key === 'P') {
        if (statusRef.current === 'playing' || statusRef.current === 'paused') {
          event.preventDefault();
          togglePause();
        }
        return;
      }

      const keyDirection: Record<string, Direction | undefined> = {
        ArrowUp: 'up',
        ArrowDown: 'down',
        ArrowLeft: 'left',
        ArrowRight: 'right',
        w: 'up',
        W: 'up',
        s: 'down',
        S: 'down',
        a: 'left',
        A: 'left',
        d: 'right',
        D: 'right'
      };
      const next = keyDirection[event.key];
      if (!next) return;
      event.preventDefault();
      changeDirection(next);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the document language + direction (RTL for Arabic) in sync.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';
  }, [lang]);

  // Console gamepad: D-pad/stick steers, A/Start begins-or-pauses, B/Back exits.
  useEffect(() => {
    const stop = startGamepad({
      onDir: (d) => actionsRef.current?.steer(d),
      onButton: (b) => {
        const a = actionsRef.current;
        if (!a) return;
        const st = statusRef.current;
        if (b === 'A' || b === 'start') {
          if (st === 'playing' || st === 'paused') a.pause();
          else if (st === 'over') a.restart();
          else a.start();
        } else if (b === 'B' || b === 'back') {
          if (st !== 'idle') a.exit();
        }
      }
    });
    return stop;
  }, []);

  useEffect(() => {
    if (status !== 'playing') return;
    const interval = window.setInterval(() => {
      // All game logic runs here with refs as the source of truth — keeping it
      // out of the setState updater so it stays correct under StrictMode's
      // double-invocation of updater functions.
      if (queuedDirectionRef.current) {
        directionRef.current = queuedDirectionRef.current;
        setDirection(queuedDirectionRef.current);
        queuedDirectionRef.current = null;
      }

      const currentSnake = snakeRef.current;
      const head = currentSnake[0];
      const next = nextHead(head, directionRef.current);
      const collided = currentSnake.some(
        (segment, idx) => idx < currentSnake.length - 1 && segment.x === next.x && segment.y === next.y
      );
      if (collided) {
        setStatus('over');
        setMessage(s.msgGameOver);
        updateStats();
        return;
      }

      const ate = next.x === foodRef.current.x && next.y === foodRef.current.y;
      const nextSnake = [
        next,
        ...currentSnake.slice(0, ate ? currentSnake.length : currentSnake.length - 1)
      ];

      if (ate) {
        const nextScore = scoreRef.current + 1;
        scoreRef.current = nextScore;
        setScore(nextScore);
        const placed = randomFood(nextSnake);
        foodRef.current = placed;
        setFood(placed);
      }

      snakeRef.current = nextSnake;
      setSnake(nextSnake);
    }, TICK_MS);
    return () => window.clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  useEffect(() => {
    setActiveStats(username && stats[username] ? stats[username] : INITIAL_STATS);
  }, [username, stats]);

  const updateStats = () => {
    if (!username) return;
    const current = stats[username] || INITIAL_STATS;
    const nextStats = {
      bestScore: Math.max(current.bestScore, scoreRef.current),
      gamesPlayed: current.gamesPlayed + 1,
      totalFood: current.totalFood + scoreRef.current,
      lastScore: scoreRef.current
    };
    const nextStatsMap = { ...stats, [username]: nextStats };
    setStats(nextStatsMap);
    setActiveStats(nextStats);
    localStorage.setItem(USER_STATS_KEY, JSON.stringify(nextStatsMap));
  };

  const saveUsers = (nextUsers: string[]) => {
    setUsers(nextUsers);
    localStorage.setItem(USER_NAMES_KEY, JSON.stringify(nextUsers));
  };

  const resetBoard = () => {
    scoreRef.current = 0;
    setScore(0);
    snakeRef.current = INITIAL_SNAKE;
    setSnake(INITIAL_SNAKE);
    directionRef.current = 'right';
    queuedDirectionRef.current = null;
    setDirection('right');
    const placed = randomFood(INITIAL_SNAKE);
    foodRef.current = placed;
    setFood(placed);
  };

  const createProfile = () => {
    const profileName = profileInput.trim();
    if (!profileName) {
      setMessage(s.msgEnterName);
      return;
    }
    const nextUsers = users.includes(profileName) ? users : [profileName, ...users];
    saveUsers(nextUsers);

    if (!stats[profileName]) {
      const nextStatsMap = { ...stats, [profileName]: INITIAL_STATS };
      setStats(nextStatsMap);
      localStorage.setItem(USER_STATS_KEY, JSON.stringify(nextStatsMap));
    }

    setUsername(profileName);
    setSelectedUser(profileName);
    setProfileInput('');
    setMessage(s.msgReady);
    setStatus('idle');
    resetBoard();
    setActiveStats(stats[profileName] || INITIAL_STATS);
  };

  const deleteProfile = (profileName: string) => {
    const nextUsers = users.filter((user) => user !== profileName);
    saveUsers(nextUsers);
    const nextStats = { ...stats };
    delete nextStats[profileName];
    setStats(nextStats);
    localStorage.setItem(USER_STATS_KEY, JSON.stringify(nextStats));
    if (username === profileName) {
      setUsername('');
      setSelectedUser('');
      setMessage(s.msgRemoved);
    }
  };

  const selectProfile = (profileName: string) => {
    setUsername(profileName);
    setSelectedUser(profileName);
    setProfileInput('');
    setMessage(s.msgLoaded);
    setStatus('idle');
    resetBoard();
  };

  const handleStart = () => {
    if (!username) {
      setMessage(s.msgPick);
      return;
    }
    resetBoard();
    setStatus('playing');
    setMessage(s.msgControls);
  };

  // Start straight from a controller: if there's no profile yet, spin up a guest
  // one so a pad user is never stuck at the mouse-only menu.
  const padStart = () => {
    if (username) {
      handleStart();
      return;
    }
    const name = users[0] ?? 'Player 1';
    if (!users.includes(name)) saveUsers([name, ...users]);
    if (!stats[name]) {
      const nextStatsMap = { ...stats, [name]: INITIAL_STATS };
      setStats(nextStatsMap);
      localStorage.setItem(USER_STATS_KEY, JSON.stringify(nextStatsMap));
    }
    setUsername(name);
    setSelectedUser(name);
    resetBoard();
    setStatus('playing');
    setMessage(s.msgControls);
  };

  const togglePause = () => {
    if (statusRef.current === 'playing') {
      setStatus('paused');
      setMessage(s.msgPaused);
    } else if (statusRef.current === 'paused') {
      setStatus('playing');
      setMessage(s.msgBack);
    }
  };

  const exitToDashboard = () => {
    setStatus('idle');
    setMessage(username ? s.msgAgain : s.msgCreate);
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    const t = event.touches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY };
  };
  const handleTouchEnd = (event: React.TouchEvent) => {
    const start = touchStartRef.current;
    if (!start) return;
    const t = event.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    touchStartRef.current = null;
    if (Math.abs(dx) < 24 && Math.abs(dy) < 24) return;
    if (Math.abs(dx) > Math.abs(dy)) {
      changeDirection(dx > 0 ? 'right' : 'left');
    } else {
      changeDirection(dy > 0 ? 'down' : 'up');
    }
  };

  const leaderboard = useMemo(
    () =>
      Object.entries(stats)
        .filter(([, s]) => s.gamesPlayed > 0)
        .sort(([, a], [, b]) => b.bestScore - a.bestScore)
        .slice(0, 5),
    [stats]
  );

  const bestScore = activeStats.bestScore;

  // Publish the freshest handlers for the gamepad loop each render.
  actionsRef.current = {
    steer: changeDirection,
    start: padStart,
    restart: handleStart,
    pause: togglePause,
    exit: exitToDashboard
  };

  if (status !== 'idle') {
    return (
      <div className="game-screen">
        <header className="game-bar">
          <button className="ghost-button" onClick={exitToDashboard} aria-label={s.backToDash}>
            <span aria-hidden>‹</span> {s.dashboard}
          </button>
          <div className="game-bar-center">
            <span className="player-tag">{username}</span>
          </div>
          <button className="ghost-button" onClick={togglePause}>
            {status === 'paused' ? s.resume : s.pause}
          </button>
        </header>

        <div className="score-strip">
          <div className="score-chip">
            <span>{s.score}</span>
            <strong>{score}</strong>
          </div>
          <div className="score-chip">
            <span>{s.best}</span>
            <strong>{Math.max(bestScore, score)}</strong>
          </div>
          <div className="score-chip">
            <span>{s.length}</span>
            <strong>{snake.length}</strong>
          </div>
        </div>

        <div
          className="board-stage"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="board-frame">
            <canvas ref={canvasRef} className="game-canvas" style={{ aspectRatio: '1 / 1' }} />

            {status === 'paused' && (
              <div className="board-overlay">
                <div className="overlay-card">
                  <p className="overlay-eyebrow">{s.pausedEyebrow}</p>
                  <h2>{s.pausedTitle}</h2>
                  <div className="overlay-actions">
                    <button className="button-primary" onClick={togglePause}>
                      {s.resume}
                    </button>
                    <button className="button-secondary" onClick={exitToDashboard}>
                      {s.exit}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {status === 'over' && (
              <div className="board-overlay">
                <div className="overlay-card">
                  <p className="overlay-eyebrow">{s.overEyebrow}</p>
                  <h2>{score > bestScore ? s.overBest : s.overNice}</h2>
                  <div className="overlay-score">
                    <div>
                      <span>{s.score}</span>
                      <strong>{score}</strong>
                    </div>
                    <div>
                      <span>{s.best}</span>
                      <strong>{Math.max(bestScore, score)}</strong>
                    </div>
                  </div>
                  <div className="overlay-actions">
                    <button className="button-primary" onClick={handleStart}>
                      {s.playAgain}
                    </button>
                    <button className="button-secondary" onClick={exitToDashboard}>
                      {s.exit}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="touch-dpad" aria-hidden={status !== 'playing'}>
          <button className="dpad-btn up" onClick={() => changeDirection('up')}>
            ▲
          </button>
          <button className="dpad-btn left" onClick={() => changeDirection('left')}>
            ◀
          </button>
          <button className="dpad-btn right" onClick={() => changeDirection('right')}>
            ▶
          </button>
          <button className="dpad-btn down" onClick={() => changeDirection('down')}>
            ▼
          </button>
        </div>

        <p className="game-hint">{s.hint}</p>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <section className="panel hero-panel">
        <div className="hero-headline">
          <div>
            <p className="eyebrow">{s.eyebrow}</p>
            <h1>
              {s.heroPre}
              <span className="accent">{s.heroAccent}</span>
              {s.heroPost}
            </h1>
            <p className="hero-copy">{s.heroCopy}</p>
          </div>
          <div className="hero-side">
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
            <span className="pill">● {s.live}</span>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="card profile-card">
            <div className="card-heading">
              <div>
                <h2>{s.profiles}</h2>
                <p className="subtext">{s.profilesSub}</p>
              </div>
              <span className="meta-pill">{s.saved(users.length)}</span>
            </div>

            <div className="profile-list">
              {users.length > 0 ? (
                users.map((user) => (
                  <div
                    key={user}
                    className={`profile-chip ${selectedUser === user ? 'selected' : ''}`}
                  >
                    <button type="button" className="profile-chip-main" onClick={() => selectProfile(user)}>
                      <span className="avatar">{user.charAt(0).toUpperCase()}</span>
                      {user}
                    </button>
                    <button
                      type="button"
                      className="profile-chip-remove"
                      aria-label={s.remove(user)}
                      onClick={() => deleteProfile(user)}
                    >
                      ×
                    </button>
                  </div>
                ))
              ) : (
                <p className="empty-state">{s.noProfiles}</p>
              )}
            </div>

            <label className="field-label">
              {s.newUsername}
              <input
                value={profileInput}
                onChange={(event) => setProfileInput(event.target.value)}
                onKeyDown={(event) => event.key === 'Enter' && createProfile()}
                type="text"
                maxLength={16}
                placeholder={s.typeUsername}
              />
            </label>

            <button className="button-primary button-full" onClick={createProfile}>
              {s.saveProfile}
            </button>
          </div>

          <div className="card stats-card">
            <div className="card-heading">
              <div>
                <h2>{username ? s.statsMine(username) : s.statsYours}</h2>
                <p className="subtext">{s.statsSub}</p>
              </div>
              <span className="meta-pill">{username ? s.ready : s.noPlayer}</span>
            </div>

            <div className="stat-grid">
              <div className="stat-cell highlight">
                <span>{s.bestScore}</span>
                <strong>{activeStats.bestScore}</strong>
              </div>
              <div className="stat-cell">
                <span>{s.gamesPlayed}</span>
                <strong>{activeStats.gamesPlayed}</strong>
              </div>
              <div className="stat-cell">
                <span>{s.foodEaten}</span>
                <strong>{activeStats.totalFood}</strong>
              </div>
              <div className="stat-cell">
                <span>{s.lastScore}</span>
                <strong>{activeStats.lastScore}</strong>
              </div>
            </div>

            <div className="leaderboard">
              <p className="leaderboard-title">{s.leaderboard}</p>
              {leaderboard.length > 0 ? (
                <ol className="leaderboard-list">
                  {leaderboard.map(([name, s], index) => (
                    <li
                      key={name}
                      className={`leaderboard-item ${name === username ? 'is-me' : ''}`}
                    >
                      <span className="rank">{index + 1}</span>
                      <span className="lb-name">{name}</span>
                      <strong>{s.bestScore}</strong>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="empty-state small">{s.lbEmpty}</p>
              )}
            </div>
          </div>
        </div>

        <div className="action-row">
          <button className="button-primary button-lg" onClick={handleStart} disabled={!username}>
            {s.startGame}
          </button>
          <p className="status-copy">{message}</p>
        </div>
      </section>
    </div>
  );
}

export default App;
