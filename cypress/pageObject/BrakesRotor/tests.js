import { RotorsPageItems } from "../BrakesRotor/items"
export class RotorsPageTests {

    constructor() {
        this.items = new RotorsPageItems();
    }

    checkHoverOnbreaksTab() {
        this.items.breaksTab().should('have.css', 'color', 'rgb(24, 145, 205)')
    }
    checkbrowsCategoriesInBrakesVisible() {
        this.items.browsCategoriesInBrakes().should('have.attr', 'style', 'display: block;')
    }
    VerifyHoverOnRotersFromBreaksTab() {
        this.items.rotersFromBreaksTab().should('have.css', 'color', 'rgb(24, 145, 205)')
    }
    VerifyClickingOnRotersFromBreaksTab() {
        cy.get('@data').then((data) => {
            cy.url(data.CamaroRotorsURL)
        })
    }
    VerifyMarketingModelVisible() {
        cy.wait(1000)
        this.items.marktingModal().should('be.visible')
    }
    VerifyHiddenMarketingModel() {
        this.items.marktingModal().should('not.be.visible')
    }
    CheckingBreadCrump() {
        this.items.breadCrumbOfCameroRotors().should('not.have.class', 'text_link')
    }
    checkheaderOfRotorPage() {
        this.items.headerOfRotorPage().should('have.text', '2016-2022 Camaro Rotors')
    }
    checkTheSequenceOfYear() {
        this.items.sequanceOfYear().should('have.text', '2016, 2017, 2018, 2019, 2020, 2021, 2022')
    }
    VerifyClickingonbrakeRotorsAndDrumsCategoryFilter() {
        this.items.brakeRotorsAndDrumsCategoryFilter().should('have.class', 'facet selected')
        this.items.loading().should('be.visible')
        cy.url('https://www.americanmuscle.com/2016-camaro-rotors.html/f/?Subcategory=Brake%20Rotors%20and%20Drums')
        this.items.brakeRoterAndDrumbTabFilter().should('have.text', 'Brake Rotors and Drums')
    }
    VerifyTheResultCategoryTotalAfterFilter() {
        this.items.NumberOfbrakeRotorsAndDrumsCategoryFilter().then((el) => {
            cy.wrap(el.text()).as('brakesCategoryNumber')
        })
        this.items.resultOfFilter('contain', this.brakesCategoryNumber)
    }
    VerifyTotalNumberOfCategoryEqualTotalItemNumberInRotorTypeFilter() {
        let sum = 0;
        this.items.NumberOfRotorTypeFilter().each(($el) => {
            sum += $el.text();
            // cy.log($el.text())
        })
        cy.log(sum)
    }
    VerifybrakeRoterAndDrumbTabFilterVisible() {
        this.items.brakeRoterAndDrumbTabFilter().should("be.visible")
    }
    VerifyFillingMinPrice() {
        cy.get('@data').then((data) => {
            this.items.minPriceInput().should('have.value', data.minPrice)
        })
    }
    VerifyFillingMaxPrice() {
        cy.get('@data').then((data) => {
            this.items.maxPriceInput().should('have.value', data.maxPrice)
        })

    }
    VerifyClickingOnGoButton() {
        this.items.GoButton().should('have.attr', 'data-facet-id', '$120 - $290').and('have.class', 'limit_price selected')
        cy.url('https://www.americanmuscle.com/2016-camaro-rotors.html/f/?Subcategory=Brake%20Rotors%20and%20Drums&RetailPrice=%24120%20-%20%24290')
        this.items.loading().should('be.visible')
        cy.wait(1000)
        this.items.PriceTabFilter().should("be.visible")
    }
    VerifyProductSorted() {
        this.items.allPriceItem().then(ele => {
            const unsortedItems = ele.map((index, el) => Cypress.$(el).text().substr(1).trim().replace(/,/g, '')).get();
            const sortedItems = unsortedItems.slice().sort((a, b) => parseFloat(b) - parseFloat(a));
            expect(sortedItems, 'Items are sorted').to.deep.equal(unsortedItems);
        });
    }
    VerifySortSelect() {
        this.items.SortSelect().should('be.visible')
        this.items.featuredSelection().should('have.attr', 'selected')
    }
    VerifySelectCustomerRatingSort() {
        cy.url('https://www.americanmuscle.com/2016-camaro-rotors.html/f/?Subcategory=Brake%20Rotors%20and%20Drums&RetailPrice=%24120%20-%20%24290&sort=Customer%20Rating')
        this.items.customerRatingSelection().should('have.value', 'Customer Rating').and('have.attr', 'selected')
    }
    // VerifyItemSortedByCustomerRating(){

    // }

}