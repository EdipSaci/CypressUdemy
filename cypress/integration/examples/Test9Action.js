/// <reference types="Cypress" />

describe('MouseHover', function() {

  it('MouseHover' , function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    //cy.get('.mouse-hover-content').invoke('show');
    //cy.contains('Top').click();
   // cy.url().should('include','top');

    //Cypress can click to hidden element
    cy.contains('Top').click({force:true});
    cy.url().should('include','top');

  })
})