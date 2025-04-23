describe('A11y check: eBay homepage', () => {
  it('Check for accessibility errors', () => {
    cy.visit('https://www.ebay.com/');
    cy.axeAndCheck();
  });
});