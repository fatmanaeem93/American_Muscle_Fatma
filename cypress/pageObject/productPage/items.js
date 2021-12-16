export class ProductPageItems {
    constructor() { }
    productName(){
    return  cy.get('li[data-position="0"] a[data-qatgt="productName"]');
    }
    productPrice(){
        return cy.get('li[data-position="0"] p[data-qatgt="price"]');
    }
    fitment(){
        return cy.get('li[data-position="0"] a[data-qatgt="productName"] + p')
    }
    numberOfReview(){
        return cy.get('li[data-position="0"] div[data-qatgt="rating"] + p span')
    }
    productWithHighestCustomerReview(){
        return cy.get('li[data-position="0"]')
    }
    productNameOfProductPage(){
        return cy.get('.headline_container h1')
    }
    productFitmentOfProductPage(){
        return  cy.get('.title_container .fitment')
    }
    priceAmountOfProductPage(){
        return  cy.get('.price_amount')
    }
    numberOfReviewOfProductPage(){
        return cy.get('.text_link > .count')
    }
    saveForLaterButton(){
        return cy.get('.triggers > .save_for_later_trigger')
    }
    saveForLaterLoginCard(){
        return cy.get('.cart_actions .saved_for_later_login_container')
    }
    emailInput(){
        return cy.get('.order_details > .saved_for_later_login_container > .box_and_triangle > .input > #email')
    }
    enterButtonOfSaveLaterCard()
    {
        return cy.get('.order_details > .saved_for_later_login_container > .box_and_triangle > .input > .alt_btn')
    }
    savedText(){
        return cy.get("p[class='saved']")
    }
    orderQuantity(){
        return cy.get('.order_quantity')
    }
    myAccount(){
        return cy.get('.my_account_trigger_container')
    }
    myAccountMenu(){
        return cy.get('.my_account_trigger_container  .quick_action_container')
    }
    savedProductFromMyAccountMenu(){
        return cy.get('a[data-qatgt="header_sfl"]')
    }




}