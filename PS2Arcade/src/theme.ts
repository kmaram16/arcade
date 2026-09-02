// The only file that differs between the two console launchers (PS2 grid boot,
// PS3 XMB). The App reads `skin` to switch layout, and `games` to list titles.
// A game's `status`: 'ready' opens it, 'soon' shows a Coming-soon tile.

export type ConsoleGame = {
  id: string;
  name: string;
  icon: string;
  devPort: number;
  status: 'ready' | 'soon';
  tint: [string, string];
};

export const THEME: {
  skin: 'ps2' | 'ps3';
  console: string;
  short: string;
  accent: string;
  accent2: string;
  bg: string;
  games: ConsoleGame[];
} = {
  skin: 'ps2',
  console: 'PlayStation 2',
  short: 'PS2',
  accent: '#1e6fff',
  accent2: '#00d0ff',
  bg: '#04060f',
  games: [
    { id: 'gt3', name: 'Gran Turismo 3', icon: '🏎️', devPort: 4203, status: 'ready', tint: ['#f97316', '#fbbf24'] },
    { id: 'gt4', name: 'Gran Turismo 4', icon: '🏁', devPort: 4199, status: 'ready', tint: ['#1e6fff', '#00d0ff'] },
    { id: 'gtasa', name: 'GTA: San Andreas', icon: '🌆', devPort: 4204, status: 'ready', tint: ['#f59e0b', '#16a34a'] },
    { id: 'fifa2004', name: 'FIFA 2004', icon: '⚽', devPort: 4205, status: 'ready', tint: ['#22c55e', '#0ea5e9'] }
  ]
};
