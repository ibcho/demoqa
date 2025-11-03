import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { ElementsPage } from './pages/ElementsPage';

test.describe('Elements - Text Box', () => {
  test('fills and submits the Text Box form', async ({ page }) => {
    const homePage = new HomePage(page);
    const elementsPage = new ElementsPage(page);

    await homePage.goto();
    await homePage.clickElementsCard();

    await elementsPage.navigateToTextBox();
    await elementsPage.fillFullName('Ibrahim Gavazov');
    await elementsPage.fillEmail('ibrawokring@gmail.com');
    await elementsPage.emailInput.press('Tab');
    await elementsPage.fillCurrentAddress('Current Address TEST');
    await elementsPage.fillPermanentAddress('Permament Address TEST');
    await elementsPage.submitForm();

    await expect(elementsPage.outputName).toBeVisible();
    await expect(elementsPage.outputEmail).toBeVisible();
    await expect(elementsPage.outputCurrentAddress).toBeVisible();
    await expect(elementsPage.outputPermanentAddress).toBeVisible();
  });
});


