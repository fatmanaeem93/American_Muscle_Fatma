/// <reference types="cypress" />
import { HomePage } from "../../pageObject/HomePage/page"
describe("choose Camaro Vehicle (2016-2022)", () => {
    let homePage = new HomePage()
  
    before(() => {
        homePage.actions.visitHomePage()
    });

    beforeEach(() => {
        Cypress.Cookies.defaults({
            preserve: (cookie) => {
                return true;
            }
        });
        cy.fixture('./example').then((data)=>{
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
  

})