export class SavedProductAndAddToCartItems {
    constructor() { }
breadCrumpSavedForLater(){
    return cy.get('li[data-pageid="myaccountbuildlist"]');
}
flitmentOfProduct(){
    return  cy.get('.products_container .fitment');
}
priceOfProduct(){
     return  cy.get('.products_container .price');
}
productName(){
     return cy.get('.product_name > a')
}
numberOfReview(){
    return cy.get('.products_container .reviews-number')
}
numberOfItemInProductsMenu(){
    return cy.get('.build_list p');
}
addToCartButton(){
    return cy.get('a[title="Add to Shopping Cart"]');
}
cartHeader(){
   return cy.get('#page .page_header');
}
cost(){
    return cy.get('.sub_total');
}
unitPrice(){
    return cy.get('.unit_price');
}
subTotal(){
    return cy.get('span[data-key="SubTotal"]');
}
quantitySelectionDefult(){
    return cy.get('.dropdown-text');
}
quantitySelect(){
    return cy.get('.quantity button')
}
shoppingCount(){
    return cy.get('a[href="/shopping-cart.html"] span  .cart_count');
}
quantityOfShoppingCount(){
    return cy.get('.tiny_copy');
}
quantityOfSelectionValue11(){
    return cy.get('li[data-value="11"]');
}
loading(){
    return cy.get('div[class="spinner"]')
}








}