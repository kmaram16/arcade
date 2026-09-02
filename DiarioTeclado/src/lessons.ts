// The touch-typing model: which finger presses each key, the on-screen keyboard
// layout, and a progressive set of lessons. Finger ids are mirrored left/right
// and colour-coded so a learner sees at a glance which finger to use.

export type Finger = 'lp' | 'lr' | 'lm' | 'li' | 'ri' | 'rm' | 'rr' | 'rp' | 'th';

export const FINGER_COLOR: Record<Finger, string> = {
  lp: '#ec4899', // pinkies — pink
  rp: '#ec4899',
  lr: '#f59e0b', // ring — amber
  rr: '#f59e0b',
  lm: '#22c55e', // middle — green
  rm: '#22c55e',
  li: '#3b82f6', // index — blue
  ri: '#3b82f6',
  th: '#94a3b8' // thumbs — grey
};

export type Key = { k: string; f: Finger; wide?: number; label?: string };

// Four visual rows of the main typing block (QWERTY).
export const KEYBOARD: Key[][] = [
  [
    { k: '1', f: 'lp' }, { k: '2', f: 'lr' }, { k: '3', f: 'lm' }, { k: '4', f: 'li' }, { k: '5', f: 'li' },
    { k: '6', f: 'ri' }, { k: '7', f: 'ri' }, { k: '8', f: 'rm' }, { k: '9', f: 'rr' }, { k: '0', f: 'rp' }
  ],
  [
    { k: 'q', f: 'lp' }, { k: 'w', f: 'lr' }, { k: 'e', f: 'lm' }, { k: 'r', f: 'li' }, { k: 't', f: 'li' },
    { k: 'y', f: 'ri' }, { k: 'u', f: 'ri' }, { k: 'i', f: 'rm' }, { k: 'o', f: 'rr' }, { k: 'p', f: 'rp' }
  ],
  [
    { k: 'a', f: 'lp' }, { k: 's', f: 'lr' }, { k: 'd', f: 'lm' }, { k: 'f', f: 'li' }, { k: 'g', f: 'li' },
    { k: 'h', f: 'ri' }, { k: 'j', f: 'ri' }, { k: 'k', f: 'rm' }, { k: 'l', f: 'rr' }, { k: 'ñ', f: 'rp', label: 'ñ' }
  ],
  [
    { k: 'z', f: 'lp' }, { k: 'x', f: 'lr' }, { k: 'c', f: 'lm' }, { k: 'v', f: 'li' }, { k: 'b', f: 'li' },
    { k: 'n', f: 'ri' }, { k: 'm', f: 'ri' }, { k: ',', f: 'rm', label: ',' }, { k: '.', f: 'rr', label: '.' }, { k: '-', f: 'rp', label: '-' }
  ]
];

// char -> finger lookup (includes a few punctuation aliases and space).
export const KEY_FINGER: Record<string, Finger> = { ' ': 'th' };
for (const row of KEYBOARD) for (const key of row) KEY_FINGER[key.k] = key.f;
KEY_FINGER[';'] = 'rp';
KEY_FINGER["'"] = 'rp';

export type Lesson = { id: string; nameKey: string; kind: 'drill' | 'words' | 'sentences'; min: number; text?: string };

export const LESSONS: Lesson[] = [
  { id: 'home1', nameKey: 'lsHome1', kind: 'drill', min: 5, text: 'ff jj ff jj fj jf fj jf ffj jjf fjf jfj jf fj ff jj' },
  { id: 'home2', nameKey: 'lsHome2', kind: 'drill', min: 5, text: 'dd kk ss ll dk kd sl ls as la ask lad sad fall dill' },
  { id: 'home3', nameKey: 'lsHome3', kind: 'drill', min: 6, text: 'gh hg fg hj asdf jkl gash half flag dash gala shall' },
  { id: 'top', nameKey: 'lsTop', kind: 'drill', min: 6, text: 'we er io ui rt yu the you try wire quiet route power' },
  { id: 'bottom', nameKey: 'lsBottom', kind: 'drill', min: 7, text: 'vv bb nn mm cave numb move brave zone climb combine' },
  { id: 'numbers', nameKey: 'lsNumbers', kind: 'drill', min: 7, text: '12 34 56 78 90 1 2 3 4 5 6 7 8 9 0 1990 2024 100 42' },
  { id: 'words', nameKey: 'lsWords', kind: 'words', min: 8 },
  { id: 'sentences', nameKey: 'lsSentences', kind: 'sentences', min: 10 }
];
