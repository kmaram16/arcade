// Localization for Snake — same shared contract as the dashboard: reads the
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
  heroPre: string;
  heroAccent: string;
  heroPost: string;
  heroCopy: string;
  live: string;
  profiles: string;
  profilesSub: string;
  saved: (n: number) => string;
  noProfiles: string;
  newUsername: string;
  typeUsername: string;
  saveProfile: string;
  statsMine: (name: string) => string;
  statsYours: string;
  statsSub: string;
  ready: string;
  noPlayer: string;
  bestScore: string;
  gamesPlayed: string;
  foodEaten: string;
  lastScore: string;
  leaderboard: string;
  lbEmpty: string;
  startGame: string;
  remove: (u: string) => string;
  dashboard: string;
  backToDash: string;
  resume: string;
  pause: string;
  score: string;
  best: string;
  length: string;
  pausedEyebrow: string;
  pausedTitle: string;
  exit: string;
  overEyebrow: string;
  overBest: string;
  overNice: string;
  playAgain: string;
  hint: string;
  moveUp: string;
  moveDown: string;
  moveLeft: string;
  moveRight: string;
  langLabel: string;
  msgCreate: string;
  msgEnterName: string;
  msgReady: string;
  msgRemoved: string;
  msgLoaded: string;
  msgPick: string;
  msgControls: string;
  msgPaused: string;
  msgBack: string;
  msgAgain: string;
  msgGameOver: string;
};

export const STR: Record<Lang, S> = {
  es: {
    eyebrow: 'Arcade Premium', heroPre: 'Snake, ', heroAccent: 'refinado', heroPost: '.',
    heroCopy: 'Crea un perfil, entra en un tablero a pantalla completa y sube en la clasificación.',
    live: 'En directo', profiles: 'Perfiles', profilesSub: 'Elige un jugador o crea uno nuevo para guardar tu progreso.',
    saved: (n) => `${n} guardados`, noProfiles: 'Aún no hay perfiles: añade uno abajo.', newUsername: 'Nuevo usuario',
    typeUsername: 'Escribe un usuario', saveProfile: 'Guardar perfil', statsMine: (name) => `Estadísticas de ${name}`,
    statsYours: 'Tus estadísticas', statsSub: 'Mejores partidas, totales y últimas puntuaciones.', ready: 'Listo', noPlayer: 'Sin jugador',
    bestScore: 'Mejor puntuación', gamesPlayed: 'Partidas', foodEaten: 'Comida', lastScore: 'Última', leaderboard: 'Clasificación',
    lbEmpty: 'Juega una partida para marcar el primer récord.', startGame: '▶ Empezar', remove: (u) => `Quitar ${u}`,
    dashboard: 'Menú', backToDash: 'Volver al menú', resume: 'Seguir', pause: 'Pausa', score: 'Puntos', best: 'Mejor', length: 'Longitud',
    pausedEyebrow: 'En pausa', pausedTitle: 'Respira un momento', exit: 'Salir', overEyebrow: 'Fin de la partida',
    overBest: '¡Nuevo récord personal! 🎉', overNice: '¡Buena partida!', playAgain: 'Jugar de nuevo',
    hint: 'Flechas / WASD · Espacio para pausar · Desliza en móvil · Mando 🎮', moveUp: 'Arriba', moveDown: 'Abajo', moveLeft: 'Izquierda', moveRight: 'Derecha',
    langLabel: 'Idioma', msgCreate: 'Crea un perfil para empezar.', msgEnterName: 'Escribe un nombre de perfil primero.',
    msgReady: 'Perfil listo. Pulsa Empezar para jugar.', msgRemoved: 'Perfil eliminado. Elige o crea uno para jugar.',
    msgLoaded: 'Perfil cargado. Pulsa Empezar para jugar.', msgPick: 'Elige o crea un perfil antes de empezar.',
    msgControls: 'Usa las flechas, WASD, mando o desliza para moverte.', msgPaused: 'En pausa.', msgBack: 'De vuelta.',
    msgAgain: 'Pulsa Empezar para jugar otra vez.', msgGameOver: 'Fin de la partida.'
  },
  en: {
    eyebrow: 'Premium Arcade', heroPre: 'Snake, ', heroAccent: 'refined', heroPost: '.',
    heroCopy: 'Create a profile, jump into a focused fullscreen board, and climb the leaderboard.',
    live: 'Live', profiles: 'Profiles', profilesSub: 'Select a player or create a new one to save progress.',
    saved: (n) => `${n} saved`, noProfiles: 'No profiles yet — add one below.', newUsername: 'New username',
    typeUsername: 'Type a username', saveProfile: 'Save profile', statsMine: (name) => `${name}'s stats`,
    statsYours: 'Your stats', statsSub: 'Best runs, totals, and recent scores.', ready: 'Ready', noPlayer: 'No player',
    bestScore: 'Best score', gamesPlayed: 'Games played', foodEaten: 'Food eaten', lastScore: 'Last score', leaderboard: 'Leaderboard',
    lbEmpty: 'Play a game to set the first record.', startGame: '▶ Start game', remove: (u) => `Remove ${u}`,
    dashboard: 'Dashboard', backToDash: 'Back to dashboard', resume: 'Resume', pause: 'Pause', score: 'Score', best: 'Best', length: 'Length',
    pausedEyebrow: 'Paused', pausedTitle: 'Take a breath', exit: 'Exit', overEyebrow: 'Game over',
    overBest: 'New personal best! 🎉', overNice: 'Nice run', playAgain: 'Play again',
    hint: 'Arrow keys / WASD · Space to pause · Swipe on mobile · Gamepad 🎮', moveUp: 'Up', moveDown: 'Down', moveLeft: 'Left', moveRight: 'Right',
    langLabel: 'Language', msgCreate: 'Create a profile to begin.', msgEnterName: 'Enter a profile name first.',
    msgReady: 'Profile ready. Press Start to play.', msgRemoved: 'Profile removed. Pick or create one to play.',
    msgLoaded: 'Profile loaded. Press Start to play.', msgPick: 'Pick or create a profile before starting.',
    msgControls: 'Use arrow keys, WASD, gamepad, or swipe to move.', msgPaused: 'Paused.', msgBack: 'Back in.',
    msgAgain: 'Press Start to play again.', msgGameOver: 'Game over.'
  },
  pt: {
    eyebrow: 'Arcade Premium', heroPre: 'Snake, ', heroAccent: 'refinado', heroPost: '.',
    heroCopy: 'Crie um perfil, entre num tabuleiro em tela cheia e suba no ranking.',
    live: 'No ar', profiles: 'Perfis', profilesSub: 'Escolha um jogador ou crie um novo para salvar o progresso.',
    saved: (n) => `${n} salvos`, noProfiles: 'Ainda não há perfis — adicione um abaixo.', newUsername: 'Novo usuário',
    typeUsername: 'Digite um usuário', saveProfile: 'Salvar perfil', statsMine: (name) => `Estatísticas de ${name}`,
    statsYours: 'Suas estatísticas', statsSub: 'Melhores partidas, totais e pontuações recentes.', ready: 'Pronto', noPlayer: 'Sem jogador',
    bestScore: 'Melhor pontuação', gamesPlayed: 'Partidas', foodEaten: 'Comida', lastScore: 'Última', leaderboard: 'Ranking',
    lbEmpty: 'Jogue uma partida para marcar o primeiro recorde.', startGame: '▶ Começar', remove: (u) => `Remover ${u}`,
    dashboard: 'Menu', backToDash: 'Voltar ao menu', resume: 'Continuar', pause: 'Pausa', score: 'Pontos', best: 'Melhor', length: 'Tamanho',
    pausedEyebrow: 'Em pausa', pausedTitle: 'Respire um pouco', exit: 'Sair', overEyebrow: 'Fim de jogo',
    overBest: 'Novo recorde pessoal! 🎉', overNice: 'Boa partida', playAgain: 'Jogar de novo',
    hint: 'Setas / WASD · Espaço para pausar · Deslize no celular · Controle 🎮', moveUp: 'Cima', moveDown: 'Baixo', moveLeft: 'Esquerda', moveRight: 'Direita',
    langLabel: 'Idioma', msgCreate: 'Crie um perfil para começar.', msgEnterName: 'Digite um nome de perfil primeiro.',
    msgReady: 'Perfil pronto. Pressione Começar para jogar.', msgRemoved: 'Perfil removido. Escolha ou crie um para jogar.',
    msgLoaded: 'Perfil carregado. Pressione Começar para jogar.', msgPick: 'Escolha ou crie um perfil antes de começar.',
    msgControls: 'Use as setas, WASD, controle ou deslize para mover.', msgPaused: 'Em pausa.', msgBack: 'De volta.',
    msgAgain: 'Pressione Começar para jogar de novo.', msgGameOver: 'Fim de jogo.'
  },
  fr: {
    eyebrow: 'Arcade Premium', heroPre: 'Snake, ', heroAccent: 'affiné', heroPost: '.',
    heroCopy: 'Crée un profil, lance-toi sur un plateau plein écran et grimpe au classement.',
    live: 'En ligne', profiles: 'Profils', profilesSub: 'Choisis un joueur ou crées-en un nouveau pour sauvegarder.',
    saved: (n) => `${n} enregistrés`, noProfiles: 'Aucun profil — ajoutes-en un ci-dessous.', newUsername: 'Nouveau pseudo',
    typeUsername: 'Saisis un pseudo', saveProfile: 'Enregistrer', statsMine: (name) => `Stats de ${name}`,
    statsYours: 'Tes stats', statsSub: 'Meilleures parties, totaux et scores récents.', ready: 'Prêt', noPlayer: 'Aucun joueur',
    bestScore: 'Meilleur score', gamesPlayed: 'Parties', foodEaten: 'Nourriture', lastScore: 'Dernier', leaderboard: 'Classement',
    lbEmpty: 'Joue une partie pour établir le premier record.', startGame: '▶ Jouer', remove: (u) => `Retirer ${u}`,
    dashboard: 'Menu', backToDash: 'Retour au menu', resume: 'Reprendre', pause: 'Pause', score: 'Score', best: 'Meilleur', length: 'Longueur',
    pausedEyebrow: 'En pause', pausedTitle: 'Respire un peu', exit: 'Quitter', overEyebrow: 'Partie terminée',
    overBest: 'Nouveau record perso ! 🎉', overNice: 'Belle partie', playAgain: 'Rejouer',
    hint: 'Flèches / WASD · Espace pour pause · Glisse sur mobile · Manette 🎮', moveUp: 'Haut', moveDown: 'Bas', moveLeft: 'Gauche', moveRight: 'Droite',
    langLabel: 'Langue', msgCreate: 'Crée un profil pour commencer.', msgEnterName: 'Saisis d’abord un nom de profil.',
    msgReady: 'Profil prêt. Appuie sur Jouer.', msgRemoved: 'Profil supprimé. Choisis ou crées-en un pour jouer.',
    msgLoaded: 'Profil chargé. Appuie sur Jouer.', msgPick: 'Choisis ou crée un profil avant de commencer.',
    msgControls: 'Flèches, WASD, manette ou glisse pour bouger.', msgPaused: 'En pause.', msgBack: 'C’est reparti.',
    msgAgain: 'Appuie sur Jouer pour rejouer.', msgGameOver: 'Partie terminée.'
  },
  de: {
    eyebrow: 'Premium-Arcade', heroPre: 'Snake, ', heroAccent: 'verfeinert', heroPost: '.',
    heroCopy: 'Erstelle ein Profil, spiel auf einem Vollbild-Feld und klettere in der Rangliste.',
    live: 'Live', profiles: 'Profile', profilesSub: 'Wähle einen Spieler oder erstelle einen neuen, um Fortschritt zu speichern.',
    saved: (n) => `${n} gespeichert`, noProfiles: 'Noch keine Profile — unten eins hinzufügen.', newUsername: 'Neuer Name',
    typeUsername: 'Namen eingeben', saveProfile: 'Profil speichern', statsMine: (name) => `${name}s Statistik`,
    statsYours: 'Deine Statistik', statsSub: 'Beste Läufe, Summen und letzte Punkte.', ready: 'Bereit', noPlayer: 'Kein Spieler',
    bestScore: 'Bestwert', gamesPlayed: 'Spiele', foodEaten: 'Futter', lastScore: 'Letzter', leaderboard: 'Rangliste',
    lbEmpty: 'Spiel eine Runde für den ersten Rekord.', startGame: '▶ Start', remove: (u) => `${u} entfernen`,
    dashboard: 'Menü', backToDash: 'Zurück zum Menü', resume: 'Weiter', pause: 'Pause', score: 'Punkte', best: 'Beste', length: 'Länge',
    pausedEyebrow: 'Pausiert', pausedTitle: 'Durchatmen', exit: 'Beenden', overEyebrow: 'Vorbei',
    overBest: 'Neuer Rekord! 🎉', overNice: 'Gut gespielt', playAgain: 'Nochmal',
    hint: 'Pfeile / WASD · Leertaste zum Pausieren · Wischen am Handy · Controller 🎮', moveUp: 'Hoch', moveDown: 'Runter', moveLeft: 'Links', moveRight: 'Rechts',
    langLabel: 'Sprache', msgCreate: 'Erstelle ein Profil zum Start.', msgEnterName: 'Zuerst einen Profilnamen eingeben.',
    msgReady: 'Profil bereit. Start drücken.', msgRemoved: 'Profil entfernt. Wähle oder erstelle eins.',
    msgLoaded: 'Profil geladen. Start drücken.', msgPick: 'Wähle oder erstelle ein Profil vor dem Start.',
    msgControls: 'Pfeile, WASD, Controller oder wischen zum Bewegen.', msgPaused: 'Pausiert.', msgBack: 'Weiter geht’s.',
    msgAgain: 'Start drücken, um erneut zu spielen.', msgGameOver: 'Vorbei.'
  },
  it: {
    eyebrow: 'Arcade Premium', heroPre: 'Snake, ', heroAccent: 'raffinato', heroPost: '.',
    heroCopy: 'Crea un profilo, entra in un tabellone a schermo intero e scala la classifica.',
    live: 'Attivo', profiles: 'Profili', profilesSub: 'Scegli un giocatore o creane uno nuovo per salvare i progressi.',
    saved: (n) => `${n} salvati`, noProfiles: 'Ancora nessun profilo — aggiungine uno sotto.', newUsername: 'Nuovo utente',
    typeUsername: 'Scrivi un nome', saveProfile: 'Salva profilo', statsMine: (name) => `Statistiche di ${name}`,
    statsYours: 'Le tue statistiche', statsSub: 'Migliori partite, totali e punteggi recenti.', ready: 'Pronto', noPlayer: 'Nessun giocatore',
    bestScore: 'Miglior punteggio', gamesPlayed: 'Partite', foodEaten: 'Cibo', lastScore: 'Ultimo', leaderboard: 'Classifica',
    lbEmpty: 'Gioca una partita per il primo record.', startGame: '▶ Inizia', remove: (u) => `Rimuovi ${u}`,
    dashboard: 'Menu', backToDash: 'Torna al menu', resume: 'Riprendi', pause: 'Pausa', score: 'Punti', best: 'Migliore', length: 'Lunghezza',
    pausedEyebrow: 'In pausa', pausedTitle: 'Respira un attimo', exit: 'Esci', overEyebrow: 'Partita finita',
    overBest: 'Nuovo record! 🎉', overNice: 'Bella partita', playAgain: 'Rigioca',
    hint: 'Frecce / WASD · Spazio per pausa · Scorri su mobile · Controller 🎮', moveUp: 'Su', moveDown: 'Giù', moveLeft: 'Sinistra', moveRight: 'Destra',
    langLabel: 'Lingua', msgCreate: 'Crea un profilo per iniziare.', msgEnterName: 'Scrivi prima un nome profilo.',
    msgReady: 'Profilo pronto. Premi Inizia.', msgRemoved: 'Profilo rimosso. Scegline o creane uno.',
    msgLoaded: 'Profilo caricato. Premi Inizia.', msgPick: 'Scegli o crea un profilo prima di iniziare.',
    msgControls: 'Frecce, WASD, controller o scorri per muoverti.', msgPaused: 'In pausa.', msgBack: 'Si riparte.',
    msgAgain: 'Premi Inizia per rigiocare.', msgGameOver: 'Partita finita.'
  },
  zh: {
    eyebrow: '精品街机', heroPre: '贪吃蛇，', heroAccent: '精致版', heroPost: '。',
    heroCopy: '创建档案，进入全屏棋盘，冲上排行榜。',
    live: '在线', profiles: '档案', profilesSub: '选择一位玩家或新建一个以保存进度。',
    saved: (n) => `已保存 ${n} 个`, noProfiles: '还没有档案 —— 在下面添加一个。', newUsername: '新用户名',
    typeUsername: '输入用户名', saveProfile: '保存档案', statsMine: (name) => `${name} 的数据`,
    statsYours: '你的数据', statsSub: '最佳战绩、总计与最近得分。', ready: '就绪', noPlayer: '无玩家',
    bestScore: '最高分', gamesPlayed: '局数', foodEaten: '食物', lastScore: '上一局', leaderboard: '排行榜',
    lbEmpty: '玩一局来创造第一个纪录。', startGame: '▶ 开始', remove: (u) => `移除 ${u}`,
    dashboard: '菜单', backToDash: '返回菜单', resume: '继续', pause: '暂停', score: '分数', best: '最佳', length: '长度',
    pausedEyebrow: '已暂停', pausedTitle: '歇口气', exit: '退出', overEyebrow: '游戏结束',
    overBest: '新纪录！🎉', overNice: '打得不错', playAgain: '再玩一次',
    hint: '方向键 / WASD · 空格暂停 · 手机滑动 · 手柄 🎮', moveUp: '上', moveDown: '下', moveLeft: '左', moveRight: '右',
    langLabel: '语言', msgCreate: '创建一个档案开始游戏。', msgEnterName: '请先输入档案名称。',
    msgReady: '档案就绪，按开始游玩。', msgRemoved: '档案已删除，请选择或新建一个。',
    msgLoaded: '档案已载入，按开始游玩。', msgPick: '开始前请先选择或创建档案。',
    msgControls: '用方向键、WASD、手柄或滑动来移动。', msgPaused: '已暂停。', msgBack: '继续。',
    msgAgain: '按开始再玩一次。', msgGameOver: '游戏结束。'
  },
  ja: {
    eyebrow: 'プレミアム アーケード', heroPre: 'スネーク、', heroAccent: '洗練', heroPost: '。',
    heroCopy: 'プロフィールを作り、全画面の盤面に飛び込んでランキングを駆け上がろう。',
    live: 'オンライン', profiles: 'プロフィール', profilesSub: 'プレイヤーを選ぶか、新規作成して進行を保存。',
    saved: (n) => `${n} 件保存`, noProfiles: 'まだプロフィールがありません — 下で追加。', newUsername: '新しい名前',
    typeUsername: '名前を入力', saveProfile: '保存', statsMine: (name) => `${name} の記録`,
    statsYours: 'あなたの記録', statsSub: 'ベスト、合計、最近のスコア。', ready: '準備OK', noPlayer: 'プレイヤーなし',
    bestScore: 'ベスト', gamesPlayed: 'プレイ回数', foodEaten: 'エサ', lastScore: '前回', leaderboard: 'ランキング',
    lbEmpty: '一度プレイして最初の記録を作ろう。', startGame: '▶ スタート', remove: (u) => `${u} を削除`,
    dashboard: 'メニュー', backToDash: 'メニューへ戻る', resume: '再開', pause: '一時停止', score: 'スコア', best: 'ベスト', length: '長さ',
    pausedEyebrow: '一時停止', pausedTitle: 'ひと息つこう', exit: '終了', overEyebrow: 'ゲームオーバー',
    overBest: '自己ベスト更新！🎉', overNice: 'ナイスプレイ', playAgain: 'もう一度',
    hint: '矢印 / WASD · スペースで一時停止 · スマホはスワイプ · ゲームパッド 🎮', moveUp: '上', moveDown: '下', moveLeft: '左', moveRight: '右',
    langLabel: '言語', msgCreate: 'プロフィールを作って始めよう。', msgEnterName: '先にプロフィール名を入力。',
    msgReady: '準備OK。スタートを押してね。', msgRemoved: 'プロフィール削除。選ぶか作成してね。',
    msgLoaded: 'プロフィール読込。スタートを押してね。', msgPick: '始める前にプロフィールを選ぶか作成。',
    msgControls: '矢印・WASD・パッド・スワイプで移動。', msgPaused: '一時停止。', msgBack: '再開。',
    msgAgain: 'スタートでもう一度。', msgGameOver: 'ゲームオーバー。'
  },
  ar: {
    eyebrow: 'أركيد بريميوم', heroPre: 'سنيك، ', heroAccent: 'بأناقة', heroPost: '.',
    heroCopy: 'أنشئ ملفًا، ادخل لوحة بملء الشاشة، وتسلّق لوحة الصدارة.',
    live: 'مباشر', profiles: 'الملفات', profilesSub: 'اختر لاعبًا أو أنشئ واحدًا جديدًا لحفظ التقدّم.',
    saved: (n) => `${n} محفوظ`, noProfiles: 'لا ملفات بعد — أضف واحدًا بالأسفل.', newUsername: 'اسم جديد',
    typeUsername: 'اكتب اسمًا', saveProfile: 'حفظ الملف', statsMine: (name) => `إحصائيات ${name}`,
    statsYours: 'إحصائياتك', statsSub: 'أفضل الجولات والمجاميع وآخر النقاط.', ready: 'جاهز', noPlayer: 'لا لاعب',
    bestScore: 'أفضل نتيجة', gamesPlayed: 'الجولات', foodEaten: 'الطعام', lastScore: 'الأخيرة', leaderboard: 'المتصدرون',
    lbEmpty: 'العب جولة لتسجيل أول رقم قياسي.', startGame: '▶ ابدأ', remove: (u) => `أزل ${u}`,
    dashboard: 'القائمة', backToDash: 'العودة للقائمة', resume: 'متابعة', pause: 'إيقاف', score: 'النقاط', best: 'الأفضل', length: 'الطول',
    pausedEyebrow: 'متوقّف', pausedTitle: 'خذ نفسًا', exit: 'خروج', overEyebrow: 'انتهت الجولة',
    overBest: 'رقم قياسي جديد! 🎉', overNice: 'جولة رائعة', playAgain: 'العب مجددًا',
    hint: 'الأسهم / WASD · مسافة للإيقاف · اسحب على الجوال · يد تحكم 🎮', moveUp: 'أعلى', moveDown: 'أسفل', moveLeft: 'يسار', moveRight: 'يمين',
    langLabel: 'اللغة', msgCreate: 'أنشئ ملفًا لتبدأ.', msgEnterName: 'اكتب اسم الملف أولًا.',
    msgReady: 'الملف جاهز. اضغط ابدأ للعب.', msgRemoved: 'حُذف الملف. اختر أو أنشئ واحدًا.',
    msgLoaded: 'حُمّل الملف. اضغط ابدأ للعب.', msgPick: 'اختر أو أنشئ ملفًا قبل البدء.',
    msgControls: 'استخدم الأسهم أو WASD أو يد التحكم أو السحب للحركة.', msgPaused: 'متوقّف.', msgBack: 'عدنا.',
    msgAgain: 'اضغط ابدأ للعب مجددًا.', msgGameOver: 'انتهت الجولة.'
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
