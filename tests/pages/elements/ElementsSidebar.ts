import { Page, Locator } from '@playwright/test';

/**
 * Sidebar navigation for the Elements section
 */
export class ElementsSidebar {
    readonly page: Page;
    readonly textBoxMenu: Locator;
    readonly checkBoxMenu: Locator;
    readonly radioButtonMenu: Locator;
    readonly webTablesMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.textBoxMenu = page.getByRole('listitem').filter({ hasText: 'Text Box' });
        this.checkBoxMenu = page.getByRole('listitem').filter({ hasText: 'Check Box' });
        this.radioButtonMenu = page.getByRole('listitem').filter({ hasText: 'Radio Button' });
        this.webTablesMenu = page.getByRole('listitem').filter({ hasText: 'Web Tables' });
    }

    async openTextBox() {
        await this.textBoxMenu.click();
    }

    async openCheckBox() {
        await this.checkBoxMenu.click();
    }

    async openRadioButton() {
        await this.radioButtonMenu.click();
    }

    async openWebTables() {
        await this.webTablesMenu.click();
    }
}


