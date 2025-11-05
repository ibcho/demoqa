import { Page, Locator } from '@playwright/test';

/**
 * POM for Elements > Radio Button
 */
export class RadioButtonPage {
    readonly page: Page;
    readonly yesRadio: Locator;
    readonly impressiveRadio: Locator;
    readonly noRadio: Locator;
    readonly yesLabel: Locator;
    readonly impressiveLabel: Locator;
    readonly noLabel: Locator;
    readonly resultText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.yesRadio = page.locator('#yesRadio');
        this.impressiveRadio = page.locator('#impressiveRadio');
        this.noRadio = page.locator('#noRadio');
        this.yesLabel = page.locator('label[for="yesRadio"]');
        this.impressiveLabel = page.locator('label[for="impressiveRadio"]');
        this.noLabel = page.locator('label[for="noRadio"]');
        this.resultText = page.locator('.text-success');
    }

    async selectYes() {
        await this.yesLabel.click();
    }

    async selectImpressive() {
        await this.impressiveLabel.click();
    }

    async isYesEnabled() {
        return await this.yesRadio.isEnabled();
    }

    async isImpressiveEnabled() {
        return await this.impressiveRadio.isEnabled();
    }

    async isNoDisabled() {
        return !(await this.noRadio.isEnabled());
    }
}


