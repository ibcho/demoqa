import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { ElementsSidebar } from './pages/elements/ElementsSidebar';
import { TextBoxPage } from './pages/elements/TextBoxPage';

test.describe('Elements - Text Box', () => {
  const isCI = !!(globalThis as any).process?.env?.CI;
  test.skip(isCI, 'External site not reachable in CI');
  test('fills and submits the Text Box form', async ({ page }) => {
    const homePage = new HomePage(page);
    const sidebar = new ElementsSidebar(page);
    const textBoxPage = new TextBoxPage(page);

    await homePage.goto();
    await homePage.clickElementsCard();
    await sidebar.openTextBox();
    await textBoxPage.fillFullName('Ibrahim Gavazov');
    await textBoxPage.fillEmail('ibrawokring@gmail.com');
    await textBoxPage.emailInput.press('Tab');
    await textBoxPage.fillCurrentAddress('Current Address TEST');
    await textBoxPage.fillPermanentAddress('Permament Address TEST');
    await textBoxPage.submitForm();

    await expect(textBoxPage.outputName).toBeVisible();
    await expect(textBoxPage.outputEmail).toBeVisible();
    await expect(textBoxPage.outputCurrentAddress).toBeVisible();
    await expect(textBoxPage.outputPermanentAddress).toBeVisible();
  });
});


