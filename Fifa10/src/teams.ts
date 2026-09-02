// Original, made-up clubs for FIFA 10 — no real-world trademarks, crests or
// player likenesses. Each squad is GK + 2 DEF + 1 MID + 1 FWD (a 5-a-side team),
// in that fixed order so the formation slots in App.tsx line up.

export type Role = 'GK' | 'DEF' | 'MID' | 'FWD';

export type Squad = { num: number; name: string; role: Role };

export type Team = {
  id: string;
  name: string;
  abbr: string;
  /** [primary kit, secondary/trim] — used for kits, crest and HUD. */
  colors: [string, string];
  squad: Squad[];
};

export const TEAMS: Team[] = [
  {
    id: 'crimson',
    name: 'Crimson FC',
    abbr: 'CRM',
    colors: ['#dc2626', '#ffffff'],
    squad: [
      { num: 1, name: 'Vance', role: 'GK' },
      { num: 4, name: 'Ardle', role: 'DEF' },
      { num: 5, name: 'Brennan', role: 'DEF' },
      { num: 8, name: 'Sosa', role: 'MID' },
      { num: 9, name: 'Calder', role: 'FWD' }
    ]
  },
  {
    id: 'azure',
    name: 'Azure United',
    abbr: 'AZU',
    colors: ['#2563eb', '#ffffff'],
    squad: [
      { num: 1, name: 'Okafor', role: 'GK' },
      { num: 3, name: 'Lind', role: 'DEF' },
      { num: 4, name: 'Mori', role: 'DEF' },
      { num: 6, name: 'Petrov', role: 'MID' },
      { num: 11, name: 'Dane', role: 'FWD' }
    ]
  },
  {
    id: 'verde',
    name: 'Verde City',
    abbr: 'VRD',
    colors: ['#16a34a', '#052e16'],
    squad: [
      { num: 1, name: 'Salas', role: 'GK' },
      { num: 2, name: 'Boateng', role: 'DEF' },
      { num: 5, name: 'Krol', role: 'DEF' },
      { num: 7, name: 'Adeyemi', role: 'MID' },
      { num: 10, name: 'Nunes', role: 'FWD' }
    ]
  },
  {
    id: 'royal',
    name: 'Royal Athletic',
    abbr: 'ROY',
    colors: ['#7c3aed', '#fde047'],
    squad: [
      { num: 1, name: 'Greco', role: 'GK' },
      { num: 4, name: 'Falk', role: 'DEF' },
      { num: 6, name: 'Roux', role: 'DEF' },
      { num: 8, name: 'Haas', role: 'MID' },
      { num: 9, name: 'Marin', role: 'FWD' }
    ]
  },
  {
    id: 'sunset',
    name: 'Sunset Rovers',
    abbr: 'SUN',
    colors: ['#f97316', '#1e293b'],
    squad: [
      { num: 1, name: 'Pike', role: 'GK' },
      { num: 3, name: 'Cole', role: 'DEF' },
      { num: 5, name: 'Varga', role: 'DEF' },
      { num: 7, name: 'Idris', role: 'MID' },
      { num: 10, name: 'Quill', role: 'FWD' }
    ]
  },
  {
    id: 'frost',
    name: 'Frost Rangers',
    abbr: 'FRO',
    colors: ['#06b6d4', '#ffffff'],
    squad: [
      { num: 1, name: 'Lund', role: 'GK' },
      { num: 2, name: 'Saito', role: 'DEF' },
      { num: 4, name: 'Behr', role: 'DEF' },
      { num: 8, name: 'Novak', role: 'MID' },
      { num: 11, name: 'Ekberg', role: 'FWD' }
    ]
  },
  {
    id: 'shadow',
    name: 'Shadow SC',
    abbr: 'SHD',
    colors: ['#0f172a', '#ef4444'],
    squad: [
      { num: 1, name: 'Rourke', role: 'GK' },
      { num: 3, name: 'Dias', role: 'DEF' },
      { num: 5, name: 'Volkov', role: 'DEF' },
      { num: 6, name: 'Amari', role: 'MID' },
      { num: 9, name: 'Stahl', role: 'FWD' }
    ]
  },
  {
    id: 'gold',
    name: 'Gold Star',
    abbr: 'GLD',
    colors: ['#eab308', '#0f172a'],
    squad: [
      { num: 1, name: 'Mensah', role: 'GK' },
      { num: 2, name: 'Park', role: 'DEF' },
      { num: 4, name: 'Ferro', role: 'DEF' },
      { num: 8, name: 'Bauer', role: 'MID' },
      { num: 10, name: 'Costa', role: 'FWD' }
    ]
  }
];

/** White or near-black text, whichever reads better on the given kit colour. */
export function textOn(hex: string): string {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.6 ? '#0f172a' : '#ffffff';
}
