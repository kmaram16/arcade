// GT6 (PS3) reskin of the shared racing engine — see GranTurismo4/src/theme.ts.
export const THEME = {
  title: 'Gran Turismo',
  edition: '6',
  console: 'PS3',
  accent: '#0ea5e9',
  accent2: '#67e8f9',
  bg: '#04060d',
  surface: 'rgba(8, 16, 38, 0.6)',
  playerCar: '#e10600',
  rivalCars: ['#38bdf8', '#f59e0b', '#a3e635'],
  track: {
    rx: 360,
    rz: 245,
    harm: [
      [2, 0.1, 1.2],
      [5, 0.05, 0.3]
    ] as [number, number, number][]
  },
  env: { sky: '#050a18', grass: '#1a5040', road: '#2e3138' }
};
