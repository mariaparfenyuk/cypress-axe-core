declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Injects axe-core and runs accessibility check on the page.
     */
    axeAndCheck(): Chainable<void>;
  }
}