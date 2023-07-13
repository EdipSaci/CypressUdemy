import HomePage from '../../../../support/pageObjects/homepage';
import ProductPage from "../../../../support/pageObjects/productsPage";
import { Given,When, Then } from "@badeball/cypress-cucumber-preprocessor";
const homePage= new HomePage();
const productPage = new ProductPage;
let name;

Given('I open Ecommerce page', () =>{
  cy.visit(Cypress.env('url')+'/angularpractice/');
})

When('I add items to Cart' ,function(){
  homePage.getShopTab().click();
  
  this.data.productName.forEach(function(element){
      cy.selectProduct(element);
    });
    productPage.getCheckoutButton().click();
})

When('Validate the total prices', () =>{
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

Then('Select the country submit and verify Thankyou', ()=>{
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

When('I fill the form details', (dataTable)=>{
  //[name, gender],[eddy,Female]
  name = dataTable.rawTable[1][0];
  homePage.getNameBox().type(dataTable.rawTable[1][0]);
  homePage.getGender().select(dataTable.rawTable[1][1]);
})

Then ('Validate the from behaviour',()=>{
  homePage.getTwoWayDataBinding().should('have.value', name);
  homePage.getNameBox().should('have.attr', 'minlength', '2');
  homePage.getEntrepreneaur().should('be.disabled');
  Cypress.config('defaultCommandTimeout', 8000);
})

Then('Select the Shop page', ()=>{
  homePage.getShopTab().click();
})

