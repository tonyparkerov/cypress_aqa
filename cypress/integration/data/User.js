import {faker} from "@faker-js/faker";
import {emailGenerator} from "./testData";

class User {
    constructor() {
        this.name = 'Anton';
        this.lastName = 'Test';
        this.email = emailGenerator(7);
        this.password = faker.internet.password();
        this.repeatPassword = this.password;

    }
}

export const user = new User();