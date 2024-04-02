Feature: Running searches
Scenario: visiting the frontpage
    When I visit duckduckgo.com
    Then I should see a search bar


Scenario: run searches

  Scenario Outline: Searching multiple things  
    Given duckduckgo.com is currently open
    When entering a search for "<search>"
    And click the search button
    Then the results for the search will be displayed

    Examples:
    | search     |
    | Testing    |
    | Automation |
    | Test cases |