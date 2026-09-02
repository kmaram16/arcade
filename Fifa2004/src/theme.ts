// The one file that differs between the FIFA instances. Everything else — the
// football engine, i18n, gamepad — is identical, so a new FIFA year is a folder
// copy with a fresh theme (title / edition / colors / kit).
export const THEME = {
  title: 'FIFA',
  edition: '2004',
  console: 'PS2',
  accent: '#1e9e4a', // pitch green
  accent2: '#8bd450',
  bg: '#04120a',
  surface: 'rgba(6, 30, 16, 0.6)',
  kit: '#e30613', // your team's shirt
  rivalKit: '#1e40af' // opponent's shirt
};
