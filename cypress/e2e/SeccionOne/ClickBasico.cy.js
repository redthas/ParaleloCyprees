//para que funcionen los comandos
///<reference types="Cypress"/> 
require('cypress-plugin-tab')

describe("Opciones de Click", () =>{
    it("Clic Facilito", () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")
        cy.get('.oxd-button').should("be.visible").click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click()
    })

    it("Clic Force True", () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")
        cy.get('.oxd-button').should("be.visible").click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click({force: true})
    })

    it.only("Click por coordenadas", () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")
        cy.get('.oxd-button').should("be.visible").click()
        cy.wait(1500)
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("be.visible").click(50,5)
        cy.wait(1500)
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("be.visible").click('bottom')
        //cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click({force: true})
    })

})