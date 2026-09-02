// Localization for Flappy — same shared contract as the dashboard: reads the
// `arcade.lang` key set by the launcher (and a `?lang=xx` URL override), so the
// game opens in the language the arcade is in. A small in-game <select> lets you
// change it too. Player names and the game title "Flappy Bird" stay as-is.

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
  addNamePlaceholder: string;
  add: string;
  startGame: string;
  playingAs: string;
  best: string;
  remove: (n: string) => string;
  stop: string;
  score: string;
  gameOver: string;
  newBest: string;
  niceTry: string;
  playAgain: string;
  menu: string;
  hint: string;
  langLabel: string;
};

export const STR: Record<Lang, S> = {
  es: {
    eyebrow: 'Arcade Premium',
    menuCopy: 'Elige un jugador o añade uno nuevo y pulsa Empezar.',
    noPlayers: 'Aún no hay jugadores — añade uno abajo.',
    addNamePlaceholder: 'Añade un nombre',
    add: '+ Añadir',
    startGame: '▶ Empezar',
    playingAs: 'Jugando como',
    best: 'Mejor',
    remove: (n) => `Quitar ${n}`,
    stop: '■ Salir',
    score: 'Puntos',
    gameOver: 'Fin de la partida',
    newBest: '¡Nuevo récord! 🎉',
    niceTry: '¡Buen intento!',
    playAgain: '↻ Jugar de nuevo',
    menu: '‹ Menú',
    hint: 'Haz clic / toca el tablero · o pulsa Espacio para aletear · Mando 🎮',
    langLabel: 'Idioma'
  },
  en: {
    eyebrow: 'Premium Arcade',
    menuCopy: 'Pick a player or add a new one, then press Start!',
    noPlayers: 'No players yet — add one below.',
    addNamePlaceholder: 'Add a new name',
    add: '+ Add',
    startGame: '▶ Start game',
    playingAs: 'Playing as',
    best: 'Best',
    remove: (n) => `Remove ${n}`,
    stop: '■ Stop',
    score: 'Score',
    gameOver: 'Game over',
    newBest: 'New best! 🎉',
    niceTry: 'Nice try!',
    playAgain: '↻ Play again',
    menu: '‹ Menu',
    hint: 'Click / tap the board · or press Space to flap · Gamepad 🎮',
    langLabel: 'Language'
  },
  pt: {
    eyebrow: 'Arcade Premium',
    menuCopy: 'Escolha um jogador ou adicione um novo e pressione Começar!',
    noPlayers: 'Ainda não há jogadores — adicione um abaixo.',
    addNamePlaceholder: 'Adicione um nome',
    add: '+ Adicionar',
    startGame: '▶ Começar',
    playingAs: 'Jogando como',
    best: 'Melhor',
    remove: (n) => `Remover ${n}`,
    stop: '■ Sair',
    score: 'Pontos',
    gameOver: 'Fim de jogo',
    newBest: 'Novo recorde! 🎉',
    niceTry: 'Boa tentativa!',
    playAgain: '↻ Jogar de novo',
    menu: '‹ Menu',
    hint: 'Clique / toque no tabuleiro · ou pressione Espaço para voar · Controle 🎮',
    langLabel: 'Idioma'
  },
  fr: {
    eyebrow: 'Arcade Premium',
    menuCopy: 'Choisis un joueur ou ajoutes-en un, puis appuie sur Jouer !',
    noPlayers: 'Aucun joueur — ajoutes-en un ci-dessous.',
    addNamePlaceholder: 'Ajoute un nom',
    add: '+ Ajouter',
    startGame: '▶ Jouer',
    playingAs: 'Tu joues avec',
    best: 'Meilleur',
    remove: (n) => `Retirer ${n}`,
    stop: '■ Quitter',
    score: 'Score',
    gameOver: 'Partie terminée',
    newBest: 'Nouveau record ! 🎉',
    niceTry: 'Bien essayé !',
    playAgain: '↻ Rejouer',
    menu: '‹ Menu',
    hint: 'Clique / touche le plateau · ou appuie sur Espace pour voler · Manette 🎮',
    langLabel: 'Langue'
  },
  de: {
    eyebrow: 'Premium-Arcade',
    menuCopy: 'Wähle einen Spieler oder füge einen hinzu und starte!',
    noPlayers: 'Noch keine Spieler — unten einen hinzufügen.',
    addNamePlaceholder: 'Namen hinzufügen',
    add: '+ Hinzufügen',
    startGame: '▶ Start',
    playingAs: 'Du spielst als',
    best: 'Beste',
    remove: (n) => `${n} entfernen`,
    stop: '■ Beenden',
    score: 'Punkte',
    gameOver: 'Vorbei',
    newBest: 'Neuer Rekord! 🎉',
    niceTry: 'Gut versucht!',
    playAgain: '↻ Nochmal',
    menu: '‹ Menü',
    hint: 'Klick / tipp aufs Feld · oder Leertaste zum Flattern · Controller 🎮',
    langLabel: 'Sprache'
  },
  it: {
    eyebrow: 'Arcade Premium',
    menuCopy: 'Scegli un giocatore o aggiungine uno, poi premi Inizia!',
    noPlayers: 'Ancora nessun giocatore — aggiungine uno sotto.',
    addNamePlaceholder: 'Aggiungi un nome',
    add: '+ Aggiungi',
    startGame: '▶ Inizia',
    playingAs: 'Giochi come',
    best: 'Migliore',
    remove: (n) => `Rimuovi ${n}`,
    stop: '■ Esci',
    score: 'Punti',
    gameOver: 'Partita finita',
    newBest: 'Nuovo record! 🎉',
    niceTry: 'Bel tentativo!',
    playAgain: '↻ Rigioca',
    menu: '‹ Menu',
    hint: 'Clicca / tocca il tabellone · o premi Spazio per volare · Controller 🎮',
    langLabel: 'Lingua'
  },
  zh: {
    eyebrow: '精品街机',
    menuCopy: '选择一位玩家或添加新玩家，然后按开始！',
    noPlayers: '还没有玩家 —— 在下面添加一个。',
    addNamePlaceholder: '添加一个名字',
    add: '+ 添加',
    startGame: '▶ 开始',
    playingAs: '当前玩家',
    best: '最佳',
    remove: (n) => `移除 ${n}`,
    stop: '■ 退出',
    score: '分数',
    gameOver: '游戏结束',
    newBest: '新纪录！🎉',
    niceTry: '再接再厉！',
    playAgain: '↻ 再玩一次',
    menu: '‹ 菜单',
    hint: '点击 / 轻触画面 · 或按空格扇动 · 手柄 🎮',
    langLabel: '语言'
  },
  ja: {
    eyebrow: 'プレミアム アーケード',
    menuCopy: 'プレイヤーを選ぶか追加して、スタートを押そう！',
    noPlayers: 'まだプレイヤーがいません — 下で追加。',
    addNamePlaceholder: '名前を追加',
    add: '+ 追加',
    startGame: '▶ スタート',
    playingAs: 'プレイヤー',
    best: 'ベスト',
    remove: (n) => `${n} を削除`,
    stop: '■ 終了',
    score: 'スコア',
    gameOver: 'ゲームオーバー',
    newBest: '自己ベスト更新！🎉',
    niceTry: 'おしい！',
    playAgain: '↻ もう一度',
    menu: '‹ メニュー',
    hint: '画面をクリック / タップ · またはスペースで羽ばたく · ゲームパッド 🎮',
    langLabel: '言語'
  },
  ar: {
    eyebrow: 'أركيد بريميوم',
    menuCopy: 'اختر لاعبًا أو أضف واحدًا جديدًا ثم اضغط ابدأ!',
    noPlayers: 'لا لاعبين بعد — أضف واحدًا بالأسفل.',
    addNamePlaceholder: 'أضف اسمًا',
    add: '+ إضافة',
    startGame: '▶ ابدأ',
    playingAs: 'تلعب باسم',
    best: 'الأفضل',
    remove: (n) => `أزل ${n}`,
    stop: '■ خروج',
    score: 'النقاط',
    gameOver: 'انتهت الجولة',
    newBest: 'رقم قياسي جديد! 🎉',
    niceTry: 'محاولة جيدة!',
    playAgain: '↻ العب مجددًا',
    menu: '‹ القائمة',
    hint: 'انقر / المس اللوحة · أو اضغط مسافة للتحليق · يد تحكم 🎮',
    langLabel: 'اللغة'
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
