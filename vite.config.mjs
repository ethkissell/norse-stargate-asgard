import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/norse-stargate-asgard/',
  server: {
    port: 8000,
    strictPort: true
  }
})