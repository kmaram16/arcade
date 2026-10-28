// Consola KMM — large multilingual UI (console shell only; games keep their own
// languages). English (en) holds EVERY key and is the fallback for any missing
// string, so the UI is never blank. Spanish is complete too. Other languages
// translate the short, frequently-seen labels and fall back to English for the
// longer paragraphs. RTL languages are flagged for dir="rtl".
(function () {
  // [code, native label, romanized search alias, rtl?]
  var LANGS = [
    ['es', 'Español', 'spanish espanol'], ['en', 'English', 'english'],
    ['pt', 'Português', 'portuguese'], ['fr', 'Français', 'french francais'],
    ['de', 'Deutsch', 'german'], ['it', 'Italiano', 'italian'],
    ['nl', 'Nederlands', 'dutch'], ['ca', 'Català', 'catalan'],
    ['gl', 'Galego', 'galician'], ['eu', 'Euskara', 'basque'],
    ['ro', 'Română', 'romanian'], ['pl', 'Polski', 'polish'],
    ['cs', 'Čeština', 'czech'], ['uk', 'Українська', 'ukrainian'],
    ['ru', 'Русский', 'russian'], ['el', 'Ελληνικά', 'greek'],
    ['tr', 'Türkçe', 'turkish'], ['ar', 'العربية', 'arabic', true],
    ['he', 'עברית', 'hebrew', true], ['fa', 'فارسی', 'persian farsi', true],
    ['ur', 'اردو', 'urdu', true], ['hi', 'हिन्दी', 'hindi'],
    ['bn', 'বাংলা', 'bengali bangla'], ['ta', 'தமிழ்', 'tamil'],
    ['zh', '中文（简体）', 'chinese simplified mandarin'], ['zh-TW', '中文（繁體）', 'chinese traditional'],
    ['ja', '日本語', 'japanese'], ['ko', '한국어', 'korean'],
    ['vi', 'Tiếng Việt', 'vietnamese'], ['th', 'ไทย', 'thai'],
    ['id', 'Indonesia', 'indonesian'], ['ms', 'Melayu', 'malay'],
    ['tl', 'Filipino', 'filipino tagalog'], ['sv', 'Svenska', 'swedish'],
    ['no', 'Norsk', 'norwegian'], ['da', 'Dansk', 'danish'],
    ['fi', 'Suomi', 'finnish'], ['hu', 'Magyar', 'hungarian'],
    ['sw', 'Kiswahili', 'swahili'], ['af', 'Afrikaans', 'afrikaans'],
    ['sq', 'Shqip', 'albanian'], ['am', 'አማርኛ', 'amharic'],
    ['hy', 'Հայերեն', 'armenian'], ['az', 'Azərbaycan', 'azerbaijani azeri'],
    ['be', 'Беларуская', 'belarusian'], ['bg', 'Български', 'bulgarian'],
    ['my', 'မြန်မာ', 'burmese myanmar'], ['hr', 'Hrvatski', 'croatian'],
    ['et', 'Eesti', 'estonian'], ['ka', 'ქართული', 'georgian'],
    ['gu', 'ગુજરાતી', 'gujarati'], ['ha', 'Hausa', 'hausa'],
    ['is', 'Íslenska', 'icelandic'], ['ig', 'Igbo', 'igbo'],
    ['ga', 'Gaeilge', 'irish gaelic'], ['kn', 'ಕನ್ನಡ', 'kannada'],
    ['kk', 'Қазақ', 'kazakh'], ['km', 'ខ្មែរ', 'khmer cambodian'],
    ['ku', 'Kurdî', 'kurdish'], ['lo', 'ລາວ', 'lao'],
    ['lv', 'Latviešu', 'latvian'], ['lt', 'Lietuvių', 'lithuanian'],
    ['mk', 'Македонски', 'macedonian'], ['ml', 'മലയാളം', 'malayalam'],
    ['mr', 'मराठी', 'marathi'], ['mn', 'Монгол', 'mongolian'],
    ['ne', 'नेपाली', 'nepali'], ['ps', 'پښتو', 'pashto', true],
    ['pa', 'ਪੰਜਾਬੀ', 'punjabi'], ['sr', 'Српски', 'serbian'],
    ['si', 'සිංහල', 'sinhala sinhalese'], ['sk', 'Slovenčina', 'slovak'],
    ['sl', 'Slovenščina', 'slovenian slovene'], ['so', 'Soomaali', 'somali'],
    ['su', 'Basa Sunda', 'sundanese'], ['te', 'తెలుగు', 'telugu'],
    ['uz', 'Oʻzbek', 'uzbek'], ['cy', 'Cymraeg', 'welsh'],
    ['yo', 'Yorùbá', 'yoruba'], ['zu', 'isiZulu', 'zulu'],
    ['sd', 'سنڌي', 'sindhi', true], ['ug', 'ئۇيغۇرچە', 'uyghur uighur', true],
    ['ky', 'Кыргызча', 'kyrgyz'], ['tg', 'Тоҷикӣ', 'tajik'],
    ['tk', 'Türkmen', 'turkmen'], ['lb', 'Lëtzebuergesch', 'luxembourgish'],
    ['mt', 'Malti', 'maltese'], ['bs', 'Bosanski', 'bosnian'],
    ['ht', 'Kreyòl', 'haitian creole'], ['jv', 'Basa Jawa', 'javanese'],
    ['ceb', 'Cebuano', 'cebuano'], ['ny', 'Chichewa', 'chichewa nyanja'],
    ['st', 'Sesotho', 'sesotho sotho'], ['sn', 'chiShona', 'shona'],
    ['rw', 'Kinyarwanda', 'kinyarwanda'], ['mg', 'Malagasy', 'malagasy'],
    ['sm', 'Gagana Samoa', 'samoan'], ['mi', 'Māori', 'maori'],
    ['haw', 'ʻŌlelo Hawaiʻi', 'hawaiian'], ['la', 'Latina', 'latin']
  ].map(function (a) { return { code: a[0], label: a[1], q: a[2] || '', rtl: !!a[3] }; });

  var EN = {
    bootTips: ['Powering on…', 'Warming up the screen…', 'Looking for controllers…', 'Ready to play!'],
    idleSub: 'Pick a game below ▾',
    camOn: '📷 Camera', camOff: '📷 Camera off',
    install: 'Install app',
    titleMine: 'My KMM games', titleFree: 'More free games',
    freeNote: 'Free, open-source games made by other people. They open inside the TV.',
    search: 'Search games…', all: 'All', home: 'MENU', play: 'Play', open: 'Open',
    padConnected: 'Controller connected',
    extNote: 'This game opens in a new tab.',
    freeBy: 'Free game by',
    pasteSummary: '🔗 Paste a game link',
    pasteHelp: 'Paste a web game address (URL) to show it on the TV. It opens sandboxed. Only use pages you trust.',
    pasteGo: 'Load',
    rotate: 'Turn your phone to play better',
    camDenied: 'No camera: showing a pretend room. Turn it on with 📷.',
    loading: 'Loading…',
    chooseLang: 'Choose your language', searchLang: 'Search language…',
    carHint: 'swipe / arrows / stick to browse', play: 'Play', back: 'Back', menu: 'Menu',
    searchAct: 'Search', cameraAct: 'Camera', category: 'Category', renameProfile: 'Your name?',
    brand: 'Nebula Console', favorite: 'Favorite', byKmm: 'by KMM',
    connectPad: 'Connect a controller', connectPadHow: 'Pair a gamepad by Bluetooth or USB to play on the big screen. You can also use the keyboard.',
    continueKb: 'Continue with keyboard', padReady: 'Controller ready',
    modeConsole: 'Console mode', modePc: 'PC mode', chooseMode: 'How do you want to play?',
    modeConsoleHow: 'Couch + controller on a big screen', modePcHow: 'Keyboard & mouse on a computer',
    kbHints: '← → Move · Enter Play · Esc Back · / Search', useController: 'Use your controller 🎮',
    voice: 'Speak', voiceNA: 'Voice not available here', voiceHelp: "Didn't catch that — try: 'play Snake'", voiceListen: 'Listening…', move: 'Move',
    voiceOut: 'Spoken voice', chooseVoice: 'Voice', spokenFeedback: 'Speak feedback aloud', testVoice: 'Test', close: 'Close', defaultVoice: 'Automatic (best)',
    appsFilter: 'Apps'
  };

  var STR = {
    en: EN,
    es: {
      bootTips: ['Encendiendo…', 'Calentando la pantalla…', 'Buscando mandos…', '¡Listo para jugar!'],
      idleSub: 'Elige un juego abajo ▾', camOn: '📷 Cámara', camOff: '📷 Sin cámara',
      install: 'Instalar app', titleMine: 'Mis juegos KMM', titleFree: 'Más juegos gratis',
      freeNote: 'Juegos libres y gratuitos hechos por otras personas. Se abren dentro de la tele.',
      search: 'Buscar juegos…', all: 'Todos', home: 'MENÚ', play: 'Jugar', open: 'Abrir',
      padConnected: 'Mando conectado', extNote: 'Este juego se abre en una pestaña nueva.',
      freeBy: 'Juego gratis de', pasteSummary: '🔗 Pegar enlace de un juego',
      pasteHelp: 'Pega la dirección (URL) de un juego web para verlo en la tele. Se abre de forma aislada (sandbox). Úsalo solo con páginas de confianza.',
      pasteGo: 'Cargar', rotate: 'Gira el móvil para jugar mejor',
      camDenied: 'Sin cámara: mostrando un cuarto de mentira. Puedes activarla con 📷.',
      loading: 'Cargando…', chooseLang: 'Elige tu idioma', searchLang: 'Buscar idioma…',
      carHint: 'desliza / flechas / stick para ver', play: 'Jugar', back: 'Atrás', menu: 'Menú',
      searchAct: 'Buscar', cameraAct: 'Cámara', category: 'Categoría', renameProfile: '¿Tu nombre?',
      brand: 'Consola Nebula', favorite: 'Favorito', byKmm: 'de KMM',
      connectPad: 'Conecta un mando', connectPadHow: 'Empareja un mando por Bluetooth o USB para jugar en la pantalla grande. También puedes usar el teclado.',
      continueKb: 'Seguir con el teclado', padReady: 'Mando listo',
      modeConsole: 'Modo Consola', modePc: 'Modo PC', chooseMode: '¿Cómo quieres jugar?',
      modeConsoleHow: 'Sofá + mando en una pantalla grande', modePcHow: 'Teclado y ratón en un ordenador',
      kbHints: '← → Mover · Enter Jugar · Esc Atrás · / Buscar', useController: 'Usa tu mando 🎮',
      voice: 'Hablar', voiceNA: 'Voz no disponible aquí', voiceHelp: "No te entendí — prueba: 'jugar Snake'", voiceListen: 'Escuchando…', move: 'Mover',
      voiceOut: 'Voz hablada', chooseVoice: 'Voz', spokenFeedback: 'Leer en voz alta', testVoice: 'Probar', close: 'Cerrar', defaultVoice: 'Automática (la mejor)',
      appsFilter: 'Apps'
    },
    pt: {
      brand: 'Consola Nebula',
      bootTips: ['Ligando…', 'Aquecendo a tela…', 'Procurando controles…', 'Pronto para jogar!'],
      idleSub: 'Escolha um jogo abaixo ▾', camOn: '📷 Câmera', camOff: '📷 Sem câmera',
      install: 'Instalar app', titleMine: 'Meus jogos KMM', titleFree: 'Mais jogos grátis',
      freeNote: 'Jogos livres e gratuitos feitos por outras pessoas. Abrem dentro da TV.',
      search: 'Buscar jogos…', all: 'Todos', home: 'MENU', play: 'Jogar', open: 'Abrir',
      padConnected: 'Controle conectado', freeBy: 'Jogo grátis de',
      pasteSummary: '🔗 Colar link de um jogo', pasteGo: 'Carregar',
      rotate: 'Gire o celular para jogar melhor', chooseLang: 'Escolha seu idioma', searchLang: 'Buscar idioma…'
    },
    fr: {
      brand: 'Console Nebula',
      bootTips: ['Allumage…', 'Préchauffage de l’écran…', 'Recherche de manettes…', 'Prêt à jouer !'],
      idleSub: 'Choisis un jeu ci-dessous ▾', camOn: '📷 Caméra', camOff: '📷 Caméra off',
      install: 'Installer l’app', titleMine: 'Mes jeux KMM', titleFree: 'Plus de jeux gratuits',
      freeNote: 'Jeux libres et gratuits faits par d’autres. Ils s’ouvrent dans la télé.',
      search: 'Rechercher des jeux…', all: 'Tous', home: 'MENU', play: 'Jouer', open: 'Ouvrir',
      padConnected: 'Manette connectée', freeBy: 'Jeu gratuit de',
      pasteSummary: '🔗 Coller le lien d’un jeu', pasteGo: 'Charger',
      rotate: 'Tourne le téléphone pour mieux jouer', chooseLang: 'Choisis ta langue', searchLang: 'Rechercher une langue…'
    },
    de: {
      brand: 'Nebula-Konsole',
      bootTips: ['Einschalten…', 'Bildschirm aufwärmen…', 'Suche Controller…', 'Bereit zum Spielen!'],
      idleSub: 'Wähle unten ein Spiel ▾', camOn: '📷 Kamera', camOff: '📷 Kamera aus',
      install: 'App installieren', titleMine: 'Meine KMM-Spiele', titleFree: 'Mehr Gratis-Spiele',
      freeNote: 'Freie, gratis Spiele von anderen. Sie öffnen sich im Fernseher.',
      search: 'Spiele suchen…', all: 'Alle', home: 'MENÜ', play: 'Spielen', open: 'Öffnen',
      padConnected: 'Controller verbunden', freeBy: 'Gratis-Spiel von',
      pasteSummary: '🔗 Spiel-Link einfügen', pasteGo: 'Laden',
      rotate: 'Dreh das Handy zum Spielen', chooseLang: 'Wähle deine Sprache', searchLang: 'Sprache suchen…'
    },
    it: {
      brand: 'Console Nebula',
      bootTips: ['Accensione…', 'Riscaldo lo schermo…', 'Cerco i controller…', 'Pronto a giocare!'],
      idleSub: 'Scegli un gioco sotto ▾', camOn: '📷 Fotocamera', camOff: '📷 Senza camera',
      install: 'Installa app', titleMine: 'I miei giochi KMM', titleFree: 'Altri giochi gratis',
      freeNote: 'Giochi liberi e gratuiti fatti da altri. Si aprono nella TV.',
      search: 'Cerca giochi…', all: 'Tutti', home: 'MENU', play: 'Gioca', open: 'Apri',
      padConnected: 'Controller connesso', freeBy: 'Gioco gratis di',
      pasteSummary: '🔗 Incolla il link di un gioco', pasteGo: 'Carica',
      rotate: 'Ruota il telefono per giocare meglio', chooseLang: 'Scegli la lingua', searchLang: 'Cerca lingua…'
    },
    nl: {
      bootTips: ['Inschakelen…', 'Scherm opwarmen…', 'Controllers zoeken…', 'Klaar om te spelen!'],
      idleSub: 'Kies hieronder een spel ▾', camOn: '📷 Camera', camOff: '📷 Camera uit',
      install: 'App installeren', titleMine: 'Mijn KMM-spellen', titleFree: 'Meer gratis spellen',
      search: 'Spellen zoeken…', all: 'Alle', home: 'MENU', play: 'Spelen', open: 'Openen',
      padConnected: 'Controller verbonden', freeBy: 'Gratis spel van',
      pasteSummary: '🔗 Plak een spellink', pasteGo: 'Laden',
      rotate: 'Draai je telefoon om beter te spelen', chooseLang: 'Kies je taal', searchLang: 'Taal zoeken…'
    },
    ca: {
      idleSub: 'Tria un joc a sota ▾', camOn: '📷 Càmera', camOff: '📷 Sense càmera',
      install: 'Instal·la l’app', titleMine: 'Els meus jocs KMM', titleFree: 'Més jocs gratis',
      search: 'Cerca jocs…', all: 'Tots', home: 'MENÚ', play: 'Jugar', open: 'Obrir',
      padConnected: 'Comandament connectat', freeBy: 'Joc gratis de',
      pasteSummary: '🔗 Enganxa l’enllaç d’un joc', pasteGo: 'Carrega',
      rotate: 'Gira el mòbil per jugar millor', chooseLang: 'Tria el teu idioma', searchLang: 'Cerca idioma…'
    },
    gl: {
      idleSub: 'Escolle un xogo abaixo ▾', camOn: '📷 Cámara', camOff: '📷 Sen cámara',
      install: 'Instalar app', titleMine: 'Os meus xogos KMM', titleFree: 'Máis xogos gratis',
      search: 'Buscar xogos…', all: 'Todos', home: 'MENÚ', play: 'Xogar', open: 'Abrir',
      padConnected: 'Mando conectado', freeBy: 'Xogo gratis de', pasteGo: 'Cargar',
      rotate: 'Xira o móbil para xogar mellor', chooseLang: 'Escolle o teu idioma', searchLang: 'Buscar idioma…'
    },
    eu: {
      idleSub: 'Aukeratu joko bat behean ▾', camOn: '📷 Kamera', camOff: '📷 Kamerarik ez',
      install: 'Instalatu app-a', titleMine: 'Nire KMM jokoak', titleFree: 'Doako joko gehiago',
      search: 'Bilatu jokoak…', all: 'Denak', home: 'MENUA', play: 'Jolastu', open: 'Ireki',
      padConnected: 'Agintea konektatuta', freeBy: 'Doako jokoa:', pasteGo: 'Kargatu',
      rotate: 'Biratu mugikorra hobeto jolasteko', chooseLang: 'Aukeratu zure hizkuntza', searchLang: 'Bilatu hizkuntza…'
    },
    ro: {
      idleSub: 'Alege un joc mai jos ▾', camOn: '📷 Cameră', camOff: '📷 Fără cameră',
      install: 'Instalează aplicația', titleMine: 'Jocurile mele KMM', titleFree: 'Mai multe jocuri gratuite',
      search: 'Caută jocuri…', all: 'Toate', home: 'MENIU', play: 'Joacă', open: 'Deschide',
      padConnected: 'Controller conectat', freeBy: 'Joc gratuit de', pasteGo: 'Încarcă',
      rotate: 'Rotește telefonul pentru a juca mai bine', chooseLang: 'Alege limba', searchLang: 'Caută limba…'
    },
    pl: {
      idleSub: 'Wybierz grę poniżej ▾', camOn: '📷 Kamera', camOff: '📷 Kamera wył.',
      install: 'Zainstaluj apkę', titleMine: 'Moje gry KMM', titleFree: 'Więcej darmowych gier',
      search: 'Szukaj gier…', all: 'Wszystkie', home: 'MENU', play: 'Graj', open: 'Otwórz',
      padConnected: 'Pad podłączony', freeBy: 'Darmowa gra od', pasteGo: 'Wczytaj',
      rotate: 'Obróć telefon, by lepiej grać', chooseLang: 'Wybierz język', searchLang: 'Szukaj języka…'
    },
    cs: {
      idleSub: 'Vyber hru níže ▾', camOn: '📷 Kamera', camOff: '📷 Kamera vyp.',
      install: 'Nainstalovat aplikaci', titleMine: 'Moje hry KMM', titleFree: 'Více her zdarma',
      search: 'Hledat hry…', all: 'Vše', home: 'MENU', play: 'Hrát', open: 'Otevřít',
      padConnected: 'Ovladač připojen', freeBy: 'Hra zdarma od', pasteGo: 'Načíst',
      rotate: 'Otoč telefon pro lepší hraní', chooseLang: 'Vyber jazyk', searchLang: 'Hledat jazyk…'
    },
    uk: {
      idleSub: 'Обери гру нижче ▾', camOn: '📷 Камера', camOff: '📷 Без камери',
      install: 'Встановити застосунок', titleMine: 'Мої ігри KMM', titleFree: 'Більше безкоштовних ігор',
      search: 'Пошук ігор…', all: 'Усі', home: 'МЕНЮ', play: 'Грати', open: 'Відкрити',
      padConnected: 'Геймпад підключено', freeBy: 'Безкоштовна гра від', pasteGo: 'Завантажити',
      rotate: 'Поверни телефон, щоб грати краще', chooseLang: 'Обери мову', searchLang: 'Пошук мови…'
    },
    ru: {
      idleSub: 'Выбери игру ниже ▾', camOn: '📷 Камера', camOff: '📷 Без камеры',
      install: 'Установить приложение', titleMine: 'Мои игры KMM', titleFree: 'Больше бесплатных игр',
      search: 'Искать игры…', all: 'Все', home: 'МЕНЮ', play: 'Играть', open: 'Открыть',
      padConnected: 'Геймпад подключён', freeBy: 'Бесплатная игра от', pasteGo: 'Загрузить',
      rotate: 'Поверни телефон, чтобы играть удобнее', chooseLang: 'Выбери язык', searchLang: 'Поиск языка…'
    },
    el: {
      idleSub: 'Διάλεξε παιχνίδι πιο κάτω ▾', camOn: '📷 Κάμερα', camOff: '📷 Χωρίς κάμερα',
      install: 'Εγκατάσταση εφαρμογής', titleMine: 'Τα παιχνίδια μου KMM', titleFree: 'Περισσότερα δωρεάν παιχνίδια',
      search: 'Αναζήτηση παιχνιδιών…', all: 'Όλα', home: 'ΜΕΝΟΥ', play: 'Παίξε', open: 'Άνοιγμα',
      padConnected: 'Χειριστήριο συνδέθηκε', freeBy: 'Δωρεάν παιχνίδι από', pasteGo: 'Φόρτωση',
      rotate: 'Γύρνα το κινητό για καλύτερο παιχνίδι', chooseLang: 'Διάλεξε γλώσσα', searchLang: 'Αναζήτηση γλώσσας…'
    },
    tr: {
      idleSub: 'Aşağıdan bir oyun seç ▾', camOn: '📷 Kamera', camOff: '📷 Kamera kapalı',
      install: 'Uygulamayı yükle', titleMine: 'KMM oyunlarım', titleFree: 'Daha fazla ücretsiz oyun',
      search: 'Oyun ara…', all: 'Tümü', home: 'MENÜ', play: 'Oyna', open: 'Aç',
      padConnected: 'Kol bağlandı', freeBy: 'Ücretsiz oyun:', pasteGo: 'Yükle',
      rotate: 'Daha iyi oynamak için telefonu çevir', chooseLang: 'Dilini seç', searchLang: 'Dil ara…'
    },
    ar: {
      bootTips: ['جارٍ التشغيل…', 'إحماء الشاشة…', 'البحث عن أذرع التحكم…', 'جاهز للعب!'],
      idleSub: 'اختر لعبة بالأسفل ▾', camOn: '📷 الكاميرا', camOff: '📷 بدون كاميرا',
      install: 'تثبيت التطبيق', titleMine: 'ألعابي KMM', titleFree: 'مزيد من الألعاب المجانية',
      freeNote: 'ألعاب حرة ومجانية صنعها آخرون. تُفتح داخل التلفاز.',
      search: 'ابحث عن الألعاب…', all: 'الكل', home: 'القائمة', play: 'العب', open: 'افتح',
      padConnected: 'تم توصيل وحدة التحكم', freeBy: 'لعبة مجانية من',
      pasteSummary: '🔗 الصق رابط لعبة', pasteGo: 'تحميل',
      rotate: 'أدر الهاتف للعب بشكل أفضل', chooseLang: 'اختر لغتك', searchLang: 'ابحث عن لغة…'
    },
    he: {
      idleSub: 'בחר משחק למטה ▾', camOn: '📷 מצלמה', camOff: '📷 ללא מצלמה',
      install: 'התקן אפליקציה', titleMine: 'המשחקים שלי KMM', titleFree: 'עוד משחקים חינם',
      search: 'חיפוש משחקים…', all: 'הכול', home: 'תפריט', play: 'שחק', open: 'פתח',
      padConnected: 'השלט מחובר', freeBy: 'משחק חינם מאת', pasteGo: 'טען',
      rotate: 'סובב את הטלפון למשחק טוב יותר', chooseLang: 'בחר שפה', searchLang: 'חיפוש שפה…'
    },
    fa: {
      idleSub: 'یک بازی را پایین انتخاب کن ▾', camOn: '📷 دوربین', camOff: '📷 بدون دوربین',
      install: 'نصب برنامه', titleMine: 'بازی‌های من KMM', titleFree: 'بازی‌های رایگان بیشتر',
      search: 'جستجوی بازی‌ها…', all: 'همه', home: 'منو', play: 'بازی', open: 'باز کن',
      padConnected: 'دسته وصل شد', freeBy: 'بازی رایگان از', pasteGo: 'بارگذاری',
      rotate: 'برای بازی بهتر گوشی را بچرخان', chooseLang: 'زبانت را انتخاب کن', searchLang: 'جستجوی زبان…'
    },
    ur: {
      idleSub: 'نیچے سے ایک گیم چنیں ▾', camOn: '📷 کیمرا', camOff: '📷 کیمرا بند',
      install: 'ایپ انسٹال کریں', titleMine: 'میرے KMM گیمز', titleFree: 'مزید مفت گیمز',
      search: 'گیمز تلاش کریں…', all: 'سب', home: 'مینو', play: 'کھیلیں', open: 'کھولیں',
      padConnected: 'کنٹرولر جُڑ گیا', freeBy: 'مفت گیم از', pasteGo: 'لوڈ کریں',
      rotate: 'بہتر کھیلنے کے لیے فون گھمائیں', chooseLang: 'اپنی زبان چنیں', searchLang: 'زبان تلاش کریں…'
    },
    hi: {
      idleSub: 'नीचे से एक गेम चुनें ▾', camOn: '📷 कैमरा', camOff: '📷 कैमरा बंद',
      install: 'ऐप इंस्टॉल करें', titleMine: 'मेरे KMM गेम', titleFree: 'और मुफ़्त गेम',
      search: 'गेम खोजें…', all: 'सभी', home: 'मेनू', play: 'खेलें', open: 'खोलें',
      padConnected: 'कंट्रोलर जुड़ा', freeBy: 'मुफ़्त गेम —', pasteGo: 'लोड करें',
      rotate: 'बेहतर खेलने के लिए फ़ोन घुमाएँ', chooseLang: 'अपनी भाषा चुनें', searchLang: 'भाषा खोजें…'
    },
    bn: {
      idleSub: 'নিচে একটি গেম বেছে নাও ▾', camOn: '📷 ক্যামেরা', camOff: '📷 ক্যামেরা বন্ধ',
      install: 'অ্যাপ ইনস্টল করুন', titleMine: 'আমার KMM গেম', titleFree: 'আরও ফ্রি গেম',
      search: 'গেম খুঁজুন…', all: 'সব', home: 'মেনু', play: 'খেলো', open: 'খোলো',
      padConnected: 'কন্ট্রোলার যুক্ত', freeBy: 'ফ্রি গেম —', pasteGo: 'লোড',
      rotate: 'ভালো খেলতে ফোন ঘোরাও', chooseLang: 'তোমার ভাষা বেছে নাও', searchLang: 'ভাষা খুঁজুন…'
    },
    ta: {
      idleSub: 'கீழே ஒரு விளையாட்டைத் தேர்வுசெய் ▾', camOn: '📷 கேமரா', camOff: '📷 கேமரா இல்லை',
      install: 'ஆப்பை நிறுவு', titleMine: 'என் KMM விளையாட்டுகள்', titleFree: 'மேலும் இலவச விளையாட்டுகள்',
      search: 'விளையாட்டுகளைத் தேடு…', all: 'அனைத்தும்', home: 'மெனு', play: 'விளையாடு', open: 'திற',
      padConnected: 'கன்ட்ரோலர் இணைந்தது', freeBy: 'இலவச விளையாட்டு —', pasteGo: 'ஏற்று',
      rotate: 'நன்றாக விளையாட போனைச் சுழற்று', chooseLang: 'உன் மொழியைத் தேர்வுசெய்', searchLang: 'மொழியைத் தேடு…'
    },
    zh: {
      bootTips: ['开机中…', '屏幕预热…', '寻找手柄…', '准备开玩！'],
      idleSub: '在下面选一个游戏 ▾', camOn: '📷 摄像头', camOff: '📷 关闭摄像头',
      install: '安装应用', titleMine: '我的 KMM 游戏', titleFree: '更多免费游戏',
      freeNote: '别人制作的免费开源游戏，在电视里打开。',
      search: '搜索游戏…', all: '全部', home: '菜单', play: '开玩', open: '打开',
      padConnected: '手柄已连接', freeBy: '免费游戏，作者：', pasteGo: '加载',
      rotate: '把手机横过来玩更好', chooseLang: '选择你的语言', searchLang: '搜索语言…'
    },
    'zh-TW': {
      idleSub: '在下面選一個遊戲 ▾', camOn: '📷 攝影機', camOff: '📷 關閉攝影機',
      install: '安裝應用程式', titleMine: '我的 KMM 遊戲', titleFree: '更多免費遊戲',
      search: '搜尋遊戲…', all: '全部', home: '選單', play: '開玩', open: '開啟',
      padConnected: '手把已連接', freeBy: '免費遊戲，作者：', pasteGo: '載入',
      rotate: '把手機橫過來玩更好', chooseLang: '選擇你的語言', searchLang: '搜尋語言…'
    },
    ja: {
      bootTips: ['電源オン…', '画面を温めています…', 'コントローラーを探索中…', 'プレイ準備完了！'],
      idleSub: '下からゲームを選ぼう ▾', camOn: '📷 カメラ', camOff: '📷 カメラ オフ',
      install: 'アプリを追加', titleMine: 'わたしの KMM ゲーム', titleFree: 'もっと無料ゲーム',
      freeNote: '他の人が作った無料のオープンソースゲーム。テレビの中で開きます。',
      search: 'ゲームを検索…', all: 'すべて', home: 'メニュー', play: 'あそぶ', open: '開く',
      padConnected: 'コントローラー接続', freeBy: '無料ゲーム：', pasteGo: '読み込む',
      rotate: 'スマホを横にすると遊びやすいよ', chooseLang: '言語を選んでね', searchLang: '言語を検索…'
    },
    ko: {
      idleSub: '아래에서 게임을 골라요 ▾', camOn: '📷 카메라', camOff: '📷 카메라 끔',
      install: '앱 설치', titleMine: '내 KMM 게임', titleFree: '무료 게임 더 보기',
      search: '게임 검색…', all: '전체', home: '메뉴', play: '플레이', open: '열기',
      padConnected: '컨트롤러 연결됨', freeBy: '무료 게임:', pasteGo: '불러오기',
      rotate: '더 잘 하려면 폰을 돌리세요', chooseLang: '언어를 선택하세요', searchLang: '언어 검색…'
    },
    vi: {
      idleSub: 'Chọn một game bên dưới ▾', camOn: '📷 Camera', camOff: '📷 Tắt camera',
      install: 'Cài ứng dụng', titleMine: 'Game KMM của tôi', titleFree: 'Thêm game miễn phí',
      search: 'Tìm game…', all: 'Tất cả', home: 'MENU', play: 'Chơi', open: 'Mở',
      padConnected: 'Đã kết nối tay cầm', freeBy: 'Game miễn phí của', pasteGo: 'Tải',
      rotate: 'Xoay điện thoại để chơi tốt hơn', chooseLang: 'Chọn ngôn ngữ', searchLang: 'Tìm ngôn ngữ…'
    },
    th: {
      idleSub: 'เลือกเกมด้านล่าง ▾', camOn: '📷 กล้อง', camOff: '📷 ปิดกล้อง',
      install: 'ติดตั้งแอป', titleMine: 'เกม KMM ของฉัน', titleFree: 'เกมฟรีเพิ่มเติม',
      search: 'ค้นหาเกม…', all: 'ทั้งหมด', home: 'เมนู', play: 'เล่น', open: 'เปิด',
      padConnected: 'เชื่อมต่อจอยแล้ว', freeBy: 'เกมฟรีโดย', pasteGo: 'โหลด',
      rotate: 'หมุนมือถือเพื่อเล่นได้ดีขึ้น', chooseLang: 'เลือกภาษาของคุณ', searchLang: 'ค้นหาภาษา…'
    },
    id: {
      idleSub: 'Pilih game di bawah ▾', camOn: '📷 Kamera', camOff: '📷 Kamera mati',
      install: 'Pasang aplikasi', titleMine: 'Game KMM saya', titleFree: 'Game gratis lainnya',
      search: 'Cari game…', all: 'Semua', home: 'MENU', play: 'Main', open: 'Buka',
      padConnected: 'Kontroler terhubung', freeBy: 'Game gratis oleh', pasteGo: 'Muat',
      rotate: 'Putar ponsel agar lebih enak main', chooseLang: 'Pilih bahasamu', searchLang: 'Cari bahasa…'
    },
    ms: {
      idleSub: 'Pilih permainan di bawah ▾', camOn: '📷 Kamera', camOff: '📷 Kamera mati',
      install: 'Pasang apl', titleMine: 'Permainan KMM saya', titleFree: 'Lebih banyak permainan percuma',
      search: 'Cari permainan…', all: 'Semua', home: 'MENU', play: 'Main', open: 'Buka',
      padConnected: 'Pengawal disambung', freeBy: 'Permainan percuma oleh', pasteGo: 'Muat',
      rotate: 'Putar telefon untuk main lebih baik', chooseLang: 'Pilih bahasa anda', searchLang: 'Cari bahasa…'
    },
    tl: {
      idleSub: 'Pumili ng laro sa ibaba ▾', camOn: '📷 Camera', camOff: '📷 Walang camera',
      install: 'I-install ang app', titleMine: 'Mga laro kong KMM', titleFree: 'Iba pang libreng laro',
      search: 'Maghanap ng laro…', all: 'Lahat', home: 'MENU', play: 'Maglaro', open: 'Buksan',
      padConnected: 'Nakakonekta ang controller', freeBy: 'Libreng laro ni', pasteGo: 'I-load',
      rotate: 'Iikot ang telepono para mas maganda maglaro', chooseLang: 'Piliin ang wika mo', searchLang: 'Maghanap ng wika…'
    },
    sv: {
      idleSub: 'Välj ett spel nedan ▾', camOn: '📷 Kamera', camOff: '📷 Kamera av',
      install: 'Installera appen', titleMine: 'Mina KMM-spel', titleFree: 'Fler gratisspel',
      search: 'Sök spel…', all: 'Alla', home: 'MENY', play: 'Spela', open: 'Öppna',
      padConnected: 'Handkontroll ansluten', freeBy: 'Gratisspel av', pasteGo: 'Ladda',
      rotate: 'Vrid telefonen för att spela bättre', chooseLang: 'Välj språk', searchLang: 'Sök språk…'
    },
    no: {
      idleSub: 'Velg et spill under ▾', camOn: '📷 Kamera', camOff: '📷 Kamera av',
      install: 'Installer appen', titleMine: 'Mine KMM-spill', titleFree: 'Flere gratisspill',
      search: 'Søk spill…', all: 'Alle', home: 'MENY', play: 'Spill', open: 'Åpne',
      padConnected: 'Kontroller tilkoblet', freeBy: 'Gratisspill av', pasteGo: 'Last',
      rotate: 'Snu telefonen for å spille bedre', chooseLang: 'Velg språk', searchLang: 'Søk språk…'
    },
    da: {
      idleSub: 'Vælg et spil nedenfor ▾', camOn: '📷 Kamera', camOff: '📷 Kamera fra',
      install: 'Installer appen', titleMine: 'Mine KMM-spil', titleFree: 'Flere gratis spil',
      search: 'Søg spil…', all: 'Alle', home: 'MENU', play: 'Spil', open: 'Åbn',
      padConnected: 'Controller tilsluttet', freeBy: 'Gratis spil af', pasteGo: 'Indlæs',
      rotate: 'Drej telefonen for at spille bedre', chooseLang: 'Vælg sprog', searchLang: 'Søg sprog…'
    },
    fi: {
      idleSub: 'Valitse peli alta ▾', camOn: '📷 Kamera', camOff: '📷 Kamera pois',
      install: 'Asenna sovellus', titleMine: 'Minun KMM-pelini', titleFree: 'Lisää ilmaisia pelejä',
      search: 'Hae pelejä…', all: 'Kaikki', home: 'VALIKKO', play: 'Pelaa', open: 'Avaa',
      padConnected: 'Ohjain yhdistetty', freeBy: 'Ilmainen peli:', pasteGo: 'Lataa',
      rotate: 'Käännä puhelin pelataksesi paremmin', chooseLang: 'Valitse kieli', searchLang: 'Hae kieli…'
    },
    hu: {
      idleSub: 'Válassz egy játékot lent ▾', camOn: '📷 Kamera', camOff: '📷 Kamera ki',
      install: 'Alkalmazás telepítése', titleMine: 'KMM játékaim', titleFree: 'Több ingyenes játék',
      search: 'Játékok keresése…', all: 'Mind', home: 'MENÜ', play: 'Játék', open: 'Megnyitás',
      padConnected: 'Kontroller csatlakozva', freeBy: 'Ingyenes játék:', pasteGo: 'Betöltés',
      rotate: 'Fordítsd el a telefont a jobb játékért', chooseLang: 'Válassz nyelvet', searchLang: 'Nyelv keresése…'
    },
    sw: {
      idleSub: 'Chagua mchezo hapa chini ▾', camOn: '📷 Kamera', camOff: '📷 Hakuna kamera',
      install: 'Sakinisha programu', titleMine: 'Michezo yangu ya KMM', titleFree: 'Michezo zaidi ya bure',
      search: 'Tafuta michezo…', all: 'Yote', home: 'MENYU', play: 'Cheza', open: 'Fungua',
      padConnected: 'Kidhibiti kimeunganishwa', freeBy: 'Mchezo wa bure wa', pasteGo: 'Pakia',
      rotate: 'Zungusha simu ucheze vizuri zaidi', chooseLang: 'Chagua lugha yako', searchLang: 'Tafuta lugha…'
    },
    af: {
      idleSub: 'Kies ’n speletjie hieronder ▾', camOn: '📷 Kamera', camOff: '📷 Kamera af',
      install: 'Installeer die app', titleMine: 'My KMM-speletjies', titleFree: 'Meer gratis speletjies',
      search: 'Soek speletjies…', all: 'Almal', home: 'KIESLYS', play: 'Speel', open: 'Maak oop',
      padConnected: 'Beheerder gekoppel', freeBy: 'Gratis speletjie deur', pasteGo: 'Laai',
      rotate: 'Draai jou foon om beter te speel', chooseLang: 'Kies jou taal', searchLang: 'Soek taal…'
    },
    sq: {
      idleSub: 'Zgjidh një lojë poshtë ▾', camOn: '📷 Kamera', camOff: '📷 Pa kamera',
      install: 'Instalo aplikacionin', titleMine: 'Lojërat e mia KMM', titleFree: 'Më shumë lojëra falas',
      search: 'Kërko lojëra…', all: 'Të gjitha', home: 'MENU', play: 'Luaj', open: 'Hap',
      padConnected: 'Kontrolluesi u lidh', freeBy: 'Lojë falas nga', pasteGo: 'Ngarko',
      rotate: 'Rrotullo telefonin për të luajtur më mirë', chooseLang: 'Zgjidh gjuhën', searchLang: 'Kërko gjuhë…'
    },
    bg: {
      idleSub: 'Избери игра долу ▾', camOn: '📷 Камера', camOff: '📷 Без камера',
      install: 'Инсталирай приложението', titleMine: 'Моите игри KMM', titleFree: 'Още безплатни игри',
      search: 'Търси игри…', all: 'Всички', home: 'МЕНЮ', play: 'Играй', open: 'Отвори',
      padConnected: 'Контролерът е свързан', freeBy: 'Безплатна игра от', pasteGo: 'Зареди',
      rotate: 'Завърти телефона за по-добра игра', chooseLang: 'Избери език', searchLang: 'Търси език…'
    },
    hr: {
      idleSub: 'Odaberi igru dolje ▾', camOn: '📷 Kamera', camOff: '📷 Bez kamere',
      install: 'Instaliraj aplikaciju', titleMine: 'Moje KMM igre', titleFree: 'Više besplatnih igara',
      search: 'Traži igre…', all: 'Sve', home: 'IZBORNIK', play: 'Igraj', open: 'Otvori',
      padConnected: 'Kontroler povezan', freeBy: 'Besplatna igra od', pasteGo: 'Učitaj',
      rotate: 'Okreni telefon za bolju igru', chooseLang: 'Odaberi jezik', searchLang: 'Traži jezik…'
    },
    sr: {
      idleSub: 'Изабери игру доле ▾', camOn: '📷 Камера', camOff: '📷 Без камере',
      install: 'Инсталирај апликацију', titleMine: 'Моје KMM игре', titleFree: 'Још бесплатних игара',
      search: 'Тражи игре…', all: 'Све', home: 'МЕНИ', play: 'Играј', open: 'Отвори',
      padConnected: 'Контролер повезан', freeBy: 'Бесплатна игра од', pasteGo: 'Учитај',
      rotate: 'Окрени телефон за бољу игру', chooseLang: 'Изабери језик', searchLang: 'Тражи језик…'
    },
    bs: {
      idleSub: 'Odaberi igru dolje ▾', camOn: '📷 Kamera', camOff: '📷 Bez kamere',
      install: 'Instaliraj aplikaciju', titleMine: 'Moje KMM igre', titleFree: 'Više besplatnih igara',
      search: 'Traži igre…', all: 'Sve', home: 'MENI', play: 'Igraj', open: 'Otvori',
      padConnected: 'Kontroler povezan', freeBy: 'Besplatna igra od', pasteGo: 'Učitaj',
      rotate: 'Okreni telefon za bolju igru', chooseLang: 'Odaberi jezik', searchLang: 'Traži jezik…'
    },
    sk: {
      idleSub: 'Vyber hru nižšie ▾', camOn: '📷 Kamera', camOff: '📷 Bez kamery',
      install: 'Nainštalovať aplikáciu', titleMine: 'Moje hry KMM', titleFree: 'Viac hier zadarmo',
      search: 'Hľadať hry…', all: 'Všetko', home: 'MENU', play: 'Hrať', open: 'Otvoriť',
      padConnected: 'Ovládač pripojený', freeBy: 'Hra zadarmo od', pasteGo: 'Načítať',
      rotate: 'Otoč telefón pre lepšie hranie', chooseLang: 'Vyber jazyk', searchLang: 'Hľadať jazyk…'
    },
    sl: {
      idleSub: 'Izberi igro spodaj ▾', camOn: '📷 Kamera', camOff: '📷 Brez kamere',
      install: 'Namesti aplikacijo', titleMine: 'Moje igre KMM', titleFree: 'Več brezplačnih iger',
      search: 'Išči igre…', all: 'Vse', home: 'MENI', play: 'Igraj', open: 'Odpri',
      padConnected: 'Kontroler povezan', freeBy: 'Brezplačna igra od', pasteGo: 'Naloži',
      rotate: 'Obrni telefon za boljšo igro', chooseLang: 'Izberi jezik', searchLang: 'Išči jezik…'
    },
    et: {
      idleSub: 'Vali allpool mäng ▾', camOn: '📷 Kaamera', camOff: '📷 Kaamera väljas',
      install: 'Installi rakendus', titleMine: 'Minu KMM mängud', titleFree: 'Rohkem tasuta mänge',
      search: 'Otsi mänge…', all: 'Kõik', home: 'MENÜÜ', play: 'Mängi', open: 'Ava',
      padConnected: 'Pult ühendatud', freeBy: 'Tasuta mäng:', pasteGo: 'Laadi',
      rotate: 'Pööra telefoni paremaks mänguks', chooseLang: 'Vali keel', searchLang: 'Otsi keelt…'
    },
    lv: {
      idleSub: 'Izvēlies spēli zemāk ▾', camOn: '📷 Kamera', camOff: '📷 Bez kameras',
      install: 'Instalēt lietotni', titleMine: 'Manas KMM spēles', titleFree: 'Vairāk bezmaksas spēļu',
      search: 'Meklēt spēles…', all: 'Visas', home: 'IZVĒLNE', play: 'Spēlēt', open: 'Atvērt',
      padConnected: 'Kontrolieris pievienots', freeBy: 'Bezmaksas spēle:', pasteGo: 'Ielādēt',
      rotate: 'Pagriez tālruni labākai spēlei', chooseLang: 'Izvēlies valodu', searchLang: 'Meklēt valodu…'
    },
    lt: {
      idleSub: 'Pasirink žaidimą žemiau ▾', camOn: '📷 Kamera', camOff: '📷 Be kameros',
      install: 'Įdiegti programėlę', titleMine: 'Mano KMM žaidimai', titleFree: 'Daugiau nemokamų žaidimų',
      search: 'Ieškoti žaidimų…', all: 'Visi', home: 'MENIU', play: 'Žaisti', open: 'Atidaryti',
      padConnected: 'Pultelis prijungtas', freeBy: 'Nemokamas žaidimas:', pasteGo: 'Įkelti',
      rotate: 'Pasuk telefoną geresniam žaidimui', chooseLang: 'Pasirink kalbą', searchLang: 'Ieškoti kalbos…'
    },
    mk: {
      idleSub: 'Избери игра подолу ▾', camOn: '📷 Камера', camOff: '📷 Без камера',
      install: 'Инсталирај ја апликацијата', titleMine: 'Мои KMM игри', titleFree: 'Повеќе бесплатни игри',
      search: 'Пребарај игри…', all: 'Сите', home: 'МЕНИ', play: 'Играј', open: 'Отвори',
      padConnected: 'Контролерот е поврзан', freeBy: 'Бесплатна игра од', pasteGo: 'Вчитај',
      rotate: 'Сврти го телефонот за подобра игра', chooseLang: 'Избери јазик', searchLang: 'Пребарај јазик…'
    },
    is: {
      idleSub: 'Veldu leik hér að neðan ▾', camOn: '📷 Myndavél', camOff: '📷 Engin myndavél',
      install: 'Setja upp appið', titleMine: 'KMM leikirnir mínir', titleFree: 'Fleiri ókeypis leikir',
      search: 'Leita að leikjum…', all: 'Allir', home: 'VALMYND', play: 'Spila', open: 'Opna',
      padConnected: 'Stýripinni tengdur', freeBy: 'Ókeypis leikur eftir', pasteGo: 'Hlaða',
      rotate: 'Snúðu símanum til að spila betur', chooseLang: 'Veldu tungumál', searchLang: 'Leita að tungumáli…'
    },
    ga: {
      idleSub: 'Roghnaigh cluiche thíos ▾', camOn: '📷 Ceamara', camOff: '📷 Gan ceamara',
      install: 'Suiteáil an aip', titleMine: 'Mo chluichí KMM', titleFree: 'Tuilleadh cluichí saor',
      search: 'Cuardaigh cluichí…', all: 'Gach', home: 'ROGHCHLÁR', play: 'Imir', open: 'Oscail',
      padConnected: 'Rialtán ceangailte', freeBy: 'Cluiche saor le', pasteGo: 'Lódáil',
      rotate: 'Cas an fón chun imirt níos fearr', chooseLang: 'Roghnaigh teanga', searchLang: 'Cuardaigh teanga…'
    },
    cy: {
      idleSub: 'Dewiswch gêm isod ▾', camOn: '📷 Camera', camOff: '📷 Dim camera',
      install: 'Gosod yr ap', titleMine: 'Fy ngemau KMM', titleFree: 'Mwy o gemau am ddim',
      search: 'Chwilio gemau…', all: 'Pawb', home: 'DEWISLEN', play: 'Chwarae', open: 'Agor',
      padConnected: 'Rheolydd wedi cysylltu', freeBy: 'Gêm am ddim gan', pasteGo: 'Llwytho',
      rotate: 'Trowch y ffôn i chwarae\'n well', chooseLang: 'Dewiswch iaith', searchLang: 'Chwilio iaith…'
    },
    az: {
      idleSub: 'Aşağıdan oyun seç ▾', camOn: '📷 Kamera', camOff: '📷 Kamera yoxdur',
      install: 'Tətbiqi quraşdır', titleMine: 'KMM oyunlarım', titleFree: 'Daha çox pulsuz oyun',
      search: 'Oyun axtar…', all: 'Hamısı', home: 'MENYU', play: 'Oyna', open: 'Aç',
      padConnected: 'Pult qoşuldu', freeBy: 'Pulsuz oyun:', pasteGo: 'Yüklə',
      rotate: 'Daha yaxşı oynamaq üçün telefonu çevir', chooseLang: 'Dilini seç', searchLang: 'Dil axtar…'
    },
    kk: {
      idleSub: 'Төменнен ойын таңда ▾', camOn: '📷 Камера', camOff: '📷 Камерасыз',
      install: 'Қолданбаны орнату', titleMine: 'Менің KMM ойындарым', titleFree: 'Тағы тегін ойындар',
      search: 'Ойын іздеу…', all: 'Барлығы', home: 'МӘЗІР', play: 'Ойнау', open: 'Ашу',
      padConnected: 'Джойстик қосылды', freeBy: 'Тегін ойын:', pasteGo: 'Жүктеу',
      rotate: 'Жақсырақ ойнау үшін телефонды бұр', chooseLang: 'Тіл таңда', searchLang: 'Тіл іздеу…'
    },
    uz: {
      idleSub: 'Pastdan oʻyin tanlang ▾', camOn: '📷 Kamera', camOff: '📷 Kamerasiz',
      install: 'Ilovani oʻrnatish', titleMine: 'Mening KMM oʻyinlarim', titleFree: 'Yana bepul oʻyinlar',
      search: 'Oʻyin qidirish…', all: 'Hammasi', home: 'MENYU', play: 'Oʻynash', open: 'Ochish',
      padConnected: 'Boshqaruvchi ulandi', freeBy: 'Bepul oʻyin:', pasteGo: 'Yuklash',
      rotate: 'Yaxshiroq oʻynash uchun telefonni buring', chooseLang: 'Tilni tanlang', searchLang: 'Til qidirish…'
    },
    be: {
      idleSub: 'Абяры гульню ніжэй ▾', camOn: '📷 Камера', camOff: '📷 Без камеры',
      install: 'Усталяваць дадатак', titleMine: 'Мае гульні KMM', titleFree: 'Больш бясплатных гульняў',
      search: 'Пошук гульняў…', all: 'Усе', home: 'МЕНЮ', play: 'Гуляць', open: 'Адкрыць',
      padConnected: 'Кантролер падключаны', freeBy: 'Бясплатная гульня ад', pasteGo: 'Загрузіць',
      rotate: 'Павярні тэлефон для лепшай гульні', chooseLang: 'Абяры мову', searchLang: 'Пошук мовы…'
    },
    ky: {
      idleSub: 'Төмөндөн оюн танда ▾', camOn: '📷 Камера', camOff: '📷 Камерасыз',
      install: 'Колдонмону орнотуу', titleMine: 'Менин KMM оюндарым', titleFree: 'Дагы акысыз оюндар',
      search: 'Оюн издөө…', all: 'Баары', home: 'МЕНЮ', play: 'Ойноо', open: 'Ачуу',
      padConnected: 'Жойстик туташты', freeBy: 'Акысыз оюн:', pasteGo: 'Жүктөө',
      rotate: 'Жакшыраак ойноо үчүн телефонду бур', chooseLang: 'Тил танда', searchLang: 'Тил издөө…'
    },
    mt: {
      idleSub: 'Agħżel logħba hawn taħt ▾', camOn: '📷 Kamera', camOff: '📷 Bla kamera',
      install: 'Installa l-app', titleMine: 'Il-logħob KMM tiegħi', titleFree: 'Aktar logħob b\'xejn',
      search: 'Fittex logħob…', all: 'Kollha', home: 'MENU', play: 'Ilgħab', open: 'Iftaħ',
      padConnected: 'Kontrollur konness', freeBy: 'Logħba b\'xejn minn', pasteGo: 'Illowdja',
      rotate: 'Dawwar it-telefon biex tilgħab aħjar', chooseLang: 'Agħżel il-lingwa', searchLang: 'Fittex lingwa…'
    },
    lb: {
      idleSub: 'Wiel e Spill hei ënnen ▾', camOn: '📷 Kamera', camOff: '📷 Keng Kamera',
      install: 'App installéieren', titleMine: 'Meng KMM Spiller', titleFree: 'Méi gratis Spiller',
      search: 'Spiller sichen…', all: 'All', home: 'MENÜ', play: 'Spillen', open: 'Opmaachen',
      padConnected: 'Controller verbonnen', freeBy: 'Gratis Spill vun', pasteGo: 'Lueden',
      rotate: 'Dréi den Telefon fir besser ze spillen', chooseLang: 'Wiel deng Sprooch', searchLang: 'Sprooch sichen…'
    },
    ht: {
      idleSub: 'Chwazi yon jwèt anba ▾', camOn: '📷 Kamera', camOff: '📷 San kamera',
      install: 'Enstale app la', titleMine: 'Jwèt KMM mwen yo', titleFree: 'Plis jwèt gratis',
      search: 'Chèche jwèt…', all: 'Tout', home: 'MENI', play: 'Jwe', open: 'Ouvri',
      padConnected: 'Manèt konekte', freeBy: 'Jwèt gratis pa', pasteGo: 'Chaje',
      rotate: 'Vire telefòn nan pou jwe pi byen', chooseLang: 'Chwazi lang ou', searchLang: 'Chèche lang…'
    },
    yo: {
      idleSub: 'Yan ere kan nisalẹ ▾', camOn: '📷 Kamẹra', camOff: '📷 Ko si kamẹra',
      install: 'Fi app sori ẹrọ', titleMine: 'Awọn ere KMM mi', titleFree: 'Awọn ere ọfẹ diẹ sii',
      search: 'Wa awọn ere…', all: 'Gbogbo', home: 'ATOJỌ', play: 'Ṣere', open: 'Ṣii',
      padConnected: 'Olutọsọna ti sopọ', freeBy: 'Ere ọfẹ lati ọdọ', pasteGo: 'Gbe wọle',
      rotate: 'Yi foonu pada lati ṣere dara julọ', chooseLang: 'Yan ede rẹ', searchLang: 'Wa ede…'
    },
    zu: {
      idleSub: 'Khetha umdlalo ngezansi ▾', camOn: '📷 Ikhamera', camOff: '📷 Ayikho ikhamera',
      install: 'Faka uhlelo', titleMine: 'Imidlalo yami ye-KMM', titleFree: 'Eminye imidlalo yamahhala',
      search: 'Sesha imidlalo…', all: 'Konke', home: 'IMENYU', play: 'Dlala', open: 'Vula',
      padConnected: 'Isilawuli sixhunyiwe', freeBy: 'Umdlalo wamahhala ka', pasteGo: 'Layisha',
      rotate: 'Phendula ifoni ukuze udlale kangcono', chooseLang: 'Khetha ulimi lwakho', searchLang: 'Sesha ulimi…'
    },
    so: {
      idleSub: 'Dooro ciyaar hoose ▾', camOn: '📷 Kamarad', camOff: '📷 Kamarad la\'aan',
      install: 'Rakib abka', titleMine: 'Ciyaarahayga KMM', titleFree: 'Ciyaaro bilaash ah oo badan',
      search: 'Raadi ciyaaro…', all: 'Dhammaan', home: 'MENU', play: 'Ciyaar', open: 'Fur',
      padConnected: 'Gacanqabsiga waa la xiray', freeBy: 'Ciyaar bilaash ah oo uu sameeyay', pasteGo: 'Soo rar',
      rotate: 'Rogo taleefanka si aad u hesho ciyaar wanaagsan', chooseLang: 'Dooro luqaddaada', searchLang: 'Raadi luqad…'
    },
    ceb: {
      idleSub: 'Pagpili ug dula sa ubos ▾', camOn: '📷 Kamera', camOff: '📷 Walay kamera',
      install: 'I-install ang app', titleMine: 'Akong mga dula sa KMM', titleFree: 'Dugang libreng dula',
      search: 'Pangita ug dula…', all: 'Tanan', home: 'MENU', play: 'Dula', open: 'Abli',
      padConnected: 'Nakonektar ang controller', freeBy: 'Libreng dula ni', pasteGo: 'I-load',
      rotate: 'Ituyok ang telepono para mas maayo nga dula', chooseLang: 'Pagpili ug pinulongan', searchLang: 'Pangita ug pinulongan…'
    },
    jv: {
      idleSub: 'Pilih game ing ngisor ▾', camOn: '📷 Kamera', camOff: '📷 Tanpa kamera',
      install: 'Pasang app', titleMine: 'Game KMM-ku', titleFree: 'Game gratis liyane',
      search: 'Golek game…', all: 'Kabeh', home: 'MENU', play: 'Main', open: 'Bukak',
      padConnected: 'Kontroler kesambung', freeBy: 'Game gratis saka', pasteGo: 'Muat',
      rotate: 'Puteren hp supaya luwih kepenak main', chooseLang: 'Pilih basa', searchLang: 'Golek basa…'
    },
    su: {
      idleSub: 'Pilih kaulinan di handap ▾', camOn: '📷 Kamera', camOff: '📷 Teu aya kamera',
      install: 'Pasang app', titleMine: 'Kaulinan KMM kuring', titleFree: 'Kaulinan gratis sejenna',
      search: 'Teangan kaulinan…', all: 'Sadaya', home: 'MENU', play: 'Ulin', open: 'Buka',
      padConnected: 'Kontroler nyambung', freeBy: 'Kaulinan gratis ti', pasteGo: 'Muat',
      rotate: 'Puterkeun hp sangkan leuwih ngeunah ulin', chooseLang: 'Pilih basa', searchLang: 'Teangan basa…'
    },
    mg: {
      idleSub: 'Mifidiana lalao eto ambany ▾', camOn: '📷 Fakantsary', camOff: '📷 Tsy misy fakantsary',
      install: 'Apetraho ny app', titleMine: 'Ny lalao KMM-ko', titleFree: 'Lalao maimaim-poana hafa',
      search: 'Hitady lalao…', all: 'Rehetra', home: 'MENU', play: 'Milalao', open: 'Sokafy',
      padConnected: 'Mifandray ny kontaotera', freeBy: 'Lalao maimaim-poana avy amin\'i', pasteGo: 'Ampidino',
      rotate: 'Ahodino ny finday mba hilalao tsara kokoa', chooseLang: 'Mifidiana fiteny', searchLang: 'Hitady fiteny…'
    },
    sm: {
      idleSub: 'Filifili se taaloga i lalo ▾', camOn: '📷 Mea pueata', camOff: '📷 Leai se mea pueata',
      install: 'Faapipii le app', titleMine: 'A\'u taaloga KMM', titleFree: 'Isi taaloga e leai se totogi',
      search: 'Su\'e taaloga…', all: 'Uma', home: 'LISI', play: 'Taalo', open: 'Tatala',
      padConnected: 'Ua fesootai le pule', freeBy: 'Taaloga fua mai ia', pasteGo: 'Utaina',
      rotate: 'Liliu le telefoni e sili atu ai le taalo', chooseLang: 'Filifili lau gagana', searchLang: 'Su\'e gagana…'
    },
    mi: {
      idleSub: 'Tīpakohia tētahi kēmu i raro ▾', camOn: '📷 Kāmera', camOff: '📷 Kāore he kāmera',
      install: 'Tāuta i te taupānga', titleMine: 'Aku kēmu KMM', titleFree: 'Ētahi atu kēmu kore utu',
      search: 'Rapua he kēmu…', all: 'Katoa', home: 'TAHUA', play: 'Tākaro', open: 'Huakina',
      padConnected: 'Kua honoa te mana whakahaere', freeBy: 'Kēmu kore utu nā', pasteGo: 'Utaina',
      rotate: 'Hurihia te waea kia pai ake te tākaro', chooseLang: 'Tīpakohia tō reo', searchLang: 'Rapua he reo…'
    },
    haw: {
      idleSub: 'E koho i kahi pāʻani ma lalo ▾', camOn: '📷 Paʻi kiʻi', camOff: '📷 ʻAʻohe paʻi kiʻi',
      install: 'Hoʻokomo i ka app', titleMine: 'Kaʻu mau pāʻani KMM', titleFree: 'Nā pāʻani manuahi hou aʻe',
      search: 'ʻImi pāʻani…', all: 'Nā mea a pau', home: 'PAPA KUHIKUHI', play: 'Pāʻani', open: 'Wehe',
      padConnected: 'Ua hoʻohui ʻia ka mana', freeBy: 'Pāʻani manuahi na', pasteGo: 'Hoʻouka',
      rotate: 'E hoʻohuli i ke kelepona no ka pāʻani maikaʻi', chooseLang: 'E koho i kāu ʻōlelo', searchLang: 'ʻImi ʻōlelo…'
    },
    la: {
      idleSub: 'Elige ludum infra ▾', camOn: '📷 Camera', camOff: '📷 Sine camera',
      install: 'Applicationem institue', titleMine: 'Ludi mei KMM', titleFree: 'Plura ludi gratuiti',
      search: 'Quaere ludos…', all: 'Omnia', home: 'INDEX', play: 'Lude', open: 'Aperi',
      padConnected: 'Moderatrum coniunctum', freeBy: 'Ludus gratuitus ab', pasteGo: 'Onera',
      rotate: 'Verte telephonum ut melius ludas', chooseLang: 'Elige linguam', searchLang: 'Quaere linguam…'
    }
  };

  function detect() {
    try {
      var tags = navigator.languages || [navigator.language || 'en'];
      var codes = LANGS.map(function (l) { return l.code; });
      for (var i = 0; i < tags.length; i++) {
        var raw = (tags[i] || '').toLowerCase();
        if (raw.indexOf('zh') === 0 && (raw.indexOf('tw') > 0 || raw.indexOf('hant') > 0 || raw.indexOf('hk') > 0)) return 'zh-TW';
        var base = raw.slice(0, 2);
        if (raw === 'zh' || base === 'zh') return 'zh';
        for (var j = 0; j < codes.length; j++) if (codes[j] === base) return codes[j];
      }
    } catch (e) {}
    return 'en';
  }

  function stored() {
    try {
      var v = localStorage.getItem('arcade.lang');
      return v && STR[v] ? v : (v && STR[v.slice(0, 2)] ? v.slice(0, 2) : null);
    } catch (e) { return null; }
  }

  function isRTL(code) { for (var i = 0; i < LANGS.length; i++) if (LANGS[i].code === code) return LANGS[i].rtl; return false; }

  function get(code) {
    var merged = {};
    for (var k in EN) merged[k] = EN[k];
    var o = STR[code] || {};
    for (var k2 in o) if (o[k2] != null) merged[k2] = o[k2];
    return merged;
  }

  window.CONSOLA_I18N = {
    LANGS: LANGS, STR: STR, get: get, detect: detect, stored: stored, isRTL: isRTL,
    pick: function () { return stored() || detect(); }
  };
})();
