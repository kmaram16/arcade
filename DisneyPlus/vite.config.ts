import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    // Fixed port so the arcade launcher's "Open" link always resolves here.
    port: 4190,
    strictPort: true,
    open: true
  }
});
