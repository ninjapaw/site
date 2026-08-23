import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ninjapaws.org',
  output: 'static',
  build: {
    format: 'directory'
  }
});