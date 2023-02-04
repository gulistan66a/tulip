/// <reference types="cypress" />
describe('template spec', () => {
	it('passes', () => {
		cy.visit('https://web-qa.meettulip.com/home')
		cy.get('button').contains('START FREE CONSULTATION').eq(0).click({ force: true });
		cy.get('.tw-p-5 > .carousel > .slick-list > .slick-track > .slick-current > .tw-rounded-3xl > :nth-child(2) > .tw-bg-white').click({ force: true });
		cy.get('.modal-button').click({ multiple: true, force: true });
		cy.wait(500)
		cy.get('.modal-button').click({ multiple: true, force: true });
		cy.wait(500)

		cy.get('.modal-button').click({ multiple: true, force: true });
		cy.wait(500)
		cy.get('.fixed-bottom > .ng-tns-c97-1').click({ force: true, multiple: true }); // this survey has 4 sections ...
		cy.wait(500)
		cy.get('input[placeholder*="name is"]').type("Yogesh Mishra"); //write name in first name input
		cy.wait(500)
		cy.get('.fixed-bottom > .ng-tns-c97-1').click({ force: true, multiple: true });
		// cy.get('.tw-grid > :nth-child(2)').check();
		cy.wait(500)
		cy.get(':nth-child(2) > .tw-accent-black').check(); //check male
		cy.wait(500)
		cy.get(':nth-child(2) > .tw-mr-4 > .tw-rounded-lg').type("26"); // insert age  
		cy.wait(500)
		cy.get('[placeholder="Feet"]').type("5");
		cy.wait(500)
		// cy.get('.ng-invalid').type("8"); // height (Feet) value
		cy.get('.tw-flex > .tw-ml-4 > .tw-rounded-lg').type("8");
		cy.wait(500)
		cy.get(':nth-child(4) > .tw-mr-4').type("165.347");
		cy.wait(500)
		cy.get('.md\:tw-ml-40 > .fixed-bottom > .ng-tns-c97-1').click({ force: true, multiple: true });
	})
})