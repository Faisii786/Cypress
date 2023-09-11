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
  
  describe("My First Test", () => {
    it("verify title-positive", () => {
      cy.visit("https://web.upr.edu.pk/home");
      cy.title().should("eq", "University of Poonch Rawalakot");
    });

    it("verify title-negative", () => {
      cy.visit("https://web.upr.edu.pk/home");
      cy.title().should("eq", "upr123");
    });
  });
  
