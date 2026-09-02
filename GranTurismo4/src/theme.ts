// The one file that differs between the Gran Turismo instances (GT4 on PS2, GT6
// on PS3). Everything else — the racing engine, i18n, gamepad — is identical, so
// a new GT is a folder copy with a fresh theme.
export const THEME = {
  title: 'Gran Turismo',
  edition: '4',
  console: 'PS2',
  accent: '#1e6fff', // GT signature blue
  accent2: '#00d0ff',
  bg: '#05070f',
  surface: 'rgba(10, 20, 45, 0.6)',
  playerCar: '#e10600', // your car
  rivalCars: ['#ffd400', '#22c55e', '#a855f7'],
  // This circuit's shape (harmonics [k, amp, phase] on an ellipse) + scenery.
  track: {
    rx: 380,
    rz: 235,
    harm: [
      [3, 0.1, 0.2],
      [1, 0.06, 1.0]
    ] as [number, number, number][]
  },
  env: { sky: '#0a1430', grass: '#1c5a2e', road: '#30343d' }
};
