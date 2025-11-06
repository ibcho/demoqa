import { Page, Locator } from '@playwright/test';

/**
 * Page Object Model for the DemoQA.com Elements Section (Text Box)
 */
export class ElementsPage {
    readonly page: Page;
    readonly fullNameInput: Locator;
    readonly emailInput: Locator;
    readonly currentAddressInput: Locator;
    readonly permanentAddressInput: Locator;
    readonly submitButton: Locator;
    readonly outputSection: Locator;
    readonly outputName: Locator;
    readonly outputEmail: Locator;
    readonly outputCurrentAddress: Locator;
    readonly outputPermanentAddress: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fullNameInput = page.getByRole('textbox', { name: 'Full Name' });
        this.emailInput = page.getByRole('textbox', { name: 'name@example.com' });
        this.currentAddressInput = page.getByRole('textbox', { name: 'Current Address' });
        this.permanentAddressInput = page.locator('#permanentAddress');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        
        // Generic output locators for reusability
        this.outputSection = page.locator('#output');
        this.outputName = this.outputSection.locator('#name');
        this.outputEmail = this.outputSection.locator('#email');
        this.outputCurrentAddress = this.outputSection.locator('#currentAddress');
        this.outputPermanentAddress = this.outputSection.locator('#permanentAddress');
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
