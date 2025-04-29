import 'cypress-plugin-tab';

describe('Keyboard Focus - eBay homepage', () => {
  it('Check that keyboard focus moves correctly and visibly', () => {
    cy.visit('/');

    cy.get('body').tab();

    cy.focused()
      .should('exist')
      .and(($el) => {
        const tag = $el.prop('tagName').toLowerCase();
        expect(['a', 'button', 'input', 'select', 'textarea']).to.include(tag);
      });

    cy.focused().should('have.css', 'outline-style').and('not.eq', 'none');

    for (let i = 0; i < 5; i++) {
      cy.focused().tab();
      cy.focused().should('exist');
    }
  });
});