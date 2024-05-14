I have added my Test Automation framework using Cypress in this branch.

**Website:** https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

**Modules Covered:**
  1) Login Page
  2) Work Shifts Page (Admin -> Jobs -> WorkShifts)

Technology used:
--

Programming Language: Javascript

Test Automation Tool: Cypress

Report: Allure Report

Folder Structure:
---
**•	Cypress e2e (End-to-End Tests):** This folder contains primary automation logic with test scripts emulating user interactions like login, form submissions, and navigation, ensuring comprehensive coverage of critical functionalities.

**•	Cypress fixtures:** Here resides test data utilized by test scripts during execution, often including JSON files with predefined user credentials or sample input/output data.

**•	Cypress Pages (Page Objects):** Declares methods related to specific components or pages, following the Page Object Model (POM) for enhanced code maintainability and readability.

**•	Cypress Weblocators:** Stores XPath and CSS Selector locators for web page elements, aiding in precise identification and interaction during test execution.

**•	Other Files:** Includes cypress.config.js for project settings like base URLs, and package.json for project metadata and dependencies, facilitating efficient project management and test execution.
