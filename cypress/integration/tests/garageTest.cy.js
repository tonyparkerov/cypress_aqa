import {user} from "../data/User";
import {car} from "../data/testData";
import {garageStep} from "../steps/garage-step";
import {fuelExpensesStep} from "../steps/fuelExpenses-step";

describe('Test Suite', () => {
  before(() => {
    cy.visit('/');
    garageStep.signUp(user);
  })

  beforeEach(() => {
    garageStep.signIn(user);
  })

  it('Check car added', () => {
    garageStep.addCar(car).verifyCarAdded(car);
  });

  it('Check fuel expense added', () => {
    fuelExpensesStep.visitFuelExpenses();
    fuelExpensesStep.addFuelExpenses(car).verifyAddedFuelExpenses(car);
  });

  it('Check fuel expense removed', () => {
    fuelExpensesStep.visitFuelExpenses();
    fuelExpensesStep.removeFuelExpenses().verifyRemovedFuelExpenses();
  });

  it('Check car removed', () => {
    garageStep.removeCar().verifyCarRemoved()
  });
})