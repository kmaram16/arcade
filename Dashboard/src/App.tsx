import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { GAMES, gameUrl, type Game } from './games';
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

type Filter = 'all' | 'ready' | 'soon';

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

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GAMES.filter((game) => {
      if (filter === 'ready' && game.status !== 'ready') return false;
      if (filter === 'soon' && game.status !== 'soon') return false;
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
          <span aria-hidden>{game.icon}</span>
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
            <span className="pill">● {s.live(readyCount)}</span>
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
            {(['all', 'ready', 'soon'] as Filter[]).map((value) => (
              <button
                key={value}
                role="tab"
                aria-selected={filter === value}
                className={`filter-tab ${filter === value ? 'active' : ''}`}
                onClick={() => setFilter(value)}
              >
                {value === 'all' ? s.filterAll : value === 'ready' ? s.filterReady : s.filterSoon}
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
