/// <reference types="cypress" />

describe('Adicionar um Endereço na Conta', () => {
  it('Adicionar um Endereço na Conta', () => {
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

    //Clica no botão para adicionar um endereço
    cy.get('.a-box.first-desktop-address-tile').click();

    //Preenche as informações do endereço
    cy.get('#address-ui-widgets-enterAddressPostalCode').type('85660000');
    cy.get('#address-ui-widgets-neighborhood').type('Bairro Teste');
    cy.get('#address-ui-widgets-buildingNumber').type('100');
    cy.get('#address-ui-widgets-streetName').type('Rua Teste');
    cy.get('#address-ui-widgets-form-submit-button').click();

    //Verifica se adicionou com sucesso o novo endereço
    cy.get('.a-alert-heading').should('contain', 'Endereço salvo');
  });
});