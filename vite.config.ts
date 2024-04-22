import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  resolve: {
    alias: {
      actions: `${__dirname}/src/actions`,
      components: `${__dirname}/src/components`,
      hooks: `${__dirname}/src/hooks`,
      loaders: `${__dirname}/src/loaders`,
      pages: `${__dirname}/src/pages`,
      slices: `${__dirname}/src/slices`,
      styles: `${__dirname}/src/styles`,
      types: `${__dirname}/src/types`,
      utils: `${__dirname}/src/utils`,
    },
  },
  define: {
    global: 'window',
  },
});
