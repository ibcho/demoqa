import { Page, Locator } from '@playwright/test';

/**
 * Page Object Model for the DemoQA.com Elements Section (Text Box)
 */
export class ElementsPage {
    readonly page: Page;
    readonly textBoxMenu: Locator;
    readonly fullNameInput: Locator;
    readonly emailInput: Locator;
    readonly currentAddressInput: Locator;
    readonly permanentAddressInput: Locator;
    readonly submitButton: Locator;
    readonly outputName: Locator;
    readonly outputEmail: Locator;
    readonly outputCurrentAddress: Locator;
    readonly outputPermanentAddress: Locator;

    constructor(page: Page) {
        this.page = page;
        // Sidebar 'Text Box' menu item
        this.textBoxMenu = page.getByRole('listitem').filter({ hasText: 'Text Box' });
        this.fullNameInput = page.getByRole('textbox', { name: 'Full Name' });
        this.emailInput = page.getByRole('textbox', { name: 'name@example.com' });
        this.currentAddressInput = page.getByRole('textbox', { name: 'Current Address' });
        this.permanentAddressInput = page.locator('#permanentAddress');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        
        this.outputName = page.getByText('Name:Ibrahim Gavazov'); // should parameterize for reuse
        this.outputEmail = page.getByText('Email:ibrawokring@gmail.com');
        this.outputCurrentAddress = page.getByText('Current Address :Current');
        this.outputPermanentAddress = page.getByText('Permananet Address :Permament');
    }
    // Example action method
    async navigateToTextBox() {
        await this.textBoxMenu.click();
    }
    async fillFullName(name: string) {
        await this.fullNameInput.fill(name);
    }
    async fillEmail(email: string) {
        await this.emailInput.fill(email);
    }
    async fillCurrentAddress(address: string) {
        await this.currentAddressInput.fill(address);
    }
    async fillPermanentAddress(address: string) {
        await this.permanentAddressInput.fill(address);
    }
    async submitForm() {
        await this.submitButton.click();
    }
}
