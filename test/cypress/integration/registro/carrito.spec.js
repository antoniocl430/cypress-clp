'use strict'
describe('Añade constantemente productos al carrito' , ()=>{

    before(()=>{

        cy.visit(Cypress.env('baseUrl'));

    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Tienda de España', ()=>{
        cy.loginCarrito();

        cy.wait(4000);
            
        cy.get('.logo > img').click({force: true});
    
        cy.wait(1000);
    
        cy.reload();
    
        cy.visit('https://clpspain.es/es/primavera-verano/vestido/vestido-cut-out-hebilla.html');
    
        cy.get('#option-label-talla-158-item-539').click({force: true});
        cy.get('#product-addtocart-button > span').click({force: true});
        cy.wait(1000);
    
        cy.get('#cartNotificationPopup').should('be.visible');
        cy.get('.minicart-wrapper > .action').click({force: true});
    
        cy.wait(2000);
        
        cy.get('.action-delete').click({force: true});
    
        cy.wait(4000);
          
    });
});