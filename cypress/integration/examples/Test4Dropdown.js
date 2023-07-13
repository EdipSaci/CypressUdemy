
/// <reference types="Cypress" />
describe('Dropdown', function() {

  it('My second test case' , function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //Static dropdown
    cy.get('select').select('option2').should('have.value','option2');

    //Dynamic dropdown
    cy.get('#autocomplete').type('ind');

    cy.get('.ui-menu-item div').each((ab,index, abc) => {
      if(ab.text() === "India"){
        cy.wrap(ab).click();
      }
    })
    cy.get('#autocomplete').should('have.value', 'India');

  
  })

  
})



