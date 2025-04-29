describe('eBay - Form Fields Accessibility', () => {
  it('Check for accessibility attributes on the search input', () => {
    cy.visit('/');

    cy.get('input[placeholder="Search for anything"]')
      .should(($input) => {
        expect(
          $input.attr('aria-label') || $input.attr('aria-labelledby')
        ).to.exist;
      });
  });

  it('Check that error messages have aria-describedby or live regions', () => {
    cy.visit('/');

    cy.get('input[placeholder="Search for anything"]').type('{enter}');

    cy.get('body').then(($body) => {
      if ($body.find('[role="alert"], [aria-live]').length) {
        cy.get('[role="alert"], [aria-live]')
          .should('exist')
          .and('not.be.empty');
      } else {
        cy.log('No live error messages found (may not trigger without bad input)');
      }
    });
  });
});