import {randUser} from "../data/user-data";
import {car} from "../data/testData";
import {garageStep} from "../steps/garage-step";
import {fuelExpensesStep} from "../steps/fuelExpenses-step";

describe('Test Suite', () => {
  before(() => {
    garageStep.signUp(randUser);
  })

  beforeEach(() => {
    garageStep.signIn(randUser);
  })

  it('Check car added', () => {
    garageStep.addCar(car);
    garageStep.verifyCarAdded(car)
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