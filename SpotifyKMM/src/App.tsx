import { useEffect, useRef, useState } from 'react';
import './App.css';
import { AudioEngine } from './audio';
import {
  DEMO_TRACKS,
  ROOTS,
  SCALES,
  VOICES,
  clonePattern,
  emptyPattern,
  loadUserTracks,
  saveUserTracks,
  type Track
} from './music';

type View = 'home' | 'sing' | 'create';

// A fresh song to create: optionally over an existing song's backing ("base"),
// or just your voice. You bring the name, the lyrics and the voice — you sing it.
function makeDraft(base: Track | null): Track {
  return {
    id: 'u' + Date.now().toString(36),
    name: 'Mi canción',
    author: 'Tú',
    color: base ? base.color : (['#1db954', '#1ed760'] as [string, string]),
    bpm: base ? base.bpm : 120,
    root: base ? base.root : 0,
    scale: base ? base.scale : 'major',
    voice: 'kamyar',
    pattern: base ? clonePattern(base.pattern) : emptyPattern(),
    lyrics: ['Escribe aquí tu letra', 'y cántala con autotune 🎤']
  };
}

export default function App() {
  const engineRef = useRef<AudioEngine | null>(null);
  if (!engineRef.current) engineRef.current = new AudioEngine();
  const engine = engineRef.current;

  const [view, setView] = useState<View>('home');
  const [userTracks, setUserTracks] = useState<Track[]>(loadUserTracks);
  const [current, setCurrent] = useState<Track | null>(null);
  const [playing, setPlaying] = useState(false);
  const [bar, setBar] = useState(0);
  const [micOn, setMicOn] = useState(false);
  const [micNote, setMicNote] = useState('—');
  const [toast, setToast] = useState('');

  const [draft, setDraft] = useState<Track>(() => makeDraft(DEMO_TRACKS[0]));
  const [baseId, setBaseId] = useState<string>(DEMO_TRACKS[0].id);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // One rAF drives the karaoke line and the little visualizer bars.
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      setBar((prev) => (prev !== engine.barIndex ? engine.barIndex : prev));
      const cvs = canvasRef.current;
      if (cvs) {
        const ctx = cvs.getContext('2d')!;
        const spec = engine.spectrum();
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        const n = Math.min(spec.length, 28);
        const bw = cvs.width / n;
        for (let i = 0; i < n; i++) {
          const h = (spec[i] / 255) * cvs.height;
          ctx.fillStyle = '#1db954';
          ctx.fillRect(i * bw + 1, cvs.height - h, bw - 2, h);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [engine]);

  const flash = (m: string) => {
    setToast(m);
    window.setTimeout(() => setToast(''), 1600);
  };

  const playTrack = (t: Track) => {
    engine.play(t);
    setCurrent(t);
    setPlaying(true);
  };
  const openSing = (t: Track) => {
    playTrack(t);
    setView('sing');
  };
  const togglePlay = () => {
    if (playing) {
      engine.stop();
      setPlaying(false);
    } else if (current) {
      playTrack(current);
    }
  };

  // Start / stop singing with autotune, tuned to the given song's key + voice.
  const toggleMic = async (track: Track | null) => {
    if (micOn) {
      engine.stopMic();
      setMicOn(false);
      setMicNote('—');
      return;
    }
    if (!track) return;
    try {
      await engine.startMic(track.voice, track.root, track.scale, (note) => setMicNote(note));
      setMicOn(true);
    } catch {
      flash('No pude usar el micrófono 🎤 (permiso denegado)');
    }
  };

  // ----- Sing screen: change the artist voice live -----
  const setVoiceLive = (id: string) => {
    if (!current) return;
    const t = { ...current, voice: id };
    setCurrent(t);
    engine.update(t);
    if (micOn) {
      engine.stopMic();
      engine.startMic(id, t.root, t.scale, (note) => setMicNote(note)).catch(() => {});
    }
  };

  // ----- Create screen -----
  const newSong = () => {
    const d = makeDraft(DEMO_TRACKS[0]);
    setDraft(d);
    setBaseId(DEMO_TRACKS[0].id);
    setView('create');
  };
  const editDraft = (patch: Partial<Track>) => setDraft((d) => ({ ...d, ...patch }));
  const pickBase = (base: Track | null) => {
    setBaseId(base ? base.id : 'none');
    const nd: Track = {
      ...draft,
      color: base ? base.color : (['#1db954', '#1ed760'] as [string, string]),
      bpm: base ? base.bpm : 120,
      root: base ? base.root : 0,
      scale: base ? base.scale : 'major',
      pattern: base ? clonePattern(base.pattern) : emptyPattern()
    };
    setDraft(nd);
    if (playing && current?.id === nd.id) {
      engine.play(nd);
      setCurrent(nd);
    }
  };
  const setDraftVoice = (id: string) => {
    const nd = { ...draft, voice: id };
    setDraft(nd);
    if (playing && current?.id === nd.id) {
      engine.update(nd);
      setCurrent(nd);
    }
    if (micOn) {
      engine.stopMic();
      engine.startMic(id, nd.root, nd.scale, (note) => setMicNote(note)).catch(() => {});
    }
  };
  const playDraft = () => {
    engine.play(draft);
    setCurrent(draft);
    setPlaying(true);
  };
  const saveDraft = () => {
    const exists = userTracks.some((t) => t.id === draft.id);
    const list = exists ? userTracks.map((t) => (t.id === draft.id ? draft : t)) : [...userTracks, draft];
    setUserTracks(list);
    saveUserTracks(list);
    flash('Guardada 🎉 ¡Ya puedes cantarla en Inicio!');
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-dot">🎧</span> Spotify <span className="xd">por kamyar xd</span>
        </div>
        <nav className="nav">
          <button className={`nav-item ${view === 'home' ? 'on' : ''}`} onClick={() => setView('home')}>
            <span>🏠</span> Inicio
          </button>
          <button className={`nav-item ${view === 'sing' ? 'on' : ''}`} onClick={() => setView('sing')} disabled={!current}>
            <span>🎤</span> Cantar
          </button>
          <button className={`nav-item ${view === 'create' ? 'on' : ''}`} onClick={newSong}>
            <span>🎙️</span> Crear
          </button>
        </nav>
      </aside>

      <main className="main">
        {view === 'home' && (
          <div className="view">
            <h1 className="hello">Buenas 👋</h1>
            <p className="sub">Elige una canción y cántala con autotune, o crea la tuya.</p>

            <h2 className="row-title">Canciones para cantar</h2>
            <div className="cards">
              {DEMO_TRACKS.map((t) => (
                <button key={t.id} className="card" onClick={() => openSing(t)}>
                  <div className="card-art" style={{ background: `linear-gradient(135deg, ${t.color[0]}, ${t.color[1]})` }}>
                    <span className="card-play">🎤</span>
                  </div>
                  <b>{t.name}</b>
                  <i>{t.author}</i>
                </button>
              ))}
            </div>

            <h2 className="row-title">Tus canciones</h2>
            <div className="cards">
              <button className="card create" onClick={newSong}>
                <div className="card-art dashed"><span>＋</span></div>
                <b>Crear canción</b>
                <i>Escribe y canta</i>
              </button>
              {userTracks.map((t) => (
                <button key={t.id} className="card" onClick={() => openSing(t)}>
                  <div className="card-art" style={{ background: `linear-gradient(135deg, ${t.color[0]}, ${t.color[1]})` }}>
                    <span className="card-play">🎤</span>
                  </div>
                  <b>{t.name}</b>
                  <i>{t.author}</i>
                </button>
              ))}
            </div>
          </div>
        )}

        {view === 'sing' && current && (
          <Sing
            track={current}
            bar={bar}
            playing={playing}
            micOn={micOn}
            micNote={micNote}
            onToggle={togglePlay}
            onVoice={setVoiceLive}
            onMic={() => toggleMic(current)}
          />
        )}
        {view === 'sing' && !current && (
          <div className="view">
            <p className="sub">Elige una canción en Inicio para empezar a cantar. 🎶</p>
          </div>
        )}

        {view === 'create' && (
          <Create
            draft={draft}
            baseId={baseId}
            bar={bar}
            playing={playing && current?.id === draft.id}
            micOn={micOn}
            micNote={micNote}
            onEdit={editDraft}
            onPickBase={pickBase}
            onVoice={setDraftVoice}
            onPlay={playDraft}
            onStop={togglePlay}
            onMic={() => toggleMic(draft)}
            onSave={saveDraft}
          />
        )}
      </main>

      {/* Player bar */}
      <div className="player">
        <div className="pl-track">
          {current ? (
            <>
              <span className="pl-art" style={{ background: `linear-gradient(135deg, ${current.color[0]}, ${current.color[1]})` }}>🎵</span>
              <span className="pl-meta">
                <b>{current.name}</b>
                <i>{current.author}</i>
              </span>
            </>
          ) : (
            <span className="pl-meta"><b>Nada sonando</b><i>elige una canción</i></span>
          )}
        </div>
        <div className="pl-mid">
          <button className="pl-play" onClick={togglePlay} disabled={!current} aria-label="Reproducir">
            {playing ? '⏸' : '▶'}
          </button>
          <canvas ref={canvasRef} width={220} height={30} className="pl-viz" />
        </div>
        <div className="pl-right">
          {current && <button className="pl-letra" onClick={() => setView('sing')}>🎤 Cantar</button>}
        </div>
      </div>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

// Sing an existing song: play it, sing with autotune, read the lyrics.
function Sing({
  track,
  bar,
  playing,
  micOn,
  micNote,
  onToggle,
  onVoice,
  onMic
}: {
  track: Track;
  bar: number;
  playing: boolean;
  micOn: boolean;
  micNote: string;
  onToggle: () => void;
  onVoice: (id: string) => void;
  onMic: () => void;
}) {
  const line = track.lyrics.length ? bar % track.lyrics.length : 0;
  return (
    <div className="view now">
      <div className="now-head">
        <div className="now-art" style={{ background: `linear-gradient(135deg, ${track.color[0]}, ${track.color[1]})` }}>🎵</div>
        <div className="now-info">
          <span className="now-tag">Cantando</span>
          <h1>{track.name}</h1>
          <p>{track.author} · {ROOTS[track.root]} {SCALES[track.scale].name} · {track.bpm} BPM</p>
          <div className="now-ctrls">
            <button className="big-play" onClick={onToggle}>{playing ? '⏸ Pausa' : '▶ Reproducir'}</button>
            <button className={`mic-btn ${micOn ? 'live' : ''}`} onClick={onMic}>
              {micOn ? '⏹ Parar' : '🎤 Cantar con Autotune'}
            </button>
            <div className="mic-note">{micOn ? micNote : ''}</div>
          </div>
        </div>
      </div>

      <div className="voice-pick">
        <span className="vp-label">Voz de artista:</span>
        {VOICES.map((v) => (
          <button key={v.id} className={`vchip ${track.voice === v.id ? 'on' : ''}`} onClick={() => onVoice(v.id)}>
            {v.emoji} {v.name}
          </button>
        ))}
      </div>

      <div className="karaoke">
        {track.lyrics.map((l, i) => (
          <p key={i} className={`kline ${i === line && playing ? 'active' : ''}`}>{l}</p>
        ))}
      </div>
    </div>
  );
}

// Create a song by SINGING: choose a backing (or just your voice), write your
// lyrics, pick a voice, and sing it with autotune. Save it to sing later.
function Create({
  draft,
  baseId,
  bar,
  playing,
  micOn,
  micNote,
  onEdit,
  onPickBase,
  onVoice,
  onPlay,
  onStop,
  onMic,
  onSave
}: {
  draft: Track;
  baseId: string;
  bar: number;
  playing: boolean;
  micOn: boolean;
  micNote: string;
  onEdit: (p: Partial<Track>) => void;
  onPickBase: (base: Track | null) => void;
  onVoice: (id: string) => void;
  onPlay: () => void;
  onStop: () => void;
  onMic: () => void;
  onSave: () => void;
}) {
  const line = draft.lyrics.length ? bar % draft.lyrics.length : 0;
  const bases: { id: string; name: string; track: Track | null }[] = [
    { id: 'none', name: '🔇 Solo mi voz', track: null },
    ...DEMO_TRACKS.map((t) => ({ id: t.id, name: t.name, track: t as Track | null }))
  ];

  return (
    <div className="view create">
      <div className="st-top">
        <input className="st-name" value={draft.name} onChange={(e) => onEdit({ name: e.target.value })} />
        <div className="st-actions">
          <button className="big-play" onClick={playing ? onStop : onPlay}>{playing ? '⏸' : '▶'} Probar</button>
          <button className={`mic-btn ${micOn ? 'live' : ''}`} onClick={onMic}>
            {micOn ? '⏹ Parar' : '🎤 Cantar con Autotune'}
          </button>
          <button className="save" onClick={onSave}>💾 Guardar</button>
        </div>
      </div>
      {micOn && <div className="mic-note">{micNote}</div>}

      <h3 className="row-title">Música de fondo</h3>
      <div className="preset-row">
        {bases.map((b) => (
          <button key={b.id} className={`preset-chip ${baseId === b.id ? 'on' : ''}`} onClick={() => onPickBase(b.track)}>
            {b.name}
          </button>
        ))}
      </div>

      <h3 className="row-title">Voz</h3>
      <div className="voice-pick">
        {VOICES.map((v) => (
          <button key={v.id} className={`vchip ${draft.voice === v.id ? 'on' : ''}`} onClick={() => onVoice(v.id)}>
            {v.emoji} {v.name}
          </button>
        ))}
      </div>

      <h3 className="row-title">Tu letra</h3>
      <div className="lyrics-edit">
        <textarea
          value={draft.lyrics.join('\n')}
          onChange={(e) => onEdit({ lyrics: e.target.value.split('\n') })}
          rows={7}
          spellCheck={false}
          placeholder="Escribe aquí los versos, uno por línea…"
        />
        <p className="booth-hint small">Dale a ▶ Probar para oír la base, luego 🎤 Cantar con Autotune y canta tu letra.</p>
      </div>

      <div className="karaoke">
        {draft.lyrics.map((l, i) => (
          <p key={i} className={`kline ${i === line && playing ? 'active' : ''}`}>{l || ' '}</p>
        ))}
      </div>
    </div>
  );
}
