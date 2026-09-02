// Music data: note maths, scales, the selectable "artist voices", and a few
// built-in demo songs (patterns + lyrics). Everything is synthesised in the
// browser — there are no audio files — so "songs" are step-sequencer patterns.

export const STEPS = 16;

/** Scale interval sets (semitones from the root). */
export const SCALES: Record<string, { name: string; intervals: number[] }> = {
  major: { name: 'Mayor', intervals: [0, 2, 4, 5, 7, 9, 11] },
  minor: { name: 'Menor', intervals: [0, 2, 3, 5, 7, 8, 10] },
  penta: { name: 'Pentatónica', intervals: [0, 2, 4, 7, 9] }
};
export type ScaleId = keyof typeof SCALES;

/** Roots, 0 = Do (C). Index adds semitones to the base octave. */
export const ROOTS = ['Do', 'Do#', 'Re', 'Re#', 'Mi', 'Fa', 'Fa#', 'Sol', 'Sol#', 'La', 'La#', 'Si'];

export function midiToFreq(midi: number): number {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

/** Frequency for a scale degree (0-based; degrees past the scale length wrap up
 *  an octave). `baseMidi` is the root note in the desired octave. */
export function degreeFreq(baseMidi: number, root: number, scale: ScaleId, degree: number): number {
  const iv = SCALES[scale].intervals;
  const octave = Math.floor(degree / iv.length);
  const idx = ((degree % iv.length) + iv.length) % iv.length;
  return midiToFreq(baseMidi + root + octave * 12 + iv[idx]);
}

/** Snap any frequency to the nearest note of the scale (used by autotune). */
export function snapToScale(freq: number, root: number, scale: ScaleId): number {
  if (freq <= 0) return freq;
  const iv = SCALES[scale].intervals;
  const midi = 69 + 12 * Math.log2(freq / 440);
  let best = midi;
  let bestDist = Infinity;
  for (let oct = -1; oct <= 8; oct++) {
    for (const step of iv) {
      const cand = oct * 12 + root + step;
      // align cand into absolute midi space near `midi`
      const m = cand + 12 * Math.round((midi - cand) / 12);
      const d = Math.abs(m - midi);
      if (d < bestDist) {
        bestDist = d;
        best = m;
      }
    }
  }
  return midiToFreq(best);
}

// ----- Artist voices -----
export type Voice = {
  id: string;
  name: string;
  emoji: string;
  wave: OscillatorType;
  stack: number; // stacked detuned oscillators (chorus / choir)
  detune: number; // cents spread
  formants: number[]; // vowel bandpass centres (Hz)
  vibrato: number; // cents of vibrato depth
  vibratoRate: number;
  ring: number; // ring-mod frequency (0 = off) → robotic
  octave: number;
};

export const VOICES: Voice[] = [
  { id: 'kamyar', name: 'Kamyar', emoji: '🎤', wave: 'sawtooth', stack: 2, detune: 8, formants: [700, 1150, 2600], vibrato: 18, vibratoRate: 5.5, ring: 0, octave: 0 },
  { id: 'martina', name: 'Martina', emoji: '🌟', wave: 'sawtooth', stack: 2, detune: 10, formants: [850, 1550, 2900], vibrato: 22, vibratoRate: 6, ring: 0, octave: 1 },
  { id: 'robot', name: 'Robot', emoji: '🤖', wave: 'sawtooth', stack: 1, detune: 0, formants: [500, 1500], vibrato: 0, vibratoRate: 0, ring: 55, octave: 0 },
  { id: 'coro', name: 'Coro', emoji: '👥', wave: 'sawtooth', stack: 4, detune: 20, formants: [600, 1040, 2400], vibrato: 12, vibratoRate: 4.2, ring: 0, octave: 0 },
  { id: 'grave', name: 'Grave', emoji: '🔊', wave: 'sawtooth', stack: 2, detune: 6, formants: [380, 900, 2100], vibrato: 14, vibratoRate: 4.6, ring: 0, octave: -1 },
  { id: 'chip', name: 'Chip 8-bit', emoji: '👾', wave: 'square', stack: 1, detune: 0, formants: [], vibrato: 28, vibratoRate: 8, ring: 0, octave: 1 }
];

export function voiceById(id: string): Voice {
  return VOICES.find((v) => v.id === id) ?? VOICES[0];
}

// ----- Track model -----
export type Pattern = {
  kick: boolean[];
  snare: boolean[];
  hihat: boolean[];
  bass: (number | null)[];
  lead: (number | null)[];
};

export type Track = {
  id: string;
  name: string;
  author: string;
  color: [string, string];
  bpm: number;
  root: number;
  scale: ScaleId;
  voice: string;
  pattern: Pattern;
  lyrics: string[];
  builtin?: boolean;
};

// Compact pattern helpers: "x..x" drums, "0.2." melodies (hex digit = degree).
const H = (s: string) => s.split('').map((c) => c !== '.' && c !== ' ');
const M = (s: string): (number | null)[] => s.split('').map((c) => (c === '.' ? null : parseInt(c, 16)));

export const DEMO_TRACKS: Track[] = [
  {
    id: 'demo-corre',
    name: 'Corre Kamyar',
    author: 'Kamyar',
    color: ['#1db954', '#0ea5e9'],
    bpm: 124,
    root: 0,
    scale: 'major',
    voice: 'kamyar',
    pattern: {
      kick: H('x...x...x...x...'),
      snare: H('....x.......x...'),
      hihat: H('x.x.x.x.x.x.x.x.'),
      bass: M('0...5...3...5...'),
      lead: M('..4.7..4.9.7.4..')
    },
    lyrics: ['Corre, corre Kamyar', 'salta sin parar', 'por todo el arcade vas', '¡nadie te va a atrapar!'],
    builtin: true
  },
  {
    id: 'demo-norberto',
    name: 'Norberto Villano',
    author: 'Robot',
    color: ['#7c3aed', '#111827'],
    bpm: 104,
    root: 9,
    scale: 'minor',
    voice: 'robot',
    pattern: {
      kick: H('x..x..x.x..x..x.'),
      snare: H('....x.......x...'),
      hihat: H('x.x.x.x.x.x.x.x.'),
      bass: M('0...3...5...3...'),
      lead: M('0.3.5.3.7.5.3.0.')
    },
    lyrics: ['Norberto el villano', 'te persigue sin final', 'corre rápido Kamyar', '¡o te va a atrapar!'],
    builtin: true
  },
  {
    id: 'demo-panda',
    name: 'Panda Party',
    author: 'Coro',
    color: ['#22c55e', '#f59e0b'],
    bpm: 128,
    root: 7,
    scale: 'penta',
    voice: 'coro',
    pattern: {
      kick: H('x...x...x...x...'),
      snare: H('....x.......x...'),
      hihat: H('..x...x...x...x.'),
      bass: M('0...2...4...2...'),
      lead: M('0.2.4.2.0.4.2.0.')
    },
    lyrics: ['Fiesta con el panda', 'baila sin parar', 'en el arcade hay', 'mucho que bailar'],
    builtin: true
  },
  {
    id: 'demo-martina',
    name: 'Martina Estrella',
    author: 'Martina',
    color: ['#ec4899', '#a855f7'],
    bpm: 112,
    root: 5,
    scale: 'major',
    voice: 'martina',
    pattern: {
      kick: H('x...x...x...x...'),
      snare: H('....x.......x...'),
      hihat: H('x.xxx.xxx.xxx.xx'),
      bass: M('0...4...5...4...'),
      lead: M('4.5.7.5.9.7.5.4.')
    },
    lyrics: ['Martina brilla ya', 'como una estrella', 'canta con autotune', 'su voz es la más bella'],
    builtin: true
  }
];

export function clonePattern(p: Pattern): Pattern {
  return { kick: [...p.kick], snare: [...p.snare], hihat: [...p.hihat], bass: [...p.bass], lead: [...p.lead] };
}

// One-tap genre starters so you never face a blank grid.
export type Preset = { id: string; name: string; emoji: string; bpm: number; scale: ScaleId; pattern: Pattern };

export const PRESETS: Preset[] = [
  {
    id: 'pop', name: 'Pop', emoji: '🎧', bpm: 122, scale: 'major',
    pattern: { kick: H('x...x...x...x...'), snare: H('....x.......x...'), hihat: H('x.x.x.x.x.x.x.x.'), bass: M('0...0...5...5...'), lead: M('..4.7..4.9.7.4..') }
  },
  {
    id: 'regge', name: 'Reggaetón', emoji: '🔥', bpm: 94, scale: 'minor',
    pattern: { kick: H('x...x...x...x...'), snare: H('..x..x.x..x..x.x'), hihat: H('x.x.x.x.x.x.x.x.'), bass: M('0...0...3...3...'), lead: M('0..3..5..3..7..5') }
  },
  {
    id: 'rock', name: 'Rock', emoji: '🎸', bpm: 130, scale: 'major',
    pattern: { kick: H('x...x...x...x...'), snare: H('....x.......x...'), hihat: H('xxxxxxxxxxxxxxxx'), bass: M('0.0.0.0.5.5.3.3.'), lead: M('0..3..5..7..5..3') }
  },
  {
    id: 'techno', name: 'Techno', emoji: '🌀', bpm: 128, scale: 'minor',
    pattern: { kick: H('x...x...x...x...'), snare: H('....x.......x...'), hihat: H('..x...x...x...x.'), bass: M('0.0.0.0.0.0.0.0.'), lead: M('.7..5..7..a..7..') }
  },
  {
    id: 'trap', name: 'Trap', emoji: '💎', bpm: 140, scale: 'minor',
    pattern: { kick: H('x.....x...x.....'), snare: H('....x.......x...'), hihat: H('x.xxx.xxx.xxx.xx'), bass: M('0.......5.......'), lead: M('0..0..3..0..5..3') }
  },
  {
    id: 'lofi', name: 'Lo-fi', emoji: '🌙', bpm: 84, scale: 'major',
    pattern: { kick: H('x.......x.......'), snare: H('....x.......x...'), hihat: H('x.x.x.x.x.x.x.x.'), bass: M('0...5...4...3...'), lead: M('4...2...0...2...') }
  }
];

const FUN_NAMES = ['Fiesta Loca', 'Kamyar en Órbita', 'Ritmo del Panda', 'Noche de Arcade', 'Autotune Total', 'Súper Hit', 'Norberto Remix', 'Baila Ya'];
const FUN_COLORS: [string, string][] = [['#1db954', '#0ea5e9'], ['#a855f7', '#ec4899'], ['#f59e0b', '#ef4444'], ['#22c55e', '#eab308'], ['#06b6d4', '#7c3aed']];
const FUN_LYRICS = [
  ['Sube el volumen ya', 'esto no va a parar', 'con Kamyar a bailar', '¡toda la noche va!'],
  ['Autotune en la voz', 'suena de lo mejor', 'crea tu propio hit', 'ponle mucho color'],
  ['Salta con el panda', 'mueve los pies', 'en el arcade suena', '¡otra vez, otra vez!']
];

function pick<T>(a: T[]): T {
  return a[Math.floor(Math.random() * a.length)];
}

/** Apply a preset onto the current draft (keeps its name/lyrics/voice). */
export function applyPreset(draft: Track, preset: Preset): Track {
  return { ...draft, bpm: preset.bpm, scale: preset.scale, pattern: clonePattern(preset.pattern) };
}

/** A whole random song in one tap. */
export function surpriseTrack(): Track {
  const p = pick(PRESETS);
  const voice = pick(VOICES).id;
  return {
    id: 'u' + Math.floor(performance.now()).toString(36),
    name: pick(FUN_NAMES),
    author: 'Tú',
    color: pick(FUN_COLORS),
    bpm: p.bpm,
    root: Math.floor(Math.random() * 12),
    scale: p.scale,
    voice,
    pattern: clonePattern(p.pattern),
    lyrics: pick(FUN_LYRICS)
  };
}

export function emptyPattern(): Pattern {
  return {
    kick: Array(STEPS).fill(false),
    snare: Array(STEPS).fill(false),
    hihat: Array(STEPS).fill(false),
    bass: Array(STEPS).fill(null),
    lead: Array(STEPS).fill(null)
  };
}

export function newTrack(): Track {
  return {
    id: 'u' + Math.floor(performance.now()).toString(36),
    name: 'Mi canción',
    author: 'Tú',
    color: ['#1db954', '#1ed760'],
    bpm: 120,
    root: 0,
    scale: 'major',
    voice: 'kamyar',
    pattern: {
      kick: H('x...x...x...x...'),
      snare: H('....x.......x...'),
      hihat: H('x.x.x.x.x.x.x.x.'),
      bass: M('0...0...5...5...'),
      lead: Array(STEPS).fill(null)
    },
    lyrics: ['Escribe aquí tu letra', 'una línea por verso', 'y cántala con autotune', '¡en el estudio de Kamyar!']
  };
}

const STORE = 'spotifykmm.tracks';

export function loadUserTracks(): Track[] {
  try {
    const a = JSON.parse(localStorage.getItem(STORE) ?? '[]');
    return Array.isArray(a) ? (a as Track[]) : [];
  } catch {
    return [];
  }
}

export function saveUserTracks(tracks: Track[]): void {
  try {
    localStorage.setItem(STORE, JSON.stringify(tracks));
  } catch {
    /* storage full / disabled */
  }
}
