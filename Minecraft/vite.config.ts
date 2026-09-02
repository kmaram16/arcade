import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { spawn, type ChildProcess } from 'node:child_process';

// Boot the multiplayer relay (server/chat.mjs) alongside the dev server, so a
// single `npm run dev` (or the arcade launcher) brings the whole game online.
// Dev-only: never runs for `vite build` / `vite preview`.
function multiplayerServer(): PluginOption {
  let child: ChildProcess | undefined;
  return {
    name: 'mc-multiplayer-server',
    apply: 'serve',
    configureServer() {
      if (child) return;
      child = spawn('node', ['server/chat.mjs'], { stdio: 'inherit' });
      child.on('error', (e) => console.error('[mc-net] failed to start relay:', e.message));
      const kill = () => { try { child?.kill(); } catch { /* already gone */ } };
      process.once('exit', kill);
      process.once('SIGINT', () => { kill(); process.exit(0); });
      process.once('SIGTERM', () => { kill(); process.exit(0); });
    }
  };
}

export default defineConfig({
  plugins: [react(), multiplayerServer()],
  server: {
    // Fixed port so the arcade launcher's "Play" link always resolves here.
    port: 4188,
    strictPort: true,
    open: true,
    // Proxy the multiplayer WebSocket through this same port, so exposing 4188
    // (e.g. `cloudflared tunnel --url http://localhost:4188`) lets friends from
    // other houses join over the internet with the one shared link.
    proxy: {
      '/ws': { target: 'ws://localhost:4189', ws: true }
    }
  }
});
