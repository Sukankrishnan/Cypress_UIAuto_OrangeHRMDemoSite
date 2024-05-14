const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "nt75sf",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env:{
    loginURL: 'https://opensource-demo.orangehrmlive.com/',
    adminURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers'
  }
});
