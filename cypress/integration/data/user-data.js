import User from "./models/user-model";
import {faker} from "@faker-js/faker";
export const randUser = new User(
    faker.person.firstName(),
    faker.person.lastName(),
    faker.internet.email(),
    faker.internet.password()
);