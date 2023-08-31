Cypress.Commands.add(
	'handleSessionCookie',
	(testSessionId: string | number) => {
		const cookieValue = JSON.stringify({
			consents: { essential: ['borlabs-cookie'] },
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
