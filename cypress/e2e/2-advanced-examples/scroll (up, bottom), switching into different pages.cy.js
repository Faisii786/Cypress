describe('W3Schools C++ Compiler', () => {
    it('w3school', () => {
        // Visit the C++ compiler page
        cy.visit('https://www.w3schools.com/');
        cy.wait(3000);
        cy.get('#subtopnav > [href="/cpp/default.asp"]').click();
        cy.wait(3000);
        cy.get('.w3-info > .w3-btn').click();
        cy.wait(3000);
        cy.get('#main > :nth-child(3) > .w3-right').click();
        cy.wait(3000);
        // scroll 
        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.scrollTo('top');
        cy.get('.w3-hover-none').click();

       
        
    });
});
