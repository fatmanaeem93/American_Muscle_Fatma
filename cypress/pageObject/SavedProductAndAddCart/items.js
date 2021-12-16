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
numberOfReview(){
    return cy.get('.products_container .reviews-number')
}
numberOfItemInProductsMenu(){
    return cy.get('li[data-buildlist-id="731536"] p');
}
addToCartButton(){
    return cy.get('a[data-saved-list-id="731536"]');
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
    return cy.get('.dropup span:first-child');
}
quantitySelect(){
    return cy.get('.dropup')
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








}