

/// <reference types="Cypress" />
describe('Alert', function() {

  it('alert' , function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('[value="Alert"]').click();
    cy.get('[value="Confirm"]').click();

    //window:alert  --> information alert
    cy.on('window:alert',(str) =>{
      //Mocha 
      expect(str).to.equal('Hello , share this practice page and share your knowledge');
    })

    //window:confirm  --> confirmation alert
    cy.on('window:confirm',(str) =>{
      //Mocha 
      expect(str).to.equal('Hello , Are you sure you want to confirm?');
    })

  })
})