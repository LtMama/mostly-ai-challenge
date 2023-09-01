// this module is required for "true" hover events
import 'cypress-real-events';
// import 'cypress-mochawesome-reporter/register';
import './commands';
import { Interception } from '../../node_modules/cypress/types/net-stubbing';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to prevent cookie popup overlay appearing
       * @param sessionId - unique identifier for the current session
       * @example cy.handleSessionCookie(123)
       * @example cy.handleSessionCookie('test@test.com')
       */
      handleSessionCookie(sessionId: string | number): Chainable<null>;

      /**
       * Custom command to initialise the frontend after window:load has fired.
       * Prevent tests running before page is ready
       * @example cy.waitForFrontendReady()
       */
      waitForFrontendReady(): Chainable<Interception>;
    }
  }
}
