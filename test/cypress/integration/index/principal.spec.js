'use strict'

describe('TP1 - Links index page', () =>{

    before(()=>{
        cy.visit(Cypress.env('baseUrl'));
    });

    beforeEach(()=>{
        cy.viewport(1366, 768);
    });

    it('links nav superior', () =>{
        
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

    it('links del menu', ()=>{
        
        //menú novedades
        cy.get('#mobile-menu-6-1 > li > div:nth-child(1) > ul > li:nth-child(1) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/novedades-inicio.html');
        cy.get('#mobile-menu-6-1 > li > div:nth-child(1) > ul > li:nth-child(2) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/ultima-semana.html');
        
        //menú colección
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(1) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/blazers.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(2) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/vestidos.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(3) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/monos.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(4) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/camisas.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(5) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/camisetas-tops.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(6) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/punto.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(7) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/pantalones.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(8) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/jeans.html');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(9) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/shorts-bermudas.html');
            
        //así se podría hacer con todos los elementos del menú
        
    });

    it('links body page', ()=>{

        //slide principal visible y con su link correspondiente
        cy.get('#rev_slider_1_1 > rs-slides > rs-slide > rs-layer-wrap > rs-loop-wrap > rs-mask-wrap > rs-layer').should('be.visible').should('have.attr', 'data-actions', 'o:click;a:simplelink;target:_self;url:https://clpspain.es/es/ultima-semana.html;');
        
        //sección lo más vendido
        cy.get('.col-lg-12 > :nth-child(1) > .col-md-3').should('be.visible');
        cy.get('#maincontent > div > div > div.section-beseller > div > div > div > div > div.panel-block-row.col-md-3 > div > a').should('be.visible').should('have.attr', 'href', 'https://clpspain.es/es/mujer/best-seller-mujer.html/');
        
        //imágenes lo mas vendido
        cy.get(':nth-child(1) > .product-item > .product-item-info > .product-top > .product > .img-responsive').should('be.visible');
        cy.get(':nth-child(2) > .product-item > .product-item-info > .product-top > .product > .img-responsive').should('be.visible');
        cy.get(':nth-child(3) > .product-item > .product-item-info > .product-top > .product > .img-responsive').should('be.visible');

        //imagenes novedades, f/w22 y editorial
        cy.get('.section-category-banner > .container > :nth-child(1) > :nth-child(1) > .row > .panel-block-row > .promobanner > a').should('be.visible').should('have.attr', 'href', 'https://clpspain.es/es/novedades-inicio.html');
        cy.get('.section-category-banner > .container > :nth-child(1) > :nth-child(2) > .row > .panel-block-row > .promobanner > a').should('be.visible').should('have.attr', 'href', 'https://clpspain.es/es/new-season.html');
        cy.get('.section-category-banner > .container > :nth-child(1) > :nth-child(3) > .row > .panel-block-row > .promobanner > a').should('be.visible').should('have.attr', 'href', 'https://clpspain.es/es/denim-collection');

        //seccion pago, envios y devoluciones
        cy.get('.section-iconos').should('be.visible');
        cy.get('#maincontent > div > div > div.section-iconos > div > div > div:nth-child(1) > div > div:nth-child(1) > div > a').should('have.attr', 'href', 'https://clpspain.es/es/pago/');
        cy.get('#maincontent > div > div > div.section-iconos > div > div > div:nth-child(2) > div > div:nth-child(1) > div > a').should('have.attr', 'href', 'https://clpspain.es/es/envios/');
        cy.get('#maincontent > div > div > div.section-iconos > div > div > div:nth-child(3) > div > div:nth-child(1) > div > a').should('have.attr', 'href', 'https://clpspain.es/es/devoluciones');

        //zona newsletter
        cy.get('.top-footer').should('be.visible');

    });

    it('links footer', ()=>{

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