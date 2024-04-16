import BasePage from "./BasePage";

const basePage = new BasePage();

class HomePage {
    get signUpButton() {
        return cy.xpath(`//button[@class='hero-descriptor_btn btn btn-primary']`);
    }

    fillRegistrationData(user) {
        cy.xpath(`//input[@id='signupName']`).type(user.name);
        cy.xpath(`//input[@id='signupLastName']`).type(user.lastName);
        cy.xpath(`//input[@id='signupEmail']`).type(user.email);
        cy.xpath(`//input[@id='signupPassword']`).type(user.userPassword);
        cy.xpath(`//input[@id='signupRepeatPassword']`).type(user.userPassword);
        return this;
    }

    verifyFilledRegistrationData(user) {
        cy.xpath(`//input[@id='signupName']`).should('have.value', user.name);
        cy.xpath(`//input[@id='signupLastName']`).should('have.value', user.lastName);
        cy.xpath(`//input[@id='signupEmail']`).should('have.value', user.email);
        cy.xpath(`//input[@id='signupPassword']`).should('have.value', user.userPassword);
        cy.xpath(`//input[@id='signupRepeatPassword']`).should('have.value', user.userPassword);
        return this;
    }

    get registerButton() {
        return cy.xpath(`//button[@class='btn btn-primary']`);
    }

    verifyCreatedUser(user) {
        cy.url().should('include', '/panel/garage');
        basePage.sidebarProfileButton.click();
        cy.url().should('include', '/panel/profile');
        cy.xpath(`//p[@class='profile_name display-4']`).should('contain.text', `${user.name} ${user.lastName}`);
    }
}

export const homePage = new HomePage();