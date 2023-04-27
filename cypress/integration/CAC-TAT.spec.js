/// <reference types="Cypress" />

const { functionsIn } = require("cypress/types/lodash");

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(() => cy.visit('./src/index.html'))

    it('verifica o título da aplicação', function() {

       cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')

    })

    it('preenche os campos obrigatórios e envia o formulário', function () {
        const longText = 'Meu primeiro teste automatizado. Meu primeiro teste automatizado. Meu primeiro teste automatizado. Meu primeiro teste automatizado. Meu primeiro teste automatizado. Meu primeiro teste automatizado. Meu primeiro teste automatizado. Meu primeiro teste automatizado. Meu primeiro teste automatizado. Meu primeiro teste automatizado.'
        cy.get('input[id="firstName"]').type('Mariana')
        cy.get('input[id="lastName"]').type('Shibuya')
        cy.get('input[id="email"]').type('marianashibuya@gmail.com')
        cy.get('#open-text-area').type(longText, {delay: 0})     //o # representa id
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    });

    /*it.only('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
        cy.get('input[id="firstName"]').type('Mariana')
        cy.get('input[id="lastName"]').type('Ferreira')
        cy.get('input[id="email"]').type('marianashibuya.com')
        cy.get('#open-text-area').type('Meu primeiro teste automatizado.')     //o # representa id
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    });*/
  })
