import { useEffect, useRef, useState } from 'react';
import './App.css';
import { THEME, type ConsoleGame } from './theme';
import { LANGS, RTL_LANGS, STR, initialLang, saveLang, type Lang } from './i18n';
import { startGamepad } from './gamepad';
import { startPresence, type Presence } from './presence';

const PLAYING: Record<Lang, string> = {
  es: 'jugando ahora',
  en: 'playing now',
  pt: 'jogando agora',
  fr: 'jouent',
  de: 'spielen gerade',
  it: 'stanno giocando',
  zh: '人在玩',
  ja: '人がプレイ中',
  ar: 'يلعبون الآن'
};

// Where a console game lives: under the same origin in production (sibling of
// this launcher), or its own dev port locally. The chosen language rides along.
function gameUrl(g: ConsoleGame, lang: Lang): string {
  const q = `?lang=${lang}`;
  if (import.meta.env.PROD) return `../${g.id}/${q}`;
  const host = typeof window !== 'undefined' ? window.location.hostname : 'localhost';
  return `http://${host}:${g.devPort}/${q}`;
}
function arcadeUrl(): string {
  if (import.meta.env.PROD) return '../';
  const host = typeof window !== 'undefined' ? window.location.hostname : 'localhost';
  return `http://${host}:4100`;
}

function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const s = STR[lang];
  const games = THEME.games;
  const [sel, setSel] = useState(() => Math.max(0, games.findIndex((g) => g.status === 'ready')));
  const selRef = useRef(sel);
  selRef.current = sel;
  const langRef = useRef(lang);
  langRef.current = lang;

  // Real presence (people on any arcade screen right now), with a small fallback.
  const [presence, setPresence] = useState<Presence>({ total: 1, rooms: {}, connected: false });
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const stop = startPresence(THEME.short.toLowerCase(), setPresence);
    const id = window.setInterval(() => setTick((t) => t + 1), 10000);
    return () => {
      stop();
      window.clearInterval(id);
    };
  }, []);
  const players = presence.connected ? presence.total : 8 + ((tick * 3 + 7) % 18);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';
    const r = document.documentElement.style;
    r.setProperty('--bg', THEME.bg);
    r.setProperty('--accent', THEME.accent);
    r.setProperty('--accent2', THEME.accent2);
  }, [lang]);

  const cols = THEME.skin === 'ps2' ? 2 : games.length;

  const move = (dir: 'up' | 'down' | 'left' | 'right') => {
    setSel((i) => {
      const n = games.length;
      if (THEME.skin === 'ps3') {
        if (dir === 'left') return (i - 1 + n) % n;
        if (dir === 'right') return (i + 1) % n;
        return i;
      }
      if (dir === 'left') return Math.max(0, i - 1);
      if (dir === 'right') return Math.min(n - 1, i + 1);
      if (dir === 'up') return Math.max(0, i - cols);
      return Math.min(n - 1, i + cols);
    });
  };

  const open = (g: ConsoleGame) => {
    if (g.status !== 'ready') return;
    window.location.href = gameUrl(g, langRef.current);
  };
  const goBack = () => {
    window.location.href = arcadeUrl();
  };

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && t.tagName === 'SELECT') return;
      if (e.key === 'ArrowLeft') move('left');
      else if (e.key === 'ArrowRight') move('right');
      else if (e.key === 'ArrowUp') move('up');
      else if (e.key === 'ArrowDown') move('down');
      else if (e.key === 'Enter' || e.key === ' ') open(games[selRef.current]);
      else if (e.key === 'Escape') goBack();
      else return;
      e.preventDefault();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Gamepad
  useEffect(() => {
    const stop = startGamepad({
      onDir: (d) => move(d),
      onButton: (b) => {
        if (b === 'A' || b === 'start') open(games[selRef.current]);
        else if (b === 'B' || b === 'back') goBack();
      }
    });
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedGame = games[sel];

  return (
    <div className={`console skin-${THEME.skin}`}>
      <div className="scanlines" aria-hidden />
      <header className="c-head">
        <button className="c-back" onClick={goBack}>
          {s.back}
        </button>
        <div className="c-brand">
          <span className="c-ps">PlayStation</span>
          <span className="c-num">{THEME.short.replace('PS', '')}</span>
        </div>
        <select
          className="c-lang"
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
      </header>

      <div className="c-subhead">
        <p className="c-choose">{s.choose}</p>
        <span className="c-players">👥 {players} {PLAYING[lang]}</span>
      </div>

      {THEME.skin === 'ps2' ? (
        <div className="grid">
          {games.map((g, i) => (
            <button
              key={g.id}
              className={`tile ${i === sel ? 'sel' : ''} ${g.status}`}
              onClick={() => {
                setSel(i);
                open(g);
              }}
            >
              <span className="tile-icon" style={{ background: `linear-gradient(135deg, ${g.tint[0]}, ${g.tint[1]})` }}>
                {g.icon}
              </span>
              <span className="tile-name">{g.name}</span>
              <span className={`tile-tag ${g.status}`}>{g.status === 'ready' ? s.play : s.soon}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="xmb">
          <div className="xmb-row">
            {games.map((g, i) => (
              <button
                key={g.id}
                className={`xmb-item ${i === sel ? 'sel' : ''} ${g.status}`}
                onClick={() => {
                  setSel(i);
                  open(g);
                }}
              >
                <span className="xmb-icon" style={{ background: `linear-gradient(135deg, ${g.tint[0]}, ${g.tint[1]})` }}>
                  {g.icon}
                </span>
                <span className="xmb-label">{g.name}</span>
              </button>
            ))}
          </div>
          <div className="xmb-caption">
            <h2>{selectedGame.name}</h2>
            {selectedGame.status === 'ready' ? (
              <button className="xmb-play" onClick={() => open(selectedGame)}>{s.play}</button>
            ) : (
              <span className="tile-tag soon">{s.soon}</span>
            )}
          </div>
        </div>
      )}

      <p className="c-hint">{s.hint}</p>
    </div>
  );
}

export default App;
