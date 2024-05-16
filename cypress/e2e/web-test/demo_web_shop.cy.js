describe('template spec', () => {
  beforeEach(() =>{
    cy.visit('')
  })

  it.only('Success Register', () => {
    cy.get('#gender-male').check()
    cy.get('#FirstName').type('Willy')
    cy.get('#LastName').type('Ardiyanto')
    cy.get('#Email').type('willyardiyanto4@gmail.com')
    cy.get('#Password').type('password')
    cy.get('#ConfirmPassword').type('password')
    cy.get('#register-button').click()
    cy.url().should('eq', 'https://demowebshop.tricentis.com/registerresult/1');
  })
})