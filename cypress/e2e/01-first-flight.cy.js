/// <reference types="cypress" />

describe('Create a New Item', () => {
    beforeEach(() => {
        cy.visit('/jetsetter');
      });

      it('should have a form', () => {
        cy.get('form').should('exist')
      });

      it('shoul have the words "Add Item"', () => {
        cy.contains('Add Item');
      });

      it('should some new elements', () => {
        cy.contains('Item');
        cy.get('section ul li button');
      });

      it('select all buttons with string "Remote"', () => {
        cy.get('ul') 
        .find('li') 
        .find('button') 
        .filter(':contains("Remove")') 
        .should('have.length.gt', 4); 
      });

      it('Type some text in input attribute', () => {
        cy.get('[data-test="new-item-input"]').type('New text');
      });
});
