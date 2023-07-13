/// <reference types="Cypress" />

describe('Web Tables', function() {

  it('Web table' , function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('[name="courses"] tr td:nth-child(2)').each(($e1,index,$list) =>{
      const text = $e1.text(); //cy.wrap()  $e1.next()

      if(text.includes("Python")){
        cy.get('[name="courses"] tr td:nth-child(2)').eq(index).next().then(function(price){
          const priceText =price.text()
          expect(priceText).to.equal('25');
        })

      //or second way (it is worked I dont know why)
      // const priceText = $e1.next().text()
      //expect(priceText).to.equal('25');
      }
    })
    
  })
})