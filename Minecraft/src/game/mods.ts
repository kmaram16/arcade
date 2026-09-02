// Mods & hacks the player picks on the start screen. Each one has a real effect:
// hacks flip behaviour flags in the engine; mods unlock themed blocks/tools and,
// for some, switch on extra systems (mobs, weather, nether sky…).

import { BlockType } from './blocks';

export interface HackDef {
  id: string;
  name: string;
  emoji: string;
  desc: string;
}

export interface ModDef {
  id: string;
  name: string;
  emoji: string;
  desc: string;
}

export const HACKS: HackDef[] = [
  { id: 'xray', name: 'X-Ray', emoji: '👁️', desc: 'See through dirt & stone to spot ores.' },
  { id: 'killaura', name: 'KillAura', emoji: '⚔️', desc: 'Auto-attack any mob that comes close.' },
  { id: 'fly', name: 'Creative Fly', emoji: '🕊️', desc: 'Fly freely — Space up, Shift down (toggle with F).' },
  { id: 'speed', name: 'Speed', emoji: '💨', desc: 'Run much, much faster.' },
  { id: 'superjump', name: 'Super Jump', emoji: '🦘', desc: 'Leap several blocks into the air.' },
  { id: 'noclip', name: 'No-Clip', emoji: '👻', desc: 'Walk straight through walls.' },
  { id: 'reach', name: 'Super Reach', emoji: '🤏', desc: 'Mine and place from far away.' },
  { id: 'nuker', name: 'Nuker', emoji: '🪓', desc: 'Smash a whole cluster of blocks at once.' },
  { id: 'jetpack', name: 'Jetpack', emoji: '🚀', desc: 'Hold Space to rocket upward.' },
  { id: 'fullbright', name: 'Fullbright', emoji: '💡', desc: 'Always bright — night never falls dark.' }
];

export const MODS: ModDef[] = [
  { id: 'realism', name: 'Realism', emoji: '🌅', desc: 'Real sun shadows, filmic light & richer color.' },
  { id: 'mechanics', name: 'Real Mechanics', emoji: '🪓', desc: 'Trees topple when chopped; sand & gravel fall.' },
  { id: 'security', name: 'Security', emoji: '🛡️', desc: 'Steel, cameras & glowing lasers.' },
  { id: 'special', name: 'Special Blocks', emoji: '✨', desc: 'Bouncy slime, slippery ice, neon & clouds.' },
  { id: 'heroes', name: 'Super Heroes', emoji: '🦸', desc: 'Hero blocks + super speed & jump.' },
  { id: 'mobs', name: 'Mobs', emoji: '🧟', desc: 'Zombies & pigs roam the world.' },
  { id: 'ores', name: 'More Ores', emoji: '⛏️', desc: 'Ores buried underground (try with X-Ray).' },
  { id: 'decorations', name: 'Decorations', emoji: '🌹', desc: 'Flowers, lamps, mushrooms & hay.' },
  { id: 'explosives', name: 'Mega Explosives', emoji: '💣', desc: 'Nukes & dynamite — much bigger blasts.' },
  { id: 'weather', name: 'Weather', emoji: '🌧️', desc: 'Rain pours across the whole world.' },
  { id: 'nether', name: 'Nether', emoji: '🔥', desc: 'Netherrack, lava, soul sand & a red sky.' },
  { id: 'rainbow', name: 'Rainbow', emoji: '🌈', desc: 'Colour-cycling rainbow blocks.' },
  { id: 'tools', name: 'Tools+', emoji: '🔨', desc: 'Diamond pickaxe, sword & a 3×3 hammer.' }
];

/** Blocks each mod unlocks in the inventory. */
export const MOD_BLOCKS: Record<string, BlockType[]> = {
  security: ['steel_block', 'security_camera', 'laser_block'],
  special: ['slime_block', 'ice_block', 'neon_block', 'cloud_block'],
  heroes: ['ironman_block', 'cap_block', 'hulk_block', 'thor_block'],
  mobs: [],
  ores: ['coal_ore', 'iron_ore', 'gold_ore', 'diamond_ore', 'emerald_ore'],
  decorations: ['rose_block', 'lamp_block', 'mushroom_block', 'hay_block'],
  explosives: ['nuke_block', 'dynamite_block'],
  weather: [],
  nether: ['netherrack', 'soul_sand', 'lava_block', 'quartz_block'],
  rainbow: ['rainbow_block', 'magenta_glass'],
  tools: []
};

/** Tool items each mod unlocks. */
export const MOD_TOOLS: Record<string, string[]> = {
  tools: ['diamond_pickaxe', 'diamond_sword', 'hammer']
};
