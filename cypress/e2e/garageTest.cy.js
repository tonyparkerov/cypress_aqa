import {user, car} from "../data/testData";
import {garageStep} from "../steps/garage-step";
import {fuelExpensesStep} from "../steps/fuelExpenses-step";
import {fuelExpensesPage} from "../pages/FuelExpensesPage";

describe('Test Suite', () => {
  before(() => {
    cy.visit('/');
    garageStep.signUp(user);
  })

  beforeEach(() => {
    cy.visit('/');
    garageStep.signIn(user);
  })

  it('Check car added', () => {
    garageStep.addCar(car).verifyCarAdded(car);
  });

  it('Check fuel expense added', () => {
    fuelExpensesPage.visitFuelExpenses();
    fuelExpensesStep.addFuelExpenses(car).verifyAddedFuelExpenses(car);
  });

  it('Check fuel expense removed', () => {
    fuelExpensesPage.visitFuelExpenses();
    fuelExpensesStep.removeFuelExpenses().verifyRemovedFuelExpenses();
  });

  it('Check car removed', () => {
    garageStep.removeCar().verifyCarRemoved()
  });
})