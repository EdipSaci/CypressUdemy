class ProductPage{

  getCheckoutButton(){
    return cy.get("li[class='nav-item active'] a");
  }
}

export default ProductPage;