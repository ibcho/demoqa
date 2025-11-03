import { Page, Locator } from '@playwright/test';

/**
 * POM for Elements > Check Box
 */
export class CheckBoxPage {
    readonly page: Page;
    readonly treeRoot: Locator;
    readonly resultPanel: Locator;
    readonly toggleButton: Locator;
    readonly desktopLabel: Locator;
    readonly documentsLabel: Locator;
    readonly downloadsLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.treeRoot = page.locator('#tree-node');
        this.resultPanel = page.locator('#result');
        this.toggleButton = page.getByRole('button', { name: 'Toggle' });
        this.desktopLabel = page.getByText('Desktop');
        this.documentsLabel = page.getByText('Documents');
        this.downloadsLabel = page.getByText('Downloads');
    }

    async clickNthIcon(n: number) {
        await this.treeRoot.getByRole('img').nth(n).click();
    }

    async clickNthPath(n: number) {
        await this.page.locator('#tree-node path').nth(n).click();
    }
}


