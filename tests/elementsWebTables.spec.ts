import { test } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { ElementsSidebar } from './pages/elements/ElementsSidebar';
import { WebTablesPage, WebTableRecord } from './pages/elements/WebTablesPage';

test.describe('Elements - Web Tables', () => {
  const isCI = !!(globalThis as any).process?.env?.CI;
  test.skip(isCI, 'External site not reachable in CI');

  test('adds record and verifies row dynamically', async ({ page }) => {
    const homePage = new HomePage(page);
    const sidebar = new ElementsSidebar(page);
    const webTables = new WebTablesPage(page);

    const record: WebTableRecord = {
      firstName: 'Ibrahim',
      lastName: 'Gavazov',
      email: 'ibrawokring@gmail.com',
      age: 33,
      salary: 1111111,
      department: 'QA',
    };

    await homePage.goto();
    await homePage.clickElementsCard();
    await sidebar.openWebTables();

    await webTables.addRecord(record);
    // Verify it appears as the 4th row specifically
    await webTables.expectRowAt(4, record);
  });
});


