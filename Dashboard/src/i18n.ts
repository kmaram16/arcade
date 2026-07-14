// First-visit language chooser + dashboard localization.
//
// The launcher greets a worldwide audience, so on the very first visit it shows
// a full-screen language picker; the choice is remembered in localStorage and
// can be changed anytime from the 🌐 button in the header.
//
// Adding a language = add its code to `Lang`, one entry to `LANGS`, one block to
// `STRINGS`, and one line per game to `TAGLINES`. Everything else adapts.

export type Lang = 'es' | 'en' | 'pt' | 'fr' | 'de' | 'it' | 'zh' | 'ja' | 'ar';

/** Languages written right-to-left (drives document.dir). */
export const RTL_LANGS: Lang[] = ['ar'];

/**
 * Languages offered in the picker. Each shows a colored badge instead of a flag
 * emoji: flags don't render on Windows, but a gradient badge with the language's
 * code/initial looks identical everywhere. `tint` is the badge gradient.
 */
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

const STORAGE_KEY = 'arcade.lang';

/** Every fixed (non-game) string shown on the dashboard, per language. */
export type Strings = {
  eyebrow: string;
  titlePre: string;
  titleAccent: string;
  titlePost: string;
  heroCopy: string;
  live: (n: number) => string;
  search: string;
  filterAll: string;
  filterReady: string;
  filterSoon: string;
  play: string;
  open: string;
  comingSoon: string;
  empty: (q: string) => string;
  statusCopy: string;
  appsPre: string;
  appsAccent: string;
  appsPost: string;
  appsCopy: string;
  diffEasy: string;
  diffMedium: string;
  diffHard: string;
  streaming: string;
  app: string;
  ariaOpen: (name: string) => string;
  ariaSoon: (name: string) => string;
  pickerTitle: string;
  pickerSubtitle: string;
  langLabel: string;
};

export const STRINGS: Record<Lang, Strings> = {
  es: {
    eyebrow: 'Arcade Premium',
    titlePre: 'El ',
    titleAccent: 'arcade',
    titlePost: '.',
    heroCopy: 'Minijuegos y apps de streaming, un solo menú. Elige una tarjeta y juega… o maratónea.',
    live: (n) => `${n} en directo`,
    search: 'Busca juegos y apps',
    filterAll: 'Todos',
    filterReady: 'Jugables',
    filterSoon: 'Próximamente',
    play: 'Jugar ▸',
    open: 'Abrir ▸',
    comingSoon: 'Próximamente',
    empty: (q) => `Nada coincide con “${q}”.`,
    statusCopy: 'Toca cualquier tarjeta activa para abrirla en una pestaña nueva. Añadimos juegos a menudo.',
    appsPre: 'Apps de ',
    appsAccent: 'streaming',
    appsPost: '',
    appsCopy: 'Estilo Netflix: navega el catálogo y crea tus propias pelis dentro de cada app.',
    diffEasy: 'Fácil',
    diffMedium: 'Media',
    diffHard: 'Difícil',
    streaming: 'Streaming',
    app: 'App',
    ariaOpen: (name) => `Abrir ${name}`,
    ariaSoon: (name) => `${name} — próximamente`,
    pickerTitle: 'Elige tu idioma',
    pickerSubtitle: 'Puedes cambiarlo cuando quieras desde el botón 🌐.',
    langLabel: 'Idioma'
  },
  en: {
    eyebrow: 'Premium Arcade',
    titlePre: 'The ',
    titleAccent: 'arcade',
    titlePost: '.',
    heroCopy: 'Mini-games and streaming apps, one launcher. Pick a tile and play — or binge.',
    live: (n) => `${n} live`,
    search: 'Search games & apps',
    filterAll: 'All',
    filterReady: 'Playable',
    filterSoon: 'Coming soon',
    play: 'Play ▸',
    open: 'Open ▸',
    comingSoon: 'Coming soon',
    empty: (q) => `No tiles match “${q}”.`,
    statusCopy: 'Tap any live tile to open it in a new tab. New games are added all the time.',
    appsPre: '',
    appsAccent: 'Streaming',
    appsPost: ' apps',
    appsCopy: 'Netflix-style — browse the catalog and create your own movies inside each app.',
    diffEasy: 'Easy',
    diffMedium: 'Medium',
    diffHard: 'Hard',
    streaming: 'Streaming',
    app: 'App',
    ariaOpen: (name) => `Open ${name}`,
    ariaSoon: (name) => `${name} — coming soon`,
    pickerTitle: 'Choose your language',
    pickerSubtitle: 'You can change it anytime from the 🌐 button.',
    langLabel: 'Language'
  },
  pt: {
    eyebrow: 'Arcade Premium',
    titlePre: 'O ',
    titleAccent: 'arcade',
    titlePost: '.',
    heroCopy: 'Minijogos e apps de streaming, um só menu. Escolha um bloco e jogue… ou maratone.',
    live: (n) => `${n} no ar`,
    search: 'Buscar jogos e apps',
    filterAll: 'Todos',
    filterReady: 'Jogáveis',
    filterSoon: 'Em breve',
    play: 'Jogar ▸',
    open: 'Abrir ▸',
    comingSoon: 'Em breve',
    empty: (q) => `Nada corresponde a “${q}”.`,
    statusCopy: 'Toque em qualquer bloco ativo para abri-lo em uma nova aba. Novos jogos chegam sempre.',
    appsPre: 'Apps de ',
    appsAccent: 'streaming',
    appsPost: '',
    appsCopy: 'Estilo Netflix: navegue pelo catálogo e crie seus próprios filmes dentro de cada app.',
    diffEasy: 'Fácil',
    diffMedium: 'Média',
    diffHard: 'Difícil',
    streaming: 'Streaming',
    app: 'App',
    ariaOpen: (name) => `Abrir ${name}`,
    ariaSoon: (name) => `${name} — em breve`,
    pickerTitle: 'Escolha o seu idioma',
    pickerSubtitle: 'Você pode mudar quando quiser no botão 🌐.',
    langLabel: 'Idioma'
  },
  fr: {
    eyebrow: 'Arcade Premium',
    titlePre: 'L’',
    titleAccent: 'arcade',
    titlePost: '.',
    heroCopy: 'Des mini-jeux et des apps de streaming, un seul menu. Choisis une tuile et joue… ou binge.',
    live: (n) => `${n} en ligne`,
    search: 'Rechercher jeux et apps',
    filterAll: 'Tous',
    filterReady: 'Jouables',
    filterSoon: 'Bientôt',
    play: 'Jouer ▸',
    open: 'Ouvrir ▸',
    comingSoon: 'Bientôt',
    empty: (q) => `Aucun résultat pour « ${q} ».`,
    statusCopy: 'Touche une tuile active pour l’ouvrir dans un nouvel onglet. De nouveaux jeux arrivent souvent.',
    appsPre: 'Apps de ',
    appsAccent: 'streaming',
    appsPost: '',
    appsCopy: 'Façon Netflix : parcours le catalogue et crée tes propres films dans chaque app.',
    diffEasy: 'Facile',
    diffMedium: 'Moyen',
    diffHard: 'Difficile',
    streaming: 'Streaming',
    app: 'App',
    ariaOpen: (name) => `Ouvrir ${name}`,
    ariaSoon: (name) => `${name} — bientôt`,
    pickerTitle: 'Choisis ta langue',
    pickerSubtitle: 'Tu peux la changer à tout moment avec le bouton 🌐.',
    langLabel: 'Langue'
  },
  de: {
    eyebrow: 'Premium-Arcade',
    titlePre: 'Die ',
    titleAccent: 'Arcade',
    titlePost: '.',
    heroCopy: 'Mini-Spiele und Streaming-Apps in einem Menü. Kachel auswählen und spielen … oder bingen.',
    live: (n) => `${n} live`,
    search: 'Spiele & Apps suchen',
    filterAll: 'Alle',
    filterReady: 'Spielbar',
    filterSoon: 'Bald',
    play: 'Spielen ▸',
    open: 'Öffnen ▸',
    comingSoon: 'Bald',
    empty: (q) => `Nichts passt zu „${q}“.`,
    statusCopy: 'Tippe auf eine aktive Kachel, um sie in einem neuen Tab zu öffnen. Neue Spiele kommen ständig dazu.',
    appsPre: '',
    appsAccent: 'Streaming',
    appsPost: '-Apps',
    appsCopy: 'Netflix-Style: Stöbere im Katalog und erstelle in jeder App deine eigenen Filme.',
    diffEasy: 'Leicht',
    diffMedium: 'Mittel',
    diffHard: 'Schwer',
    streaming: 'Streaming',
    app: 'App',
    ariaOpen: (name) => `${name} öffnen`,
    ariaSoon: (name) => `${name} — bald`,
    pickerTitle: 'Wähle deine Sprache',
    pickerSubtitle: 'Du kannst sie jederzeit über die 🌐-Schaltfläche ändern.',
    langLabel: 'Sprache'
  },
  it: {
    eyebrow: 'Arcade Premium',
    titlePre: 'L’',
    titleAccent: 'arcade',
    titlePost: '.',
    heroCopy: 'Mini-giochi e app di streaming, un unico menu. Scegli una tessera e gioca… o guarda tutto.',
    live: (n) => `${n} attivi`,
    search: 'Cerca giochi e app',
    filterAll: 'Tutti',
    filterReady: 'Giocabili',
    filterSoon: 'In arrivo',
    play: 'Gioca ▸',
    open: 'Apri ▸',
    comingSoon: 'In arrivo',
    empty: (q) => `Nessun risultato per “${q}”.`,
    statusCopy: 'Tocca una tessera attiva per aprirla in una nuova scheda. Nuovi giochi in arrivo di continuo.',
    appsPre: 'App di ',
    appsAccent: 'streaming',
    appsPost: '',
    appsCopy: 'Stile Netflix: sfoglia il catalogo e crea i tuoi film dentro ogni app.',
    diffEasy: 'Facile',
    diffMedium: 'Media',
    diffHard: 'Difficile',
    streaming: 'Streaming',
    app: 'App',
    ariaOpen: (name) => `Apri ${name}`,
    ariaSoon: (name) => `${name} — in arrivo`,
    pickerTitle: 'Scegli la tua lingua',
    pickerSubtitle: 'Puoi cambiarla quando vuoi dal pulsante 🌐.',
    langLabel: 'Lingua'
  },
  zh: {
    eyebrow: '精品游戏厅',
    titlePre: '',
    titleAccent: '游戏厅',
    titlePost: '。',
    heroCopy: '小游戏和流媒体应用，一个入口。选一个方块开玩，或者一路刷下去。',
    live: (n) => `${n} 个在线`,
    search: '搜索游戏和应用',
    filterAll: '全部',
    filterReady: '可玩',
    filterSoon: '即将上线',
    play: '开玩 ▸',
    open: '打开 ▸',
    comingSoon: '即将上线',
    empty: (q) => `没有匹配“${q}”的内容。`,
    statusCopy: '点按任意在线方块，在新标签页打开。我们会经常上线新游戏。',
    appsPre: '',
    appsAccent: '流媒体',
    appsPost: '应用',
    appsCopy: 'Netflix 风格：浏览片库，还能在每个应用里创作你自己的电影。',
    diffEasy: '简单',
    diffMedium: '中等',
    diffHard: '困难',
    streaming: '流媒体',
    app: '应用',
    ariaOpen: (name) => `打开 ${name}`,
    ariaSoon: (name) => `${name} — 即将上线`,
    pickerTitle: '选择你的语言',
    pickerSubtitle: '你随时可以通过 🌐 按钮更改。',
    langLabel: '语言'
  },
  ja: {
    eyebrow: 'プレミアム アーケード',
    titlePre: '',
    titleAccent: 'アーケード',
    titlePost: '。',
    heroCopy: 'ミニゲームとストリーミングアプリを一つに。タイルを選んで遊ぶ、または一気見。',
    live: (n) => `${n} 本オンライン`,
    search: 'ゲームやアプリを検索',
    filterAll: 'すべて',
    filterReady: 'プレイ可能',
    filterSoon: '近日公開',
    play: 'プレイ ▸',
    open: '開く ▸',
    comingSoon: '近日公開',
    empty: (q) => `「${q}」に一致するものはありません。`,
    statusCopy: '稼働中のタイルをタップすると新しいタブで開きます。新作は続々追加中。',
    appsPre: '',
    appsAccent: 'ストリーミング',
    appsPost: 'アプリ',
    appsCopy: 'Netflix 風 — カタログを見て、各アプリで自分だけの映画も作れます。',
    diffEasy: 'やさしい',
    diffMedium: 'ふつう',
    diffHard: 'むずかしい',
    streaming: 'ストリーミング',
    app: 'アプリ',
    ariaOpen: (name) => `${name} を開く`,
    ariaSoon: (name) => `${name} — 近日公開`,
    pickerTitle: '言語を選んでください',
    pickerSubtitle: '🌐 ボタンからいつでも変更できます。',
    langLabel: '言語'
  },
  ar: {
    eyebrow: 'أركيد بريميوم',
    titlePre: '',
    titleAccent: 'الأركيد',
    titlePost: '.',
    heroCopy: 'ألعاب مصغّرة وتطبيقات بث في مكان واحد. اختر مربّعًا والعب… أو شاهد بلا توقف.',
    live: (n) => `${n} متاح`,
    search: 'ابحث عن الألعاب والتطبيقات',
    filterAll: 'الكل',
    filterReady: 'قابلة للعب',
    filterSoon: 'قريبًا',
    play: 'العب ▸',
    open: 'افتح ▸',
    comingSoon: 'قريبًا',
    empty: (q) => `لا نتائج مطابقة لـ ”${q}“.`,
    statusCopy: 'اضغط أي مربّع متاح لفتحه في تبويب جديد. نضيف ألعابًا جديدة باستمرار.',
    appsPre: 'تطبيقات ',
    appsAccent: 'البث',
    appsPost: '',
    appsCopy: 'بأسلوب نتفليكس: تصفّح الكتالوج وأنشئ أفلامك الخاصة داخل كل تطبيق.',
    diffEasy: 'سهل',
    diffMedium: 'متوسط',
    diffHard: 'صعب',
    streaming: 'بث',
    app: 'تطبيق',
    ariaOpen: (name) => `افتح ${name}`,
    ariaSoon: (name) => `${name} — قريبًا`,
    pickerTitle: 'اختر لغتك',
    pickerSubtitle: 'يمكنك تغييرها في أي وقت من زر 🌐.',
    langLabel: 'اللغة'
  }
};

/**
 * Per-game taglines, keyed by game id. The dashboard falls back to the game's
 * default tagline (games.json) for any id/language missing here.
 */
export const TAGLINES: Record<string, Record<Lang, string>> = {
  snake: {
    es: 'Haz crecer la serpiente y esquiva tu cola.',
    en: 'Grow the snake, dodge your tail.',
    pt: 'Faça a cobra crescer e desvie da cauda.',
    fr: 'Fais grandir le serpent et évite ta queue.',
    de: 'Lass die Schlange wachsen, weiche deinem Schwanz aus.',
    it: 'Fai crescere il serpente ed evita la coda.',
    zh: '让蛇变长，别咬到自己的尾巴。',
    ja: 'ヘビを伸ばして、自分の尻尾を避けよう。',
    ar: 'اجعل الأفعى تكبر وتفادَ ذيلك.'
  },
  tetris: {
    es: 'Apila bloques que caen y elimina líneas.',
    en: 'Stack falling blocks, clear lines.',
    pt: 'Empilhe blocos que caem e limpe linhas.',
    fr: 'Empile les blocs qui tombent et fais des lignes.',
    de: 'Staple fallende Blöcke, räume Reihen ab.',
    it: 'Impila i blocchi che cadono e completa le righe.',
    zh: '堆叠下落的方块，消除整行。',
    ja: '落ちてくるブロックを積んでラインを消そう。',
    ar: 'كدّس القطع المتساقطة وامسح الصفوف.'
  },
  breakout: {
    es: 'Rebota la bola y rompe los ladrillos.',
    en: 'Bounce the ball, smash the bricks.',
    pt: 'Rebata a bola e quebre os tijolos.',
    fr: 'Fais rebondir la balle et casse les briques.',
    de: 'Lass den Ball abprallen und zerschlage die Steine.',
    it: 'Fai rimbalzare la palla e distruggi i mattoni.',
    zh: '弹起小球，打碎砖块。',
    ja: 'ボールを跳ね返してブロックを壊そう。',
    ar: 'اجعل الكرة ترتد وحطّم الطوب.'
  },
  pong: {
    es: 'Duelo clásico de palas contra la máquina.',
    en: 'Classic paddle duel vs the computer.',
    pt: 'Duelo clássico de raquetes contra o computador.',
    fr: 'Duel de raquettes classique contre l’ordinateur.',
    de: 'Klassisches Schläger-Duell gegen den Computer.',
    it: 'Classico duello di racchette contro il computer.',
    zh: '经典球拍对决，挑战电脑。',
    ja: 'コンピュータとの定番パドル対決。',
    ar: 'مبارزة مضارب كلاسيكية ضد الحاسوب.'
  },
  flappy: {
    es: 'Un toque para aletear entre los huecos.',
    en: 'One tap to flap through the gaps.',
    pt: 'Um toque para voar pelos vãos.',
    fr: 'Un tap pour voler entre les tuyaux.',
    de: 'Ein Tipp, um durch die Lücken zu flattern.',
    it: 'Un tocco per volare tra le fessure.',
    zh: '一点一拍，穿过缝隙。',
    ja: 'タップで羽ばたき、すき間を抜けよう。',
    ar: 'نقرة واحدة لتعبر بين الفجوات.'
  },
  '2048': {
    es: 'Desliza y combina fichas hasta llegar a 2048.',
    en: 'Swipe to merge tiles up to 2048.',
    pt: 'Deslize e junte peças até chegar a 2048.',
    fr: 'Glisse et fusionne les tuiles jusqu’à 2048.',
    de: 'Wische und kombiniere Kacheln bis 2048.',
    it: 'Scorri e unisci le tessere fino a 2048.',
    zh: '滑动合并方块，冲向 2048。',
    ja: 'スワイプしてタイルを合体、2048 を目指そう。',
    ar: 'اسحب لدمج المربّعات حتى 2048.'
  },
  minesweeper: {
    es: 'Despeja el campo y marca las minas.',
    en: 'Clear the field, flag the mines.',
    pt: 'Limpe o campo e marque as minas.',
    fr: 'Déblaie le terrain et marque les mines.',
    de: 'Räume das Feld und markiere die Minen.',
    it: 'Libera il campo e segna le mine.',
    zh: '清空雷区，标记地雷。',
    ja: 'マスを開いて地雷に旗を立てよう。',
    ar: 'نظّف الحقل وضع علامات على الألغام.'
  },
  memory: {
    es: 'Voltea cartas y encuentra las parejas.',
    en: 'Flip cards, find the matching pairs.',
    pt: 'Vire as cartas e ache os pares.',
    fr: 'Retourne les cartes et trouve les paires.',
    de: 'Karten umdrehen, passende Paare finden.',
    it: 'Gira le carte e trova le coppie.',
    zh: '翻牌配对，找出相同的两张。',
    ja: 'カードをめくって同じ絵柄を揃えよう。',
    ar: 'اقلب البطاقات وجد الأزواج المتطابقة.'
  },
  whack: {
    es: 'Golpea los topos antes de que se escondan.',
    en: 'Tap the moles before they hide.',
    pt: 'Acerte as toupeiras antes que se escondam.',
    fr: 'Tape les taupes avant qu’elles se cachent.',
    de: 'Triff die Maulwürfe, bevor sie verschwinden.',
    it: 'Colpisci le talpe prima che si nascondano.',
    zh: '在鼹鼠躲起来前敲中它们。',
    ja: 'モグラが隠れる前に叩こう。',
    ar: 'اضرب الخُلد قبل أن يختبئ.'
  },
  invaders: {
    es: 'Derriba las oleadas que descienden.',
    en: 'Shoot down the descending waves.',
    pt: 'Derrube as ondas que descem.',
    fr: 'Abats les vagues qui descendent.',
    de: 'Schieße die herabsinkenden Wellen ab.',
    it: 'Abbatti le ondate che scendono.',
    zh: '击落一波波来袭的敌人。',
    ja: '迫りくる敵の波を撃ち落とせ。',
    ar: 'أسقط الموجات المتقدّمة.'
  },
  simon: {
    es: 'Repite la secuencia… o juega a Simón Dice.',
    en: 'Repeat the sequence — or play Simon Says.',
    pt: 'Repita a sequência… ou jogue Simão Manda.',
    fr: 'Répète la séquence… ou joue à Jacques a dit.',
    de: 'Wiederhole die Folge – oder spiel Simon Says.',
    it: 'Ripeti la sequenza… o gioca a Simon comanda.',
    zh: '重复这段序列，或玩“西蒙说”。',
    ja: '順番を再現、または「サイモン・セズ」で遊ぼう。',
    ar: 'كرّر التسلسل… أو العب «سيمون يقول».'
  },
  asteroids: {
    es: 'Gira, impulsa y destroza las rocas.',
    en: 'Rotate, thrust, blast the rocks.',
    pt: 'Gire, acelere e exploda as rochas.',
    fr: 'Tourne, propulse et pulvérise les rochers.',
    de: 'Drehen, beschleunigen, Felsen zersprengen.',
    it: 'Ruota, spingi e distruggi le rocce.',
    zh: '旋转、推进，炸碎陨石。',
    ja: '回転して加速、岩を撃ち砕こう。',
    ar: 'دُر وادفع وفجّر الصخور.'
  },
  avengers: {
    es: 'Elige un héroe, asalta Titán y vence a Thanos.',
    en: 'Pick a hero, storm Titan, take down Thanos.',
    pt: 'Escolha um herói, invada Titã e derrote Thanos.',
    fr: 'Choisis un héros, prends Titan et bats Thanos.',
    de: 'Wähle einen Helden, stürme Titan, besiege Thanos.',
    it: 'Scegli un eroe, assalta Titan e sconfiggi Thanos.',
    zh: '选择英雄，突袭泰坦，击败灭霸。',
    ja: 'ヒーローを選び、タイタンへ突入、サノスを倒せ。',
    ar: 'اختر بطلاً، اقتحم تيتان، وأسقط ثانوس.'
  },
  fifa10: {
    es: 'Regatea, dispara y bate al portero para ganar.',
    en: 'Dribble, shoot, beat the keeper to win.',
    pt: 'Drible, chute e vença o goleiro para ganhar.',
    fr: 'Dribble, tire et bats le gardien pour gagner.',
    de: 'Dribble, schieße und überwinde den Torwart.',
    it: 'Dribbla, tira e batti il portiere per vincere.',
    zh: '带球、射门，击败门将赢球。',
    ja: 'ドリブルしてシュート、キーパーを破って勝とう。',
    ar: 'راوغ وسدّد وتغلّب على الحارس لتفوز.'
  },
  rivals2: {
    es: 'Crea un avatar, desbloquea armas y reta al Rival Bot.',
    en: 'Build an avatar, unlock guns, duel the Rival Bot.',
    pt: 'Crie um avatar, desbloqueie armas e duele o Rival Bot.',
    fr: 'Crée un avatar, débloque des armes, affronte le Rival Bot.',
    de: 'Bau einen Avatar, schalte Waffen frei, duelliere den Rival Bot.',
    it: 'Crea un avatar, sblocca armi e sfida il Rival Bot.',
    zh: '打造角色，解锁枪械，对决对手机器人。',
    ja: 'アバターを作り、銃をアンロックして、ライバルボットと決闘。',
    ar: 'اصنع شخصيتك، افتح الأسلحة، وبارز روبوت الخصم.'
  },
  minecraft: {
    es: 'Mina, construye, vuela TNT y duerme hasta el alba.',
    en: 'Mine, build, blow up TNT, sleep till dawn.',
    pt: 'Minere, construa, exploda TNT e durma até o amanhecer.',
    fr: 'Mine, construis, fais sauter la TNT, dors jusqu’à l’aube.',
    de: 'Grabe, baue, sprenge TNT und schlaf bis zum Morgen.',
    it: 'Scava, costruisci, fai esplodere il TNT e dormi fino all’alba.',
    zh: '挖矿、建造、引爆 TNT，睡到天亮。',
    ja: '採掘して建築、TNT を爆破して、朝まで眠ろう。',
    ar: 'نقّب وابنِ وفجّر الـ TNT ونم حتى الفجر.'
  },
  crash: {
    es: 'Gira, salta y rompe cajas. ¡Atrapa a Norberto!',
    en: 'Spin, jump and smash crates. Catch Norberto!',
    pt: 'Gire, pule e quebre caixas. Pegue o Norberto!',
    fr: 'Tourne, saute et casse les caisses. Attrape Norberto !',
    de: 'Dreh dich, spring und zerschlage Kisten. Schnapp dir Norberto!',
    it: 'Gira, salta e rompi le casse. Acchiappa Norberto!',
    zh: '旋转、跳跃、砸箱子，抓住诺韦托！',
    ja: '回って跳んで木箱を壊せ。ノルベルトを捕まえろ！',
    ar: 'دُر واقفز وحطّم الصناديق. أمسك نوربرتو!'
  },
  netflix: {
    es: 'Cine y series sin parar. Crea tus propias pelis.',
    en: 'Movies and series non-stop. Create your own films.',
    pt: 'Filmes e séries sem parar. Crie seus próprios filmes.',
    fr: 'Films et séries sans fin. Crée tes propres films.',
    de: 'Filme und Serien ohne Ende. Erstelle deine eigenen Filme.',
    it: 'Film e serie senza sosta. Crea i tuoi film.',
    zh: '电影和剧集不停歇。还能创作你自己的影片。',
    ja: '映画もドラマも止まらない。自分の映画も作れる。',
    ar: 'أفلام ومسلسلات بلا توقف. واصنع أفلامك الخاصة.'
  },
  disney: {
    es: 'Magia, Marvel y Star Wars. Y crea tus pelis.',
    en: 'Magic, Marvel and Star Wars. Plus make your own films.',
    pt: 'Magia, Marvel e Star Wars. E crie seus filmes.',
    fr: 'Magie, Marvel et Star Wars. Et crée tes films.',
    de: 'Magie, Marvel und Star Wars. Und mach deine Filme.',
    it: 'Magia, Marvel e Star Wars. E crea i tuoi film.',
    zh: '魔法、漫威与星球大战。还能创作你的影片。',
    ja: 'マジック、マーベル、スター・ウォーズ。自分の映画も作れる。',
    ar: 'سحر ومارفل وستار وورز. واصنع أفلامك أيضًا.'
  },
  prime: {
    es: 'Series y peliculones. Crea tus propias pelis.',
    en: 'Great series and blockbusters. Create your own films.',
    pt: 'Séries e grandes filmes. Crie seus próprios filmes.',
    fr: 'Des séries et de gros films. Crée tes propres films.',
    de: 'Serien und Blockbuster. Erstelle deine eigenen Filme.',
    it: 'Serie e grandi film. Crea i tuoi film.',
    zh: '精彩剧集与大片。还能创作你自己的影片。',
    ja: '名作ドラマや大作映画。自分の映画も作れる。',
    ar: 'مسلسلات رائعة وأفلام ضخمة. واصنع أفلامك الخاصة.'
  },
  hbo: {
    es: 'Las series de culto. Y crea tus propias pelis.',
    en: 'The cult series. Plus create your own films.',
    pt: 'As séries cult. E crie seus próprios filmes.',
    fr: 'Les séries cultes. Et crée tes propres films.',
    de: 'Die Kultserien. Und erstelle deine eigenen Filme.',
    it: 'Le serie di culto. E crea i tuoi film.',
    zh: '经典邪典剧集。还能创作你自己的影片。',
    ja: 'カルト的な名作ドラマ。自分の映画も作れる。',
    ar: 'المسلسلات الأيقونية. واصنع أفلامك الخاصة.'
  },
  movistar: {
    es: 'Cine, series y fútbol. Crea tus propias pelis.',
    en: 'Movies, series and football. Create your own films.',
    pt: 'Filmes, séries e futebol. Crie seus próprios filmes.',
    fr: 'Films, séries et foot. Crée tes propres films.',
    de: 'Filme, Serien und Fußball. Erstelle deine eigenen Filme.',
    it: 'Film, serie e calcio. Crea i tuoi film.',
    zh: '电影、剧集和足球。还能创作你自己的影片。',
    ja: '映画、ドラマ、サッカー。自分の映画も作れる。',
    ar: 'أفلام ومسلسلات وكرة قدم. واصنع أفلامك الخاصة.'
  }
};

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

/** A `?lang=xx` override in the URL, if it names a supported language. Lets you
 *  share a link that opens the arcade already in a given language. */
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

/** The stored language choice, or null on a first visit. */
export function storedLang(): Lang | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v && LANGS.some((l) => l.code === v) ? (v as Lang) : null;
  } catch {
    return null;
  }
}

/** Persist the chosen language so the picker never reappears unasked. */
export function saveLang(lang: Lang): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* storage disabled — the choice just won't persist */
  }
}

/** Localized tagline for a game, falling back to its default JSON tagline. */
export function taglineFor(id: string, fallback: string, lang: Lang): string {
  return TAGLINES[id]?.[lang] ?? fallback;
}

/** Localized difficulty / category label shown on each tile's meta tag. */
export function metaLabel(
  game: { difficulty?: string; category?: string },
  s: Strings
): string {
  switch (game.difficulty) {
    case 'Easy':
      return s.diffEasy;
    case 'Medium':
      return s.diffMedium;
    case 'Hard':
      return s.diffHard;
  }
  if (game.category === 'Streaming') return s.streaming;
  return game.category ?? s.app;
}
