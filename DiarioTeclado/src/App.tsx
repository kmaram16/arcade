import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import { LANGS, RTL_LANGS, STR, initialLang, saveLang, type Lang } from './i18n';
import { FINGER_COLOR, KEYBOARD, KEY_FINGER, LESSONS, type Lesson } from './lessons';

const MIN_LABEL: Record<Lang, string> = {
  es: 'min',
  en: 'min',
  pt: 'min',
  fr: 'min',
  de: 'Min.',
  it: 'min',
  zh: '分钟',
  ja: '分',
  ar: 'دقيقة'
};

const TAP: Record<Lang, string> = {
  es: 'Toca aquí y escribe',
  en: 'Tap here and type',
  pt: 'Toque aqui e digite',
  fr: 'Touche ici et tape',
  de: 'Hier tippen und schreiben',
  it: 'Tocca qui e scrivi',
  zh: '点这里开始打字',
  ja: 'ここをタップして入力',
  ar: 'المس هنا واكتب'
};

const MINS_KEY = 'kmm-typing-mins';
const DIARY_KEY = 'kmm-typing-diary';
type Entry = { day: string; ts: number; lesson: string; wpm: number; acc: number };

const today = () => new Date().toISOString().slice(0, 10);

function loadDiary(): Entry[] {
  try {
    const v = JSON.parse(localStorage.getItem(DIARY_KEY) || '[]');
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const s = STR[lang];
  const rtl = RTL_LANGS.includes(lang);

  const [view, setView] = useState<'lessons' | 'practice'>('lessons');
  const [lesson, setLesson] = useState<Lesson>(LESSONS[0]);
  const [diary, setDiary] = useState<Entry[]>(() => loadDiary());

  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [errors, setErrors] = useState(0);
  const [wrong, setWrong] = useState(false);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [finishedAt, setFinishedAt] = useState<number | null>(null);
  const [nowTick, setNowTick] = useState(0);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
  }, [lang, rtl]);

  // Build the practice text for the current lesson.
  const text = useMemo(() => {
    if (lesson.kind === 'drill') return lesson.text ?? '';
    if (lesson.kind === 'words') return s.words.join(' ');
    return s.sentences.join('. ') + '.';
  }, [lesson, s]);

  const startLesson = (l: Lesson) => {
    setLesson(l);
    setView('practice');
    setIndex(0);
    setCorrect(0);
    setErrors(0);
    correctRef.current = 0;
    errorsRef.current = 0;
    setWrong(false);
    setStartedAt(null);
    setFinishedAt(null);
  };

  const restart = () => startLesson(lesson);

  const finish = (finalCorrect: number, finalErrors: number, started: number) => {
    const end = Date.now();
    setFinishedAt(end);
    const minutes = Math.max(0.001, (end - started) / 60000);
    const wpm = Math.round(finalCorrect / 5 / minutes);
    const acc = Math.round((finalCorrect / Math.max(1, finalCorrect + finalErrors)) * 100);
    const entry: Entry = { day: today(), ts: end, lesson: lesson.id, wpm, acc };
    setDiary((prev) => {
      const next = [...prev, entry].slice(-200);
      try {
        localStorage.setItem(DIARY_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const inputRef = useRef<HTMLInputElement | null>(null);
  const focusInput = () => inputRef.current?.focus();
  const correctRef = useRef(0);
  const errorsRef = useRef(0);
  const durationRef = useRef(0);

  // Process one typed character. Driven by the hidden capture input's onChange,
  // so it works with a physical keyboard AND on-screen / touch keyboards
  // (mobile, tablet, iPad).
  const typeChar = (key: string) => {
    if (finishedAt) return;
    const target = text[index];
    if (target === undefined) return;
    const started = startedAt ?? Date.now();
    if (startedAt === null) setStartedAt(started);
    const hit = key === target || (target >= 'a' && target <= 'z' && key.toLowerCase() === target);
    if (hit) {
      const nextCorrect = correct + 1;
      correctRef.current = nextCorrect;
      setCorrect(nextCorrect);
      // Loop the drill text so you keep typing until the timer runs out.
      setIndex(index + 1 >= text.length ? 0 : index + 1);
      setWrong(false);
    } else {
      errorsRef.current += 1;
      setErrors((x) => x + 1);
      setWrong(true);
      window.setTimeout(() => setWrong(false), 150);
    }
  };

  // Physical-keyboard fallback: only used when the capture input isn't focused
  // (so it never double-counts with the input's onChange).
  useEffect(() => {
    if (view !== 'practice') return;
    const onKey = (e: KeyboardEvent) => {
      if (finishedAt) return;
      if (document.activeElement === inputRef.current) return; // input onChange handles it
      if (e.ctrlKey || e.altKey || e.metaKey) return;
      const key = e.key;
      if (key.length !== 1) return;
      e.preventDefault();
      focusInput();
      typeChar(key);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, index, correct, errors, startedAt, finishedAt, text]);

  // Keep the capture input focused when a lesson is on screen.
  useEffect(() => {
    if (view === 'practice' && !finishedAt) focusInput();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, lesson, finishedAt]);

  // Countdown clock: the lesson lasts the chosen minutes, then finishes.
  useEffect(() => {
    if (view !== 'practice' || startedAt === null || finishedAt !== null) return;
    const id = window.setInterval(() => {
      const now = Date.now();
      setNowTick(now);
      if (now - startedAt >= durationRef.current) finish(correctRef.current, errorsRef.current, startedAt);
    }, 250);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, startedAt, finishedAt]);

  const elapsedMs = startedAt === null ? 0 : (finishedAt ?? (nowTick || startedAt)) - startedAt;
  const minutes = Math.max(0.001, elapsedMs / 60000);
  const wpm = startedAt === null ? 0 : Math.round(correct / 5 / minutes);
  const acc = correct + errors === 0 ? 100 : Math.round((correct / (correct + errors)) * 100);
  const elapsedS = Math.floor(elapsedMs / 1000);
  const timeStr = `${Math.floor(elapsedS / 60)}:${String(elapsedS % 60).padStart(2, '0')}`;

  const curChar = index < text.length ? text[index] : '';
  const curFinger = KEY_FINGER[curChar];
  const finished = finishedAt !== null;

  // Diary summary.
  const bestWpm = diary.reduce((m, e) => Math.max(m, e.wpm), 0);
  const streak = useMemo(() => {
    const days = new Set(diary.map((e) => e.day));
    let n = 0;
    const d = new Date();
    // count consecutive days up to today (or yesterday if not played today)
    if (!days.has(today())) d.setDate(d.getDate() - 1);
    while (days.has(d.toISOString().slice(0, 10))) {
      n++;
      d.setDate(d.getDate() - 1);
    }
    return n;
  }, [diary]);
  const bestFor = (id: string) => diary.filter((e) => e.lesson === id).reduce((m, e) => Math.max(m, e.wpm), 0);

  // Per-lesson minutes the user picks with a vertical slider (min 5), remembered.
  const [customMins, setCustomMins] = useState<Record<string, number>>(() => {
    try {
      const v = JSON.parse(localStorage.getItem(MINS_KEY) || '{}');
      return v && typeof v === 'object' ? v : {};
    } catch {
      return {};
    }
  });
  const minOf = (l: Lesson) => customMins[l.id] ?? l.min;
  // The session lasts the chosen minutes; show the remaining time counting down.
  durationRef.current = minOf(lesson) * 60000;
  const remS =
    startedAt === null ? minOf(lesson) * 60 : Math.max(0, Math.ceil((durationRef.current - elapsedMs) / 1000));
  const timeLeft = `${Math.floor(remS / 60)}:${String(remS % 60).padStart(2, '0')}`;
  const setMin = (id: string, val: number) => {
    const next = Math.max(5, Math.min(20, Math.round(val)));
    setCustomMins((prev) => {
      const m = { ...prev, [id]: next };
      try {
        localStorage.setItem(MINS_KEY, JSON.stringify(m));
      } catch {
        /* ignore */
      }
      return m;
    });
  };

  const langSelect = (
    <select
      className="lang-select"
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
  );

  // ——— Lessons view ———
  if (view === 'lessons') {
    return (
      <div className="wrap">
        <header className="head">
          <div>
            <p className="eyebrow">⌨️ from KMM</p>
            <h1>{s.title}</h1>
            <p className="sub">{s.subtitle}</p>
          </div>
          {langSelect}
        </header>

        <div className="diary-bar">
          <div className="stat">
            <span>{s.best} {s.wpm}</span>
            <strong>{bestWpm || '—'}</strong>
          </div>
          <div className="stat">
            <span>{s.sessions}</span>
            <strong>{diary.length}</strong>
          </div>
          <div className="stat">
            <span>🔥</span>
            <strong>{s.streak(streak)}</strong>
          </div>
        </div>

        <h2 className="section">{s.lessons}</h2>
        <div className="lesson-grid">
          {LESSONS.map((l, i) => (
            <div
              key={l.id}
              className="lesson-card"
              role="button"
              tabIndex={0}
              onClick={() => startLesson(l)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && startLesson(l)}
            >
              <div className="lesson-main">
                <span className="lesson-n">{i + 1}</span>
                <span className="lesson-name">{s[l.nameKey as keyof typeof s] as string}</span>
                {bestFor(l.id) > 0 && <span className="lesson-best">{s.best}: {bestFor(l.id)} {s.wpm}</span>}
              </div>
              <div className="lesson-slider" onClick={(e) => e.stopPropagation()}>
                <input
                  className="vrange"
                  type="range"
                  min={5}
                  max={20}
                  step={1}
                  value={minOf(l)}
                  onChange={(e) => setMin(l.id, Number(e.target.value))}
                  onClick={(e) => e.stopPropagation()}
                  aria-label="min"
                />
                <span className="lesson-min">⏱ {minOf(l)} {MIN_LABEL[lang]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ——— Practice view ———
  return (
    <div className="wrap">
      <header className="head compact">
        <button className="back" onClick={() => setView('lessons')}>{s.back}</button>
        <span className="lesson-title">{s[lesson.nameKey as keyof typeof s] as string}</span>
        {langSelect}
      </header>

      <input
        ref={inputRef}
        className="capture"
        type="text"
        inputMode="text"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="none"
        spellCheck={false}
        aria-hidden
        onChange={(e) => {
          const v = e.target.value;
          e.target.value = '';
          for (const ch of v) typeChar(ch);
        }}
      />

      <div className="hud">
        <div className="hud-chip"><span>{s.wpm}</span><strong>{wpm}</strong></div>
        <div className="hud-chip"><span>{s.accuracy}</span><strong>{acc}%</strong></div>
        <div className="hud-chip"><span>{s.errors}</span><strong>{errors}</strong></div>
        <div className="hud-chip"><span>{s.time}</span><strong>{timeLeft}</strong></div>
      </div>

      <div className={`text-pane ${wrong ? 'shake' : ''}`} onClick={focusInput}>
        {text.split('').map((ch, i) => (
          <span key={i} className={`ch ${i < index ? 'done' : i === index ? 'cur' : ''}`}>
            {ch === ' ' ? ' ' : ch}
          </span>
        ))}
      </div>

      {startedAt === null && (
        <p className="tap-hint" onClick={focusInput}>👆 {TAP[lang]}</p>
      )}

      <div className="finger-hint">
        {curFinger && (
          <>
            <span className="finger-dot" style={{ background: FINGER_COLOR[curFinger] }} />
            {s.useFinger(s.fingers[curFinger])}
          </>
        )}
        {startedAt === null && <span className="muted"> · {s.typeToStart}</span>}
      </div>

      <div className="keyboard">
        {KEYBOARD.map((row, r) => (
          <div className="kb-row" key={r}>
            {row.map((key) => {
              const isNext = curChar && (key.k === curChar || (curChar >= 'a' && curChar <= 'z' && key.k === curChar));
              return (
                <span
                  key={key.k}
                  className={`kb-key ${isNext ? 'next' : ''}`}
                  style={{ ['--fc' as string]: FINGER_COLOR[key.f] }}
                >
                  {key.label ?? key.k}
                </span>
              );
            })}
          </div>
        ))}
        <div className="kb-row">
          <span className={`kb-key space ${curChar === ' ' ? 'next' : ''}`} style={{ ['--fc' as string]: FINGER_COLOR.th }}>
            ␣
          </span>
        </div>
      </div>

      {finished && (
        <div className="overlay">
          <div className="card">
            <p className="ov-eyebrow">{s.done}</p>
            <div className="ov-stats">
              <div><span>{s.wpm}</span><strong>{wpm}</strong></div>
              <div><span>{s.accuracy}</span><strong>{acc}%</strong></div>
              <div><span>{s.time}</span><strong>{timeStr}</strong></div>
            </div>
            <p className="ov-msg">{s.greatJob}</p>
            <div className="ov-actions">
              <button className="btn" onClick={restart}>{s.restart}</button>
              <button
                className="btn primary"
                onClick={() => {
                  const i = LESSONS.findIndex((l) => l.id === lesson.id);
                  startLesson(LESSONS[Math.min(LESSONS.length - 1, i + 1)]);
                }}
              >
                {s.next}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
