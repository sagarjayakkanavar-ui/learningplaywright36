import { test, expect } from '@playwright/test';

test('verify valid username and valid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.locator("//button[@type='submit']").click();
//assertions

  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
})

test('verify Invalid username and valid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//enter invalid username

  await page.getByRole('textbox', { name: 'Username' }).fill('addin');
  
// enter valid password
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

  await page.getByRole('button', { name: 'Login' }).click();

  //assertion
  await expect(page.getByText('Invalid credentials')).toBeVisible();
})

test('verify valid username and invalid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//enter valid username

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  
// enter correct password
  await page.getByRole('textbox', { name: 'Password' }).fill('admin12345');

  await page.getByRole('button', { name: 'Login' }).click();

  //assertion
  await expect(page.getByText('Invalid credentials')).toBeVisible();
})

test('verify invalid username and invalid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//enter valid username

  await page.getByRole('textbox', { name: 'Username' }).fill('addd');
  
// enter correct password
  await page.getByRole('textbox', { name: 'Password' }).fill('admin12345');

  await page.getByRole('button', { name: 'Login' }).click();

  //assertion
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});