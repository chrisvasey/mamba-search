import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    plugins: [
      laravel({
        input: 'resources/js/app.tsx',
        ssr: 'resources/js/ssr.tsx',
        refresh: true,
        detectTls: process.env.VITE_APP_URL,
      }),
      react(),
    ],
    resolve: {
      alias: {
        '@': '/resources/js',
      },
    },
    ssr: {
      noExternal: ['@inertiajs/server'],
    },
  });
}