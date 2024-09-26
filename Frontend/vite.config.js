import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 3000,
    open: true,
    cors: true,
    strict: true,
    proxy:{
      '/api':{
        target:'http://localhost:2500',
        changeOrigin:true,
      }
    }
  }
})
