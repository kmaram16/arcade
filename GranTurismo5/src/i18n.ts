// Localization for the Gran Turismo racer — shared arcade contract (reads
// `arcade.lang` + `?lang=` override). "Gran Turismo" stays untranslated.

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
  carColor: string;
  start: string;
  playingAs: string;
  bestLap: string;
  lap: string;
  pos: string;
  time: string;
  stop: string;
  go: string;
  finish: string;
  finishPos: (p: number) => string;
  won: string;
  playAgain: string;
  menu: string;
  hint: string;
};

const ORD = (p: number, one: string, two: string, three: string, rest: string) =>
  p === 1 ? one : p === 2 ? two : p === 3 ? three : `${p}${rest}`;

export const STR: Record<Lang, S> = {
  es: {
    langLabel: 'Idioma', eyebrow: 'Arcade Premium', heroCopy: 'Elige piloto y color, y sal a por la primera posición.',
    live: 'En directo', players: 'Pilotos', noPlayers: 'Aún no hay pilotos: añade uno abajo.', remove: (n) => `Quitar ${n}`,
    addPlaceholder: 'Añadir un nombre', add: '+ Añadir', carColor: 'Color del coche', start: '▶ Correr',
    playingAs: 'Pilotas como', bestLap: 'Mejor vuelta', lap: 'Vuelta', pos: 'Puesto', time: 'Tiempo', stop: '■ Salir',
    go: '¡YA!', finish: '¡Meta!', finishPos: (p) => `${p}º`, won: '¡Has ganado! 🏆', playAgain: '↻ Correr otra vez', menu: '‹ Menú',
    hint: 'Flechas/WASD para conducir · o el mando 🎮'
  },
  en: {
    langLabel: 'Language', eyebrow: 'Premium Arcade', heroCopy: 'Pick a driver and a color, then race for first place.',
    live: 'Live', players: 'Drivers', noPlayers: 'No drivers yet — add one below.', remove: (n) => `Remove ${n}`,
    addPlaceholder: 'Add a new name', add: '+ Add', carColor: 'Car color', start: '▶ Race',
    playingAs: 'Racing as', bestLap: 'Best lap', lap: 'Lap', pos: 'Pos', time: 'Time', stop: '■ Exit',
    go: 'GO!', finish: 'Finish!', finishPos: (p) => ORD(p, '1st', '2nd', '3rd', 'th'), won: 'You won! 🏆', playAgain: '↻ Race again', menu: '‹ Menu',
    hint: 'Arrow keys / WASD to drive · or a gamepad 🎮'
  },
  pt: {
    langLabel: 'Idioma', eyebrow: 'Arcade Premium', heroCopy: 'Escolha piloto e cor e corra pela primeira posição.',
    live: 'No ar', players: 'Pilotos', noPlayers: 'Ainda não há pilotos — adicione um abaixo.', remove: (n) => `Remover ${n}`,
    addPlaceholder: 'Adicionar um nome', add: '+ Adicionar', carColor: 'Cor do carro', start: '▶ Correr',
    playingAs: 'Pilotando como', bestLap: 'Melhor volta', lap: 'Volta', pos: 'Pos', time: 'Tempo', stop: '■ Sair',
    go: 'JÁ!', finish: 'Chegada!', finishPos: (p) => `${p}º`, won: 'Você venceu! 🏆', playAgain: '↻ Correr de novo', menu: '‹ Menu',
    hint: 'Setas / WASD para dirigir · ou o controle 🎮'
  },
  fr: {
    langLabel: 'Langue', eyebrow: 'Arcade Premium', heroCopy: 'Choisis un pilote et une couleur, puis vise la première place.',
    live: 'En ligne', players: 'Pilotes', noPlayers: 'Aucun pilote — ajoutes-en un ci-dessous.', remove: (n) => `Retirer ${n}`,
    addPlaceholder: 'Ajouter un nom', add: '+ Ajouter', carColor: 'Couleur de la voiture', start: '▶ Courir',
    playingAs: 'Pilote', bestLap: 'Meilleur tour', lap: 'Tour', pos: 'Pos', time: 'Temps', stop: '■ Quitter',
    go: 'PARTEZ !', finish: 'Arrivée !', finishPos: (p) => (p === 1 ? '1er' : `${p}e`), won: 'Gagné ! 🏆', playAgain: '↻ Recourir', menu: '‹ Menu',
    hint: 'Flèches / WASD pour conduire · ou une manette 🎮'
  },
  de: {
    langLabel: 'Sprache', eyebrow: 'Premium-Arcade', heroCopy: 'Wähle Fahrer und Farbe und fahr um den ersten Platz.',
    live: 'Live', players: 'Fahrer', noPlayers: 'Noch keine Fahrer — unten einen hinzufügen.', remove: (n) => `${n} entfernen`,
    addPlaceholder: 'Namen hinzufügen', add: '+ Hinzu', carColor: 'Autofarbe', start: '▶ Rennen',
    playingAs: 'Fahrer', bestLap: 'Beste Runde', lap: 'Runde', pos: 'Pos', time: 'Zeit', stop: '■ Verlassen',
    go: 'LOS!', finish: 'Ziel!', finishPos: (p) => `${p}.`, won: 'Gewonnen! 🏆', playAgain: '↻ Nochmal', menu: '‹ Menü',
    hint: 'Pfeile / WASD zum Fahren · oder ein Controller 🎮'
  },
  it: {
    langLabel: 'Lingua', eyebrow: 'Arcade Premium', heroCopy: 'Scegli pilota e colore, poi corri per la prima posizione.',
    live: 'Attivo', players: 'Piloti', noPlayers: 'Ancora nessun pilota — aggiungine uno sotto.', remove: (n) => `Rimuovi ${n}`,
    addPlaceholder: 'Aggiungi un nome', add: '+ Aggiungi', carColor: 'Colore auto', start: '▶ Corri',
    playingAs: 'Pilota', bestLap: 'Giro migliore', lap: 'Giro', pos: 'Pos', time: 'Tempo', stop: '■ Esci',
    go: 'VIA!', finish: 'Traguardo!', finishPos: (p) => `${p}º`, won: 'Hai vinto! 🏆', playAgain: '↻ Ricorri', menu: '‹ Menu',
    hint: 'Frecce / WASD per guidare · o un controller 🎮'
  },
  zh: {
    langLabel: '语言', eyebrow: '精品街机', heroCopy: '选好车手和颜色，冲向第一名。',
    live: '在线', players: '车手', noPlayers: '还没有车手 —— 在下面添加一个。', remove: (n) => `移除 ${n}`,
    addPlaceholder: '添加新名字', add: '+ 添加', carColor: '车身颜色', start: '▶ 开赛',
    playingAs: '车手', bestLap: '最快单圈', lap: '圈', pos: '名次', time: '时间', stop: '■ 退出',
    go: '出发！', finish: '冲线！', finishPos: (p) => `第${p}名`, won: '你赢了！🏆', playAgain: '↻ 再赛一次', menu: '‹ 菜单',
    hint: '方向键 / WASD 驾驶 · 或用手柄 🎮'
  },
  ja: {
    langLabel: '言語', eyebrow: 'プレミアム アーケード', heroCopy: 'ドライバーと色を選んで、1位を目指そう。',
    live: 'オンライン', players: 'ドライバー', noPlayers: 'まだドライバーがいません — 下で追加。', remove: (n) => `${n} を削除`,
    addPlaceholder: '名前を追加', add: '+ 追加', carColor: '車の色', start: '▶ レース',
    playingAs: 'ドライバー', bestLap: 'ベストラップ', lap: 'ラップ', pos: '順位', time: 'タイム', stop: '■ 退出',
    go: 'スタート！', finish: 'ゴール！', finishPos: (p) => `${p}位`, won: '勝利！🏆', playAgain: '↻ もう一度', menu: '‹ メニュー',
    hint: '矢印 / WASD で運転 · またはゲームパッド 🎮'
  },
  ar: {
    langLabel: 'اللغة', eyebrow: 'أركيد بريميوم', heroCopy: 'اختر سائقًا ولونًا، ثم تسابق للمركز الأول.',
    live: 'مباشر', players: 'السائقون', noPlayers: 'لا سائقين بعد — أضف واحدًا بالأسفل.', remove: (n) => `أزل ${n}`,
    addPlaceholder: 'أضف اسمًا جديدًا', add: '+ أضف', carColor: 'لون السيارة', start: '▶ تسابق',
    playingAs: 'تقود باسم', bestLap: 'أفضل لفة', lap: 'لفة', pos: 'المركز', time: 'الوقت', stop: '■ خروج',
    go: '!انطلق', finish: '!النهاية', finishPos: (p) => `${p}`, won: '🏆 !لقد فزت', playAgain: '↻ تسابق مجددًا', menu: '‹ القائمة',
    hint: 'الأسهم / WASD للقيادة · أو يد التحكم 🎮'
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
