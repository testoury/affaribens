import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/affaribens/',   // tells Vite the correct path for GitHub Pages
  plugins: [react()],
})
