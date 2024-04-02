import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

Given('Login to the application', () => {
   cy.visit('http://zero.webappsecurity.com/login.html')
  })
  
  When('I type the credentials', (dataTable) => {
    cy.get('#user_login').type(dataTable.rawTable[1][0])
    cy.get('#user_password').type(dataTable.rawTable[1][1])
    cy.get('#user_login').type(dataTable.rawTable[2][0])
    cy.get('#user_password').type(dataTable.rawTable[2][1])
  })

  Then('click Login', () => {
    cy.get('input[name="submit"]').click()
  })