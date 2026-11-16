import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' makes asset paths relative, so the build works on GitHub Pages
// whether the repo is <username>.github.io or any other repo name.
export default defineConfig({
  plugins: [react()],
  base: './',
});
