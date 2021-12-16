import { RotorsPageItems } from "../BrakesRotor/items"
export class RotorsPageTests {

    constructor() {
        this.items = new RotorsPageItems();
    }

    checkHoverOnbreaksTab()
    {
        this.items.breaksTab().should('have.css','color','rgb(24, 145, 205)')
    }
    checkbrowsCategoriesInBrakesVisible(){
        this.items.browsCategoriesInBrakes().should('have.attr','style','display: block;')
    }
    VerifyHoverOnRotersFromBreaksTab(){
        this.items.rotersFromBreaksTab().should('have.css','color','rgb(24, 145, 205)')
    }
    VerifyClickingOnRotersFromBreaksTab(){
        cy.get('@data').then((data)=>{
            cy.url(data.CamaroRotorsURL)
           })
    }
    VerifyMarketingModelVisible(){
        cy.wait(1000)
        this.items.marktingModal().should('be.visible')
    }
    VerifyHiddenMarketingModel(){
        this.items.marktingModal().should('not.be.visible')
    }
    CheckingBreadCrump(){
        console.log((this.items.breadCrumb().children()).length)
        // for( let i = 0; i < this.items.breadCrumb().children().length; i++){
        //    this.items.breadCrumb().children().first().then((li)=>{
        //         cy.log(li.text())
        //    })
        // }
    }
    checkheaderOfRotorPage()
    {
      this.items.headerOfRotorPage().should('have.text','2016-2022 Camaro Rotors')
    }
    checkTheSequenceOfYear()
    {
        this.items.sequanceOfYear().should('have.text','2016, 2017, 2018, 2019, 2020, 2021, 2022')
    }
    VerifyClickingonbrakeRotorsAndDrumsCategoryFilter()
    {
        this.items.brakeRotorsAndDrumsCategoryFilter().should('have.class','facet selected')
        cy.url('https://www.americanmuscle.com/2016-camaro-rotors.html/f/?Subcategory=Brake%20Rotors%20and%20Drums')
        this.items.brakeRoterAndDrumbTabFilter().should('have.text','Brake Rotors and Drums')
         this.items. loading().should('be.visible')
    }
    VerifyTheResultCategoryTotalAfterFilter(){
        this.items.NumberOfbrakeRotorsAndDrumsCategoryFilter().then((el)=>{
            cy.wrap(el.text()).as('brakesCategoryNumber')
        })
        this.items.resultOfFilter('contain',this.brakesCategoryNumber)
    }
    VerifyTotalNumberOfCategoryEqualTotalItemNumberInRotorTypeFilter(){
        let sum = 0;
        this.items.NumberOfRotorTypeFilter().each(($el) => {
            sum +=$el.text(); 
            // cy.log($el.text())
          })
         cy.log(sum)
        
        
    }
    VerifybrakeRoterAndDrumbTabFilterVisible(){
        this.items.brakeRoterAndDrumbTabFilter().should("be.visible")
    }
    VerifyTypingInMinPrice(){
        cy.get('@data').then((data)=>{
            this.items.minPriceInput().should('have.value',data.minPrice)
           })
    }
    VerifyTypingInMaxPrice(){
        cy.get('@data').then((data)=>{
            this.items.maxPriceInput().should('have.value',data.maxPrice)
           })
     
    }
    VerifyClickingOnGoButton(){
        this.items.GoButton().should('have.attr','data-facet-id','$120 - $290').and('have.class','limit_price selected')
        cy.url('https://www.americanmuscle.com/2016-camaro-rotors.html/f/?Subcategory=Brake%20Rotors%20and%20Drums&RetailPrice=%24120%20-%20%24290')
        this.items.PriceTabFilter().should("be.visible")
    }
    VerifySortSelect(){
        this.items.SortSelect().should('be.visible')
        this.items.featuredSelection().should('have.attr','selected')
    }
    VerifySelectCustomerRatingSort(){
     
       cy.url('https://www.americanmuscle.com/2016-camaro-rotors.html/f/?Subcategory=Brake%20Rotors%20and%20Drums&RetailPrice=%24120%20-%20%24290&sort=Customer%20Rating')
       let url = 'https://k-aus1.contentsquare.net/v2/recording?rt=5&v=11.6.3&pid=10304&uu=a24ee269-794f-ab95-a716-3eed629077c0&sn=13&pn=10&ri=6';
       cy.intercept('POST', url).as('customerRating');
       this.items.customerRatingSelection().should('have.value','Customer Rating').and('have.attr','selected')
       cy.wait('@customerRating');
    }
    // VerifyItemSortedByCustomerRating(){
       
    // }

}