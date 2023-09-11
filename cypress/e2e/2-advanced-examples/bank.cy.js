/// <reference types="cypress" />

describe("ParaBank", () => {
    it("Testing", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.wait(4000);
    cy.get(':nth-child(2) > .input').type('arbaz');
    cy.wait(4000);
    cy.get(':nth-child(4) > .input').type('arbaz123');
    cy.wait(4000);
    cy.get(':nth-child(5) > .button').click();
    cy.wait(4000);
    
    cy.get('#leftPanel > ul > :nth-child(1) > a').click();
    cy.wait(4000);
    cy.get('form.ng-pristine > div > .button').click();
    cy.wait(4000);
    
    cy.get('#leftPanel > ul > :nth-child(3) > a').click();
    cy.wait(4000);
    
    cy.get('#amount').type(500);
    cy.wait(4000);
    
    cy.get(':nth-child(4) > .button').click();
    cy.wait(4000);
    cy.get('#leftPanel > ul > :nth-child(3) > a').click();
    cy.get('#leftPanel > ul > :nth-child(7) > a').click();
    cy.wait(4000);
    cy.get(':nth-child(1) > [width="20%"]').type('545');
    cy.wait(4000);
    cy.get(':nth-child(2) > [width="20%"]').type('47');
    cy.wait(4000);
    cy.get('[colspan="2"] > .button').click();
    cy.wait(4000);

})     
});
