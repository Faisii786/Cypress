describe("Product Review Test", () => {
  it("should navigate to ALL PRODUCTS page and submit a review", () => {
    // Step 1: Launch browser and navigate to the URL
    cy.visit("http://automationexercise.com");

    // Step 2: Click on 'Products' button
    cy.contains("Products").click();

    // Step 3: Verify user is navigated to ALL PRODUCTS page
    cy.url().should("include", "/products");

    // Step 4: Click on 'View Product' button
    cy.contains("View Product").first().click();

    // Step 5: Verify 'Write Your Review' is visible
    cy.contains("Write Your Review").should("be.visible");

    // Step 6: Enter name, email, and review
    cy.get('#name').type("Asnan Khan");
    cy.get('#email').type("asnan@gmail.com");
    cy.get('#review').type("This is a great product!");

    // Step 7: Click 'Submit' button
    cy.get('#button-review').click();

    // Step 8: Verify success message
    cy.contains("Thank you for your review.").should("be.visible");
  });
});
