// Game modes + the "multiplayer" server browser.
//
// Modes change the rules the engine enforces (see engine.ts):
//   creative  — fly, no damage, build freely (the classic sandbox).
//   survival  — hearts, fall/lava/mob damage, slow regen, respawn on death.
//   hardcore  — survival, but a single death ends the world (game over).
//   spectator — fly through everything, invincible, can't break/place/hit.
//
// "Servers" are single-player presets dressed up as a YouTuber server list:
// joining one just launches a world with that mode + world type + mods.

import { WorldType } from './world';

export type GameMode = 'survival' | 'creative' | 'hardcore' | 'spectator' | 'deathban';

export interface ModeDef {
  id: GameMode;
  name: string;
  emoji: string;
  desc: string;
}

export const MODES: ModeDef[] = [
  { id: 'survival', name: 'Survival', emoji: '🗡️', desc: 'Hearts, fall & mob damage. Stay alive!' },
  { id: 'creative', name: 'Creative', emoji: '🎨', desc: 'Fly, no damage, build anything.' },
  { id: 'hardcore', name: 'Hardcore', emoji: '💀', desc: 'Survival — but one death ends the world.' },
  { id: 'deathban', name: 'DeathBan', emoji: '⏳', desc: 'Estilo DanoMC: si mueres, baneo temporal.' },
  { id: 'spectator', name: 'Spectator', emoji: '👀', desc: 'Fly through everything. Look, don’t touch.' }
];

export const MODE_LABEL: Record<GameMode, string> = {
  survival: 'Survival',
  creative: 'Creative',
  hardcore: 'Hardcore',
  deathban: 'DeathBan',
  spectator: 'Spectator'
};

export interface ServerDef {
  id: string;
  name: string;
  /** Server-list icon. */
  emoji: string;
  /** "Message of the day" line under the name. */
  motd: string;
  /** Fake online count, shown in the list. */
  players: number;
  /** Connection quality bars (1–5), purely cosmetic. */
  ping: number;
  mode: GameMode;
  worldType: WorldType;
  mods: string[];
  hacks?: string[];
}

// A spread of famous + YouTuber-flavoured servers. Each loads a different world
// so "joining" actually feels distinct.
export const SERVERS: ServerDef[] = [
  {
    id: 'hypixel', name: 'Hypixel Network', emoji: '🟡',
    motd: 'The #1 Minecraft server — minigames & more!',
    players: 98234, ping: 5, mode: 'survival', worldType: 'normal',
    mods: ['mobs', 'ores', 'decorations', 'tools']
  },
  {
    id: 'mikecrack', name: 'El Mundo de Mike', emoji: '🐶',
    motd: '¡El server de Mikecrack y los compas!',
    players: 45120, ping: 4, mode: 'creative', worldType: 'normal',
    mods: ['rainbow', 'decorations', 'mobs', 'special']
  },
  {
    id: 'karmaland', name: 'Karmaland — Vegetta777', emoji: '🟣',
    motd: 'Aventuras, mods y caos con la banda.',
    players: 31002, ping: 4, mode: 'survival', worldType: 'normal',
    mods: ['mobs', 'ores', 'tools', 'explosives']
  },
  {
    id: 'rubius', name: 'Rubius SMP', emoji: '🔴',
    motd: '¡Sobrevive si puedes! Una vida.',
    players: 52310, ping: 3, mode: 'hardcore', worldType: 'normal',
    mods: ['mobs', 'ores', 'tools']
  },
  {
    id: 'danomc', name: 'DanoMC', emoji: '🟠',
    motd: '¡DeathBan! Si mueres, baneo temporal.',
    players: 38940, ping: 4, mode: 'deathban', worldType: 'normal',
    mods: ['mobs', 'ores', 'tools']
  },
  {
    id: 'dreamsmp', name: 'Dream SMP', emoji: '🟢',
    motd: 'Manhunt, TNT & total chaos.',
    players: 27771, ping: 4, mode: 'survival', worldType: 'normal',
    mods: ['mobs', 'explosives', 'tools']
  },
  {
    id: 'grefg', name: 'TheGrefg — Floppy World', emoji: '🔵',
    motd: 'Build battles on a flat canvas.',
    players: 19880, ping: 5, mode: 'creative', worldType: 'flat',
    mods: ['decorations', 'rainbow', 'special', 'heroes']
  },
  {
    id: 'preston', name: 'PrestonPlayz Explosives', emoji: '💣',
    motd: 'Nukes, dynamite & giant craters!',
    players: 14302, ping: 3, mode: 'creative', worldType: 'flat',
    mods: ['explosives', 'tools', 'special']
  },
  {
    id: 'sky', name: 'Skywars Islands', emoji: '🏝️',
    motd: 'One island, one chance. Survive the void.',
    players: 6651, ping: 4, mode: 'hardcore', worldType: 'skyblock',
    mods: ['mobs', 'tools']
  },
  {
    id: 'kmm', name: 'KMM Realms', emoji: '⛏️',
    motd: 'Tu reino privado — build with friends.',
    players: 1, ping: 5, mode: 'creative', worldType: 'oneblock',
    mods: ['decorations', 'rainbow']
  }
];
