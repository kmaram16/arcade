import { useEffect, useMemo, useState } from 'react'
import { RECIPES, CATEGORY_EMOJI, type Recipe, type Category } from './recipes'
import { STRINGS, LANGS, RTL_LANGS, initialLang, saveLang, type Lang } from './i18n'

const CATEGORIES: Category[] = ['principal', 'entrante', 'postre', 'desayuno', 'bebida']

interface VideoInfo {
  label: string
  icon: string
  embed: string | null
  url: string
}

function videoInfo(raw: string): VideoInfo {
  const url = raw.trim()
  const low = url.toLowerCase()
  const yt = low.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([\w-]{6,})/)
  if (yt) return { label: 'YouTube', icon: '▶️', embed: `https://www.youtube.com/embed/${yt[1]}`, url }
  if (low.includes('tiktok')) return { label: 'TikTok', icon: '🎵', embed: null, url }
  if (low.includes('instagram')) return { label: 'Instagram', icon: '📸', embed: null, url }
  if (low.includes('facebook') || low.includes('fb.watch')) return { label: 'Facebook', icon: '📘', embed: null, url }
  return { label: 'el enlace', icon: '🔗', embed: null, url }
}

function useMyRecipes() {
  const [mine, setMine] = useState<Recipe[]>(() => {
    try {
      const raw = localStorage.getItem('cocina.mine')
      return raw ? (JSON.parse(raw) as Recipe[]) : []
    } catch {
      return []
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem('cocina.mine', JSON.stringify(mine))
    } catch {
      /* sin almacenamiento */
    }
  }, [mine])
  const add = (r: Recipe) => setMine(prev => [r, ...prev])
  const remove = (id: string) => setMine(prev => prev.filter(r => r.id !== id))
  return { mine, add, remove }
}

function useFavorites() {
  const [favs, setFavs] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem('cocina.favs')
      return new Set(raw ? (JSON.parse(raw) as string[]) : [])
    } catch {
      return new Set<string>()
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem('cocina.favs', JSON.stringify([...favs]))
    } catch {
      /* sin almacenamiento */
    }
  }, [favs])
  const toggle = (id: string) =>
    setFavs(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  return { favs, toggle }
}

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang())
  const [langOpen, setLangOpen] = useState(false)
  const t = STRINGS[lang]

  const [query, setQuery] = useState('')
  const [country, setCountry] = useState<string>('all')
  const [category, setCategory] = useState<Category | 'all'>('all')
  const [onlyFavs, setOnlyFavs] = useState(false)
  const [onlyKeto, setOnlyKeto] = useState(false)
  const [kids, setKids] = useState<'all' | 'solo' | 'adult'>('all')
  const [selected, setSelected] = useState<Recipe | null>(null)
  const [adding, setAdding] = useState(false)
  const [formName, setFormName] = useState('')
  const [formLink, setFormLink] = useState('')
  const [formCat, setFormCat] = useState<Category>('principal')

  const { mine, add, remove } = useMyRecipes()
  const { favs, toggle } = useFavorites()

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr'
  }, [lang])

  const changeLang = (l: Lang) => {
    setLang(l)
    saveLang(l)
    setLangOpen(false)
  }

  const countryLabel = (name: string) =>
    name === 'Mis recetas' ? t.myRecipes : name === 'Internacional' ? t.international : name

  const all = useMemo(() => [...mine, ...RECIPES], [mine])

  const countries = useMemo(() => {
    const seen = new Map<string, string>()
    for (const r of all) if (!seen.has(r.country)) seen.set(r.country, r.flag)
    return [...seen.entries()].map(([name, flag]) => ({ name, flag }))
  }, [all])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return all.filter(r => {
      if (country !== 'all' && r.country !== country) return false
      if (category !== 'all' && r.category !== category) return false
      if (onlyFavs && !favs.has(r.id)) return false
      if (onlyKeto && !r.keto) return false
      if (kids !== 'all' && r.kids !== kids) return false
      if (q && !`${r.name} ${r.country} ${r.ingredients.join(' ')}`.toLowerCase().includes(q)) return false
      return true
    })
  }, [all, query, country, category, onlyFavs, onlyKeto, kids, favs])

  useEffect(() => {
    if (!selected && !adding) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelected(null)
        setAdding(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected, adding])

  const surprise = () => {
    const pool = filtered.length ? filtered : all
    setSelected(pool[Math.floor(Math.random() * pool.length)])
  }

  const submitRecipe = () => {
    const name = formName.trim()
    const link = formLink.trim()
    if (!name || !link) return
    const recipe: Recipe = {
      id: `mine-${Date.now()}`,
      name,
      country: 'Mis recetas',
      flag: '📱',
      category: formCat,
      emoji: '📹',
      minutes: 0,
      servings: 0,
      difficulty: 1,
      ingredients: [],
      steps: [],
      user: true,
      video: link
    }
    add(recipe)
    setFormName('')
    setFormLink('')
    setFormCat('principal')
    setAdding(false)
    setSelected(recipe)
  }

  const current = LANGS.find(l => l.code === lang) ?? LANGS[0]

  return (
    <div className="app">
      <header className="topbar">
        <div className="topline">
          <div className="brand">
            <span className="brand-emoji" aria-hidden="true">🍲</span>
            <div>
              <h1>Cocina del Mundo</h1>
              <p className="tagline">{t.tagline}</p>
            </div>
          </div>
          <div className="langpick">
            <button className="langbtn" onClick={() => setLangOpen(o => !o)} aria-label={t.langLabel}>
              🌐 {current.badge} ▾
            </button>
            {langOpen && (
              <div className="langmenu">
                {LANGS.map(l => (
                  <button
                    key={l.code}
                    className={`langopt ${l.code === lang ? 'on' : ''}`}
                    onClick={() => changeLang(l.code)}
                  >
                    <b>{l.badge}</b> {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="search-row">
          <div className="search">
            <span aria-hidden="true">🔎</span>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchPlaceholder}
            />
            {query && (
              <button className="clear" onClick={() => setQuery('')} aria-label="✕">✕</button>
            )}
          </div>
          <button className="surprise" onClick={surprise} title={t.surpriseTitle}>🎲</button>
        </div>
        <button className="add-cta" onClick={() => setAdding(true)}>{t.addCta}</button>
      </header>

      <section className="filters" aria-label="Filtros">
        <div className="chips">
          <button className={`chip ${country === 'all' ? 'on' : ''}`} onClick={() => setCountry('all')}>
            🌍 {t.countAll}
          </button>
          {countries.map(c => (
            <button
              key={c.name}
              className={`chip ${country === c.name ? 'on' : ''}`}
              onClick={() => setCountry(c.name)}
            >
              {c.flag} {countryLabel(c.name)}
            </button>
          ))}
        </div>
        <div className="chips">
          <button className={`chip alt ${category === 'all' ? 'on' : ''}`} onClick={() => setCategory('all')}>
            {t.typeAll}
          </button>
          {CATEGORIES.map(c => (
            <button
              key={c}
              className={`chip alt ${category === c ? 'on' : ''}`}
              onClick={() => setCategory(c)}
            >
              {CATEGORY_EMOJI[c]} {t.cat[c]}
            </button>
          ))}
          <button className={`chip fav ${onlyFavs ? 'on' : ''}`} onClick={() => setOnlyFavs(v => !v)}>
            ❤️ {t.favorites}
          </button>
          <button className={`chip keto ${onlyKeto ? 'on' : ''}`} onClick={() => setOnlyKeto(v => !v)}>
            🥑 {t.keto}
          </button>
          <button
            className={`chip kids ${kids === 'solo' ? 'on' : ''}`}
            onClick={() => setKids(k => (k === 'solo' ? 'all' : 'solo'))}
          >
            🧒 {t.kidsSolo}
          </button>
          <button
            className={`chip kids ${kids === 'adult' ? 'on' : ''}`}
            onClick={() => setKids(k => (k === 'adult' ? 'all' : 'adult'))}
          >
            👨‍👧 {t.kidsAdult}
          </button>
        </div>
      </section>

      <p className="count">{t.count(filtered.length)}</p>

      {filtered.length === 0 ? (
        <div className="empty">
          <span>🥲</span>
          <p>{t.empty}</p>
        </div>
      ) : (
        <main className="grid">
          {filtered.map(r => (
            <button key={r.id} className="card" onClick={() => setSelected(r)}>
              <span
                className={`heart ${favs.has(r.id) ? 'on' : ''}`}
                role="button"
                aria-label={t.favorites}
                onClick={e => {
                  e.stopPropagation()
                  toggle(r.id)
                }}
              >
                {favs.has(r.id) ? '❤️' : '🤍'}
              </span>
              <span className="card-emoji" aria-hidden="true">{r.emoji}</span>
              <span className="card-name">{r.name}</span>
              <span className="card-country">{r.flag} {countryLabel(r.country)}</span>
              {r.keto && <span className="keto-tag">🥑 {t.keto}</span>}
              {r.kids === 'solo' && <span className="kid-tag solo">🧒 {t.badgeSolo}</span>}
              {r.kids === 'adult' && <span className="kid-tag adult">👨‍👧 {t.badgeAdult}</span>}
              <span className="card-meta">
                {r.user && r.video ? (
                  <span className="source">{videoInfo(r.video).icon} {videoInfo(r.video).label}</span>
                ) : (
                  <>
                    <span>⏱️ {r.minutes} {t.minShort}</span>
                    <span>👥 {r.servings}</span>
                    <span className={`diff d${r.difficulty}`}>{t.diff[r.difficulty - 1]}</span>
                  </>
                )}
              </span>
            </button>
          ))}
        </main>
      )}

      {selected && (
        <div className="overlay" onClick={() => setSelected(null)}>
          <div className="sheet" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
            <button className="close" onClick={() => setSelected(null)} aria-label="✕">✕</button>
            <div className="sheet-head">
              <span className="sheet-emoji" aria-hidden="true">{selected.emoji}</span>
              <div>
                <h2>{selected.name}</h2>
                <p className="sheet-country">{selected.flag} {countryLabel(selected.country)} · {t.cat[selected.category]}</p>
              </div>
            </div>

            <div className="sheet-meta">
              {selected.user && selected.video ? (
                <span className="source">{videoInfo(selected.video).icon} {videoInfo(selected.video).label}</span>
              ) : (
                <>
                  <span>⏱️ {selected.minutes} {t.minShort}</span>
                  <span>👥 {t.servings(selected.servings)}</span>
                  <span className={`diff d${selected.difficulty}`}>{t.diff[selected.difficulty - 1]}</span>
                  {selected.keto && <span className="keto-tag">🥑 {t.keto}</span>}
                  {selected.kids === 'solo' && <span className="kid-tag solo">🧒 {t.badgeSolo}</span>}
                  {selected.kids === 'adult' && <span className="kid-tag adult">👨‍👧 {t.badgeAdult}</span>}
                </>
              )}
              <button
                className={`fav-btn ${favs.has(selected.id) ? 'on' : ''}`}
                onClick={() => toggle(selected.id)}
              >
                {favs.has(selected.id) ? t.savedFav : t.saveFav}
              </button>
            </div>

            {selected.video && (
              <div className="video-box">
                {videoInfo(selected.video).embed ? (
                  <div className="video-frame">
                    <iframe
                      src={videoInfo(selected.video).embed ?? ''}
                      title={selected.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : null}
                <a className="watch-btn" href={videoInfo(selected.video).url} target="_blank" rel="noopener noreferrer">
                  {videoInfo(selected.video).icon} {t.watchIn(videoInfo(selected.video).label)} ↗
                </a>
              </div>
            )}

            {selected.ingredients.length > 0 && (
              <>
                <h3>🧺 {t.ingredients}</h3>
                <ul className="ingredients">
                  {selected.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </>
            )}

            {selected.steps.length > 0 && (
              <>
                <h3>👩‍🍳 {t.steps}</h3>
                <ol className="steps">
                  {selected.steps.map((s, i) => (
                    <li key={i}><span className="step-n">{i + 1}</span><span>{s}</span></li>
                  ))}
                </ol>
              </>
            )}

            {selected.user && (
              <button
                className="del-btn"
                onClick={() => {
                  remove(selected.id)
                  setSelected(null)
                }}
              >
                {t.deleteRecipe}
              </button>
            )}
          </div>
        </div>
      )}

      {adding && (
        <div className="overlay" onClick={() => setAdding(false)}>
          <div className="sheet form" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
            <button className="close" onClick={() => setAdding(false)} aria-label="✕">✕</button>
            <h2>{t.addTitle}</h2>
            <p className="form-help">{t.formHelp}</p>

            <label className="form-label">{t.nameLabel}</label>
            <input
              className="form-input"
              value={formName}
              onChange={e => setFormName(e.target.value)}
              placeholder={t.namePlaceholder}
            />

            <label className="form-label">{t.linkLabel}</label>
            <input
              className="form-input"
              value={formLink}
              onChange={e => setFormLink(e.target.value)}
              placeholder="https://www.tiktok.com/…  ·  https://youtu.be/…"
            />

            <label className="form-label">{t.typeLabel}</label>
            <div className="form-cats">
              {CATEGORIES.map(c => (
                <button
                  key={c}
                  className={`chip alt ${formCat === c ? 'on' : ''}`}
                  onClick={() => setFormCat(c)}
                >
                  {CATEGORY_EMOJI[c]} {t.cat[c]}
                </button>
              ))}
            </div>

            <button className="save-btn" onClick={submitRecipe} disabled={!formName.trim() || !formLink.trim()}>
              {t.saveRecipe}
            </button>
          </div>
        </div>
      )}

      <footer className="foot">{t.footer(RECIPES.length, countries.length)}</footer>
    </div>
  )
}
