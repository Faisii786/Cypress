describe("UPR", function() {
    it("update information", () => {
      // Visit the login page
      cy.visit("https://lms.upr.edu.pk/login/student-portal");
  
      // Fill in login details and submit
      cy.get("input[name='email']").type("kalizakhan899@gmail.com");
      cy.get("input[name='password']").type("P@ssw0rd!");
      cy.get("button[type='submit']").click();
  
      // Wait for the user dropdown menu to appear and click on it
      cy.get(".top-menu > .nav > .dropdown > .dropdown-toggle > .fa").should("be.visible").click();
      
      // Click on the user profile link from the dropdown menu
      cy.get("ul.dropdown-menu.dropdown-menu-default").should("be.visible").contains("Edit Profile").click();
      cy.wait(3000); 
      // Clear and type a new email
      cy.get("input#email.form-control").clear().type("{selectall}{backspace}alizasaeedajk@gmail.com");
      cy.wait(3000); 
     
      cy.get("a.btn.btn-sm.red").click();
      cy.get("input#password.form-control").type("P@ssw0rd!");
      cy.get("input#rpassword.form-control").type("P@ssw0rd!");
   
      cy.get("button.btn.blue").click();
  

      // Handle uncaught exceptions
      Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
      });
      
      // Adjust the timeout if needed
      { timeout: 1000000 }
    });
  });
  