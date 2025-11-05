import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test.describe('Home - Navigation and visibility', () => {
  const isCI = !!(globalThis as any).process?.env?.CI;
  test.skip(isCI, 'External site not reachable in CI');
  test('shows Elements card on homepage', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(homePage.elementsCard).toBeVisible();
  });
});


