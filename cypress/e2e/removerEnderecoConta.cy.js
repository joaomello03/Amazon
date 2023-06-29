/// <reference types="cypress" />

describe('Remover um Endereço da Conta', () => {
  it('Remover um Endereço da Conta', () => {
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

    //Clica no botão para acessar configurações da conta
    cy.get('#nav-link-accountList-nav-line-1').click();

    //Clica no botão para acessar os endereços
    cy.get('[alt="Endereços"]').click();

    //Clica no botão para remover um endereço
    cy.get('.a-link-normal.delete-link').first().click();
    cy.wait(2000);

    //Clica no botão para confirmar
    cy.get('.a-button.a-button-span12.a-button-primary').click();

    //Verifica se removeu com sucesso o endereço
    cy.get('.a-alert-heading').should('contain', 'Endereço excluído');
  });
});