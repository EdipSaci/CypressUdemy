

/// <reference types="Cypress" />
describe('WindowAndTabHandle', function() {

  it('new tab handle' , function(){
    cy.visit('https://practice.cydeo.com/windows');
    //this step is remove target attribute, so it will open in same window
    //cy.get('.new-tab-link').click({ force: true }); // Clicking a link that opens a new tab

    cy.get('.example a').click({ force: true });
    cy.wait(5000)
    cy.window().then((win) => {
      // Switch to the new tab
      cy.stub(win, 'open').as('openStub');
      cy.visit('/'); // Refreshes the new tab
    
      // Perform actions on the new tab
      // Example: Assert the URL of the new tab
      expect(win.location.href).to.include('windows');
    });
    
  })
})