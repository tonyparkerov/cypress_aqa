import Car from "./models/car-model";
import {brands, models} from "./constants/car-constants";
import {faker} from "@faker-js/faker";

export const generateRandomCar = () => {
    const brand = faker.helpers.arrayElement(brands);
    const model = faker.helpers.arrayElement(models[brand]);
    const mileage = faker.number.int({min: 1, max: 100});
    return new Car(brand, model, mileage);
};