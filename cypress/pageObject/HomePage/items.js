export class HomePageItems {
    constructor() { }
    generationSelectNav() {
        return cy.get('.generation_select .vehicle nav');
    }
    shopCameroTab() {
        return cy.get('a[data-vehicle-type="Camaro"]')
    }
    cameroSelectContainer() {
        return cy.get('.generation_select > .vehicle_select_container');
    }
    cameroTab20162020() {
        return cy.get('a[title="2016-2022 Camaro Accessories & Parts"]');
    }
    shopCamaroDefultTab() {
        return cy.get('li[data-vfw-vehicletype="camaro"]');
    }
}