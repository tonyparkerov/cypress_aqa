import {user} from "../data/User";
import {car} from "../data/testData";
import {garageStep} from "../steps/garage-step";

describe('Test with api requests', () => {
    it('Sign Up via API', () => {
        cy.request('POST', '/api/auth/signup', user).then(response => {
            expect(response.status).to.eql(201);
        })
    })

    it('Add car and check it via API', () => {
        cy.visit('/');
        garageStep.signIn(user);
        garageStep.addCar(car);
        cy.request('GET', '/api/cars').then(response => {
            expect(response.status).to.eql(200);
            expect(response.body.data.length).to.eql(1);
            expect(response.body.data[0].brand).to.eql(car.brand);
            expect(response.body.data[0].model).to.eql(car.model);
            expect(response.body.data[0].initialMileage).to.eql(car.mileage);
            expect(response.body.data[0].mileage).to.eql(car.mileage);
            expect(response.body.data[0].logo).to.eql(`${car.brand.toLowerCase()}.png`);
        })
    });
})