/// <referece typyes ="cypress" />
describe('Primer test con Cypress', () =>{
    it("Esto es un hola mundo desde Cypress", () =>{
        cy.log("Bienvenidos a Cypress")
        //Visitar pag
        cy.visit('https://demo.firmaseguro.co/Process')
        //Esperar 3 sg
        cy.get('#Input_Email').type("dgiraldo@tredasolutions.com")
        cy.get('#Input_Password').type("Gloria1612*")
        cy.get('[type="submit"]').click()
        cy.wait(1000)
    })
})