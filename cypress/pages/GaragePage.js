import BasePage from "./BasePage";

class GaragePage extends BasePage {
    visitGarage() {
        this.headerGarageButton.click();
        return this;
    }

    get emptyState() {
        return cy.xpath(`//div[@class='panel-page_empty panel-empty']`);
    }

    get addCarButton() {
        return cy.get('button').contains('Add car');
    }

    get carBrandDropdown() {
        return cy.xpath(`//select[@id='addCarBrand']`);
    }

    get carModelDropdown() {
        return cy.xpath(`//select[@id='addCarModel']`);
    }

    get carMileageInput() {
        return cy.xpath(`//input[@id='addCarMileage']`);
    }

    get inputsValidationMessage() {
        return cy.xpath(`//div[@class='invalid-feedback']`);
    }

    get closeModalButton() {
        return cy.xpath(`//button[@class='close']`);
    }

    get cancelButton() {
        return cy.xpath(`//button[@class='btn btn-secondary']`);
    }

    get addButton() {
        return cy.xpath(`//button[@type='button' and @class='btn btn-primary']`);
    }

    get addedCarLogo() {
        return cy.xpath(`//div[@class='car_logo car-logo']`);
    }

    get addedCarName() {
        return cy.get(`p.car_name.h2`);
    }

    get addedCarUpdateMileageInput() {
        return cy.xpath(`//input[@name='miles']`);
    }

    get addedCarUpdateMileageUpdateButton() {
        return cy.xpath(`//button[@class='update-mileage-form_submit btn btn-secondary btn-sm']`);
    }

    get addedCarUpdateMileageDate() {
        return cy.xpath(`//p[@class='car_update-mileage']`);
    }

    get addedCarEditButton() {
        return cy.xpath(`//button[@class='car_edit btn btn-edit']`);
    }

    get editCarModalCreationDateInput() {
        return cy.xpath(`//input[@id='carCreationDate']`);
    }

    get datePicker() {
        return cy.xpath(`//button[@class='btn date-picker-toggle']`);
    }

    get saveButton() {
        return cy.xpath(`//button[@type='button' and @class='btn btn-primary']`);
    }

    get editCarModalRemoveCarButton() {
        return cy.xpath(`//button[@class='btn btn-outline-danger']`);
    }

    get removeCarModalText() {
        return cy.xpath(`//div[@class='modal-body']`);
    }

    get removeCarModalRemoveButton() {
        return cy.xpath(`//button[@class='btn btn-danger']`);
    }

    get addFuelExpenseButton() {
        return cy.xpath(`//button[@class='car_add-expense btn btn-success']`);
    }

    get addExpenseModalVehicleDropdown() {
        return cy.xpath(`//select[@id='addExpenseCar']`);
    }

    get addExpenseModalReportDateInput() {
        return cy.xpath(`//input[@id='addExpenseDate']`);
    }

    get addExpenseModalMileageInput() {
        return cy.xpath(`//input[@id='addExpenseMileage']`);
    }

    get addExpenseModalNumberOfLitersInput() {
        return cy.xpath(`//input[@id='addExpenseLiters']`);
    }

    get addExpenseModalTotalCostInput() {
        return cy.xpath(`//input[@id='addExpenseTotalCost']`);
    }
}

export const garagePage = new GaragePage();