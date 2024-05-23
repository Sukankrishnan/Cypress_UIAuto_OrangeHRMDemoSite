import { loginClass } from "../pages/loginClass"
import generalInfoClass from "../pages/adminOrgGeneralInfo"
import loginData from "../fixtures/loginData.json"


const loginObj=new loginClass()
const gInfoObj=new generalInfoClass()

const openURL=Cypress.env("loginURL")

describe("Verify general information menu", ()=>{

    it("General information", ()=>{
        cy.visit(openURL)
        loginObj.login(loginData.login.username,loginData.login.password)
        gInfoObj.generalInfoValidation()

    })
})