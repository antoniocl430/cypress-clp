'use strict'
describe('TP2 - Registro con Compra', ()=>{

    before(()=>{
        cy.visit(Cypress.env('baseUrl'));
    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('registrando un usuario, sin rellenar ningún campo', ()=>{

        cy.wait(2000);
        cy.get('.label-link').click({force: true});

        //nos dirigimos a la pantalla de registro
        cy.get('.pull-right > .block > .block-content > .actions-toolbar > .primary > .action').click({force: true});

        cy.wait(2000);
        cy.get('#webform_17_submit_button').click({force: true});
        
        //comprobacion de todos los mensajes de errores
        cy.get('#advice-required-entry-field17115').should('be.visible');
        cy.get('#advice-required-entry-field17116').should('be.visible');
        cy.get('#advice-required-entry-field17117').should('be.visible');
        cy.get('#advice-required-entry-field17118').should('be.visible');
        cy.get('#advice-required-entry-field17119').should('be.visible');
        cy.get('#advice-required-entry-field17120').should('be.visible');
        cy.get('#advice-required-entry-field17121').should('be.visible');
        cy.get('#advice-validate-select-field17122region_id').should('be.visible');
        cy.get('#advice-required-entry-field17123').should('be.visible');
        cy.get('#advice-required-entry-field17125').should('be.visible');
        cy.get('#advice-required-entry-field17126').should('be.visible');
        cy.get('#advice-required-entry-gdpr_17').should('be.visible');

    });

    it('registrando un usuario, rellenando los campos', ()=>{

        cy.visit('https://clpspain.es/es/customer/account/create/');
        //cy.reload();

        //comenzamos a rellenar los inputs del formulario
        cy.get('#field17115').click().type('Demo');
        cy.get('#field17116').click().type('Cypress');
        cy.get('#field17117').click().type('democypress@test.com');
        cy.get('#field17118').click().type('A-12345678');
        cy.get('#field17119').click().type('123456789');
        cy.get('#field17120').click().type('Velasco, 14');
        cy.get('#field17121').click().type('Sevilla');
        cy.get('#field17122region_id').select('Sevilla').should('have.value', '172');
        cy.get('#webform_17_submit_button').click().type('12345');
        cy.get('#field17125').click().type('1234567');
        cy.get('#field17126').click().type('1234567');
        cy.get('#gdpr_17').click({force: true});
        cy.get('#webform_17_submit_button').click({force: true});
    });

    it.only('comprando con el usuario registrado', ()=>{

        //usaremos el comando de login para replicar el login para futuras pruebas
        cy.login();

        //nos dirigimos a novedades
        cy.get('.menu-4columns > .level0 > :nth-child(1)').click({force: true});

        cy.get('div.product-top > a > img').click({force: true, multiple:true});
        cy.get('#option-label-talla-158-item-511').click({force:true});
        cy.get('#product-addtocart-button > span').click({force: true});
        cy.wait(1000);

        cy.get('#cartNotificationPopup').should('be.visible');
        cy.get('.minicart-wrapper > .action').click({force: true});
        
    });

    
});