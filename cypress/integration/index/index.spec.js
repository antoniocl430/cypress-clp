'use strict'

describe('Test de prueba para clp', () =>{

    beforeEach(()=>{
        cy.viewport(1366, 768)
        cy.visit('www.clpspain.es')
    })
    it('prueba', () =>{

        
        cy.contains('.label-link', 'Ya estoy registrado').click()
        cy.wait(1000)
        cy.get('#email').type('test de prueba')

    })
})