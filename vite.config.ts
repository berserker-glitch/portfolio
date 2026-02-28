import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // Listen on all network interfaces (0.0.0.0)
    port: 3000,
  },
  preview: {
    host: true, // Fixed 502 Bad Gateway on deployment
    port: 3000,
  }
})
