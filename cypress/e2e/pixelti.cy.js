/// <reference types="cypress"/>

describe('Criando cenario de testes para navegação entre paginas do site pixelti.com.br', () => {
  it('Caso de teste: Aceite de cookies do site', () => {
    cy.visit('https://www.pixelti.com.br/acesso/')
    cy.get('#cookie_action_close_header').click()
    cy.get('#cookie_hdr_showagain').should('contain.text', 'Revisitar consentimento')
  })
  it('Caso de teste: Navegando para Sobre', () => {
    visitPixel()
    cy.contains('Empresa').click()
    cy.contains('Sobre Nós').click()
    cy.url().should('include', 'sobre')
    cy.get(':nth-child(2) > :nth-child(1) > strong').should('contain.text', 'Apaixonados por Tecnologia')

  })
  
  it('Caso de teste: Navegando para Missão Visão Valores', () => {
    visitPixel()
    cy.contains('Empresa').click()
    cy.contains('Missão, Visão & Valores').click()
    cy.url().should('include', 'missao-visao-valores')
    cy.get('.elementor-text-editor > :nth-child(1) > :nth-child(1) > strong').should('contain.text', 'Missão')
  })
  
  it('Caso de teste: Navegando para ESG', () => {
    visitPixel()
    cy.contains('Empresa').click()
    cy.contains('ESG na Pixel').click()
    cy.url().should('include', 'esg')
    cy.get('.elementor-element-04d7c9c > .elementor-container > .elementor-row > .elementor-column > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-text-editor > [style="text-align: center;"] > span').should('contain.text', 'a sustentabilidade é um fator chave')
  })
  
  it('Caso de teste: Navegando para Blog', () => {
    visitPixel()
    cy.contains('Blog').click()
    cy.url().should('include', 'blog')
    cy.get('.elementor-element-35c10e4 > .elementor-container > .elementor-row > .elementor-column > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-text-editor > p').should('contain.text', 'ÚLTIMAS POSTAGENS')
  })
  
  it('Caso de teste: Navegando para Aplicativo e-Comfort', () => {
    visitPixel()
    cy.contains('Produtos').click()
    cy.contains('Aplicativo e-Comfort').click()
    cy.url().should('include', 'aplicativo-ecomfort')
    cy.get('.elementor-element-c7bb011 > .elementor-widget-container > .elementor-text-editor > p').should('contain.text', 'Gerencie seus dispositivos')
  })
  
  it('Caso de teste: Navegando para Suporte técnico e submetendo um formulario com sucesso.', () => {
    visitPixel()
    cy.contains('Contatos').click()
    cy.contains('Suporte Técnico').click()
    
    cy.get(':nth-child(3) > label > .wpcf7-form-control-wrap > .wpcf7-form-control').type('Teste')
    cy.get(':nth-child(4) > label > .wpcf7-form-control-wrap > .wpcf7-form-control').type('9239435935')
    cy.get(':nth-child(5) > label > .wpcf7-form-control-wrap > .wpcf7-form-control').type('teste@teste.com.br')
    cy.get(':nth-child(6) > label > .wpcf7-form-control-wrap > .wpcf7-form-control').type('Este é um teste de formulario.')
    cy.contains('ENVIAR MENSAGEM').click()
    cy.get('#wpcf7-f326-p27-o1 > .wpcf7-form > .wpcf7-response-output').should('contain.text', 'A mensagem foi enviada com sucesso!')
  
  })

  it('Caso de teste: Submetendo um formulario com e-mail inválido [Falha].', () => {
    visitPixel()
    cy.contains('Contatos').click()
    cy.contains('Suporte Técnico').click()
    
    cy.get(':nth-child(3) > label > .wpcf7-form-control-wrap > .wpcf7-form-control').type('Teste')
    cy.get(':nth-child(4) > label > .wpcf7-form-control-wrap > .wpcf7-form-control').type('9239435935')
    cy.get(':nth-child(5) > label > .wpcf7-form-control-wrap > .wpcf7-form-control').type('teste')
    cy.get(':nth-child(6) > label > .wpcf7-form-control-wrap > .wpcf7-form-control').type('Este é um teste de formulario.')
    cy.contains('ENVIAR MENSAGEM').click()
    cy.get('.wpcf7-not-valid-tip').should('contain.text','O endereço de e-mail informado é inválido')
    cy.get('#wpcf7-f326-p27-o1 > .wpcf7-form > .wpcf7-response-output').should('contain.text','Ocorreram erros de validação')
  
  })

   
})

function visitPixel(){
  cy.visit('https://www.pixelti.com.br')
  cy.get('#cookie_action_close_header').click()
}
