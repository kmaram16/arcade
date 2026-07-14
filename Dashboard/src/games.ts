// Central registry of every mini-game in the arcade.
//
// The data lives in games.json so the dev launcher (scripts/dev.mjs) can read
// the exact same list this UI does — one source of truth.
//
// Model: each game is its OWN standalone Vite project (its own folder, its own
// package.json, its own dev port) — exactly like the Snake project.
//
//   `npm run dev` in this folder boots the dashboard AND every game whose folder
//   exists with deps installed, each on its own port. Nothing to start by hand.
//
// To bring a game online:
//   1. Scaffold it in its own folder (the `folder` field below).
//   2. Give its vite.config.ts the `port` matching `devPort` below.
//   3. Run `npm install` in it, then flip `status` to 'ready' here.

import data from './games.json';

export type GameStatus = 'ready' | 'soon';

/** Tiles are either playable games or streaming apps (shown in their own row). */
export type GameKind = 'game' | 'app';

export type Game = {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  /** [from, to] for the card's icon-tile gradient. */
  accent: [string, string];
  status: GameStatus;
  /** Local dev-server port for this game's standalone project. */
  devPort: number;
  /** Difficulty of building the game, shown as a tag. Omitted for apps. */
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  /** Sibling folder name that holds the game's project. */
  folder: string;
  /** 'game' (default) or 'app' for the streaming apps. */
  kind?: GameKind;
  /** Tag shown on app tiles in place of difficulty (e.g. "Streaming"). */
  category?: string;
  /** Optional explicit production URL; falls back to the dev URL otherwise. */
  buildUrl?: string;
};

export const GAMES = data as unknown as Game[];

/** The URL the launcher opens for a given game. */
export function gameUrl(game: Game): string {
  // Production (the deployed arcade): every game ships under the SAME origin as
  // the dashboard, at <id>/ relative to it (built by scripts/build-all.mjs). A
  // truly relative path (no leading slash) resolves against wherever the
  // dashboard was served — so it works the same at the domain root (vercel.app,
  // a custom domain) AND under a sub-path (e.g. GitHub Pages' /arcade/).
  if (import.meta.env.PROD) {
    return game.buildUrl ?? `${game.id}/`;
  }
  // Dev: each game is its own Vite server on its own port. Use the same host the
  // dashboard was loaded from (localhost on this PC, or the PC's LAN IP when
  // opened from another device) so links hit the PC running the servers.
  const host =
    typeof window !== 'undefined' ? window.location.hostname : 'localhost';
  return game.buildUrl ?? `http://${host}:${game.devPort}`;
}
