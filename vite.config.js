import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/XAU-2/' : '/',
  plugins: [react()],
  server: {
    port: 3000,
    host: 'localhost',
    open: '/',
    strictPort: false,
  },
  preview: {
    port: 4173,
    host: 'localhost',
    open: '/',
  },
})
