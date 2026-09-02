// The crafting engine.
//
// Two layers:
//  1. A CURATED tree (~55 elements) with a hand-made recipe for every step, each
//     element named in all 9 languages. This is the "designed" core — Water + Fire
//     = Steam, all the way up to the KMM heroes (Kamyar, Martina, Javier, Norberto).
//  2. PROCEDURAL fusion for every pair that isn't curated. Any two things fuse into
//     a brand-new element — a portmanteau of the two names (or a glyph-join for
//     Chinese/Japanese/Arabic) with a deterministic emoji. That's what makes the
//     game infinite: you can mix anything, even things that couldn't exist.
//
// Ids are language-independent; only the DISPLAY name is localized, so switching
// language re-labels every element (procedural ones re-blend from their parents).

import { LANG_ORDER, type Lang } from './i18n';

type Nine = [string, string, string, string, string, string, string, string, string];

// id, emoji, [es,en,pt,fr,de,it,zh,ja,ar]
const C: { id: string; emoji: string; names: Nine }[] = [
  // — Base —
  { id: 'water', emoji: '💧', names: ['Agua', 'Water', 'Água', 'Eau', 'Wasser', 'Acqua', '水', '水', 'ماء'] },
  { id: 'fire', emoji: '🔥', names: ['Fuego', 'Fire', 'Fogo', 'Feu', 'Feuer', 'Fuoco', '火', '火', 'نار'] },
  { id: 'earth', emoji: '🌍', names: ['Tierra', 'Earth', 'Terra', 'Terre', 'Erde', 'Terra', '土', '土', 'أرض'] },
  { id: 'wind', emoji: '💨', names: ['Viento', 'Wind', 'Vento', 'Vent', 'Wind', 'Vento', '风', '風', 'رياح'] },
  // — Tier 1 —
  { id: 'steam', emoji: '♨️', names: ['Vapor', 'Steam', 'Vapor', 'Vapeur', 'Dampf', 'Vapore', '蒸汽', '蒸気', 'بخار'] },
  { id: 'plant', emoji: '🌱', names: ['Planta', 'Plant', 'Planta', 'Plante', 'Pflanze', 'Pianta', '植物', '植物', 'نبات'] },
  { id: 'wave', emoji: '💦', names: ['Ola', 'Wave', 'Onda', 'Vague', 'Welle', 'Onda', '波浪', '波', 'موجة'] },
  { id: 'lake', emoji: '🏞️', names: ['Lago', 'Lake', 'Lago', 'Lac', 'See', 'Lago', '湖', '湖', 'بحيرة'] },
  { id: 'lava', emoji: '🌋', names: ['Lava', 'Lava', 'Lava', 'Lave', 'Lava', 'Lava', '熔岩', '溶岩', 'حمم'] },
  { id: 'smoke', emoji: '🌫️', names: ['Humo', 'Smoke', 'Fumaça', 'Fumée', 'Rauch', 'Fumo', '烟', '煙', 'دخان'] },
  { id: 'sun', emoji: '☀️', names: ['Sol', 'Sun', 'Sol', 'Soleil', 'Sonne', 'Sole', '太阳', '太陽', 'شمس'] },
  { id: 'dust', emoji: '🟫', names: ['Polvo', 'Dust', 'Poeira', 'Poussière', 'Staub', 'Polvere', '尘土', '塵', 'غبار'] },
  { id: 'mountain', emoji: '⛰️', names: ['Montaña', 'Mountain', 'Montanha', 'Montagne', 'Berg', 'Montagna', '山', '山', 'جبل'] },
  { id: 'tornado', emoji: '🌪️', names: ['Tornado', 'Tornado', 'Tornado', 'Tornade', 'Tornado', 'Tornado', '龙卷风', '竜巻', 'إعصار'] },
  // — Tier 2 —
  { id: 'cloud', emoji: '☁️', names: ['Nube', 'Cloud', 'Nuvem', 'Nuage', 'Wolke', 'Nuvola', '云', '雲', 'سحابة'] },
  { id: 'stone', emoji: '🪨', names: ['Piedra', 'Stone', 'Pedra', 'Pierre', 'Stein', 'Pietra', '石头', '石', 'حجر'] },
  { id: 'tree', emoji: '🌳', names: ['Árbol', 'Tree', 'Árvore', 'Arbre', 'Baum', 'Albero', '树', '木', 'شجرة'] },
  { id: 'flower', emoji: '🌸', names: ['Flor', 'Flower', 'Flor', 'Fleur', 'Blume', 'Fiore', '花', '花', 'زهرة'] },
  { id: 'swamp', emoji: '🐸', names: ['Pantano', 'Swamp', 'Pântano', 'Marais', 'Sumpf', 'Palude', '沼泽', '沼', 'مستنقع'] },
  { id: 'ocean', emoji: '🌊', names: ['Océano', 'Ocean', 'Oceano', 'Océan', 'Ozean', 'Oceano', '海洋', '海', 'محيط'] },
  { id: 'sand', emoji: '🏜️', names: ['Arena', 'Sand', 'Areia', 'Sable', 'Sand', 'Sabbia', '沙子', '砂', 'رمل'] },
  { id: 'metal', emoji: '🔩', names: ['Metal', 'Metal', 'Metal', 'Métal', 'Metall', 'Metallo', '金属', '金属', 'معدن'] },
  // — Tier 3 —
  { id: 'glass', emoji: '🔷', names: ['Vidrio', 'Glass', 'Vidro', 'Verre', 'Glas', 'Vetro', '玻璃', 'ガラス', 'زجاج'] },
  { id: 'rain', emoji: '🌧️', names: ['Lluvia', 'Rain', 'Chuva', 'Pluie', 'Regen', 'Pioggia', '雨', '雨', 'مطر'] },
  { id: 'lightning', emoji: '⚡', names: ['Rayo', 'Lightning', 'Raio', 'Éclair', 'Blitz', 'Fulmine', '闪电', '稲妻', 'برق'] },
  { id: 'forest', emoji: '🌲', names: ['Bosque', 'Forest', 'Floresta', 'Forêt', 'Wald', 'Foresta', '森林', '森', 'غابة'] },
  { id: 'beach', emoji: '🏖️', names: ['Playa', 'Beach', 'Praia', 'Plage', 'Strand', 'Spiaggia', '海滩', '浜', 'شاطئ'] },
  { id: 'rainbow', emoji: '🌈', names: ['Arcoíris', 'Rainbow', 'Arco-íris', 'Arc-en-ciel', 'Regenbogen', 'Arcobaleno', '彩虹', '虹', 'قوس قزح'] },
  { id: 'storm', emoji: '⛈️', names: ['Tormenta', 'Storm', 'Tempestade', 'Tempête', 'Sturm', 'Tempesta', '暴风', '嵐', 'عاصفة'] },
  // — Tier 4 —
  { id: 'life', emoji: '🧬', names: ['Vida', 'Life', 'Vida', 'Vie', 'Leben', 'Vita', '生命', '生命', 'حياة'] },
  { id: 'darkness', emoji: '🌑', names: ['Oscuridad', 'Darkness', 'Escuridão', 'Ténèbres', 'Dunkelheit', 'Oscurità', '黑暗', '闇', 'ظلام'] },
  { id: 'star', emoji: '⭐', names: ['Estrella', 'Star', 'Estrela', 'Étoile', 'Stern', 'Stella', '星星', '星', 'نجمة'] },
  { id: 'volcano', emoji: '🗻', names: ['Volcán', 'Volcano', 'Vulcão', 'Volcan', 'Vulkan', 'Vulcano', '火山', '火山', 'بركان'] },
  // — Tier 5 (life) —
  { id: 'human', emoji: '🧑', names: ['Humano', 'Human', 'Humano', 'Humain', 'Mensch', 'Umano', '人类', '人間', 'إنسان'] },
  { id: 'animal', emoji: '🐾', names: ['Animal', 'Animal', 'Animal', 'Animal', 'Tier', 'Animale', '动物', '動物', 'حيوان'] },
  { id: 'fish', emoji: '🐟', names: ['Pez', 'Fish', 'Peixe', 'Poisson', 'Fisch', 'Pesce', '鱼', '魚', 'سمكة'] },
  { id: 'lizard', emoji: '🦎', names: ['Lagarto', 'Lizard', 'Lagarto', 'Lézard', 'Echse', 'Lucertola', '蜥蜴', 'トカゲ', 'سحلية'] },
  // — Tier 6 —
  { id: 'dragon', emoji: '🐉', names: ['Dragón', 'Dragon', 'Dragão', 'Dragon', 'Drache', 'Drago', '龙', 'ドラゴン', 'تنين'] },
  { id: 'robot', emoji: '🤖', names: ['Robot', 'Robot', 'Robô', 'Robot', 'Roboter', 'Robot', '机器人', 'ロボット', 'روبوت'] },
  { id: 'house', emoji: '🏠', names: ['Casa', 'House', 'Casa', 'Maison', 'Haus', 'Casa', '房子', '家', 'منزل'] },
  { id: 'superhero', emoji: '🦸', names: ['Superhéroe', 'Superhero', 'Super-herói', 'Super-héros', 'Superheld', 'Supereroe', '超级英雄', 'ヒーロー', 'بطل خارق'] },
  { id: 'ninja', emoji: '🥷', names: ['Ninja', 'Ninja', 'Ninja', 'Ninja', 'Ninja', 'Ninja', '忍者', '忍者', 'نينجا'] },
  { id: 'demon', emoji: '👹', names: ['Demonio', 'Demon', 'Demônio', 'Démon', 'Dämon', 'Demone', '恶魔', '悪魔', 'شيطان'] },
  { id: 'zombie', emoji: '🧟', names: ['Zombi', 'Zombie', 'Zumbi', 'Zombie', 'Zombie', 'Zombie', '僵尸', 'ゾンビ', 'زومبي'] },
  { id: 'angel', emoji: '👼', names: ['Ángel', 'Angel', 'Anjo', 'Ange', 'Engel', 'Angelo', '天使', '天使', 'ملاك'] },
  { id: 'unicorn', emoji: '🦄', names: ['Unicornio', 'Unicorn', 'Unicórnio', 'Licorne', 'Einhorn', 'Unicorno', '独角兽', 'ユニコーン', 'وحيد القرن'] },
  { id: 'mermaid', emoji: '🧜‍♀️', names: ['Sirena', 'Mermaid', 'Sereia', 'Sirène', 'Meerjungfrau', 'Sirena', '美人鱼', '人魚', 'حورية البحر'] },
  // — Tier 7 —
  { id: 'city', emoji: '🏙️', names: ['Ciudad', 'City', 'Cidade', 'Ville', 'Stadt', 'Città', '城市', '都市', 'مدينة'] },
  { id: 'god', emoji: '🔱', names: ['Dios', 'God', 'Deus', 'Dieu', 'Gott', 'Dio', '神', '神', 'إله'] },
  { id: 'wizard', emoji: '🧙', names: ['Mago', 'Wizard', 'Mago', 'Sorcier', 'Zauberer', 'Mago', '巫师', '魔法使い', 'ساحر'] }
];

// KMM heroes — proper names, the same in every language.
const HEROES: { id: string; emoji: string; name: string }[] = [
  { id: 'kamyar', emoji: '🧒', name: 'Kamyar' },
  { id: 'martina', emoji: '👧', name: 'Martina' },
  { id: 'javier', emoji: '🦸‍♂️', name: 'Javier' },
  { id: 'norberto', emoji: '😈', name: 'Norberto' }
];

export const BASE_IDS = ['water', 'fire', 'earth', 'wind'];

const EMOJI: Record<string, string> = {};
const NAMES: Record<string, Nine> = {};
for (const e of C) {
  EMOJI[e.id] = e.emoji;
  NAMES[e.id] = e.names;
}
for (const h of HEROES) {
  EMOJI[h.id] = h.emoji;
  NAMES[h.id] = [h.name, h.name, h.name, h.name, h.name, h.name, h.name, h.name, h.name];
}

const pairKey = (a: string, b: string) => (a < b ? `${a}+${b}` : `${b}+${a}`);

// Recipes: order-independent (the key is sorted). Each result is reachable from
// the base four, so the whole tree can be discovered from scratch.
const RECIPES: Record<string, string> = {};
const R = (a: string, b: string, out: string) => {
  RECIPES[pairKey(a, b)] = out;
};

R('water', 'fire', 'steam');
R('water', 'earth', 'plant');
R('water', 'wind', 'wave');
R('water', 'water', 'lake');
R('fire', 'earth', 'lava');
R('fire', 'wind', 'smoke');
R('fire', 'fire', 'sun');
R('earth', 'wind', 'dust');
R('earth', 'earth', 'mountain');
R('wind', 'wind', 'tornado');
R('steam', 'wind', 'cloud');
R('lava', 'water', 'stone');
R('plant', 'earth', 'tree');
R('plant', 'sun', 'flower');
R('plant', 'water', 'swamp');
R('wave', 'wave', 'ocean');
R('dust', 'dust', 'sand');
R('stone', 'fire', 'metal');
R('sand', 'fire', 'glass');
R('cloud', 'water', 'rain');
R('cloud', 'fire', 'lightning');
R('tree', 'tree', 'forest');
R('sand', 'water', 'beach');
R('rain', 'sun', 'rainbow');
R('rain', 'wind', 'storm');
R('swamp', 'lightning', 'life');
R('smoke', 'smoke', 'darkness');
R('sun', 'sun', 'star');
R('lava', 'mountain', 'volcano');
R('life', 'earth', 'human');
R('life', 'forest', 'animal');
R('life', 'water', 'fish');
R('life', 'fire', 'lizard');
R('lizard', 'fire', 'dragon');
R('human', 'metal', 'robot');
R('human', 'stone', 'house');
R('human', 'lightning', 'superhero');
R('human', 'smoke', 'ninja');
R('human', 'lava', 'demon');
R('human', 'swamp', 'zombie');
R('human', 'cloud', 'angel');
R('animal', 'flower', 'unicorn');
R('human', 'fish', 'mermaid');
R('house', 'house', 'city');
R('human', 'star', 'god');
R('human', 'rainbow', 'wizard');
R('superhero', 'rainbow', 'kamyar');
R('flower', 'rainbow', 'martina');
R('superhero', 'smoke', 'javier');
R('demon', 'darkness', 'norberto');

// ——— Procedural fusion (the infinite tail) ———

const FUSION_EMOJI = [
  '✨', '🌀', '🔮', '🧪', '⚗️', '💫', '👁️', '🪐', '🌌', '🦠',
  '👾', '🧿', '💥', '🍥', '🧬', '🛸', '🕳️', '☄️', '🧲', '🎇', '🫧', '🌟'
];

// djb2 — small, stable string hash so the same pair always yields the same fusion.
function hash(s: string): number {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

const CJK: Lang[] = ['zh', 'ja'];

/** Blend two localized names into a new one — a portmanteau for Latin scripts,
 *  a glyph-join for CJK, a spaced join for Arabic. Keeps results in-language. */
function blend(a: string, b: string, lang: Lang): string {
  a = a.trim();
  b = b.trim();
  if (CJK.includes(lang)) return a + b;
  if (lang === 'ar') return `${a} ${b}`;
  const ha = Math.max(1, Math.ceil(a.length * 0.55));
  const hb = Math.min(b.length - 1, Math.floor(b.length * 0.45));
  let out = (a.slice(0, ha) + b.slice(hb)).toLowerCase();
  if (out.length < 3) out = `${a}-${b}`;
  return out.charAt(0).toUpperCase() + out.slice(1);
}

// Procedural elements, keyed by their fusion id, remembering their two parents
// (so their name can be re-blended in any language) and a stable emoji.
type Gen = { emoji: string; parents: [string, string] };
const genRegistry = new Map<string, Gen>();

const isFusion = (id: string) => id.startsWith('f:');

/** Restore procedural elements saved from a previous session. */
export function hydrateGen(saved: Record<string, Gen> | null | undefined): void {
  if (!saved) return;
  for (const [id, g] of Object.entries(saved)) {
    if (g && Array.isArray(g.parents) && g.parents.length === 2) genRegistry.set(id, g);
  }
}

/** Serialize procedural elements for persistence. */
export function serializeGen(): Record<string, Gen> {
  return Object.fromEntries(genRegistry.entries());
}

/** Combine two element ids into a result id (curated recipe, else a fusion). */
export function combine(a: string, b: string): string {
  const hit = RECIPES[pairKey(a, b)];
  if (hit) return hit;
  const id = `f:${hash(pairKey(a, b)).toString(36)}`;
  if (!genRegistry.has(id)) {
    const parents: [string, string] = a < b ? [a, b] : [b, a];
    genRegistry.set(id, { emoji: FUSION_EMOJI[hash(id) % FUSION_EMOJI.length], parents });
  }
  return id;
}

/** The emoji for an element id. */
export function emojiOf(id: string): string {
  if (EMOJI[id]) return EMOJI[id];
  const g = genRegistry.get(id);
  return g ? g.emoji : '✨';
}

/** The localized display name for an element id. */
export function nameOf(id: string, lang: Lang): string {
  const idx = Math.max(0, LANG_ORDER.indexOf(lang));
  const curated = NAMES[id];
  if (curated) return curated[idx] ?? curated[1] ?? id;
  const g = genRegistry.get(id);
  if (g) return blend(nameOf(g.parents[0], lang), nameOf(g.parents[1], lang), lang);
  return id;
}

/** Whether an id names a procedurally-fused (impossible) element. */
export function isImpossible(id: string): boolean {
  return isFusion(id);
}

// Reverse recipe lookup: which pair first makes a given element (for its "what
// is this" description).
const MADE_BY: Record<string, [string, string]> = {};
for (const [key, out] of Object.entries(RECIPES)) {
  if (!MADE_BY[out]) {
    const [a, b] = key.split('+');
    MADE_BY[out] = [a, b];
  }
}

/** Whether an id is one of the four base elements. */
export function isBase(id: string): boolean {
  return BASE_IDS.includes(id);
}

/** The two parents an element came from — its curated recipe, or a fusion's
 *  parents — or null for a base element / unknown. */
export function parentsOf(id: string): [string, string] | null {
  if (MADE_BY[id]) return MADE_BY[id];
  const g = genRegistry.get(id);
  return g ? g.parents : null;
}
