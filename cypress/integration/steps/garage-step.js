import GeneralStep from "./general-step";
import {garagePage} from "../pages/GaragePage";

class GarageStep extends GeneralStep {
    addCar(car) {
        garagePage.addCarButton.click();
        garagePage.carBrandDropdown.select(car.brand);
        garagePage.carModelDropdown.select(car.model);
        garagePage.carMileageInput.type(car.mileage);
        cy.intercept('POST', '/api/cars').as('addCar');
        garagePage.addButton.click();
        return cy.wait('@addCar').then(interception => {
            expect(interception.response.statusCode).to.eql(201);
            const carId = interception.response.body.data.id;
            cy.wrap(carId).as('carId');
            cy.get('@carId').then(carId => car.carId = carId);
            cy.writeFile('cypress/integration/fixtures/response.json', interception.response.body);
        });
        //return this;
    }

    verifyCarAdded(car) {
        garagePage.addedCarName.eq(0).should('contain.text', `${car.brand} ${car.model}`);
        garagePage.addedCarUpdateMileageInput.eq(0).should('have.value', `${car.mileage}`);
    }

    removeCar() {
        garagePage.addedCarEditButton.eq(0).click();
        garagePage.editCarModalRemoveCarButton.click();
        garagePage.removeCarModalRemoveButton.click();
        return this;
    }

    verifyCarRemoved() {
        garagePage.addedCarName.should('not.exist');
        garagePage.addedCarUpdateMileageInput.should('not.exist');
        garagePage.emptyState.should('be.visible');
    }
}

export const garageStep = new GarageStep();