// Datos de la fábrica de equipaciones: patrones, presets de selecciones y
// estilos de club, paletas para el botón "aleatorio" y utilidades de color.
//
// Nota: los estilos de club se describen por su ASPECTO (colores y patrón), sin
// nombres, escudos ni marcas reales — igual que el resto del arcade. Las
// selecciones usan el nombre del país y colores genéricos, no logos oficiales.

export type Pattern =
  | 'solid' // liso
  | 'stripes' // rayas verticales
  | 'hoops' // aros horizontales
  | 'halves' // mitades
  | 'sash' // banda diagonal
  | 'checkers' // damero
  | 'gradient' // degradado
  | 'pinstripes'; // rayas finas

export type Kit = {
  id: string;
  teamName: string;
  playerName: string;
  number: string;
  sponsor: string;
  pattern: Pattern;
  primary: string;
  secondary: string;
  accent: string; // cuello, puños, franjas
  shorts: string;
  socks: string;
  crest: string; // emoji o iniciales del escudo
};

export type Preset = {
  label: string;
  badge: string; // emoji (bandera o icono) que se ve en el selector
  kit: Omit<Kit, 'id' | 'playerName' | 'number' | 'sponsor'>;
};

const p = (
  label: string,
  badge: string,
  pattern: Pattern,
  primary: string,
  secondary: string,
  accent: string,
  shorts: string,
  socks: string,
  crest = badge
): Preset => ({
  label,
  badge,
  kit: { teamName: label, pattern, primary, secondary, accent, shorts, socks, crest }
});

/** Selecciones nacionales — nombre de país + combinación de colores. */
export const SELECCIONES: Preset[] = [
  p('España', '🇪🇸', 'solid', '#c8102e', '#ffd200', '#111827', '#0b1a3a', '#c8102e'),
  p('Argentina', '🇦🇷', 'stripes', '#75aadb', '#ffffff', '#0b1a3a', '#0b1a3a', '#ffffff'),
  p('Brasil', '🇧🇷', 'solid', '#ffdf00', '#009c3b', '#002776', '#002776', '#ffffff'),
  p('Francia', '🇫🇷', 'solid', '#1e3a8a', '#ffffff', '#ef4444', '#ffffff', '#ef4444'),
  p('Alemania', '🇩🇪', 'solid', '#f8fafc', '#111827', '#dc2626', '#111827', '#f8fafc'),
  p('Italia', '🇮🇹', 'solid', '#1565c0', '#ffffff', '#0b1a3a', '#ffffff', '#1565c0'),
  p('Países Bajos', '🇳🇱', 'solid', '#ff6a00', '#ffffff', '#111827', '#ffffff', '#ff6a00'),
  p('Portugal', '🇵🇹', 'solid', '#a4161a', '#166534', '#ffd200', '#166534', '#a4161a'),
  p('Inglaterra', '🏴', 'solid', '#f8fafc', '#1e3a8a', '#dc2626', '#1e3a8a', '#f8fafc'),
  p('México', '🇲🇽', 'solid', '#006847', '#ffffff', '#ce1126', '#ffffff', '#ce1126'),
  p('Colombia', '🇨🇴', 'solid', '#ffcd00', '#003893', '#c8102e', '#003893', '#ffcd00'),
  p('Uruguay', '🇺🇾', 'solid', '#5aa9e6', '#ffffff', '#111827', '#111827', '#111827'),
  p('Croacia', '🇭🇷', 'checkers', '#ff0000', '#ffffff', '#1e3a8a', '#1e3a8a', '#ffffff'),
  p('Japón', '🇯🇵', 'solid', '#0b3d91', '#ffffff', '#dc2626', '#0b3d91', '#0b3d91'),
  p('Bélgica', '🇧🇪', 'solid', '#e11d48', '#111827', '#fbbf24', '#111827', '#e11d48')
];

/** Estilos de club — descritos por su aspecto, sin nombres ni escudos reales. */
export const CLUBES: Preset[] = [
  p('Azulgrana', '🔵', 'stripes', '#1e3a8a', '#7f1d1d', '#fbbf24', '#1e3a8a', '#7f1d1d', '⚽'),
  p('Todo blanco', '⚪', 'solid', '#f8fafc', '#eab308', '#c9a227', '#f8fafc', '#0b1a3a', '👑'),
  p('Rojiblancos', '🔴', 'stripes', '#ef4444', '#ffffff', '#1e3a8a', '#1e3a8a', '#ef4444', '🐻'),
  p('Rojinegros', '⚫', 'stripes', '#dc2626', '#111827', '#f8fafc', '#f8fafc', '#111827', '😈'),
  p('Aros verdiblancos', '🟢', 'hoops', '#16a34a', '#ffffff', '#0f172a', '#ffffff', '#16a34a', '🍀'),
  p('Diablos rojos', '❤️', 'solid', '#dc2626', '#111827', '#fbbf24', '#f8fafc', '#111827', '😈'),
  p('Celeste y blanco', '🩵', 'stripes', '#38bdf8', '#ffffff', '#0b1a3a', '#0b1a3a', '#38bdf8', '⭐'),
  p('Negro y oro', '🟡', 'sash', '#0f172a', '#eab308', '#eab308', '#0f172a', '#eab308', '🦅')
];

/** Emojis sugeridos para el escudo. */
export const CRESTS = ['⚽', '⭐', '🦁', '🐉', '🔥', '🦅', '🐺', '👑', '⚡', '🛡️', '🐂', '🏆'];

/** Paletas bonitas para el botón "aleatorio". */
export const PALETTES: [string, string, string][] = [
  ['#ef4444', '#111827', '#fbbf24'],
  ['#2563eb', '#f8fafc', '#f59e0b'],
  ['#16a34a', '#f8fafc', '#0f172a'],
  ['#7c3aed', '#fde047', '#f8fafc'],
  ['#f97316', '#0f172a', '#f8fafc'],
  ['#0ea5e9', '#ffffff', '#0b1a3a'],
  ['#db2777', '#0f172a', '#fbcfe8'],
  ['#0d9488', '#f8fafc', '#f59e0b'],
  ['#facc15', '#0f172a', '#dc2626'],
  ['#f8fafc', '#dc2626', '#111827']
];

export const PATTERNS: { id: Pattern; label: string }[] = [
  { id: 'solid', label: 'Liso' },
  { id: 'stripes', label: 'Rayas' },
  { id: 'hoops', label: 'Aros' },
  { id: 'halves', label: 'Mitades' },
  { id: 'sash', label: 'Banda' },
  { id: 'checkers', label: 'Damero' },
  { id: 'gradient', label: 'Degradado' },
  { id: 'pinstripes', label: 'Finas' }
];

/** Blanco o casi-negro, el que se lea mejor sobre el color dado. */
export function textOn(hex: string): string {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.6 ? '#0f172a' : '#f8fafc';
}

export function newId(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return `k${Date.now()}${Math.floor(Math.random() * 1000)}`;
  }
}

export const BLANK_KIT: Kit = {
  id: 'draft',
  teamName: 'Mi Equipo',
  playerName: 'KAMYAR',
  number: '10',
  sponsor: 'ARCADE',
  pattern: 'stripes',
  primary: '#c8102e',
  secondary: '#ffd200',
  accent: '#0b1a3a',
  shorts: '#0b1a3a',
  socks: '#c8102e',
  crest: '⚽'
};
