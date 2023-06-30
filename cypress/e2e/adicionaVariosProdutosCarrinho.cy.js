/// <reference types="cypress" />

describe('Automação da Amazon', () => {

  it('Adicionar produtos ao carrinho', () => {
    cy.visit('https://www.amazon.com.br/');

    const produtosAmazon = [
      "Kindle Paperwhite",
      "Sony PlayStation 5",
      "Bose QuietComfort",
      "Instant Pot",
      "Fitbit Charge",
      "Canon EOS",
      "DJI Mavic",
      "GoPro Hero",
      "Nintendo Switch",
      "Apple AirPods",
      "Roomba",
      "Anker Soundcore",
      "Fitbit"
    ];

    // Realizar a busca por cada livro e adicioná-lo ao carrinho
    for (let i = 0; i <= produtosAmazon.length; i++) {

      // Preencher o campo de busca
      cy.get('#twotabsearchtextbox')
        .type(produtosAmazon[i])
        .type('{enter}');

      // Clicar no livro correspondente à busca
      cy.get('.a-size-base-plus.a-color-base.a-text-normal')
        .contains(produtosAmazon[i])
        .click();

      //Clica no botão para adicionar ao carrinho
      cy.get('#add-to-cart-button').click();

      //Verifica se foi adicionado ao carrinho com sucesso
      cy.get('.a-size-medium-plus.a-color-base.sw-atc-text.a-text-bold').should('contain', 'Adicionado ao carrinho');

      //Verifica se foi adicionado ao carrinho com sucesso
      cy.get('.a-size-medium-plus.a-color-base.sw-atc-text.a-text-bold').should('contain', 'Adicionado ao carrinho');
    }
  });
});
