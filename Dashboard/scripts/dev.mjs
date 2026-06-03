// Dev orchestrator: boots the dashboard AND every game that's actually built,
// each on its own port, from a single `npm run dev`.
//
// A game is "available" when its sibling folder exists and has node_modules.
// "Coming soon" games that haven't been scaffolded yet are simply skipped.

import { spawn, spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const dashboardRoot = resolve(here, '..');
const reposRoot = resolve(dashboardRoot, '..'); // sibling folders live here (e.g. d:\Github)

const games = JSON.parse(readFileSync(join(dashboardRoot, 'src', 'games.json'), 'utf8'));

// ANSI colors so each process's logs are easy to tell apart.
const COLORS = [36, 35, 32, 33, 34, 91, 92, 93, 94, 95, 96];
const c = (code, text) => `\x1b[${code}m${text}\x1b[0m`;
const bold = (text) => `\x1b[1m${text}\x1b[0m`;

// Figure out which games are runnable.
const runnable = [];
const skipped = [];
for (const game of games) {
  const folder = join(reposRoot, game.folder);
  if (!existsSync(folder)) {
    skipped.push({ game, reason: 'not scaffolded yet' });
    continue;
  }
  if (!existsSync(join(folder, 'node_modules'))) {
    skipped.push({ game, reason: `deps not installed — run: npm install (in ${game.folder})` });
    continue;
  }
  runnable.push({ game, folder });
}

// Everything we'll launch: the dashboard first, then each available game.
const tasks = [
  { label: 'dashboard', cwd: dashboardRoot, port: 4100, command: 'npm run dev:dashboard' },
  ...runnable.map(({ game, folder }) => ({
    label: game.id,
    cwd: folder,
    port: game.devPort,
    // --no-open: a game opens when you click its tile, not on boot. (Each game's
    // own config keeps open:true so it still auto-opens when run standalone.)
    command: 'npm run dev -- --no-open'
  }))
];

console.log(bold('\n  🎮 Arcade dev\n'));
tasks.forEach((t, i) => {
  console.log(`  ${c(COLORS[i % COLORS.length], '●')} ${t.label.padEnd(14)} http://localhost:${t.port}`);
});
if (skipped.length) {
  console.log('');
  for (const { game, reason } of skipped) {
    console.log(`  ${c(90, '○')} ${game.id.padEnd(14)} ${c(90, reason)}`);
  }
}
console.log(c(90, '\n  Ctrl+C stops everything.\n'));

const children = [];

function launch(task, index) {
  const color = COLORS[index % COLORS.length];
  const prefix = c(color, `[${task.label}]`);
  // shell:true lets us run "npm run dev" portably on Windows and POSIX.
  // detached (POSIX only) makes the child its own process-group leader so we can
  // signal the whole group on shutdown; on Windows we reap the tree via taskkill.
  const child = spawn(task.command, {
    cwd: task.cwd,
    shell: true,
    detached: process.platform !== 'win32'
  });

  const pipe = (stream, isErr) => {
    let buffer = '';
    stream.on('data', (chunk) => {
      buffer += chunk.toString();
      const lines = buffer.split('\n');
      buffer = lines.pop() ?? '';
      for (const line of lines) {
        const out = `${prefix} ${line}`;
        if (isErr) process.stderr.write(out + '\n');
        else process.stdout.write(out + '\n');
      }
    });
  };
  pipe(child.stdout, false);
  pipe(child.stderr, true);

  child.on('exit', (code) => {
    process.stdout.write(`${prefix} ${c(90, `exited (code ${code ?? 0})`)}\n`);
  });

  children.push(child);
}

tasks.forEach(launch);

// Kill the whole tree on shutdown. On Windows a shell child spawns grandchildren
// (node/vite), so we use taskkill /T to take the tree down; elsewhere SIGTERM.
let shuttingDown = false;
function shutdown() {
  if (shuttingDown) return;
  shuttingDown = true;
  for (const child of children) {
    if (child.pid == null) continue;
    if (process.platform === 'win32') {
      // Synchronous so the whole tree (cmd → npm → node → vite) is reaped
      // before this process exits — async kills can be orphaned on exit.
      spawnSync('taskkill', ['/pid', String(child.pid), '/T', '/F'], { stdio: 'ignore' });
    } else {
      try {
        process.kill(-child.pid, 'SIGTERM'); // kill the child's process group
      } catch {
        try {
          child.kill('SIGTERM');
        } catch {
          /* already gone */
        }
      }
    }
  }
  process.exit(0);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
