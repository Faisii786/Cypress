/// <reference types="cypress" />

describe("Cura Health Care", () => {
    it("Make Appointment Testing", () => {
    cy.wait(2000);
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
    cy.screenshot()
    cy.get('#btn-make-appointment').click();
    cy.screenshot()
    cy.wait(2000);
    cy.get('#txt-username').type('John Doe');
    cy.screenshot()
    cy.wait(2000);
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.screenshot()
    cy.wait(2000);
    cy.get('#btn-login').click();
    cy.screenshot()
    cy.wait(2000);
    
    cy.get('#chk_hospotal_readmission').click();
    cy.screenshot()
    cy.wait(2000);
    cy.get('#radio_program_medicare').click();
    cy.screenshot()
    cy.wait(2000);
    
    cy.get('#txt_visit_date').type('30/03/2020');
    cy.screenshot();
    cy.wait(2000);
    cy.get('#txt_comment').click({force : true});
    cy.screenshot();
    cy.wait(2000);
    cy.get('#txt_comment').type('abcdedfkhd');
    cy.screenshot();
    cy.wait(2000);
    cy.get('#btn-book-appointment').click();
    cy.screenshot();
    cy.wait(2000);

})   
});