import {user} from "../data/User";
import {car, carPorsche, fuelExpenses} from "../data/testData";
import {garageStep} from "../steps/garage-step";
import {apiValidator} from "../api/ApiValidator";
import {fuelExpensesStep} from "../steps/fuelExpenses-step";

describe('Test with api requests', () => {
    it('Sign Up via API', () => {
        cy.request('POST', '/api/auth/signup', user).then(response => {
            expect(response.status).to.eql(201);
        })
    })

    it('Add car and check it via API', () => {
        garageStep.signIn(user);
        garageStep.addCar(car);
        cy.get('@carId').then(carId => {
            car.carId = carId;
            cy.request('GET', '/api/cars').then(response => {
                apiValidator.verifyAddedCarInGetCars(response, car);
            })
        })
    });

    it('Add fuel expenses via API',() => {
        garageStep.signIn(user);
        garageStep.addCar(carPorsche);
        cy.get('@carId').then(carId => {
            fuelExpenses.carId = carId;
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