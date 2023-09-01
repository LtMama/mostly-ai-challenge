/// <reference types="cypress" />
import header from '../pages/globalHeader';
import contactPage from '../pages/contactPage';

const testRunId = Date.now();

describe('Mostly AI Challenge', () => {
  beforeEach(() => {
    cy.handleSessionCookie(testRunId);
    cy.visit('/');
    cy.waitForFrontendReady();
  });

  it('shows expected site navigation bookmarks', () => {
    header
      .getNavBookmarks()
      .should('have.length', header.navBookmarks.length)
      .each(($bookmark, i: number) => {
        cy.wrap($bookmark)
          .should('have.text', header.navBookmarks[i])
          .and('be.visible');
      });
  });

  it('shows search no results found on invalid search', () => {
    const invalidSearchTerm = 'sythetic';

    header.searchSiteForText(invalidSearchTerm);

    cy.url().should('contain', `?s=${invalidSearchTerm}`);
    // Get element with base text
    cy.contains('h1', 'Sorry, no results for:')
      // Get next sibling
      .next('h1')
      .should('have.text', invalidSearchTerm);
  });

  it('allows user to complete company contact form', () => {
    header
      .openNavOptionsForBookmark('Company')
      .contains('a', 'Contact')
      .click();

    cy.url().should('contain', contactPage.urlPath);
    cy.waitForFrontendReady();

    cy.fixture('contactFormData').then((formData) => {
      // Having to explicitly handle mixpanel:
      // Uncaught ReferenceError when typing on form
      // caused by not accepting mixpanel tracking cookie
      cy.on('uncaught:exception', (err) => {
        if (err.message.includes('mixpanel is not defined')) {
          return false;
        }
      });

      contactPage.completeContactForm(formData);
    });
  });
});
