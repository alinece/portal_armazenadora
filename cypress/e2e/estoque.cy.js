describe('Acesso ao sistema - portal armazenadora', () => {
    it('Deve carregar a página inicial com sucesso', () => {
      cy.visit('/') // Usa baseUrl automaticamente
      cy.contains('Login')
  
     // Preenche o CNPJ e em seguida força a perda de foco (blur)
     cy.get('#username').type('02299645000283').blur()
  
     // Aguarda a opção ser carregada no campo de pessoas relacionadas
     cy.get('#pessoas-relacionadas-ao-usuario option', { timeout: 10000 })
       .contains('3 - HORA DISTRIBUIDORA DE PETROLEO LTDA')
       .should('exist')
  
     // Seleciona a opção desejada
     cy.get('#pessoas-relacionadas-ao-usuario').select('3')
  
    // Preenche a senha
    cy.get('input[type="password"]').type('123')
  
    // Clica no botão de login
    cy.get('#botaoLogin').click()
  
    // Aguarda a tela principal carregar
    cy.url({ timeout: 10000 }).should('not.include', '/login')

    // Clica no botão de menu hamburguer com seletor específico
    cy.get('a.btn-icon-toggle.menubar-toggle:visible').click()

    // Aguarda e clica no menu "Estoque"
    cy.contains('span.title', 'Estoque', { timeout: 10000 }).click()

     // Aguarda a tela carregar
     cy.url().should('include', '/estoque') // ajuste conforme o caminho real da URL

     // Preenche a data inicial
     cy.get('#dataInicial').clear().type('01/01/2025')
 
     // Clica no botão "Pesquisar"
     cy.get('button[type="submit"]').contains('Pesquisar').click()
  })
})
