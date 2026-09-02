import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Fixed dev port so it never clashes with the other arcade apps.
export default defineConfig({
  plugins: [react()],
  server: { port: 5191 }
})
