import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { GAMES, gameUrl, type Game } from './games';
import { ConsoleArt } from './ConsoleArt';
import { Social } from './Social';
import {
  LANGS,
  RTL_LANGS,
  STRINGS,
  detectLang,
  metaLabel,
  saveLang,
  storedLang,
  taglineFor,
  urlLang,
  type Lang
} from './i18n';

type Filter = 'all' | 'ready' | 'streaming';

// A believable "people playing" count for a static site: a per-game base
// popularity (hashed from its id) gently oscillating over time. Not real users —
// there is no backend — but it makes the arcade feel alive and refreshes ~10s.
function livePlayers(seed: string, tick: number): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const base = 5 + (Math.abs(h) % 28);
  const wave = Math.sin((tick + (Math.abs(h) % 100)) / 3) * 5;
  const jitter = (Math.abs(Math.imul(h ^ tick, 2654435761)) % 7) - 3;
  return Math.max(1, Math.round(base + wave + jitter));
}

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

// "Press here" nudge shown by the players pill until you've set your name.
const PRESS_HERE: Record<Lang, string> = {
  es: '¡Presiona aquí!',
  en: 'Tap here!',
  pt: 'Toque aqui!',
  fr: 'Appuie ici !',
  de: 'Hier tippen!',
  it: 'Tocca qui!',
  zh: '点这里！',
  ja: 'ここを押して！',
  ar: '!اضغط هنا'
};

// Mandatory name gate shown on entry (so everyone has a name for presence + chat).
const GATE: Record<Lang, { title: string; sub: string; ph: string; btn: string }> = {
  es: { title: '¿Cómo te llamas?', sub: 'Pon tu nombre para entrar al arcade y poder chatear.', ph: 'Tu nombre', btn: 'Entrar' },
  en: { title: 'What is your name?', sub: 'Enter your name to get into the arcade and chat.', ph: 'Your name', btn: 'Enter' },
  pt: { title: 'Qual é o seu nome?', sub: 'Ponha seu nome para entrar no arcade e conversar.', ph: 'Seu nome', btn: 'Entrar' },
  fr: { title: 'Comment tu t’appelles ?', sub: 'Mets ton nom pour entrer dans l’arcade et discuter.', ph: 'Ton nom', btn: 'Entrer' },
  de: { title: 'Wie heißt du?', sub: 'Gib deinen Namen ein, um in die Arcade zu kommen und zu chatten.', ph: 'Dein Name', btn: 'Los' },
  it: { title: 'Come ti chiami?', sub: 'Metti il tuo nome per entrare nell’arcade e chattare.', ph: 'Il tuo nome', btn: 'Entra' },
  zh: { title: '你叫什么名字？', sub: '输入名字即可进入街机并聊天。', ph: '你的名字', btn: '进入' },
  ja: { title: '名前は？', sub: '名前を入れてアーケードに入り、チャットしよう。', ph: 'あなたの名前', btn: '入る' },
  ar: { title: 'ما اسمك؟', sub: 'اكتب اسمك للدخول إلى الأركيد والدردشة.', ph: 'اسمك', btn: 'دخول' }
};

function App() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('all');

  // Language priority: an explicit ?lang= in the URL, then the remembered
  // choice, then a best guess from the browser. The picker only auto-opens on a
  // genuine first visit (no URL override and nothing stored yet).
  const [lang, setLang] = useState<Lang>(() => urlLang() ?? storedLang() ?? detectLang());
  const [pickerOpen, setPickerOpen] = useState(() => urlLang() === null && storedLang() === null);
  const s = STRINGS[lang];

  // Keep the document language + text direction in sync (RTL for Arabic) so
  // screen readers and layout follow the chosen language.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';
  }, [lang]);

  // While the picker is open, Esc confirms the current selection and closes it.
  useEffect(() => {
    if (!pickerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePicker();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pickerOpen, lang]);

  const chooseLang = (next: Lang) => {
    setLang(next);
    saveLang(next);
    setPickerOpen(false);
  };

  // Dismissing without picking = accept the highlighted language, so the picker
  // won't nag on the next visit.
  const closePicker = () => chooseLang(lang);

  const readyCount = useMemo(() => GAMES.filter((g) => g.status === 'ready').length, []);

  // Live "people playing" ticker — refreshes every 10s.
  const [tick, setTick] = useState(() => Math.floor(Date.now() / 12000));
  useEffect(() => {
    const id = window.setInterval(() => setTick(Math.floor(Date.now() / 12000)), 10000);
    return () => window.clearInterval(id);
  }, []);
  // People panel (opens from the players pill): real presence + chat + calls. It
  // owns the realtime connection and reports the live count back for the pill.
  const [socialOpen, setSocialOpen] = useState(false);
  const [pCount, setPCount] = useState(1);
  const [pConn, setPConn] = useState(false);
  // Everyone must set a name to enter the arcade (used for presence + chat).
  const [name, setName] = useState(() => {
    try {
      return localStorage.getItem('arcade.name') || '';
    } catch {
      return '';
    }
  });
  const [nameInput, setNameInput] = useState('');
  const saveName = (v: string) => {
    const n = v.trim().slice(0, 20);
    if (!n) return;
    try {
      localStorage.setItem('arcade.name', n);
    } catch {
      /* ignore */
    }
    setName(n);
  };
  // Only the REAL count of people connected right now (no inflated estimate).
  const players = pCount;
  void pConn;
  void tick;

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GAMES.filter((game) => {
      if (filter === 'ready' && game.status !== 'ready') return false;
      if (filter === 'streaming' && game.kind !== 'app') return false;
      if (!q) return true;
      return (
        game.name.toLowerCase().includes(q) || game.tagline.toLowerCase().includes(q)
      );
    });
  }, [query, filter]);

  // Split the visible tiles into playable games and streaming apps so each gets
  // its own row. Apps are flagged with kind === 'app' in games.json.
  const games = useMemo(() => visible.filter((g) => (g.kind ?? 'game') === 'game'), [visible]);
  const apps = useMemo(() => visible.filter((g) => g.kind === 'app'), [visible]);

  const launch = (game: Game) => {
    if (game.status !== 'ready') return;
    window.open(gameUrl(game), '_blank', 'noopener');
  };

  const renderCard = (game: Game) => {
    const ready = game.status === 'ready';
    const isApp = game.kind === 'app';
    return (
      <button
        key={game.id}
        className={`game-card ${ready ? '' : 'is-soon'}`}
        onClick={() => launch(game)}
        disabled={!ready}
        aria-label={ready ? s.ariaOpen(game.name) : s.ariaSoon(game.name)}
      >
        <div
          className="game-icon"
          style={{
            background: `linear-gradient(135deg, ${game.accent[0]}, ${game.accent[1]})`
          }}
        >
          {game.art ? <ConsoleArt kind={game.art} /> : <span aria-hidden>{game.icon}</span>}
        </div>
        <div className="game-body">
          <div className="game-title-row">
            <h2>{game.name}</h2>
            <span className={`status-dot ${ready ? 'live' : 'soon'}`} aria-hidden />
          </div>
          <p className="game-tagline">{taglineFor(game.id, game.tagline, lang)}</p>
          <div className="game-meta">
            <span className="meta-tag">{metaLabel(game, s)}</span>
            {ready ? (
              <span className="play-label">{isApp ? s.open : s.play}</span>
            ) : (
              <span className="soon-label">{s.comingSoon}</span>
            )}
          </div>
        </div>
      </button>
    );
  };

  const currentLabel = LANGS.find((l) => l.code === lang)?.label ?? 'Language';

  return (
    <div className="app-shell">
      <section className="panel hero-panel">
        <div className="hero-headline">
          <div>
            <p className="eyebrow">{s.eyebrow}</p>
            <h1>
              {s.titlePre}
              <span className="accent">{s.titleAccent}</span>
              {s.titlePost}
            </h1>
            <p className="hero-copy">{s.heroCopy}</p>
          </div>
          <div className="hero-actions">
            <button
              type="button"
              className="lang-btn"
              onClick={() => setPickerOpen(true)}
              aria-label={s.langLabel}
              title={s.langLabel}
            >
              <span aria-hidden>🌐</span>
              <span className="lang-btn-label">{currentLabel}</span>
            </button>
            <span className="pill-wrap">
              <button className="pill players-pill" onClick={() => setSocialOpen(true)} title={PLAYING[lang]}>
                👥 {players} {PLAYING[lang]}
              </button>
              {!name && <span className="press-hint">☝ {PRESS_HERE[lang]}</span>}
            </span>
          </div>
        </div>

        <div className="toolbar">
          <label className="search">
            <span aria-hidden className="search-icon">
              ⌕
            </span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              placeholder={s.search}
              aria-label={s.search}
            />
          </label>
          <div className="filters" role="tablist" aria-label={s.filterAll}>
            {(['all', 'streaming'] as Filter[]).map((value) => (
              <button
                key={value}
                role="tab"
                aria-selected={filter === value}
                className={`filter-tab ${filter === value ? 'active' : ''}`}
                onClick={() => setFilter(value)}
              >
                {value === 'all' ? s.filterAll : value === 'ready' ? s.filterReady : s.streaming}
              </button>
            ))}
          </div>
        </div>

        <div className="game-grid">
          {games.map(renderCard)}

          {games.length === 0 && apps.length === 0 && (
            <p className="empty-state">{s.empty(query)}</p>
          )}
        </div>

        <p className="status-copy">{s.statusCopy}</p>
      </section>

      {apps.length > 0 && (
        <section className="panel apps-panel">
          <div className="apps-head">
            <h2>
              {s.appsPre}
              <span className="accent stream">{s.appsAccent}</span>
              {s.appsPost}
            </h2>
            <p>{s.appsCopy}</p>
          </div>
          <div className="game-grid">{apps.map(renderCard)}</div>
        </section>
      )}

      <Social
        open={socialOpen}
        onClose={() => setSocialOpen(false)}
        onCount={(n, c) => {
          setPCount(n);
          setPConn(c);
        }}
        name={name}
        lang={lang}
      />

      {!pickerOpen && !name && (
        <div className="namegate-overlay" role="dialog" aria-modal="true">
          <div className="namegate-card">
            <div className="namegate-emoji" aria-hidden>👋</div>
            <h2>{GATE[lang].title}</h2>
            <p>{GATE[lang].sub}</p>
            <div className="namegate-row">
              <input
                autoFocus
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && saveName(nameInput)}
                placeholder={GATE[lang].ph}
                maxLength={20}
              />
              <button onClick={() => saveName(nameInput)} disabled={!nameInput.trim()}>
                {GATE[lang].btn}
              </button>
            </div>
          </div>
        </div>
      )}

      {pickerOpen && (
        <div
          className="lang-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={s.pickerTitle}
          onClick={closePicker}
        >
          <div className="lang-modal" onClick={(e) => e.stopPropagation()}>
            <div className="lang-globe" aria-hidden>
              🌍
            </div>
            <h2 className="lang-title">{s.pickerTitle}</h2>
            <p className="lang-sub">{s.pickerSubtitle}</p>
            <div className="lang-grid">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  className={`lang-option ${l.code === lang ? 'current' : ''}`}
                  onClick={() => chooseLang(l.code)}
                >
                  <span
                    className="lang-badge"
                    aria-hidden
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${l.tint[0]}, ${l.tint[1]})`
                    }}
                  >
                    {l.badge}
                  </span>
                  <span className="lang-name">{l.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
