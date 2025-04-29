describe('eBay - Navigation Accessibility', () => {
  it('Check that the main navigation is accessible', () => {
    cy.visit('/');

    cy.get('nav, [role="navigation"]').should('exist');

    cy.get('nav, [role="navigation"]')
      .should('have.attr', 'aria-label')
      .and('not.be.empty');

    cy.get('body').tab();
    cy.focused()
      .should('exist')
      .and(($el) => {
        const role = $el.attr('role') || '';
        expect(role === 'link' || role === 'button').to.be.true;
      });

    cy.get('[aria-haspopup="true"]').each(($el) => {
      cy.wrap($el).should('have.attr', 'aria-expanded');
    });
  });
});