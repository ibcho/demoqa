import { Page, Locator } from '@playwright/test';


export class RadioButtonPage {
    readonly page: Page;
    readonly yesRadio: Locator;
    readonly impressiveRadio: Locator;
    readonly noRadio: Locator;

    //labels
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

    async selectYes(): Promise<void> {
        await this.yesLabel.click();
    }

    async selectImpressive(): Promise<void> {
        await this.impressiveLabel.click();
    }

    async isYesEnabled(): Promise<boolean> {
        return this.yesRadio.isEnabled();
    }

    async isImpressiveEnabled(): Promise<boolean> {
        return this.impressiveRadio.isEnabled();
    }

    async isNoDisabled(): Promise<boolean> {
        const enabled = await this.noRadio.isEnabled();
        return !enabled;
    }
}


