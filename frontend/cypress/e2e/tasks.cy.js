describe('Fetching all todos', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/tasks')
        cy.intercept("/tasks", {
            fixture: "tasks.json"
        }).as("initTask")

        cy.intercept("**/tasks/1", {
            fixture: "task.json"
        }).as("data")

        cy.intercept('PUT', "**/update/1", {fixture: "update_task.json"}).as('updateTask')

        cy.intercept('DELETE', "**/delete/1", {fixture: "task.json"}).as('deleteTask')
       
      })

    it('render a table', () => {
        cy.get('a[href*="/tasks/1"]').should("have.text", "Learn Next.js").click()
        cy.get('h1').should('have.text', 'Learn Next.js')
        // cy.get('input').type('checkbox').should('have.value', "false")
        // cy.get('[cy-data="edit"]').should('have.text', 'Edit').click()
        cy.get('[cy-data="task-link"]').should('have.text', 'Tasks').click()
        
        
        
    })
    it('edit the content', () => {
        cy.get('[cy-data="edit-button"]').first().should('have.text', 'Edit task').click()
        cy.get('[type="checkbox"]').check()
        cy.get('[cy-data="update-button"]').should('have.text', 'Update').click()
        cy.wait('@updateTask')
        cy.get("@updateTask").then(res => {
            expect(res.response.statusCode).to.equal(200)
            expect(res.request.body.complete).to.equal(true)
        })
    })
    it('delete the content', () => {
        cy.get('[cy-data="delete-button"]').first().should('have.text', 'Delete task').click()
        cy.wait('@deleteTask')
        cy.get("@deleteTask").then(res => {
            expect(res.response.statusCode).to.equal(200)
            expect(res.response.body.id).to.equal(1)
        })
    })
})