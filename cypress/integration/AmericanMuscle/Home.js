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
        it('check breadCrump of Camaro Roter in Camaro Roter page', () => {
            breakesRotorPage.tests.CheckingBreadCrump()
        });
        it('Verify Header of camero rotor page', () => {
            breakesRotorPage.tests.checkheaderOfRotorPage()
        });
        it('Check the sequence of dates in Camaro Roter page 2016-2022', () => {
            breakesRotorPage.tests.checkTheSequenceOfYear()
        });
        it('Verify clicking on category filter', () => {
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
            breakesRotorPage.tests.VerifyTypingInMinPrice()
            breakesRotorPage.actions.TypeInmaxPriceInput()
            breakesRotorPage.tests.VerifyTypingInMaxPrice()
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
})