/// <reference types="Cypress" />
import ProductPage from "../../support/pageObjects/productsPage";

describe('Checkout and validation',function(){
  before(function(){
    //runs once before all tests in the lock
    cy.log('this is BEFORE');
    cy.fixture('example').then(function(data){
      this.data = data;// with this keyword we can use this data entire class. it become global variable 
    })
  })

  it.skip('checkout', function(){
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    //click the shop button
    cy.get(':nth-child(2) > .nav-link').click();

    const productNames =this.data.productName
    productNames.forEach(function(element){
      cy.selectProduct(element);
    })

    //We can determine time defaulCommandTimeout for this spec
    Cypress.config('defaultCommandTimeout',8000);
    const productPage = new ProductPage;
    productPage.getCheckoutButton().click();
    cy.contains('Checkout').click();
    cy.get('#country').type('India');
    cy.get('.suggestions > ul > li > a').click();
    cy.get('#checkbox2').check({force: true} );  //if you can not check checkbox 
    cy.get('input[type="submit"]').click();
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).');   because of gabs we couldnt assert
    cy.get('.alert').then(function(element){
      const actualText= element.text();
    
      expect(actualText.includes("Success")).to.be.true;
      
    })



  })

  it('checkout and validate total price', function(){
    cy.visit(Cypress.env('url')+'/angularpractice/');
    //click the shop button
    cy.get(':nth-child(2) > .nav-link').click();

    const productNames =this.data.productName
    productNames.forEach(function(element){
      cy.selectProduct(element);
    })

    //We can determine time defaulCommandTimeout for this spec
    Cypress.config('defaultCommandTimeout',8000);
    const productPage = new ProductPage;
    productPage.getCheckoutButton().click();
    let sum = 0;
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) =>{
      
      const amount= $el.text();
      let res = amount.split(" "); // it will separate our string by using space. Then we have 2 element in array 
      //res[0]= ₹. 
      //res[1]= 150000
      res= res[1].trim(); // it will remove the spaces
      cy.log(res);
      sum = Number(sum)+Number(res);  //it convert to string to number :)
    
    }).then(function(){  //we wrote Then() because of syncronization. it wll wait until loop is done
      cy.log(sum);
    })
   
    cy.get('h3 strong').then(function(element){
      const amount=element.text();
      let res = amount.split(" ");
      let total = res[1].trim();
      expect(Number(total)).to.equal(sum);

    })

  })



})