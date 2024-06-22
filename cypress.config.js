const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://qauto2.forstudy.space',
    env: {
      baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space'
    },
    specPattern: 'cypress/integration/tests/**/*.cy.{js,jsx,ts,tsx}'
  },
});
