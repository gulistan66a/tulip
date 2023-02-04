const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1024,
  viewportWidth: 1536,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 60000,
  scrollBehavior: 'nearest',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
