// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
    
});

Cypress.Commands.add('login', ()=>{

    cy.visit('https://clpspain.es/es/customer/account/login/');

    cy.get('#email').click().type('testcypress@test.com');
    cy.get('.form-group > .control > #pass').click().type('1234567');

    cy.get('.actions-toolbar > #send2 > span').click({force: true});
});

Cypress.Commands.add('loginCarrito', ()=>{

    cy.visit('https://clpspain.es/es/customer/account/login/');

    cy.get('#email').click().type('carritocypress@test.com');
    cy.get('.form-group > .control > #pass').click().type('1234567');

    cy.get('.actions-toolbar > #send2 > span').click({force: true});
    cy.wait(8000);
});

Cypress.Commands.add('loginCarritoFrancia', ()=>{

    cy.visit('https://clpfrance.fr/fr/customer/account/login/');

    cy.get('#email').click().type('carritofranciacypress@test.com');
    cy.get('.form-group > .control > #pass').click().type('1234567');

    cy.get('.actions-toolbar > #send2 > span').click({force: true});
    cy.wait(8000);
});

Cypress.Commands.add('loginCarritoItalia', ()=>{

    cy.visit('https://clpitalia.it/it/customer/account/login/');

    cy.get('#email').click().type('carritoitaliacypress@test.com');
    cy.get('.form-group > .control > #pass').click().type('1234567');

    cy.get('.actions-toolbar > #send2 > span').click({force: true});
    cy.wait(8000);
});

Cypress.Commands.add('loginCarritoPortugal', ()=>{

    cy.visit('https://clpportugal.pt/pt/customer/account/login/');

    cy.get('#email').click().type('carritoportugalcypress@test.com');
    cy.get('.form-group > .control > #pass').click().type('1234567');

    cy.get('.actions-toolbar > #send2 > span').click({force: true});
    cy.wait(8000);
});

Cypress.Commands.add('loginCarritoBritain', ()=>{

    cy.visit('https://clpbritain.co.uk/en/customer/account/login/');

    cy.get('#email').click().type('carritobritaincypress@test.com');
    cy.get('.form-group > .control > #pass').click().type('1234567');

    cy.get('.actions-toolbar > #send2 > span').click({force: true});
    cy.wait(8000);
});

Cypress.Commands.add('loginCarritoAlemania', ()=>{

    cy.visit('https://clpdeutschland.de/ge/customer/account/login/');

    cy.get('#email').click().type('carritoalemaniacypress@test.com');
    cy.get('.form-group > .control > #pass').click().type('1234567');

    cy.get('.actions-toolbar > #send2 > span').click({force: true});
    cy.wait(8000);
});

Cypress.Commands.add('loginCarritoMexico', ()=>{

    cy.visit('https://clpmexico.mx/mx/customer/account/login/');

    cy.get('#email').click().type('carritomexicocypress@test.com');
    cy.get('.form-group > .control > #pass').click().type('1234567');

    cy.get('.actions-toolbar > #send2 > span').click({force: true});
    cy.wait(8000);
});


Cypress.Commands.add('loginAdmin', () =>{
    cy.visit('https://clpspain.es/admin_clp_admin@-@2031@_@2021/');

    cy.get('#username').type('antonio');
    cy.get('#login').type('yUw3i94~!');

    cy.get('.action-login > span').click({force:true});
});



Cypress.Commands.add("restoreLocalStorageCache", () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
        localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    });
});