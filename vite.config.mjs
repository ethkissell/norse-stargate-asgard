import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'public',               // source index.html lives in public/
  plugins: [react()],
  base: '/norse-stargate-asgard/',
  build: {
    outDir: '../dist',          // write dist to project root /dist
    emptyOutDir: true
  }
})