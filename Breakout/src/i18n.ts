// Localization for Breakout — same shared contract as the dashboard: reads the
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
  bestShort: string;
  remove: (n: string) => string;
  stop: string;
  score: string;
  lives: string;
  best: string;
  gameOver: string;
  newBest: string;
  niceRun: string;
  playAgain: string;
  menu: string;
  moveLeft: string;
  launchBall: string;
  moveRight: string;
  level: string;
  hint: string;
  langLabel: string;
};

export const STR: Record<Lang, S> = {
  es: {
    eyebrow: 'Arcade Premium',
    menuCopy: 'Elige un jugador y rompe todos los ladrillos: ¡no dejes caer la bola!',
    noPlayers: 'Aún no hay jugadores: añade uno abajo.', addPlaceholder: 'Añade un nombre', add: '+ Añadir',
    startGame: '▶ Empezar', playingAs: 'Juegas como', bestShort: 'Mejor', remove: (n) => `Quitar ${n}`,
    stop: '■ Parar', score: 'Puntos', lives: 'Vidas', best: 'Mejor',
    gameOver: 'Fin de la partida', newBest: '¡Nuevo récord! 🎉', niceRun: '¡Buena partida!',
    playAgain: '↻ Jugar de nuevo', menu: '‹ Menú',
    moveLeft: 'Mover a la izquierda', launchBall: 'Lanzar la bola', moveRight: 'Mover a la derecha',
    level: 'Nivel', hint: 'arrastra para mover · toca o Espacio para lanzar · ← → también · Mando 🎮',
    langLabel: 'Idioma'
  },
  en: {
    eyebrow: 'Premium Arcade',
    menuCopy: "Pick a player, then smash every brick — don't drop the ball!",
    noPlayers: 'No players yet — add one below.', addPlaceholder: 'Add a new name', add: '+ Add',
    startGame: '▶ Start game', playingAs: 'Playing as', bestShort: 'Best', remove: (n) => `Remove ${n}`,
    stop: '■ Stop', score: 'Score', lives: 'Lives', best: 'Best',
    gameOver: 'Game over', newBest: 'New best! 🎉', niceRun: 'Nice run!',
    playAgain: '↻ Play again', menu: '‹ Menu',
    moveLeft: 'Move left', launchBall: 'Launch ball', moveRight: 'Move right',
    level: 'Level', hint: 'drag to move · tap or Space to launch · ← → also work · Gamepad 🎮',
    langLabel: 'Language'
  },
  pt: {
    eyebrow: 'Arcade Premium',
    menuCopy: 'Escolha um jogador e quebre todos os tijolos: não deixe a bola cair!',
    noPlayers: 'Ainda não há jogadores — adicione um abaixo.', addPlaceholder: 'Adicione um nome', add: '+ Adicionar',
    startGame: '▶ Começar', playingAs: 'Jogando como', bestShort: 'Melhor', remove: (n) => `Remover ${n}`,
    stop: '■ Parar', score: 'Pontos', lives: 'Vidas', best: 'Melhor',
    gameOver: 'Fim de jogo', newBest: 'Novo recorde! 🎉', niceRun: 'Boa partida!',
    playAgain: '↻ Jogar de novo', menu: '‹ Menu',
    moveLeft: 'Mover para a esquerda', launchBall: 'Lançar a bola', moveRight: 'Mover para a direita',
    level: 'Nível', hint: 'arraste para mover · toque ou Espaço para lançar · ← → também · Controle 🎮',
    langLabel: 'Idioma'
  },
  fr: {
    eyebrow: 'Arcade Premium',
    menuCopy: 'Choisis un joueur et casse toutes les briques : ne laisse pas tomber la balle !',
    noPlayers: 'Aucun joueur — ajoutes-en un ci-dessous.', addPlaceholder: 'Ajoute un nom', add: '+ Ajouter',
    startGame: '▶ Jouer', playingAs: 'Tu joues en tant que', bestShort: 'Record', remove: (n) => `Retirer ${n}`,
    stop: '■ Stop', score: 'Score', lives: 'Vies', best: 'Record',
    gameOver: 'Partie terminée', newBest: 'Nouveau record ! 🎉', niceRun: 'Belle partie !',
    playAgain: '↻ Rejouer', menu: '‹ Menu',
    moveLeft: 'Aller à gauche', launchBall: 'Lancer la balle', moveRight: 'Aller à droite',
    level: 'Niveau', hint: 'glisse pour bouger · touche ou Espace pour lancer · ← → aussi · Manette 🎮',
    langLabel: 'Langue'
  },
  de: {
    eyebrow: 'Premium-Arcade',
    menuCopy: 'Wähle einen Spieler und zerschlage alle Steine – lass den Ball nicht fallen!',
    noPlayers: 'Noch keine Spieler — unten einen hinzufügen.', addPlaceholder: 'Namen hinzufügen', add: '+ Hinzufügen',
    startGame: '▶ Start', playingAs: 'Spielt als', bestShort: 'Beste', remove: (n) => `${n} entfernen`,
    stop: '■ Stopp', score: 'Punkte', lives: 'Leben', best: 'Beste',
    gameOver: 'Vorbei', newBest: 'Neuer Rekord! 🎉', niceRun: 'Gut gespielt!',
    playAgain: '↻ Nochmal', menu: '‹ Menü',
    moveLeft: 'Nach links', launchBall: 'Ball starten', moveRight: 'Nach rechts',
    level: 'Level', hint: 'ziehen zum Bewegen · tippen oder Leertaste zum Starten · ← → auch · Controller 🎮',
    langLabel: 'Sprache'
  },
  it: {
    eyebrow: 'Arcade Premium',
    menuCopy: 'Scegli un giocatore e distruggi tutti i mattoni: non far cadere la palla!',
    noPlayers: 'Ancora nessun giocatore — aggiungine uno sotto.', addPlaceholder: 'Aggiungi un nome', add: '+ Aggiungi',
    startGame: '▶ Inizia', playingAs: 'Giochi come', bestShort: 'Migliore', remove: (n) => `Rimuovi ${n}`,
    stop: '■ Stop', score: 'Punti', lives: 'Vite', best: 'Migliore',
    gameOver: 'Partita finita', newBest: 'Nuovo record! 🎉', niceRun: 'Bella partita!',
    playAgain: '↻ Rigioca', menu: '‹ Menu',
    moveLeft: 'Vai a sinistra', launchBall: 'Lancia la palla', moveRight: 'Vai a destra',
    level: 'Livello', hint: 'trascina per muovere · tocca o Spazio per lanciare · ← → anche · Controller 🎮',
    langLabel: 'Lingua'
  },
  zh: {
    eyebrow: '精品街机',
    menuCopy: '选择一位玩家，敲碎所有砖块——别让球掉下去！',
    noPlayers: '还没有玩家 —— 在下面添加一个。', addPlaceholder: '添加新名字', add: '+ 添加',
    startGame: '▶ 开始', playingAs: '玩家', bestShort: '最佳', remove: (n) => `移除 ${n}`,
    stop: '■ 停止', score: '分数', lives: '生命', best: '最佳',
    gameOver: '游戏结束', newBest: '新纪录！🎉', niceRun: '打得不错！',
    playAgain: '↻ 再玩一次', menu: '‹ 菜单',
    moveLeft: '向左移动', launchBall: '发球', moveRight: '向右移动',
    level: '关卡', hint: '拖动移动 · 点击或空格发球 · ← → 也可以 · 手柄 🎮',
    langLabel: '语言'
  },
  ja: {
    eyebrow: 'プレミアム アーケード',
    menuCopy: 'プレイヤーを選んで、すべてのブロックを壊そう——ボールを落とさないで！',
    noPlayers: 'まだプレイヤーがいません — 下で追加。', addPlaceholder: '新しい名前を追加', add: '+ 追加',
    startGame: '▶ スタート', playingAs: 'プレイヤー', bestShort: 'ベスト', remove: (n) => `${n} を削除`,
    stop: '■ 停止', score: 'スコア', lives: 'ライフ', best: 'ベスト',
    gameOver: 'ゲームオーバー', newBest: '自己ベスト更新！🎉', niceRun: 'ナイスプレイ！',
    playAgain: '↻ もう一度', menu: '‹ メニュー',
    moveLeft: '左へ移動', launchBall: 'ボールを発射', moveRight: '右へ移動',
    level: 'レベル', hint: 'ドラッグで移動 · タップかスペースで発射 · ← → も可 · ゲームパッド 🎮',
    langLabel: '言語'
  },
  ar: {
    eyebrow: 'أركيد بريميوم',
    menuCopy: 'اختر لاعبًا وحطّم كل الطوب — لا تدع الكرة تسقط!',
    noPlayers: 'لا لاعبين بعد — أضف واحدًا بالأسفل.', addPlaceholder: 'أضف اسمًا جديدًا', add: '+ إضافة',
    startGame: '▶ ابدأ', playingAs: 'تلعب باسم', bestShort: 'الأفضل', remove: (n) => `أزل ${n}`,
    stop: '■ إيقاف', score: 'النقاط', lives: 'الأرواح', best: 'الأفضل',
    gameOver: 'انتهت الجولة', newBest: 'رقم قياسي جديد! 🎉', niceRun: 'جولة رائعة!',
    playAgain: '↻ العب مجددًا', menu: '‹ القائمة',
    moveLeft: 'إلى اليسار', launchBall: 'أطلق الكرة', moveRight: 'إلى اليمين',
    level: 'المستوى', hint: 'اسحب للتحريك · انقر أو مسافة للإطلاق · ← → أيضًا · يد تحكم 🎮',
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
