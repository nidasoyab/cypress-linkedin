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
    cy.contains('See all results').click({force:true})
    cy.get('a[href*="/in/samueljwsmith?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAFZ_qoB4GxVzr4VaSeT6rkYzBF157oJPIk"] > span > span:nth-of-type(1)').click();
        // cy.get('.reusable-search_result-container:nth-child(1) .mb1:nth-child(1) .entity-result_title-line:nth-child(1) span:nth-child(1) > span:nth-child(1)').click();
      });
});
