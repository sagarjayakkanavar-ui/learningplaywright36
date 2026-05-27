import { test, expect } from '@playwright/test';

test('verify addemployee details', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
   
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');
   
  await page.getByRole('textbox', { name: 'First Name' }).fill('sagar');
   
  await page.getByRole('textbox', { name: 'Last Name' }).fill('gdf');
  await page.getByRole('button', { name: 'Save' }).click();
   
  await page.getByRole('textbox').nth(4).fill('049633');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/297');
  await expect(page.getByRole('heading', { name: 'sagar gdf' })).toBeVisible();
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
});