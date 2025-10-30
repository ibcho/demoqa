import { Page, Locator } from '@playwright/test';

/**
 * Page Object Model for the ABV.bg Home Page
 */
export class HomePage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        // Selector for the username input
        this.usernameInput = page.locator('input[name="username"]');
        // Selector for the password input
        this.passwordInput = page.locator('input[name="password"]');
        // Selector for the login button (by visible text 'Вход')
        this.loginButton = page.getByRole('button', { name: 'Вход' });
    }

    /**
     * Navigate to the ABV.bg home page
     */
    async goto() {
        await this.page.goto('https://www.abv.bg/');
    }

    /**
     * Log in using the provided username and password
     */
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
