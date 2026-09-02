import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Game, type Stats } from './engine';
import { SKINS, type Skin } from './skins';

type Screen = 'menu' | 'select' | 'play' | 'dead';

const BEST_KEY = 'tagkamyar.best';
const SKIN_KEY = 'tagkamyar.skin';
const BANK_KEY = 'tagkamyar.bank'; // coins saved across runs, spent to unlock skins
const UNLOCK_KEY = 'tagkamyar.unlocked';

function readBest(): number {
  const v = Number(localStorage.getItem(BEST_KEY));
  return Number.isFinite(v) ? v : 0;
}
function readBank(): number {
  const v = Number(localStorage.getItem(BANK_KEY));
  return Number.isFinite(v) ? v : 0;
}
function readUnlocked(): string[] {
  try {
    const a = JSON.parse(localStorage.getItem(UNLOCK_KEY) ?? '[]');
    return Array.isArray(a) ? [...new Set(['kamyar', ...a])] : ['kamyar'];
  } catch {
    return ['kamyar'];
  }
}

/** A little CSS portrait of a skin for the select grid (no WebGL needed). */
function Avatar({ skin, size = 64 }: { skin: Skin; size?: number }) {
  const p = skin.palette;
  const s = size / 64;
  if (p.isPanda) {
    return (
      <div className="avatar" style={{ width: size, height: size }}>
        <span className="av-ear" style={{ left: 8 * s }} />
        <span className="av-ear" style={{ right: 8 * s }} />
        <span className="av-head" style={{ background: '#ffffff' }}>
          <span className="av-patch" style={{ left: 10 * s }} />
          <span className="av-patch" style={{ right: 10 * s }} />
        </span>
        <span className="av-body" style={{ background: '#f1f5f9' }} />
      </div>
    );
  }
  return (
    <div className="avatar" style={{ width: size, height: size }}>
      <span className="av-hair" style={{ background: p.hair }} />
      <span className="av-head" style={{ background: p.skin }}>
        <span className="av-eye" style={{ left: 18 * s, background: p.eyes }} />
        <span className="av-eye" style={{ right: 18 * s, background: p.eyes }} />
        {p.headband && <span className="av-band" style={{ background: p.headband }} />}
        {p.helmet && <span className="av-helmet" />}
      </span>
      <span className="av-body" style={{ background: p.shirt }} />
    </div>
  );
}

const params = new URLSearchParams(window.location.search);
const urlSkin = SKINS.find((s) => s.id === params.get('skin'))?.id;

export default function App() {
  const [screen, setScreen] = useState<Screen>(
    params.get('play') === '1' ? 'play' : params.get('screen') === 'select' ? 'select' : 'menu'
  );
  const [skinId, setSkinId] = useState<string>(() => urlSkin ?? localStorage.getItem(SKIN_KEY) ?? SKINS[0].id);
  const [best, setBest] = useState<number>(readBest);
  const [bank, setBank] = useState<number>(readBank);
  const [unlocked, setUnlocked] = useState<string[]>(readUnlocked);
  const [muted, setMuted] = useState<boolean>(() => localStorage.getItem('tagkamyar.muted') === '1');
  const [paused, setPaused] = useState(false);
  const [stats, setStats] = useState<Stats>({ distance: 0, coins: 0, world: 'Ciudad', chase: 0 });
  const [dead, setDead] = useState<{ distance: number; coins: number }>({ distance: 0, coins: 0 });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gameRef = useRef<Game | null>(null);

  const isUnlocked = (id: string) => unlocked.includes(id);
  // Never play as a locked skin (e.g. stale storage or a ?skin= deep link).
  const skin = SKINS.find((s) => s.id === skinId && isUnlocked(s.id)) ?? SKINS[0];

  // Boot / tear down the 3D game whenever we enter or leave the play screen.
  useEffect(() => {
    if (screen !== 'play' || !canvasRef.current) return;
    const game = new Game(canvasRef.current, skin.palette, {
      onStats: setStats,
      onDead: (d) => {
        setDead(d);
        setBest((b) => {
          const nb = Math.max(b, d.distance);
          localStorage.setItem(BEST_KEY, String(nb));
          return nb;
        });
        // Banked coins carry over between runs and buy new characters.
        setBank((b) => {
          const nb = b + d.coins;
          localStorage.setItem(BANK_KEY, String(nb));
          return nb;
        });
        setScreen('dead');
      }
    });
    game.setMuted(muted);
    gameRef.current = game;
    game.start();
    return () => {
      game.dispose();
      gameRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, skinId]);

  const startPlay = () => {
    setPaused(false);
    setStats({ distance: 0, coins: 0, world: 'Ciudad', chase: 0 });
    setScreen('play');
  };

  const toggleMute = () => {
    setMuted((m) => {
      const nm = !m;
      localStorage.setItem('tagkamyar.muted', nm ? '1' : '0');
      gameRef.current?.setMuted(nm);
      return nm;
    });
  };

  const togglePause = () => {
    setPaused((p) => {
      const np = !p;
      gameRef.current?.setPaused(np);
      return np;
    });
  };

  const chosen = (id: string) => {
    setSkinId(id);
    localStorage.setItem(SKIN_KEY, id);
  };

  // Pick a skin in the select grid: choose it if unlocked, or buy it if you have
  // enough banked coins.
  const pick = (s: Skin) => {
    if (isUnlocked(s.id)) {
      chosen(s.id);
      return;
    }
    if (bank < s.cost) return;
    const nb = bank - s.cost;
    setBank(nb);
    localStorage.setItem(BANK_KEY, String(nb));
    const nu = [...new Set([...unlocked, s.id])];
    setUnlocked(nu);
    localStorage.setItem(UNLOCK_KEY, JSON.stringify(nu));
    chosen(s.id);
  };

  return (
    <div className="stage">
      {screen === 'play' && <canvas ref={canvasRef} className="game-canvas" />}

      {/* ---- HUD ---- */}
      {screen === 'play' && (
        <div className="hud">
          <div className="hud-top">
            <div className="hud-chip">
              <span className="hud-icon">🏁</span>
              <b>{stats.distance}</b> m
            </div>
            <div className="hud-chip">
              <span className="hud-icon">🪙</span>
              <b>{stats.coins}</b>
            </div>
            <div className="hud-world">🌍 {stats.world}</div>
            <div className="hud-right">
              <button className="mini-btn" onClick={togglePause} aria-label="Pausa">
                {paused ? '▶' : 'II'}
              </button>
              <button className="mini-btn" onClick={toggleMute} aria-label="Sonido">
                {muted ? '🔇' : '🔊'}
              </button>
            </div>
          </div>

          <div className="chase-wrap" title="Norberto">
            <span className="chase-face">👣</span>
            <div className="chase-bar">
              <div className="chase-fill" style={{ width: `${Math.round(stats.chase * 100)}%` }} />
            </div>
            <span className="chase-face">😈</span>
          </div>

          {/* Touch controls */}
          <div className="touch-controls">
            <button className="tc tc-left" onClick={() => gameRef.current?.moveLane(-1)} aria-label="Izquierda">◀</button>
            <button className="tc tc-jump" onClick={() => gameRef.current?.jump()} aria-label="Saltar">⤴ Saltar</button>
            <button className="tc tc-slide" onClick={() => gameRef.current?.slide()} aria-label="Deslizar">⤵ Deslizar</button>
            <button className="tc tc-right" onClick={() => gameRef.current?.moveLane(1)} aria-label="Derecha">▶</button>
          </div>

          {paused && (
            <div className="overlay">
              <div className="panel">
                <h2>Pausa</h2>
                <div className="row">
                  <button className="btn primary" onClick={togglePause}>Seguir</button>
                  <button className="btn" onClick={() => setScreen('menu')}>Menú</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ---- Menu ---- */}
      {screen === 'menu' && (
        <div className="overlay">
          <div className="panel menu">
            <p className="eyebrow">Premium Arcade</p>
            <h1>
              Tag con <span className="accent">Kamyar</span>
            </h1>
            <p className="lede">
              Corre por muchos mundos, salta y deslízate para esquivar todo… y no dejes que
              <b> Norberto</b> te atrape. 😈
            </p>

            <div className="chosen-row">
              <Avatar skin={skin} size={64} />
              <div>
                <div className="chosen-label">Personaje</div>
                <div className="chosen-name">{skin.name}</div>
              </div>
              <button className="btn" onClick={() => setScreen('select')}>Cambiar</button>
            </div>

            <div className="row">
              <button className="btn primary big" onClick={startPlay}>▶ Jugar</button>
            </div>

            <div className="hint">
              <b>Teclado:</b> ← → carriles · ↑/Espacio saltar · ↓ deslizar.<br />
              <b>Móvil:</b> desliza ← → para cambiar de carril, ↑ para saltar, ↓ para deslizar (o usa los botones).
            </div>

            <div className="best-row">🏆 Mejor: <b>{best} m</b> &nbsp;·&nbsp; 🪙 <b>{bank}</b></div>
          </div>
        </div>
      )}

      {/* ---- Character select ---- */}
      {screen === 'select' && (
        <div className="overlay">
          <div className="panel select">
            <h2>Elige tu personaje</h2>
            <p className="bank-line">
              Tienes <b>🪙 {bank}</b> · gana monedas corriendo para desbloquear más
            </p>
            <div className="skin-grid">
              {SKINS.map((s) => {
                const owned = isUnlocked(s.id);
                const affordable = bank >= s.cost;
                const selected = s.id === skin.id;
                return (
                  <button
                    key={s.id}
                    className={`skin-card ${selected ? 'current' : ''} ${owned ? '' : 'locked'}`}
                    onClick={() => pick(s)}
                    disabled={!owned && !affordable}
                  >
                    <div className="skin-av">
                      <Avatar skin={s} size={64} />
                      {!owned && <span className="lock">🔒</span>}
                    </div>
                    <span className="skin-name">{s.name}</span>
                    {owned ? (
                      <span className={`skin-tag ${selected ? 'sel' : ''}`}>{selected ? '✓ Elegido' : 'Elegir'}</span>
                    ) : (
                      <span className={`skin-tag ${affordable ? 'buy' : 'cost'}`}>
                        {affordable ? 'Desbloquear' : `🪙 ${s.cost}`}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            <div className="row">
              <button className="btn primary" onClick={() => setScreen('menu')}>Listo</button>
            </div>
          </div>
        </div>
      )}

      {/* ---- Game over ---- */}
      {screen === 'dead' && (
        <div className="overlay">
          <div className="panel dead">
            <div className="dead-emoji">😈🏃💨</div>
            <h2>¡Norberto te atrapó!</h2>
            <div className="score-grid">
              <div className="score">
                <span>Distancia</span>
                <b>{dead.distance} m</b>
              </div>
              <div className="score">
                <span>Monedas</span>
                <b>🪙 {dead.coins}</b>
              </div>
              <div className="score">
                <span>Mejor</span>
                <b>🏆 {best} m</b>
              </div>
            </div>
            {dead.distance >= best && dead.distance > 0 && <div className="record">¡Nuevo récord! 🎉</div>}
            <div className="row">
              <button className="btn primary big" onClick={startPlay}>↻ Reintentar</button>
              <button className="btn" onClick={() => setScreen('menu')}>Menú</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
