import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import { THEME } from './theme';
import type { Movie, Character, Prop, Scene, Line } from './types';
import { Stage, type View } from './stage3d';

// localStorage namespaces (all apps share one origin in production, so the
// theme's storageKey keeps each platform's data separate).
const CUSTOM_KEY = `${THEME.storageKey}:custom`;
const LIST_KEY = `${THEME.storageKey}:mylist`;

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

/** Turn "1h 52m" into total minutes (used as the fake player's length). */
function parseMinutes(duration: string): number {
  const h = /(\d+)\s*h/.exec(duration);
  const m = /(\d+)\s*m/.exec(duration);
  const mins = (h ? parseInt(h[1], 10) * 60 : 0) + (m ? parseInt(m[1], 10) : 0);
  return mins || 50;
}

/** Seconds → H:MM:SS (or M:SS under an hour) for the ticking player clock. */
function clockS(totalSeconds: number): string {
  const t = Math.max(0, Math.floor(totalSeconds));
  const s = t % 60;
  const m = Math.floor(t / 60) % 60;
  const h = Math.floor(t / 3600);
  const mm = String(m).padStart(2, '0');
  const ss = String(s).padStart(2, '0');
  return h > 0 ? `${h}:${mm}:${ss}` : `${m}:${ss}`;
}

const RATINGS = ['TODOS', '7+', '12+', '16+', '18+'];
const ROLES = ['Protagonista', 'Secundario', 'Villano', 'Cameo'];

// Playback speeds. x1 = the film's REAL runtime in real time; the rest let you
// fast-forward (a 2h movie in ~12 min at x10) without losing the full story.
const SPEEDS = [1, 2, 5, 10] as const;

// Lines each role "says" in the player scene — keeps the movie feeling alive.
const ROLE_LINES: Record<string, string[]> = {
  Protagonista: ['¡No pienso rendirme!', 'Esto acaba aquí y ahora.', 'Confía en mí, tengo un plan.', 'Lo hago por todos nosotros.'],
  Villano: ['Caerás ante mí.', 'Todo es parte de mi plan…', 'Jajaja, qué ingenuo.', 'Nadie podrá detenerme.'],
  Secundario: ['¡Te cubro las espaldas!', '¿Seguro que es buena idea?', 'Vamos, no hay tiempo.', 'Por aquí, ¡rápido!'],
  Cameo: ['Solo pasaba por aquí…', '¿Alguien ha pedido ayuda?', '¡Sorpresa!']
};

type Draft = {
  title: string;
  year: string;
  genre: string;
  category: string;
  rating: string;
  duration: string;
  emoji: string;
  c1: string;
  c2: string;
  synopsis: string;
  cast: Character[];
  props: Prop[];
  scenes: Scene[];
};

const emptyDraft = (): Draft => ({
  title: '',
  year: '2026',
  genre: '',
  category: '',
  rating: 'TODOS',
  duration: '1h 30m',
  emoji: '🎬',
  c1: THEME.accent,
  c2: THEME.accent2,
  synopsis: '',
  cast: [],
  props: [],
  scenes: [{ id: 'sc-1', title: 'Escena 1', colors: [THEME.accent, THEME.accent2], script: [] }]
});

type CardHandlers = {
  onOpen: (m: Movie) => void;
  onPlay: (m: Movie) => void;
  onToggle: (id: string) => void;
  inList: (id: string) => boolean;
  onRemove?: (id: string) => void;
};

// Fixed character spots per cast size, so the poster reads as a framed scene
// of the title's characters instead of a single floating emoji. [left, top, scale]
const POSTER_SPOTS: Record<number, { left: string; top: string; s: number }[]> = {
  1: [{ left: '50%', top: '44%', s: 1.2 }],
  2: [
    { left: '35%', top: '48%', s: 1.0 },
    { left: '66%', top: '40%', s: 1.0 }
  ],
  3: [
    { left: '27%', top: '52%', s: 0.9 },
    { left: '52%', top: '38%', s: 1.05 },
    { left: '75%', top: '54%', s: 0.85 }
  ],
  4: [
    { left: '24%', top: '44%', s: 0.84 },
    { left: '45%', top: '57%', s: 0.94 },
    { left: '60%', top: '34%', s: 0.94 },
    { left: '80%', top: '50%', s: 0.8 }
  ]
};

function Poster({ movie, h }: { movie: Movie; h: CardHandlers }) {
  const saved = h.inList(movie.id);
  // The poster IS a character screen: show the built cast (up to 4), or fall
  // back to the title's emoji as a single "star" (the same trick the player
  // uses) so every title shows a face on its stage, never an empty frame.
  const cast: Character[] =
    movie.cast && movie.cast.length
      ? movie.cast.slice(0, 4)
      : [{ id: 'star', name: movie.title, role: 'Protagonista', emoji: movie.emoji, color: movie.colors[0] }];
  const spots = POSTER_SPOTS[cast.length] ?? POSTER_SPOTS[4];
  return (
    <div className="poster" onClick={() => h.onOpen(movie)}>
      <div
        className="poster-art"
        style={{ background: `linear-gradient(150deg, ${movie.colors[0]}, ${movie.colors[1]})` }}
      >
        <div className="poster-stage">
          {cast.map((c, i) => (
            <div
              className="poster-actor"
              key={c.id}
              style={{ left: spots[i].left, top: spots[i].top, transform: `translate(-50%, -50%) scale(${spots[i].s})` }}
              title={c.name}
            >
              <span
                className="poster-face"
                style={{
                  background: `radial-gradient(circle at 50% 35%, ${c.color}, #000a)`,
                  color: c.color,
                  animationDelay: `${i * 0.6}s`
                }}
              >
                {c.emoji}
              </span>
            </div>
          ))}
        </div>
        <span className="poster-rating">{movie.rating}</span>
        {movie.custom && <span className="poster-flag">TUYA</span>}
        <div className="poster-shade" />
        <div className="poster-foot">
          <span className="poster-title">{movie.title}</span>
          <span className="poster-sub">
            {movie.year} · {movie.genre}
          </span>
        </div>
        <div className="poster-actions" onClick={(e) => e.stopPropagation()}>
          <button className="circle play" title="Reproducir" onClick={() => h.onPlay(movie)}>
            ▶
          </button>
          <button
            className={`circle ${saved ? 'on' : ''}`}
            title={saved ? 'Quitar de Mi lista' : 'Añadir a Mi lista'}
            onClick={() => h.onToggle(movie.id)}
          >
            {saved ? '✓' : '+'}
          </button>
          <button className="circle" title="Más info" onClick={() => h.onOpen(movie)}>
            ⌄
          </button>
          {movie.custom && h.onRemove && (
            <button className="circle danger" title="Eliminar" onClick={() => h.onRemove!(movie.id)}>
              🗑
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Row({ title, movies, h }: { title: string; movies: Movie[]; h: CardHandlers }) {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) =>
    track.current?.scrollBy({ left: dir * track.current.clientWidth * 0.85, behavior: 'smooth' });
  return (
    <section className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-wrap">
        <button className="row-nav left" onClick={() => scroll(-1)} aria-label="Anterior">
          ‹
        </button>
        <div className="row-track" ref={track}>
          {movies.map((m) => (
            <Poster key={m.id} movie={m} h={h} />
          ))}
        </div>
        <button className="row-nav right" onClick={() => scroll(1)} aria-label="Siguiente">
          ›
        </button>
      </div>
    </section>
  );
}

const NARRATOR: Character = { id: '', name: 'Narrador', role: 'Narrador', emoji: '🎬', color: '#e5e7eb' };

// The 3D set. React owns the canvas; the Stage class owns WebGL and its own
// animation loop, so we only push it new props (speaker, colours, camera) and
// let it interpolate. Rebuilt only when the cast actually changes.
function Stage3D({
  cast,
  speakerId,
  colors,
  view
}: {
  cast: Character[];
  speakerId: string;
  colors: [string, string];
  view: View;
}) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const stage = useRef<Stage | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const s = new Stage(ref.current, cast);
    stage.current = s;
    const onResize = () => s.resize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      s.dispose();
      stage.current = null;
    };
  }, [cast]);

  useEffect(() => {
    stage.current?.setSpeaker(speakerId);
  }, [speakerId]);
  useEffect(() => {
    stage.current?.setColors(colors[0], colors[1]);
  }, [colors]);
  useEffect(() => {
    stage.current?.setView(view);
  }, [view]);

  return <canvas ref={ref} className="stage3d" />;
}

type Beat = { sceneIndex: number; charId: string; text: string };

// Flatten a movie into an ordered list of "beats" (one dialogue line each),
// grouped by scene. Movies without a written script get a synthesized one so
// every title still plays a scene.
function buildTimeline(movie: Movie, cast: Character[]) {
  const scenes: Scene[] =
    movie.scenes && movie.scenes.length
      ? movie.scenes
      : [{ id: 'auto', title: movie.title, colors: movie.colors, script: [] }];
  const beats: Beat[] = [];
  const sceneStarts: number[] = [];
  scenes.forEach((s, si) => {
    sceneStarts.push(beats.length);
    if (s.script.length) {
      s.script.forEach((l: Line) => beats.push({ sceneIndex: si, charId: l.charId, text: l.text }));
    } else {
      for (let i = 0; i < 6; i++) {
        const c = cast[i % cast.length];
        const lns = ROLE_LINES[c.role] ?? ROLE_LINES.Protagonista;
        beats.push({ sceneIndex: si, charId: c.id, text: lns[i % lns.length] });
      }
    }
  });
  if (!beats.length) beats.push({ sceneIndex: 0, charId: cast[0].id, text: '…' });
  return { scenes, beats, sceneStarts };
}

function Player({ movie, onClose }: { movie: Movie; onClose: () => void }) {
  const total = parseMinutes(movie.duration);
  const totalSec = total * 60;

  // Every movie has at least one "star": its own poster emoji, so even catalog
  // titles without a built cast still come alive on screen.
  const cast: Character[] =
    movie.cast && movie.cast.length
      ? movie.cast
      : [{ id: 'star', name: movie.title, role: 'Protagonista', emoji: movie.emoji, color: movie.colors[0] }];
  const props: Prop[] = movie.props ?? [];
  const { scenes, beats, sceneStarts } = useMemo(() => buildTimeline(movie, cast), [movie]);

  // We track elapsed FILM time in seconds (not a beat counter), so the movie
  // lasts exactly its real runtime: the clock ticks in real time and the
  // dialogue beats are spread evenly across the whole duration. `speed` lets you
  // fast-forward (x10 watches a 2h film in ~12 min) without skipping any story.
  const [elapsed, setElapsed] = useState(0);
  const [paused, setPaused] = useState(false);
  const [speed, setSpeed] = useState<number>(1);
  // Watch the scene from the stalls, or standing on the set opposite whoever
  // is speaking.
  const [view, setView] = useState<View>('third');
  const done = elapsed >= totalSec;

  // Where each beat sits on the timeline, and how long it stays on screen.
  const beatAt = (i: number) => (totalSec * i) / beats.length;
  const idx = Math.min(beats.length - 1, Math.floor((elapsed / totalSec) * beats.length));

  // Real-time clock: tick the film forward by (tick · speed) while playing.
  useEffect(() => {
    if (paused || done) return;
    const TICK = 250; // ms between ticks — keeps the clock smooth
    const t = setInterval(() => {
      setElapsed((e) => Math.min(totalSec, e + (TICK / 1000) * speed));
    }, TICK);
    return () => clearInterval(t);
  }, [paused, done, speed, totalSec]);

  const nextBeat = () => setElapsed(Math.min(totalSec, beatAt(idx + 1) + 0.01));
  const nextScene = () => {
    const here = beats[idx].sceneIndex;
    const target = here + 1 < sceneStarts.length ? sceneStarts[here + 1] : beats.length;
    setElapsed(Math.min(totalSec, beatAt(target) + 0.01));
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        setPaused((p) => !p);
      }
      if (e.key === 'ArrowRight') setElapsed((x) => Math.min(totalSec, x + 30 * speed));
      if (e.key === 'ArrowLeft') setElapsed((x) => Math.max(0, x - 30 * speed));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, totalSec, speed]);

  const beat = beats[idx];
  const scene = scenes[beat.sceneIndex];
  const sceneColors = scene.colors ?? movie.colors;
  const speaker = cast.find((c) => c.id === beat.charId) ?? NARRATOR;

  const pct = Math.min(100, (elapsed / totalSec) * 100);
  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const f = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    setElapsed(f * totalSec);
  };

  return (
    <div className="player">
      <div
        className={`player-stage ${paused ? 'paused' : ''}`}
        style={{ background: `radial-gradient(circle at 50% 28%, ${sceneColors[0]}, ${sceneColors[1]} 72%, #000)` }}
        onClick={() => !done && setPaused((p) => !p)}
      >
        {!done && <Stage3D cast={cast} speakerId={speaker.id} colors={sceneColors} view={view} />}

        <span className="player-watermark">{movie.emoji}</span>
        <div className="player-brand">{THEME.brand}</div>

        {!done && (
          <button
            className="view-toggle"
            onClick={(e) => {
              e.stopPropagation();
              setView((v) => (v === 'third' ? 'first' : 'third'));
            }}
          >
            {view === 'third' ? '🎥 3ª persona' : '👁️ 1ª persona'}
          </button>
        )}

        {!done && (
          <div className="chapters" onClick={(e) => e.stopPropagation()}>
            <span className="chapter-now">
              Cap {beat.sceneIndex + 1}/{scenes.length} · {scene.title}
            </span>
            {scenes.length > 1 && (
              <div className="chapter-pips">
                {scenes.map((s, si) => (
                  <button
                    key={s.id}
                    className={`pip ${si === beat.sceneIndex ? 'on' : ''}`}
                    title={s.title}
                    onClick={() => setElapsed(beatAt(sceneStarts[si]) + 0.01)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {!done && (
          <div className="scene">
            {props.map((p, i) => (
              <span
                className="scene-prop"
                key={p.id}
                style={{ left: `${8 + ((i * 19) % 82)}%`, top: `${12 + (i % 3) * 7}%`, animationDelay: `${i * 0.5}s` }}
                title={p.name}
              >
                {p.emoji}
              </span>
            ))}
          </div>
        )}

        {done ? (
          <div className="player-end">
            <h2>Has terminado «{movie.title}»</h2>
            <div className="player-end-actions">
              <button className="btn-play" onClick={(e) => { e.stopPropagation(); setElapsed(0); }}>
                ↻ Volver a ver
              </button>
              <button className="btn-info" onClick={onClose}>
                Salir
              </button>
            </div>
          </div>
        ) : (
          <>
            {paused && <div className="player-bigplay">▶</div>}
            <div className="subtitle">
              <b style={{ color: speaker.color }}>
                {speaker.emoji} {speaker.name}:
              </b>{' '}
              {beat.text}
            </div>
          </>
        )}
      </div>

      <div className="player-bar">
        <div className="player-meta">
          <strong>{movie.title}</strong>
          <span>
            {movie.year} · {movie.genre} · {movie.rating}
          </span>
        </div>
        <div className="player-seek" onClick={seek}>
          <div className="player-seek-fill" style={{ width: `${pct}%` }}>
            <span className="player-knob" />
          </div>
        </div>
        <div className="player-controls">
          <span className="player-time">
            {clockS(elapsed)} / {clockS(totalSec)}
          </span>
          <div className="player-speed" title="Velocidad de reproducción">
            {SPEEDS.map((s) => (
              <button
                key={s}
                className={`speed ${speed === s ? 'on' : ''}`}
                onClick={() => setSpeed(s)}
                title={s === 1 ? 'Tiempo real' : `${s}× más rápido`}
              >
                {s}×
              </button>
            ))}
          </div>
          <div className="player-buttons">
            <button onClick={() => setElapsed(0)} title="Reiniciar">
              ⏮
            </button>
            <button onClick={() => setPaused((p) => !p)} title="Reproducir/Pausa">
              {paused ? '▶' : '❚❚'}
            </button>
            <button onClick={nextBeat} title="Siguiente línea">
              ⏭ Línea
            </button>
            {scenes.length > 1 && (
              <button onClick={nextScene} title="Siguiente escena">
                ⏩ Escena
              </button>
            )}
            <button onClick={onClose} title="Cerrar">
              ✕ Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [custom, setCustom] = useState<Movie[]>(() => load<Movie[]>(CUSTOM_KEY, []));
  const [myList, setMyList] = useState<string[]>(() => load<string[]>(LIST_KEY, []));
  const [query, setQuery] = useState('');
  const [view, setView] = useState<'home' | 'mylist'>('home');
  const [detail, setDetail] = useState<Movie | null>(null);
  const [playing, setPlaying] = useState<Movie | null>(null);
  const [creating, setCreating] = useState(false);
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [charDraft, setCharDraft] = useState({ name: '', role: 'Protagonista', emoji: '🦸', color: THEME.accent });
  const [propDraft, setPropDraft] = useState({ name: '', emoji: '🗝️' });
  const [lineDraft, setLineDraft] = useState<Record<string, { charId: string; text: string }>>({});

  useEffect(() => localStorage.setItem(CUSTOM_KEY, JSON.stringify(custom)), [custom]);
  useEffect(() => localStorage.setItem(LIST_KEY, JSON.stringify(myList)), [myList]);

  const all = useMemo<Movie[]>(() => [...THEME.catalog, ...custom], [custom]);
  const byId = useMemo(() => new Map(all.map((m) => [m.id, m])), [all]);
  const featured = useMemo(() => THEME.catalog.find((m) => m.featured) ?? THEME.catalog[0], []);
  const categories = useMemo(() => [...new Set(THEME.catalog.map((m) => m.category))], []);

  const inList = (id: string) => myList.includes(id);
  const toggleList = (id: string) =>
    setMyList((l) => (l.includes(id) ? l.filter((x) => x !== id) : [id, ...l]));

  const myListMovies = useMemo(
    () => myList.map((id) => byId.get(id)).filter((m): m is Movie => Boolean(m)),
    [myList, byId]
  );

  const rows = useMemo(() => {
    const r: { title: string; movies: Movie[] }[] = [
      { title: 'Tendencias ahora 🔥', movies: THEME.catalog.slice(0, 10) }
    ];
    for (const c of categories) r.push({ title: c, movies: all.filter((m) => m.category === c) });
    if (custom.length) r.push({ title: 'Mis pelis ✨', movies: custom });
    return r.filter((x) => x.movies.length > 0);
  }, [all, custom, categories]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return all.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        m.genre.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q)
    );
  }, [query, all]);

  const handlers: CardHandlers = {
    onOpen: setDetail,
    onPlay: (m) => {
      setDetail(null);
      setPlaying(m);
    },
    onToggle: toggleList,
    inList,
    onRemove: (id) => removeMovie(id)
  };

  function addMovie() {
    const movie: Movie = {
      id: `custom-${Date.now()}`,
      title: draft.title.trim() || 'Sin título',
      year: parseInt(draft.year, 10) || 2026,
      genre: draft.genre.trim() || 'Original',
      rating: draft.rating,
      duration: draft.duration.trim() || '1h 30m',
      category: draft.category.trim() || 'Mis pelis ✨',
      emoji: draft.emoji.trim() || '🎬',
      colors: [draft.c1, draft.c2],
      synopsis: draft.synopsis.trim() || 'Una peli original creada por ti en este streaming.',
      cast: draft.cast,
      props: draft.props,
      scenes: draft.scenes.filter((s) => s.script.length > 0),
      custom: true
    };
    setCustom((c) => [movie, ...c]);
    setCreating(false);
    setDraft(emptyDraft());
    setDetail(movie);
  }

  function removeMovie(id: string) {
    setCustom((c) => c.filter((m) => m.id !== id));
    setMyList((l) => l.filter((x) => x !== id));
    setDetail(null);
  }

  const addChar = () => {
    if (!charDraft.name.trim()) return;
    const c: Character = { id: `ch-${Date.now()}`, ...charDraft, name: charDraft.name.trim() };
    setDraft((d) => ({ ...d, cast: [...d.cast, c] }));
    setCharDraft((cd) => ({ ...cd, name: '' }));
  };
  const addProp = () => {
    if (!propDraft.name.trim()) return;
    const p: Prop = { id: `pr-${Date.now()}`, name: propDraft.name.trim(), emoji: propDraft.emoji || '🧩' };
    setDraft((d) => ({ ...d, props: [...d.props, p] }));
    setPropDraft((pd) => ({ ...pd, name: '' }));
  };
  const removeChar = (id: string) => setDraft((d) => ({ ...d, cast: d.cast.filter((c) => c.id !== id) }));
  const removeProp = (id: string) => setDraft((d) => ({ ...d, props: d.props.filter((p) => p.id !== id) }));

  const addScene = () =>
    setDraft((d) => ({
      ...d,
      scenes: [...d.scenes, { id: `sc-${Date.now()}`, title: `Escena ${d.scenes.length + 1}`, colors: [d.c1, d.c2], script: [] }]
    }));
  const removeScene = (sid: string) => setDraft((d) => ({ ...d, scenes: d.scenes.filter((s) => s.id !== sid) }));
  const patchScene = (sid: string, patch: Partial<Scene>) =>
    setDraft((d) => ({ ...d, scenes: d.scenes.map((s) => (s.id === sid ? { ...s, ...patch } : s)) }));
  const addLine = (sid: string) => {
    const ld = lineDraft[sid] ?? { charId: '', text: '' };
    if (!ld.text.trim()) return;
    setDraft((d) => ({
      ...d,
      scenes: d.scenes.map((s) =>
        s.id === sid ? { ...s, script: [...s.script, { charId: ld.charId, text: ld.text.trim() }] } : s
      )
    }));
    setLineDraft((m) => ({ ...m, [sid]: { charId: ld.charId, text: '' } }));
  };
  const removeLine = (sid: string, i: number) =>
    setDraft((d) => ({
      ...d,
      scenes: d.scenes.map((s) => (s.id === sid ? { ...s, script: s.script.filter((_, j) => j !== i) } : s))
    }));

  const stream = {
    '--accent': THEME.accent,
    '--accent2': THEME.accent2,
    '--bg': THEME.bg,
    '--surface': THEME.surface
  } as React.CSSProperties;

  return (
    <div className="stream" style={stream}>
      <header className="nav">
        <div className="brand" onClick={() => { setView('home'); setQuery(''); }}>
          <span className="brand-name">{THEME.brand}</span>
          <span className="brand-byline">{THEME.byline}</span>
        </div>
        <nav className="nav-links">
          <button className={view === 'home' && !query ? 'on' : ''} onClick={() => { setView('home'); setQuery(''); }}>
            Inicio
          </button>
          <button className={view === 'mylist' ? 'on' : ''} onClick={() => { setView('mylist'); setQuery(''); }}>
            Mi lista
          </button>
        </nav>
        <div className="nav-right">
          <label className="nav-search">
            <span>⌕</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar pelis y series"
              aria-label="Buscar"
            />
          </label>
          <button className="create-btn" onClick={() => setCreating(true)}>
            + Crear peli
          </button>
          <div className="avatar">K</div>
        </div>
      </header>

      {results ? (
        <main className="content">
          <h2 className="row-title big">Resultados de «{query}»</h2>
          {results.length ? (
            <div className="grid">
              {results.map((m) => (
                <Poster key={m.id} movie={m} h={handlers} />
              ))}
            </div>
          ) : (
            <p className="empty">No hay nada que coincida con «{query}». ¿Y si la creas? 👆</p>
          )}
        </main>
      ) : view === 'mylist' ? (
        <main className="content">
          <h2 className="row-title big">Mi lista</h2>
          {myListMovies.length ? (
            <div className="grid">
              {myListMovies.map((m) => (
                <Poster key={m.id} movie={m} h={handlers} />
              ))}
            </div>
          ) : (
            <p className="empty">Tu lista está vacía. Pulsa el “+” en cualquier peli para guardarla aquí.</p>
          )}
        </main>
      ) : (
        <>
          <section
            className="hero"
            style={{ background: `linear-gradient(120deg, ${featured.colors[0]}, ${featured.colors[1]})` }}
          >
            <div className="hero-mask" />
            <span className="hero-emoji">{featured.emoji}</span>
            <div className="hero-content">
              <span className="hero-tag">★ Destacada en {THEME.brand}</span>
              <h1>{featured.title}</h1>
              <div className="hero-meta">
                <span className="chip">{featured.rating}</span>
                <span>{featured.year}</span>
                <span>{featured.duration}</span>
                <span>{featured.genre}</span>
              </div>
              <p className="hero-synopsis">{featured.synopsis}</p>
              <div className="hero-buttons">
                <button className="btn-play" onClick={() => setPlaying(featured)}>
                  ▶ Reproducir
                </button>
                <button className="btn-info" onClick={() => setDetail(featured)}>
                  ⓘ Más información
                </button>
              </div>
            </div>
          </section>

          <main className="content rows">
            {rows.map((row) => (
              <Row key={row.title} title={row.title} movies={row.movies} h={handlers} />
            ))}
          </main>
        </>
      )}

      <footer className="foot">
        {THEME.brand} <b>{THEME.byline}</b> · Hecho con React + Vite · Tus pelis se guardan en este
        navegador.
      </footer>

      {detail && (
        <div className="backdrop" onClick={() => setDetail(null)}>
          <div className="sheet" onClick={(e) => e.stopPropagation()}>
            <div
              className="sheet-banner"
              style={{ background: `linear-gradient(120deg, ${detail.colors[0]}, ${detail.colors[1]})` }}
            >
              <span className="sheet-emoji">{detail.emoji}</span>
              <button className="sheet-close" onClick={() => setDetail(null)}>
                ✕
              </button>
              <div className="sheet-banner-foot">
                {detail.cast && detail.cast.length > 0 && (
                  <div className="banner-cast">
                    {detail.cast.slice(0, 6).map((c) => (
                      <span key={c.id} style={{ background: `radial-gradient(circle at 50% 35%, ${c.color}, #000a)` }}>
                        {c.emoji}
                      </span>
                    ))}
                  </div>
                )}
                <h2>{detail.title}</h2>
                <div className="sheet-buttons">
                  <button
                    className="btn-play"
                    onClick={() => {
                      setDetail(null);
                      setPlaying(detail);
                    }}
                  >
                    ▶ Reproducir
                  </button>
                  <button className="circle big" onClick={() => toggleList(detail.id)} title="Mi lista">
                    {inList(detail.id) ? '✓' : '+'}
                  </button>
                  {detail.custom && (
                    <button className="circle big danger" onClick={() => removeMovie(detail.id)} title="Eliminar">
                      🗑
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="sheet-body">
              <div className="sheet-meta">
                <span className="chip">{detail.rating}</span>
                <span>{detail.year}</span>
                <span>{detail.duration}</span>
                <span className="dot-tag">{detail.genre}</span>
                {detail.custom && <span className="dot-tag tuya">Creada por ti</span>}
              </div>
              <p>{detail.synopsis}</p>
              <p className="sheet-cat">Categoría: <b>{detail.category}</b></p>

              {detail.cast && detail.cast.length > 0 && (
                <div className="sheet-section">
                  <h4>🎭 Reparto</h4>
                  <div className="cast-row">
                    {detail.cast.map((c) => (
                      <div className="cast-card" key={c.id}>
                        <span
                          className="cast-card-emoji"
                          style={{ background: `radial-gradient(circle at 50% 35%, ${c.color}, #000a)` }}
                        >
                          {c.emoji}
                        </span>
                        <b>{c.name}</b>
                        <small>{c.role}</small>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {detail.props && detail.props.length > 0 && (
                <div className="sheet-section">
                  <h4>🧩 Objetos en la peli</h4>
                  <div className="chip-list show">
                    {detail.props.map((p) => (
                      <span className="prop-chip static" key={p.id}>
                        <span>{p.emoji}</span> {p.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {detail.scenes && detail.scenes.length > 0 && (
                <div className="sheet-section">
                  <h4>🎬 Capítulos</h4>
                  <ol className="chapter-list">
                    {detail.scenes.map((s, i) => (
                      <li key={s.id}>
                        <b>Cap {i + 1} · {s.title}</b>
                        <small>{s.script.length} líneas de guion</small>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {creating && (
        <div className="backdrop" onClick={() => setCreating(false)}>
          <div className="sheet create" onClick={(e) => e.stopPropagation()}>
            <div className="create-head">
              <h2>🎬 Crear una peli</h2>
              <button className="sheet-close solid" onClick={() => setCreating(false)}>
                ✕
              </button>
            </div>
            <div
              className="create-preview"
              style={{ background: `linear-gradient(150deg, ${draft.c1}, ${draft.c2})` }}
            >
              <span>{draft.emoji || '🎬'}</span>
              <div className="create-preview-info">
                <strong>{draft.title || 'Tu título'}</strong>
                {(draft.cast.length > 0 || draft.props.length > 0) && (
                  <span className="create-preview-cast">
                    {draft.cast.slice(0, 6).map((c) => c.emoji).join(' ')}{' '}
                    {draft.props.slice(0, 6).map((p) => p.emoji).join(' ')}
                  </span>
                )}
              </div>
            </div>
            <div className="create-grid">
              <label className="full">
                Título
                <input
                  autoFocus
                  value={draft.title}
                  onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                  placeholder="p. ej. Kamyar: El Regreso"
                />
              </label>
              <label>
                Año
                <input
                  type="number"
                  value={draft.year}
                  onChange={(e) => setDraft({ ...draft, year: e.target.value })}
                />
              </label>
              <label>
                Género
                <input
                  value={draft.genre}
                  onChange={(e) => setDraft({ ...draft, genre: e.target.value })}
                  placeholder="Acción, Comedia…"
                />
              </label>
              <label>
                Duración
                <input
                  value={draft.duration}
                  onChange={(e) => setDraft({ ...draft, duration: e.target.value })}
                  placeholder="1h 52m"
                />
              </label>
              <label>
                Edad
                <select value={draft.rating} onChange={(e) => setDraft({ ...draft, rating: e.target.value })}>
                  {RATINGS.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </label>
              <label>
                Categoría (fila)
                <input
                  list="cats"
                  value={draft.category}
                  onChange={(e) => setDraft({ ...draft, category: e.target.value })}
                  placeholder="Mis pelis ✨"
                />
                <datalist id="cats">
                  {categories.map((c) => (
                    <option key={c} value={c} />
                  ))}
                </datalist>
              </label>
              <label>
                Emoji póster
                <input
                  value={draft.emoji}
                  onChange={(e) => setDraft({ ...draft, emoji: e.target.value })}
                  placeholder="🎬"
                />
              </label>
              <label className="color">
                Color 1
                <input type="color" value={draft.c1} onChange={(e) => setDraft({ ...draft, c1: e.target.value })} />
              </label>
              <label className="color">
                Color 2
                <input type="color" value={draft.c2} onChange={(e) => setDraft({ ...draft, c2: e.target.value })} />
              </label>
              <label className="full">
                Sinopsis
                <textarea
                  rows={3}
                  value={draft.synopsis}
                  onChange={(e) => setDraft({ ...draft, synopsis: e.target.value })}
                  placeholder="¿De qué va tu peli?"
                />
              </label>
            </div>

            <div className="builder">
              <div className="builder-block">
                <h3>🎭 Personajes</h3>
                <div className="chip-list">
                  {draft.cast.map((c) => (
                    <span className="cast-chip" key={c.id} style={{ borderColor: c.color }}>
                      <span className="cast-emoji">{c.emoji}</span>
                      <span className="cast-info">
                        <b>{c.name}</b>
                        <small>{c.role}</small>
                      </span>
                      <button onClick={() => removeChar(c.id)} aria-label="Quitar personaje">
                        ✕
                      </button>
                    </span>
                  ))}
                  {draft.cast.length === 0 && (
                    <span className="builder-empty">Aún no hay personajes. Crea el reparto 👇</span>
                  )}
                </div>
                <div className="builder-add">
                  <input
                    className="ce"
                    value={charDraft.emoji}
                    onChange={(e) => setCharDraft({ ...charDraft, emoji: e.target.value })}
                    aria-label="Emoji del personaje"
                  />
                  <input
                    value={charDraft.name}
                    onChange={(e) => setCharDraft({ ...charDraft, name: e.target.value })}
                    onKeyDown={(e) => e.key === 'Enter' && addChar()}
                    placeholder="Nombre del personaje"
                  />
                  <select value={charDraft.role} onChange={(e) => setCharDraft({ ...charDraft, role: e.target.value })}>
                    {ROLES.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                  <input
                    type="color"
                    value={charDraft.color}
                    onChange={(e) => setCharDraft({ ...charDraft, color: e.target.value })}
                    aria-label="Color del personaje"
                  />
                  <button className="add-mini" onClick={addChar}>
                    + Añadir
                  </button>
                </div>
              </div>

              <div className="builder-block">
                <h3>🧩 Objetos</h3>
                <div className="chip-list">
                  {draft.props.map((p) => (
                    <span className="prop-chip" key={p.id}>
                      <span>{p.emoji}</span> {p.name}
                      <button onClick={() => removeProp(p.id)} aria-label="Quitar objeto">
                        ✕
                      </button>
                    </span>
                  ))}
                  {draft.props.length === 0 && (
                    <span className="builder-empty">Añade objetos y atrezo de la peli 👇</span>
                  )}
                </div>
                <div className="builder-add">
                  <input
                    className="ce"
                    value={propDraft.emoji}
                    onChange={(e) => setPropDraft({ ...propDraft, emoji: e.target.value })}
                    aria-label="Emoji del objeto"
                  />
                  <input
                    value={propDraft.name}
                    onChange={(e) => setPropDraft({ ...propDraft, name: e.target.value })}
                    onKeyDown={(e) => e.key === 'Enter' && addProp()}
                    placeholder="Nombre del objeto"
                  />
                  <button className="add-mini" onClick={addProp}>
                    + Añadir
                  </button>
                </div>
              </div>

              <div className="builder-block">
                <h3>🎬 Escenas y guion</h3>
                {draft.scenes.map((s, si) => (
                  <div className="scene-edit" key={s.id}>
                    <div className="scene-edit-head">
                      <span className="scene-num">{si + 1}</span>
                      <input
                        className="scene-title"
                        value={s.title}
                        onChange={(e) => patchScene(s.id, { title: e.target.value })}
                        placeholder={`Escena ${si + 1}`}
                      />
                      <input
                        type="color"
                        value={s.colors?.[0] ?? draft.c1}
                        onChange={(e) => patchScene(s.id, { colors: [e.target.value, s.colors?.[1] ?? draft.c2] })}
                        aria-label="Color de fondo 1"
                      />
                      <input
                        type="color"
                        value={s.colors?.[1] ?? draft.c2}
                        onChange={(e) => patchScene(s.id, { colors: [s.colors?.[0] ?? draft.c1, e.target.value] })}
                        aria-label="Color de fondo 2"
                      />
                      {draft.scenes.length > 1 && (
                        <button className="scene-del" onClick={() => removeScene(s.id)} aria-label="Eliminar escena">
                          🗑
                        </button>
                      )}
                    </div>
                    <ol className="script-lines">
                      {s.script.map((l, li) => {
                        const who = draft.cast.find((c) => c.id === l.charId);
                        return (
                          <li key={li}>
                            <span className="line-who" style={{ color: who?.color }}>
                              {who ? `${who.emoji} ${who.name}` : '🎬 Narrador'}:
                            </span>
                            <span className="line-text">{l.text}</span>
                            <button onClick={() => removeLine(s.id, li)} aria-label="Quitar línea">
                              ✕
                            </button>
                          </li>
                        );
                      })}
                      {s.script.length === 0 && (
                        <li className="builder-empty">Sin diálogos aún. Escribe la primera línea 👇</li>
                      )}
                    </ol>
                    <div className="line-add">
                      <select
                        value={lineDraft[s.id]?.charId ?? ''}
                        onChange={(e) =>
                          setLineDraft((m) => ({ ...m, [s.id]: { charId: e.target.value, text: m[s.id]?.text ?? '' } }))
                        }
                      >
                        <option value="">🎬 Narrador</option>
                        {draft.cast.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.emoji} {c.name}
                          </option>
                        ))}
                      </select>
                      <input
                        value={lineDraft[s.id]?.text ?? ''}
                        onChange={(e) =>
                          setLineDraft((m) => ({ ...m, [s.id]: { charId: m[s.id]?.charId ?? '', text: e.target.value } }))
                        }
                        onKeyDown={(e) => e.key === 'Enter' && addLine(s.id)}
                        placeholder="Escribe lo que dice…"
                      />
                      <button className="add-mini" onClick={() => addLine(s.id)}>
                        + Línea
                      </button>
                    </div>
                  </div>
                ))}
                <button className="add-scene" onClick={addScene}>
                  + Añadir escena
                </button>
              </div>
            </div>

            <div className="create-actions">
              <button className="btn-info" onClick={() => setCreating(false)}>
                Cancelar
              </button>
              <button className="btn-play" disabled={!draft.title.trim()} onClick={addMovie}>
                ✓ Añadir al catálogo
              </button>
            </div>
          </div>
        </div>
      )}

      {playing && <Player key={playing.id} movie={playing} onClose={() => setPlaying(null)} />}
    </div>
  );
}
