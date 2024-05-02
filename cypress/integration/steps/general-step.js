import {homePage} from "../pages/HomePage";

export default class GeneralStep {
    signUp(user) {
        cy.visit('/');
        homePage.signUpButton.click();
        homePage.fillRegistrationData(user).registerButton.click();
    }
    signIn(user) {
        cy.visit('/');
        homePage.signInButton.click();
        homePage.signInModalEmailInput.type(user.email);
        homePage.signInModalPasswordInput.type(user.password);
        homePage.signInModalLoginButton.click();
    }
}