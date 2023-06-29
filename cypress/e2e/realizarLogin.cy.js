/// <reference types="cypress" />

describe('Realizar Login', () => {
  it('Realizar Login', () => {
    //Acessa a página
    cy.visit('https://www.amazon.com.br/');

    //Clica no botão para realizar login
    cy.get('#nav-link-accountList-nav-line-1').click();

    //Preenche o e-mail e clica em continuar
    cy.get('#ap_email').type('utneve@gmail.com');
    cy.get('#continue').click();

    //Preenche a senha e clica em fazer login
    cy.get('#ap_password').type('utneve123');
    cy.get('#signInSubmit').click();

    //Verifica se logou com sucesso
    cy.get('#nav-link-accountList-nav-line-1').should('contain', 'Olá, Cypress');
  });
});