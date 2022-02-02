'use strict'
describe('1.1.Test landing ESPAÑA', ()=>{

    before(()=>{

        cy.visit('https://clpspain.es/clplanding/');
    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Registro', ()=>{

        cy.get(':nth-child(1) > #studentname').type('landingSpainCypress', {force:true});
        cy.get('#studentemail').type('testcypress@test.com', {force:true});
        cy.get('#studentlanguage').select('Sevilla'); 
        cy.get('#password').type('1234567', {force:true});
        cy.get('#cpassword').type('1234567', {force:true});
        cy.get('.col-lg-12 > #studentname').type('123456789', {force:true});
        cy.get('#Course-form > div > div:nth-child(9) > button > span').click({force:true});
        cy.wait(10000);
    });

    it('Proceso compra', ()=>{

        cy.visit('https://clpspain.es/es/customer/account/login/');

        cy.get('.label-link').click({force: true});

        cy.get('#email').click().type('testcypress@test.com');
        cy.get('.form-group > .control > #pass').click().type('1234567');

        cy.get('.actions-toolbar > #send2 > span').click({force: true});
        cy.wait(2000);
        cy.get('.logo > img').click({force: true});
        cy.wait(1000);
        cy.reload();
        cy.visit('https://clpspain.es/es/art-prueba.html');
        cy.wait(2000);
        cy.get('#option-label-talla-158-item-540').click({force: true});
        cy.get('#product-addtocart-button > span').click({force: true});
        cy.wait(1000);
        cy.get('#cartNotificationPopup').should('be.visible');
        cy.get('.minicart-wrapper > .action').click({force: true});
        //hasta aquí llegamos al carrito
        cy.wait(6000);
        cy.get('#maincontent > div.row > div > div.cart-container > div.row.shopping-cart-bottom > div.col-lg-4.col-md-5.col-xs-12 > div.cart-summary > ul > li > button').click({force: true});

        cy.get('#account_lastname').clear({force:true}).type('test');
        cy.get('#taxvat').clear({force: true}).type('A12345678');
        cy.get('#lastname').clear({force: true}).type('test');
        cy.get('#street_1').clear({force: true}).type('test, 21');
        cy.get('#city').clear({force: true}).type('Test');
        cy.get('#zip').clear({force: true}).type('12345');
        
        cy.get('.save > span:nth-child(1)').click({force: true}); //guardar e ir a finalizar el pedido

        cy.wait(5000);
        cy.get('.shipping-address-item').should('be.visible'); //datos introducidos correctmanete

    });



});

describe('1.2.Eliminar cuenta España', ()=>{

    it('Eliminación cuenta', ()=>{

        cy.loginAdmin(); 
        cy.wait(1500);

        cy.get('#menu-magento-customer-customer > [onclick="if (!window.__cfRLUnblockHandlers) return false; return false;"]').click({force: true});
        cy.get('.item-customer-manage > a > span').click({force: true});

        cy.wait(5000);
        cy.reload();

        //buscamos el usuario creado
        cy.get('[data-bind="afterRender: $data.setToolbarNode"] > :nth-child(1) > .data-grid-search-control-wrap > #fulltext').clear({force: true}).type('testcypress@test.com', {force: true});
        cy.screenshot();
        cy.get('#container > div > div.admin__data-grid-header > div:nth-child(1) > div.data-grid-search-control-wrap > button').click({force: true});
        
        cy.contains('.data-row > :nth-child(4) > .data-grid-cell-content', 'testcypress@test.com').click({force: true});
        
        cy.get('.col-xs-2 > .action-select-wrap > .action-select').click({force: true});

        cy.get('.col-xs-2 > .action-select-wrap > .action-menu-items > .action-menu > :nth-child(1) > .action-menu-item').click({force: true});
        cy.wait(1000);

        cy.get('#html-body > div.modals-wrapper > aside.modal-popup.confirm._show > div.modal-inner-wrap > footer > button.action-primary.action-accept > span').click({force: true});
    });

   });

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('2.1.Test landing FRANCIA' , ()=>{
    
    before(()=>{

        cy.visit('https://clpfrance.fr/landingfr/');
    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Registro', ()=>{

        cy.get(':nth-child(1) > #studentname').type('landingFranciaCypress', {force:true});
        cy.get('#studentemail').type('testcypress@test.com', {force:true});
        cy.get('#studentcourse').select('France');
        cy.get('#studentlanguage').select('Auvergne-Rhône-Alpes'); 
        cy.get('#password').type('1234567', {force:true});
        cy.get('#cpassword').type('1234567', {force:true});
        cy.get('.col-lg-12 > #studentname').type('123456789', {force:true});
        cy.get('#Course-form > div > div:nth-child(9) > button > span').click({force:true});
        cy.wait(10000);
    });

    it('Proceso compra', ()=>{

        cy.visit('https://clpfrance.fr/fr/customer/account/login/');

        cy.get('.label-link').click({force: true});

        cy.get('#email').click().type('testcypress@test.com');
        cy.get('.form-group > .control > #pass').click().type('1234567');

        cy.get('.actions-toolbar > #send2 > span').click({force: true});
        cy.wait(2000);
        cy.get('.logo > img').click({force: true});
        cy.wait(1000);
        cy.reload();
        cy.visit('https://clpfrance.fr/fr/art-prueba.html');
        cy.get('#option-label-talla-158-item-540').click({force: true});
        cy.get('.plus').click({force:true});
        cy.get('.plus').click({force:true});
        cy.get('.plus').click({force:true});
        cy.get('.plus').click({force:true});
        cy.get('.plus').click({force:true});
        cy.get('.plus').click({force:true});
        cy.get('.plus').click({force:true});
        cy.get('.plus').click({force:true});
        cy.get('.plus').click({force:true});
        cy.get('#product-addtocart-button > span').click({force: true});
        cy.wait(1000);
        cy.get('#cartNotificationPopup').should('be.visible');
        cy.get('.minicart-wrapper > .action').click({force: true});
        //hasta aquí llegamos al carrito
        cy.wait(6000);
        cy.get('#maincontent > div.row > div > div.cart-container > div.row.shopping-cart-bottom > div.col-lg-4.col-md-5.col-xs-12 > div.cart-summary > ul > li > button').click({force: true});

        cy.get('#account_lastname').clear({force:true}).type('test');
        cy.get('#taxvat').clear({force: true}).type('A12345678');
        cy.get('#lastname').clear({force: true}).type('test');
        cy.get('#street_1').clear({force: true}).type('test, 21');
        cy.get('#city').clear({force: true}).type('Test');
        cy.get('#zip').clear({force: true}).type('12345');
        
        cy.get('.save > span:nth-child(1)').click({force: true}); //guardar e ir a finalizar el pedido

        cy.wait(5000);
        cy.get('.shipping-address-item').should('be.visible'); //datos introducidos correctmanete

    });

    

});

describe('2.2.Eliminar cuenta Francia', ()=>{

    it('Eliminación cuenta', ()=>{

        cy.loginAdmin(); 
        cy.wait(1500);

        cy.get('#menu-magento-customer-customer > [onclick="if (!window.__cfRLUnblockHandlers) return false; return false;"]').click({force: true});
        cy.get('.item-customer-manage > a > span').click({force: true});

        cy.wait(5000);
        cy.reload();

        //buscamos el usuario creado
        cy.get('[data-bind="afterRender: $data.setToolbarNode"] > :nth-child(1) > .data-grid-search-control-wrap > #fulltext').clear({force: true}).type('testcypress@test.com', {force: true});
        cy.get('[data-bind="afterRender: $data.setToolbarNode"] > :nth-child(1) > .data-grid-search-control-wrap > .action-submit').click({force: true});

        cy.contains('.data-row > :nth-child(4) > .data-grid-cell-content', 'testcypress@test.com').click({force: true});
        cy.get('.col-xs-2 > .action-select-wrap > .action-select').click({force: true});

        cy.get('.col-xs-2 > .action-select-wrap > .action-menu-items > .action-menu > :nth-child(1) > .action-menu-item').click({force: true});
        cy.wait(1000);

        cy.get('#html-body > div.modals-wrapper > aside.modal-popup.confirm._show > div.modal-inner-wrap > footer > button.action-primary.action-accept > span').click({force: true});
    });
});