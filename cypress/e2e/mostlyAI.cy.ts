/// <reference types="cypress" />
import header from '../pages/globalHeader';

describe('Mostly AI Challenge', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('shows expected site navigation bookmarks', () => {
		header
			.getNavBookmarks()
			.should('have.length', header.navBookmarks.length)
			.each(($bookmark, i) => {
				cy.wrap($bookmark)
					.should('have.text', header.navBookmarks[i])
					.and('be.visible');
			});
	});

	it('shows search no results found on invalid search', () => {});

	it('allows user to complete company contact form', () => {});
});
