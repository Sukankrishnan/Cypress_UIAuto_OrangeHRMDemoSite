import mainMenuLocators from "../webLocators/mainMenu.json"
import adminLocators from "../webLocators/admin.json"
import workShiftsLocators from "../webLocators/workShifts.json"

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
                cy.get(workShiftsLocators.add).click()
                //cy.get(adminLocators.workShiftsMenu.addWorkShiftTitle).should('contain','Add')
                var newName=this.generateRandomName()
                cy.get(workShiftsLocators.shiftName).type(newName)
                cy.get(workShiftsLocators.fromWorkingHours).click()
                //cy.get(adminLocators.workShiftsMenu.hour).click()
                //cy.get(adminLocators.workShiftsMenu.hour).type("10")
                cy.get(workShiftsLocators.hourUpArrow).click()
                cy.get(workShiftsLocators.toWorkingHours).click()
                cy.get(workShiftsLocators.minuteUpArrow).click()
                cy.get(workShiftsLocators.pm).click()
                cy.get(workShiftsLocators.durationPerDay)
                    .click()
                    .should('contain','7.25')
                cy.get(workShiftsLocators.saveNewWorkShift).click()
                cy.wait(6000) // takes time to add wirk shift in the table
                cy.get(workShiftsLocators.workShiftTable)
                    .should('contain', newName) //validate the added new name in table
                
                    
        }

        
    }


