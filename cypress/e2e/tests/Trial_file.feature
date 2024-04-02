Feature: Login Tests

Login Test Cases

Scenario: Login with multiple credentials
Given Login to the application
When I type the credentials
| uname | pword |
| username | password |
| hello | world |
Then click Login