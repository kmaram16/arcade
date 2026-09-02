// Localization for Tetris — same shared contract as the dashboard: reads the
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
  addName: string;
  add: string;
  startGame: string;
  playingAs: string;
  remove: (u: string) => string;
  stop: string;
  score: string;
  lines: string;
  best: string;
  gameOver: string;
  newBest: string;
  niceRun: string;
  playAgain: string;
  menu: string;
  ctrlLeft: string;
  ctrlRotate: string;
  ctrlRight: string;
  ctrlDown: string;
  ctrlDrop: string;
  hintKeys: string;
  hintTouch: string;
  langLabel: string;
};

export const STR: Record<Lang, S> = {
  es: {
    eyebrow: 'Arcade Premium',
    menuCopy: 'Elige un jugador o añade uno nuevo, ¡luego pulsa Empezar!',
    noPlayers: 'Aún no hay jugadores — añade uno abajo.', addName: 'Añadir un nombre', add: '+ Añadir',
    startGame: '▶ Empezar', playingAs: 'Juegas como', remove: (u) => `Quitar ${u}`, stop: '■ Parar',
    score: 'Puntos', lines: 'Líneas', best: 'Mejor',
    gameOver: 'Fin de la partida', newBest: '¡Nuevo récord! 🎉', niceRun: '¡Buena partida!',
    playAgain: '↻ Jugar de nuevo', menu: '‹ Menú',
    ctrlLeft: 'Izquierda', ctrlRotate: 'Rotar', ctrlRight: 'Derecha', ctrlDown: 'Abajo', ctrlDrop: 'Soltar',
    hintKeys: '← → mover · ↑ rotar · ↓ caída suave · Espacio caída dura · Mando 🎮',
    hintTouch: 'Desliza para mover · toca para rotar · desliza abajo para soltar', langLabel: 'Idioma'
  },
  en: {
    eyebrow: 'Premium Arcade',
    menuCopy: 'Pick a player or add a new one, then press Start!',
    noPlayers: 'No players yet — add one below.', addName: 'Add a new name', add: '+ Add',
    startGame: '▶ Start game', playingAs: 'Playing as', remove: (u) => `Remove ${u}`, stop: '■ Stop',
    score: 'Score', lines: 'Lines', best: 'Best',
    gameOver: 'Game over', newBest: 'New best! 🎉', niceRun: 'Nice run!',
    playAgain: '↻ Play again', menu: '‹ Menu',
    ctrlLeft: 'Left', ctrlRotate: 'Rotate', ctrlRight: 'Right', ctrlDown: 'Down', ctrlDrop: 'Drop',
    hintKeys: '← → move · ↑ rotate · ↓ soft drop · Space hard drop · Gamepad 🎮',
    hintTouch: 'Swipe to move · tap to rotate · flick down to slam', langLabel: 'Language'
  },
  pt: {
    eyebrow: 'Arcade Premium',
    menuCopy: 'Escolha um jogador ou adicione um novo e pressione Começar!',
    noPlayers: 'Ainda não há jogadores — adicione um abaixo.', addName: 'Adicionar um nome', add: '+ Adicionar',
    startGame: '▶ Começar', playingAs: 'Jogando como', remove: (u) => `Remover ${u}`, stop: '■ Parar',
    score: 'Pontos', lines: 'Linhas', best: 'Melhor',
    gameOver: 'Fim de jogo', newBest: 'Novo recorde! 🎉', niceRun: 'Boa partida!',
    playAgain: '↻ Jogar de novo', menu: '‹ Menu',
    ctrlLeft: 'Esquerda', ctrlRotate: 'Girar', ctrlRight: 'Direita', ctrlDown: 'Baixo', ctrlDrop: 'Soltar',
    hintKeys: '← → mover · ↑ girar · ↓ descida suave · Espaço descida rápida · Controle 🎮',
    hintTouch: 'Deslize para mover · toque para girar · deslize para baixo para soltar', langLabel: 'Idioma'
  },
  fr: {
    eyebrow: 'Arcade Premium',
    menuCopy: 'Choisis un joueur ou ajoutes-en un nouveau, puis appuie sur Jouer !',
    noPlayers: 'Aucun joueur — ajoutes-en un ci-dessous.', addName: 'Ajouter un nom', add: '+ Ajouter',
    startGame: '▶ Jouer', playingAs: 'Tu joues en tant que', remove: (u) => `Retirer ${u}`, stop: '■ Arrêter',
    score: 'Score', lines: 'Lignes', best: 'Meilleur',
    gameOver: 'Partie terminée', newBest: 'Nouveau record ! 🎉', niceRun: 'Belle partie !',
    playAgain: '↻ Rejouer', menu: '‹ Menu',
    ctrlLeft: 'Gauche', ctrlRotate: 'Rotation', ctrlRight: 'Droite', ctrlDown: 'Bas', ctrlDrop: 'Lâcher',
    hintKeys: '← → déplacer · ↑ rotation · ↓ descente douce · Espace descente rapide · Manette 🎮',
    hintTouch: 'Glisse pour déplacer · touche pour tourner · glisse vers le bas pour lâcher', langLabel: 'Langue'
  },
  de: {
    eyebrow: 'Premium-Arcade',
    menuCopy: 'Wähle einen Spieler oder füge einen neuen hinzu, dann drücke Start!',
    noPlayers: 'Noch keine Spieler — unten einen hinzufügen.', addName: 'Namen hinzufügen', add: '+ Hinzufügen',
    startGame: '▶ Start', playingAs: 'Du spielst als', remove: (u) => `${u} entfernen`, stop: '■ Stopp',
    score: 'Punkte', lines: 'Reihen', best: 'Beste',
    gameOver: 'Vorbei', newBest: 'Neuer Rekord! 🎉', niceRun: 'Gut gespielt!',
    playAgain: '↻ Nochmal', menu: '‹ Menü',
    ctrlLeft: 'Links', ctrlRotate: 'Drehen', ctrlRight: 'Rechts', ctrlDown: 'Runter', ctrlDrop: 'Fallen',
    hintKeys: '← → bewegen · ↑ drehen · ↓ sanft fallen · Leertaste hart fallen · Controller 🎮',
    hintTouch: 'Wischen zum Bewegen · tippen zum Drehen · nach unten wischen zum Fallen', langLabel: 'Sprache'
  },
  it: {
    eyebrow: 'Arcade Premium',
    menuCopy: 'Scegli un giocatore o aggiungine uno nuovo, poi premi Inizia!',
    noPlayers: 'Ancora nessun giocatore — aggiungine uno sotto.', addName: 'Aggiungi un nome', add: '+ Aggiungi',
    startGame: '▶ Inizia', playingAs: 'Giochi come', remove: (u) => `Rimuovi ${u}`, stop: '■ Ferma',
    score: 'Punti', lines: 'Linee', best: 'Migliore',
    gameOver: 'Partita finita', newBest: 'Nuovo record! 🎉', niceRun: 'Bella partita!',
    playAgain: '↻ Rigioca', menu: '‹ Menu',
    ctrlLeft: 'Sinistra', ctrlRotate: 'Ruota', ctrlRight: 'Destra', ctrlDown: 'Giù', ctrlDrop: 'Cala',
    hintKeys: '← → muovi · ↑ ruota · ↓ caduta lenta · Spazio caduta rapida · Controller 🎮',
    hintTouch: 'Scorri per muovere · tocca per ruotare · scorri giù per far cadere', langLabel: 'Lingua'
  },
  zh: {
    eyebrow: '精品街机',
    menuCopy: '选择一位玩家或添加新玩家，然后按开始！',
    noPlayers: '还没有玩家 —— 在下面添加一个。', addName: '添加新名称', add: '+ 添加',
    startGame: '▶ 开始游戏', playingAs: '玩家', remove: (u) => `移除 ${u}`, stop: '■ 停止',
    score: '分数', lines: '行数', best: '最佳',
    gameOver: '游戏结束', newBest: '新纪录！🎉', niceRun: '打得不错！',
    playAgain: '↻ 再玩一次', menu: '‹ 菜单',
    ctrlLeft: '左', ctrlRotate: '旋转', ctrlRight: '右', ctrlDown: '下', ctrlDrop: '落下',
    hintKeys: '← → 移动 · ↑ 旋转 · ↓ 软降 · 空格 硬降 · 手柄 🎮',
    hintTouch: '滑动移动 · 点击旋转 · 向下轻扫快速落下', langLabel: '语言'
  },
  ja: {
    eyebrow: 'プレミアム アーケード',
    menuCopy: 'プレイヤーを選ぶか新しく追加して、スタートを押そう！',
    noPlayers: 'まだプレイヤーがいません — 下で追加。', addName: '新しい名前を追加', add: '+ 追加',
    startGame: '▶ スタート', playingAs: 'プレイヤー', remove: (u) => `${u} を削除`, stop: '■ ストップ',
    score: 'スコア', lines: 'ライン', best: 'ベスト',
    gameOver: 'ゲームオーバー', newBest: '自己ベスト更新！🎉', niceRun: 'ナイスプレイ！',
    playAgain: '↻ もう一度', menu: '‹ メニュー',
    ctrlLeft: '左', ctrlRotate: '回転', ctrlRight: '右', ctrlDown: '下', ctrlDrop: '落とす',
    hintKeys: '← → 移動 · ↑ 回転 · ↓ ソフトドロップ · スペース ハードドロップ · ゲームパッド 🎮',
    hintTouch: 'スワイプで移動 · タップで回転 · 下にフリックで落下', langLabel: '言語'
  },
  ar: {
    eyebrow: 'أركيد بريميوم',
    menuCopy: 'اختر لاعبًا أو أضف لاعبًا جديدًا، ثم اضغط ابدأ!',
    noPlayers: 'لا لاعبين بعد — أضف واحدًا بالأسفل.', addName: 'أضف اسمًا جديدًا', add: '+ إضافة',
    startGame: '▶ ابدأ اللعبة', playingAs: 'تلعب باسم', remove: (u) => `أزل ${u}`, stop: '■ إيقاف',
    score: 'النقاط', lines: 'الصفوف', best: 'الأفضل',
    gameOver: 'انتهت اللعبة', newBest: 'رقم قياسي جديد! 🎉', niceRun: 'جولة رائعة!',
    playAgain: '↻ العب مجددًا', menu: '‹ القائمة',
    ctrlLeft: 'يسار', ctrlRotate: 'تدوير', ctrlRight: 'يمين', ctrlDown: 'أسفل', ctrlDrop: 'إسقاط',
    hintKeys: '← → تحريك · ↑ تدوير · ↓ إسقاط ناعم · مسافة إسقاط سريع · يد تحكم 🎮',
    hintTouch: 'اسحب للتحريك · انقر للتدوير · اسحب للأسفل للإسقاط', langLabel: 'اللغة'
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
