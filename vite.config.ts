import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // TODO: сделать так, чтобы base забирался из process.env
  base: '/technology-radar',
  plugins: [react()],
})
