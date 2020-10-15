describe('MY FORM APP', () =>{

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const tosInput = () => cy.get('input[name="tos"]')

    it('My MVP checks', () => {
        nameInput()
        .type('Erick')
        .should('have.value', 'Erick')
        emailInput()
        .type('erickgonzalez@outlook.com')
        passwordInput()
        .type('password123')
        tosInput()
        .check()
        .should('be.checked')


    })

    

})