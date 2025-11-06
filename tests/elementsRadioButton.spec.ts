import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { ElementsSidebar } from './pages/elements/ElementsSidebar';
import { RadioButtonPage } from './pages/elements/RadioButtonPage';

test.describe('Elements - Radio Button', () => {
  const isCI = !!(globalThis as any).process?.env?.CI;
  test.skip(isCI, 'External site not reachable in CI');
  
  test('checks enabled/disabled states and selection', async ({ page }) => {
    const homePage = new HomePage(page);
    const sidebar = new ElementsSidebar(page);
    const radioPage = new RadioButtonPage(page);

    await test.step('Navigate to Radio Button page', async () => {
      await homePage.goto();
      await homePage.clickElementsCard();
      await sidebar.openRadioButton();
      await expect(page).toHaveURL(/.*radio-button/);
    });

    await test.step('Verify enabled/disabled states', async () => {
      await expect(radioPage.yesRadio).toBeEnabled();
      await expect(radioPage.impressiveRadio).toBeEnabled();
      await expect(radioPage.noRadio).toBeDisabled();
    });

    await test.step('Select and assert results', async () => {
      await radioPage.selectYes();
      await expect(radioPage.resultText).toHaveText('Yes');

      await radioPage.selectImpressive();
      await expect(radioPage.resultText).toHaveText('Impressive');
    });
  });
});


