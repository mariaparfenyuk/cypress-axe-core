import 'cypress-axe';
import { AxeResults } from 'axe-core';
import 'cypress-plugin-tab'

Cypress.Commands.add(
  'axeAndCheck',
  (): Cypress.Chainable<void> => {
    cy.injectAxe();
    cy.checkA11y(undefined, undefined, (violations: AxeResults['violations']) => {
      if (violations.length) {
        const violationMessages = violations.map((v, i) => {
          return `\n[${i + 1}] X ${v.id} - ${v.help}
Element: ${v.nodes[0].html}
Summary: ${v.nodes[0].failureSummary}
Impact: ${v.impact}
Rule: ${v.helpUrl}

`;
        }).join('\n');

        throw new Error(`A11y violations found:\n${violationMessages}`);
      }
    });
  }
);