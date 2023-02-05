describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://web-qa.meettulip.com/home')
    cy.get('button').contains('START FREE CONSULTATION').eq(0).click({ force: true });
    cy.get('.tw-p-5 > .carousel > .slick-list > .slick-track > .tw-m-2 > .tw-rounded-3xl > :nth-child(2) > .tw-bg-white').contains('Begin For Free').click({ force: true });
    cy.get('.modal-button').click({ multiple: true, force: true });
    cy.wait(500)
		cy.get('.modal-button').click({ multiple: true, force: true });
		cy.wait(500)
    cy.get('.modal-button').click({ multiple: true, force: true });
		cy.wait(500)
    cy.get('.fixed-bottom > .ng-tns-c97-1').click({ force: true, multiple: true }); // this survey has 4 sections ...
		cy.wait(500)
    cy.get('input[placeholder*="name is"]').type("Sameer"); //write name in first name input
		cy.wait(500)
    cy.get('.fixed-bottom > .ng-tns-c97-1').click({ force: true, multiple: true });
		cy.wait(500)
    cy.get(':nth-child(2) > .tw-accent-black').check(); //check male
		cy.wait(500)
		cy.get(':nth-child(2) > .tw-mr-4 > .tw-rounded-lg').type("26"); // insert age  
		cy.wait(500)
		cy.get('[placeholder="Feet"]').type("5");
		cy.wait(500)
    cy.get('[placeholder="Inches"]').type("8");
		cy.wait(500)
		cy.get('[placeholder="Pounds"]').type("165.347");
		cy.wait(500)
		cy.get('.fixed-bottom > .ng-tns-c97-1').click({ force: true, multiple: true });
    cy.wait(500)
    cy.get('.fixed-bottom > .ng-tns-c97-2').click({ force: true, multiple: true });
		cy.wait(500)
    cy.get('button').contains('Continue').eq(0).click({ force: true });
		cy.wait(500)
    cy.get('[type="radio"]').first().check()
    cy.get('button').contains('Continue').eq(0).click({ force: true });
		cy.wait(500)
    cy.get('[type="radio"]').first().check()
    cy.get('button').contains('Continue').eq(0).click({ force: true });
		cy.wait(500)
    cy.get('[type="radio"]').first().check()
    cy.get('button').contains('Continue').eq(0).click({ force: true });
		cy.wait(500)
    cy.get('[type="radio"]').first().check()
    cy.get('button').contains('Continue').eq(0).click({ force: true });
		cy.wait(500)
    // cy.get('[type="checkbox"]').check('three')
    cy.get('p').contains('takes me a long time to fall asleep').click({ force: true, multiple: true });
    cy.get('p').contains('I wake up in the middle of my sleep and can’t fall back to sleep').click({ force: true, multiple: true });
    cy.get('button').contains('Continue').eq(0).click({ force: true });
		cy.wait(500)
    cy.get('[type="radio"]').first().check()
    cy.get('button').contains('Continue').eq(0).click({ force: true });
		cy.wait(500)
    cy.get('label').contains('10-20 minutes').click({ force: true, multiple: true });
    cy.get('button').contains('Continue').eq(0).click({ force: true });
		cy.wait(500)
    cy.get('p').contains('Mental Health such as Anxiety, Depression, Bipolar Disorder, etc').click({ force: true, multiple: true });
    cy.get('p').contains('Physical Health such as Restless Leg Syndrome, ADHD, Heartburn, Pain etc').click({ force: true, multiple: true });
  })
})