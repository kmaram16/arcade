import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  define: { global: 'globalThis' },
  server: {
    port: 4202,
    strictPort: true,
    open: true
  }
});
