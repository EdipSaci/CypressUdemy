/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('iframes', function() {

  it('iframes' , function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("a[href='mentorship']").eq(0).click();

    cy.iframe().find("a[class='new-navbar-highlighter']").should('have.length',2);
 
  })
})


//npm install -D cypress-iframe
//import 'cypress-iframe'