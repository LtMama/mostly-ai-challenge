import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://mostly.ai',
  },
  watchForFileChanges: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
});
