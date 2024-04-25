class ApiValidator {
    verifyAddedCarInGetCars(response, car) {
        expect(response.status).to.eql(200);
        expect(response.body.data.length).to.eql(1);
        expect(response.body.data[0].id).to.eql(car.carId);
        expect(response.body.data[0].brand).to.eql(car.brand);
        expect(response.body.data[0].model).to.eql(car.model);
        expect(response.body.data[0].initialMileage).to.eql(car.mileage);
        expect(response.body.data[0].mileage).to.eql(car.mileage);
        expect(response.body.data[0].logo).to.eql(`${car.brand.toLowerCase()}.png`);
        return this.verifyAddedCarInGetCars;
    }
    verifyAddFuelExpensesResponse(response, fuelExpenses) {
        expect(response.status).to.eql(200);
        expect(response.body.status).to.eql('ok');
        expect(response.body.data.carId).to.eql(fuelExpenses.carId);
        expect(response.body.data.reportedAt).to.eql(fuelExpenses.reportedAt);
        expect(response.body.data.mileage).to.eql(fuelExpenses.mileage);
        expect(response.body.data.liters).to.eql(fuelExpenses.liters);
        expect(response.body.data.totalCost).to.eql(fuelExpenses.totalCost);
        return this.verifyAddFuelExpensesResponse;
    }
}

export const apiValidator = new ApiValidator();