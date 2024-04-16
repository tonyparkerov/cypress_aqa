import {homePage} from "../pages/HomePage";
import {user} from "../data/testData";

describe('Test Suite', () => {
  it('Test sign up in Garage service', () => {
    cy.visit('/');
    homePage.signUpButton.click();
    homePage.fillRegistrationData(user).verifyFilledRegistrationData(user).registerButton.click();
    homePage.verifyCreatedUser(user);
  })
})