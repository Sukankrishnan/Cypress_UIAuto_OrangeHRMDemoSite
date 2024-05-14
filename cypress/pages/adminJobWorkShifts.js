import mainMenuLocators from "../webLocators/mainMenu.json"
import adminLocators from "../webLocators/admin.json"

export class adminJobWorkShifts

    {
        generateRandomName()
        {
            var randomString=Math.random().toString(36).substring(3,10); //generate random number, convert to alphanumeric, truncate to 8 characters
            return randomString
        }

        selectWorkShift()
        {
            cy.wait(2000)
                //select Admin page
                cy.get(mainMenuLocators.admin).click()
                //cy.get(adminLocators.adminTitle).should('contain','administrator')
                console.log("Landed on Admin page")
                //click Job dropdown
                cy.get(adminLocators.dropdown.job).click()
                cy.wait(2000)
                //select 'Work shifts'
                cy.get(adminLocators.job.workShifts).click()
                //cy.get(adminLocators.workShiftsMenu.workShiftsTitle).should('contain','Work')
                cy.get(adminLocators.workShiftsMenu.add).click()
                //cy.get(adminLocators.workShiftsMenu.addWorkShiftTitle).should('contain','Add')
                var newName=this.generateRandomName()
                cy.get(adminLocators.workShiftsMenu.shiftName).type(newName)
                cy.get(adminLocators.workShiftsMenu.fromWorkingHours).click()
                //cy.get(adminLocators.workShiftsMenu.hour).click()
                //cy.get(adminLocators.workShiftsMenu.hour).type("10")
                cy.get(adminLocators.workShiftsMenu.hourUpArrow).click()
                cy.get(adminLocators.workShiftsMenu.toWorkingHours).click()
                cy.get(adminLocators.workShiftsMenu.minuteUpArrow).click()
                cy.get(adminLocators.workShiftsMenu.pm).click()
                cy.get(adminLocators.workShiftsMenu.durationPerDay)
                    .click()
                    .should('contain','7.25')
                cy.get(adminLocators.workShiftsMenu.saveNewWorkShift).click()
                cy.wait(6000) // takes time to add wirk shift in the table
                cy.get(adminLocators.workShiftsMenu.workShiftTable)
                    .should('contain', newName) //validate the added new name in table
                
                    
        }

        
    }


