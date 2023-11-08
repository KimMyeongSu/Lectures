import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // alias 파일 시스템 경로에 대한 별칭
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
