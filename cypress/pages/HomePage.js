import BasePage from "./BasePage";

const basePage = new BasePage();

class HomePage {
    get signUpButton() {
        return cy.xpath(`//button[@class='hero-descriptor_btn btn btn-primary']`);
    }

    registerUser(user) {
        cy.xpath(`//input[@id='signupName']`).type(user.name);
        cy.xpath(`//input[@id='signupLastName']`).type(user.lastName);
        cy.xpath(`//input[@id='signupEmail']`).type(user.email);
        cy.xpath(`//input[@id='signupPassword']`).type(user.userPassword);
        cy.xpath(`//input[@id='signupRepeatPassword']`).type(user.userPassword);
        cy.xpath(`//button[@class='btn btn-primary']`).click();
        return this;
    }

    verifyCreatedUser(user) {
        cy.url().should('include', '/panel/garage');
        basePage.sidebarProfileButton.click();
        cy.url().should('include', '/panel/profile');
        cy.xpath(`//p[@class='profile_name display-4']`).should('contain.text', `${user.name} ${user.lastName}`);
    }
}

export const homePage = new HomePage();