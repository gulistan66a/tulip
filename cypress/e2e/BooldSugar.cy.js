/// <reference types="cypress" />
describe('template spec', () => {
	it('passes', () => {
		// cy.visit('https://web-qa.meettulip.com/home') // open the site 
		// cy.wait(1000);
		// cy.get('button').contains('START FREE CONSULTATION').eq(0).click({ force: true });  // click on button on main page
		// cy.wait(1000);
		// cy.get('.tw-p-5 > .carousel > .slick-list > .slick-track > .slick-current > .tw-rounded-3xl > :nth-child(2) > .tw-bg-white').click({ force: true }); // blood sugar consultation button  
		// cy.wait(500);
		// cy.get('.modal-button').click({ multiple: true, force: true }); // video screen's button click
		// cy.wait(1000);
		// cy.get('.modal-button').click({ multiple: true, force: true }); // testimonials in video screen button click
		// cy.wait(1000)
		// cy.get('.modal-button').click({ multiple: true, force: true }); // Feel Better in Just a Few Steps
		// cy.wait(500)

		// TODO REMOVE THIS 
		cy.visit('https://web-qa.meettulip.com/survey/103') // open the site 

		cy.get('.fixed-bottom > .ng-tns-c97-1').click({ force: true, multiple: true }); // this survey has 4 sections ...
		cy.wait(500)
		cy.get('input[placeholder*="name is"]').type("Yogesh Mishra"); //write name in first name input
		cy.wait(500)
		cy.get('.fixed-bottom > .ng-tns-c97-1').click({ force: true, multiple: true }); // name input button click
		cy.wait(500)
		cy.get(':nth-child(2) > .tw-accent-black').check(); //check male
		cy.wait(500)
		cy.get(':nth-child(2) > .tw-mr-4 > .tw-rounded-lg').type("26"); // insert age  
		cy.wait(500)
		cy.get('[placeholder="Feet"]').type("5");  // height (Feet) value
		cy.wait(500)
		cy.get('.tw-flex > .tw-ml-4 > .tw-rounded-lg').type("8");  // height (inch) value
		cy.wait(500)
		cy.get('input[placeholder*="Pounds"]').type("165.347"); // height pounds value
		cy.wait(500)
		cy.get('.fixed-bottom > .ng-tns-c97-1').click({ force: true, multiple: true }); // continue after filling name,age,height weight etc.
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true }); //  you have completed section 1 of 4
		cy.wait(1000)
		cy.get('[type="radio"]').eq(1).check() // Check first radio element
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(1).check() // check no for  hemoglobin A1C level		
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(1).check() // Do you know what your last fasting blood glucose numbers were?
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		// cy.get(':nth-child(8) > div').check() // check very tired
		// cy.get(':nth-child(9) > div > .ng-fa-icon').check();
		cy.get(':nth-child(8) > div > .ng-fa-icon').click({ force: true });
		// cy.get('[type="checkbox"]').first().check({ force: true });
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000);
		cy.get(':nth-child(8) > div').click({ force: true }); //Because of your Type 1 Diabetes, which one of these. none of above
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(4).check() //How long has your blood sugar been out of balance?
		cy.wait(1000)
		cy.get(':nth-child(2) > .fixed-bottom > .ng-tns-c97-3').click({ force: true, multiple: true });
		cy.get('[type="radio"]').eq(2).check() //Did your blood sugar condition develop shortly after an intense infection?
		cy.wait(1000)
		cy.get(':nth-child(2) > .fixed-bottom > .ng-tns-c97-3').click();
		cy.wait(1000)
		cy.get('[type="radio"]').eq(2).check()
		cy.get(':nth-child(2) > .fixed-bottom > .ng-tns-c97-3').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(1).check()	// Did you ever have COVID?
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(1).check() // high cholesterol?
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(1).check() // Do you have high blood pressure?
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true }); // Yogesh Mishra, you have completed section 2 of 4
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true }); // understanding of your blood sugar symptoms
		cy.get('[type="radio"]').eq(4).check() // cale of 1-10, with 10 being the most 
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.get('[type="radio"]').eq(0).check() // What time of the day do you tend to have the most energy?
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('.tw-grid > :nth-child(3) > div').click({ force: true }) // dip in your energy ?
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(1).check() // medications you take
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(1).check() // do you take any suppliments
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(1).check()// Do you eat a variety of fruits and vegetables every week ?
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.get('[type="radio"]').eq(3).check() //  processed and packaged fast meal
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.get('[type="radio"]').eq(1).check() //  Do you eat oily or fried foods?
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(3).check() // How often do you eat processed sugar products such a
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(1).check() // how many time bite
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(3).check() // no soda juice etc
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get(':nth-child(3) > div > .ng-fa-icon').click({ force: true, multiple: true }); // crave for sweet
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(0).check() // quality of sleep - great
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(0).check() // physical activity engagement - 1-2 days
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(6).check() // stress level
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.get('[type="radio"]').eq(6).check() // mood level
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.get('button').contains('Continue').click({ force: true, multiple: true }); //Yogesh Mishra, you have completed section 3 of 4
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true });// you are almost done! In this last section we
		cy.get('[type="radio"]').eq(1).check() // blood vessel issues that you have
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.get('[type="radio"]').eq(1).check() // Do you experience heaviness, puffiness	
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.get('[type="radio"]').eq(1).check() // Do you have any issues with your digestive system	
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.get('[type="radio"]').eq(1).check //Do you have any seasonal or airborne allergies?
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.get('[type="radio"]').eq(1).check //Do you have any food allergies?
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.get('[type="radio"]').eq(1).check //Do you have any issues with your lungs, such as asth
		cy.wait(1000)
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(1).check //Do you experience heart palpitations or shortness 
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(1).check //Do you often have issues with your eyes, ears, nose, or t
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(1).check //Do you have any issues with your joints, such as rheumat
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(1).check //Do you have any pain or swelling?
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(1).check //Do you have any issues with your thyroid or adrenal glands, 
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(0).check //In general, do you tend to feel cold, hot, or neither?
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(0).check //How often are you feeling cold or hot?
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(1).check //Do you have any issues concentrating?
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(4).check //Do you experience anger, irritability, depression, or anxiety?
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(4).check //Do you experience poor memory and/or occasional dizziness?
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(1).check //Are you currently experiencing cancer or receiving treatment for cancer?
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(1).check //Have you experienced cancer in the past?
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(1).check //ave you been diagnosed with any health conditions beyond those you have told us so far?
		cy.get('button').contains('Continue').click({ force: true, multiple: true });
		cy.wait(1000)
		cy.get('[type="radio"]').eq(1).check //ave you been diagnosed with any health conditions beyond those you have told us so far?
		cy.get('button').contains('Continue').click({ force: true, multiple: true });

		cy.get('button').contains('Continue').click({ force: true, multiple: true }); //Yogesh Mishra,you have completed section 4 of 4 		cy.wait(1000)	
		cy.get('button').contains('Continue').click({ force: true, multiple: true }); // Thank you for sharing all of this information with us

		cy.get('button').contains('Your insights & wellness plan').click({ force: true, multiple: true });
		cy.wait(1000)

		// cy.get('button').contains('Continue').click({ force: true, multiple: true }); // we want to get a deeper understanding



	})
})