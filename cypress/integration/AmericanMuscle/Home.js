/// <reference types="cypress" />
import { HomePage } from "../../pageObject/HomePage/page"
import { RotorsPage } from "../../pageObject/BrakesRotor/page"
import { ProductPageItems } from "../../pageObject/productPage/items"
import { SavedProductAndAddToCartItems } from "../../pageObject/SavedProductAndAddCart/items"
describe("Add Camaro Vehicle (2016-2022) to cart with sort", () => {
    let homePage = new HomePage()
    let breakesRotorPage = new RotorsPage()
    let productPageItems = new ProductPageItems()
    let savedProductAndAddToCartItems = new SavedProductAndAddToCartItems()
    let product_name=""
    let fitment=""
    let price=""
    let number_of_review=""
    before(() => {
        homePage.actions.visitHomePage()
    });

    beforeEach(() => {
        Cypress.Cookies.defaults({
            preserve: (cookie) => {
                return true;
            }
        });
        cy.fixture('./example').then((data) => {
            cy.wrap(data).as('data')
        })
    })

    context('Choose Camaro Vehicle (2016-2022)', () => {
        it('Verify User Redirect to home page', () => {
            cy.url('https://www.americanmuscle.com/')
        });
        it('Verify Generation Select Nav Visible', () => {
            homePage.tests.checkGenerationSelectNavVisible()
        });
        it('Verify clicking on Shop Camero Tab', () => {
            homePage.actions.clickShopCameroTab()
            homePage.tests.checkClickOnShopCameroTab()
        });
        it('Verify clicking on Camero Tab 2016_2020', () => {
            homePage.actions.clickcameroTab20162020()
            homePage.tests.checkclickOnCameroTab20162020()
        });
        it('Verify placeholder of Search input contain 16-22 Camaro Parts', () => {
            homePage.tests.checkPlaceholderOfSearchInput()
        });
    })
    context('Navigate to Brakes/Rotor category', () => {
        it('Verify hovering on brakes nav', () => {
            breakesRotorPage.actions.HoverOnbreaksTab()
            breakesRotorPage.tests.checkHoverOnbreaksTab()
            breakesRotorPage.tests.checkbrowsCategoriesInBrakesVisible()
        });
        it('Verify hoveing on Roter choice from CATEGORIES', () => {
            breakesRotorPage.actions.hoverOnRotersFromBreaksTab()
            breakesRotorPage.tests.VerifyHoverOnRotersFromBreaksTab()

        });
        it('Verify clicking on Roter choice from CATEGORIES', () => {
            breakesRotorPage.actions.clickOnRotersFromBreaksTab()
            breakesRotorPage.tests.VerifyClickingOnRotersFromBreaksTab()
        });
        it('Verify action modal is visible', () => {
            breakesRotorPage.actions.showMarketingModel()
            breakesRotorPage.tests.VerifyMarketingModelVisible()
        });
        it('Verify hidden Markiting modal', () => {
            breakesRotorPage.actions.hiddenMarketingModelByClicking()
            breakesRotorPage.tests.VerifyHiddenMarketingModel()
        });
        it('check breadCrump of Camaro Roter 2016-2022 in Camaro Roter page', () => {
            breakesRotorPage.tests.CheckingBreadCrump()
        });
        it('Verify Header of camero rotor page', () => {
            breakesRotorPage.tests.checkheaderOfRotorPage()
        });
        it('Check the sequence of dates in Camaro Roter page 2016-2022', () => {
            breakesRotorPage.tests.checkTheSequenceOfYear()
        });
        it('Verify clicking on brake rotors and drums category filter', () => {
            breakesRotorPage.actions.clickOnBrakeRotorsAndDrumsCategoryFilter()
            breakesRotorPage.tests.VerifyClickingonbrakeRotorsAndDrumsCategoryFilter()
        });
        it('Verify the total result category after filter', () => {
            breakesRotorPage.tests.VerifyTheResultCategoryTotalAfterFilter()
        });
        it('Verify Total number of category equal total item number in Rotor Location filter', () => {
            breakesRotorPage.tests.VerifyTotalNumberOfCategoryEqualTotalItemNumberInRotorTypeFilter()
        });
        it.skip('Verify Total number of category equal total item number in Rotor Type filter', () => {

        });
        it.skip('Verify Total number of category equal total item number in Brand filter', () => {

        });
        it.skip('Verify Total number of category equal total item in Price filter', () => {
        });
        it('Verify adding brake Roter And Drumb Tab Filter', () => {
            breakesRotorPage.tests.VerifybrakeRoterAndDrumbTabFilterVisible()
        });
        it('Verify typing value price filter', () => {
            breakesRotorPage.actions.TypeInMinPriceInput()
            breakesRotorPage.tests.VerifyFillingMinPrice()
            breakesRotorPage.actions.TypeInmaxPriceInput()
            breakesRotorPage.tests.VerifyFillingMaxPrice()
        });
        it('Verify clicking on price filter', () => {
            breakesRotorPage.actions.clickOnGoButton()
            breakesRotorPage.tests.VerifyClickingOnGoButton()
        });
        it('Verify sort select visible and fetured default selected', () => {
            breakesRotorPage.tests.VerifySortSelect()
        });
        it('Verify select customer rating sorting', () => {
            breakesRotorPage.actions.selectCustomerRating()
            breakesRotorPage.tests.VerifySelectCustomerRatingSort()
        });
        it.skip('Verify sorting by customer rating', () => {

        });
    })
    context('product details page and navigate to product saved later',()=>{
        it('Verify Navigate to product detail page with the highest customer rating', () => {
           productPageItems.productName().then((el)=>{
                cy.wrap(el.text()).as('product_name')
            })
            productPageItems.fitment().then((el)=>{
                cy.wrap(el.text()).as('fitment')
            })
            productPageItems.productPrice().then((el)=>{
                cy.wrap(el.text()).as('price')
            })
            productPageItems.numberOfReview().then((el)=>{
                cy.wrap(el.text()).as('number_of_review')
            })
            productPageItems.productWithHighestCustomerReview().should('have.attr','data-position','0').click({timeout:1000})
            cy.url('https://www.americanmuscle.com/power-stop-camaro-evolution-coated-rotor-front-ar82187evc.html')
            
         });
        it('Verify header of product detail match the same clicked product', () => {
            productPageItems.productNameOfProductPage().should('contain',product_name)
        });
        it('Verify fitment of product detail match same clicked product', () => {
           productPageItems.productFitmentOfProductPage().should('contain',fitment)
        });
        it('Verify price of product detail match same clicked product', () => {
            productPageItems.priceAmountOfProductPage().should('contain',price)
        });
        it('Verify number of review of product detail match same clicked product', () => {
            productPageItems.numberOfReviewOfProductPage().should('contain',number_of_review)
        });
        it('Verify clicking on save for later button', () => {
            productPageItems.saveForLaterButton().click()
            productPageItems.saveForLaterLoginCard().should('not.have.class','hidden')
        });
        it('Verify filling email to save product', () => {
            productPageItems.emailInput()
            .type('fatma@test.com').should("have.value","fatma@test.com")
        });
        it('Verify clicking on enter button', () => {
            productPageItems.enterButtonOfSaveLaterCard().click()
            productPageItems.savedText().should('be.visible')
            productPageItems.orderQuantity().then((el)=>{
                cy.wrap(el.text()).as('orderQuanitity')
            })
        });
        it('Verify clicking on saved product choice from my account list', () => {
            productPageItems.myAccount().realHover()
            productPageItems.myAccountMenu().should('have.class','open')
            productPageItems.savedProductFromMyAccountMenu().click()
            cy.get('@data').then((data)=>{
                cy.url(data.savedForLaterURL)
            })
        });
    
    })
})