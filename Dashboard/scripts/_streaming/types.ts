// Shared data shapes for every streaming app (Netflix/Disney/Prime/HBO/Movistar).
// Each app ships an identical copy of this file; only its `theme.ts` differs.

/** A cast member — the actors of the "movie", shown in the detail sheet and
 *  brought to life (emoji avatar + name + spoken lines) in the player scene. */
export type Character = {
  id: string;
  name: string;
  /** Protagonista / Secundario / Villano / Cameo — drives the lines they say. */
  role: string;
  emoji: string;
  color: string;
};

/** A prop / object that appears in the movie (floats around the player scene). */
export type Prop = {
  id: string;
  name: string;
  emoji: string;
};

/** One line of dialogue. charId points at a Character; '' means narrator. */
export type Line = {
  charId: string;
  text: string;
};

/** A chapter of the movie: its own backdrop + ordered script. */
export type Scene = {
  id: string;
  title: string;
  /** Optional backdrop gradient; falls back to the movie's colors. */
  colors?: [string, string];
  script: Line[];
};

export type Movie = {
  id: string;
  title: string;
  year: number;
  genre: string;
  /** Age rating chip: TODOS / 7+ / 12+ / 16+ / 18+. */
  rating: string;
  /** "1h 52m", "2 temporadas", etc. — used as the player's total length. */
  duration: string;
  /** Row this title appears under on the home page. */
  category: string;
  emoji: string;
  /** [from, to] gradient for the poster art. */
  colors: [string, string];
  synopsis: string;
  /** The cast you can build — actors that perform in the player scene. */
  cast?: Character[];
  /** Objects / props that appear floating in the scene. */
  props?: Prop[];
  /** Chapters with their own backdrop and dialogue. */
  scenes?: Scene[];
  /** The one title that headlines the hero banner. */
  featured?: boolean;
  /** True for titles the user created with "+ Crear peli". */
  custom?: boolean;
};

export type Theme = {
  /** Wordmark, e.g. "NETFLIX". */
  brand: string;
  /** The playful byline under it, e.g. "por kamyar xd". */
  byline: string;
  /** Unique localStorage namespace (all apps share one origin in prod). */
  storageKey: string;
  accent: string;
  accent2: string;
  bg: string;
  surface: string;
  catalog: Movie[];
};
