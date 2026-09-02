// Localization for Diario Teclado — same shared contract as the arcade
// (reads `arcade.lang` + `?lang=` override). Practice text is kept ASCII &
// lowercase (no accents/dead-keys) so it types cleanly on any keyboard.

import type { Finger } from './lessons';

export type Lang = 'es' | 'en' | 'pt' | 'fr' | 'de' | 'it' | 'zh' | 'ja' | 'ar';

export const LANGS: { code: Lang; label: string }[] = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'pt', label: 'Português' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'it', label: 'Italiano' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
  { code: 'ar', label: 'العربية' }
];

export const RTL_LANGS: Lang[] = ['ar'];
const KEY = 'arcade.lang';

export type S = {
  langLabel: string;
  title: string;
  subtitle: string;
  lessons: string;
  diary: string;
  start: string;
  restart: string;
  next: string;
  back: string;
  wpm: string;
  wpmFull: string;
  accuracy: string;
  errors: string;
  time: string;
  best: string;
  finger: string;
  typeToStart: string;
  done: string;
  greatJob: string;
  noHistory: string;
  sessions: string;
  streak: (n: number) => string;
  useFinger: (f: string) => string;
  fingers: Record<Finger, string>;
  lsHome1: string;
  lsHome2: string;
  lsHome3: string;
  lsTop: string;
  lsBottom: string;
  lsNumbers: string;
  lsWords: string;
  lsSentences: string;
  words: string[];
  sentences: string[];
};

const F = (a: string, b: string, c: string, d: string, e: string, f: string, g: string, h: string, i: string): Record<Finger, string> => ({
  lp: a, lr: b, lm: c, li: d, ri: e, rm: f, rr: g, rp: h, th: i
});

export const STR: Record<Lang, S> = {
  es: {
    langLabel: 'Idioma', title: 'Diario Teclado', subtitle: 'Aprende a escribir con los 10 dedos', lessons: 'Lecciones', diary: 'Diario',
    start: 'Empezar', restart: 'Repetir', next: 'Siguiente', back: '‹ Lecciones', wpm: 'PPM', wpmFull: 'Palabras por minuto', accuracy: 'Precisión', errors: 'Errores', time: 'Tiempo', best: 'Mejor',
    finger: 'Dedo', typeToStart: 'Escribe para empezar…', done: '¡Completado!', greatJob: '¡Muy bien! Cada día un poquito.', noHistory: 'Aún no hay sesiones. ¡Empieza una lección!', sessions: 'Sesiones',
    streak: (n) => `Racha: ${n} día${n === 1 ? '' : 's'}`, useFinger: (f) => `Usa el ${f}`,
    fingers: F('meñique izquierdo', 'anular izquierdo', 'medio izquierdo', 'índice izquierdo', 'índice derecho', 'medio derecho', 'anular derecho', 'meñique derecho', 'pulgar'),
    lsHome1: 'Fila base: F y J', lsHome2: 'Fila base: D K S L', lsHome3: 'Fila base completa', lsTop: 'Fila de arriba', lsBottom: 'Fila de abajo', lsNumbers: 'Números', lsWords: 'Palabras', lsSentences: 'Frases',
    words: ['casa', 'sol', 'flor', 'gato', 'mesa', 'luna', 'rio', 'pan', 'mar', 'dedo', 'clase', 'juego', 'verde', 'salto'],
    sentences: ['el gato salta sobre la mesa', 'aprender a teclear es divertido', 'practica todos los dias un poco', 'las manos van en la fila base']
  },
  en: {
    langLabel: 'Language', title: 'Typing Diary', subtitle: 'Learn to type with all ten fingers', lessons: 'Lessons', diary: 'Diary',
    start: 'Start', restart: 'Retry', next: 'Next', back: '‹ Lessons', wpm: 'WPM', wpmFull: 'Words per minute', accuracy: 'Accuracy', errors: 'Errors', time: 'Time', best: 'Best',
    finger: 'Finger', typeToStart: 'Type to start…', done: 'Completed!', greatJob: 'Great job! A little every day.', noHistory: 'No sessions yet. Start a lesson!', sessions: 'Sessions',
    streak: (n) => `Streak: ${n} day${n === 1 ? '' : 's'}`, useFinger: (f) => `Use your ${f}`,
    fingers: F('left pinky', 'left ring', 'left middle', 'left index', 'right index', 'right middle', 'right ring', 'right pinky', 'thumb'),
    lsHome1: 'Home row: F and J', lsHome2: 'Home row: D K S L', lsHome3: 'Full home row', lsTop: 'Top row', lsBottom: 'Bottom row', lsNumbers: 'Numbers', lsWords: 'Words', lsSentences: 'Sentences',
    words: ['home', 'fire', 'word', 'game', 'type', 'fast', 'hand', 'desk', 'moon', 'rain', 'skill', 'learn', 'green', 'jump'],
    sentences: ['the quick brown fox jumps', 'typing well takes daily practice', 'keep your fingers on the home row', 'a little practice every day helps']
  },
  pt: {
    langLabel: 'Idioma', title: 'Diário do Teclado', subtitle: 'Aprenda a digitar com os dez dedos', lessons: 'Lições', diary: 'Diário',
    start: 'Começar', restart: 'Repetir', next: 'Próxima', back: '‹ Lições', wpm: 'PPM', wpmFull: 'Palavras por minuto', accuracy: 'Precisão', errors: 'Erros', time: 'Tempo', best: 'Melhor',
    finger: 'Dedo', typeToStart: 'Digite para começar…', done: 'Concluído!', greatJob: 'Muito bem! Um pouco por dia.', noHistory: 'Ainda não há sessões. Comece uma lição!', sessions: 'Sessões',
    streak: (n) => `Sequência: ${n} dia${n === 1 ? '' : 's'}`, useFinger: (f) => `Use o ${f}`,
    fingers: F('mindinho esquerdo', 'anelar esquerdo', 'médio esquerdo', 'indicador esquerdo', 'indicador direito', 'médio direito', 'anelar direito', 'mindinho direito', 'polegar'),
    lsHome1: 'Linha base: F e J', lsHome2: 'Linha base: D K S L', lsHome3: 'Linha base completa', lsTop: 'Linha de cima', lsBottom: 'Linha de baixo', lsNumbers: 'Números', lsWords: 'Palavras', lsSentences: 'Frases',
    words: ['casa', 'sol', 'flor', 'gato', 'mesa', 'lua', 'rio', 'pao', 'mar', 'dedo', 'aula', 'jogo', 'verde', 'salto'],
    sentences: ['o gato pula sobre a mesa', 'aprender a digitar e divertido', 'pratique um pouco todos os dias', 'as maos ficam na linha base']
  },
  fr: {
    langLabel: 'Langue', title: 'Journal du Clavier', subtitle: 'Apprends à taper avec tes dix doigts', lessons: 'Leçons', diary: 'Journal',
    start: 'Commencer', restart: 'Recommencer', next: 'Suivant', back: '‹ Leçons', wpm: 'MPM', wpmFull: 'Mots par minute', accuracy: 'Précision', errors: 'Erreurs', time: 'Temps', best: 'Meilleur',
    finger: 'Doigt', typeToStart: 'Tape pour commencer…', done: 'Terminé !', greatJob: 'Bravo ! Un peu chaque jour.', noHistory: 'Pas encore de sessions. Commence une leçon !', sessions: 'Sessions',
    streak: (n) => `Série : ${n} jour${n === 1 ? '' : 's'}`, useFinger: (f) => `Utilise l’${f}`,
    fingers: F('auriculaire gauche', 'annulaire gauche', 'majeur gauche', 'index gauche', 'index droit', 'majeur droit', 'annulaire droit', 'auriculaire droit', 'pouce'),
    lsHome1: 'Rangée de repos : F et J', lsHome2: 'Rangée de repos : D K S L', lsHome3: 'Rangée de repos complète', lsTop: 'Rangée du haut', lsBottom: 'Rangée du bas', lsNumbers: 'Chiffres', lsWords: 'Mots', lsSentences: 'Phrases',
    words: ['jeu', 'feu', 'mot', 'main', 'lune', 'mer', 'pain', 'vert', 'salut', 'ecole', 'rapide', 'sauter', 'porte', 'table'],
    sentences: ['le chat saute sur la table', 'taper vite demande de la pratique', 'garde les doigts sur la rangee de repos', 'un peu chaque jour, ca aide']
  },
  de: {
    langLabel: 'Sprache', title: 'Tastatur-Tagebuch', subtitle: 'Lerne mit zehn Fingern zu tippen', lessons: 'Lektionen', diary: 'Tagebuch',
    start: 'Start', restart: 'Nochmal', next: 'Weiter', back: '‹ Lektionen', wpm: 'WPM', wpmFull: 'Wörter pro Minute', accuracy: 'Genauigkeit', errors: 'Fehler', time: 'Zeit', best: 'Beste',
    finger: 'Finger', typeToStart: 'Tippe zum Starten…', done: 'Geschafft!', greatJob: 'Gut gemacht! Jeden Tag ein bisschen.', noHistory: 'Noch keine Sitzungen. Starte eine Lektion!', sessions: 'Sitzungen',
    streak: (n) => `Serie: ${n} Tag${n === 1 ? '' : 'e'}`, useFinger: (f) => `Nimm den ${f}`,
    fingers: F('linker kleiner Finger', 'linker Ringfinger', 'linker Mittelfinger', 'linker Zeigefinger', 'rechter Zeigefinger', 'rechter Mittelfinger', 'rechter Ringfinger', 'rechter kleiner Finger', 'Daumen'),
    lsHome1: 'Grundreihe: F und J', lsHome2: 'Grundreihe: D K S L', lsHome3: 'Ganze Grundreihe', lsTop: 'Obere Reihe', lsBottom: 'Untere Reihe', lsNumbers: 'Zahlen', lsWords: 'Wörter', lsSentences: 'Sätze',
    words: ['haus', 'sonne', 'wort', 'spiel', 'hand', 'mond', 'meer', 'brot', 'gruen', 'schule', 'schnell', 'springen', 'tuer', 'katze'],
    sentences: ['die katze springt auf den tisch', 'schnell tippen braucht uebung', 'lass die finger auf der grundreihe', 'jeden tag ein wenig hilft']
  },
  it: {
    langLabel: 'Lingua', title: 'Diario Tastiera', subtitle: 'Impara a scrivere con dieci dita', lessons: 'Lezioni', diary: 'Diario',
    start: 'Inizia', restart: 'Ripeti', next: 'Avanti', back: '‹ Lezioni', wpm: 'PPM', wpmFull: 'Parole al minuto', accuracy: 'Precisione', errors: 'Errori', time: 'Tempo', best: 'Migliore',
    finger: 'Dito', typeToStart: 'Scrivi per iniziare…', done: 'Completato!', greatJob: 'Bravo! Un po’ ogni giorno.', noHistory: 'Ancora nessuna sessione. Inizia una lezione!', sessions: 'Sessioni',
    streak: (n) => `Serie: ${n} giorn${n === 1 ? 'o' : 'i'}`, useFinger: (f) => `Usa il ${f}`,
    fingers: F('mignolo sinistro', 'anulare sinistro', 'medio sinistro', 'indice sinistro', 'indice destro', 'medio destro', 'anulare destro', 'mignolo destro', 'pollice'),
    lsHome1: 'Riga base: F e J', lsHome2: 'Riga base: D K S L', lsHome3: 'Riga base completa', lsTop: 'Riga in alto', lsBottom: 'Riga in basso', lsNumbers: 'Numeri', lsWords: 'Parole', lsSentences: 'Frasi',
    words: ['casa', 'sole', 'fiore', 'gatto', 'mano', 'luna', 'mare', 'pane', 'verde', 'scuola', 'veloce', 'salto', 'porta', 'gioco'],
    sentences: ['il gatto salta sul tavolo', 'scrivere veloce richiede pratica', 'tieni le dita sulla riga base', 'un poco ogni giorno aiuta']
  },
  zh: {
    langLabel: '语言', title: '打字日记', subtitle: '学会用十个手指打字', lessons: '课程', diary: '日记',
    start: '开始', restart: '重来', next: '下一课', back: '‹ 课程', wpm: 'WPM', wpmFull: '每分钟词数', accuracy: '准确率', errors: '错误', time: '时间', best: '最佳',
    finger: '手指', typeToStart: '开始打字…', done: '完成！', greatJob: '很棒！每天练一点。', noHistory: '还没有记录。开始一课吧！', sessions: '次数',
    streak: (n) => `连续 ${n} 天`, useFinger: (f) => `用${f}`,
    fingers: F('左手小指', '左手无名指', '左手中指', '左手食指', '右手食指', '右手中指', '右手无名指', '右手小指', '拇指'),
    lsHome1: '基准键：F 和 J', lsHome2: '基准键：D K S L', lsHome3: '完整基准键行', lsTop: '上排', lsBottom: '下排', lsNumbers: '数字', lsWords: '单词', lsSentences: '句子',
    words: ['home', 'fire', 'word', 'game', 'type', 'fast', 'hand', 'desk', 'moon', 'rain', 'skill', 'learn', 'green', 'jump'],
    sentences: ['the quick brown fox jumps', 'typing well takes daily practice', 'keep your fingers on the home row', 'a little practice every day helps']
  },
  ja: {
    langLabel: '言語', title: 'タイピング日記', subtitle: '10本の指でタイピングを覚えよう', lessons: 'レッスン', diary: '日記',
    start: 'スタート', restart: 'もう一度', next: '次へ', back: '‹ レッスン', wpm: 'WPM', wpmFull: '1分あたりの語数', accuracy: '正確さ', errors: 'ミス', time: '時間', best: 'ベスト',
    finger: '指', typeToStart: '入力して開始…', done: '完了！', greatJob: 'よくできました！毎日少しずつ。', noHistory: 'まだ記録がありません。レッスンを始めよう！', sessions: '回数',
    streak: (n) => `連続 ${n} 日`, useFinger: (f) => `${f}を使おう`,
    fingers: F('左手の小指', '左手の薬指', '左手の中指', '左手の人差し指', '右手の人差し指', '右手の中指', '右手の薬指', '右手の小指', '親指'),
    lsHome1: 'ホーム段：F と J', lsHome2: 'ホーム段：D K S L', lsHome3: 'ホーム段ぜんぶ', lsTop: '上段', lsBottom: '下段', lsNumbers: '数字', lsWords: '単語', lsSentences: '文',
    words: ['home', 'fire', 'word', 'game', 'type', 'fast', 'hand', 'desk', 'moon', 'rain', 'skill', 'learn', 'green', 'jump'],
    sentences: ['the quick brown fox jumps', 'typing well takes daily practice', 'keep your fingers on the home row', 'a little practice every day helps']
  },
  ar: {
    langLabel: 'اللغة', title: 'يوميات الكيبورد', subtitle: 'تعلّم الكتابة بالأصابع العشرة', lessons: 'الدروس', diary: 'اليوميات',
    start: 'ابدأ', restart: 'أعد', next: 'التالي', back: 'الدروس ›', wpm: 'ك/د', wpmFull: 'كلمات في الدقيقة', accuracy: 'الدقة', errors: 'الأخطاء', time: 'الوقت', best: 'الأفضل',
    finger: 'الإصبع', typeToStart: '…اكتب لتبدأ', done: '!أُنجز', greatJob: '.أحسنت! القليل كل يوم', noHistory: '!لا جلسات بعد. ابدأ درسًا', sessions: 'الجلسات',
    streak: (n) => `${n} أيام متتالية`, useFinger: (f) => `استخدم ${f}`,
    fingers: F('الخنصر الأيسر', 'البنصر الأيسر', 'الوسطى اليسرى', 'السبابة اليسرى', 'السبابة اليمنى', 'الوسطى اليمنى', 'البنصر الأيمن', 'الخنصر الأيمن', 'الإبهام'),
    lsHome1: 'الصف الأساسي: F و J', lsHome2: 'الصف الأساسي: D K S L', lsHome3: 'الصف الأساسي كاملًا', lsTop: 'الصف العلوي', lsBottom: 'الصف السفلي', lsNumbers: 'الأرقام', lsWords: 'كلمات', lsSentences: 'جمل',
    words: ['home', 'fire', 'word', 'game', 'type', 'fast', 'hand', 'desk', 'moon', 'rain', 'skill', 'learn', 'green', 'jump'],
    sentences: ['the quick brown fox jumps', 'typing well takes daily practice', 'keep your fingers on the home row', 'a little practice every day helps']
  }
};

function pick(v: string | null): Lang | null {
  return v && LANGS.some((l) => l.code === v) ? (v as Lang) : null;
}

export function initialLang(): Lang {
  try {
    const url = new URLSearchParams(window.location.search).get('lang');
    const fromUrl = pick((url ?? '').toLowerCase());
    if (fromUrl) return fromUrl;
    const stored = pick(localStorage.getItem(KEY));
    if (stored) return stored;
  } catch {
    /* ignore */
  }
  const nav = (typeof navigator !== 'undefined' ? navigator.language : 'en').slice(0, 2).toLowerCase();
  return pick(nav) ?? 'en';
}

export function saveLang(lang: Lang): void {
  try {
    localStorage.setItem(KEY, lang);
  } catch {
    /* ignore */
  }
}
