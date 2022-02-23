'use strict'
describe('TP - Registro y login con Compra', ()=>{

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

    it.only('Links del menu', ()=>{

       //se comprobarán los respectivos links correctos y la paginación en cada categoría de productos
        
        //menú novedades
        cy.get('#mobile-menu-6-1 > li > div.col-md-3 > ul > li:nth-child(1) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/novedades-inicio.html');
        cy.get('#mobile-menu-6-1 > li > div.col-md-3 > ul > li:nth-child(2) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/ultima-semana.html');
        cy.get('#mobile-menu-6-1 > li > div.col-md-3 > ul > li:nth-child(3) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/proxima-llegada.html');
        cy.get('#mobile-menu-6-1 > li > div.col-md-3 > ul > li:nth-child(4) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/catalog/category/view/s/bestseller/id/275/');
       
       
        //menú colección PRIMAVERA/VERANO
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(1) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/chaqueta.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(2) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/vestido.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(3) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/monos.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(4) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/camisa.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(5) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/camiseta-n.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(6) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/punto.html').click({force: true});

        cy.request('https://clpspain.es/es/oinvierno/blazers.html').then(() =>{
            if(cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2')){
                console.log("Paginacion cargada correctamente");
            }
            else{
                console.log("No posee paginacion");
            }
                
            cy.go('back'); 
        });
        cy.go('back');

        /*
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(7) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/pantalon-category.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(8) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/denim.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div.col-md-6.newbottom > ul > li:nth-child(9) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/shorts-bermudas.html').click({force: true});
        cy.go('back');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div:nth-child(3) > ul > li:nth-child(1) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/falda.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div:nth-child(3) > ul > li:nth-child(2) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/zapato.html').click({force: true});
        cy.go('back');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div:nth-child(3) > ul > li:nth-child(3) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/bolso-n.html').click({force: true});
        cy.go('back');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div:nth-child(3) > ul > li:nth-child(4) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/accesorios.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(2) > div:nth-child(3) > ul > li:nth-child(5) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/primavera-verano/banador-mujer.html').click({force: true});
        cy.go('back');
        
         //menú colección OTOÑO/INVIERNO
         cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div.col-md-6.newbottom > ul > li:nth-child(1) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/blazers.html').click({force: true});         
        cy.wait(4000);
        cy.scrollTo('bottom');

        cy.wait(4000);
        
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back'); 
        
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div.col-md-6.newbottom > ul > li:nth-child(2) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/vestidos.html').click({force: true});
         cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back'); 

        
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div.col-md-6.newbottom > ul > li:nth-child(3) > a')
             .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/monos.html').click({force: true});

        //solo tiene una página
        //cy.go('back'); 
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div.col-md-6.newbottom > ul > li:nth-child(4) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/camisas.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div.col-md-6.newbottom > ul > li:nth-child(5) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/camisetas-tops.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div.col-md-6.newbottom > ul > li:nth-child(6) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/punto.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div.col-md-6.newbottom > ul > li:nth-child(7) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/pantalones.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div.col-md-6.newbottom > ul > li:nth-child(8) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/jeans.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div.col-md-6.newbottom > ul > li:nth-child(9) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/shorts-bermudas.html').click({force: true});
        cy.go('back');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div:nth-child(3) > ul > li:nth-child(1) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/faldas.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div:nth-child(3) > ul > li:nth-child(2) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/cazadoras-abrigos.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div:nth-child(3) > ul > li:nth-child(3) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/zapatos.html').click({force: true});
        cy.go('back');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div:nth-child(3) > ul > li:nth-child(4) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/bolsos.html').click({force: true});
        cy.go('back');
        cy.get('#mobile-menu-7-1 > li > div:nth-child(4) > div:nth-child(3) > ul > li:nth-child(5) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/accesorios.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        
           
        //menú outlet DESTACADOS
        cy.get('#mobile-menu-8-1 > li > div:nth-child(1) > ul > li > h5 > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-favorito.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
    
       
       
        //menú outlet PRIMAVERA/VERANO

        cy.get('#mobile-menu-8-1 > li > div.col-md-4.separadormenuiz.movilbottom > ul > li:nth-child(1) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-primavera-verano/camisetas-sudaderas-y-punto.html').click({force: true});
        cy.get('#mobile-menu-8-1 > li > div.col-md-4.separadormenuiz.movilbottom > ul > li:nth-child(2) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-primavera-verano/camisa.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-8-1 > li > div.col-md-4.separadormenuiz.movilbottom > ul > li:nth-child(3) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-primavera-verano/vestido.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-8-1 > li > div.col-md-4.separadormenuiz.movilbottom > ul > li:nth-child(4) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/catalog/category/view/s/pantalon/id/79/').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-8-1 > li > div.col-md-4.separadormenuiz.movilbottom > ul > li:nth-child(5) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-primavera-verano/falda.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-8-1 > li > div.col-md-4.separadormenuiz.movilbottom > ul > li:nth-child(6) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-primavera-verano/chaquetas-y-abrigos.html').click({force: true});
        cy.go('back');
        cy.get('#mobile-menu-8-1 > li > div.col-md-4.separadormenuiz.movilbottom > ul > li:nth-child(7) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-primavera-verano/zapatos.html').click({force: true});
        cy.go('back');    
        
         //mneú outlet OTOÑO/INVIERNO
        
        cy.get('#mobile-menu-8-1 > li > div:nth-child(3) > ul > li:nth-child(1) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-oto-o-invierno/camisetas-sudaderas-y-punto.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-8-1 > li > div:nth-child(3) > ul > li:nth-child(2) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-oto-o-invierno/camisa.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-8-1 > li > div:nth-child(3) > ul > li:nth-child(3) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-oto-o-invierno/vestido.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-8-1 > li > div:nth-child(3) > ul > li:nth-child(4) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/catalog/category/view/s/pantalon/id/71/').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-8-1 > li > div:nth-child(3) > ul > li:nth-child(5) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-oto-o-invierno/falda.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        cy.get('#mobile-menu-8-1 > li > div:nth-child(3) > ul > li:nth-child(6) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-oto-o-invierno/chaquetas-y-abrigos.html').click({force: true});
        cy.go('back');
        cy.get('#mobile-menu-8-1 > li > div:nth-child(3) > ul > li:nth-child(7) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-oto-o-invierno/zapatos.html').click({force: true});
        cy.go('back');
        cy.get('#mobile-menu-8-1 > li > div:nth-child(3) > ul > li:nth-child(8) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/mujer/outlet/outlet-oto-o-invierno/accesorios.html').click({force: true});
        cy.wait(4000);
        cy.scrollTo('bottom');
        cy.wait(4000);
        cy.get('.amscroll-pages').should('have.attr', 'amscroll-page', '2');
        cy.go('back');
        
        //menú EDITORIALES
        cy.get('#mobile-menu-9-1 > li > div:nth-child(1) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/news-time');
        cy.get('#mobile-menu-9-1 > li > div:nth-child(2) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/denim-collection');
        cy.get('#mobile-menu-9-1 > li > div:nth-child(3) > a')
            .should('have.attr', 'href', 'https://clpspain.es/es/western');*/
    });

    it('Links body page', ()=>{

        cy.wait(2000);
        //slide principal visible y con su link correspondiente
        cy.reload();
        cy.get('#rev_slider_1_1 > rs-slides > rs-slide > rs-layer-wrap > rs-loop-wrap > rs-mask-wrap > rs-layer').should('be.visible')
            .should('have.attr', 'data-actions', 'o:click;a:simplelink;target:_self;url:https://clpspain.es/es/novedades-inicio.html;');
        
        //sección lo más vendido
        cy.get('.col-lg-12 > :nth-child(1) > .col-md-3').should('be.visible');
        cy.get('#maincontent > div > div > div.section-beseller > div > div > div > div > div.panel-block-row.col-md-3 > div > a')
            .should('be.visible').should('have.attr', 'href', 'https://clpspain.es/es/oinvierno/best-sellers.html/');
    
        //imágenes lo mas vendido
        cy.get(':nth-child(1) > .product-item > .product-item-info > .product-top > .product > .img-responsive').should('be.visible');
        cy.get(':nth-child(2) > .product-item > .product-item-info > .product-top > .product > .img-responsive').should('be.visible');
        cy.get(':nth-child(3) > .product-item > .product-item-info > .product-top > .product > .img-responsive').should('be.visible');

        //imagenes novedades, f/w22 y editorial
        cy.get('.section-category-banner > .container > :nth-child(1) > :nth-child(1) > .row > .panel-block-row > .promobanner > a')
            .should('be.visible').should('have.attr', 'href', 'https://clpspain.es/es/novedades-inicio.html');
        cy.get('.section-category-banner > .container > :nth-child(1) > :nth-child(2) > .row > .panel-block-row > .promobanner > a')
            .should('be.visible').should('have.attr', 'href', 'https://clpspain.es/es/proxima-llegada.html');
        cy.get('.section-category-banner > .container > :nth-child(1) > :nth-child(3) > .row > .panel-block-row > .promobanner > a')
            .should('be.visible').should('have.attr', 'href', 'https://clpspain.es/es/news-time');

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