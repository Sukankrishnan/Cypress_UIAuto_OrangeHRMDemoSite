OrangeHRM UI Automation Using Cypress
--
This repository contains UI automation tests for OrangeHRM using Cypress. Cypress is a powerful end-to-end testing framework for web applications. These tests aim to ensure the functionality and user interface consistency of OrangeHRM across different scenarios.

https://opensource-demo.orangehrmlive.com/

Authors
---
        Sukanya
        
        Vishal

Technology Used
----
**Programming Language:** Javascript
    
**Testing Framework:** Cypress
    
**Reporting:** Allure Reports
    
**CI/CD:** Jenkins
    
**Containerization:** Docker
    
**Test Data:** JSON


**Prerequisites**
----
Before running the tests, ensure you have the following installed:
    1) Node.js (recommended version)
    
    2) Cypress

Installation
---
1) Clone this repository to your local machine: **git clone <repo_name>**

2) Navigate into the cloned repository: **cd <repo_name>**

3) Install the project dependencies: **npm install**

Configuration
--
Make sure to configure the following settings before running the tests:

Update cypress.json file with appropriate Cypress configurations such as baseUrl.

Running Tests
---
To run the tests, execute the following command: **npm run cypress open**

This will open the Cypress Test Runner where you can select and run individual tests or the entire suite.

Alternatively, you can run the tests in headless mode using the command: **npm run cypress run**

Writing Tests
---
Tests are located in the cypress/integration directory.

Please take a look at the Cypress documentation for guidance on writing tests.

Folder Structure
--
cypress/e2e: Contains test files.

cypress/fixtures: Contains static data for testing.

cypress/mindMaps: Contains the mindmap of each module for easy reference.

cypress/pages: Contains object repository for storing all actions.

cypress/screenshots: Automatically generated screenshots for failed tests.

cypress/support: Contains support files such as commands and utilities.

cypress/webLocators: Contains locators of all web elements.

Reporting: Allure Reports provide insights into test results, including pass/fail status, duration, and error messages.

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
