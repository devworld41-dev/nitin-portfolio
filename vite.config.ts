import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this repo under /nitin-portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/nitin-portfolio/',
})
