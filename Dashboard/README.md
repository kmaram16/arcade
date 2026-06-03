# Arcade Dashboard

A launcher for the mini-game collection. Each game is its **own standalone
project** (own folder, own `package.json`, own dev port) — the dashboard simply
lists them all and opens the one you pick.

## Setup

```bash
cd d:\Github\Dashboard
npm install
npm run dev
```

**One command boots everything.** `npm run dev` starts the dashboard on
**http://localhost:4100** *and* every game that's actually built — each on its
own port — in a single process. No need to start each game by hand. Press
**Ctrl+C** once to stop them all.

The launcher ([`scripts/dev.mjs`](scripts/dev.mjs)) scans the sibling folders
listed in [`src/games.json`](src/games.json):

- folder exists **with** `node_modules` → that game's dev server is launched.
- folder missing, or deps not installed → it's skipped (and noted in the
  startup log), so unbuilt "coming soon" games don't break the boot.

## How it works

- Every game is registered in [`src/games.json`](src/games.json) with a name,
  tagline, icon, difficulty, status, `devPort`, and `folder`. The dashboard UI
  and the dev launcher read this same file.
- A game tile is **playable** when its `status` is `'ready'`. Clicking it opens
  the game's already-running dev server (`http://localhost:<devPort>`) in a
  new tab.
- Tiles marked `'soon'` are shown but greyed out until the game is built.

Ports are pinned with `strictPort` so the launcher's "Play" links never drift.

## Adding / activating a game

1. Scaffold the game in its own folder, matching the `folder` field in
   `src/games.json` (e.g. `d:\Github\Tetris`). Copy Snake's structure for a
   matching stack.
2. In that game's `vite.config.ts`, set `server.port` to the `devPort` listed
   for it in `src/games.json`, and add `strictPort: true`.
3. Run `npm install` in the game's folder.
4. Flip that game's `status` to `'ready'` in `src/games.json`.

After that, `npm run dev` here will boot it automatically alongside the rest.

### Port map

| Port | Game |
|------|------|
| 4100 | Dashboard (this app) |
| 4173 | Snake ✅ |
| 4174 | Tetris |
| 4175 | Breakout |
| 4176 | Pong |
| 4177 | Flappy |
| 4178 | 2048 |
| 4179 | Minesweeper |
| 4180 | Memory Match |
| 4181 | Whack-a-Mole |
| 4182 | Space Invaders |
| 4183 | Simon |
| 4184 | Asteroids |

## Production

For a deployed build, host each game's `dist/` somewhere and set the game's
`buildUrl` in `src/games.ts`; the launcher uses `buildUrl` when present and
falls back to the dev URL otherwise.
