import { Page, Locator } from '@playwright/test';

/**
 * Page Object Model for the DemoQA.com Home Page
 */
export class HomePage {
    readonly page: Page;
	readonly elementsCard: Locator;
	readonly formsCard: Locator;
	readonly alertsFrameWindowsCard: Locator;
	readonly widgetsCard: Locator;
	readonly interactionsCard: Locator;
	readonly bookStoreCard: Locator;

    constructor(page: Page) {
        this.page = page;
		// Homepage cards (selected by visible card titles for readability)
		this.elementsCard = this.getCard('Elements');
		this.formsCard = this.getCard('Forms');
		this.alertsFrameWindowsCard = this.getCard('Alerts, Frame & Windows');
		this.widgetsCard = this.getCard('Widgets');
		this.interactionsCard = this.getCard('Interactions');
		this.bookStoreCard = this.getCard('Book Store Application');
    }

	/**
	 * Returns the dashboard card by its visible title.
	 */
	private getCard(title: string): Locator {
		return this.page.locator('div').filter({ hasText: new RegExp(`^${title}$`) }).first();
	}

    /**
     * Navigate to the DemoQA.com home page
     */
    async goto() {
        await this.page.goto('/');
    }

    /**
     * Click on the 'Elements' card on the homepage
     */
    async clickElementsCard() {
        await this.elementsCard.click();
    }

	/**
	 * Click on the 'Forms' card on the homepage
	 */
	async clickFormsCard() {
		await this.formsCard.click();
	}

	/**
	 * Click on the 'Alerts, Frame & Windows' card on the homepage
	 */
	async clickAlertsFrameWindowsCard() {
		await this.alertsFrameWindowsCard.click();
	}

	/**
	 * Click on the 'Widgets' card on the homepage
	 */
	async clickWidgetsCard() {
		await this.widgetsCard.click();
	}

	/**
	 * Click on the 'Interactions' card on the homepage
	 */
	async clickInteractionsCard() {
		await this.interactionsCard.click();
	}

	/**
	 * Click on the 'Book Store' card on the homepage
	 */
	async clickBookStoreCard() {
		await this.bookStoreCard.click();
	}
}
