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
		// Homepage cards
		this.elementsCard = page.locator('div').filter({ hasText: /^Elements$/ }).first();
		this.formsCard = page.locator('div').filter({ hasText: /^Forms$/ }).first();
		this.alertsFrameWindowsCard = page.locator('div').filter({ hasText: /^Alerts, Frame & Windows$/ }).first();
		this.widgetsCard = page.locator('div').filter({ hasText: /^Widgets$/ }).first();
		this.interactionsCard = page.locator('div').filter({ hasText: /^Interactions$/ }).first();
		this.bookStoreCard = page.locator('div:nth-child(6) > div > .card-up');
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
