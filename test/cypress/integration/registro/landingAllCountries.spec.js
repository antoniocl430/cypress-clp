'use strict'
describe.only('1.1.Test landing ESPAÑA', ()=>{

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
        cy.get('#option-label-talla-158-item-539').click({force: true});
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

describe.only('1.2.Eliminar cuenta España', ()=>{

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
        cy.get('#option-label-talla-158-item-539').click({force: true});
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

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('3.1.Test landing ITALIA' , ()=>{
    
    before(()=>{

        cy.visit('https://clpitalia.it/landingit/');
    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Registro', ()=>{

        cy.get(':nth-child(1) > #studentname').type('landingItaliaCypress', {force:true});
        cy.get('#studentemail').type('testcypress@test.com', {force:true});
        cy.get('#studentcourse').select('Italy');
        cy.get('#studentlanguage').select('Abruzzo'); 
        cy.get('#password').type('1234567', {force:true});
        cy.get('#cpassword').type('1234567', {force:true});
        cy.get('.col-lg-12 > #studentname').type('123456789', {force:true});
        cy.get('#Course-form > div > div.col-12 > button > span').click({force:true});
        cy.wait(10000);
    });

    it('Proceso compra', ()=>{

        cy.visit('https://clpitalia.it/it/customer/account/login/');

        cy.get('.label-link').click({force: true});

        cy.get('#email').click().type('testcypress@test.com');
        cy.get('.form-group > .control > #pass').click().type('1234567');

        cy.get('.actions-toolbar > #send2 > span').click({force: true});
        cy.wait(2000);
        cy.get('.logo > img').click({force: true});
        cy.wait(1000);
        cy.reload();
        cy.visit('https://clpitalia.it/it/art-prueba.html');
        cy.get('#option-label-talla-158-item-539').click({force: true});
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

describe('3.2.Eliminar cuenta Italia', ()=>{

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

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('4.1.Test landing PORTUGAL' , ()=>{
    
    before(()=>{

        cy.visit('https://clpportugal.pt/landingpt/');
    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Registro', ()=>{

        cy.get(':nth-child(1) > #studentname').type('landingPortugalCypress', {force:true});
        cy.get('#studentemail').type('testcypress@test.com', {force:true});
        cy.get('#studentcourse').select('Portugal');
        cy.get('#studentlanguage').select('Aveiro'); 
        cy.get('#password').type('1234567', {force:true});
        cy.get('#cpassword').type('1234567', {force:true});
        cy.get('.col-lg-12 > #studentname').type('123456789', {force:true});
        cy.get('#Course-form > div > div.col-12 > button > span').click({force:true});
        cy.wait(10000);
    });

    it('Proceso compra', ()=>{

        cy.visit('https://clpportugal.pt/pt/customer/account/login/');

        cy.get('.label-link').click({force: true});

        cy.get('#email').click().type('testcypress@test.com');
        cy.get('.form-group > .control > #pass').click().type('1234567');

        cy.get('.actions-toolbar > #send2 > span').click({force: true});
        cy.wait(2000);
        cy.get('.logo > img').click({force: true});
        cy.wait(1000);
        cy.reload();
        cy.visit('https://clpportugal.pt/pt/art-prueba.html');
        cy.get('#option-label-talla-158-item-539').click({force: true});
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

describe('4.2.Eliminar cuenta Portugal', ()=>{

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

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('6.1.Test landing GRAN BRETAÑA' , ()=>{
    
    before(()=>{

        cy.visit('https://clpbritain.co.uk/landinguk/');
    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Registro', ()=>{

        cy.get(':nth-child(1) > #studentname').type('landingGranBretañaCypress', {force:true});
        cy.get('#studentemail').type('testcypress@test.com', {force:true});
        cy.get('#studentcourse').select('United Kingdom');
        cy.get('#studentlanguage').select('Avon'); 
        cy.get('#password').type('1234567', {force:true});
        cy.get('#cpassword').type('1234567', {force:true});
        cy.get('.col-lg-12 > #studentname').type('123456789', {force:true});
        cy.get('#Course-form > div > div.col-12 > button > span').click({force:true});
        cy.wait(10000);
    });

    it('Proceso compra', ()=>{

        cy.visit('https://clpbritain.co.uk/en/customer/account/login/');

        cy.get('.label-link').click({force: true});

        cy.get('#email').click().type('testcypress@test.com');
        cy.get('.form-group > .control > #pass').click().type('1234567');

        cy.get('.actions-toolbar > #send2 > span').click({force: true});
        cy.wait(2000);
        cy.get('.logo > img').click({force: true});
        cy.wait(1000);
        cy.reload();
        cy.visit('https://clpbritain.co.uk/en/art-prueba.html');
        cy.get('#option-label-talla-158-item-539').click({force: true});
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

describe('6.2.Eliminar cuenta Gran Bretaña', ()=>{

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

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('7.1.Test landing ALEMANIA' , ()=>{
    
    before(()=>{

        cy.visit('https://clpdeutschland.de/landingde/');
    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Registro', ()=>{

        cy.get(':nth-child(1) > #studentname').type('landingAlemaniaCypress', {force:true});
        cy.get('#studentemail').type('testcypress@test.com', {force:true});
        cy.get('#studentcourse').select('Germany');
        cy.get('#studentlanguage').select('Bayern'); 
        cy.get('#password').type('1234567', {force:true});
        cy.get('#cpassword').type('1234567', {force:true});
        cy.get('.col-lg-12 > #studentname').type('123456789', {force:true});
        cy.get('#Course-form > div > div.col-12 > button > span').click({force:true});
        cy.wait(10000);
    });

    it('Proceso compra', ()=>{

        cy.visit('https://clpdeutschland.de/ge/customer/account/login/');

        cy.get('.label-link').click({force: true});

        cy.get('#email').click().type('testcypress@test.com');
        cy.get('.form-group > .control > #pass').click().type('1234567');

        cy.get('.actions-toolbar > #send2 > span').click({force: true});
        cy.wait(2000);
        cy.get('.logo > img').click({force: true});
        cy.wait(1000);
        cy.reload();
        cy.visit('https://clpdeutschland.de/ge/art-prueba.html');
        cy.get('#option-label-talla-158-item-539').click({force: true});
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

describe('7.2.Eliminar cuenta Alemania', ()=>{

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

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('8.1.Test landing MEXICO' , ()=>{
    
    before(()=>{

        cy.visit('https://clpmexico.mx/landingmx/');
    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Registro', ()=>{

        cy.get(':nth-child(1) > #studentname').type('landingMexicoCypress', {force:true});
        cy.get('#studentemail').type('testcypress@test.com', {force:true});
        cy.get('#studentcourse').select('Mexico');
        cy.get('#studentlanguage').select('Aguascalientes'); 
        cy.get('#password').type('1234567', {force:true});
        cy.get('#cpassword').type('1234567', {force:true});
        cy.get('.col-lg-12 > #studentname').type('123456789', {force:true});
        cy.get('#Course-form > div > div.col-12 > button > span').click({force:true});
        cy.wait(10000);
    });

    it('Proceso compra', ()=>{

        cy.visit('https://clpmexico.mx/mx/customer/account/login/');

        cy.get('.label-link').click({force: true});

        cy.get('#email').click().type('testcypress@test.com');
        cy.get('.form-group > .control > #pass').click().type('1234567');

        cy.get('.actions-toolbar > #send2 > span').click({force: true});
        cy.wait(2000);
        cy.get('.logo > img').click({force: true});
        cy.wait(1000);
        cy.reload();
        cy.visit('https://clpmexico.mx/mx/art-prueba.html');
        cy.get('#option-label-talla-158-item-539').click({force: true});
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

describe('8.2.Eliminar cuenta Mexico', ()=>{

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

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('9.1.Test landing PAISES BAJOS' , ()=>{
    
    before(()=>{

        cy.visit('https://clpworld.com/landingpb/');
    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Registro', ()=>{

        cy.get(':nth-child(1) > #studentname').type('landingPaisesBajosCypress', {force:true});
        cy.get('#studentemail').type('testcypress@test.com', {force:true});
        cy.get('#studentcourse').select('Netherlands');
        cy.get('#studentlanguage').select('Drenthe'); 
        cy.get('#password').type('1234567', {force:true});
        cy.get('#cpassword').type('1234567', {force:true});
        cy.get('.col-lg-12 > #studentname').type('123456789', {force:true});
        cy.get('#Course-form > div > div.col-12 > button > span').click({force:true});
        cy.wait(10000);
    });

    it('Proceso compra', ()=>{

        cy.visit('https://clpworld.com/world/customer/account/login/');

        cy.get('.label-link').click({force: true});

        cy.get('#email').click().type('testcypress@test.com');
        cy.get('.form-group > .control > #pass').click().type('1234567');

        cy.get('.actions-toolbar > #send2 > span').click({force: true});
        cy.wait(2000);
        cy.get('.logo > img').click({force: true});
        cy.wait(1000);
        cy.reload();
        cy.visit('https://clpworld.com/world/art-prueba.html');
        cy.get('#option-label-talla-158-item-539').click({force: true});
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

describe('9.2.Eliminar cuenta Países Bajos', ()=>{

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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('10.1.Test landing NORUEGA' , ()=>{
    
    before(()=>{

        cy.visit('https://clpworld.com/landingng/');
    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Registro', ()=>{

        cy.get(':nth-child(1) > #studentname').type('landingNoruegaCypress', {force:true});
        cy.get('#studentemail').type('testcypress@test.com', {force:true});
        cy.get('#studentcourse').select('Norway');
        cy.get('#studentlanguage').select('Akershus'); 
        cy.get('#password').type('1234567', {force:true});
        cy.get('#cpassword').type('1234567', {force:true});
        cy.get('.col-lg-12 > #studentname').type('123456789', {force:true});
        cy.get('#Course-form > div > div.col-12 > button > span').click({force:true});
        cy.wait(10000);
    });

    it('Proceso compra', ()=>{

        cy.visit('https://clpworld.com/world/customer/account/login/');

        cy.get('.label-link').click({force: true});

        cy.get('#email').click().type('testcypress@test.com');
        cy.get('.form-group > .control > #pass').click().type('1234567');

        cy.get('.actions-toolbar > #send2 > span').click({force: true});
        cy.wait(2000);
        cy.get('.logo > img').click({force: true});
        cy.wait(1000);
        cy.reload();
        cy.visit('https://clpworld.com/world/art-prueba.html');
        cy.get('#option-label-talla-158-item-539').click({force: true});
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

describe('10.2.Eliminar cuenta Noruega', ()=>{

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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('11.1.Test landing SUECIA' , ()=>{
    
    before(()=>{

        cy.visit('https://clpworld.com/landingsw/');
    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Registro', ()=>{

        cy.get(':nth-child(1) > #studentname').type('landingSueciaCypress', {force:true});
        cy.get('#studentemail').type('testcypress@test.com', {force:true});
        cy.get('#studentcourse').select('Sweden');
        cy.get('#studentlanguage').select('Blekinge'); 
        cy.get('#password').type('1234567', {force:true});
        cy.get('#cpassword').type('1234567', {force:true});
        cy.get('.col-lg-12 > #studentname').type('123456789', {force:true});
        cy.get('#Course-form > div > div.col-12 > button > span').click({force:true});
        cy.wait(10000);
    });

    it('Proceso compra', ()=>{

        cy.visit('https://clpworld.com/world/customer/account/login/');

        cy.get('.label-link').click({force: true});

        cy.get('#email').click().type('testcypress@test.com');
        cy.get('.form-group > .control > #pass').click().type('1234567');

        cy.get('.actions-toolbar > #send2 > span').click({force: true});
        cy.wait(2000);
        cy.get('.logo > img').click({force: true});
        cy.wait(1000);
        cy.reload();
        cy.visit('https://clpworld.com/world/art-prueba.html');
        cy.get('#option-label-talla-158-item-539').click({force: true});
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

describe('11.2.Eliminar cuenta Países Bajos', ()=>{

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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('12.1.Test landing AUSTRIA' , ()=>{
    
    before(()=>{

        cy.visit('https://clpworld.com/landingau/');
    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Registro', ()=>{

        cy.get(':nth-child(1) > #studentname').type('landingAustriaCypress', {force:true});
        cy.get('#studentemail').type('testcypress@test.com', {force:true});
        cy.get('#studentcourse').select('Austria');
        cy.get('#studentlanguage').select('Burgenland'); 
        cy.get('#password').type('1234567', {force:true});
        cy.get('#cpassword').type('1234567', {force:true});
        cy.get('.col-lg-12 > #studentname').type('123456789', {force:true});
        cy.get('#Course-form > div > div.col-12 > button > span').click({force:true});
        cy.wait(10000);
    });

    it('Proceso compra', ()=>{

        cy.visit('https://clpworld.com/world/customer/account/login/');

        cy.get('.label-link').click({force: true});

        cy.get('#email').click().type('testcypress@test.com');
        cy.get('.form-group > .control > #pass').click().type('1234567');

        cy.get('.actions-toolbar > #send2 > span').click({force: true});
        cy.wait(2000);
        cy.get('.logo > img').click({force: true});
        cy.wait(1000);
        cy.reload();
        cy.visit('https://clpworld.com/world/art-prueba.html');
        cy.get('#option-label-talla-158-item-539').click({force: true});
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

describe('12.2.Eliminar cuenta Austria', ()=>{

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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('13.1.Test landing CHIPRE' , ()=>{
    
    before(()=>{

        cy.visit('https://clpworld.com/landingch/');
    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Registro', ()=>{

        cy.get(':nth-child(1) > #studentname').type('landingChipreCypress', {force:true});
        cy.get('#studentemail').type('testcypress@test.com', {force:true});
        cy.get('#studentcourse').select('Cyprus');
        cy.get('#studentlanguage').select('Keryneia'); 
        cy.get('#password').type('1234567', {force:true});
        cy.get('#cpassword').type('1234567', {force:true});
        cy.get('.col-lg-12 > #studentname').type('123456789', {force:true});
        cy.get('#Course-form > div > div.col-12 > button > span').click({force:true});
        cy.wait(10000);
    });

    it('Proceso compra', ()=>{

        cy.visit('https://clpworld.com/world/customer/account/login/');

        cy.get('.label-link').click({force: true});

        cy.get('#email').click().type('testcypress@test.com');
        cy.get('.form-group > .control > #pass').click().type('1234567');

        cy.get('.actions-toolbar > #send2 > span').click({force: true});
        cy.wait(2000);
        cy.get('.logo > img').click({force: true});
        cy.wait(1000);
        cy.reload();
        cy.visit('https://clpworld.com/world/art-prueba.html');
        cy.get('#option-label-talla-158-item-539').click({force: true});
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

describe('13.2.Eliminar cuenta Países Bajos', ()=>{

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

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('14.1.Test landing POLONIA' , ()=>{
    
    before(()=>{

        cy.visit('https://clpworld.com/landingpo/');
    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Registro', ()=>{

        cy.get(':nth-child(1) > #studentname').type('landingPoloniaCypress', {force:true});
        cy.get('#studentemail').type('testcypress@test.com', {force:true});
        cy.get('#studentcourse').select('Poland');
        cy.get('#studentlanguage').select('Pomorskie'); 
        cy.get('#password').type('1234567', {force:true});
        cy.get('#cpassword').type('1234567', {force:true});
        cy.get('.col-lg-12 > #studentname').type('123456789', {force:true});
        cy.get('#Course-form > div > div.col-12 > button > span').click({force:true});
        cy.wait(10000);
    });

    it('Proceso compra', ()=>{

        cy.visit('https://clpworld.com/world/customer/account/login/');

        cy.get('.label-link').click({force: true});

        cy.get('#email').click().type('testcypress@test.com');
        cy.get('.form-group > .control > #pass').click().type('1234567');

        cy.get('.actions-toolbar > #send2 > span').click({force: true});
        cy.wait(2000);
        cy.get('.logo > img').click({force: true});
        cy.wait(1000);
        cy.reload();
        cy.visit('https://clpworld.com/world/art-prueba.html');
        cy.get('#option-label-talla-158-item-539').click({force: true});
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

describe('14.2.Eliminar cuenta Países Bajos', ()=>{

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

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('15.1.Test landing REPUBLICA CHECA' , ()=>{
    
    before(()=>{

        cy.visit('https://clpworld.com/landingcq/');
    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Registro', ()=>{

        cy.get(':nth-child(1) > #studentname').type('landingRepublicaChecaCypress', {force:true});
        cy.get('#studentemail').type('testcypress@test.com', {force:true});
        cy.get('#studentcourse').select('Czech Republic');
        cy.get('#studentlanguage').select('Jihomoravský kraj'); 
        cy.get('#password').type('1234567', {force:true});
        cy.get('#cpassword').type('1234567', {force:true});
        cy.get('.col-lg-12 > #studentname').type('123456789', {force:true});
        cy.get('#Course-form > div > div.col-12 > button > span').click({force:true});
        cy.wait(10000);
    });

    it('Proceso compra', ()=>{

        cy.visit('https://clpworld.com/world/customer/account/login/');

        cy.get('.label-link').click({force: true});

        cy.get('#email').click().type('testcypress@test.com');
        cy.get('.form-group > .control > #pass').click().type('1234567');

        cy.get('.actions-toolbar > #send2 > span').click({force: true});
        cy.wait(2000);
        cy.get('.logo > img').click({force: true});
        cy.wait(1000);
        cy.reload();
        cy.visit('https://clpworld.com/world/art-prueba.html');
        cy.get('#option-label-talla-158-item-539').click({force: true});
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

describe('15.2.Eliminar cuenta República Checa', ()=>{

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

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

describe('16.1.Test landing CROACIA' , ()=>{
    
    before(()=>{

        cy.visit('https://clpworld.com/landingcro/');
    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Registro', ()=>{

        cy.get(':nth-child(1) > #studentname').type('landingCroaciaCypress', {force:true});
        cy.get('#studentemail').type('testcypress@test.com', {force:true});
        cy.get('#studentcourse').select('Croatia');
        cy.get('#studentlanguage').select('Grad Zagreb'); 
        cy.get('#password').type('1234567', {force:true});
        cy.get('#cpassword').type('1234567', {force:true});
        cy.get('.col-lg-12 > #studentname').type('123456789', {force:true});
        cy.get('#Course-form > div > div.col-12 > button > span').click({force:true});
        cy.wait(10000);
    });

    it('Proceso compra', ()=>{

        cy.visit('https://clpworld.com/world/customer/account/login/');

        cy.get('.label-link').click({force: true});

        cy.get('#email').click().type('testcypress@test.com');
        cy.get('.form-group > .control > #pass').click().type('1234567');

        cy.get('.actions-toolbar > #send2 > span').click({force: true});
        cy.wait(2000);
        cy.get('.logo > img').click({force: true});
        cy.wait(1000);
        cy.reload();
        cy.visit('https://clpworld.com/world/art-prueba.html');
        cy.get('#option-label-talla-158-item-539').click({force: true});
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

describe('16.2.Eliminar cuenta Croacia', ()=>{

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

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


describe('17.1.Test landing GRECIA' , ()=>{
    
    before(()=>{

        cy.visit('https://clpworld.com/landingrc/');
    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Registro', ()=>{

        cy.get(':nth-child(1) > #studentname').type('landingGreciaCypress', {force:true});
        cy.get('#studentemail').type('testcypress@test.com', {force:true});
        cy.get('#studentcourse').select('Greece');
        cy.get('#studentlanguage').select('Ípeiros'); 
        cy.get('#password').type('1234567', {force:true});
        cy.get('#cpassword').type('1234567', {force:true});
        cy.get('.col-lg-12 > #studentname').type('123456789', {force:true});
        cy.get('#Course-form > div > div.col-12 > button > span').click({force:true});
        cy.wait(10000);
    });

    it('Proceso compra', ()=>{

        cy.visit('https://clpworld.com/world/customer/account/login/');

        cy.get('.label-link').click({force: true});

        cy.get('#email').click().type('testcypress@test.com');
        cy.get('.form-group > .control > #pass').click().type('1234567');

        cy.get('.actions-toolbar > #send2 > span').click({force: true});
        cy.wait(2000);
        cy.get('.logo > img').click({force: true});
        cy.wait(1000);
        cy.reload();
        cy.visit('https://clpworld.com/world/art-prueba.html');
        cy.get('#option-label-talla-158-item-539').click({force: true});
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

describe('17.2.Eliminar cuenta Grecia', ()=>{

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