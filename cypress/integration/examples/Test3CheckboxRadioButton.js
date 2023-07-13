/// <reference types="Cypress" />
describe('CheckboxRadioButton', function() {

  it('CheckboxRadioButton' , function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //checkbox --> we should use check() method. we can use click() as well
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
    cy.get('input[type="checkbox"]').check(['option2','option3']);

    //radioButton --> we can use check() or click() method
    cy.get('[value="radio2"]').check().should('be.checked');
    cy.get('[value="radio1"]').click().should('be.checked');

  
  })

  
})

