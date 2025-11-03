import { Page, Locator } from '@playwright/test';

/**
 * POM for Elements > Text Box
 */
export class TextBoxPage {
    readonly page: Page;
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
        this.fullNameInput = page.getByRole('textbox', { name: 'Full Name' });
        this.emailInput = page.getByRole('textbox', { name: 'name@example.com' });
        this.currentAddressInput = page.getByRole('textbox', { name: 'Current Address' });
        this.permanentAddressInput = page.locator('#permanentAddress');
        this.submitButton = page.getByRole('button', { name: 'Submit' });

        // NOTE: Consider parameterizing these when asserting
        this.outputName = page.getByText('Name:Ibrahim Gavazov');
        this.outputEmail = page.getByText('Email:ibrawokring@gmail.com');
        this.outputCurrentAddress = page.getByText('Current Address :Current');
        this.outputPermanentAddress = page.getByText('Permananet Address :Permament');
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


