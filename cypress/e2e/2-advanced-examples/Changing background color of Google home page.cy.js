describe('Change Google Background Test', () => {
    it('should change the background color of Google search page', () => {
      cy.visit('https://www.google.com'); // Open Google's search page
  
      // Change the background color using JavaScript
      cy.get('body').then($body => {
        $body.css('background-color', 'blue'); // Replace 'blue' with your desired color
      });
  
      // Optionally, you can assert that the background color has changed
      cy.get('body').should('have.css', 'background-color', 'rgb(0, 0, 255)'); // Adjust the color value accordingly
    });
  });
