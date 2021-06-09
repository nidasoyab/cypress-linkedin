/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
describe('test', () => {
  it('linkedin', () => {
    cy.visit('https://www.linkedin.com/login');
    cy.get('#username').type('3yara@hgarmt.com');
    cy.get('#password').type('demodemo@1');
    cy.get('.login__form').submit();
    cy.get('.search-global-typeahead__collapsed-search-button-icon > .mercado-match').click();
    cy.get('.search-global-typeahead__input').type('sam smith');
    cy.get('.search-global-typeahead__input').trigger('keypress');
    // cy.get('.reusable-search_result-container:nth-child(1) .mb1:nth-child(1) .entity-result_title-line:nth-child(1) span:nth-child(1) > span:nth-child(1)').click();
      });
});
