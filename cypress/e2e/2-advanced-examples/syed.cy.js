describe('template spec', () => {
  it('view/download pdf', () => {
    // Visit the website
    cy.visit('https://ajkbise.net/index.php');
    cy.wait(2000);
    // Close the ads popup
    cy.get('#dialog1 > #popupfoot > center > .close').click();
    cy.wait(2000);
    // Click on the download button
    cy.get(':nth-child(3) > a > strong').click();
    cy.wait(2000);
    // Assert that the download page is opened or the URL matches your expectation
    //cy.url().should('include', '/downloads');
    cy.wait(2000);
    // Click to view the first PDF
    cy.get('tbody > :nth-child(1) > :nth-child(4) > a').click();
    cy.wait(2000);
    // Assert that the PDF viewer page is opened or the URL matches your expectation

  });
});
