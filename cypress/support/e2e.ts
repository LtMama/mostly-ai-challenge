import './commands';

declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * Custom command to prevent cookie popup overlay appearing
			 * @param sessionId - unique identifier for the current session
			 * @example cy.handleSessionCookie(123)
			 * @example cy.handleSessionCookie('test@test.com')
			 */
			handleSessionCookie(sessionId: string | number): Chainable<null>;
		}
	}
}
