import { RotorsPageItems } from "../BrakesRotor/items"

export class RotorsPageActions {

    constructor() {
        this.items = new RotorsPageItems();
    }

    HoverOnbreaksTab(){
        this.items.breaksTab().realHover({force:true})
    }
    hoverOnRotersFromBreaksTab(){
        this.items.rotersFromBreaksTab().realHover()
    }
    clickOnRotersFromBreaksTab(){
        
        this.items.rotersFromBreaksTab().click()
    }
    clickOnBrakeRotorsAndDrumsCategoryFilter()
    {
        this.items.brakeRotorsAndDrumsCategoryFilter().click()
    }
    TypeInMinPriceInput(){
        cy.get('@data').then((data)=>{
            this.items.minPriceInput().type(data.minPrice)
           })
    }
    TypeInmaxPriceInput(){
        cy.get('@data').then((data)=>{
            this.items.minPriceInput().type(data.maxPrice)
           })
    }
    clickOnGoButton(){
        this.items.GoButton().click()
    }
    selectCustomerRating(){
        this.items.SortSelect().select('Customer Rating',{force:true})
    }
    hiddenMarketingModelByClicking(){
        this.items.NoThanksLink().click()
    }
    showMarketingModel(){
        this.items.marketingModalPOPUP().invoke('show')
    }
}