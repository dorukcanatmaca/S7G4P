describe('Test Valid Input', () => {
  it('Visits', () => {
    cy.visit('http://localhost:5173/')

    cy.get('.data-cy-mail').type('abcdef@abcdef.com')

    cy.get('.data-cy-pass').type('ABCabc24#')

    cy.get('.data-cy-terms').click()

    cy.get('.data-cy-submit').click()

    cy.url().should('eq', 'http://localhost:5173/success')
  })
})

describe('Test Invalid Email', () => {
  it('Visits', () => {
    cy.visit('http://localhost:5173/')

    cy.get('.data-cy-mail').type('abc')

    cy.get('.data-cy-pass').type('ABCabc24#')

    cy.get('.data-cy-terms').click()

    cy.get('.data-cy-submit').should('be.disabled')

    cy.contains('Please enter a valid email address')


  })
})

describe('Test Invalid Email and Password', () => {
  it('Visits', () => {
    cy.visit('http://localhost:5173/')

    cy.get('.data-cy-mail').type('abc')

    cy.get('.data-cy-pass').type('ABC')

    cy.get('.data-cy-terms').click()

    cy.get('.data-cy-submit').should('be.disabled')

    cy.contains('Please enter a valid email address')

    cy.contains('Minimum eight characters')


  })
})

describe('Test Terms Not Checked', () => {
  it('Visits', () => {
    cy.visit('http://localhost:5173/')

    cy.get('.data-cy-mail').type('abcdef@abcdef.com')

    cy.get('.data-cy-pass').type('ABCabc24#')

    cy.get('.data-cy-submit').should('be.disabled')

  })
})