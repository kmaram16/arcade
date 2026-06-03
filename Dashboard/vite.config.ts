import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    // The launcher runs on its own port; each game keeps its own (see src/games.ts).
    // strictPort keeps the port deterministic so the launcher's links never drift.
    port: 4100,
    strictPort: true,
    open: true
  }
});
