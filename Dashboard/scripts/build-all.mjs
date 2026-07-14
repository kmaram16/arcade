// Production build orchestrator: assembles the WHOLE arcade into one static
// site so it can be hosted at a single origin (e.g. Vercel) and shared as one
// link — no per-game ports, no PC left running.
//
// Layout of the output (Dashboard/dist):
//   dist/index.html        <- the dashboard (launcher)
//   dist/snake/            <- each game, built with a relative base so it works
//   dist/tetris/              under a sub-path. The dashboard links here via
//   dist/.../                 gameUrl() -> "/<id>/" (see src/games.ts, PROD branch).
//
// Each game is built with `--base=./` so its asset URLs are relative and resolve
// correctly no matter which sub-path it's mounted at. We bypass each game's
// `tsc && vite build` and call Vite directly: we only need the bundle, and a
// stray type error in one game shouldn't block shipping the arcade.

import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, rmSync, cpSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const dashboardRoot = resolve(here, '..');
const reposRoot = resolve(dashboardRoot, '..'); // sibling game folders live here
const distRoot = join(dashboardRoot, 'dist');

const games = JSON.parse(readFileSync(join(dashboardRoot, 'src', 'games.json'), 'utf8'));

const bold = (t) => `\x1b[1m${t}\x1b[0m`;
const dim = (t) => `\x1b[90m${t}\x1b[0m`;
const green = (t) => `\x1b[32m${t}\x1b[0m`;
const red = (t) => `\x1b[31m${t}\x1b[0m`;

// Resolve a project's local Vite binary. Building through the local install
// (rather than npx) keeps it offline and deterministic.
function viteBin(projectRoot) {
  const bin = join(projectRoot, 'node_modules', 'vite', 'bin', 'vite.js');
  return existsSync(bin) ? bin : null;
}

// Run `vite build` in `cwd` with the given base. Returns true on success.
function viteBuild(cwd, base, label) {
  const bin = viteBin(cwd);
  if (!bin) {
    console.log(`  ${red('✗')} ${label.padEnd(16)} ${dim('vite not installed (run npm install)')}`);
    return false;
  }
  const res = spawnSync(process.execPath, [bin, 'build', `--base=${base}`], {
    cwd,
    stdio: 'pipe',
    encoding: 'utf8'
  });
  if (res.status === 0) {
    console.log(`  ${green('✓')} ${label.padEnd(16)} ${dim(`base=${base}`)}`);
    return true;
  }
  console.log(`  ${red('✗')} ${label.padEnd(16)} ${dim('build failed:')}`);
  const out = `${res.stdout ?? ''}${res.stderr ?? ''}`.trim();
  for (const line of out.split('\n').slice(-12)) console.log(`      ${dim(line)}`);
  return false;
}

console.log(bold('\n  🏗  Building the arcade for production\n'));

// 1) Dashboard at the root. This (re)creates dist from scratch, so it must run
//    BEFORE we copy any games into dist/<id>. Built with a RELATIVE base (./)
//    so the whole arcade is portable: it serves correctly from the domain root
//    (Vercel, custom domain) AND from a sub-path (e.g. GitHub Pages' /arcade/).
rmSync(distRoot, { recursive: true, force: true });
if (!viteBuild(dashboardRoot, './', 'dashboard')) {
  console.log(red('\n  Dashboard build failed — aborting.\n'));
  process.exit(1);
}

// 2) Each game into dist/<id>, built with a relative base.
const built = [];
const failed = [];
const missing = [];
for (const game of games) {
  const folder = join(reposRoot, game.folder);
  if (!existsSync(folder)) {
    missing.push(game.id);
    console.log(`  ${dim('○')} ${game.id.padEnd(16)} ${dim('folder not found — skipped')}`);
    continue;
  }
  if (!viteBuild(folder, './', game.id)) {
    failed.push(game.id);
    continue;
  }
  const gameDist = join(folder, 'dist');
  if (!existsSync(gameDist)) {
    failed.push(game.id);
    console.log(`  ${red('✗')} ${game.id.padEnd(16)} ${dim('no dist/ produced')}`);
    continue;
  }
  const dest = join(distRoot, game.id);
  mkdirSync(dest, { recursive: true });
  cpSync(gameDist, dest, { recursive: true });
  built.push(game.id);
}

console.log('');
console.log(`  ${green(`Built ${built.length}/${games.length} games`)} into ${dim('dist/<id>/')}`);
if (missing.length) console.log(`  ${dim(`Skipped (no folder): ${missing.join(', ')}`)}`);
if (failed.length) {
  console.log(`  ${red(`Failed: ${failed.join(', ')}`)}`);
  process.exit(1);
}
console.log(green('\n  Done. Output is in Dashboard/dist — ready to deploy.\n'));
