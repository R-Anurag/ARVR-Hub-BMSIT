import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const isProd = process.env.VERCEL === '1'; // Vercel sets this env var

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: isProd ? '/' : '/ARVR-Hub-BMSIT/', // Vercel uses '/', GitHub Pages uses repo name
})
