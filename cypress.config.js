const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://cypress.vivifyscrum-stage.com/"
  },

  env: {
        "validEmail": "knezevicd97@gmail.com",
        "validPassword": "123456789"
  }
});
