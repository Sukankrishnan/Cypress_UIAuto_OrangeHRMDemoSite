//import loginClass from "../pages/loginClass";
import { loginClass } from "../pages/loginClass"
const loginObj= new loginClass()
import loginData from "../fixtures/loginData.json"
import verifyPage from "../webLocators/dashboard.json"

// const loginObj=new loginClass()
const openURL=Cypress.env("loginURL")
describe ("Login page of OrangeHRM", ()=>{
  
it("Login to OrangeCRM demo website", ()=>{
  cy.visit(openURL);
  loginObj.login(loginData.login.username, loginData.login.password)
  // loginObj.title(); // assertion for page title
  // loginObj.username(loginData.login.username)
  // loginObj.password(loginData.login.password)
  // loginObj.submit()


  })
})