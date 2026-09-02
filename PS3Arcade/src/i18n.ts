// Tiny launcher localization (shared arcade contract: `arcade.lang` + `?lang=`).
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

export type S = { choose: string; play: string; soon: string; back: string; langLabel: string; hint: string };

export const STR: Record<Lang, S> = {
  es: { choose: 'Elige un juego', play: 'Jugar ▸', soon: 'Próximamente', back: '‹ Arcade', langLabel: 'Idioma', hint: 'Cruceta para moverte · A/Intro para jugar · 🎮' },
  en: { choose: 'Pick a game', play: 'Play ▸', soon: 'Coming soon', back: '‹ Arcade', langLabel: 'Language', hint: 'D-pad to move · A/Enter to play · 🎮' },
  pt: { choose: 'Escolha um jogo', play: 'Jogar ▸', soon: 'Em breve', back: '‹ Arcade', langLabel: 'Idioma', hint: 'Direcional para mover · A/Enter para jogar · 🎮' },
  fr: { choose: 'Choisis un jeu', play: 'Jouer ▸', soon: 'Bientôt', back: '‹ Arcade', langLabel: 'Langue', hint: 'Croix directionnelle · A/Entrée pour jouer · 🎮' },
  de: { choose: 'Wähle ein Spiel', play: 'Spielen ▸', soon: 'Bald', back: '‹ Arcade', langLabel: 'Sprache', hint: 'Steuerkreuz zum Bewegen · A/Enter zum Spielen · 🎮' },
  it: { choose: 'Scegli un gioco', play: 'Gioca ▸', soon: 'In arrivo', back: '‹ Arcade', langLabel: 'Lingua', hint: 'Croce direzionale · A/Invio per giocare · 🎮' },
  zh: { choose: '选择一个游戏', play: '开玩 ▸', soon: '即将上线', back: '‹ 街机', langLabel: '语言', hint: '方向键移动 · A/回车 开玩 · 🎮' },
  ja: { choose: 'ゲームを選ぼう', play: 'プレイ ▸', soon: '近日公開', back: '‹ アーケード', langLabel: '言語', hint: '十字キーで移動 · A/Enter でプレイ · 🎮' },
  ar: { choose: 'اختر لعبة', play: '▸ العب', soon: 'قريبًا', back: 'أركيد ›', langLabel: 'اللغة', hint: 'الأسهم للتنقل · A/إدخال للعب · 🎮' }
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
