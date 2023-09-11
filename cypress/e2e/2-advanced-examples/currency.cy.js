/// <reference types="cypress" />

describe("Converter", () => {
    it("Currency Converter Testing", () => {
        cy.wait(2000);
        cy.visit('https://www.xe.com/currencyconverter/');
        
        cy.get('.amount-input__Wrapper-sc-1gq6pic-0').type(300);
        cy.wait(2000);
        
        cy.get('.base-combobox__InputWrapper-iyxb4f-4 > #midmarketFromCurrency').click();
        cy.wait(2000);
        cy.get('.base-combobox__InputWrapper-iyxb4f-4 > #midmarketFromCurrency').type('us{enter}');
        cy.wait(2000);
        
        cy.get('.base-combobox__InputWrapper-iyxb4f-4 > #midmarketToCurrency').click();
        cy.wait(2000);
        cy.get('.base-combobox__InputWrapper-iyxb4f-4 > #midmarketToCurrency').type('pkr{enter}');
        cy.wait(2000);
        
        cy.get('.currency-converter__SubmitZone-zieln1-3 > .button__BaseButton-sc-1qpsalo-0').click();
        cy.wait(2000);

})     
});