import { defineConfig } from 'cypress';

const cypressJsonConfig = {
  testIsolation: false,
  fileServerFolder: './',
  fixturesFolder: './e2e/fixtures',
  video: true,
  defaultCommandTimeout: 30000,
  requestTimeout: 180000,
  videosFolder: 'dist/cypress/businessDesigner/videos',
  screenshotsFolder: 'dist/cypress/businessDesigner/screenshots',
  chromeWebSecurity: false,
  baseUrl: 'https://infinica-training.cloud.infinica.com',
  viewportHeight: 800,
  viewportWidth: 1280,
  trashAssetsBeforeRuns: false,
  screenshot: {
    screenshotOnRunFailure: true,
  },
  specPattern: 'e2e/**/*.cy.{js,jsx,ts,tsx}',
  supportFile: 'cypress/support/e2e.ts',
};
export default defineConfig({
  e2e: {
    ...cypressJsonConfig,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    /**
     * TODO(@nrwl/cypress): In Cypress v12,the testIsolation option is turned on by default.
     * This can cause tests to start breaking where not indended.
     * You should consider enabling this once you verify tests do not depend on each other
     * More Info: https://docs.cypress.io/guides/references/migration-guide#Test-Isolation
     **/
    testIsolation: false,
  },
});
