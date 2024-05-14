import { loginClass } from "../pages/loginClass"
import { adminJobWorkShifts } from "../pages/adminJobWorkShifts"
import loginData from "../fixtures/loginData.json"
const loginObj=new loginClass()
const adminObj=new adminJobWorkShifts()
const openURL=Cypress.env("loginURL")

describe('Admin-Job-Work Shifts',()=>{

    beforeEach('Login to OrangeHRM website',()=>{
        cy.visit(openURL);
        loginObj.login(loginData.login.username,loginData.login.password)
    })
    
    it('Landing Admin page', ()=>{
        adminObj.selectWorkShift()

    })
})