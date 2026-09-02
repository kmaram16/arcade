import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Game, type Camera, type Stats } from './engine';

const NAMES_KEY = 'polican-names';
const SCORES_KEY = 'polican-best-by-user';

type Status = 'menu' | 'playing' | 'caught' | 'lost';
type Scores = Record<string, number>;

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gameRef = useRef<Game | null>(null);
  const statusRef = useRef<Status>('menu');

  const [status, setStatus] = useState<Status>('menu');
  const [stats, setStats] = useState<Stats>({ distance: 0, dogs: 0, gap: 9 });
  const [view, setView] = useState<Camera>('third');
  const [muted, setMuted] = useState(false);

  const [names, setNames] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState('');
  const [username, setUsername] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [scores, setScores] = useState<Scores>({});

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

  const record = (distance: number) => {
    if (!username) return;
    if (distance > (scores[username] || 0)) {
      const next = { ...scores, [username]: distance };
      setScores(next);
      localStorage.setItem(SCORES_KEY, JSON.stringify(next));
    }
  };

  // Build the WebGL game once the canvas exists, and tear it down on exit.
  useEffect(() => {
    if (status === 'menu') return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const game = new Game(canvas, {
      onStats: setStats,
      onCaught: ({ distance }) => {
        record(distance);
        statusRef.current = 'caught';
        setStatus('caught');
      },
      onLost: ({ distance }) => {
        record(distance);
        statusRef.current = 'lost';
        setStatus('lost');
      }
    });
    gameRef.current = game;
    game.setView(view);
    game.setMuted(muted);
    game.start();

    const onResize = () => game.resize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      game.dispose();
      gameRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status === 'menu']);

  useEffect(() => {
    gameRef.current?.setView(view);
  }, [view]);
  useEffect(() => {
    gameRef.current?.setMuted(muted);
  }, [muted]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && t.tagName === 'INPUT') return;
      const g = gameRef.current;
      if (!g || statusRef.current !== 'playing') return;
      switch (e.key) {
        case 'ArrowLeft':
        case 'a':
          e.preventDefault();
          g.move(-1);
          break;
        case 'ArrowRight':
        case 'd':
          e.preventDefault();
          g.move(1);
          break;
        case 'ArrowUp':
        case 'w':
        case ' ':
          e.preventDefault();
          g.jump();
          break;
        case 'ArrowDown':
        case 's':
          e.preventDefault();
          g.slide();
          break;
        case 'c':
          setView((v) => (v === 'third' ? 'first' : 'third'));
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Touch: swipe anywhere on the view. Left/right to change lane, up to jump,
  // down to slide — the same grammar as the rest of the arcade.
  const swipe = useRef<{ x: number; y: number; t: number } | null>(null);
  const onPointerDown = (e: React.PointerEvent) => {
    swipe.current = { x: e.clientX, y: e.clientY, t: e.timeStamp };
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const s = swipe.current;
    swipe.current = null;
    const g = gameRef.current;
    if (!s || !g || statusRef.current !== 'playing') return;
    const dx = e.clientX - s.x;
    const dy = e.clientY - s.y;
    if (Math.abs(dx) < 24 && Math.abs(dy) < 24) {
      g.jump(); // a plain tap jumps
      return;
    }
    if (Math.abs(dx) > Math.abs(dy)) g.move(dx > 0 ? 1 : -1);
    else if (dy < 0) g.jump();
    else g.slide();
  };

  const startGame = () => {
    const name = selectedName || username;
    if (!name) return;
    setUsername(name);
    setStatus('playing');
  };

  const playAgain = () => {
    gameRef.current?.start();
    setStatus('playing');
  };

  const toMenu = () => setStatus('menu');

  if (status === 'menu') {
    return (
      <div className="app-shell menu-shell">
        <div className="menu-panel">
          <p className="eyebrow">Premium Arcade</p>
          <h1>
            Poli<span className="accent">cán</span> 3D
          </h1>
          <div className="menu-hero">🐶</div>
          <p className="menu-copy">
            Persigue a Pedrito por Ciudad Okey. Coge salchichas para acercarte… y ni se te ocurra tocar
            una pelota.
          </p>

          <div className="players">
            {names.length > 0 ? (
              names.map((n) => (
                <div key={n} className={`player-chip ${selectedName === n ? 'selected' : ''}`}>
                  <button type="button" className="player-chip-main" onClick={() => setSelectedName(n)}>
                    <span className="avatar">{n.charAt(0).toUpperCase()}</span>
                    <span className="player-name">{n}</span>
                    <span className="chip-best">🏆 {scores[n] || 0} m</span>
                  </button>
                  <button
                    type="button"
                    className="player-chip-remove"
                    aria-label={`Quitar ${n}`}
                    onClick={() => removeName(n)}
                  >
                    ×
                  </button>
                </div>
              ))
            ) : (
              <p className="empty">Aún no hay jugadores — añade uno abajo.</p>
            )}
          </div>

          <div className="add-row">
            <input
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addName()}
              type="text"
              maxLength={16}
              placeholder="Añade un nombre"
            />
            <button className="add-button" onClick={addName} disabled={!nameInput.trim()}>
              + Añadir
            </button>
          </div>

          <button className="button-primary button-full" onClick={startGame} disabled={!selectedName}>
            ▶ Empezar la persecución
          </button>

          {selectedName && (
            <p className="best-line">
              Juegas como <strong>{selectedName}</strong> · 🏆 Récord {scores[selectedName] || 0} m
            </p>
          )}
        </div>
      </div>
    );
  }

  // How close Petey is, as a 0-100 bar.
  const closeness = Math.max(0, Math.min(100, ((22 - stats.gap) / (22 - 1.6)) * 100));

  return (
    <div className="app-shell">
      <header className="game-bar">
        <span className="player-tag">🐶 {username}</span>
        <div className="bar-actions">
          <button className="chip-button" onClick={() => setView(view === 'third' ? 'first' : 'third')}>
            {view === 'third' ? '🎥 3ª persona' : '👁️ 1ª persona'}
          </button>
          <button className="chip-button" onClick={() => setMuted((m) => !m)} aria-label="Sonido">
            {muted ? '🔇' : '🔊'}
          </button>
          <button className="stop-button" onClick={toMenu}>
            ■
          </button>
        </div>
      </header>

      <div className="score-strip">
        <div className="score-chip">
          <span>Distancia</span>
          <strong>{stats.distance} m</strong>
        </div>
        <div className="score-chip">
          <span>Salchichas</span>
          <strong>{stats.dogs}</strong>
        </div>
        <div className="score-chip">
          <span>Récord</span>
          <strong>{Math.max(best, stats.distance)} m</strong>
        </div>
      </div>

      <div className="chase-meter" aria-label="Cerca de Pedrito">
        <div className="chase-fill" style={{ width: `${closeness}%` }} />
        <span className="chase-label">🐱 a {stats.gap.toFixed(1)} m</span>
      </div>

      <div className="stage" onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
        <canvas ref={canvasRef} className="game-canvas" />

        {(status === 'caught' || status === 'lost') && (
          <div className="overlay">
            <div className="overlay-card">
              <p className="overlay-eyebrow">{status === 'caught' ? '¡Atrapado!' : 'Se escapó'}</p>
              <h2>{status === 'caught' ? '¡Le pillaste! 🎉' : 'Pedrito escapó 🐱'}</h2>
              <div className="overlay-score">
                <div>
                  <span>Distancia</span>
                  <strong>{stats.distance} m</strong>
                </div>
                <div>
                  <span>Salchichas</span>
                  <strong>{stats.dogs}</strong>
                </div>
              </div>
              <div className="overlay-actions">
                <button className="button-primary" onClick={playAgain}>
                  ↻ Otra vez
                </button>
                <button className="button-secondary" onClick={toMenu}>
                  ‹ Menú
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="controls">
        <button className="ctrl-btn" onPointerDown={() => gameRef.current?.move(-1)} aria-label="Izquierda">
          ◀
        </button>
        <button className="ctrl-btn" onPointerDown={() => gameRef.current?.jump()} aria-label="Saltar">
          ▲
        </button>
        <button className="ctrl-btn" onPointerDown={() => gameRef.current?.slide()} aria-label="Deslizar">
          ▼
        </button>
        <button className="ctrl-btn" onPointerDown={() => gameRef.current?.move(1)} aria-label="Derecha">
          ▶
        </button>
      </div>

      <p className="hint hint-keys">← → carril · ↑ saltar · ↓ deslizar · C cambia la cámara</p>
      <p className="hint hint-touch">Desliza para moverte · toca para saltar</p>
    </div>
  );
}

export default App;
