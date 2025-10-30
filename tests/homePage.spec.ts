import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test.describe('ABV.bg - Home Page', () => {
  test('Username and password fields and the login button should be visible', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    await expect(homePage.usernameInput).toBeVisible();
    await expect(homePage.passwordInput).toBeVisible();
    await expect(homePage.loginButton).toBeVisible();
  });
});
