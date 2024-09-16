import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import rewriteAll from 'vite-plugin-rewrite-all';

export default defineConfig({
  plugins: [
    react(),
    rewriteAll() // Adiciona o plugin aqui
  ],
  base: '/DesenhosDaGi/',
  build: {
    outDir: 'dist'
  }
});
