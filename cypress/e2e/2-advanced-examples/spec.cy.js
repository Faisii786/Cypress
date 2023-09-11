describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://lms.upr.edu.pk/login/student-portal');
    //cy.contains("Faculy Login").click();
    cy.get("input[name=email]").type("tayyab.hussain4508@upr.edu.pk");
    cy.get("input[name=password]").type("student123");
  })
})