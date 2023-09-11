/// <reference types="cypress" />

describe("Verify the Logins", () => {
  it("Login to System as Faculty Member", () => {  
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.wait(2000);
    // visit site
    cy.visit('https://lms.upr.edu.pk/login');
    cy.wait(2000);
    // student portal
    cy.get('[href="/login/student-portal"]').click();
    cy.wait(2000);
    
    // login
    cy.get(':nth-child(5) > .form-control').type('faisalaslam218@gmail.com');
    cy.wait(2000);
    cy.get(':nth-child(6) > .form-control').type('@Faisal2001');
    cy.wait(2000);
    cy.get('.rememberme > span').click();
    cy.wait(2000);
    cy.get('.btn').click();
    cy.wait(5000);
    

    cy.get(':nth-child(1) > .widget-thumb > .widget-thumb-heading > a').click();
    cy.wait(2000);
    cy.get('.select2-selection__arrow').click();
    cy.wait(2000);
    cy.get('.select2-search__field').type('6th{enter}');
    cy.wait(2000);
    cy.get('#delete_multiple_records').click();
    cy.wait(2000);
    
  
    cy.get('.page-sidebar-menu > :nth-child(3) > :nth-child(1)').click();
    cy.wait(2000);
    cy.get(':nth-child(5) > .nav-toggle').click();
    cy.wait(2000);
    cy.get(':nth-child(5) > .sub-menu > .nav-item > .nav-link > .title').click();
    cy.wait(2000);
    cy.get('.select2-selection__arrow').click();
    cy.wait(2000);
    
    cy.get('.has-info > label > .box').click();
    cy.wait(2000);
    cy.get('.select2-selection__arrow').click();
    cy.wait(2000);
    cy.get('.select2-search__field').type('6th{enter}');
    cy.wait(2000);
    cy.get(':nth-child(6) > .nav-toggle > .title').click();
    cy.get(':nth-child(6) > .sub-menu > .nav-item > .nav-link > .title').click();
 
})   
});