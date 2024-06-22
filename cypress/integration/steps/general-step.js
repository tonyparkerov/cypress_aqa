import {homePage} from "../pages/HomePage";

export default class GeneralStep {
    signUp(user) {
        cy.visit(Cypress.env('baseUrl'));
        homePage.signUpButton.click();
        homePage.fillRegistrationData(user).registerButton.click();
    }
    signIn(user) {
        cy.visit(Cypress.env('baseUrl'));
        homePage.signInButton.eq(0).click();
        homePage.signInModalEmailInput.type(user.email);
        homePage.signInModalPasswordInput.type(user.password);
        homePage.signInModalLoginButton.eq(0).click();
    }
}