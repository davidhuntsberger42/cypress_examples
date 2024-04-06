import { Given, When, And, Then, Scenario } from "cypress-cucumber-preprocessor/steps";

//Scenario('Visiting the frontpage and navigating', () => {
  When("I visit duckduckgo.com", () => {
      cy.visit("https://www.duckduckgo.com");
    });
  
  Then("I should see the logo", () => {
    cy.get("section.header_headerLeft__gTUAg.header_headerSection__C99zW").should('exist');
  });

  Given("duckduckgo.com is currently open", () => {
    cy.visit("https://www.duckduckgo.com");
  });

  When("the logo is clicked", () => {
    cy.get("a.header_logoImg__PFezv").click({ multiple: true, force: true })
  });

  Then("the duckduckgo about page should be displayed", () => {
  cy.get('title').contains('About DuckDuckGo');
  });

  Given("duckduckgo.com about is currently open", () => {
    cy.visit("https://duckduckgo.com/about");
    cy.get('a.header_logoImg__PFezv');
  });

  When("the logo is clicked", () => {
    cy.get('a.header_logoImg__PFezv').click({ multiple: true, force: true });
  });

  Then("the duckduckgo main page should be displayed", () => {
    cy.get('title').contains('DuckDuckGo — Privacy, simplified.');
  });