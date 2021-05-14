import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
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
