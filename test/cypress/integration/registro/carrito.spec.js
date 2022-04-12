'use strict'
describe('Añade constantemente productos al carrito España' , ()=>{

    before(()=>{

        cy.visit(Cypress.env('baseUrl'));

    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Tienda de España', ()=>{
        cy.loginCarrito();

        cy.reload();

        cy.wait(4000);
            
        cy.get('.logo > img').click({force: true});
    
        cy.wait(1000);
    
        cy.reload();
    
        cy.visit('https://clpspain.es/es/primavera-verano/vestido/vestido-cut-out-hebilla.html');

        cy.reload();
    
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


describe('Añade constantemente productos al carrito Francia' , ()=>{

    before(()=>{

        cy.visit(Cypress.env('baseUrlFrancia'));

    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Tienda de Francia', ()=>{
        cy.loginCarritoFrancia();

        cy.reload();

        cy.wait(4000);
            
        cy.get('.logo > img').click({force: true});
    
        cy.wait(1000);
    
        cy.reload();
    
        cy.visit('https://clpfrance.fr/fr/femme/jupe/jupe-en-denim.html');

        cy.reload();
    
        cy.get('#option-label-talla-158-item-507').click({force: true});
        cy.get('#product-addtocart-button > span').click({force: true});
        cy.wait(1000);
    
        cy.get('#cartNotificationPopup').should('be.visible');
        cy.get('.minicart-wrapper > .action').click({force: true});
    
        cy.wait(2000);
        
        cy.get('.action-delete').click({force: true});
    
        cy.wait(4000);
          
    });
});


describe('Añade constantemente productos al carrito Italia' , ()=>{

    before(()=>{

        cy.visit(Cypress.env('baseUrlItalia'));

    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Tienda de Italia', ()=>{
        cy.loginCarritoItalia();

        cy.reload();

        cy.wait(4000);
            
        cy.get('.logo > img').click({force: true});
    
        cy.wait(1000);
    
        cy.reload();
    
        cy.visit('https://clpitalia.it/it/donna/outlet/outlet-autunno-inverno/abito/vestito-manica-puff.html');

        cy.reload();
    
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

describe('Añade constantemente productos al carrito Portugal' , ()=>{

    before(()=>{

        cy.visit(Cypress.env('baseUrlPortugal'));

    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Tienda de Portugal', ()=>{
        cy.loginCarritoPortugal();

        cy.reload();

        cy.wait(4000);
            
        cy.get('.logo > img').click({force: true});
    
        cy.wait(1000);
    
        cy.reload();
    
        cy.visit('https://clpportugal.pt/pt/catalog/product/view/id/51211/s/saia-midi-com-fenda-lateral725094/category/8/');

        cy.reload();
    
        cy.get('#option-label-talla-158-item-540').click({force: true});
        cy.get('#product-addtocart-button > span').click({force: true});
        cy.wait(1000);
    
        cy.get('#cartNotificationPopup').should('be.visible');
        cy.get('.minicart-wrapper > .action').click({force: true});
    
        cy.wait(2000);
        
        cy.get('.action-delete').click({force: true});
    
        cy.wait(4000);
          
    });
});

describe('Añade constantemente productos al carrito Gran Bretaña' , ()=>{

    before(()=>{

        cy.visit(Cypress.env('baseUrlBritain'));

    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Tienda de Gran Bretaña', ()=>{
        cy.loginCarritoBritain();

        cy.reload();

        cy.wait(4000);
            
        cy.get('.logo > img').click({force: true});
    
        cy.wait(1000);
    
        cy.reload();
    
        cy.visit('https://clpbritain.co.uk/en/catalog/product/view/id/51211/s/midi-skirt-with-side-slit725093/category/8/');

        cy.reload();
    
        cy.get('#option-label-talla-158-item-540').click({force: true});
        cy.get('#product-addtocart-button > span').click({force: true});
        cy.wait(1000);
    
        cy.get('#cartNotificationPopup').should('be.visible');
        cy.get('.minicart-wrapper > .action').click({force: true});
    
        cy.wait(2000);
        
        cy.get('.action-delete').click({force: true});
    
        cy.wait(4000);
          
    });
});


describe('Añade constantemente productos al carrito Alemania' , ()=>{

    before(()=>{

        cy.visit(Cypress.env('baseUrlAlemania'));

    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Tienda de Alemania', ()=>{
        cy.loginCarritoAlemania();

        cy.reload();

        cy.wait(4000);
            
        cy.get('.logo > img').click({force: true});
    
        cy.wait(1000);
    
        cy.reload();
    
        cy.visit('https://clpdeutschland.de/ge/catalog/product/view/id/51211/s/midirock-mit-seitenschlitz725096/category/8/');

        cy.reload();
    
        cy.get('#option-label-talla-158-item-540').click({force: true});
        cy.get('#product-addtocart-button > span').click({force: true});
        cy.wait(1000);
    
        cy.get('#cartNotificationPopup').should('be.visible');
        cy.get('.minicart-wrapper > .action').click({force: true});
    
        cy.wait(2000);
        
        cy.get('.action-delete').click({force: true});
    
        cy.wait(4000);
         
    });
});


describe('Añade constantemente productos al carrito Mexico' , ()=>{

    before(()=>{

        cy.visit(Cypress.env('baseUrlMexico'));

    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('Tienda de Mexico', ()=>{
        cy.loginCarritoMexico();

        cy.reload();

        cy.wait(4000);
            
        cy.get('.logo > img').click({force: true});
    
        cy.wait(1000);
    
        cy.reload();
    
        cy.visit('https://clpmexico.mx/mx/oinvierno/faldas/falda-midi-brochazos.html');

        cy.reload();
    
        cy.get('#option-label-talla-158-item-540').click({force: true});
        cy.get('#product-addtocart-button > span').click({force: true});
        cy.wait(1000);
    
        cy.get('#cartNotificationPopup').should('be.visible');
        cy.get('.minicart-wrapper > .action').click({force: true});
    
        cy.wait(2000);
        
        cy.get('.action-delete').click({force: true});
    
        cy.wait(4000);
         
    });
});