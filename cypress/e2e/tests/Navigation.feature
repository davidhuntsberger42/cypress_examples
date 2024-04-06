Feature: Navigating the duck duck go site
Scenario: Visiting the frontpage and navigating
    When I visit duckduckgo.com
    Then I should see the logo


Scenario: Click the logo to go to about page
    
    Given duckduckgo.com is currently open
    When the logo is clicked
    Then the duckduckgo about page should be displayed


Scenario: Click the logo on about page to go back to main page
    
    Given duckduckgo.com about is currently open
    When the logo is clicked
    Then the duckduckgo main page should be displayed