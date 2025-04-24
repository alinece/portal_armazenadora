const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8089', // Coloque aqui a URL base do seu sistema (sem /login no final)
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Garante que todos os arquivos .cy.js sejam encontrados
    setupNodeEvents(on, config) {
      // Aqui você pode adicionar plugins/eventos se quiser
    },
  },
})
