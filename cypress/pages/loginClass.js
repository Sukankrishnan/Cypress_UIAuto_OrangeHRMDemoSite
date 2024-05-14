import verifyPage from "../webLocators/dashboard.json"
import loginLocators from "../webLocators/login.json"

export class loginClass
{
    username(email)
    {
        cy.get(loginLocators.login.userName).type(email)
        cy.get(loginLocators.login.userName).should("be.visible")
    }

    password(password)
    {
        cy.get(loginLocators.login.password).type(password)
        cy.get(loginLocators.login.password).should("be.visible")
    }

    submit()
    {
        cy.get(loginLocators.login.loginBtn).should("be.visible")
        cy.get(loginLocators.login.loginBtn).click()
        
    }

    title()
    {
        cy.title().should('eq', 'OrangeHRM')
    }

    login(username,password)
    {
        this.username(username)
        this.password(password)
        this.submit()
        cy.get(verifyPage.dashboard.orangeHRMLogo)
            .should('be.visible')
            .log("Orange CRM page logged in successful")
    }


}