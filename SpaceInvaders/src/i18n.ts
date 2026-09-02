// Localization for Space Invaders — same shared contract as the dashboard: reads
// the `arcade.lang` key set by the launcher (and a `?lang=xx` URL override), so
// the game opens in the language the arcade is in. A small in-game <select> lets
// you change it too.

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
  remove: (n: string) => string;
  addName: string;
  add: string;
  startGame: string;
  playingAs: (name: string, best: number) => string;
  stop: string;
  score: string;
  lives: string;
  best: string;
  gameOver: string;
  newBest: string;
  goodFight: string;
  wave: string;
  playAgain: string;
  menu: string;
  moveLeft: string;
  shoot: string;
  moveRight: string;
  hint: (wave: number) => string;
  langLabel: string;
};

export const STR: Record<Lang, S> = {
  es: {
    eyebrow: 'Arcade Premium', titlePre: 'Space ', titleAccent: 'Invaders',
    menuCopy: 'Elige un jugador y destruye las oleadas de aliens que descienden.',
    noPlayers: 'Aún no hay jugadores: añade uno abajo.', remove: (n) => `Quitar ${n}`,
    addName: 'Añade un nombre', add: '+ Añadir', startGame: '▶ Empezar',
    playingAs: (name, best) => `Juegas como ${name} · 🏆 Mejor ${best}`,
    stop: '■ Salir', score: 'Puntos', lives: 'Vidas', best: 'Mejor',
    gameOver: 'Fin de la partida', newBest: '¡Nuevo récord! 🎉', goodFight: '¡Buena lucha!',
    wave: 'Oleada', playAgain: '↻ Jugar de nuevo', menu: '‹ Menú',
    moveLeft: 'Mover izquierda', shoot: 'Disparar', moveRight: 'Mover derecha',
    hint: (w) => `Oleada ${w} · ← → mover · Espacio para disparar · Mando 🎮 · ¡no dejes que aterricen!`,
    langLabel: 'Idioma'
  },
  en: {
    eyebrow: 'Premium Arcade', titlePre: 'Space ', titleAccent: 'Invaders',
    menuCopy: 'Pick a player, then blast the descending alien waves!',
    noPlayers: 'No players yet — add one below.', remove: (n) => `Remove ${n}`,
    addName: 'Add a new name', add: '+ Add', startGame: '▶ Start game',
    playingAs: (name, best) => `Playing as ${name} · 🏆 Best ${best}`,
    stop: '■ Stop', score: 'Score', lives: 'Lives', best: 'Best',
    gameOver: 'Game over', newBest: 'New best! 🎉', goodFight: 'Good fight!',
    wave: 'Wave', playAgain: '↻ Play again', menu: '‹ Menu',
    moveLeft: 'Move left', shoot: 'Shoot', moveRight: 'Move right',
    hint: (w) => `Wave ${w} · ← → move · Space to shoot · Gamepad 🎮 · don't let them land!`,
    langLabel: 'Language'
  },
  pt: {
    eyebrow: 'Arcade Premium', titlePre: 'Space ', titleAccent: 'Invaders',
    menuCopy: 'Escolha um jogador e destrua as ondas de aliens que descem!',
    noPlayers: 'Ainda não há jogadores — adicione um abaixo.', remove: (n) => `Remover ${n}`,
    addName: 'Adicione um nome', add: '+ Adicionar', startGame: '▶ Começar',
    playingAs: (name, best) => `Jogando como ${name} · 🏆 Melhor ${best}`,
    stop: '■ Parar', score: 'Pontos', lives: 'Vidas', best: 'Melhor',
    gameOver: 'Fim de jogo', newBest: 'Novo recorde! 🎉', goodFight: 'Boa luta!',
    wave: 'Onda', playAgain: '↻ Jogar de novo', menu: '‹ Menu',
    moveLeft: 'Mover esquerda', shoot: 'Atirar', moveRight: 'Mover direita',
    hint: (w) => `Onda ${w} · ← → mover · Espaço para atirar · Controle 🎮 · não deixe pousarem!`,
    langLabel: 'Idioma'
  },
  fr: {
    eyebrow: 'Arcade Premium', titlePre: 'Space ', titleAccent: 'Invaders',
    menuCopy: 'Choisis un joueur, puis pulvérise les vagues d’aliens qui descendent !',
    noPlayers: 'Aucun joueur — ajoutes-en un ci-dessous.', remove: (n) => `Retirer ${n}`,
    addName: 'Ajoute un nom', add: '+ Ajouter', startGame: '▶ Jouer',
    playingAs: (name, best) => `Tu joues en tant que ${name} · 🏆 Record ${best}`,
    stop: '■ Stop', score: 'Score', lives: 'Vies', best: 'Record',
    gameOver: 'Partie terminée', newBest: 'Nouveau record ! 🎉', goodFight: 'Beau combat !',
    wave: 'Vague', playAgain: '↻ Rejouer', menu: '‹ Menu',
    moveLeft: 'Aller à gauche', shoot: 'Tirer', moveRight: 'Aller à droite',
    hint: (w) => `Vague ${w} · ← → bouger · Espace pour tirer · Manette 🎮 · ne les laisse pas atterrir !`,
    langLabel: 'Langue'
  },
  de: {
    eyebrow: 'Premium-Arcade', titlePre: 'Space ', titleAccent: 'Invaders',
    menuCopy: 'Wähle einen Spieler und pulverisiere die herabstürzenden Alien-Wellen!',
    noPlayers: 'Noch keine Spieler — unten einen hinzufügen.', remove: (n) => `${n} entfernen`,
    addName: 'Namen hinzufügen', add: '+ Hinzufügen', startGame: '▶ Start',
    playingAs: (name, best) => `Du spielst als ${name} · 🏆 Beste ${best}`,
    stop: '■ Stopp', score: 'Punkte', lives: 'Leben', best: 'Beste',
    gameOver: 'Vorbei', newBest: 'Neuer Rekord! 🎉', goodFight: 'Guter Kampf!',
    wave: 'Welle', playAgain: '↻ Nochmal', menu: '‹ Menü',
    moveLeft: 'Nach links', shoot: 'Schießen', moveRight: 'Nach rechts',
    hint: (w) => `Welle ${w} · ← → bewegen · Leertaste zum Schießen · Controller 🎮 · lass sie nicht landen!`,
    langLabel: 'Sprache'
  },
  it: {
    eyebrow: 'Arcade Premium', titlePre: 'Space ', titleAccent: 'Invaders',
    menuCopy: 'Scegli un giocatore e distruggi le ondate di alieni in arrivo!',
    noPlayers: 'Ancora nessun giocatore — aggiungine uno sotto.', remove: (n) => `Rimuovi ${n}`,
    addName: 'Aggiungi un nome', add: '+ Aggiungi', startGame: '▶ Inizia',
    playingAs: (name, best) => `Giochi come ${name} · 🏆 Record ${best}`,
    stop: '■ Ferma', score: 'Punti', lives: 'Vite', best: 'Record',
    gameOver: 'Partita finita', newBest: 'Nuovo record! 🎉', goodFight: 'Bella battaglia!',
    wave: 'Ondata', playAgain: '↻ Rigioca', menu: '‹ Menu',
    moveLeft: 'Vai a sinistra', shoot: 'Spara', moveRight: 'Vai a destra',
    hint: (w) => `Ondata ${w} · ← → muovi · Spazio per sparare · Controller 🎮 · non farli atterrare!`,
    langLabel: 'Lingua'
  },
  zh: {
    eyebrow: '精品街机', titlePre: 'Space ', titleAccent: 'Invaders',
    menuCopy: '选择一位玩家，然后击落下降的外星舰队！',
    noPlayers: '还没有玩家 —— 在下面添加一个。', remove: (n) => `移除 ${n}`,
    addName: '添加新名字', add: '+ 添加', startGame: '▶ 开始',
    playingAs: (name, best) => `以 ${name} 游玩 · 🏆 最佳 ${best}`,
    stop: '■ 停止', score: '分数', lives: '生命', best: '最佳',
    gameOver: '游戏结束', newBest: '新纪录！🎉', goodFight: '打得好！',
    wave: '波次', playAgain: '↻ 再玩一次', menu: '‹ 菜单',
    moveLeft: '向左移动', shoot: '射击', moveRight: '向右移动',
    hint: (w) => `第 ${w} 波 · ← → 移动 · 空格射击 · 手柄 🎮 · 别让它们着陆！`,
    langLabel: '语言'
  },
  ja: {
    eyebrow: 'プレミアム アーケード', titlePre: 'Space ', titleAccent: 'Invaders',
    menuCopy: 'プレイヤーを選んで、迫りくるエイリアンの大群を撃ち落とせ！',
    noPlayers: 'まだプレイヤーがいません — 下で追加。', remove: (n) => `${n} を削除`,
    addName: '新しい名前を追加', add: '+ 追加', startGame: '▶ スタート',
    playingAs: (name, best) => `${name} でプレイ中 · 🏆 ベスト ${best}`,
    stop: '■ 停止', score: 'スコア', lives: 'ライフ', best: 'ベスト',
    gameOver: 'ゲームオーバー', newBest: '自己ベスト更新！🎉', goodFight: 'ナイスファイト！',
    wave: 'ウェーブ', playAgain: '↻ もう一度', menu: '‹ メニュー',
    moveLeft: '左へ移動', shoot: '発射', moveRight: '右へ移動',
    hint: (w) => `ウェーブ ${w} · ← → 移動 · スペースで発射 · ゲームパッド 🎮 · 着地させるな！`,
    langLabel: '言語'
  },
  ar: {
    eyebrow: 'أركيد بريميوم', titlePre: 'Space ', titleAccent: 'Invaders',
    menuCopy: 'اختر لاعبًا ثم دمّر موجات الكائنات الفضائية النازلة!',
    noPlayers: 'لا لاعبين بعد — أضف واحدًا بالأسفل.', remove: (n) => `أزل ${n}`,
    addName: 'أضف اسمًا جديدًا', add: '+ إضافة', startGame: '▶ ابدأ',
    playingAs: (name, best) => `تلعب باسم ${name} · 🏆 الأفضل ${best}`,
    stop: '■ إيقاف', score: 'النقاط', lives: 'الأرواح', best: 'الأفضل',
    gameOver: 'انتهت اللعبة', newBest: 'رقم قياسي جديد! 🎉', goodFight: 'قتال رائع!',
    wave: 'موجة', playAgain: '↻ العب مجددًا', menu: '‹ القائمة',
    moveLeft: 'تحرك يسارًا', shoot: 'إطلاق', moveRight: 'تحرك يمينًا',
    hint: (w) => `موجة ${w} · ← → تحرك · مسافة للإطلاق · يد تحكم 🎮 · لا تدعهم يهبطون!`,
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
