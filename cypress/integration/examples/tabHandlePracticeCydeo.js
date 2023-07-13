
/// <reference types="Cypress" />
describe('WindowAndTabHandle', function() {

  it('new tab handle' , function(){
    cy.visit('https://practice.cydeo.com/windows');
    //this step is remove target attribute, so it will open in same window

    cy.get('.example a').invoke('removeAttr', 'target').click();
    //cy.get('#opentab').invoke('removeAttr', 'target').click();

    //validation of  new page 
    
    cy.url().should('include', 'windows/new');

    //navigation back
    cy.go('back');
    cy.go('forward');
    
    cy.url().should('include', 'windows/new');

  })
})