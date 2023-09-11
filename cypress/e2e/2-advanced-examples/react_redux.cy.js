/// <reference types="cypress" />

describe('Live React App Automation', () => {
    it('React Redux', () => {
      // Visit the Site
      cy.wait(2000);
      cy.visit('https://react-redux.realworld.io/#/?_k=a77sac');
      cy.wait(12000);

      // SignIn Button Click
      cy.get(':nth-child(2) > .nav-link').click();
      cy.wait(2000);

      // SignIn
      cy.get(':nth-child(1) > .form-control').type('faisalaslam786@gmail.com');
      cy.wait(2000);
      cy.get(':nth-child(2) > .form-control').type('@Faisal786');
      cy.wait(2000);
      cy.get('.btn').click();
      cy.wait(10000);

      // Global Feed
      cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link').click();
      cy.wait(15000);

      // Article Button
      cy.get('.container > .nav > :nth-child(2) > .nav-link').click();
      cy.wait(4000);

      // Add Article
      cy.get(':nth-child(1) > .form-control').type('Cypre1sssss');
      cy.wait(1000);
      cy.get(':nth-child(2) > .form-control').type('Test Automate Accelerate');
      cy.wait(1000);
      cy.get(':nth-child(3) > .form-control').type('Cypress is a frontend testing tool for web applications. Cypress runs on Windows, Linux, and macOS. Cypress app is open-source software released under the MIT License while the Cypress Cloud is a web application. Cypress has been compared to Selenium.With Cypress, you can easily create tests for your modern web applications, debug them visually, and automatically run them in your continuous integration builds. Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.We make it possible to:Set up tests Write tests Run tests  Debug Tests Cypress is most often compared to Selenium.');
      cy.wait(1000);
      cy.get(':nth-child(4) > .form-control').type('#cypress #automation #testingtool #cypress.io #automateyourapp');
      cy.wait(1000);

      // Publish
      cy.get('.btn').click();
      cy.wait(15000);

      // View Profile
      cy.get(':nth-child(4) > .nav-link').click();
    })

  })