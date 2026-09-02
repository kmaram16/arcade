// Localization for the GTA: San Andreas city-driving arcade — shared arcade
// contract (reads `arcade.lang` + `?lang=` override). "GTA" stays untranslated.

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
  best: string;
  cash: string;
  time: string;
  objective: string;
  stop: string;
  go: string;
  finish: string;
  won: string;
  playAgain: string;
  menu: string;
  hint: string;
  camera: string;
  cams: string[];
};

export const STR: Record<Lang, S> = {
  es: {
    langLabel: 'Idioma', eyebrow: 'Arcade Premium', heroCopy: 'Elige piloto y color, y sal a las calles a por el dinero.',
    live: 'En directo', players: 'Pilotos', noPlayers: 'Aún no hay pilotos: añade uno abajo.', remove: (n) => `Quitar ${n}`,
    addPlaceholder: 'Añadir un nombre', add: '+ Añadir', carColor: 'Color del coche', start: '▶ Conducir',
    playingAs: 'Conduces como', best: 'Mejor botín', cash: 'Dinero', time: 'Tiempo', objective: 'Objetivo', stop: '■ Salir',
    go: '¡YA!', finish: '¡Tiempo!', won: '¡A cobrar! 🤑', playAgain: '↻ Otra vuelta', menu: '‹ Menú',
    hint: 'Flechas/WASD para conducir · o el mando 🎮',
    camera: 'Cámara', cams: ['Cabina', 'Persecución', 'Capó', 'Lejana', 'Cenital']
  },
  en: {
    langLabel: 'Language', eyebrow: 'Premium Arcade', heroCopy: 'Pick a driver and a color, then hit the streets and grab the cash.',
    live: 'Live', players: 'Drivers', noPlayers: 'No drivers yet — add one below.', remove: (n) => `Remove ${n}`,
    addPlaceholder: 'Add a new name', add: '+ Add', carColor: 'Car color', start: '▶ Drive',
    playingAs: 'Driving as', best: 'Best cash', cash: 'Cash', time: 'Time', objective: 'Target', stop: '■ Exit',
    go: 'GO!', finish: "Time's up!", won: 'Cashed out! 🤑', playAgain: '↻ Drive again', menu: '‹ Menu',
    hint: 'Arrow keys / WASD to drive · or a gamepad 🎮',
    camera: 'Camera', cams: ['Cockpit', 'Chase', 'Hood', 'Far', 'Top']
  },
  pt: {
    langLabel: 'Idioma', eyebrow: 'Arcade Premium', heroCopy: 'Escolha piloto e cor e vá às ruas atrás do dinheiro.',
    live: 'No ar', players: 'Pilotos', noPlayers: 'Ainda não há pilotos — adicione um abaixo.', remove: (n) => `Remover ${n}`,
    addPlaceholder: 'Adicionar um nome', add: '+ Adicionar', carColor: 'Cor do carro', start: '▶ Dirigir',
    playingAs: 'Dirigindo como', best: 'Melhor grana', cash: 'Dinheiro', time: 'Tempo', objective: 'Objetivo', stop: '■ Sair',
    go: 'JÁ!', finish: 'Tempo!', won: 'Faturou! 🤑', playAgain: '↻ Dirigir de novo', menu: '‹ Menu',
    hint: 'Setas / WASD para dirigir · ou o controle 🎮',
    camera: 'Câmera', cams: ['Cabine', 'Perseguição', 'Capô', 'Distante', 'Aérea']
  },
  fr: {
    langLabel: 'Langue', eyebrow: 'Arcade Premium', heroCopy: 'Choisis un pilote et une couleur, puis fonce dans les rues pour le fric.',
    live: 'En ligne', players: 'Pilotes', noPlayers: 'Aucun pilote — ajoutes-en un ci-dessous.', remove: (n) => `Retirer ${n}`,
    addPlaceholder: 'Ajouter un nom', add: '+ Ajouter', carColor: 'Couleur de la voiture', start: '▶ Conduire',
    playingAs: 'Au volant', best: 'Meilleur gain', cash: 'Argent', time: 'Temps', objective: 'Objectif', stop: '■ Quitter',
    go: 'PARTEZ !', finish: 'Terminé !', won: 'Encaissé ! 🤑', playAgain: '↻ Reconduire', menu: '‹ Menu',
    hint: 'Flèches / WASD pour conduire · ou une manette 🎮',
    camera: 'Caméra', cams: ['Cockpit', 'Poursuite', 'Capot', 'Éloignée', 'Dessus']
  },
  de: {
    langLabel: 'Sprache', eyebrow: 'Premium-Arcade', heroCopy: 'Wähle Fahrer und Farbe und jage in der Stadt das Geld.',
    live: 'Live', players: 'Fahrer', noPlayers: 'Noch keine Fahrer — unten einen hinzufügen.', remove: (n) => `${n} entfernen`,
    addPlaceholder: 'Namen hinzufügen', add: '+ Hinzu', carColor: 'Autofarbe', start: '▶ Losfahren',
    playingAs: 'Fahrer', best: 'Bestes Geld', cash: 'Geld', time: 'Zeit', objective: 'Ziel', stop: '■ Verlassen',
    go: 'LOS!', finish: 'Zeit!', won: 'Kasse gemacht! 🤑', playAgain: '↻ Nochmal', menu: '‹ Menü',
    hint: 'Pfeile / WASD zum Fahren · oder ein Controller 🎮',
    camera: 'Kamera', cams: ['Cockpit', 'Verfolgung', 'Haube', 'Weit', 'Oben']
  },
  it: {
    langLabel: 'Lingua', eyebrow: 'Arcade Premium', heroCopy: 'Scegli pilota e colore, poi vai per le strade a fare cassa.',
    live: 'Attivo', players: 'Piloti', noPlayers: 'Ancora nessun pilota — aggiungine uno sotto.', remove: (n) => `Rimuovi ${n}`,
    addPlaceholder: 'Aggiungi un nome', add: '+ Aggiungi', carColor: 'Colore auto', start: '▶ Guida',
    playingAs: 'Al volante', best: 'Miglior bottino', cash: 'Soldi', time: 'Tempo', objective: 'Obiettivo', stop: '■ Esci',
    go: 'VIA!', finish: 'Tempo!', won: 'Incassato! 🤑', playAgain: '↻ Ancora', menu: '‹ Menu',
    hint: 'Frecce / WASD per guidare · o un controller 🎮',
    camera: 'Camera', cams: ['Abitacolo', 'Inseguimento', 'Cofano', 'Lontana', 'Dall’alto']
  },
  zh: {
    langLabel: '语言', eyebrow: '精品街机', heroCopy: '选好车手和颜色，上街去捞现金。',
    live: '在线', players: '车手', noPlayers: '还没有车手 —— 在下面添加一个。', remove: (n) => `移除 ${n}`,
    addPlaceholder: '添加新名字', add: '+ 添加', carColor: '车身颜色', start: '▶ 开车',
    playingAs: '车手', best: '最高现金', cash: '现金', time: '时间', objective: '目标', stop: '■ 退出',
    go: '出发！', finish: '时间到！', won: '大丰收！🤑', playAgain: '↻ 再来一次', menu: '‹ 菜单',
    hint: '方向键 / WASD 驾驶 · 或用手柄 🎮',
    camera: '镜头', cams: ['驾驶舱', '追逐', '引擎盖', '远景', '俯视']
  },
  ja: {
    langLabel: '言語', eyebrow: 'プレミアム アーケード', heroCopy: 'ドライバーと色を選んで、街へ繰り出して現金を稼ごう。',
    live: 'オンライン', players: 'ドライバー', noPlayers: 'まだドライバーがいません — 下で追加。', remove: (n) => `${n} を削除`,
    addPlaceholder: '名前を追加', add: '+ 追加', carColor: '車の色', start: '▶ 走る',
    playingAs: 'ドライバー', best: 'ベスト所持金', cash: '所持金', time: 'タイム', objective: '目標', stop: '■ 退出',
    go: 'スタート！', finish: 'タイムアップ！', won: '大稼ぎ！🤑', playAgain: '↻ もう一度', menu: '‹ メニュー',
    hint: '矢印 / WASD で運転 · またはゲームパッド 🎮',
    camera: 'カメラ', cams: ['コックピット', '追走', 'ボンネット', '遠距離', '俯瞰']
  },
  ar: {
    langLabel: 'اللغة', eyebrow: 'أركيد بريميوم', heroCopy: 'اختر سائقًا ولونًا، ثم انطلق في الشوارع لجمع المال.',
    live: 'مباشر', players: 'السائقون', noPlayers: 'لا سائقين بعد — أضف واحدًا بالأسفل.', remove: (n) => `أزل ${n}`,
    addPlaceholder: 'أضف اسمًا جديدًا', add: '+ أضف', carColor: 'لون السيارة', start: '▶ انطلق',
    playingAs: 'تقود باسم', best: 'أفضل مبلغ', cash: 'المال', time: 'الوقت', objective: 'الهدف', stop: '■ خروج',
    go: '!انطلق', finish: '!انتهى الوقت', won: '🤑 !حصلت على المال', playAgain: '↻ قُد مجددًا', menu: '‹ القائمة',
    hint: 'الأسهم / WASD للقيادة · أو يد التحكم 🎮',
    camera: 'الكاميرا', cams: ['المقصورة', 'المطاردة', 'غطاء المحرك', 'بعيدة', 'علوية']
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
