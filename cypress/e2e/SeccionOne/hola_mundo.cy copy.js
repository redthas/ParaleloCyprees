/// <referece typyes ="cypress" />
describe('Primer test con Cypress', () =>{
    it("Esto es un hola mundo desde Cypress", () =>{
        cy.log("Bienvenidos a Cypress")
        //Visitar pag
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        //Esperar 3 sg
        cy.wait(3000)
        cy.get("#wsf-1-field-21").type("aniel")
        cy.get("#wsf-1-field-22").type("iraldo")
        cy.get("#wsf-1-field-23").type("draldo@gmail.com")
        cy.get("#wsf-1-field-24").type("426817827")
        cy.get("#wsf-1-field-28").type("salle 24- 21312")
        cy.get("#wsf-1-field-27").click()

        cy.wait(3000)

    })
})