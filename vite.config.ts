import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: 8003
  },
  build: {
    lib: {
      entry: 'lib/',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit-element/
    }
  }
})
