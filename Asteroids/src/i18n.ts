// Localization for Asteroids — same shared contract as the dashboard: reads the
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
  titlePre: string;
  titleAccent: string;
  menuCopy: string;
  noPlayers: string;
  addName: string;
  add: string;
  startGame: string;
  playingAs: string;
  remove: (u: string) => string;
  stop: string;
  score: string;
  lives: string;
  best: string;
  overEyebrow: string;
  overBest: string;
  overNice: string;
  playAgain: string;
  menu: string;
  turnLeft: string;
  thrust: string;
  turnRight: string;
  shoot: string;
  hint: string;
  langLabel: string;
};

export const STR: Record<Lang, S> = {
  es: {
    eyebrow: 'Arcade Premium', titlePre: 'Aster', titleAccent: 'oids',
    menuCopy: '¡Elige un jugador o añade uno nuevo y pulsa Empezar!',
    noPlayers: 'Aún no hay jugadores — añade uno abajo.', addName: 'Añade un nombre nuevo', add: '+ Añadir',
    startGame: '▶ Empezar', playingAs: 'Jugando como', remove: (u) => `Quitar ${u}`, stop: '■ Parar',
    score: 'Puntos', lives: 'Vidas', best: 'Mejor',
    overEyebrow: 'Fin de la partida', overBest: '¡Nuevo récord! 🎉', overNice: '¡Buen vuelo!',
    playAgain: '↻ Jugar de nuevo', menu: '‹ Menú',
    turnLeft: 'Girar a la izquierda', thrust: 'Impulso', turnRight: 'Girar a la derecha', shoot: 'Disparar',
    hint: '← → girar · ↑ impulso · Espacio dispara · ¡la pantalla se envuelve! · Mando 🎮', langLabel: 'Idioma'
  },
  en: {
    eyebrow: 'Premium Arcade', titlePre: 'Aster', titleAccent: 'oids',
    menuCopy: 'Pick a player or add a new one, then press Start!',
    noPlayers: 'No players yet — add one below.', addName: 'Add a new name', add: '+ Add',
    startGame: '▶ Start game', playingAs: 'Playing as', remove: (u) => `Remove ${u}`, stop: '■ Stop',
    score: 'Score', lives: 'Lives', best: 'Best',
    overEyebrow: 'Game over', overBest: 'New best! 🎉', overNice: 'Good flying!',
    playAgain: '↻ Play again', menu: '‹ Menu',
    turnLeft: 'Turn left', thrust: 'Thrust', turnRight: 'Turn right', shoot: 'Shoot',
    hint: '← → turn · ↑ thrust · Space shoot · screen wraps around! · Gamepad 🎮', langLabel: 'Language'
  },
  pt: {
    eyebrow: 'Arcade Premium', titlePre: 'Aster', titleAccent: 'oids',
    menuCopy: 'Escolha um jogador ou adicione um novo e pressione Começar!',
    noPlayers: 'Ainda não há jogadores — adicione um abaixo.', addName: 'Adicione um novo nome', add: '+ Adicionar',
    startGame: '▶ Começar', playingAs: 'Jogando como', remove: (u) => `Remover ${u}`, stop: '■ Parar',
    score: 'Pontos', lives: 'Vidas', best: 'Melhor',
    overEyebrow: 'Fim de jogo', overBest: 'Novo recorde! 🎉', overNice: 'Bom voo!',
    playAgain: '↻ Jogar de novo', menu: '‹ Menu',
    turnLeft: 'Virar à esquerda', thrust: 'Impulso', turnRight: 'Virar à direita', shoot: 'Atirar',
    hint: '← → virar · ↑ impulso · Espaço atira · a tela dá a volta! · Controle 🎮', langLabel: 'Idioma'
  },
  fr: {
    eyebrow: 'Arcade Premium', titlePre: 'Aster', titleAccent: 'oids',
    menuCopy: 'Choisis un joueur ou ajoutes-en un nouveau, puis appuie sur Jouer !',
    noPlayers: 'Aucun joueur — ajoutes-en un ci-dessous.', addName: 'Ajoute un nouveau nom', add: '+ Ajouter',
    startGame: '▶ Jouer', playingAs: 'Tu joues en tant que', remove: (u) => `Retirer ${u}`, stop: '■ Arrêter',
    score: 'Score', lives: 'Vies', best: 'Meilleur',
    overEyebrow: 'Partie terminée', overBest: 'Nouveau record ! 🎉', overNice: 'Beau vol !',
    playAgain: '↻ Rejouer', menu: '‹ Menu',
    turnLeft: 'Tourner à gauche', thrust: 'Poussée', turnRight: 'Tourner à droite', shoot: 'Tirer',
    hint: '← → tourner · ↑ poussée · Espace tire · l’écran se boucle ! · Manette 🎮', langLabel: 'Langue'
  },
  de: {
    eyebrow: 'Premium-Arcade', titlePre: 'Aster', titleAccent: 'oids',
    menuCopy: 'Wähle einen Spieler oder füge einen neuen hinzu, dann Start drücken!',
    noPlayers: 'Noch keine Spieler — unten einen hinzufügen.', addName: 'Neuen Namen hinzufügen', add: '+ Hinzufügen',
    startGame: '▶ Start', playingAs: 'Spielt als', remove: (u) => `${u} entfernen`, stop: '■ Stopp',
    score: 'Punkte', lives: 'Leben', best: 'Beste',
    overEyebrow: 'Vorbei', overBest: 'Neuer Rekord! 🎉', overNice: 'Guter Flug!',
    playAgain: '↻ Nochmal', menu: '‹ Menü',
    turnLeft: 'Links drehen', thrust: 'Schub', turnRight: 'Rechts drehen', shoot: 'Schießen',
    hint: '← → drehen · ↑ Schub · Leertaste schießt · Bildschirm ist umlaufend! · Controller 🎮', langLabel: 'Sprache'
  },
  it: {
    eyebrow: 'Arcade Premium', titlePre: 'Aster', titleAccent: 'oids',
    menuCopy: 'Scegli un giocatore o aggiungine uno nuovo, poi premi Inizia!',
    noPlayers: 'Ancora nessun giocatore — aggiungine uno sotto.', addName: 'Aggiungi un nuovo nome', add: '+ Aggiungi',
    startGame: '▶ Inizia', playingAs: 'Giochi come', remove: (u) => `Rimuovi ${u}`, stop: '■ Ferma',
    score: 'Punti', lives: 'Vite', best: 'Migliore',
    overEyebrow: 'Partita finita', overBest: 'Nuovo record! 🎉', overNice: 'Bel volo!',
    playAgain: '↻ Rigioca', menu: '‹ Menu',
    turnLeft: 'Gira a sinistra', thrust: 'Spinta', turnRight: 'Gira a destra', shoot: 'Spara',
    hint: '← → gira · ↑ spinta · Spazio spara · lo schermo si avvolge! · Controller 🎮', langLabel: 'Lingua'
  },
  zh: {
    eyebrow: '精品街机', titlePre: 'Aster', titleAccent: 'oids',
    menuCopy: '选择一位玩家或新增一个，然后按开始！',
    noPlayers: '还没有玩家 —— 在下面添加一个。', addName: '添加新名字', add: '+ 添加',
    startGame: '▶ 开始游戏', playingAs: '玩家：', remove: (u) => `移除 ${u}`, stop: '■ 停止',
    score: '分数', lives: '生命', best: '最佳',
    overEyebrow: '游戏结束', overBest: '新纪录！🎉', overNice: '飞得漂亮！',
    playAgain: '↻ 再玩一次', menu: '‹ 菜单',
    turnLeft: '向左转', thrust: '推进', turnRight: '向右转', shoot: '射击',
    hint: '← → 转向 · ↑ 推进 · 空格射击 · 屏幕循环环绕！· 手柄 🎮', langLabel: '语言'
  },
  ja: {
    eyebrow: 'プレミアム アーケード', titlePre: 'Aster', titleAccent: 'oids',
    menuCopy: 'プレイヤーを選ぶか新しく追加して、スタートを押そう！',
    noPlayers: 'まだプレイヤーがいません — 下で追加。', addName: '新しい名前を追加', add: '+ 追加',
    startGame: '▶ ゲーム開始', playingAs: 'プレイヤー：', remove: (u) => `${u} を削除`, stop: '■ 停止',
    score: 'スコア', lives: '残機', best: 'ベスト',
    overEyebrow: 'ゲームオーバー', overBest: '自己ベスト更新！🎉', overNice: 'ナイスフライト！',
    playAgain: '↻ もう一度', menu: '‹ メニュー',
    turnLeft: '左回転', thrust: 'スラスト', turnRight: '右回転', shoot: '発射',
    hint: '← → 回転 · ↑ スラスト · スペースで発射 · 画面はループ！· ゲームパッド 🎮', langLabel: '言語'
  },
  ar: {
    eyebrow: 'أركيد بريميوم', titlePre: 'Aster', titleAccent: 'oids',
    menuCopy: 'اختر لاعبًا أو أضف واحدًا جديدًا، ثم اضغط ابدأ!',
    noPlayers: 'لا لاعبين بعد — أضف واحدًا بالأسفل.', addName: 'أضف اسمًا جديدًا', add: '+ إضافة',
    startGame: '▶ ابدأ اللعبة', playingAs: 'تلعب باسم', remove: (u) => `أزل ${u}`, stop: '■ إيقاف',
    score: 'النقاط', lives: 'الأرواح', best: 'الأفضل',
    overEyebrow: 'انتهت اللعبة', overBest: 'رقم قياسي جديد! 🎉', overNice: 'تحليق رائع!',
    playAgain: '↻ العب مجددًا', menu: '‹ القائمة',
    turnLeft: 'انعطف يسارًا', thrust: 'دفع', turnRight: 'انعطف يمينًا', shoot: 'إطلاق',
    hint: '← → دوران · ↑ دفع · مسافة للإطلاق · الشاشة تلتف! · يد تحكم 🎮', langLabel: 'اللغة'
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
