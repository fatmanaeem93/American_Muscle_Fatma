import { HomePageItems } from "../HomePage/items"

export class HomePageActions {

    constructor() {
        this.items = new HomePageItems();
    }

    visitHomePage() {
        cy.visit("/")
    }
    clickShopCameroTab() {
        this.items.shopCameroTab().click({ force: true })
    }
    clickcameroTab20162020() {
        this.items.cameroTab20162020().click({ force: true })
    }
}