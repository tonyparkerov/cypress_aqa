export default class BasePage {
    get headerLogo() {
        return cy.xpath(`//a[@class=''header_logo]`);
    }

    get headerGarageButton() {
        return cy.xpath(`//a[@routerlink='/panel/garage' and @routerlinkactive='-active']`);
    }

    get headerFuelExpensesButton() {
        return cy.xpath(`//a[@routerlink='/panel/expenses' and @routerlinkactive='-active']`);
    }

    get headerInstructionsButton() {
        return cy.xpath(`//a[@routerlink='/panel/instructions' and @routerlinkactive='-active']`);
    }

    get myProfileButton() {
        return cy.xpath(`//button[@id='userNavDropdown']`);
    }

    get myProfileDropdownGarageButton() {
        return cy.xpath(`//a[@routerlink='/panel/garage' and @routerlinkactive='disabled']`);
    }

    get myProfileDropdownFuelExpensesButton() {
        return cy.xpath(`//a[@routerlink='/panel/expenses' and @routerlinkactive='disabled']`);
    }

    get myProfileDropdownInstructionsButton() {
        return cy.xpath(`//a[@routerlink='/panel/instructions' and @routerlinkactive='disabled']`);
    }

    get myProfileDropdownProfileButton() {
        return cy.xpath(`//a[@routerlink='/panel/profile' and @routerlinkactive='disabled']`);
    }

    get myProfileDropdownSettingsButton() {
        return cy.xpath(`//a[@routerlink='/panel/settingss' and @routerlinkactive='disabled']`);
    }

    get myProfileDropdownLogOutButton() {
        return cy.xpath(`//button[@class='dropdown-item btn btn-link user-nav_link']`);
    }

    get sidebarGarageButton() {
        return cy.xpath(`//a[@routerlink='garage']`);
    }

    get sidebarFuelExpensesButton() {
        return cy.xpath(`//a[@routerlink='expenses']`);
    }

    get sidebarInstructionsButton() {
        return cy.xpath(`//a[@routerlink='instructions']`);
    }

    get sidebarProfileButton() {
        return cy.xpath(`//a[@routerlink='profile']`);
    }

    get sidebarSettingsButton() {
        return cy.xpath(`//a[@routerlink='settings']`);
    }

    get sidebarLogOutButton() {
        return cy.xpath(`//a[@class='btn btn-link text-danger btn-sidebar sidebar_btn']`);
    }

    get footerText() {
        return cy.xpath(`//div[@class='col-7 d-flex flex-column justify-content-center footer_item -left']`);
    }

    get footerLogo() {
        return cy.xpath(`//a[@class='footer_logo']`);
    }
}