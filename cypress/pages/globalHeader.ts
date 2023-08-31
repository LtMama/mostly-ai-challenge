/// <reference types="cypress" />

class GlobalHeader {
	/**
	 * Navigation bookmark text values
	 * Note: These must be in order they appear in Nav
	 * @type {string[]}
	 */
	navBookmarks = [
		'Platform',
		'Synthetic Data',
		'Resources',
		'Company',
		'Pricing',
	];

	getNavMenu() {
		return cy.get('nav#-mega-menu-3762-16');
	}

	getNavBookmarks() {
		return this.getNavMenu().find('li>a');
	}
}

export default new GlobalHeader();
