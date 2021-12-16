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
    let product_name = ""
    let fitment = ""
    let price = ""
    let number_of_review = ""
    let orderQuanitity = ""
    let neworderQuanitity = ""
    let cost = ""
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
        it('Verify shopping count equal 0', () => {
            savedProductAndAddToCartItems.shoppingCount().should('contain',"0")
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
        it('Verify all product sorted from 120 to 290 ', () => {
            breakesRotorPage.tests.VerifyProductSorted()
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
    context('product details page and navigate to product saved later', () => {
        it('Verify Navigate to product detail page with the highest customer rating', () => {
            productPageItems.productName().then((el) => {
                cy.wrap(el.text()).as('product_name')
            })
            productPageItems.fitment().then((el) => {
                cy.wrap(el.text()).as('fitment')
            })
            productPageItems.productPrice().then((el) => {
                cy.wrap(el.text()).as('price')
            })
            productPageItems.numberOfReview().then((el) => {
                cy.wrap(el.text()).as('number_of_review')
            })
            productPageItems.productWithHighestCustomerReview().should('have.attr', 'data-position', '0').click({ timeout: 1000 })
            cy.url('https://www.americanmuscle.com/power-stop-camaro-evolution-coated-rotor-front-ar82187evc.html')

        });
        it('Verify header of product detail match the same clicked product', () => {
            productPageItems.productNameOfProductPage().should('contain', product_name)
        });
        it('Verify fitment of product detail match same clicked product', () => {
            productPageItems.productFitmentOfProductPage().should('contain', fitment)
        });
        it('Verify price of product detail match same clicked product', () => {
            productPageItems.priceAmountOfProductPage().should('contain', price)
        });
        it('Verify number of review of product detail match same clicked product', () => {
            productPageItems.numberOfReviewOfProductPage().should('contain', number_of_review)
        });
        it('Verify clicking on save for later button', () => {
            productPageItems.saveForLaterButton().click()
            productPageItems.saveForLaterLoginCard().should('not.have.class', 'hidden')
        });
        it('Verify filling email to save product', () => {
            productPageItems.emailInput()
                .type('fatma@test.com').should("have.value", "fatma@test.com")
        });
        it('Verify clicking on enter button', () => {
            productPageItems.enterButtonOfSaveLaterCard().click()
            productPageItems.savedText().should('be.visible')
            productPageItems.orderQuantity().then((el) => {
                cy.wrap(el.text()).as('orderQuanitity')
            })
        });
        it('Verify clicking on saved product choice from my account list', () => {
            productPageItems.myAccountMenu().invoke('show', { timeout: 1000 })
            //productPageItems.myAccountMenu().should('have.class','open')
            productPageItems.savedProductFromMyAccountMenu().click({ force: true }, { timeout: 100 })
            cy.get('@data').then((data) => {
                cy.url(data.savedForLaterURL)
            })
        });

    })
    context('saved product for later and at to cart', () => {
        it('Verify Bread Crump cantain saved for later selected', () => {
            savedProductAndAddToCartItems.breadCrumpSavedForLater().should('not.have.class', 'text_link')
        });
        it('Verify title of product detail match same clicked product', () => {
            savedProductAndAddToCartItems.flitmentOfProduct().should('contain', product_name)
        });
        it('Verify fitment of product detail match same clicked product', () => {
            savedProductAndAddToCartItems.flitmentOfProduct().should('contain', fitment)
        });
        it('Verify price of product detail match same clicked product', () => {
            savedProductAndAddToCartItems.priceOfProduct().should('contain', price)
        });
        it('Verify number of review of product detail match same clicked product', () => {
            savedProductAndAddToCartItems.numberOfReview().should('contain', number_of_review)
        });
        it('Verify saved products menu contain the same order quantity of item', () => {
            savedProductAndAddToCartItems.numberOfItemInProductsMenu().should('contain', orderQuanitity)
        });
        it('Verify clicking on add to cart button', () => {
            cy.waitUntil(() => savedProductAndAddToCartItems.addToCartButton()).click({ multiple: true })
            // savedProductAndAddToCartItems.loading().should('be.visible')
            cy.get('@data').then((data) => {
                cy.url(data.shoppingCartURL)
            })
            savedProductAndAddToCartItems.cartHeader().should('contain', 'Your Cart')
        });
        it('Verify all deatils info of product in shooping cart', () => {
            savedProductAndAddToCartItems.cost().should('contain', price)
            savedProductAndAddToCartItems.unitPrice().should('contain', price)
            savedProductAndAddToCartItems.subTotal().should('contain', price)
            savedProductAndAddToCartItems.productName().should('contain', product_name)
        });
        it('Verify hovering on quantity selection', () => {
            savedProductAndAddToCartItems.quantitySelect().first().realHover({ timeout: 1000 }).should('have.css', 'border', '2px solid rgb(24, 145, 205)')
        });
        it('Verify quantity defualt is 1', () => {
            savedProductAndAddToCartItems.quantitySelectionDefult().first().should('have.text', '1')
        });
        it('Verify shopping count and quantity have the same value of defult order quantity', () => {
            savedProductAndAddToCartItems.shoppingCount().should('contain', orderQuanitity)
            savedProductAndAddToCartItems.quantityOfShoppingCount().should('contain', orderQuanitity)
        });
        it('Verify select 11 item of product', () => {
            savedProductAndAddToCartItems.quantitySelect().click()
            savedProductAndAddToCartItems.quantityOfSelectionValue11().click().then((el) => {
                cy.wrap(el.text()).as('neworderQuanitity')
            })
        });
        it('check Cost of 11 unit according to unit price', () => {
            // cost = (neworderQuanitity.replace('$',''))*(price.replace('$',''))
            cy.get('@data').then((data) => {
                price = data.unitPrice
                orderQuanitity = data.quantity
                cost = price * orderQuanitity
                savedProductAndAddToCartItems.cost().should('contain', cost)
            })
        });
        it('check sub total summery of 11 unit according to unit price', () => {
            cy.get('@data').then((data) => {
                price = data.unitPrice
                orderQuanitity = data.quantity
                cost = price * orderQuanitity
                savedProductAndAddToCartItems.cost().should('contain', cost)
            })
        });
        it('Verify shipping counter and quantity of it is match the value of unit selected', () => {
            savedProductAndAddToCartItems.shoppingCount().should('contain', neworderQuanitity)
            savedProductAndAddToCartItems.quantityOfShoppingCount().should('contain', neworderQuanitity)
        });
    })
    after(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    })
})