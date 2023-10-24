
describe('<Home/>', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000'),
        cy.intercept("/add").as("postTask")
      })
    it('Loading home page', () => {
        cy.get('h1').should('have.text', 'Home page')
    })
    it('See all tasks empty', () => {
        cy.get('[cy-data="add-task"]').should('have.text', 'New Task').click()
        cy.url().should('include', '/add')
        cy.get('#title').type('This is a new title')
        cy.get('#content').type('This is a new content')
        cy.get('#complete').check()
        cy.contains('Add Task').click()

        cy.wait('@postTask')
        cy.get('@postTask').then(res => {
            expect(res.response.statusCode).be.equal(201)
            expect(res.request.body.title).be.equal('This is a new title')
        })
    })
})