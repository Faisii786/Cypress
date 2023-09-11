

// Define a custom Cypress command to handle uncaught exceptions
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    // Set up the onUncaughtException handler to prevent Cypress from failing the test
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Return false to prevent the error from failing the test
      return false;
    });
  
    // Call the original 'visit' command
    return originalFn(url, options);
  });

describe("Assertions demo", () =>{
 it("implicit assertions", () =>{
   cy.visit("https://web.upr.edu.pk/home")
   //cy.url().should('include','edu.pk')
   //cy.url().should('eq','https://web.upr.edu.pk/home')
   //cy.url().should('contain', 'upr')
   
   //cy.url().should('include','edu.pk')
   //.should('eq','https://web.upr.edu.pk/home')
   //.should('contain', 'upr')

cy.url().should('include','edu.pk') 
.and('eq','https://web.upr.edu.pk/home')
.and('contain', 'upr')

cy.title().should('include','Poonch') 
.and('eq','University of Poonch Rawalakot')
.and('contain', 'Rawalakot')




 })

})