export class RotorsPageItems {
    constructor() { }

    breaksTab() {
        return cy.get('[href="/2016-camaro-brakes.html"]');
    }
    browsCategoriesInBrakes() {
        return cy.get('nav > ul > li:nth-child(3) > div')
    }
    rotersFromBreaksTab(){
        return cy.get('a[title="2016-2021 Camaro Rotors"]');
    }
    breadCrumb()
    {
        return cy.get('section[data-type="drilldown"]> div> ul');
    }
    headerOfRotorPage(){
        return cy.get('.generation_years_text');
    }
    sequanceOfYear()
    {
        return cy.get('.generation_years_text')
    }
    brakeRotorsAndDrumsCategoryFilter(){
        return cy.get('a[data-facet-id="Brake Rotors and Drums"]');
    }
    NumberOfbrakeRotorsAndDrumsCategoryFilter()
    {
        return cy.get('[data-facet-id="Brake Rotors and Drums"] .count');
    }
    NumberOfRotorsLocationFilter()
    {
        return cy.get('div[data-group-name="RotorLocation"] .count');
    }
    NumberOfRotorTypeFilter()
    {
        return cy.get('div[data-group-name="RotorType"] .count');
    }
    NumberOfBrandFilter()
    {
        return cy.get('div[data-group-name="Brand"] .count');
    }
    NumberOfPriceFilter()
    {
        return cy.get('div[data-group-name="Price"] .count');
    }
    resultOfFilter(){
        return cy.get('.total_matching');
    }
    brakeRoterAndDrumbTabFilter(){
        return cy.get('p[data-facet-id="Brake Rotors and Drums"]');
    }
    minPriceInput(){
        return cy.get('input[class=min_price]');
    }
    maxPriceInput(){
        return cy.get('input[class=max_price]');
    }
    GoButton(){
        return cy.get("button[class='limit_price']");
    }
    PriceTabFilter(){
        cy.get('p[data-group-id="RetailPrice"]')
    }
    SortSelect(){
        return cy.get('select[name="sort"]');
    }
    featuredSelection(){
        return cy.get('option[value="Featured"]');
    }
    customerRatingSelection(){
        return cy.get('option[value="Customer Rating"]');
    }
    marktingModal(){
        return cy.get('.overlay.marketing_modal')
    }
    loading(){
        return cy.get('div[class="spinner"]')
    }
    NoThanksLink(){
        return cy.get('.progress_container > .text_link')
    }
    marketingModalPOPUP(){
        return cy.get('[data-valid-for-display="True"]')
    }
}