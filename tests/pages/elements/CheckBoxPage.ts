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

    /**
     * Clicks the nth expand/collapse icon within the tree (0-based index).
     */
    async clickTreeIconAt(index: number): Promise<void> {
        await this.treeRoot.getByRole('img').nth(index).click();
    }

    /**
     * Clicks the nth path element inside the SVG tree (0-based index).
     * Prefer label clicks when possible; this is a lower-level helper.
     */
    async clickTreePathAt(index: number): Promise<void> {
        await this.page.locator('#tree-node path').nth(index).click();
    }

    // Backward-compatible aliases (kept for now)
    async clickNthIcon(n: number): Promise<void> { await this.clickTreeIconAt(n); }
    async clickNthPath(n: number): Promise<void> { await this.clickTreePathAt(n); }
}


