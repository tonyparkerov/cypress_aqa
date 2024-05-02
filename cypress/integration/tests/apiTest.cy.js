import {user} from "../data/User";
import {car, carPorsche, fuelExpenses} from "../data/testData";
import {garageStep} from "../steps/garage-step";
import {apiValidator} from "../api/ApiValidator";
import {fuelExpensesStep} from "../steps/fuelExpenses-step";
import {userApi} from "../api/UserApi";
import {carsApi} from "../api/CarsApi";

describe('Test with api requests', () => {
    it('Sign Up via API', () => {
        userApi.signup(user);
    })

    it('Add car and check it via API', () => {
        garageStep.signIn(user);
        garageStep.addCar(car);
        carsApi.getCarsAndVerifyAddedCarInResponse(car);
    });

    it('Add fuel expenses via API',() => {
        garageStep.signIn(user);
        garageStep.addCar(carPorsche).then(response => {
            fuelExpenses.carId = carPorsche.carId;
            cy.apiAddFuelExpenses(fuelExpenses).then(response => {
                apiValidator.verifyAddFuelExpensesResponse(response, fuelExpenses);
            });
        })
    });

    it('Check added fuel expenses',() => {
        fuelExpensesStep.signIn(user);
        fuelExpensesStep.visitFuelExpenses();
        fuelExpensesStep.verifyAddedFuelExpenses(fuelExpenses, true);
    });
})