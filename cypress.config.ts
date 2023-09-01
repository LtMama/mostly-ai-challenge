import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://mostly.ai',
    setupNodeEvents(on) {
      // new chrome headless doesn't play nice with cypress. Use old
      // https://github.com/cypress-io/cypress/issues/8606
      on(
        'before:browser:launch',
        (
          browser = {
            name: '',
            family: 'chromium',
            channel: '',
            displayName: '',
            version: '',
            majorVersion: '',
            path: '',
            isHeaded: false,
            isHeadless: false,
          },
          launchOptions,
        ) => {
          if (browser.name === 'chrome' && browser.isHeadless) {
            launchOptions.args = launchOptions.args.map((arg) => {
              if (arg === '--headless=new') {
                return '--headless';
              }

              return arg;
            });
          }

          return launchOptions;
        },
      );
    },
  },
  reporter: 'nyan',
  watchForFileChanges: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
});
