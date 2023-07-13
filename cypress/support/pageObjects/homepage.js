class HomePage{

  getNameBox(){
    return cy.get("div[class='form-group'] input[name='name']");
  }

  getTwoWayDataBinding(){
    return cy.get("input[name='name']:nth-child(1)");
  }

  getGender(){
    return cy.get('select');
  }

  getEntrepreneaur(){
    return cy.get('#inlineRadio3');
  }

  getShopTab(){
    return cy.get(':nth-child(2) > .nav-link');
  }
}



export default HomePage; // to make this class available for other files in our framweork