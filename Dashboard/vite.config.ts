import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  // The mqtt client (used for real presence) expects a Node-style `global`.
  define: { global: 'globalThis' },
  server: {
    // The launcher runs on its own port; each game keeps its own (see src/games.ts).
    // strictPort keeps the port deterministic so the launcher's links never drift.
    port: 4100,
    strictPort: true,
    open: true
  }
});
