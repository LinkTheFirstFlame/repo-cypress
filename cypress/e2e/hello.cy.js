/// <reference types="cypress" />

context('Acions', () => {
    beforeEach(() => {
        cy.visit('../../app/index.html')
      })

    it('displays two todo items by default', () => {

      cy.get('.todo-list li').should('have.length', 2)
  
      cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
      cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
    })
  
    
})