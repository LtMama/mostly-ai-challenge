/// <reference types="cypress" />

type contactFormData = {
	firstName: string;
	lastName: string;
	email: string;
	mobile: string;
	company: string;
	country: string;
	howDidYouHear: string;
	description: string;
};

class ContactPage {
	urlPath: string;

	constructor() {
		this.urlPath = '/contact';
	}

	private selectors = {
		form: 'form#hsForm_27854f4c-b840-41f2-b7af-a3c9f512c9e8',
		input: {
			firstName: 'input[name="firstname"]',
			lastName: 'input[name="lastname"]',
			email: 'input[name="email"]',
			mobile: 'input[name="mobilephone"]',
			company: 'input[name="company"]',
			howDidYouHear:
				'input[name="how_did_you_hear_about_mostly_ai___free_text"]',
			description: 'textarea[name="message"]',
		},
		selectCountry: 'select[name="country"]',
		submitButton: 'input[type=submit]',
	};

	editFirstNameInput(firstName: string) {
		return cy.get(this.selectors.input.firstName).type(firstName);
	}

	editLastNameInput(lastName: string) {
		return cy.get(this.selectors.input.lastName).type(lastName);
	}

	editEmailInput(email: string) {
		return cy.get(this.selectors.input.email).type(email);
	}

	editMobileInput(mobile: string) {
		return cy.get(this.selectors.input.mobile).type(mobile);
	}

	editCompanyInput(company: string) {
		return cy.get(this.selectors.input.company).type(company);
	}

	editHowInput(howDidYouHear: string) {
		return cy.get(this.selectors.input.howDidYouHear).type(howDidYouHear);
	}

	editDescriptionInput(description: string) {
		return cy.get(this.selectors.input.description).type(description);
	}

	selectCountry(country: string) {
		return cy.get(this.selectors.selectCountry).select(country);
	}

	toggleMarketingCheckbox(toggle: 'on' | 'off') {
		return cy
			.contains('Marketing offers and updates.')
			.find('input')
			.as('checkbox')
			.then(() => {
				switch (toggle) {
					case 'on':
						cy.get('@checkbox').check();
						cy.get('@checkbox').should('be.checked');
						break;
					case 'off':
						cy.get('@checkbox').uncheck();
						cy.get('@checkbox').should('not.be.checked');
						break;
				}
			});
	}

	hoverOnSendMessage() {
		return cy
			.get(this.selectors.submitButton)
			.should('have.value', 'SEND MESSAGE')
			.trigger('mouseover');
	}

	completeContactForm(formData: contactFormData) {
		const {
			firstName,
			lastName,
			email,
			mobile,
			company,
			country,
			howDidYouHear,
			description,
		} = formData;

		cy.get(this.selectors.form).within(() => {
			this.editFirstNameInput(firstName);
			this.editLastNameInput(lastName);
			this.editEmailInput(email);
			this.editMobileInput(mobile);
			this.editCompanyInput(company);
			this.selectCountry(country);
			this.editHowInput(howDidYouHear);
			this.editDescriptionInput(description);
			this.toggleMarketingCheckbox('on');
			this.hoverOnSendMessage();
		});
	}
}

export default new ContactPage();
