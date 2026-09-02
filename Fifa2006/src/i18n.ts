// Localization for the FIFA arcade football game — shared arcade contract (reads
// `arcade.lang` + `?lang=` override). "FIFA" stays untranslated.

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
  langLabel: string;
  eyebrow: string;
  heroCopy: string;
  live: string;
  players: string;
  noPlayers: string;
  remove: (n: string) => string;
  addPlaceholder: string;
  add: string;
  start: string;
  playingAs: string;
  best: string;
  you: string;
  cpu: string;
  score: string;
  goal: string;
  time: string;
  stop: string;
  go: string;
  finish: string;
  won: string;
  playAgain: string;
  menu: string;
  hint: string;
};

export const STR: Record<Lang, S> = {
  es: {
    langLabel: 'Idioma', eyebrow: 'Arcade Premium', heroCopy: 'Elige jugador, salta al césped y marca más goles que la máquina.',
    live: 'En directo', players: 'Jugadores', noPlayers: 'Aún no hay jugadores: añade uno abajo.', remove: (n) => `Quitar ${n}`,
    addPlaceholder: 'Añadir un nombre', add: '+ Añadir', start: '▶ Jugar', playingAs: 'Juegas como', best: 'Mejor marca',
    you: 'Tú', cpu: 'CPU', score: 'Marcador', goal: '¡GOL!', time: 'Tiempo', stop: '■ Salir', go: '¡YA!', finish: 'Final',
    won: '¡Has ganado! 🏆', playAgain: '↻ Jugar otra vez', menu: '‹ Menú',
    hint: 'Flechas/WASD para moverte · Espacio para chutar · o el mando 🎮'
  },
  en: {
    langLabel: 'Language', eyebrow: 'Premium Arcade', heroCopy: 'Pick a player, take to the pitch and outscore the machine.',
    live: 'Live', players: 'Players', noPlayers: 'No players yet — add one below.', remove: (n) => `Remove ${n}`,
    addPlaceholder: 'Add a new name', add: '+ Add', start: '▶ Play', playingAs: 'Playing as', best: 'Best',
    you: 'You', cpu: 'CPU', score: 'Score', goal: 'GOAL!', time: 'Time', stop: '■ Exit', go: 'GO!', finish: 'Full time',
    won: 'You won! 🏆', playAgain: '↻ Play again', menu: '‹ Menu',
    hint: 'Arrow keys / WASD to move · Space to shoot · or a gamepad 🎮'
  },
  pt: {
    langLabel: 'Idioma', eyebrow: 'Arcade Premium', heroCopy: 'Escolha um jogador, entre em campo e marque mais que a máquina.',
    live: 'No ar', players: 'Jogadores', noPlayers: 'Ainda não há jogadores — adicione um abaixo.', remove: (n) => `Remover ${n}`,
    addPlaceholder: 'Adicionar um nome', add: '+ Adicionar', start: '▶ Jogar', playingAs: 'Jogando como', best: 'Recorde',
    you: 'Você', cpu: 'CPU', score: 'Placar', goal: 'GOL!', time: 'Tempo', stop: '■ Sair', go: 'JÁ!', finish: 'Fim de jogo',
    won: 'Você venceu! 🏆', playAgain: '↻ Jogar de novo', menu: '‹ Menu',
    hint: 'Setas / WASD para mover · Espaço para chutar · ou o controle 🎮'
  },
  fr: {
    langLabel: 'Langue', eyebrow: 'Arcade Premium', heroCopy: 'Choisis un joueur, entre sur le terrain et marque plus que la machine.',
    live: 'En ligne', players: 'Joueurs', noPlayers: 'Aucun joueur — ajoutes-en un ci-dessous.', remove: (n) => `Retirer ${n}`,
    addPlaceholder: 'Ajouter un nom', add: '+ Ajouter', start: '▶ Jouer', playingAs: 'Tu joues', best: 'Record',
    you: 'Toi', cpu: 'CPU', score: 'Score', goal: 'BUT !', time: 'Temps', stop: '■ Quitter', go: 'PARTEZ !', finish: 'Fin du match',
    won: 'Gagné ! 🏆', playAgain: '↻ Rejouer', menu: '‹ Menu',
    hint: 'Flèches / WASD pour bouger · Espace pour tirer · ou une manette 🎮'
  },
  de: {
    langLabel: 'Sprache', eyebrow: 'Premium-Arcade', heroCopy: 'Wähle einen Spieler, betritt den Rasen und triff öfter als die Maschine.',
    live: 'Live', players: 'Spieler', noPlayers: 'Noch keine Spieler — unten einen hinzufügen.', remove: (n) => `${n} entfernen`,
    addPlaceholder: 'Namen hinzufügen', add: '+ Hinzu', start: '▶ Spielen', playingAs: 'Du spielst als', best: 'Rekord',
    you: 'Du', cpu: 'CPU', score: 'Stand', goal: 'TOR!', time: 'Zeit', stop: '■ Verlassen', go: 'LOS!', finish: 'Schluss',
    won: 'Gewonnen! 🏆', playAgain: '↻ Nochmal', menu: '‹ Menü',
    hint: 'Pfeile / WASD zum Bewegen · Leertaste zum Schießen · oder ein Controller 🎮'
  },
  it: {
    langLabel: 'Lingua', eyebrow: 'Arcade Premium', heroCopy: 'Scegli un giocatore, scendi in campo e segna più della macchina.',
    live: 'Attivo', players: 'Giocatori', noPlayers: 'Ancora nessun giocatore — aggiungine uno sotto.', remove: (n) => `Rimuovi ${n}`,
    addPlaceholder: 'Aggiungi un nome', add: '+ Aggiungi', start: '▶ Gioca', playingAs: 'Giochi come', best: 'Record',
    you: 'Tu', cpu: 'CPU', score: 'Punteggio', goal: 'GOL!', time: 'Tempo', stop: '■ Esci', go: 'VIA!', finish: 'Fine partita',
    won: 'Hai vinto! 🏆', playAgain: '↻ Rigioca', menu: '‹ Menu',
    hint: 'Frecce / WASD per muoverti · Spazio per tirare · o un controller 🎮'
  },
  zh: {
    langLabel: '语言', eyebrow: '精品街机', heroCopy: '选好球员，踏上球场，比电脑打进更多球。',
    live: '在线', players: '球员', noPlayers: '还没有球员 —— 在下面添加一个。', remove: (n) => `移除 ${n}`,
    addPlaceholder: '添加新名字', add: '+ 添加', start: '▶ 开球', playingAs: '你扮演', best: '最佳',
    you: '你', cpu: '电脑', score: '比分', goal: '进球！', time: '时间', stop: '■ 退出', go: '开始！', finish: '全场结束',
    won: '你赢了！🏆', playAgain: '↻ 再玩一次', menu: '‹ 菜单',
    hint: '方向键 / WASD 移动 · 空格射门 · 或用手柄 🎮'
  },
  ja: {
    langLabel: '言語', eyebrow: 'プレミアム アーケード', heroCopy: '選手を選んでピッチに立ち、CPUより多くゴールを決めよう。',
    live: 'オンライン', players: '選手', noPlayers: 'まだ選手がいません — 下で追加。', remove: (n) => `${n} を削除`,
    addPlaceholder: '名前を追加', add: '+ 追加', start: '▶ プレイ', playingAs: 'プレイヤー', best: 'ベスト',
    you: 'あなた', cpu: 'CPU', score: 'スコア', goal: 'ゴール！', time: 'タイム', stop: '■ 退出', go: 'スタート！', finish: '試合終了',
    won: '勝利！🏆', playAgain: '↻ もう一度', menu: '‹ メニュー',
    hint: '矢印 / WASD で移動 · スペースでシュート · またはゲームパッド 🎮'
  },
  ar: {
    langLabel: 'اللغة', eyebrow: 'أركيد بريميوم', heroCopy: 'اختر لاعبًا، وادخل الملعب، وسجّل أكثر من الحاسوب.',
    live: 'مباشر', players: 'اللاعبون', noPlayers: 'لا لاعبين بعد — أضف واحدًا بالأسفل.', remove: (n) => `أزل ${n}`,
    addPlaceholder: 'أضف اسمًا جديدًا', add: '+ أضف', start: '▶ العب', playingAs: 'تلعب باسم', best: 'الأفضل',
    you: 'أنت', cpu: 'الحاسوب', score: 'النتيجة', goal: '!هدف', time: 'الوقت', stop: '■ خروج', go: '!انطلق', finish: 'نهاية المباراة',
    won: '🏆 !لقد فزت', playAgain: '↻ العب مجددًا', menu: '‹ القائمة',
    hint: 'الأسهم / WASD للتحرك · مسافة للتسديد · أو يد التحكم 🎮'
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
