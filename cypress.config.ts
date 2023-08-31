import { defineConfig } from 'cypress';

export default defineConfig({
	watchForFileChanges: false,
	e2e: {
		baseUrl: 'https://mostly.ai',
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});
