/// <reference types="cypress" />

describe('Remover Produto do Carrinho', () => {
  it('Remover Produto do Carrinho', () => {
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

    //Vai para página do carrinho
    cy.get('.a-button.a-spacing-top-base.a-button-span12.a-button-base.celwidget').click();

    //Busca a descrição do produto
    cy.get('.a-truncate-full.a-offscreen').invoke('text').as('descricaoProduto');

    //Clicar para excluir produto do carrinho
    cy.get('.a-size-small.sc-action-delete span').click();

    //Verifica se o produto foi excluído do carrinho
    cy.get('@descricaoProduto').then((descricaoProduto) => {
      cy.get('.a-link-normal.sc-product-link').contains(descricaoProduto);
    });
    cy.get('.a-size-base').should('contain', ' foi removido de Carrinho de compras.');
  });
});