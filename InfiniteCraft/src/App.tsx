import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import { LANGS, RTL_LANGS, STRINGS, initialLang, saveLang, type Lang } from './i18n';
import {
  BASE_IDS,
  combine,
  emojiOf,
  hydrateGen,
  isBase,
  isImpossible,
  nameOf,
  parentsOf,
  serializeGen
} from './elements';

// "What is this?" descriptions shown on double-click/double-tap of an element.
const DESC: Record<Lang, { base: string; made: (a: string, b: string) => string; fused: (a: string, b: string) => string }> = {
  es: { base: 'Elemento básico.', made: (a, b) => `Se crea combinando ${a} + ${b}.`, fused: (a, b) => `Una fusión imposible de ${a} + ${b}.` },
  en: { base: 'Basic element.', made: (a, b) => `Made by combining ${a} + ${b}.`, fused: (a, b) => `An impossible fusion of ${a} + ${b}.` },
  pt: { base: 'Elemento básico.', made: (a, b) => `Criado combinando ${a} + ${b}.`, fused: (a, b) => `Uma fusão impossível de ${a} + ${b}.` },
  fr: { base: 'Élément de base.', made: (a, b) => `Se crée en combinant ${a} + ${b}.`, fused: (a, b) => `Une fusion impossible de ${a} + ${b}.` },
  de: { base: 'Grundelement.', made: (a, b) => `Entsteht aus ${a} + ${b}.`, fused: (a, b) => `Eine unmögliche Fusion aus ${a} + ${b}.` },
  it: { base: 'Elemento base.', made: (a, b) => `Si crea combinando ${a} + ${b}.`, fused: (a, b) => `Una fusione impossibile di ${a} + ${b}.` },
  zh: { base: '基础元素。', made: (a, b) => `由 ${a} + ${b} 组合而成。`, fused: (a, b) => `${a} + ${b} 的不可能融合。` },
  ja: { base: '基本の要素。', made: (a, b) => `${a} + ${b} でできる。`, fused: (a, b) => `${a} + ${b} のあり得ない融合。` },
  ar: { base: 'عنصر أساسي.', made: (a, b) => `يُصنع بدمج ${a} + ${b}.`, fused: (a, b) => `دمج مستحيل بين ${a} + ${b}.` }
};

// A single element sitting on the crafting table.
type Item = { key: number; id: string; x: number; y: number };

const SAVE_KEY = 'kmm-infinite-craft';
const MARGIN = 40; // keep chips a little inside the table edges
const COMBINE_DIST = 60; // centers this close (px) fuse on drop
const GRAB_DIST = 50; // gamepad cursor grabs a chip within this radius
const PAD_SPEED = 8; // cursor px per frame at full stick

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const dead = (v: number) => (Math.abs(v) < 0.22 ? 0 : v);

function App() {
  const [lang, setLang] = useState<Lang>(() => initialLang());
  const s = STRINGS[lang];
  const rtl = RTL_LANGS.includes(lang);

  const [discovered, setDiscovered] = useState<string[]>(BASE_IDS);
  const [items, setItems] = useState<Item[]>([]);
  const [search, setSearch] = useState('');
  const [toast, setToast] = useState<{ id: string; first: boolean } | null>(null);
  const [descId, setDescId] = useState<string | null>(null);
  const [draggingKey, setDraggingKey] = useState<number | null>(null);
  const [hoverKey, setHoverKey] = useState<number | null>(null);
  const [heldKey, setHeldKey] = useState<number | null>(null);
  const [ghost, setGhost] = useState<{ id: string; x: number; y: number } | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [padActive, setPadActive] = useState(false);
  const [padSel, setPadSel] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);

  const canvasRef = useRef<HTMLDivElement>(null);
  const keyRef = useRef(1);
  const cascadeRef = useRef(0);

  // Mirror the pieces of state the rAF gamepad loop needs, so it can read the
  // latest values without being torn down and rebuilt every render.
  const itemsRef = useRef<Item[]>([]);
  const discoveredRef = useRef<string[]>([]);
  const padSelRef = useRef(0);
  const cursorRef = useRef({ x: 0, y: 0 });
  const heldKeyRef = useRef<number | null>(null);
  const padActiveRef = useRef(false);
  const prevButtonsRef = useRef<boolean[]>([]);
  itemsRef.current = items;
  discoveredRef.current = discovered;
  padSelRef.current = padSel;

  // ——— Persistence ———
  useEffect(() => {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        hydrateGen(data?.gen);
        if (Array.isArray(data?.discovered)) {
          setDiscovered(Array.from(new Set([...BASE_IDS, ...data.discovered])));
        }
      }
    } catch {
      /* corrupt or unavailable storage — start fresh */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify({ discovered, gen: serializeGen() }));
    } catch {
      /* storage disabled */
    }
  }, [discovered, loaded]);

  // Document language + direction (RTL for Arabic).
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
  }, [lang, rtl]);

  // Auto-dismiss the discovery toast.
  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 2400);
    return () => window.clearTimeout(t);
  }, [toast]);

  // ——— Shared actions (used by both pointer drag and gamepad) ———
  const findOverlap = useCallback((selfKey: number, x: number, y: number): number | null => {
    let best: number | null = null;
    let bestD = COMBINE_DIST;
    for (const it of itemsRef.current) {
      if (it.key === selfKey) continue;
      const d = Math.hypot(it.x - x, it.y - y);
      if (d < bestD) {
        bestD = d;
        best = it.key;
      }
    }
    return best;
  }, []);

  const itemAt = useCallback((x: number, y: number): number | null => {
    let best: number | null = null;
    let bestD = GRAB_DIST;
    for (const it of itemsRef.current) {
      const d = Math.hypot(it.x - x, it.y - y);
      if (d < bestD) {
        bestD = d;
        best = it.key;
      }
    }
    return best;
  }, []);

  const registerDiscovery = useCallback((id: string) => {
    setDiscovered((prev) => {
      if (prev.includes(id)) return prev;
      setToast({ id, first: true });
      return [...prev, id];
    });
  }, []);

  const spawnAt = useCallback((id: string, x: number, y: number): number => {
    const key = keyRef.current++;
    setItems((prev) => [...prev, { key, id, x, y }]);
    return key;
  }, []);

  const combineKeys = useCallback(
    (aKey: number, bKey: number) => {
      const a = itemsRef.current.find((i) => i.key === aKey);
      const b = itemsRef.current.find((i) => i.key === bKey);
      if (!a || !b) return;
      const rid = combine(a.id, b.id);
      const nx = (a.x + b.x) / 2;
      const ny = (a.y + b.y) / 2;
      const key = keyRef.current++;
      setItems((prev) => prev.filter((i) => i.key !== aKey && i.key !== bKey).concat({ key, id: rid, x: nx, y: ny }));
      registerDiscovery(rid);
    },
    [registerDiscovery]
  );

  const deleteKey = useCallback((key: number) => {
    setItems((prev) => prev.filter((i) => i.key !== key));
  }, []);

  // ——— Pointer / touch drag ———
  const startSpawn = (id: string, e: React.PointerEvent) => {
    e.preventDefault();
    setGhost({ id, x: e.clientX, y: e.clientY });
    const move = (ev: PointerEvent) => setGhost({ id, x: ev.clientX, y: ev.clientY });
    const up = (ev: PointerEvent) => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      setGhost(null);
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      const inside =
        ev.clientX >= rect.left && ev.clientX <= rect.right && ev.clientY >= rect.top && ev.clientY <= rect.bottom;
      let x: number;
      let y: number;
      if (inside) {
        x = ev.clientX - rect.left;
        y = ev.clientY - rect.top;
      } else {
        // A plain tap (no drag onto the table) still drops a chip, cascaded so
        // repeated taps don't stack on the exact same spot.
        const n = cascadeRef.current++ % 6;
        x = rect.width / 2 - 40 + n * 18;
        y = rect.height / 2 - 24 + n * 18;
      }
      spawnAt(id, clamp(x, MARGIN, rect.width - MARGIN), clamp(y, MARGIN, rect.height - MARGIN));
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  const startMove = (key: number, e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const rect = canvasRef.current?.getBoundingClientRect();
    const it = itemsRef.current.find((i) => i.key === key);
    if (!rect || !it) return;
    const offX = e.clientX - (rect.left + it.x);
    const offY = e.clientY - (rect.top + it.y);
    setDraggingKey(key);
    const move = (ev: PointerEvent) => {
      const r = canvasRef.current?.getBoundingClientRect();
      if (!r) return;
      const x = clamp(ev.clientX - r.left - offX, MARGIN, r.width - MARGIN);
      const y = clamp(ev.clientY - r.top - offY, MARGIN, r.height - MARGIN);
      setItems((prev) => prev.map((i) => (i.key === key ? { ...i, x, y } : i)));
      setHoverKey(findOverlap(key, x, y));
    };
    const up = (ev: PointerEvent) => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      setDraggingKey(null);
      setHoverKey(null);
      const r = canvasRef.current?.getBoundingClientRect();
      if (!r) return;
      const x = clamp(ev.clientX - r.left - offX, MARGIN, r.width - MARGIN);
      const y = clamp(ev.clientY - r.top - offY, MARGIN, r.height - MARGIN);
      const target = findOverlap(key, x, y);
      if (target != null) combineKeys(key, target);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  // ——— Gamepad: a virtual cursor you drive with the sticks ———
  useEffect(() => {
    let raf = 0;
    const step = () => {
      const pads = typeof navigator.getGamepads === 'function' ? navigator.getGamepads() : [];
      let gp: Gamepad | null = null;
      for (const p of pads) {
        if (p) {
          gp = p;
          break;
        }
      }
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!gp || !rect) {
        if (!gp && padActiveRef.current) {
          padActiveRef.current = false;
          setPadActive(false);
        }
        raf = requestAnimationFrame(step);
        return;
      }
      if (!padActiveRef.current) {
        padActiveRef.current = true;
        setPadActive(true);
        cursorRef.current = { x: rect.width / 2, y: rect.height / 2 };
        setCursor(cursorRef.current);
      }

      const btn = (i: number) => !!gp!.buttons[i]?.pressed;
      let dx = dead(gp.axes[0] ?? 0) * PAD_SPEED;
      let dy = dead(gp.axes[1] ?? 0) * PAD_SPEED;
      if (btn(14)) dx -= PAD_SPEED;
      if (btn(15)) dx += PAD_SPEED;
      if (btn(12)) dy -= PAD_SPEED;
      if (btn(13)) dy += PAD_SPEED;
      const cx = clamp(cursorRef.current.x + dx, MARGIN, rect.width - MARGIN);
      const cy = clamp(cursorRef.current.y + dy, MARGIN, rect.height - MARGIN);
      cursorRef.current = { x: cx, y: cy };
      setCursor(cursorRef.current);

      // A held chip rides the cursor.
      if (heldKeyRef.current != null) {
        const k = heldKeyRef.current;
        setItems((prev) => prev.map((i) => (i.key === k ? { ...i, x: cx, y: cy } : i)));
        setHoverKey(findOverlap(k, cx, cy));
      }

      const prev = prevButtonsRef.current;
      const press = (i: number) => btn(i) && !prev[i];

      if (press(0)) {
        // A — grab, or drop (fusing on top of another chip).
        if (heldKeyRef.current == null) {
          const u = itemAt(cx, cy);
          if (u != null) {
            heldKeyRef.current = u;
            setHeldKey(u);
          }
        } else {
          const k = heldKeyRef.current;
          const t = findOverlap(k, cx, cy);
          heldKeyRef.current = null;
          setHeldKey(null);
          setHoverKey(null);
          if (t != null) combineKeys(k, t);
        }
      }
      if (press(3)) {
        // Y — spawn the selected element and start holding it.
        const list = discoveredRef.current;
        if (list.length) {
          const id = list[clamp(padSelRef.current, 0, list.length - 1)];
          const key = spawnAt(id, cx, cy);
          heldKeyRef.current = key;
          setHeldKey(key);
        }
      }
      if (press(1)) {
        // B — delete the held chip, or the one under the cursor.
        if (heldKeyRef.current != null) {
          deleteKey(heldKeyRef.current);
          heldKeyRef.current = null;
          setHeldKey(null);
        } else {
          const u = itemAt(cx, cy);
          if (u != null) deleteKey(u);
        }
      }
      if (press(4)) setPadSel((v) => { const n = discoveredRef.current.length; return n ? (v - 1 + n) % n : 0; });
      if (press(5)) setPadSel((v) => { const n = discoveredRef.current.length; return n ? (v + 1) % n : 0; });

      prevButtonsRef.current = gp.buttons.map((b) => b.pressed);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [combineKeys, deleteKey, findOverlap, itemAt, spawnAt]);

  // Keep the gamepad-selected pill scrolled into view.
  useEffect(() => {
    if (!padActive) return;
    document.getElementById(`pill-${padSel}`)?.scrollIntoView({ block: 'nearest' });
  }, [padSel, padActive]);

  const chooseLang = (code: Lang) => {
    setLang(code);
    saveLang(code);
    setLangOpen(false);
  };

  const clearTable = () => setItems([]);
  const resetAll = () => {
    if (!window.confirm(s.resetConfirm)) return;
    setItems([]);
    setDiscovered(BASE_IDS);
    try {
      localStorage.removeItem(SAVE_KEY);
    } catch {
      /* ignore */
    }
  };

  // Inventory, filtered by search but keeping each element's real index so the
  // gamepad highlight lines up with the full discovered list.
  const inventory = useMemo(() => {
    const q = search.trim().toLowerCase();
    return discovered
      .map((id, idx) => ({ id, idx }))
      .filter(({ id }) => !q || nameOf(id, lang).toLowerCase().includes(q));
  }, [discovered, search, lang]);

  const currentLangLabel = LANGS.find((l) => l.code === lang)?.label ?? 'Language';

  // Double-click/tap description: how an element is made, or what it's fused from.
  const describe = (id: string): string => {
    const d = DESC[lang];
    if (isBase(id)) return d.base;
    const p = parentsOf(id);
    if (!p) return '';
    return isImpossible(id) ? d.fused(nameOf(p[0], lang), nameOf(p[1], lang)) : d.made(nameOf(p[0], lang), nameOf(p[1], lang));
  };

  return (
    <div className="shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-icon" aria-hidden>♾️</span>
          <div className="brand-text">
            <h1>
              {s.title} <span className="brand-sub">{s.subtitle}</span>
            </h1>
            <p className="tagline">{s.tagline}</p>
          </div>
        </div>
        <div className="top-actions">
          <span className="count-pill">✨ {s.discoveries(discovered.length)}</span>
          {padActive && <span className="pad-pill" title={s.padConnected}>🎮</span>}
          <div className="lang-wrap">
            <button
              type="button"
              className="icon-btn"
              onClick={() => setLangOpen((o) => !o)}
              aria-label={s.langLabel}
              title={s.langLabel}
            >
              🌐 <span className="lang-lbl">{currentLangLabel}</span>
            </button>
            {langOpen && (
              <>
                <div className="pop-backdrop" onClick={() => setLangOpen(false)} />
                <div className="lang-pop" role="menu">
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      className={`lang-opt ${l.code === lang ? 'current' : ''}`}
                      onClick={() => chooseLang(l.code)}
                    >
                      <span
                        className="lang-badge"
                        aria-hidden
                        style={{ backgroundImage: `linear-gradient(135deg, ${l.tint[0]}, ${l.tint[1]})` }}
                      >
                        {l.badge}
                      </span>
                      {l.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          <button type="button" className="icon-btn" onClick={() => setShowHelp(true)} title={s.help}>
            ❔
          </button>
        </div>
      </header>

      <main className="stage">
        <div className="table" ref={canvasRef}>
          {items.length === 0 && <p className="table-hint">{s.helpDrag}</p>}

          {items.map((it) => (
            <button
              key={it.key}
              className={`chip${draggingKey === it.key || heldKey === it.key ? ' dragging' : ''}${
                hoverKey === it.key ? ' target' : ''
              }${isImpossible(it.id) ? ' impossible' : ''}`}
              style={{ left: it.x, top: it.y }}
              onPointerDown={(e) => startMove(it.key, e)}
              onDoubleClick={() => setDescId(it.id)}
            >
              <span className="chip-emoji" aria-hidden>{emojiOf(it.id)}</span>
              <span className="chip-name">{nameOf(it.id, lang)}</span>
            </button>
          ))}

          {padActive && (
            <div className="pad-cursor" style={{ left: cursor.x, top: cursor.y }} aria-hidden>
              {heldKey == null && <span className="pad-ring" />}
            </div>
          )}
        </div>

        <aside className="panel">
          <div className="panel-head">
            <h2>{s.inventory}</h2>
            <div className="panel-tools">
              <button type="button" className="text-btn" onClick={clearTable}>{s.clear}</button>
              <button type="button" className="text-btn danger" onClick={resetAll}>{s.reset}</button>
            </div>
          </div>
          <input
            className="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={s.searchPlaceholder}
            aria-label={s.searchPlaceholder}
          />
          <div className="inventory">
            {inventory.length === 0 && <p className="empty">{s.emptySearch}</p>}
            {inventory.map(({ id, idx }) => (
              <button
                key={id}
                id={`pill-${idx}`}
                className={`pill${isImpossible(id) ? ' impossible' : ''}${
                  padActive && idx === padSel ? ' pad-sel' : ''
                }`}
                onPointerDown={(e) => startSpawn(id, e)}
                onDoubleClick={() => setDescId(id)}
              >
                <span className="pill-emoji" aria-hidden>{emojiOf(id)}</span>
                <span className="pill-name">{nameOf(id, lang)}</span>
              </button>
            ))}
          </div>
        </aside>
      </main>

      {ghost && (
        <div className="ghost" style={{ left: ghost.x, top: ghost.y }} aria-hidden>
          <span className="chip-emoji">{emojiOf(ghost.id)}</span>
          <span className="chip-name">{nameOf(ghost.id, lang)}</span>
        </div>
      )}

      {descId && (
        <div className="desc-overlay" onClick={() => setDescId(null)}>
          <div className="desc-card" onClick={(e) => e.stopPropagation()}>
            <span className="desc-emoji" aria-hidden>{emojiOf(descId)}</span>
            <div className="desc-body">
              <strong className="desc-name">{nameOf(descId, lang)}</strong>
              <span className="desc-text">{describe(descId)}</span>
            </div>
            <button className="desc-x" onClick={() => setDescId(null)} aria-label="close">✕</button>
          </div>
        </div>
      )}

      {toast && (
        <div className={`toast${toast.first ? ' first' : ''}`} role="status">
          <span className="toast-emoji" aria-hidden>{emojiOf(toast.id)}</span>
          <div className="toast-text">
            {toast.first && <span className="toast-tag">{s.firstDiscovery}</span>}
            <span className="toast-name">{nameOf(toast.id, lang)}</span>
          </div>
        </div>
      )}

      {showHelp && (
        <div className="modal-backdrop" onClick={() => setShowHelp(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{s.help}</h2>
            <p>{s.helpDrag}</p>
            <p className="pad-help">🎮 {s.helpPad}</p>
            <div className="pad-legend">
              <span><b>A</b> {s.padGrab}/{s.padDrop}</span>
              <span><b>Y</b> {s.padSpawn}</span>
              <span><b>LB/RB</b> {s.padCycle}</span>
              <span><b>B</b> {s.padDelete}</span>
            </div>
            <button type="button" className="close-btn" onClick={() => setShowHelp(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
