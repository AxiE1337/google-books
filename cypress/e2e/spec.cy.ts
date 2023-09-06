describe('spec', () => {
  it('should visit the page', () => {
    cy.visit('/')
  })
  it('should have an input with value=js', () => {
    cy.visit('/')
    cy.get('[data-cy="search-input"]')
      .should('be.visible')
      .should('have.value', 'js')
  })
  it('should change an input value', () => {
    cy.visit('/')
    cy.get('[data-cy="search-input"]').clear().should('have.value', '')
    cy.get('[data-cy="search-input"]').type('jsx').should('have.value', 'jsx')
  })
  it('should be 30 books', () => {
    cy.visit('/')
    cy.get('[data-cy="booksComponents"]').children().should('have.length', 30)
  })
  it('should have a button load more and load more', () => {
    cy.visit('/')
    cy.get('[data-cy="loadMoreBtn"]').should('have.text', 'Load more')

    cy.get('[data-cy="loadMoreBtn"]').click().should('be.disabled')
    cy.get('[data-cy="booksComponents"]').children().should('have.length', 60)
  })
})
