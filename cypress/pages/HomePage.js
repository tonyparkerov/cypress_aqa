import BasePage from "./BasePage";

const basePage = new BasePage();

class HomePage {
    get signUpButton() {
        return cy.xpath(`//button[@class='hero-descriptor_btn btn btn-primary']`);
    }

    get signupNameInput() {
        return cy.xpath(`//input[@id='signupName']`);
    }

    get signupLastNameInput() {
        return cy.xpath(`//input[@id='signupLastName']`);
    }

    get signupEmailInput() {
        return cy.xpath(`//input[@id='signupEmail']`);
    }

    get signupPasswordInput() {
        return cy.xpath(`//input[@id='signupPassword']`);
    }

    get signupRepeatPasswordInput() {
        return cy.xpath(`//input[@id='signupRepeatPassword']`);
    }

    fillRegistrationData(user) {
        this.signupNameInput.type(user.name);
        this.signupLastNameInput.type(user.lastName);
        this.signupEmailInput.type(user.email);
        this.signupPasswordInput.type(user.userPassword);
        this.signupRepeatPasswordInput.type(user.userPassword);
        return this;
    }

    verifyFilledRegistrationData(user) {
        this.signupNameInput.should('have.value', user.name);
        this.signupLastNameInput.should('have.value', user.lastName);
        this.signupEmailInput.should('have.value', user.email);
        this.signupPasswordInput.should('have.value', user.userPassword);
        this.signupRepeatPasswordInput.should('have.value', user.userPassword);
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