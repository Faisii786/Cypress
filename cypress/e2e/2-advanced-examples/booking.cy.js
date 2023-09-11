/// <reference types="cypress" />

describe("Booking", () => {
    it("Booking Testing", () => {
    cy.visit("https://bookonwardticket.com/");
   // cy.get('#select2-onward-airport-from-4w-container').click();
    cy.get(':nth-child(3) > :nth-child(2) > .wpcf7-form-control-wrap > .select2 > .selection > .select2-selection > .select2-selection__arrow > b').click();
})     
});
