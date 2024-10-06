import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import autoprefixer from 'autoprefixer'
import {resolve} from 'path';

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    open: true,
    host: true,
    port: 8000,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, './src'),
      "@components": resolve(__dirname, './src/components'),
      "@assets": resolve(__dirname, './src/assets'),
      "@global": resolve(__dirname, './src/global'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {api: 'modern'}
    },
    postcss: {
      plugins: [
        autoprefixer({})
      ],
    }
  }
})
