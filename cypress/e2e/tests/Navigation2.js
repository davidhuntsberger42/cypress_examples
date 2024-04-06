import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

  Given("the duckduckgo.com about site is currently open", () => {
    cy.visit("https://duckduckgo.com/about");
    //cy.get('a').contains('Go to DuckDuckGo homepage');
  });

  When("the logo is clicked", () => {
    cy.get('a.header_logoImg__PFezv').click({ multiple: true, force: true });
  });

  Then("the duckduckgo main page should be displayed", () => {
    cy.get('title').contains('DuckDuckGo — Privacy, simplified.');
  });