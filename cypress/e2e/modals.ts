describe('eBay - Modal Accessibility', () => {
  it('Check modal accessibility and focus trapping', () => {
    cy.visit('/');

    cy.get('[data-testid="open-modal"]').click();

    cy.get('[role="dialog"]')
      .should('exist')
      .and('have.attr', 'aria-modal', 'true');

    cy.get('[role="dialog"]').should('have.attr', 'aria-labelledby');

    cy.focused().should('exist');
    cy.get('[role="dialog"]').then(($dialog) => {
      expect($dialog[0].contains(document.activeElement)).to.be.true;
    });

    cy.checkA11y('[role="dialog"]');
  });
});