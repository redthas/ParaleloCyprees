const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'k4zthr',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
