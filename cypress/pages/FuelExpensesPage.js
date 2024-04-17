import BasePage from "./BasePage";

class FuelExpensesPage extends BasePage {
    visitFuelExpenses() {
        this.headerFuelExpensesButton.click();
        return this;
    }

    get emptyState() {
        return cy.xpath(`//div[@class='panel-page_empty panel-empty']`);
    }

    get emptyStateGarageLink() {
        return cy.xpath(`//p[@class='h3 panel-empty_message']/a[@routerlink='/panel/garage']`);
    }

    get addExpenseButton() {
        return cy.xpath(`//button[@class='btn btn-primary']`);
    }

    get carSelectDropdown() {
        return cy.xpath(`//button[@id='carSelectDropdown']`);
    }

    get closeModalButton() {
        return cy.xpath(`//button[@class='close']`);
    }

    get cancelButton() {
        return cy.xpath(`//button[@class='btn btn-secondary']`);
    }

    get removeButton() {
        return cy.xpath(`//button[@class='btn btn-danger']`);
    }

    get addButton() {
        return cy.xpath(`//button[@type='button' and @class='btn btn-primary']`);
    }

    get expenseVehicleDropdown() {
        return cy.xpath(`//select[@id='addExpenseCar']`);
    }

    get expenseReportDateInput() {
        return cy.xpath(`//input[@id='addExpenseDate']`);
    }

    get expenseMileageInput() {
        return cy.xpath(`//input[@id='addExpenseMileage']`);
    }

    get expenseNumberOfLitersInput() {
        return cy.xpath(`//input[@id='addExpenseLiters']`);
    }

    get expenseTotalCostInput() {
        return cy.xpath(`//input[@id='addExpenseTotalCost']`);
    }

    get inputsValidationMessage() {
        return cy.xpath(`//div[@class='invalid-feedback']`);
    }

    get expenseErrorAlert() {
        return cy.xpath(`//p[@class='alert alert-danger']`);
    }

    get table() {
        return cy.xpath(`//table[@class='table expenses_table']`);
    }

    get removeEntryButton() {
        return cy.xpath(`//button[@class='btn btn-delete']`);
    }

    get removeEntryModalText() {
        return cy.xpath(`//div[@class='modal-body']`);
    }

    get editExpenseButton() {
        return cy.xpath(`//button[@class='btn btn-edit']`);
    }
}

export const fuelExpensesPage = new FuelExpensesPage();