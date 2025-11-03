import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { ElementsSidebar } from './pages/elements/ElementsSidebar';
import { CheckBoxPage } from './pages/elements/CheckBoxPage';

test.describe('Elements - Check Box', () => {
  let checkBoxPage: CheckBoxPage;

  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    const sidebar = new ElementsSidebar(page);
    checkBoxPage = new CheckBoxPage(page);

    await homePage.goto();
    await homePage.clickElementsCard();
    await sidebar.openCheckBox();
  });

  test('toggles result visibility when selecting/deselecting', async ({ page }) => {

    // Perform the clicks and validate visibility toggles for #result
    await page.locator('#tree-node').getByRole('img').nth(3).click();
    await expect(checkBoxPage.resultPanel).toBeVisible();
    await page.locator('#tree-node path').nth(3).click();
    await expect(checkBoxPage.resultPanel).toBeHidden();
  });

  test('test', async ({ page }) => {
    // Click the root uncheck icon (select all)
    await page.locator('.rct-icon.rct-icon-uncheck').click();

    // Validate full selected result text
    await expect(page.locator('#result')).toContainText(
      'You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile'
    );

    // Expand Home
    await page.getByRole('button', { name: 'Toggle' }).click();
    await expect(page.getByText('Desktop', { exact: true })).toBeVisible();
    await expect(page.getByText('Documents', { exact: true })).toBeVisible();
    await expect(page.getByText('Downloads', { exact: true })).toBeVisible();

    // Expand Desktop
    await page.getByRole('button', { name: 'Toggle' }).nth(1).click();
    await expect(page.locator('span').filter({ hasText: 'Notes' }).first()).toBeVisible();
    await expect(page.getByText('Commands', { exact: true })).toBeVisible();

    // Expand Documents
    await page.getByRole('button', { name: 'Toggle' }).nth(2).click();
    await page.getByRole('button', { name: 'Toggle' }).nth(3).click();
    await page.getByRole('button', { name: 'Toggle' }).nth(4).click();

    // Verify children are visible
    await expect(page.locator('span').filter({ hasText: 'WorkSpace' }).first()).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'React' }).first()).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'Angular' }).first()).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'Veu' }).first()).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'Office' }).first()).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'Public' }).first()).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'Private' }).first()).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'Classified' }).first()).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'General' }).first()).toBeVisible();

    // Expand Downloads
    await page.getByRole('button', { name: 'Toggle' }).nth(5).click();
    await expect(page.locator('span').filter({ hasText: 'Word File.doc' }).first()).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'Excel File.doc' }).first()).toBeVisible();
  });
  
});


