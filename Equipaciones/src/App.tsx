import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import KitSvg, { type View } from './KitSvg';
import {
  BLANK_KIT,
  CLUBES,
  CRESTS,
  PALETTES,
  PATTERNS,
  SELECCIONES,
  newId,
  type Kit,
  type Preset
} from './data';

const FAVS_KEY = 'equipaciones:favs:v1';

function loadFavs(): Kit[] {
  try {
    const raw = localStorage.getItem(FAVS_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? (arr as Kit[]) : [];
  } catch {
    return [];
  }
}

function App() {
  const [kit, setKit] = useState<Kit>(BLANK_KIT);
  const [view, setView] = useState<View>('front');
  const [tab, setTab] = useState<'selecciones' | 'clubes'>('selecciones');
  const [favs, setFavs] = useState<Kit[]>(() => loadFavs());
  const [flash, setFlash] = useState('');
  const svgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      localStorage.setItem(FAVS_KEY, JSON.stringify(favs));
    } catch {
      /* almacenamiento lleno o bloqueado — no pasa nada */
    }
  }, [favs]);

  useEffect(() => {
    if (!flash) return;
    const t = setTimeout(() => setFlash(''), 1800);
    return () => clearTimeout(t);
  }, [flash]);

  const set = <K extends keyof Kit>(key: K, value: Kit[K]) =>
    setKit((k) => ({ ...k, [key]: value }));

  const applyPreset = (preset: Preset) =>
    setKit((k) => ({ ...k, ...preset.kit }));

  const randomize = () => {
    const pal = PALETTES[Math.floor(Math.random() * PALETTES.length)];
    const pattern = PATTERNS[Math.floor(Math.random() * PATTERNS.length)].id;
    const crest = CRESTS[Math.floor(Math.random() * CRESTS.length)];
    setKit((k) => ({
      ...k,
      pattern,
      primary: pal[0],
      secondary: pal[1],
      accent: pal[2],
      shorts: pal[2],
      socks: pal[0],
      crest,
      number: String(Math.floor(Math.random() * 30) + 1)
    }));
  };

  const saveFav = () => {
    const saved: Kit = { ...kit, id: newId() };
    setFavs((f) => [saved, ...f].slice(0, 24));
    setFlash('¡Guardada en favoritas!');
  };

  const loadFav = (fav: Kit) => {
    setKit({ ...fav, id: 'draft' });
    setView('front');
    svgWrapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const deleteFav = (id: string) => setFavs((f) => f.filter((k) => k.id !== id));

  const downloadPng = () => {
    const svg = svgWrapRef.current?.querySelector('svg');
    if (!svg) return;
    const clone = svg.cloneNode(true) as SVGSVGElement;
    clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    clone.setAttribute('width', '480');
    clone.setAttribute('height', '768');
    const xml = new XMLSerializer().serializeToString(clone);
    const src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(xml)));
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 480;
      canvas.height = 768;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, 480, 768);
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${(kit.teamName || 'equipacion').replace(/\s+/g, '-').toLowerCase()}.png`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      });
    };
    img.src = src;
  };

  const presets = tab === 'selecciones' ? SELECCIONES : CLUBES;

  const colorFields: { key: keyof Kit; label: string }[] = useMemo(
    () => [
      { key: 'primary', label: 'Principal' },
      { key: 'secondary', label: 'Secundario' },
      { key: 'accent', label: 'Detalle' },
      { key: 'shorts', label: 'Pantalón' },
      { key: 'socks', label: 'Medias' }
    ],
    []
  );

  return (
    <div className="shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-badge" aria-hidden>
            👕
          </span>
          <div>
            <h1>Equipaciones</h1>
            <p>Diseña la camiseta de tus equipos y selecciones favoritas.</p>
          </div>
        </div>
        <div className="topbar-actions">
          <button className="btn ghost" onClick={randomize}>
            🎲 Aleatorio
          </button>
          <button className="btn" onClick={saveFav}>
            ⭐ Guardar en favoritas
          </button>
        </div>
      </header>

      <main className="studio">
        {/* ----- vista previa ----- */}
        <section className="panel preview">
          <div className="preview-head">
            <div className="segmented" role="tablist" aria-label="Cara de la camiseta">
              <button
                role="tab"
                aria-selected={view === 'front'}
                className={view === 'front' ? 'on' : ''}
                onClick={() => setView('front')}
              >
                Frontal
              </button>
              <button
                role="tab"
                aria-selected={view === 'back'}
                className={view === 'back' ? 'on' : ''}
                onClick={() => setView('back')}
              >
                Espalda
              </button>
            </div>
            <span className="team-chip">{kit.teamName || 'Sin nombre'}</span>
          </div>

          <div className="preview-stage" ref={svgWrapRef}>
            <KitSvg kit={kit} view={view} idPrefix="main" />
          </div>

          <div className="preview-actions">
            <button className="btn ghost" onClick={downloadPng}>
              ⬇️ Descargar PNG
            </button>
            <button className="btn ghost" onClick={() => setKit(BLANK_KIT)}>
              ♻️ Reiniciar
            </button>
          </div>
          {flash ? <p className="flash">{flash}</p> : null}
        </section>

        {/* ----- controles ----- */}
        <section className="panel controls">
          <div className="block">
            <div className="tabs">
              <button
                className={tab === 'selecciones' ? 'tab on' : 'tab'}
                onClick={() => setTab('selecciones')}
              >
                Selecciones
              </button>
              <button
                className={tab === 'clubes' ? 'tab on' : 'tab'}
                onClick={() => setTab('clubes')}
              >
                Estilos de club
              </button>
            </div>
            <div className="preset-grid">
              {presets.map((preset) => (
                <button
                  key={preset.label}
                  className="preset"
                  onClick={() => applyPreset(preset)}
                  title={preset.label}
                >
                  <span className="preset-badge" aria-hidden>
                    {preset.badge}
                  </span>
                  <span className="preset-label">{preset.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="block">
            <h3>Patrón</h3>
            <div className="chip-row">
              {PATTERNS.map((pt) => (
                <button
                  key={pt.id}
                  className={kit.pattern === pt.id ? 'chip on' : 'chip'}
                  onClick={() => set('pattern', pt.id)}
                >
                  {pt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="block">
            <h3>Colores</h3>
            <div className="color-grid">
              {colorFields.map((f) => (
                <label key={f.key} className="color-field">
                  <input
                    type="color"
                    value={kit[f.key] as string}
                    onChange={(e) => set(f.key, e.target.value as Kit[typeof f.key])}
                  />
                  <span>{f.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="block">
            <h3>Escudo</h3>
            <div className="chip-row">
              {CRESTS.map((emoji) => (
                <button
                  key={emoji}
                  className={kit.crest === emoji ? 'chip emoji on' : 'chip emoji'}
                  onClick={() => set('crest', emoji)}
                >
                  {emoji}
                </button>
              ))}
            </div>
            <input
              className="text-input"
              value={kit.crest}
              maxLength={3}
              onChange={(e) => set('crest', e.target.value)}
              placeholder="o escribe iniciales (ABC)"
              aria-label="Iniciales del escudo"
            />
          </div>

          <div className="block">
            <h3>Textos</h3>
            <div className="field-grid">
              <label className="field">
                <span>Equipo</span>
                <input
                  className="text-input"
                  value={kit.teamName}
                  maxLength={20}
                  onChange={(e) => set('teamName', e.target.value)}
                />
              </label>
              <label className="field">
                <span>Patrocinador</span>
                <input
                  className="text-input"
                  value={kit.sponsor}
                  maxLength={12}
                  onChange={(e) => set('sponsor', e.target.value)}
                />
              </label>
              <label className="field">
                <span>Jugador (espalda)</span>
                <input
                  className="text-input"
                  value={kit.playerName}
                  maxLength={12}
                  onChange={(e) => set('playerName', e.target.value)}
                />
              </label>
              <label className="field">
                <span>Dorsal</span>
                <input
                  className="text-input"
                  value={kit.number}
                  maxLength={2}
                  inputMode="numeric"
                  onChange={(e) => set('number', e.target.value.replace(/\D/g, ''))}
                />
              </label>
            </div>
          </div>
        </section>
      </main>

      {/* ----- favoritas ----- */}
      <section className="panel favs">
        <div className="favs-head">
          <h2>⭐ Tus equipaciones favoritas</h2>
          <span className="count">{favs.length}</span>
        </div>
        {favs.length === 0 ? (
          <p className="empty">
            Aún no has guardado ninguna. Diseña una camiseta y pulsa{' '}
            <strong>Guardar en favoritas</strong>.
          </p>
        ) : (
          <div className="fav-grid">
            {favs.map((fav) => (
              <div key={fav.id} className="fav-card">
                <button className="fav-open" onClick={() => loadFav(fav)} title="Cargar">
                  <div className="fav-thumb">
                    <KitSvg kit={fav} view="front" idPrefix={`fav-${fav.id}`} />
                  </div>
                  <span className="fav-name">{fav.teamName || 'Sin nombre'}</span>
                </button>
                <button
                  className="fav-del"
                  onClick={() => deleteFav(fav.id)}
                  aria-label={`Borrar ${fav.teamName}`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      <footer className="foot">Hecho para el Arcade · por kamyar xd ⚽</footer>
    </div>
  );
}

export default App;
