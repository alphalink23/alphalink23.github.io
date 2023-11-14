import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        gallery: resolve(__dirname, 'src/gallery/index.html'),
        members: resolve(__dirname, 'src/members/index.html')
      },
    },
  },
})
