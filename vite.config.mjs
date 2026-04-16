import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/old-norse-capstone/",
  server: {
    port: 8000,
    strictPort: true
  }
})
