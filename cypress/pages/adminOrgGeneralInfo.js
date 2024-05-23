import generalInfoData from "../webLocators/generalInformation.json"
import {adminData} from "../webLocators/admin.json"

export class adminOrgGeneralInfo
{
    generalInfoValidation()
    {
        cy.get(adminData.organization.generalInformation).click()
        cy.get(generalInfoData.generalInformationTitle)
            .should("contain", "General Information")
    }
}