// Localization for Pong — same shared contract as the dashboard: reads the
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
  wins: string;
  remove: (n: string) => string;
  stop: string;
  you: string;
  computer: string;
  overEyebrow: string;
  youWin: string;
  computerWins: string;
  cpu: string;
  playAgain: string;
  menu: string;
  moveUp: string;
  moveDown: string;
  up: string;
  down: string;
  hint: (n: number) => string;
  langLabel: string;
};

export const STR: Record<Lang, S> = {
  es: {
    eyebrow: 'Arcade Premium',
    menuCopy: 'Elige un jugador o añade uno nuevo, y pulsa Empezar.',
    noPlayers: 'Aún no hay jugadores — añade uno abajo.',
    addName: 'Añade un nombre', add: 'Añadir', startGame: 'Empezar',
    playingAs: 'Juegas como', wins: 'Victorias', remove: (n) => `Quitar ${n}`,
    stop: 'Parar', you: 'Tú', computer: 'Máquina',
    overEyebrow: 'Fin de la partida', youWin: '¡Ganaste! 🎉', computerWins: 'Gana la máquina', cpu: 'CPU',
    playAgain: 'Jugar de nuevo', menu: 'Menú',
    moveUp: 'Subir', moveDown: 'Bajar', up: 'Arriba', down: 'Abajo',
    hint: (n) => `↑ ↓ o W / S para mover · o arrastra en el tablero · primero a ${n} gana · Mando 🎮`,
    langLabel: 'Idioma'
  },
  en: {
    eyebrow: 'Premium Arcade',
    menuCopy: 'Pick a player or add a new one, then press Start!',
    noPlayers: 'No players yet — add one below.',
    addName: 'Add a new name', add: 'Add', startGame: 'Start game',
    playingAs: 'Playing as', wins: 'Wins', remove: (n) => `Remove ${n}`,
    stop: 'Stop', you: 'You', computer: 'Computer',
    overEyebrow: 'Game over', youWin: 'You win! 🎉', computerWins: 'Computer wins', cpu: 'CPU',
    playAgain: 'Play again', menu: 'Menu',
    moveUp: 'Move up', moveDown: 'Move down', up: 'Up', down: 'Down',
    hint: (n) => `↑ ↓ or W / S to move · or drag on the board · first to ${n} wins · Gamepad 🎮`,
    langLabel: 'Language'
  },
  pt: {
    eyebrow: 'Arcade Premium',
    menuCopy: 'Escolha um jogador ou adicione um novo e pressione Começar!',
    noPlayers: 'Ainda não há jogadores — adicione um abaixo.',
    addName: 'Adicione um nome', add: 'Adicionar', startGame: 'Começar',
    playingAs: 'Jogando como', wins: 'Vitórias', remove: (n) => `Remover ${n}`,
    stop: 'Parar', you: 'Você', computer: 'Computador',
    overEyebrow: 'Fim de jogo', youWin: 'Você venceu! 🎉', computerWins: 'O computador venceu', cpu: 'CPU',
    playAgain: 'Jogar de novo', menu: 'Menu',
    moveUp: 'Subir', moveDown: 'Descer', up: 'Cima', down: 'Baixo',
    hint: (n) => `↑ ↓ ou W / S para mover · ou arraste no tabuleiro · primeiro a ${n} vence · Controle 🎮`,
    langLabel: 'Idioma'
  },
  fr: {
    eyebrow: 'Arcade Premium',
    menuCopy: 'Choisis un joueur ou ajoutes-en un nouveau, puis appuie sur Jouer !',
    noPlayers: 'Aucun joueur — ajoutes-en un ci-dessous.',
    addName: 'Ajoute un nom', add: 'Ajouter', startGame: 'Jouer',
    playingAs: 'Tu joues en tant que', wins: 'Victoires', remove: (n) => `Retirer ${n}`,
    stop: 'Arrêter', you: 'Toi', computer: 'Ordinateur',
    overEyebrow: 'Partie terminée', youWin: 'Tu gagnes ! 🎉', computerWins: 'L’ordinateur gagne', cpu: 'CPU',
    playAgain: 'Rejouer', menu: 'Menu',
    moveUp: 'Monter', moveDown: 'Descendre', up: 'Haut', down: 'Bas',
    hint: (n) => `↑ ↓ ou W / S pour bouger · ou glisse sur le plateau · premier à ${n} gagne · Manette 🎮`,
    langLabel: 'Langue'
  },
  de: {
    eyebrow: 'Premium-Arcade',
    menuCopy: 'Wähle einen Spieler oder füge einen neuen hinzu und drücke Start!',
    noPlayers: 'Noch keine Spieler — unten einen hinzufügen.',
    addName: 'Namen hinzufügen', add: 'Hinzufügen', startGame: 'Start',
    playingAs: 'Du spielst als', wins: 'Siege', remove: (n) => `${n} entfernen`,
    stop: 'Stopp', you: 'Du', computer: 'Computer',
    overEyebrow: 'Vorbei', youWin: 'Du gewinnst! 🎉', computerWins: 'Computer gewinnt', cpu: 'CPU',
    playAgain: 'Nochmal', menu: 'Menü',
    moveUp: 'Hoch', moveDown: 'Runter', up: 'Hoch', down: 'Runter',
    hint: (n) => `↑ ↓ oder W / S zum Bewegen · oder auf dem Feld ziehen · erster mit ${n} gewinnt · Controller 🎮`,
    langLabel: 'Sprache'
  },
  it: {
    eyebrow: 'Arcade Premium',
    menuCopy: 'Scegli un giocatore o aggiungine uno nuovo, poi premi Inizia!',
    noPlayers: 'Ancora nessun giocatore — aggiungine uno sotto.',
    addName: 'Aggiungi un nome', add: 'Aggiungi', startGame: 'Inizia',
    playingAs: 'Giochi come', wins: 'Vittorie', remove: (n) => `Rimuovi ${n}`,
    stop: 'Ferma', you: 'Tu', computer: 'Computer',
    overEyebrow: 'Partita finita', youWin: 'Hai vinto! 🎉', computerWins: 'Vince il computer', cpu: 'CPU',
    playAgain: 'Rigioca', menu: 'Menu',
    moveUp: 'Su', moveDown: 'Giù', up: 'Su', down: 'Giù',
    hint: (n) => `↑ ↓ o W / S per muoverti · o trascina sul tabellone · primo a ${n} vince · Controller 🎮`,
    langLabel: 'Lingua'
  },
  zh: {
    eyebrow: '精品街机',
    menuCopy: '选择一位玩家或添加新玩家，然后按开始！',
    noPlayers: '还没有玩家 —— 在下面添加一个。',
    addName: '添加新名字', add: '添加', startGame: '开始',
    playingAs: '当前玩家', wins: '胜场', remove: (n) => `移除 ${n}`,
    stop: '停止', you: '你', computer: '电脑',
    overEyebrow: '游戏结束', youWin: '你赢了！🎉', computerWins: '电脑获胜', cpu: 'CPU',
    playAgain: '再玩一次', menu: '菜单',
    moveUp: '向上', moveDown: '向下', up: '上', down: '下',
    hint: (n) => `↑ ↓ 或 W / S 移动 · 或在球场上拖动 · 先得 ${n} 分获胜 · 手柄 🎮`,
    langLabel: '语言'
  },
  ja: {
    eyebrow: 'プレミアム アーケード',
    menuCopy: 'プレイヤーを選ぶか新しく追加して、スタートを押そう！',
    noPlayers: 'まだプレイヤーがいません — 下で追加。',
    addName: '新しい名前を追加', add: '追加', startGame: 'スタート',
    playingAs: 'プレイヤー', wins: '勝利数', remove: (n) => `${n} を削除`,
    stop: '停止', you: 'あなた', computer: 'コンピュータ',
    overEyebrow: 'ゲームオーバー', youWin: '勝ち！🎉', computerWins: 'コンピュータの勝ち', cpu: 'CPU',
    playAgain: 'もう一度', menu: 'メニュー',
    moveUp: '上へ', moveDown: '下へ', up: '上', down: '下',
    hint: (n) => `↑ ↓ または W / S で移動 · 盤面をドラッグしてもOK · 先に ${n} 点で勝ち · ゲームパッド 🎮`,
    langLabel: '言語'
  },
  ar: {
    eyebrow: 'أركيد بريميوم',
    menuCopy: 'اختر لاعبًا أو أضف واحدًا جديدًا، ثم اضغط ابدأ!',
    noPlayers: 'لا لاعبين بعد — أضف واحدًا بالأسفل.',
    addName: 'أضف اسمًا جديدًا', add: 'أضف', startGame: 'ابدأ',
    playingAs: 'تلعب باسم', wins: 'الانتصارات', remove: (n) => `أزل ${n}`,
    stop: 'إيقاف', you: 'أنت', computer: 'الكمبيوتر',
    overEyebrow: 'انتهت المباراة', youWin: 'لقد فزت! 🎉', computerWins: 'فاز الكمبيوتر', cpu: 'المعالج',
    playAgain: 'العب مجددًا', menu: 'القائمة',
    moveUp: 'تحريك لأعلى', moveDown: 'تحريك لأسفل', up: 'أعلى', down: 'أسفل',
    hint: (n) => `↑ ↓ أو W / S للتحريك · أو اسحب على الملعب · أول من يصل ${n} يفوز · يد تحكم 🎮`,
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
