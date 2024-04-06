Feature: Navigating the duck duck go site
Scenario: Click the logo on about page to go back to main page
    
    Given the duckduckgo.com about site is currently open
    When the logo is clicked
    Then the duckduckgo main page should be displayed