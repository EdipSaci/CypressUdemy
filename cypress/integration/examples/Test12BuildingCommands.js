/// <reference types="Cypress" />
import ProductPage from "../pageObjects/productsPage";
describe('creating custom commands', function() {

  before(function(){
    //runs once before all tests in the lock
    cy.log('this is BEFORE');
    cy.fixture('example').then(function(data){
      this.data = data;// with this keyword we can use this data entire class. it become global variable 
    })
  })

  beforeEach(function(){
    //run before each test block
    cy.log('BeforeEach');
  })

  
  it.skip('select product', function(){
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    //click the shop button
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get('h4.card-title').each(($el,index,$list)=>{
      if($el.text().includes('Blackberry')){
        cy.get('button.btn.btn-info').eq(index).click();
      }
    })
  })

  it.skip('select product with custom command', function(){
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    //click the shop button
    cy.get(':nth-child(2) > .nav-link').click();
    cy.selectProduct('Blackberry');
    cy.selectProduct('Nokia Edge');


  })

  it.skip('select product with custom command with parameterizing', function(){
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    //click the shop button
    cy.get(':nth-child(2) > .nav-link').click();

    const productNames =this.data.productName
    productNames.forEach(function(element){
      cy.selectProduct(element);
    })
  })


  

})

