import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("duckduckgo.com is currently open", () => {
    cy.visit("https://www.duckduckgo.com");
  });

When("entering a search for {string}", (search) => {
    console.log(search);
    cy.get("#searchbox_input").click();
    cy.get("#searchbox_input").type(search);
});
And("click the search button", () => {
    cy.get("button.searchbox_searchButton__F5Bwq").click();       
});
                    
Then("the results for the search will be displayed", () => {
    cy.screenshot();
    cy.visit("https://www.duckduckgo.com"); 
});