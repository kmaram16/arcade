// Localization for Uncharted — shared arcade contract (reads `arcade.lang` +
// `?lang=` override). "Uncharted" stays untranslated.

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
  score: string;
  treasures: string;
  time: string;
  stop: string;
  go: string;
  finish: string;
  won: string;
  fell: string;
  playAgain: string;
  menu: string;
  hint: string;
};

export const STR: Record<Lang, S> = {
  es: {
    langLabel: 'Idioma', eyebrow: 'Arcade Premium',
    heroCopy: 'Salta entre las ruinas, reúne las reliquias y alcanza el tesoro dorado.',
    live: 'En directo', players: 'Aventureros', noPlayers: 'Aún no hay aventureros: añade uno abajo.', remove: (n) => `Quitar ${n}`,
    addPlaceholder: 'Añadir un nombre', add: '+ Añadir', start: '▶ Aventura',
    playingAs: 'Juegas como', best: 'Mejor', score: 'Puntos', treasures: 'Reliquias', time: 'Tiempo', stop: '■ Salir',
    go: '¡YA!', finish: '¡Tesoro!', won: '¡Tesoro hallado! 🏆', fell: '¡Al vacío! Reapareces…', playAgain: '↻ Jugar otra vez', menu: '‹ Menú',
    hint: 'Flechas/WASD para moverte · Espacio para saltar · o el mando 🎮'
  },
  en: {
    langLabel: 'Language', eyebrow: 'Premium Arcade',
    heroCopy: 'Leap across the ruins, gather the relics and reach the golden treasure.',
    live: 'Live', players: 'Adventurers', noPlayers: 'No adventurers yet — add one below.', remove: (n) => `Remove ${n}`,
    addPlaceholder: 'Add a new name', add: '+ Add', start: '▶ Adventure',
    playingAs: 'Playing as', best: 'Best', score: 'Score', treasures: 'Relics', time: 'Time', stop: '■ Exit',
    go: 'GO!', finish: 'Treasure!', won: 'Treasure found! 🏆', fell: 'Into the void! Respawning…', playAgain: '↻ Play again', menu: '‹ Menu',
    hint: 'Arrow keys / WASD to move · Space to jump · or a gamepad 🎮'
  },
  pt: {
    langLabel: 'Idioma', eyebrow: 'Arcade Premium',
    heroCopy: 'Salte entre as ruínas, reúna as relíquias e alcance o tesouro dourado.',
    live: 'No ar', players: 'Aventureiros', noPlayers: 'Ainda não há aventureiros — adicione um abaixo.', remove: (n) => `Remover ${n}`,
    addPlaceholder: 'Adicionar um nome', add: '+ Adicionar', start: '▶ Aventura',
    playingAs: 'Jogando como', best: 'Melhor', score: 'Pontos', treasures: 'Relíquias', time: 'Tempo', stop: '■ Sair',
    go: 'JÁ!', finish: 'Tesouro!', won: 'Tesouro encontrado! 🏆', fell: 'No vazio! Renascendo…', playAgain: '↻ Jogar de novo', menu: '‹ Menu',
    hint: 'Setas / WASD para mover · Espaço para pular · ou o controle 🎮'
  },
  fr: {
    langLabel: 'Langue', eyebrow: 'Arcade Premium',
    heroCopy: 'Bondis à travers les ruines, récolte les reliques et atteins le trésor doré.',
    live: 'En ligne', players: 'Aventuriers', noPlayers: 'Aucun aventurier — ajoutes-en un ci-dessous.', remove: (n) => `Retirer ${n}`,
    addPlaceholder: 'Ajouter un nom', add: '+ Ajouter', start: '▶ Aventure',
    playingAs: 'Tu joues', best: 'Record', score: 'Score', treasures: 'Reliques', time: 'Temps', stop: '■ Quitter',
    go: 'PARTEZ !', finish: 'Trésor !', won: 'Trésor trouvé ! 🏆', fell: 'Dans le vide ! Réapparition…', playAgain: '↻ Rejouer', menu: '‹ Menu',
    hint: 'Flèches / WASD pour bouger · Espace pour sauter · ou une manette 🎮'
  },
  de: {
    langLabel: 'Sprache', eyebrow: 'Premium-Arcade',
    heroCopy: 'Springe durch die Ruinen, sammle die Relikte und erreiche den goldenen Schatz.',
    live: 'Live', players: 'Abenteurer', noPlayers: 'Noch keine Abenteurer — unten einen hinzufügen.', remove: (n) => `${n} entfernen`,
    addPlaceholder: 'Namen hinzufügen', add: '+ Hinzu', start: '▶ Abenteuer',
    playingAs: 'Du spielst', best: 'Rekord', score: 'Punkte', treasures: 'Relikte', time: 'Zeit', stop: '■ Verlassen',
    go: 'LOS!', finish: 'Schatz!', won: 'Schatz gefunden! 🏆', fell: 'Ins Leere! Neustart…', playAgain: '↻ Nochmal', menu: '‹ Menü',
    hint: 'Pfeile / WASD zum Bewegen · Leertaste zum Springen · oder ein Controller 🎮'
  },
  it: {
    langLabel: 'Lingua', eyebrow: 'Arcade Premium',
    heroCopy: 'Salta tra le rovine, raccogli le reliquie e raggiungi il tesoro dorato.',
    live: 'Attivo', players: 'Avventurieri', noPlayers: 'Ancora nessun avventuriero — aggiungine uno sotto.', remove: (n) => `Rimuovi ${n}`,
    addPlaceholder: 'Aggiungi un nome', add: '+ Aggiungi', start: '▶ Avventura',
    playingAs: 'Giochi come', best: 'Record', score: 'Punti', treasures: 'Reliquie', time: 'Tempo', stop: '■ Esci',
    go: 'VIA!', finish: 'Tesoro!', won: 'Tesoro trovato! 🏆', fell: 'Nel vuoto! Rinasci…', playAgain: '↻ Rigioca', menu: '‹ Menu',
    hint: 'Frecce / WASD per muoverti · Spazio per saltare · o un controller 🎮'
  },
  zh: {
    langLabel: '语言', eyebrow: '精品街机',
    heroCopy: '在遗迹间跳跃，收集圣物，抵达金色宝藏。',
    live: '在线', players: '冒险者', noPlayers: '还没有冒险者 —— 在下面添加一个。', remove: (n) => `移除 ${n}`,
    addPlaceholder: '添加新名字', add: '+ 添加', start: '▶ 冒险',
    playingAs: '当前玩家', best: '最佳', score: '分数', treasures: '圣物', time: '时间', stop: '■ 退出',
    go: '出发！', finish: '宝藏！', won: '找到宝藏！🏆', fell: '坠入深渊！重生中…', playAgain: '↻ 再玩一次', menu: '‹ 菜单',
    hint: '方向键 / WASD 移动 · 空格跳跃 · 或用手柄 🎮'
  },
  ja: {
    langLabel: '言語', eyebrow: 'プレミアム アーケード',
    heroCopy: '遺跡を飛び越え、遺物を集めて黄金の秘宝を目指そう。',
    live: 'オンライン', players: '冒険者', noPlayers: 'まだ冒険者がいません — 下で追加。', remove: (n) => `${n} を削除`,
    addPlaceholder: '名前を追加', add: '+ 追加', start: '▶ 冒険',
    playingAs: 'プレイヤー', best: 'ベスト', score: 'スコア', treasures: '遺物', time: 'タイム', stop: '■ 退出',
    go: 'スタート！', finish: '秘宝！', won: '秘宝発見！🏆', fell: '奈落へ！復活中…', playAgain: '↻ もう一度', menu: '‹ メニュー',
    hint: '矢印 / WASD で移動 · スペースでジャンプ · またはゲームパッド 🎮'
  },
  ar: {
    langLabel: 'اللغة', eyebrow: 'أركيد بريميوم',
    heroCopy: 'اقفز بين الأطلال، واجمع الآثار، وابلغ الكنز الذهبي.',
    live: 'مباشر', players: 'المغامرون', noPlayers: 'لا مغامرين بعد — أضف واحدًا بالأسفل.', remove: (n) => `أزل ${n}`,
    addPlaceholder: 'أضف اسمًا جديدًا', add: '+ أضف', start: '▶ مغامرة',
    playingAs: 'تلعب باسم', best: 'الأفضل', score: 'النقاط', treasures: 'الآثار', time: 'الوقت', stop: '■ خروج',
    go: '!انطلق', finish: '!الكنز', won: '🏆 !عُثر على الكنز', fell: '…إلى الهاوية! تعود للظهور', playAgain: '↻ العب مجددًا', menu: '‹ القائمة',
    hint: 'الأسهم / WASD للحركة · مسافة للقفز · أو يد التحكم 🎮'
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
