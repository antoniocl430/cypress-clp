'use strict'
describe('TP - Comprobación de Links', ()=>{

    before(()=>{
        cy.visit(Cypress.env('baseUrl'));
    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

     //comprobación de links correctos en toda la web
     it('Links nav superior', () =>{
        
        //principales aserciones del nav superior
        cy.get('.label-link').should('be.visible');
        cy.get('.action-search > .pe-7s-search').should('be.visible');
        cy.get('.pe-7s-like').should('be.visible');
        cy.get('.minicart-wrapper > .action').should('be.visible');
        cy.get('.menu-4columns > .level0 > :nth-child(1)').should('be.visible');
        cy.wait(2000);
        cy.scrollTo('top');
        cy.get(':nth-child(2) > .level0 > :nth-child(1)').should('be.visible');
        cy.get('.moradom > .level0 > :nth-child(1)').should('be.visible');
        cy.get(':nth-child(4) > .level0 > :nth-child(1)').should('be.visible');
        cy.get(':nth-child(5) > .level0 > span').should('be.visible');

    });

    it('Links del menu', ()=>{

       //se comprobarán los respectivos links correctos y la paginación en cada categoría de productos
        
        //menú novedades
        cy.get('#mobile-menu-6-1 > li > div.col-md-3 > ul > li:nth-child(1) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/novedades-inicio.html');
        cy.get('#mobile-menu-6-1 > li > div.col-md-3 > ul > li:nth-child(3) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/ultima-semana.html');
       
       
        //menú colección PRIMAVERA/VERANO
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(1) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/chaqueta.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(2) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/vestido.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(3) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/monos.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(4) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/camisa.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(5) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/camiseta-n.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(6) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/punto.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(7) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/pantalon-category.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(8) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/denim.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(9) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/shorts-bermudas.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div:nth-child(3) > ul > li:nth-child(1) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/falda.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div:nth-child(3) > ul > li:nth-child(2) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/zapato.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div:nth-child(3) > ul > li:nth-child(3) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/bolso-n.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div:nth-child(3) > ul > li:nth-child(4) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/accesorios.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div:nth-child(3) > ul > li:nth-child(5) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/banador-mujer.html');
        
         //menú colección OTOÑO/INVIERNO
         cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div.col-md-6.newbottom > ul > li:nth-child(1) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/blazers.html');              
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div.col-md-6.newbottom > ul > li:nth-child(2) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/vestidos.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div.col-md-6.newbottom > ul > li:nth-child(3) > a')
             .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/monos.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div.col-md-6.newbottom > ul > li:nth-child(4) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/camisas.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div.col-md-6.newbottom > ul > li:nth-child(5) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/camisetas-tops.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div.col-md-6.newbottom > ul > li:nth-child(6) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/punto.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div.col-md-6.newbottom > ul > li:nth-child(7) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/pantalones.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div.col-md-6.newbottom > ul > li:nth-child(8) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/jeans.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div.col-md-6.newbottom > ul > li:nth-child(9) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/shorts-bermudas.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div:nth-child(3) > ul > li:nth-child(1) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/faldas.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div:nth-child(3) > ul > li:nth-child(2) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/cazadoras-abrigos.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div:nth-child(3) > ul > li:nth-child(3) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/zapatos.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div:nth-child(3) > ul > li:nth-child(4) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/bolsos.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div:nth-child(3) > ul > li:nth-child(5) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/accesorios.html');
        
        //menú outlet DESTACADOS
        cy.get('#mobile-menu-8-1 > li > div:nth-child(1) > ul > li > h5 > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-favorito.html');

        //menú outlet PRIMAVERA/VERANO

        cy.get('#mobile-menu-8-1 > li > div.col-md-4.separadormenuiz.movilbottom > ul > li:nth-child(1) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-primavera-verano/camisetas-sudaderas-y-punto.html');
        cy.get('#mobile-menu-8-1 > li > div.col-md-4.separadormenuiz.movilbottom > ul > li:nth-child(2) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-primavera-verano/camisa.html');
        cy.get('#mobile-menu-8-1 > li > div.col-md-4.separadormenuiz.movilbottom > ul > li:nth-child(3) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-primavera-verano/vestido.html');
        cy.get('#mobile-menu-8-1 > li > div.col-md-4.separadormenuiz.movilbottom > ul > li:nth-child(4) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/catalog/category/view/s/pantalon/id/79/');
        cy.get('#mobile-menu-8-1 > li > div.col-md-4.separadormenuiz.movilbottom > ul > li:nth-child(5) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-primavera-verano/falda.html');
        cy.get('#mobile-menu-8-1 > li > div.col-md-4.separadormenuiz.movilbottom > ul > li:nth-child(6) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-primavera-verano/chaquetas-y-abrigos.html');
        cy.get('#mobile-menu-8-1 > li > div.col-md-4.separadormenuiz.movilbottom > ul > li:nth-child(7) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-primavera-verano/zapatos.html'); 
        
         //mneú outlet OTOÑO/INVIERNO
        
        cy.get('#mobile-menu-8-1 > li > div:nth-child(3) > ul > li:nth-child(1) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-oto-o-invierno/camisetas-sudaderas-y-punto.html');
        cy.get('#mobile-menu-8-1 > li > div:nth-child(3) > ul > li:nth-child(2) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-oto-o-invierno/camisa.html');
        cy.get('#mobile-menu-8-1 > li > div:nth-child(3) > ul > li:nth-child(3) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-oto-o-invierno/vestido.html');
        cy.get('#mobile-menu-8-1 > li > div:nth-child(3) > ul > li:nth-child(4) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/catalog/category/view/s/pantalon/id/71/');
        cy.get('#mobile-menu-8-1 > li > div:nth-child(3) > ul > li:nth-child(5) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-oto-o-invierno/falda.html');
        cy.get('#mobile-menu-8-1 > li > div:nth-child(3) > ul > li:nth-child(6) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-oto-o-invierno/chaquetas-y-abrigos.html');
        cy.get('#mobile-menu-8-1 > li > div:nth-child(3) > ul > li:nth-child(8) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-oto-o-invierno/accesorios.html');
        
        //menú EDITORIALES
        cy.get('#mobile-menu-9-1 > li > div:nth-child(1) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/spring-hall');
        cy.get('#mobile-menu-9-1 > li > div:nth-child(2) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/news-time');
        cy.get('#mobile-menu-9-1 > li > div:nth-child(3) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/denim-collection');
    });

    it('Links body page', ()=>{

        cy.wait(2000);
        //slide principal visible y con su link correspondiente
        cy.reload();
            
        //sección lo más vendido
        cy.get('.col-lg-12 > :nth-child(1) > .col-md-3').should('be.visible');
        cy.get('#maincontent > div > div > div.section-beseller > div > div > div > div > div.panel-block-row.col-md-3 > div > a')
            .should('be.visible').should('have.attr', 'href', 'https://clpspain.es/es/catalog/category/view/s/bestseller/id/275/');
    
        //imágenes lo mas vendido
        cy.get('.section-beseller').should('be.visible');

        //imagenes novedades, f/w22 y editorial
        cy.get('.section-category-banner > .container').should('be.visible');

        //seccion pago, envios y devoluciones
        cy.get('.section-iconos').should('be.visible');
        cy.get('#maincontent > div > div > div.section-iconos > div > div > div:nth-child(1) > div > div:nth-child(1) > div > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/pago/');
        cy.get('#maincontent > div > div > div.section-iconos > div > div > div:nth-child(2) > div > div:nth-child(1) > div > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/envios/');
        cy.get('#maincontent > div > div > div.section-iconos > div > div > div:nth-child(3) > div > div:nth-child(1) > div > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/devoluciones');

        //zona newsletter
        cy.get('.top-footer').should('be.visible');

    });

    it('Links footer', ()=>{

        cy.get('.middle-footer').should('be.visible');

        //links sobre clp
        cy.get('body > main > div > footer > div > div.middle-footer > div > div > div:nth-child(1) > div > div > ul > li:nth-child(1) > a').should('have.attr', 'href', 'https://clpspain.es/es/acercadeclp');
        cy.get('body > main > div > footer > div > div.middle-footer > div > div > div:nth-child(1) > div > div > ul > li:nth-child(2) > a').should('have.attr', 'href', 'https://clpspain.es/es/contact-us');
        cy.get('body > main > div > footer > div > div.middle-footer > div > div > div:nth-child(1) > div > div > ul > li:nth-child(3) > a').should('have.attr', 'href', 'https://clpspain.es/es/franquicias');
        cy.get('body > main > div > footer > div > div.middle-footer > div > div > div:nth-child(1) > div > div > ul > li:nth-child(4) > a').should('have.attr', 'href', 'https://clpspain.es/es/corner');
        cy.get('body > main > div > footer > div > div.middle-footer > div > div > div:nth-child(1) > div > div > ul > li:nth-child(5) > a').should('have.attr', 'href', 'https://clpspain.es/es/storelocator');
        cy.get('body > main > div > footer > div > div.middle-footer > div > div > div:nth-child(1) > div > div > ul > li:nth-child(6) > a').should('have.attr', 'href', 'https://clpspain.es/es/novedades-cada-semana');

        //links ayuda e informacion
        cy.get('body > main > div > footer > div > div.middle-footer > div > div > div:nth-child(2) > div > div > ul > li:nth-child(1) > a').should('have.attr', 'href', 'https://clpspain.es/es/envios/');
        cy.get('body > main > div > footer > div > div.middle-footer > div > div > div:nth-child(2) > div > div > ul > li:nth-child(2) > a').should('have.attr', 'href', 'https://clpspain.es/es/pago/');
        cy.get('body > main > div > footer > div > div.middle-footer > div > div > div:nth-child(2) > div > div > ul > li:nth-child(3) > a').should('have.attr', 'href', 'https://clpspain.es/es/devoluciones/');
        cy.get('body > main > div > footer > div > div.middle-footer > div > div > div:nth-child(2) > div > div > ul > li:nth-child(4) > a').should('have.attr', 'href', 'https://clpspain.es/es/supedido/');
        cy.get('body > main > div > footer > div > div.middle-footer > div > div > div:nth-child(2) > div > div > ul > li:nth-child(5) > a').should('have.attr', 'href', 'https://clpspain.es/es/micuenta/');
        cy.get('body > main > div > footer > div > div.middle-footer > div > div > div:nth-child(2) > div > div > ul > li:nth-child(6) > a').should('have.attr', 'href', 'https://clpspain.es/es/guiatallasmujer');
        cy.get('body > main > div > footer > div > div.middle-footer > div > div > div:nth-child(2) > div > div > ul > li:nth-child(7) > a').should('have.attr', 'href', 'https://clpspain.es/es/guiatallashombre');
        cy.get('body > main > div > footer > div > div.middle-footer > div > div > div:nth-child(2) > div > div > ul > li:nth-child(8) > a').should('have.attr', 'href', 'https://clpspain.es/es/faq/');

        //links notas legales
        cy.get('body > main > div > footer > div > div.middle-footer > div > div > div.col-lg-6.col-md-6.col-sm-6.col-xs-12 > div > div > ul > li:nth-child(1) > a').should('have.attr', 'href', 'https://clpspain.es/es/avisolegal');
        cy.get('body > main > div > footer > div > div.middle-footer > div > div > div.col-lg-6.col-md-6.col-sm-6.col-xs-12 > div > div > ul > li:nth-child(2) > a').should('have.attr', 'href', 'https://clpspain.es/es/politicadeprivacidad');
        cy.get('body > main > div > footer > div > div.middle-footer > div > div > div.col-lg-6.col-md-6.col-sm-6.col-xs-12 > div > div > ul > li:nth-child(3) > a').should('have.attr', 'href', 'https://clpspain.es/es/cookies');

    });
});