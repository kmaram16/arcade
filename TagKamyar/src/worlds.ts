// The runner cycles through many themed worlds. Each theme is just a set of
// colours; the engine cross-fades sky / fog / ground toward the active one so
// the transition between worlds is smooth.
export type WorldTheme = {
  name: string;
  sky: string;
  fog: string;
  ground: string;
  lane: string; // lane-divider / stripe colour
  decor: string; // side scenery colour
  decorAlt: string;
  obstacle: string;
  kind: 'block' | 'tree' | 'crystal' | 'cactus' | 'building' | 'rock'; // side-decor silhouette
};

export const WORLDS: WorldTheme[] = [
  {
    name: 'Ciudad',
    sky: '#9ad0ec',
    fog: '#bfe0f2',
    ground: '#4b5563',
    lane: '#e5e7eb',
    decor: '#64748b',
    decorAlt: '#94a3b8',
    obstacle: '#f97316',
    kind: 'building'
  },
  {
    name: 'Bosque',
    sky: '#bff0c8',
    fog: '#cdeccf',
    ground: '#3f6212',
    lane: '#d9f99d',
    decor: '#166534',
    decorAlt: '#15803d',
    obstacle: '#b45309',
    kind: 'tree'
  },
  {
    name: 'Nieve',
    sky: '#e0f2fe',
    fog: '#eef6ff',
    ground: '#cbd5e1',
    lane: '#ffffff',
    decor: '#94a3b8',
    decorAlt: '#e2e8f0',
    obstacle: '#0ea5e9',
    kind: 'crystal'
  },
  {
    name: 'Desierto',
    sky: '#fde68a',
    fog: '#fef3c7',
    ground: '#d6a760',
    lane: '#fce7b3',
    decor: '#b45309',
    decorAlt: '#d97706',
    obstacle: '#7c2d12',
    kind: 'cactus'
  },
  {
    name: 'Playa',
    sky: '#7dd3fc',
    fog: '#bae6fd',
    ground: '#fcd9a1',
    lane: '#fff7e0',
    decor: '#0ea5e9',
    decorAlt: '#38bdf8',
    obstacle: '#0369a1',
    kind: 'rock'
  },
  {
    name: 'Volcán',
    sky: '#fda4af',
    fog: '#fecdd3',
    ground: '#9a3412',
    lane: '#fde68a',
    decor: '#ea580c',
    decorAlt: '#f97316',
    obstacle: '#7c2d12',
    kind: 'rock'
  },
  {
    name: 'Espacio',
    sky: '#c4b5fd',
    fog: '#ddd6fe',
    ground: '#6d28d9',
    lane: '#ede9fe',
    decor: '#7c3aed',
    decorAlt: '#a855f7',
    obstacle: '#0ea5e9',
    kind: 'crystal'
  },
  {
    name: 'Cielo',
    sky: '#c7d2fe',
    fog: '#e0e7ff',
    ground: '#a5b4fc',
    lane: '#ffffff',
    decor: '#e0e7ff',
    decorAlt: '#ffffff',
    obstacle: '#f472b6',
    kind: 'block'
  }
];
