import {randUser} from "../data/user-data";
import {car, carPorsche, fuelExpenses} from "../data/testData";
import {garageStep} from "../steps/garage-step";
import {apiValidator} from "../api/ApiValidator";
import {fuelExpensesStep} from "../steps/fuelExpenses-step";
import {userApi} from "../api/UserApi";
import {carsApi} from "../api/CarsApi";

describe('Test with api requests', () => {
    it('Sign Up via API', () => {
        userApi.signup(randUser);
    })

    it('Add car and check it via API', () => {
        garageStep.signIn(randUser);
        garageStep.addCar(car);
        carsApi.getCarsAndVerifyAddedCarInResponse(car);
    });

    it('Add fuel expenses via API',() => {
        garageStep.signIn(randUser);
        garageStep.addCar(carPorsche).then(() => {
            fuelExpenses.carId = carPorsche.carId;
            cy.apiAddFuelExpenses(fuelExpenses).then(response => {
                apiValidator.verifyAddFuelExpensesResponse(response, fuelExpenses);
            });
        })
    });

    it('Check added fuel expenses',() => {
        fuelExpensesStep.signIn(randUser);
        fuelExpensesStep.visitFuelExpenses();
        fuelExpensesStep.verifyAddedFuelExpenses(fuelExpenses, true);
    });
})