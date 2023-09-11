/// <reference types="cypress" />

describe("Testing",function(){
    it("Sauce Demo",function(){
        cy.visit('https://www.saucedemo.com/v1/');
        cy.wait(2000);
        cy.get('[data-test="username"]').type('performance_glitch_user');
        cy.wait(2000);
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.wait(2000);
        cy.get('#login-button').click();
        cy.wait(2000);
        
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
        cy.wait(2000);
        
        cy.get('.fa-layers-counter').click();
        cy.wait(2000);
        
        cy.get('.cart_footer > .btn_secondary').click();
        cy.wait(2000);


    })
})