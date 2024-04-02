Feature: Running a search
Scenario: run search

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