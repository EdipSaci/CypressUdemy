/// <reference types="Cypress" />
describe('WindowAndTabHandle', function() {

  it.skip('new tab handle' , function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //this step is remove target attribute, so it will open in same window
    cy.get('#opentab').invoke('removeAttr', 'target').click();

    //validation of  new page qaclickacademy.com
    cy.wait(5000);
    cy.url().should('include','qaclickacademy');
    //cy.url().should('include', 'qa');

    //navigation back
    //cy.go('back');
    //cy.go('forward');
    
  })

  //second way
  it('Seperate window handling', function(){
    cy.visit(Cypress.env('url')+'/AutomationPractice/');
    cy.get('#opentab').then(function(el){
      //prop() --> gets the attribute of href
      const url = el.prop('href');
      cy.visit(url);
      // cy.url().should('include','qa');  //--> it will not work. Because cypress can work for just one domain

      cy.origin(url , () =>{
        cy.url().should('include','qaclick'); 
      });
      
    })

  })
})