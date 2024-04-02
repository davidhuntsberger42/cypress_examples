import { Given, When, And, Then, Scenario } from "cypress-cucumber-preprocessor/steps";

Scenario('visiting the frontpage', () => {
When("I visit duckduckgo.com", () => {
    cy.visit("https://www.duckduckgo.com");
  });
  
  Then("I should see a search bar", () => {
    cy.get("input").should
      "have.attr",
      "placeholder",
      "Search the web without being tracked";
  });
});


Scenario('run searches', () => {
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
    cy.screenshot();       
});
                    
Then("the results for the search will be displayed", () => {
    cy.visit("https://www.duckduckgo.com"); 
});
});
