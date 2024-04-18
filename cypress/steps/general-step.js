import {homePage} from "../pages/HomePage";

export default class GeneralStep {
    signUp(user) {
        homePage.signUpButton.click();
        homePage.fillRegistrationData(user).registerButton.click();
    }
    signIn(user) {
        homePage.signInButton.click();
        homePage.signInModalEmailInput.type(user.email);
        homePage.signInModalPasswordInput.type(user.password);
        homePage.signInModalLoginButton.click();
    }
}