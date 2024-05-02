class CarsApi {
    getCars() {
        return cy.request('GET', '/api/cars');
    }

    getCarsAndVerifyAddedCarInResponse(car){
        this.getCars().then(response => {
            expect(response.status).to.eql(200);
            expect(response.body.data.length).to.eql(1);
            expect(response.body.data[0].id).to.eql(car.carId);
            expect(response.body.data[0].brand).to.eql(car.brand);
            expect(response.body.data[0].model).to.eql(car.model);
            expect(response.body.data[0].initialMileage).to.eql(car.mileage);
            expect(response.body.data[0].mileage).to.eql(car.mileage);
            expect(response.body.data[0].logo).to.eql(`${car.brand.toLowerCase()}.png`);
        })
    }
}

export const carsApi = new CarsApi();