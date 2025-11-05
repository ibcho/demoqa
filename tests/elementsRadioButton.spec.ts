import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { ElementsSidebar } from './pages/elements/ElementsSidebar';
import { RadioButtonPage } from './pages/elements/RadioButtonPage';

test.describe('Elements - Radio Button', () => {
  test('checks enabled/disabled states and selection', async ({ page }) => {
    const homePage = new HomePage(page);
    const sidebar = new ElementsSidebar(page);
    const radioPage = new RadioButtonPage(page);

    await homePage.goto();
    await homePage.clickElementsCard();
    await sidebar.openRadioButton();

    // Assert enabled/disabled states
    await expect(radioPage.yesRadio).toBeEnabled();
    await expect(radioPage.impressiveRadio).toBeEnabled();
    await expect(radioPage.noRadio).toBeDisabled();

    // Interaction sanity check
    await radioPage.selectYes();
    await expect(radioPage.resultText).toHaveText('Yes');

    await radioPage.selectImpressive();
    await expect(radioPage.resultText).toHaveText('Impressive');
  });
});


