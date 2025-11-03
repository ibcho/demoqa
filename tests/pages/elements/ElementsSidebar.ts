import { Page, Locator } from '@playwright/test';

/**
 * Sidebar navigation for the Elements section
 */
export class ElementsSidebar {
    readonly page: Page;
    readonly textBoxMenu: Locator;
    readonly checkBoxMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.textBoxMenu = page.getByRole('listitem').filter({ hasText: 'Text Box' });
        this.checkBoxMenu = page.getByRole('listitem').filter({ hasText: 'Check Box' });
    }

    async openTextBox() {
        await this.textBoxMenu.click();
    }

    async openCheckBox() {
        await this.checkBoxMenu.click();
    }
}


