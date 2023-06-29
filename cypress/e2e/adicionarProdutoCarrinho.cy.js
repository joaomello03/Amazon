/// <reference types="cypress" />

describe('Adicionar Produto ao Carrinho', () => {
  it('Adicionar Produto ao Carrinho', () => {
    //Acessa a página
    cy.visit('https://www.amazon.com.br/');

    //Preenche os dados da pesquisa
    cy.get('#twotabsearchtextbox').type('Iphone 14');
    cy.get('#twotabsearchtextbox').type('{enter}');

    //Clica no primeiro resultado da pesquisa
    cy.get('.a-size-base-plus.a-color-base.a-text-normal').first().click();

    //Clica no botão para adicionar ao carrinho
    cy.get('#add-to-cart-button').click();

    //Clica no botão recusando seguro
    cy.get('#attachSiNoCoverage').click();

    //Verifica se foi para página do carrinho
    cy.url().should('include', '/cart/');

    //Verifica se foi adicionado ao carrinho com sucesso
    cy.get('.a-size-medium-plus.a-color-base.sw-atc-text.a-text-bold').should('contain', 'Adicionado ao carrinho');
  });
});