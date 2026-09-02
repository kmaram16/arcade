// Localization for Infinite Craft — mirrors the dashboard's 9-language system
// and, crucially, reads the SAME stored key ('arcade.lang'). In production every
// game ships under the dashboard's origin, so the language the player picked on
// the launcher is already in localStorage here — the game opens in that language
// with no extra wiring. A `?lang=xx` in the URL wins over that (used in dev,
// where each game is a different origin and localStorage isn't shared).

export type Lang = 'es' | 'en' | 'pt' | 'fr' | 'de' | 'it' | 'zh' | 'ja' | 'ar';

/** Order used everywhere names are stored as a flat array. */
export const LANG_ORDER: Lang[] = ['es', 'en', 'pt', 'fr', 'de', 'it', 'zh', 'ja', 'ar'];

/** Languages written right-to-left (drives document.dir). */
export const RTL_LANGS: Lang[] = ['ar'];

export const LANGS: { code: Lang; label: string; badge: string; tint: [string, string] }[] = [
  { code: 'es', label: 'Español', badge: 'ES', tint: ['#f43f5e', '#f59e0b'] },
  { code: 'en', label: 'English', badge: 'EN', tint: ['#3b82f6', '#6366f1'] },
  { code: 'pt', label: 'Português', badge: 'PT', tint: ['#22c55e', '#eab308'] },
  { code: 'fr', label: 'Français', badge: 'FR', tint: ['#6366f1', '#3b82f6'] },
  { code: 'de', label: 'Deutsch', badge: 'DE', tint: ['#475569', '#eab308'] },
  { code: 'it', label: 'Italiano', badge: 'IT', tint: ['#22c55e', '#ef4444'] },
  { code: 'zh', label: '中文', badge: '中', tint: ['#ef4444', '#f59e0b'] },
  { code: 'ja', label: '日本語', badge: '日', tint: ['#ef4444', '#f43f5e'] },
  { code: 'ar', label: 'العربية', badge: 'ع', tint: ['#0ea5e9', '#14b8a6'] }
];

// Shared with the dashboard so a language chosen there carries into the game.
const LANG_KEY = 'arcade.lang';

export type Strings = {
  title: string;
  subtitle: string;
  tagline: string;
  discoveries: (n: number) => string;
  searchPlaceholder: string;
  emptySearch: string;
  clear: string;
  reset: string;
  resetConfirm: string;
  help: string;
  helpDrag: string;
  helpPad: string;
  firstDiscovery: string;
  inventory: string;
  padSpawn: string;
  padGrab: string;
  padDrop: string;
  padDelete: string;
  padCycle: string;
  padHint: string;
  padConnected: string;
  langLabel: string;
};

export const STRINGS: Record<Lang, Strings> = {
  es: {
    title: 'Infinite Craft',
    subtitle: 'from KMM',
    tagline: 'Mezcla de todo. Hasta lo imposible.',
    discoveries: (n) => `${n} descubrimientos`,
    searchPlaceholder: 'Busca un elemento',
    emptySearch: 'Nada coincide.',
    clear: 'Limpiar mesa',
    reset: 'Reiniciar',
    resetConfirm: '¿Borrar todos tus descubrimientos y empezar de cero?',
    help: 'Cómo jugar',
    helpDrag: 'Arrastra un elemento sobre otro para fusionarlos y crear algo nuevo.',
    helpPad: 'Con mando: stick mueve el cursor, A coge/suelta, Y saca el elemento elegido, LB/RB cambian de elemento, B lo borra.',
    firstDiscovery: '¡Primer descubrimiento!',
    inventory: 'Tus elementos',
    padSpawn: 'Sacar',
    padGrab: 'Coger',
    padDrop: 'Soltar',
    padDelete: 'Borrar',
    padCycle: 'Cambiar',
    padHint: 'Mando conectado 🎮',
    padConnected: 'Mando conectado',
    langLabel: 'Idioma'
  },
  en: {
    title: 'Infinite Craft',
    subtitle: 'from KMM',
    tagline: 'Mix anything. Even the impossible.',
    discoveries: (n) => `${n} discoveries`,
    searchPlaceholder: 'Search an element',
    emptySearch: 'Nothing matches.',
    clear: 'Clear table',
    reset: 'Reset',
    resetConfirm: 'Erase all your discoveries and start over?',
    help: 'How to play',
    helpDrag: 'Drag one element onto another to fuse them into something new.',
    helpPad: 'Gamepad: stick moves the cursor, A grabs/drops, Y spawns the picked element, LB/RB switch element, B deletes it.',
    firstDiscovery: 'First discovery!',
    inventory: 'Your elements',
    padSpawn: 'Spawn',
    padGrab: 'Grab',
    padDrop: 'Drop',
    padDelete: 'Delete',
    padCycle: 'Switch',
    padHint: 'Gamepad connected 🎮',
    padConnected: 'Gamepad connected',
    langLabel: 'Language'
  },
  pt: {
    title: 'Infinite Craft',
    subtitle: 'from KMM',
    tagline: 'Misture tudo. Até o impossível.',
    discoveries: (n) => `${n} descobertas`,
    searchPlaceholder: 'Busque um elemento',
    emptySearch: 'Nada corresponde.',
    clear: 'Limpar mesa',
    reset: 'Reiniciar',
    resetConfirm: 'Apagar todas as suas descobertas e começar do zero?',
    help: 'Como jogar',
    helpDrag: 'Arraste um elemento sobre outro para fundi-los em algo novo.',
    helpPad: 'Controle: o stick move o cursor, A pega/solta, Y cria o elemento escolhido, LB/RB trocam de elemento, B apaga.',
    firstDiscovery: 'Primeira descoberta!',
    inventory: 'Seus elementos',
    padSpawn: 'Criar',
    padGrab: 'Pegar',
    padDrop: 'Soltar',
    padDelete: 'Apagar',
    padCycle: 'Trocar',
    padHint: 'Controle conectado 🎮',
    padConnected: 'Controle conectado',
    langLabel: 'Idioma'
  },
  fr: {
    title: 'Infinite Craft',
    subtitle: 'from KMM',
    tagline: 'Mélange tout. Même l’impossible.',
    discoveries: (n) => `${n} découvertes`,
    searchPlaceholder: 'Cherche un élément',
    emptySearch: 'Aucun résultat.',
    clear: 'Vider la table',
    reset: 'Réinitialiser',
    resetConfirm: 'Effacer toutes tes découvertes et recommencer ?',
    help: 'Comment jouer',
    helpDrag: 'Fais glisser un élément sur un autre pour les fusionner en un nouveau.',
    helpPad: 'Manette : le stick déplace le curseur, A attrape/lâche, Y fait apparaître l’élément choisi, LB/RB changent d’élément, B supprime.',
    firstDiscovery: 'Première découverte !',
    inventory: 'Tes éléments',
    padSpawn: 'Créer',
    padGrab: 'Prendre',
    padDrop: 'Lâcher',
    padDelete: 'Supprimer',
    padCycle: 'Changer',
    padHint: 'Manette connectée 🎮',
    padConnected: 'Manette connectée',
    langLabel: 'Langue'
  },
  de: {
    title: 'Infinite Craft',
    subtitle: 'from KMM',
    tagline: 'Misch alles. Sogar das Unmögliche.',
    discoveries: (n) => `${n} Entdeckungen`,
    searchPlaceholder: 'Element suchen',
    emptySearch: 'Nichts passt.',
    clear: 'Tisch leeren',
    reset: 'Zurücksetzen',
    resetConfirm: 'Alle Entdeckungen löschen und neu anfangen?',
    help: 'So wird gespielt',
    helpDrag: 'Zieh ein Element auf ein anderes, um sie zu etwas Neuem zu verschmelzen.',
    helpPad: 'Controller: Stick bewegt den Cursor, A greifen/ablegen, Y erzeugt das gewählte Element, LB/RB wechseln das Element, B löscht.',
    firstDiscovery: 'Erste Entdeckung!',
    inventory: 'Deine Elemente',
    padSpawn: 'Erzeugen',
    padGrab: 'Greifen',
    padDrop: 'Ablegen',
    padDelete: 'Löschen',
    padCycle: 'Wechseln',
    padHint: 'Controller verbunden 🎮',
    padConnected: 'Controller verbunden',
    langLabel: 'Sprache'
  },
  it: {
    title: 'Infinite Craft',
    subtitle: 'from KMM',
    tagline: 'Mescola tutto. Anche l’impossibile.',
    discoveries: (n) => `${n} scoperte`,
    searchPlaceholder: 'Cerca un elemento',
    emptySearch: 'Nessun risultato.',
    clear: 'Pulisci il tavolo',
    reset: 'Ricomincia',
    resetConfirm: 'Cancellare tutte le scoperte e ricominciare?',
    help: 'Come si gioca',
    helpDrag: 'Trascina un elemento su un altro per fonderli in qualcosa di nuovo.',
    helpPad: 'Controller: lo stick muove il cursore, A prendi/lascia, Y crea l’elemento scelto, LB/RB cambiano elemento, B elimina.',
    firstDiscovery: 'Prima scoperta!',
    inventory: 'I tuoi elementi',
    padSpawn: 'Crea',
    padGrab: 'Prendi',
    padDrop: 'Lascia',
    padDelete: 'Elimina',
    padCycle: 'Cambia',
    padHint: 'Controller collegato 🎮',
    padConnected: 'Controller collegato',
    langLabel: 'Lingua'
  },
  zh: {
    title: '无限合成',
    subtitle: 'from KMM',
    tagline: '万物皆可混合，连不可能也行。',
    discoveries: (n) => `${n} 项发现`,
    searchPlaceholder: '搜索元素',
    emptySearch: '没有匹配项。',
    clear: '清空台面',
    reset: '重置',
    resetConfirm: '清除所有发现并重新开始？',
    help: '玩法',
    helpDrag: '把一个元素拖到另一个上面，就能融合出新东西。',
    helpPad: '手柄：摇杆移动光标，A 抓取/放下，Y 生成所选元素，LB/RB 切换元素，B 删除。',
    firstDiscovery: '首次发现！',
    inventory: '你的元素',
    padSpawn: '生成',
    padGrab: '抓取',
    padDrop: '放下',
    padDelete: '删除',
    padCycle: '切换',
    padHint: '已连接手柄 🎮',
    padConnected: '已连接手柄',
    langLabel: '语言'
  },
  ja: {
    title: 'インフィニット クラフト',
    subtitle: 'from KMM',
    tagline: 'なんでも混ぜよう。あり得ないものまで。',
    discoveries: (n) => `${n} 個の発見`,
    searchPlaceholder: '要素を検索',
    emptySearch: '一致なし。',
    clear: '盤面をクリア',
    reset: 'リセット',
    resetConfirm: 'すべての発見を消して最初からやり直す？',
    help: '遊び方',
    helpDrag: '要素を別の要素に重ねると、新しいものに融合します。',
    helpPad: 'ゲームパッド：スティックでカーソル移動、A で掴む/離す、Y で選んだ要素を出す、LB/RB で要素切替、B で削除。',
    firstDiscovery: '初めての発見！',
    inventory: 'あなたの要素',
    padSpawn: '出す',
    padGrab: '掴む',
    padDrop: '離す',
    padDelete: '削除',
    padCycle: '切替',
    padHint: 'ゲームパッド接続 🎮',
    padConnected: 'ゲームパッド接続',
    langLabel: '言語'
  },
  ar: {
    title: 'إنفينيت كرافت',
    subtitle: 'from KMM',
    tagline: 'اخلط أي شيء. حتى المستحيل.',
    discoveries: (n) => `${n} اكتشافًا`,
    searchPlaceholder: 'ابحث عن عنصر',
    emptySearch: 'لا نتائج.',
    clear: 'أفرغ الطاولة',
    reset: 'إعادة',
    resetConfirm: 'مسح كل اكتشافاتك والبدء من جديد؟',
    help: 'كيف تلعب',
    helpDrag: 'اسحب عنصرًا فوق آخر لدمجهما في شيء جديد.',
    helpPad: 'يد التحكم: العصا تحرّك المؤشر، A للإمساك/الإفلات، Y لإخراج العنصر المختار، LB/RB لتبديل العنصر، B للحذف.',
    firstDiscovery: 'أول اكتشاف!',
    inventory: 'عناصرك',
    padSpawn: 'أخرِج',
    padGrab: 'أمسك',
    padDrop: 'أفلت',
    padDelete: 'احذف',
    padCycle: 'بدّل',
    padHint: 'تم توصيل يد التحكم 🎮',
    padConnected: 'تم توصيل يد التحكم',
    langLabel: 'اللغة'
  }
};

/** `?lang=xx` override in the URL, if it names a supported language. */
export function urlLang(): Lang | null {
  if (typeof window === 'undefined') return null;
  try {
    const p = new URLSearchParams(window.location.search).get('lang');
    const code = (p ?? '').toLowerCase();
    return LANGS.some((l) => l.code === code) ? (code as Lang) : null;
  } catch {
    return null;
  }
}

/** The language stored by the launcher (or by this game), if any. */
export function storedLang(): Lang | null {
  try {
    const v = localStorage.getItem(LANG_KEY);
    return v && LANGS.some((l) => l.code === v) ? (v as Lang) : null;
  } catch {
    return null;
  }
}

/** Best-guess language from the browser, falling back to English. */
export function detectLang(): Lang {
  if (typeof navigator === 'undefined') return 'en';
  const supported = LANGS.map((l) => l.code);
  const tags = navigator.languages ?? [navigator.language];
  for (const tag of tags) {
    const base = (tag ?? '').slice(0, 2).toLowerCase() as Lang;
    if (supported.includes(base)) return base;
  }
  return 'en';
}

/** Persist the chosen language under the shared arcade key. */
export function saveLang(lang: Lang): void {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    /* storage disabled — the choice just won't persist */
  }
}

/** Resolve the initial language: URL override → stored choice → browser guess. */
export function initialLang(): Lang {
  return urlLang() ?? storedLang() ?? detectLang();
}
