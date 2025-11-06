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

    /** Navigate to the 'Text Box' page. */
    async openTextBox(): Promise<void> {
        await this.textBoxMenu.click();
    }

    /** Navigate to the 'Check Box' page. */
    async openCheckBox(): Promise<void> {
        await this.checkBoxMenu.click();
    }

    /** Navigate to the 'Radio Button' page. */
    async openRadioButton(): Promise<void> {
        await this.radioButtonMenu.click();
    }

    /** Navigate to the 'Web Tables' page. */
    async openWebTables(): Promise<void> {
        await this.webTablesMenu.click();
    }
}


