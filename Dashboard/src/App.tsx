import { useMemo, useState } from 'react';
import './App.css';
import { GAMES, gameUrl, type Game } from './games';

type Filter = 'all' | 'ready' | 'soon';

function App() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('all');

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

  const launch = (game: Game) => {
    if (game.status !== 'ready') return;
    window.open(gameUrl(game), '_blank', 'noopener');
  };

  return (
    <div className="app-shell">
      <section className="panel hero-panel">
        <div className="hero-headline">
          <div>
            <p className="eyebrow">Premium Arcade</p>
            <h1>
              The <span className="accent">arcade</span>.
            </h1>
            <p className="hero-copy">
              Twelve standalone mini-games, one launcher. Pick a tile and play.
            </p>
          </div>
          <span className="pill">● {readyCount} live</span>
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
              placeholder="Search games"
              aria-label="Search games"
            />
          </label>
          <div className="filters" role="tablist" aria-label="Filter games">
            {(['all', 'ready', 'soon'] as Filter[]).map((value) => (
              <button
                key={value}
                role="tab"
                aria-selected={filter === value}
                className={`filter-tab ${filter === value ? 'active' : ''}`}
                onClick={() => setFilter(value)}
              >
                {value === 'all' ? 'All' : value === 'ready' ? 'Playable' : 'Coming soon'}
              </button>
            ))}
          </div>
        </div>

        <div className="game-grid">
          {visible.map((game) => {
            const ready = game.status === 'ready';
            return (
              <button
                key={game.id}
                className={`game-card ${ready ? '' : 'is-soon'}`}
                onClick={() => launch(game)}
                disabled={!ready}
                aria-label={ready ? `Play ${game.name}` : `${game.name} — coming soon`}
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
                  <p className="game-tagline">{game.tagline}</p>
                  <div className="game-meta">
                    <span className="meta-tag">{game.difficulty}</span>
                    {ready ? (
                      <span className="play-label">Play ▸</span>
                    ) : (
                      <span className="soon-label">Coming soon</span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}

          {visible.length === 0 && (
            <p className="empty-state">No games match “{query}”.</p>
          )}
        </div>

        <p className="status-copy">
          Each game runs as its own project, all booted by one <code>npm run dev</code>. Click a
          live tile to play it in a new tab.
        </p>
      </section>
    </div>
  );
}

export default App;
