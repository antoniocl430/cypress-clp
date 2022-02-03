'use strict'
describe('TP - Registro y login con Compra', ()=>{

    before(()=>{
        cy.visit(Cypress.env('baseUrl'));
    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Registrando un usuario, sin rellenar ningún campo', ()=>{

        cy.wait(2000);
        cy.get('.label-link').click({force: true});

        //nos dirigimos a la pantalla de registro
        cy.get('.pull-right > .block > .block-content > .actions-toolbar > .primary > .action').click({force: true});

        cy.wait(2000);
        cy.get('#webform_17_submit_button').click({force: true});

        cy.wait(3000);
        
        //comprobacion de todos los mensajes de errores
        cy.get('#advice-required-entry-field17101').should('be.visible');
        cy.get('#advice-required-entry-field17102').should('be.visible');
        cy.get('#advice-required-entry-field17104').should('be.visible');
        cy.get('#advice-required-entry-field17109').should('be.visible');
        cy.get('#advice-required-entry-field17103').should('be.visible');
        cy.get('#advice-required-entry-field17110').should('be.visible');
        cy.get('#advice-required-entry-field17111').should('be.visible');
        cy.get('#advice-required-entry-field17112').should('be.visible');
        cy.get('#advice-required-entry-field17106').should('be.visible');
        cy.get('#advice-required-entry-field17107').should('be.visible');
        cy.get('#advice-required-entry-gdpr_17').should('be.visible');

    });

    it('Registrando un usuario, rellenando los campos', ()=>{

        cy.visit('https://clpspain.es/es/customer/account/create/');
        //cy.reload();

        //comenzamos a rellenar los inputs del formulario
        cy.get('#field17101').click().type('Test');
        cy.get('#field17102').click().type('Cypress');
        cy.get('#field17104').click().type('testcypress@test.com');
        cy.get('#field17109').click().type('A-12345678');
        cy.get('#field17103').click().type('123456789');
        cy.get('#field17110').click().type('Velasco, 14');
        cy.get('#field17111').click().type('Sevilla');
        cy.get('#field17114region_id').select('Sevilla').should('have.value', '172');
        cy.get('#field17112').click().type('12345');
        cy.get('#field17106').click().type('1234567');
        cy.get('#field17107').click().type('1234567');
        cy.get('#gdpr_17').click({force: true});
        cy.get('#webform_17_submit_button').click({force: true});
        cy.wait(20000);
        //salimos de la sesion para el testeo del login
        cy.get('body > main > div > header > div.middle-header-content > div > div > div.col-md-4.col-sm-4.col-xs-auto.mobile-item-col > div > div.dropdown.dropdown-toplinks > div > ul > li.authorization-link > a').click({force: true});
    });

    it('Comprando con el usuario registrado', ()=>{

        cy.login();

        cy.wait(2000);

        cy.get('.logo > img').click({force: true});

        cy.wait(1000);

        cy.reload();

       /* cy.wait(1000);

        cy.get('.action-search > .pe-7s-search').click({force: true});

        cy.get('#search').type('ART PRUEBA', {force: true}).type('{enter}',{force: true});

        cy.wait(2000);

        cy.reload();

        cy.get('#product_44441 > div > a > img').click({force: true}) //clico en el producto

        cy.wait(2000);*/

        cy.visit('https://clpspain.es/es/art-prueba.html');

        cy.get('#option-label-talla-158-item-540').click({force: true});
        cy.get('#product-addtocart-button > span').click({force: true});
        cy.wait(1000);

        cy.get('#cartNotificationPopup').should('be.visible');
        cy.get('.minicart-wrapper > .action').click({force: true});
        //hasta aquí llegamos al carrito
        cy.wait(6000);
        cy.get('#maincontent > div.row > div > div.cart-container > div.row.shopping-cart-bottom > div.col-lg-4.col-md-5.col-xs-12 > div.cart-summary > ul > li > button').click({force: true});

        cy.wait(15000);
        cy.contains('#checkout-payment-method-load > div > div > div.step-content.amcheckout-content > div > div:nth-child(2) > div.payment-method-title.field.choice > label > span', 'Pago Contra Reembolso (Recargo Contra Reembolso: 3.00%)').click({force: true});

        //realizacion del pedido contra reembolso
        cy.get('#checkout > div.amcheckout-main-container.-modern.-layout-3columns.am-submit-summary > div:nth-child(3) > div > div.checkout-payment-method.submit > div > div > button > span').click({force: true});

        //cancelar pedido contrareembolso
        cy.loginAdmin();

        cy.get('#menu-magento-sales-sales > [onclick="if (!window.__cfRLUnblockHandlers) return false; return false;"]').click({force: true});
        cy.get('.item-sales-order > a').click({force:true});

        cy.wait(10000);
        cy.get('[data-bind="afterRender: $data.setToolbarNode"] > :nth-child(1) > .data-grid-search-control-wrap > #fulltext').click({force: true}).clear({force: true}).type('Test Cypress', {force: true}).type('{enter}', {force: true});;

        cy.get('#container > div > div.admin__data-grid-header > div:nth-child(1) > div.data-grid-search-control-wrap > button').click({force: true});

        cy.contains('#container > div > div.admin__data-grid-wrap > table > tbody > tr:nth-child(1) > td:nth-child(5) > div', 'Test Cypress').should('be.visible').click({force: true});
        //#container > div > div.admin__data-grid-wrap > table > tbody > tr:nth-child(1) > td:nth-child(5) > div
        //cancela pedido
        cy.wait(2000);
        cy.contains('#order-view-cancel-button > span', 'Cancelar').click({force:true});

        cy.get('.confirm > .modal-inner-wrap > .modal-footer > .action-primary > span').click({force: true}); //Aceptar
        
        //realizar pedido transferencia bancaria
        cy.visit('https://clpspain.es/');

        cy.wait(2000);

        cy.get('.logo > img').click({force: true});

        cy.wait(1000);

        cy.reload();

        /*cy.wait(1000);

        cy.get('.action-search > .pe-7s-search').click({force: true});

        cy.get('#search').type('ART PRUEBA', {force: true}).type('{enter}', {force: true});

        cy.wait(2000);

        cy.reload();

        cy.get('#product_44441 > div > a > img').click({force: true}) //clico en el producto

        cy.wait(2000);*/

        cy.visit('https://clpspain.es/es/art-prueba.html');

        cy.get('#option-label-talla-158-item-540').click({force: true});
        cy.get('#product-addtocart-button > span').click({force: true});
        cy.wait(1000);

        cy.get('#cartNotificationPopup').should('be.visible');
        cy.get('.minicart-wrapper > .action').click({force: true});
        //hasta aquí llegamos al carrito
        cy.wait(6000);
        cy.get('#maincontent > div.row > div > div.cart-container > div.row.shopping-cart-bottom > div.col-lg-4.col-md-5.col-xs-12 > div.cart-summary > ul > li > button').click({force: true});

        cy.contains('#checkout-payment-method-load > div > div > div.step-content.amcheckout-content > div > div:nth-child(3) > div.payment-method-title.field.choice > label > span', 'Transferencia Bancaria').click({force: true});

        cy.get('#checkout > div.amcheckout-main-container.-modern.-layout-3columns.am-submit-summary > div:nth-child(3) > div > div.checkout-payment-method.submit > div > div > button > span').click({force: true});

        //cancelar pedido trasnferencia bancaria

        cy.visit('https://clpspain.es/admin_clp_admin@-@2031@_@2021/');

        cy.get('#menu-magento-sales-sales > [onclick="if (!window.__cfRLUnblockHandlers) return false; return false;"]').click();
        cy.get('.item-sales-order > a').click({force:true});

        cy.wait(10000);
        cy.contains('#container > div > div.admin__data-grid-wrap > table > tbody > tr:nth-child(1) > td:nth-child(5) > div', 'Test Cypress').should('be.visible').click({force: true});
        
        //cancela pedido
        cy.wait(2000);
        cy.contains('#order-view-cancel-button > span', 'Cancelar').click({force:true});
 
        cy.get('.confirm > .modal-inner-wrap > .modal-footer > .action-primary > span').click({force: true}); //Aceptar
 

        cy.wait(4000);        

    });



    it('Eliminamos la cuenta creada mediante admin', ()=>{

        cy.loginAdmin();

        //cy.visit('https://clpspain.es/admin_clp_admin@-@2031@_@2021/');
 
        cy.wait(1500);

        cy.get('#menu-magento-customer-customer > [onclick="if (!window.__cfRLUnblockHandlers) return false; return false;"]').click({force: true});
        cy.get('.item-customer-manage > a > span').click({force: true});

        cy.wait(5000);
        cy.reload(true);

        //buscamos el usuario creado
        cy.get('[data-bind="afterRender: $data.setToolbarNode"] > :nth-child(1) > .data-grid-search-control-wrap > #fulltext').clear({force: true}).type('cypress', {force: true});
        cy.get('[data-bind="afterRender: $data.setToolbarNode"] > :nth-child(1) > .data-grid-search-control-wrap > .action-submit').click({force: true});

        cy.contains('.data-row > :nth-child(4) > .data-grid-cell-content', 'testcypress@test.com').click({force: true});
        cy.get('.col-xs-2 > .action-select-wrap > .action-select').click({force: true});

        cy.get('.col-xs-2 > .action-select-wrap > .action-menu-items > .action-menu > :nth-child(1) > .action-menu-item').click({force: true});
        cy.wait(1000);

        cy.get('#html-body > div.modals-wrapper > aside.modal-popup.confirm._show > div.modal-inner-wrap > footer > button.action-primary.action-accept > span').click({force: true});

    });

    
});