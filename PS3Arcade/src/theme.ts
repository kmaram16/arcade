// PS3 launcher reskin (XMB). Same App as PS2Arcade; see PS2Arcade/src/theme.ts.
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
  skin: 'ps3',
  console: 'PlayStation 3',
  short: 'PS3',
  accent: '#0ea5e9',
  accent2: '#67e8f9',
  bg: '#000000',
  games: [
    { id: 'gt5', name: 'Gran Turismo 5', icon: '🏎️', devPort: 4206, status: 'ready', tint: ['#3b82f6', '#60a5fa'] },
    { id: 'gt6', name: 'Gran Turismo 6', icon: '🏁', devPort: 4200, status: 'ready', tint: ['#0ea5e9', '#67e8f9'] },
    { id: 'uncharted', name: 'Uncharted', icon: '🗺️', devPort: 4207, status: 'ready', tint: ['#b45309', '#f59e0b'] },
    { id: 'fifa2006', name: 'FIFA 2006', icon: '⚽', devPort: 4208, status: 'ready', tint: ['#22c55e', '#0ea5e9'] },
    { id: 'fifa2014', name: 'FIFA 2014', icon: '⚽', devPort: 4209, status: 'ready', tint: ['#16a34a', '#22c55e'] },
    { id: 'fifa2015', name: 'FIFA 2015', icon: '⚽', devPort: 4210, status: 'ready', tint: ['#0ea5e9', '#3b82f6'] }
  ]
};
