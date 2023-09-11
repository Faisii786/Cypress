describe('My  Test', () => {
  it('Verify title of the page', () => {
    // Visit the page
    cy.visit('https://katalon-demo-cura.herokuapp.com/')

    // Assert that the title of the page is as expected
    cy.title().should('eq', 'CURA Healthcare Service');

    // Click the Make Appointment button
    cy.get('#btn-make-appointment', { timeout: 10000 }).click({ force: true });

    // Fill in the username and password fields
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');

    // Click the Login button
    cy.get('#btn-login').should('be.visible').click();

    // Select the desired option from the <select> element
    cy.get('select').select('Hongkong CURA Healthcare Center');

    // Check the "Readmission" checkbox
    cy.get('#chk_hospotal_readmission').click();

    // Click the "Medicaid" radio button
    cy.get('#radio_program_medicaid').click();

    // Type the visit date
    cy.get('#txt_visit_date').type('30/03/2020');

    // Click on the comment field (if needed)
    cy.get('#txt_comment').click({ force: true });

    // Type a comment
    cy.get('#txt_comment').type('doctor Ayesha will be available at 30/03/2020');

    // Click the "Book Appointment" button
    cy.get('#btn-book-appointment').click();

    // Verify the "Appointment Confirmation" header
    cy.get('h2').contains("Appointment Confirmation");

    // Verify the comment in the confirmation
    cy.get('#comment').contains('doctor Ayesha will be available at 30/03/2020');
  });
});
