// Localization for Simon — same shared contract as the dashboard: reads the
// `arcade.lang` key set by the launcher (and a `?lang=xx` URL override), so the
// game opens in the language the arcade is in. A small in-game <select> lets you
// change it too. "Simon" itself is a name and stays untranslated.

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

// Best-effort BCP-47 tags for speech synthesis of the spoken commands.
export const SPEECH_LANG: Record<Lang, string> = {
  es: 'es-ES',
  en: 'en-US',
  pt: 'pt-BR',
  fr: 'fr-FR',
  de: 'de-DE',
  it: 'it-IT',
  zh: 'zh-CN',
  ja: 'ja-JP',
  ar: 'ar-SA'
};

export type S = {
  langLabel: string;
  eyebrow: string;
  modeAria: string;
  classicName: string;
  classicDesc: string;
  saysName: string;
  saysDesc: string;
  copyClassic: string;
  copySays: string;
  noPlayers: string;
  remove: (n: string) => string;
  addPlaceholder: string;
  add: string;
  startWith: (mode: string) => string;
  playingAs: string;
  best: string;
  stop: string;
  score: string;
  round: string;
  turn: string;
  turnWait: string;
  turnListen: string;
  turnWatch: string;
  turnGo: string;
  readyToObey: string;
  listening: string;
  doingIt: string;
  goodDidntSay: string;
  outDidntSay: string;
  cmdWait: string;
  simonSays: string;
  hubSays: string;
  hubSimon: string;
  gameOver: string;
  newBest: string;
  niceRun: string;
  survived: string;
  reached: string;
  playAgain: string;
  menu: string;
  hintSays: string;
  hintWatch: string;
  hintRepeat: string;
  // Twelve action commands, indexed to match the ACTIONS list in App.tsx.
  actions: string[];
};

export const STR: Record<Lang, S> = {
  es: {
    langLabel: 'Idioma', eyebrow: 'Arcade Premium', modeAria: 'Modo de juego',
    classicName: 'Clásico', classicDesc: 'Repite la secuencia',
    saysName: 'Simón dice', saysDesc: 'Obedece solo si “Simón dice”',
    copyClassic: 'Observa la secuencia que brilla y luego repítela. Crece cada ronda.',
    copySays: 'Simón nombra una acción, ¡pero tócala solo si empieza con “Simón dice”!',
    noPlayers: 'Aún no hay jugadores: añade uno abajo.', remove: (n) => `Quitar ${n}`,
    addPlaceholder: 'Añadir un nombre', add: '+ Añadir', startWith: (m) => `▶ Empezar ${m}`,
    playingAs: 'Juegas como', best: 'Mejor', stop: '■ Parar', score: 'Puntos', round: 'Ronda',
    turn: 'Turno', turnWait: 'Espera', turnListen: '¡Escucha!', turnWatch: 'Mira', turnGo: '¡Ya!',
    readyToObey: 'Listo para obedecer', listening: '…escuchando…', doingIt: '¡Lo hago! 🎉',
    goodDidntSay: 'Bien: ¡Simón no lo dijo! ✅', outDidntSay: '¡Fuera! Simón no lo dijo. ❌',
    cmdWait: '…escucha…', simonSays: 'Simón dice', hubSays: 'Dice', hubSimon: 'Simón',
    gameOver: 'Fin del juego', newBest: '¡Nuevo récord! 🎉', niceRun: '¡Buena partida!',
    survived: 'Superadas', reached: 'Alcanzado', playAgain: '↻ Jugar de nuevo', menu: '‹ Menú',
    hintSays: '¡Hazlo solo cuando Simón lo diga! · toca la acción o pulsa 1 2 3 4 · Mando 🎮',
    hintWatch: 'Observa con atención…',
    hintRepeat: 'Repite la secuencia · toca los pads o pulsa 1 2 3 4 · Mando 🎮',
    actions: ['ve a la piscina', 'haz una voltereta', 'haz una reverencia', 'corre en el sitio',
      'baila', 'levanta los brazos', 'tócate los pies', 'saluda', 'arrodíllate', 'levanta pesas',
      'da una vuelta', 'camina en el sitio']
  },
  en: {
    langLabel: 'Language', eyebrow: 'Premium Arcade', modeAria: 'Game mode',
    classicName: 'Classic', classicDesc: 'Repeat the sequence',
    saysName: 'Simon Says', saysDesc: 'Obey only “Simon says”',
    copyClassic: 'Watch the glowing sequence, then repeat it back. It gets longer each round.',
    copySays: 'Simon calls out a pad — but only tap it when it starts with “Simon says”!',
    noPlayers: 'No players yet — add one below.', remove: (n) => `Remove ${n}`,
    addPlaceholder: 'Add a new name', add: '+ Add', startWith: (m) => `▶ Start ${m}`,
    playingAs: 'Playing as', best: 'Best', stop: '■ Stop', score: 'Score', round: 'Round',
    turn: 'Turn', turnWait: 'Wait', turnListen: 'Listen!', turnWatch: 'Watch', turnGo: 'Go!',
    readyToObey: 'Ready to obey', listening: '…listening…', doingIt: 'Doing it! 🎉',
    goodDidntSay: 'Good — Simon didn’t say! ✅', outDidntSay: 'Out! Simon didn’t say. ❌',
    cmdWait: '…listen…', simonSays: 'Simon says', hubSays: 'Says', hubSimon: 'Simon',
    gameOver: 'Game over', newBest: 'New best! 🎉', niceRun: 'Nice run',
    survived: 'Survived', reached: 'Reached', playAgain: '↻ Play again', menu: '‹ Menu',
    hintSays: 'Only do it when Simon says! · tap the action or press 1 2 3 4 · Gamepad 🎮',
    hintWatch: 'Watch closely…',
    hintRepeat: 'Repeat the sequence · tap the pads or press 1 2 3 4 · Gamepad 🎮',
    actions: ['go to the pool', 'do a cartwheel', 'take a bow', 'run in place', 'dance',
      'raise your arms', 'touch your toes', 'wave hello', 'kneel down', 'lift weights',
      'spin around', 'walk in place']
  },
  pt: {
    langLabel: 'Idioma', eyebrow: 'Arcade Premium', modeAria: 'Modo de jogo',
    classicName: 'Clássico', classicDesc: 'Repita a sequência',
    saysName: 'Simon diz', saysDesc: 'Obedeça só se “Simon diz”',
    copyClassic: 'Observe a sequência que brilha e depois repita. Ela cresce a cada rodada.',
    copySays: 'Simon anuncia uma ação — mas só toque quando começar com “Simon diz”!',
    noPlayers: 'Ainda não há jogadores — adicione um abaixo.', remove: (n) => `Remover ${n}`,
    addPlaceholder: 'Adicionar um nome', add: '+ Adicionar', startWith: (m) => `▶ Começar ${m}`,
    playingAs: 'Jogando como', best: 'Melhor', stop: '■ Parar', score: 'Pontos', round: 'Rodada',
    turn: 'Vez', turnWait: 'Espere', turnListen: 'Ouça!', turnWatch: 'Observe', turnGo: 'Vai!',
    readyToObey: 'Pronto para obedecer', listening: '…ouvindo…', doingIt: 'Fazendo! 🎉',
    goodDidntSay: 'Boa — Simon não disse! ✅', outDidntSay: 'Fora! Simon não disse. ❌',
    cmdWait: '…ouça…', simonSays: 'Simon diz', hubSays: 'Diz', hubSimon: 'Simon',
    gameOver: 'Fim de jogo', newBest: 'Novo recorde! 🎉', niceRun: 'Boa partida',
    survived: 'Sobreviveu', reached: 'Alcançado', playAgain: '↻ Jogar de novo', menu: '‹ Menu',
    hintSays: 'Só faça quando Simon disser! · toque a ação ou pressione 1 2 3 4 · Controle 🎮',
    hintWatch: 'Observe com atenção…',
    hintRepeat: 'Repita a sequência · toque os pads ou pressione 1 2 3 4 · Controle 🎮',
    actions: ['vá à piscina', 'dê uma cambalhota', 'faça uma reverência', 'corra no lugar',
      'dance', 'levante os braços', 'toque os pés', 'acene olá', 'ajoelhe-se', 'levante pesos',
      'gire', 'ande no lugar']
  },
  fr: {
    langLabel: 'Langue', eyebrow: 'Arcade Premium', modeAria: 'Mode de jeu',
    classicName: 'Classique', classicDesc: 'Répète la séquence',
    saysName: 'Jacques a dit', saysDesc: 'Obéis seulement si “Simon dit”',
    copyClassic: 'Regarde la séquence lumineuse, puis répète-la. Elle s’allonge à chaque tour.',
    copySays: 'Simon annonce une action — mais ne la fais que si ça commence par “Simon dit” !',
    noPlayers: 'Aucun joueur — ajoutes-en un ci-dessous.', remove: (n) => `Retirer ${n}`,
    addPlaceholder: 'Ajouter un nom', add: '+ Ajouter', startWith: (m) => `▶ Jouer ${m}`,
    playingAs: 'Tu joues en tant que', best: 'Meilleur', stop: '■ Arrêter', score: 'Score', round: 'Tour',
    turn: 'Tour', turnWait: 'Attends', turnListen: 'Écoute !', turnWatch: 'Regarde', turnGo: 'Vas-y !',
    readyToObey: 'Prêt à obéir', listening: '…écoute…', doingIt: 'Je le fais ! 🎉',
    goodDidntSay: 'Bien — Simon n’a pas dit ! ✅', outDidntSay: 'Éliminé ! Simon n’a pas dit. ❌',
    cmdWait: '…écoute…', simonSays: 'Simon dit', hubSays: 'Dit', hubSimon: 'Simon',
    gameOver: 'Partie terminée', newBest: 'Nouveau record ! 🎉', niceRun: 'Belle partie',
    survived: 'Survécus', reached: 'Atteint', playAgain: '↻ Rejouer', menu: '‹ Menu',
    hintSays: 'Fais-le seulement si Simon dit ! · touche l’action ou appuie sur 1 2 3 4 · Manette 🎮',
    hintWatch: 'Regarde bien…',
    hintRepeat: 'Répète la séquence · touche les pads ou appuie sur 1 2 3 4 · Manette 🎮',
    actions: ['va à la piscine', 'fais la roue', 'fais une révérence', 'cours sur place',
      'danse', 'lève les bras', 'touche tes orteils', 'fais coucou', 'mets-toi à genoux',
      'soulève des poids', 'tourne sur toi-même', 'marche sur place']
  },
  de: {
    langLabel: 'Sprache', eyebrow: 'Premium-Arcade', modeAria: 'Spielmodus',
    classicName: 'Klassisch', classicDesc: 'Wiederhole die Folge',
    saysName: 'Simon sagt', saysDesc: 'Gehorche nur bei “Simon sagt”',
    copyClassic: 'Sieh dir die leuchtende Folge an und wiederhole sie. Sie wird jede Runde länger.',
    copySays: 'Simon ruft eine Aktion — tipp aber nur, wenn es mit “Simon sagt” beginnt!',
    noPlayers: 'Noch keine Spieler — unten einen hinzufügen.', remove: (n) => `${n} entfernen`,
    addPlaceholder: 'Namen hinzufügen', add: '+ Hinzu', startWith: (m) => `▶ ${m} starten`,
    playingAs: 'Du spielst als', best: 'Beste', stop: '■ Stopp', score: 'Punkte', round: 'Runde',
    turn: 'Zug', turnWait: 'Warte', turnListen: 'Hör zu!', turnWatch: 'Schau', turnGo: 'Los!',
    readyToObey: 'Bereit zu gehorchen', listening: '…hört zu…', doingIt: 'Mach ich! 🎉',
    goodDidntSay: 'Gut — Simon hat’s nicht gesagt! ✅', outDidntSay: 'Raus! Simon hat’s nicht gesagt. ❌',
    cmdWait: '…hör zu…', simonSays: 'Simon sagt', hubSays: 'Sagt', hubSimon: 'Simon',
    gameOver: 'Vorbei', newBest: 'Neuer Rekord! 🎉', niceRun: 'Gut gespielt',
    survived: 'Überlebt', reached: 'Erreicht', playAgain: '↻ Nochmal', menu: '‹ Menü',
    hintSays: 'Nur wenn Simon sagt! · tippe die Aktion oder drücke 1 2 3 4 · Controller 🎮',
    hintWatch: 'Genau hinsehen…',
    hintRepeat: 'Wiederhole die Folge · tippe die Pads oder drücke 1 2 3 4 · Controller 🎮',
    actions: ['geh ins Schwimmbad', 'schlag ein Rad', 'verbeuge dich', 'lauf auf der Stelle',
      'tanz', 'heb die Arme', 'berühr deine Zehen', 'wink hallo', 'knie dich hin',
      'stemm Gewichte', 'dreh dich', 'geh auf der Stelle']
  },
  it: {
    langLabel: 'Lingua', eyebrow: 'Arcade Premium', modeAria: 'Modalità di gioco',
    classicName: 'Classico', classicDesc: 'Ripeti la sequenza',
    saysName: 'Simon dice', saysDesc: 'Obbedisci solo se “Simon dice”',
    copyClassic: 'Guarda la sequenza che si illumina, poi ripetila. Cresce a ogni round.',
    copySays: 'Simon annuncia un’azione — ma toccala solo se inizia con “Simon dice”!',
    noPlayers: 'Ancora nessun giocatore — aggiungine uno sotto.', remove: (n) => `Rimuovi ${n}`,
    addPlaceholder: 'Aggiungi un nome', add: '+ Aggiungi', startWith: (m) => `▶ Inizia ${m}`,
    playingAs: 'Giochi come', best: 'Migliore', stop: '■ Ferma', score: 'Punti', round: 'Round',
    turn: 'Turno', turnWait: 'Aspetta', turnListen: 'Ascolta!', turnWatch: 'Guarda', turnGo: 'Via!',
    readyToObey: 'Pronto a obbedire', listening: '…in ascolto…', doingIt: 'Lo faccio! 🎉',
    goodDidntSay: 'Bene — Simon non l’ha detto! ✅', outDidntSay: 'Fuori! Simon non l’ha detto. ❌',
    cmdWait: '…ascolta…', simonSays: 'Simon dice', hubSays: 'Dice', hubSimon: 'Simon',
    gameOver: 'Partita finita', newBest: 'Nuovo record! 🎉', niceRun: 'Bella partita',
    survived: 'Superati', reached: 'Raggiunto', playAgain: '↻ Rigioca', menu: '‹ Menu',
    hintSays: 'Fallo solo se Simon dice! · tocca l’azione o premi 1 2 3 4 · Controller 🎮',
    hintWatch: 'Guarda bene…',
    hintRepeat: 'Ripeti la sequenza · tocca i pad o premi 1 2 3 4 · Controller 🎮',
    actions: ['vai in piscina', 'fai una ruota', 'fai un inchino', 'corri sul posto',
      'balla', 'alza le braccia', 'tocca i piedi', 'saluta', 'inginocchiati', 'solleva i pesi',
      'gira su te stesso', 'cammina sul posto']
  },
  zh: {
    langLabel: '语言', eyebrow: '精品街机', modeAria: '游戏模式',
    classicName: '经典', classicDesc: '重复这个序列',
    saysName: '西蒙说', saysDesc: '只有“西蒙说”时才照做',
    copyClassic: '观看发光的序列，然后重复它。每一轮都会变长。',
    copySays: '西蒙念出一个动作 —— 但只有以“西蒙说”开头时才点它！',
    noPlayers: '还没有玩家 —— 在下面添加一个。', remove: (n) => `移除 ${n}`,
    addPlaceholder: '添加新名字', add: '+ 添加', startWith: (m) => `▶ 开始${m}`,
    playingAs: '当前玩家', best: '最佳', stop: '■ 停止', score: '分数', round: '回合',
    turn: '轮到', turnWait: '等待', turnListen: '听！', turnWatch: '观看', turnGo: '开始！',
    readyToObey: '准备照做', listening: '…聆听中…', doingIt: '照做！🎉',
    goodDidntSay: '很好 —— 西蒙没说！✅', outDidntSay: '出局！西蒙没说。❌',
    cmdWait: '…听…', simonSays: '西蒙说', hubSays: '说', hubSimon: '西蒙',
    gameOver: '游戏结束', newBest: '新纪录！🎉', niceRun: '打得不错',
    survived: '坚持了', reached: '达到', playAgain: '↻ 再玩一次', menu: '‹ 菜单',
    hintSays: '只有西蒙说时才做！· 点击动作或按 1 2 3 4 · 手柄 🎮',
    hintWatch: '仔细观看…',
    hintRepeat: '重复序列 · 点击色块或按 1 2 3 4 · 手柄 🎮',
    actions: ['去游泳', '侧手翻', '鞠躬', '原地跑步', '跳舞', '举起双臂', '摸脚趾', '挥手问好',
      '跪下', '举重', '转个圈', '原地走']
  },
  ja: {
    langLabel: '言語', eyebrow: 'プレミアム アーケード', modeAria: 'ゲームモード',
    classicName: 'クラシック', classicDesc: '順番を再現しよう',
    saysName: 'サイモンが言う', saysDesc: '「サイモンが言う」ときだけ従う',
    copyClassic: '光る順番を見て、そのまま再現しよう。ラウンドごとに長くなるよ。',
    copySays: 'サイモンが動作を告げる —— でも「サイモンが言う」で始まるときだけタップ！',
    noPlayers: 'まだプレイヤーがいません — 下で追加。', remove: (n) => `${n} を削除`,
    addPlaceholder: '名前を追加', add: '+ 追加', startWith: (m) => `▶ ${m}を開始`,
    playingAs: 'プレイヤー', best: 'ベスト', stop: '■ 停止', score: 'スコア', round: 'ラウンド',
    turn: 'ターン', turnWait: '待って', turnListen: '聞いて！', turnWatch: '見て', turnGo: 'どうぞ！',
    readyToObey: '従う準備OK', listening: '…聞いてる…', doingIt: 'やってる！🎉',
    goodDidntSay: 'よし — サイモンは言ってない！✅', outDidntSay: 'アウト！サイモンは言ってない。❌',
    cmdWait: '…聞いて…', simonSays: 'サイモンが言う', hubSays: '言う', hubSimon: 'サイモン',
    gameOver: 'ゲームオーバー', newBest: '自己ベスト更新！🎉', niceRun: 'ナイスプレイ',
    survived: '生き残り', reached: '到達', playAgain: '↻ もう一度', menu: '‹ メニュー',
    hintSays: 'サイモンが言うときだけ！· 動作をタップか 1 2 3 4 · ゲームパッド 🎮',
    hintWatch: 'よく見て…',
    hintRepeat: '順番を再現 · パッドをタップか 1 2 3 4 · ゲームパッド 🎮',
    actions: ['プールに行く', '側転する', 'お辞儀する', 'その場で走る', '踊る', '腕を上げる',
      'つま先を触る', '手を振る', 'ひざまずく', '重りを持ち上げる', '回転する', 'その場で歩く']
  },
  ar: {
    langLabel: 'اللغة', eyebrow: 'أركيد بريميوم', modeAria: 'وضع اللعب',
    classicName: 'كلاسيكي', classicDesc: 'كرّر التسلسل',
    saysName: 'سيمون يقول', saysDesc: 'أطع فقط إذا قال “سيمون يقول”',
    copyClassic: 'شاهد التسلسل المتوهّج ثم كرّره. يطول في كل جولة.',
    copySays: 'سيمون ينادي بحركة — لكن المسها فقط إذا بدأت بـ“سيمون يقول”!',
    noPlayers: 'لا لاعبين بعد — أضف واحدًا بالأسفل.', remove: (n) => `أزل ${n}`,
    addPlaceholder: 'أضف اسمًا جديدًا', add: '+ أضف', startWith: (m) => `▶ ابدأ ${m}`,
    playingAs: 'تلعب باسم', best: 'الأفضل', stop: '■ إيقاف', score: 'النقاط', round: 'الجولة',
    turn: 'الدور', turnWait: 'انتظر', turnListen: 'أنصت!', turnWatch: 'شاهد', turnGo: 'هيّا!',
    readyToObey: 'جاهز للطاعة', listening: '…يستمع…', doingIt: 'أفعلها! 🎉',
    goodDidntSay: 'أحسنت — سيمون لم يقل! ✅', outDidntSay: 'خرجت! سيمون لم يقل. ❌',
    cmdWait: '…أنصت…', simonSays: 'سيمون يقول', hubSays: 'يقول', hubSimon: 'سيمون',
    gameOver: 'انتهت اللعبة', newBest: 'رقم قياسي جديد! 🎉', niceRun: 'جولة رائعة',
    survived: 'صمدت', reached: 'بلغت', playAgain: '↻ العب مجددًا', menu: '‹ القائمة',
    hintSays: 'افعلها فقط عندما يقول سيمون! · المس الحركة أو اضغط 1 2 3 4 · يد تحكم 🎮',
    hintWatch: 'راقب جيدًا…',
    hintRepeat: 'كرّر التسلسل · المس اللوحات أو اضغط 1 2 3 4 · يد تحكم 🎮',
    actions: ['اذهب إلى المسبح', 'اعمل شقلبة', 'انحنِ', 'اركض في مكانك', 'ارقص', 'ارفع ذراعيك',
      'المس أصابع قدميك', 'لوّح مرحبًا', 'اركع', 'ارفع الأثقال', 'لف حول نفسك', 'امشِ في مكانك']
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
