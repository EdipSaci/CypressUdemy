/// <reference types="Cypress" />
describe('My first test suite', function() {

  it('My second test case' , function(){
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);

    //Parent to child chaining
    cy.get('.products').as('productLocator')
    
    //iterate elements
    cy.get('.products').find('.product').each(($e1, index, $list) =>{
      const textVeg = $e1.find('h4.product-name').text();
      if(textVeg.includes("Cashews")){
        cy.wrap($e1).find('button').click();
      }
    }) 
    cy.get('.cart-icon > img').click();
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.contains('Place Order').click();

 

    
  })
})

