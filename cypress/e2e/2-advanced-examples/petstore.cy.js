
describe("pet store", () => {
    it("Testing", () => {
    cy.visit("https://jpetstore.aspectran.com/catalog/");
    cy.wait(2000);
    cy.get('#SearchContent > form > .input-group > .input-group-field').type('fish{enter}');
    cy.wait(2000);
    cy.get(':nth-child(2) > [style="text-align: left"]').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > :nth-child(5) > .button').click();
    cy.wait(2000);
    cy.get('[href="/order/newOrderForm"]').click();
    cy.wait(2000);
    cy.get('.button-bar > .button').click();
    cy.wait(2000);
    cy.get('.button-bar > [type="submit"]').click();
    cy.wait(2000);
    cy.get('.button-bar > [type="submit"]').click();
    cy.wait(2000);
    cy.get('#BackLink > a').click();
    cy.wait(2000);

    })
})