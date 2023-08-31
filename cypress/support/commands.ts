/// <reference types="cypress" />

Cypress.Commands.add(
	'handleSessionCookie',
	(testSessionId: string | number) => {
		const cookieValue = JSON.stringify({
			consents: { essential: ['borlabs-cookie', 'google-tag-manager'] },
			domainPath: 'mostly.ai/',
			version: '8',
		});

		cy.session(
			[testSessionId],
			() => {
				cy.setCookie('borlabs-cookie', cookieValue);
			},
			{
				validate() {
					cy.getCookie('borlabs-cookie').should('exist');
				},
			},
		);
	},
);

Cypress.Commands.add('waitForFrontendReady', () => {
	cy.intercept({
		method: 'POST',
		pathname: '/wp-admin/admin-ajax.php',
		resourceType: 'xhr',
	}).as('wp');
	cy.root().realHover();
	cy.wait('@wp');
});
