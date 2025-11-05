import { Page, Locator, expect } from '@playwright/test';

export type WebTableRecord = {
    firstName: string;
    lastName: string;
    email: string;
    age: string | number;
    salary: string | number;
    department: string;
};

/**
 * POM for Elements > Web Tables
 */
export class WebTablesPage {
    readonly page: Page;
    readonly addButton: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly ageInput: Locator;
    readonly salaryInput: Locator;
    readonly departmentInput: Locator;
    readonly submitButton: Locator;
    readonly table: Locator;
    readonly rowGroups: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addButton = page.getByRole('button', { name: 'Add' });
        this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
        this.emailInput = page.getByRole('textbox', { name: 'name@example.com' });
        this.ageInput = page.getByRole('textbox', { name: 'Age' });
        this.salaryInput = page.getByRole('textbox', { name: 'Salary' });
        this.departmentInput = page.getByRole('textbox', { name: 'Department' });
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.table = page.getByRole('grid');
        // Each visible table row is rendered as a ".rt-tr-group"
        this.rowGroups = page.locator('.rt-tbody .rt-tr-group');
    }

    async addRecord(record: WebTableRecord) {
        await this.addButton.click();
        await this.firstNameInput.fill(record.firstName);
        await this.lastNameInput.fill(record.lastName);
        await this.emailInput.fill(record.email);
        await this.ageInput.fill(String(record.age));
        await this.salaryInput.fill(String(record.salary));
        await this.departmentInput.fill(record.department);
        await this.submitButton.click();
    }

    async expectRowPresent(record: WebTableRecord) {
        const row = this.page.locator('.rt-tr-group').filter({
            has: this.page.getByRole('gridcell', { name: record.email })
        });

        await expect(row).toHaveCount(1);
        await expect(row.getByRole('gridcell', { name: record.firstName })).toBeVisible();
        await expect(row.getByRole('gridcell', { name: record.lastName })).toBeVisible();
        await expect(row.getByRole('gridcell', { name: String(record.age) })).toBeVisible();
        await expect(row.getByRole('gridcell', { name: record.email })).toBeVisible();
        await expect(row.getByRole('gridcell', { name: String(record.salary) })).toBeVisible();
        await expect(row.getByRole('gridcell', { name: record.department })).toBeVisible();
    }

    /**
     * Assert a specific row (1-based index) matches the record values.
     */
    async expectRowAt(index1Based: number, record: WebTableRecord) {
        const zeroBasedIndex = index1Based - 1;
        const row = this.rowGroups.nth(zeroBasedIndex);
        const cells = this.getRowCells(row);
        await expect(cells.nth(0)).toHaveText(record.firstName);
        await expect(cells.nth(1)).toHaveText(record.lastName);
        await expect(cells.nth(2)).toHaveText(String(record.age));
        await expect(cells.nth(3)).toHaveText(record.email);
        await expect(cells.nth(4)).toHaveText(String(record.salary));
        await expect(cells.nth(5)).toHaveText(record.department);
    }

    /**
     * Returns the grid cells for a given row group locator.
     */
    private getRowCells(rowGroup: Locator) {
        return rowGroup.getByRole('gridcell');
    }
}


