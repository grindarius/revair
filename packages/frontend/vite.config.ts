import { resolve } from 'node:path'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@revair/common': resolve(__dirname, '..', 'common', 'src')
    }
  },
  optimizeDeps: {
    exclude: ['@revair/common']
  },
  server: {
    port: 8080,
    open: true
  },
  envDir: '.'
})
