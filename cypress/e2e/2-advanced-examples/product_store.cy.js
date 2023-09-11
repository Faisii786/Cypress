/// <reference types="cypress" />

describe("Demo Blazz", () => {
    it("Testing", () => {
    cy.visit("https://demoblaze.com/");
    cy.wait(1000);

    // signin
    cy.get('#login2').click();
    cy.wait(4000);
    cy.get('#loginusername').type('arslan78678');
    cy.wait(4000);
    cy.get('#loginpassword').type('arslan786789');
    cy.wait(4000);
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(8000);
    cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click();
    cy.wait(4000);
    cy.get('.col-sm-12 > .btn').click();
    cy.wait(7000);
    cy.get('#cartur').click();
    cy.wait(4000);
    cy.get('.col-lg-1 > .btn').click();
    cy.wait(4000);
    
    cy.get('#name').type('arslan');
    cy.wait(4000);
    cy.get('#country').type('pakistan');
    cy.wait(4000);
    cy.get('#city').type('toi');
    cy.wait(4000);
    cy.get('#card').type('45678');
    cy.wait(4000);
    cy.get('#month').type('05');
    cy.wait(4000);
    cy.get('#year').type('2023');
    cy.wait(4000);
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(4000);
    
    
})     
});
