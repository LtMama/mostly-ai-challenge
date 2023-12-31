/// <reference types="cypress" />

class GlobalHeader {
  /**
   * Navigation bookmark text values.
   * Note: These must be in order they appear in Nav
   */
  navBookmarks = [
    'Platform',
    'Synthetic Data',
    'Resources',
    'Company',
    'Pricing',
  ];

  private selectors = {
    navigation: {
      menu: 'nav#-mega-menu-3762-16',
    },
    search: {
      button: 'button[aria-label="Open search"]',
      input: 'input[type="search"]',
      field: 'div#-header-search-4002-16',
      form: 'form[role="search"]',
    },
  };

  getNavMenu() {
    return cy.get(this.selectors.navigation.menu);
  }

  getNavBookmarks() {
    return this.getNavMenu().find('li>a');
  }

  //ideally want to use navBookmarks array values for types here, WIP
  openNavOptionsForBookmark(navItem: string) {
    return this.getNavBookmarks()
      .contains('a', navItem)
      .trigger('mouseover')
      .should('have.attr', 'aria-expanded', 'true')
      .next('div')
      .should('have.attr', 'aria-hidden', 'false');
  }

  getSearchField() {
    return cy.get(this.selectors.search.field);
  }

  openSearchInput() {
    return this.getSearchField().within(() => {
      cy.get(this.selectors.search.form)
        .as('searchForm')
        .should('not.be.visible');
      cy.get(this.selectors.search.button).click();
      cy.get('@searchForm').should('be.visible').and('have.class', 'visible');
    });
  }

  searchSiteForText(searchTerm: string) {
    cy.log(`Searching for ${searchTerm}`);
    this.openSearchInput();
    return this.getSearchField()
      .find(this.selectors.search.input)
      .type(`${searchTerm}{enter}`);
  }
}

export default new GlobalHeader();
