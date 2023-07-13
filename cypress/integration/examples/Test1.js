/// <reference types="Cypress" />
describe('My first test suite', function() {

  it('My first test case' , function(){
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    cy.get('.product:visible').should('have.length',4);

    //Parent to child chaining
    cy.get('.products').find('.product').should('have.length',4);
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
      console.log('sff'); //this print in console
    });    

    //or

    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length',4);

    //iterate elements
    cy.get('.products').find('.product').each(($e1, index, $list) =>{
      const textVeg = $e1.find('.product-name').text();
      if(textVeg.includes("Cashews")){
        cy.wrap($e1).find('button').click();
      }
    }) 

    //assert if logo text is correctly displayed
    cy.get('.brand').should('have.text', 'GREENKART')

    cy.get('.brand').then(function(logoElement){
      cy.log(logoElement.text()); //this print in test runner information  text() method is not cypress command
    });

    

    
  })
})

