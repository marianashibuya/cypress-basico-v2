Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('input[id="firstName"]').type('Mariana')
    cy.get('input[id="lastName"]').type('Shibuya')
    cy.get('input[id="email"]').type('marianashibuya@gmail.com')
    cy.get('#open-text-area').type('Meu primeiro teste automatizado')     //o # representa id
    cy.contains('button', 'Enviar').click()
})
