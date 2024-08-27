import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsObfuscator from '@fox-js/vite-plugin-js-obfuscator';

export default defineConfig(({ command, mode }) => {
  const prodMode = mode === 'production';

  return {
    base: '/Portfolio/',
    plugins: [
      react(),
      jsObfuscator({
        globalOptions: prodMode ? {
          compact: true,
          controlFlowFlattening: true,
          debugProtection: true,
          stringArray: true,
        } : false,
        fileOptions: prodMode ? {
        } : false,
        match: (path) => prodMode && path.endsWith('.js'),
      }),
    ],
    server: {
      open: true,
    },
    build: {
      sourcemap: false,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          },
        },
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
        mangle: {
          toplevel: true,
        },
        output: {
          comments: false,
        },
      },
    },
  };
});
