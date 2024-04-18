import GeneralStep from "./general-step";
import {fuelExpensesPage} from "../pages/FuelExpensesPage";

class FuelExpensesStep extends GeneralStep {
    addFuelExpenses(car) {
        fuelExpensesPage.addExpenseButton.click();
        fuelExpensesPage.expenseVehicleDropdown.select(`${car.brand} ${car.model}`);
        fuelExpensesPage.expenseReportDateInput.clear().type(`${car.reportDate}`);
        fuelExpensesPage.expenseMileageInput.clear().type(car.expenseMileage);
        fuelExpensesPage.expenseNumberOfLitersInput.type(car.liters);
        fuelExpensesPage.expenseTotalCostInput.type(car.totalCost);
        fuelExpensesPage.addButton.click();
        return this;
    }

    verifyAddedFuelExpenses(car) {
        fuelExpensesPage.tableFirstRow.eq(0).should('contain.text', `${car.reportDate}`);
        fuelExpensesPage.tableFirstRow.eq(1).should('contain.text', `${car.expenseMileage}`);
        fuelExpensesPage.tableFirstRow.eq(2).should('contain.text', `${car.liters}`);
        fuelExpensesPage.tableFirstRow.eq(3).should('contain.text', `${car.totalCost}`);
    }

    removeFuelExpenses() {
        fuelExpensesPage.removeEntryButton.click({ force: true });
        fuelExpensesPage.removeButton.click();
        return this;
    }

    verifyRemovedFuelExpenses() {
        fuelExpensesPage.table.should('not.exist');
        fuelExpensesPage.emptyState.should('be.visible');
    }
}

export const fuelExpensesStep = new FuelExpensesStep();