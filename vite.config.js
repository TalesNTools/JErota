// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/JEtota/',          // e.g. '/Website/'
  build: { outDir: 'docs' }, // or omit if you deploy /dist elsewhere
  plugins: [react()],
})
