export const THEME = {
  title: 'Gran Turismo',
  edition: '3',
  console: 'PS2',
  accent: '#f97316',
  accent2: '#fbbf24',
  bg: '#0d0803',
  surface: 'rgba(30, 18, 6, 0.6)',
  playerCar: '#e10600',
  rivalCars: ['#fbbf24', '#38bdf8', '#22c55e'],
  track: {
    rx: 340,
    rz: 255,
    harm: [
      [2, 0.18, 0.0],
      [4, 0.05, 0.5]
    ] as [number, number, number][]
  },
  env: { sky: '#1a1030', grass: '#2e6b2a', road: '#34363b' }
};
