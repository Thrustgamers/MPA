import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 80
  },
  resolve: {
    alias: {
      '@utils': './src/utils',
      '@layers': './src/layers',
      '@components': './src/components',
      '@server': '../server',
    },
  },
})
