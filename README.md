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

**cypress/support:** Contains support files such as commands and utilities.

**cypress/webLocators:** Contains locators of all web elements.

**Reporting:** Allure Reports provide insights into test results, including pass/fail status, duration, and error messages.

Continuous Integration
-
This repository can be integrated with Jenkins for CI/CD pipelines for automated testing on each commit or pull request.

Contributing
-
Contributions are welcome! If you find any issues or want to add new features/tests, feel free to submit a pull request.

Acknowledgments
-
Thanks to OrangeHRM for providing a platform for testing.

Special thanks to the Cypress community for creating such an amazing testing framework.
