'use strict'
describe('TP - Registro y login con Compra', ()=>{

    before(()=>{
        cy.visit(Cypress.env('baseUrl'));
    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it.only('Registrando un usuario, sin rellenar ningún campo', ()=>{

        cy.wait(2000);
        cy.get('.label-link').click({force: true});

        //nos dirigimos a la pantalla de registro
        cy.get('.pull-right > .block > .block-content > .actions-toolbar > .primary > .action').click({force: true});

        cy.wait(2000);
        cy.get('#webform_17_submit_button').click({force: true});

        cy.wait(3000);
        
        //comprobacion de todos los mensajes de errores
        cy.get('#advice-required-entry-field17115').should('be.visible');
        cy.get('#advice-required-entry-field17116').should('be.visible');
        cy.get('#advice-required-entry-field17117').should('be.visible');
        cy.get('#advice-required-entry-field17118').should('be.visible');
        cy.get('#advice-required-entry-field17119').should('be.visible');
        cy.get('#advice-required-entry-field17120').should('be.visible');
        cy.get('#advice-required-entry-field17121').should('be.visible');
        cy.get('#advice-required-entry-field17123').should('be.visible');
        cy.get('#advice-required-entry-field17125').should('be.visible');
        cy.get('#advice-required-entry-field17126').should('be.visible');
        cy.get('#advice-required-entry-gdpr_17').should('be.visible');

    });

    it.only('Registrando un usuario, rellenando los campos', ()=>{

        cy.visit('https://clpspain.es/es/customer/account/create/');
        //cy.reload();

        //comenzamos a rellenar los inputs del formulario
        cy.get('#field17115').click().type('Test');
        cy.get('#field17116').click().type('Cypress');
        cy.get('#field17117').click().type('testcypress@test.com');
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
        cy.wait(20000);
    });

    it.only('Comprando con el usuario registrado', ()=>{

        cy.get('body > main > div > header > div.middle-header-content > div > div > div.col-md-4.col-sm-4.col-xs-auto.mobile-item-col > div > div.dropdown.dropdown-toplinks > div > ul > li.authorization-link > a').click({force: true});

        cy.login();

        cy.wait(2000);

        cy.get('.logo > img').click({force: true});

        cy.wait(1000);

        cy.reload(true);

        cy.wait(1000);

        cy.get('.action-search > .pe-7s-search').click({force: true});

        cy.get('#search').type('ART PRUEBA').type('{enter}');

        cy.wait(2000);

        cy.get('#product_44441 > div > a > img').click({force: true}) //clico en el producto

        cy.wait(2000);

        cy.get('#option-label-talla-158-item-540').click({force: true});
        cy.get('#product-addtocart-button > span').click({force: true});
        cy.wait(1000);

        cy.get('#cartNotificationPopup').should('be.visible');
        cy.get('.minicart-wrapper > .action').click({force: true});
        //hasta aquí llegamos al carrito
        cy.wait(3000);
        cy.get('.methods > .item > .action > span').click({force: true});

        cy.wait(15000);
        cy.contains('#checkout-payment-method-load > div > div > div.step-content.amcheckout-content > div > div:nth-child(2) > div.payment-method-title.field.choice > label > span', 'Pago Contra Reembolso (Recargo Contra Reembolso: 3.00%)').click({force: true});

        //realizacion del pedido contra reembolso
        cy.get('#checkout > div.amcheckout-main-container.-modern.-layout-3columns.am-submit-summary > div:nth-child(3) > div > div.checkout-payment-method.submit > div > div > button > span').click({force: true});

        cy.wait(4000);        

    });

    it.only('Eliminamos la cuenta creada mediante admin', ()=>{

        cy.visit('https://clpspain.es/admin_clp_admin@-@2031@_@2021/');

        cy.get('#username').type('antonio');
        cy.get('#login').type('yUw3i94~!');

        cy.get('.action-login > span').click({force:true});

        //cancelacion del pedido
        cy.get('#menu-magento-sales-sales > [onclick="if (!window.__cfRLUnblockHandlers) return false; return false;"]').click();
        cy.get('.item-sales-order > a').click({force:true});

        cy.contains('#container > div > div.admin__data-grid-wrap > table > tbody > tr:nth-child(1) > td:nth-child(5) > div', 'Test Cypress').should('be.visible').click({force: true});
        
        //cancela pedido
        cy.wait(2000);
        cy.contains('#order-view-cancel-button > span', 'Cancelar').click({force:true});

        cy.get('.confirm > .modal-inner-wrap > .modal-footer > .action-primary > span').click({force: true}); //Aceptar
 
        cy.wait(1500);

        cy.get('#menu-magento-customer-customer > [onclick="if (!window.__cfRLUnblockHandlers) return false; return false;"]').click({force: true});
        cy.get('.item-customer-manage > a > span').click({force: true});

        cy.wait(5000);
        cy.reload(true);

        //buscamos el usuario creado
        cy.get('[data-bind="afterRender: $data.setToolbarNode"] > :nth-child(1) > .data-grid-search-control-wrap > #fulltext').clear({force: true}).type('cypress', {force: true});
        cy.get('[data-bind="afterRender: $data.setToolbarNode"] > :nth-child(1) > .data-grid-search-control-wrap > .action-submit').click({force: true});

        cy.contains('._odd-row > :nth-child(3) > .data-grid-cell-content', 'Test Cypress').click({force: true});
        cy.get('.col-xs-2 > .action-select-wrap > .action-select').click({force: true});

        cy.get('.col-xs-2 > .action-select-wrap > .action-menu-items > .action-menu > :nth-child(1) > .action-menu-item').click({force: true});
        cy.wait(1000);

        cy.get('#html-body > div.modals-wrapper > aside.modal-popup.confirm._show > div.modal-inner-wrap > footer > button.action-primary.action-accept > span').click({force: true});

    });

    
});