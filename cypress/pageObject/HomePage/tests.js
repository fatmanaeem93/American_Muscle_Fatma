import { HomePageItems } from "../HomePage/items"
export class HomePageTestss {

    constructor() {
        this.items = new HomePageItems();
       
    }
    checkGenerationSelectNavVisible() {
        this.items.generationSelectNav().should("be.visible")
    }
    checkClickOnShopCameroTab() {
        cy.get('@data').then((data)=>{
         cy.url(data.ShopCameroTabURL)
        })
        this.items.cameroSelectContainer().should('have.class', 'sub_panel_visible')
    }
    checkclickOnCameroTab20162020() {
        cy.get('@data').then((data)=>{
            cy.url(data.CameroTab20162020URL)
           })
        this.items.shopCamaroDefultTab()
        .should('not.have.class', 'hidden').and('contain','Camaro')
    }
    checkPlaceholderOfSearchInput(){
        this.items.searchInput().invoke('attr', 'placeholder').should('contain', "Search '16-'22 Camaro Parts")
    }
}