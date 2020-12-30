/* Sample tests
describe('My First Test', () => {
  it('Passing test!', () => {
    expect(true).to.equal(true)
  })
})

describe('My Second Test', () => {
  it('Failing test!', () => {
    expect(false).to.equal(true)
  })
})
*/

// Step 1. Visit a webpage
const HOMEPAGE_URL = 'http://localhost:3000/3d-home';
describe('First real test', () => {
  it('Visit a webpage and activate language button', () => {
    cy.visit(HOMEPAGE_URL)
    cy.contains('English')  // 'contains' checks certain text is inside a page
      .click()              // method chaining is actively used in Cypress
  })

  it('Access to a language button through classname and activate', () => {
    cy.get('.button__language-change')  // tester can access to a certain element using 'get' with its classname
      .click()
  })
})