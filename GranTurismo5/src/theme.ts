export const THEME = {
  title: 'Gran Turismo',
  edition: '5',
  console: 'PS3',
  accent: '#3b82f6',
  accent2: '#60a5fa',
  bg: '#03060f',
  surface: 'rgba(6, 14, 34, 0.6)',
  playerCar: '#e10600',
  rivalCars: ['#60a5fa', '#f472b6', '#facc15'],
  track: {
    rx: 405,
    rz: 210,
    harm: [
      [1, 0.16, 0.4],
      [3, 0.07, 2.0]
    ] as [number, number, number][]
  },
  env: { sky: '#04101f', grass: '#155e3a', road: '#2b2f38' }
};
