// Localization for 2048 — same shared contract as the dashboard: reads the
// `arcade.lang` key set by the launcher (and a `?lang=xx` URL override), so the
// game opens in the language the arcade is in. A small in-game <select> lets you
// change it too.

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
  eyebrow: string;
  menuCopy: string;
  noPlayers: string;
  addPlaceholder: string;
  add: string;
  startGame: string;
  playingAs: string;
  remove: (n: string) => string;
  stop: string;
  score: string;
  best: string;
  highest: string;
  wonEyebrow: string;
  overEyebrow: string;
  wonTitle: string;
  overTitle: string;
  keepGoing: string;
  newGame: string;
  menu: string;
  up: string;
  down: string;
  left: string;
  right: string;
  hint: string;
  langLabel: string;
};

export const STR: Record<Lang, S> = {
  es: {
    eyebrow: 'Arcade Premium',
    menuCopy: 'Desliza para mover las fichas — los números iguales se fusionan. ¿Puedes llegar a la ficha 2048?',
    noPlayers: 'Aún no hay jugadores: añade uno abajo.',
    addPlaceholder: 'Añade un nombre nuevo', add: '+ Añadir', startGame: '▶ Empezar',
    playingAs: 'Jugando como', remove: (n) => `Quitar ${n}`, stop: '■ Parar',
    score: 'Puntos', best: 'Mejor', highest: 'Máximo',
    wonEyebrow: '¡Lo lograste!', overEyebrow: 'Sin movimientos', wonTitle: '2048! 🎉', overTitle: 'Fin del juego',
    keepGoing: '↑ Seguir jugando', newGame: '↻ Nueva partida', menu: '‹ Menú',
    up: 'Arriba', down: 'Abajo', left: 'Izquierda', right: 'Derecha',
    hint: 'Desliza o usa ← ↑ → ↓ · une fichas para llegar a 2048 · 🎮', langLabel: 'Idioma'
  },
  en: {
    eyebrow: 'Premium Arcade',
    menuCopy: 'Swipe to slide the tiles — equal numbers merge. Can you reach the 2048 tile?',
    noPlayers: 'No players yet — add one below.',
    addPlaceholder: 'Add a new name', add: '+ Add', startGame: '▶ Start game',
    playingAs: 'Playing as', remove: (n) => `Remove ${n}`, stop: '■ Stop',
    score: 'Score', best: 'Best', highest: 'Highest',
    wonEyebrow: 'You did it!', overEyebrow: 'No moves left', wonTitle: '2048! 🎉', overTitle: 'Game over',
    keepGoing: '↑ Keep going', newGame: '↻ New game', menu: '‹ Menu',
    up: 'Up', down: 'Down', left: 'Left', right: 'Right',
    hint: 'Swipe or use ← ↑ → ↓ · merge tiles to reach 2048 · 🎮', langLabel: 'Language'
  },
  pt: {
    eyebrow: 'Arcade Premium',
    menuCopy: 'Deslize para mover as peças — números iguais se juntam. Consegue chegar à peça 2048?',
    noPlayers: 'Ainda não há jogadores — adicione um abaixo.',
    addPlaceholder: 'Adicione um novo nome', add: '+ Adicionar', startGame: '▶ Começar',
    playingAs: 'Jogando como', remove: (n) => `Remover ${n}`, stop: '■ Parar',
    score: 'Pontos', best: 'Melhor', highest: 'Máximo',
    wonEyebrow: 'Você conseguiu!', overEyebrow: 'Sem jogadas', wonTitle: '2048! 🎉', overTitle: 'Fim de jogo',
    keepGoing: '↑ Continuar', newGame: '↻ Novo jogo', menu: '‹ Menu',
    up: 'Cima', down: 'Baixo', left: 'Esquerda', right: 'Direita',
    hint: 'Deslize ou use ← ↑ → ↓ · junte peças para chegar a 2048 · 🎮', langLabel: 'Idioma'
  },
  fr: {
    eyebrow: 'Arcade Premium',
    menuCopy: 'Glisse pour déplacer les tuiles — les nombres égaux fusionnent. Peux-tu atteindre la tuile 2048 ?',
    noPlayers: 'Aucun joueur — ajoutes-en un ci-dessous.',
    addPlaceholder: 'Ajoute un nouveau nom', add: '+ Ajouter', startGame: '▶ Jouer',
    playingAs: 'Tu joues en tant que', remove: (n) => `Retirer ${n}`, stop: '■ Arrêter',
    score: 'Score', best: 'Meilleur', highest: 'Max',
    wonEyebrow: 'Tu as réussi !', overEyebrow: 'Plus de coups', wonTitle: '2048! 🎉', overTitle: 'Partie terminée',
    keepGoing: '↑ Continuer', newGame: '↻ Nouvelle partie', menu: '‹ Menu',
    up: 'Haut', down: 'Bas', left: 'Gauche', right: 'Droite',
    hint: 'Glisse ou utilise ← ↑ → ↓ · fusionne les tuiles pour atteindre 2048 · 🎮', langLabel: 'Langue'
  },
  de: {
    eyebrow: 'Premium-Arcade',
    menuCopy: 'Wische, um die Kacheln zu verschieben — gleiche Zahlen verschmelzen. Schaffst du die 2048-Kachel?',
    noPlayers: 'Noch keine Spieler — unten einen hinzufügen.',
    addPlaceholder: 'Neuen Namen hinzufügen', add: '+ Hinzufügen', startGame: '▶ Start',
    playingAs: 'Du spielst als', remove: (n) => `${n} entfernen`, stop: '■ Stopp',
    score: 'Punkte', best: 'Beste', highest: 'Höchste',
    wonEyebrow: 'Geschafft!', overEyebrow: 'Keine Züge mehr', wonTitle: '2048! 🎉', overTitle: 'Spiel vorbei',
    keepGoing: '↑ Weiterspielen', newGame: '↻ Neues Spiel', menu: '‹ Menü',
    up: 'Hoch', down: 'Runter', left: 'Links', right: 'Rechts',
    hint: 'Wische oder nutze ← ↑ → ↓ · Kacheln verschmelzen bis 2048 · 🎮', langLabel: 'Sprache'
  },
  it: {
    eyebrow: 'Arcade Premium',
    menuCopy: 'Scorri per muovere le tessere — i numeri uguali si uniscono. Riesci ad arrivare alla tessera 2048?',
    noPlayers: 'Ancora nessun giocatore — aggiungine uno sotto.',
    addPlaceholder: 'Aggiungi un nuovo nome', add: '+ Aggiungi', startGame: '▶ Inizia',
    playingAs: 'Giochi come', remove: (n) => `Rimuovi ${n}`, stop: '■ Ferma',
    score: 'Punti', best: 'Migliore', highest: 'Massimo',
    wonEyebrow: 'Ce l’hai fatta!', overEyebrow: 'Nessuna mossa', wonTitle: '2048! 🎉', overTitle: 'Partita finita',
    keepGoing: '↑ Continua', newGame: '↻ Nuova partita', menu: '‹ Menu',
    up: 'Su', down: 'Giù', left: 'Sinistra', right: 'Destra',
    hint: 'Scorri o usa ← ↑ → ↓ · unisci le tessere fino a 2048 · 🎮', langLabel: 'Lingua'
  },
  zh: {
    eyebrow: '精品街机',
    menuCopy: '滑动来移动方块 —— 相同的数字会合并。你能拼出 2048 吗？',
    noPlayers: '还没有玩家 —— 在下面添加一个。',
    addPlaceholder: '添加一个新名字', add: '+ 添加', startGame: '▶ 开始游戏',
    playingAs: '当前玩家', remove: (n) => `移除 ${n}`, stop: '■ 停止',
    score: '分数', best: '最佳', highest: '最高',
    wonEyebrow: '你做到了！', overEyebrow: '无路可走', wonTitle: '2048! 🎉', overTitle: '游戏结束',
    keepGoing: '↑ 继续', newGame: '↻ 新游戏', menu: '‹ 菜单',
    up: '上', down: '下', left: '左', right: '右',
    hint: '滑动或用 ← ↑ → ↓ · 合并方块拼出 2048 · 🎮', langLabel: '语言'
  },
  ja: {
    eyebrow: 'プレミアム アーケード',
    menuCopy: 'スワイプでタイルを動かそう — 同じ数字は合体する。2048 タイルを目指せる？',
    noPlayers: 'まだプレイヤーがいません — 下で追加。',
    addPlaceholder: '新しい名前を追加', add: '+ 追加', startGame: '▶ スタート',
    playingAs: 'プレイ中', remove: (n) => `${n} を削除`, stop: '■ 停止',
    score: 'スコア', best: 'ベスト', highest: '最大',
    wonEyebrow: 'やったね！', overEyebrow: '動かせない', wonTitle: '2048! 🎉', overTitle: 'ゲームオーバー',
    keepGoing: '↑ 続ける', newGame: '↻ 新しいゲーム', menu: '‹ メニュー',
    up: '上', down: '下', left: '左', right: '右',
    hint: 'スワイプか ← ↑ → ↓ で操作 · タイルを合体して 2048 へ · 🎮', langLabel: '言語'
  },
  ar: {
    eyebrow: 'أركيد بريميوم',
    menuCopy: 'اسحب لتحريك المربعات — الأرقام المتساوية تندمج. هل تصل إلى مربّع 2048؟',
    noPlayers: 'لا لاعبين بعد — أضف واحدًا بالأسفل.',
    addPlaceholder: 'أضف اسمًا جديدًا', add: '+ إضافة', startGame: '▶ ابدأ',
    playingAs: 'تلعب باسم', remove: (n) => `أزل ${n}`, stop: '■ إيقاف',
    score: 'النقاط', best: 'الأفضل', highest: 'الأعلى',
    wonEyebrow: 'لقد نجحت!', overEyebrow: 'لا حركات متبقية', wonTitle: '2048! 🎉', overTitle: 'انتهت اللعبة',
    keepGoing: '↑ استمر', newGame: '↻ لعبة جديدة', menu: '‹ القائمة',
    up: 'أعلى', down: 'أسفل', left: 'يسار', right: 'يمين',
    hint: 'اسحب أو استخدم ← ↑ → ↓ · ادمج المربعات للوصول إلى 2048 · 🎮', langLabel: 'اللغة'
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
