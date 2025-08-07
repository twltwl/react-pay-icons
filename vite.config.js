import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Conditional configuration based on command
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    // Development configuration
    return {
      plugins: [react()],
      root: './',
    };
  } else {
    // Build configuration (for library)
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: {
            index: resolve(__dirname, 'src/Icons/index.js'),
            'crypto/index': resolve(__dirname, 'src/Icons/crypto/index.js'),
          },
          formats: ['es'],
        },
        outDir: 'lib',
        sourcemap: true,
        rollupOptions: {
          external: ['react', 'react-dom', 'react/jsx-runtime'],
          output: {
            globals: {
              react: 'React',
            },
            preserveModules: true,
            entryFileNames: ({ name }) => {
              return `${name}.js`;
            },
          },
        },
      },
    };
  }
});

