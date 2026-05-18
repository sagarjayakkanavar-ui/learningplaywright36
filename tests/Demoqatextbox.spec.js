import { test, expect } from '@playwright/test';

test('Verify filling text', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
 
  await page.getByRole('textbox', { name: 'Full Name' }).fill('abcd');
   
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('abcd@gmail.com');
   
  await page.getByRole('textbox', { name: 'Current Address' }).fill('bengaluru');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('bengaluru');
  await page.getByRole('button', { name: 'Submit' }).click();

  //asseration
  await expect(page.getByText('Name:abcd')).toBeVisible();
  await expect(page.getByText('Email:abcd@gmail.com')).toBeVisible();
  await expect(page.getByText('Current Address :bengaluru')).toBeVisible();
  await expect(page.getByText('Permananet Address :bengaluru')).toBeVisible();
});


///negative test case 

test('Verify invalid username', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
 
  await page.getByRole('textbox', { name: 'Full Name' }).fill('abcd');
   
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('abcd@gmail.com');
   
  await page.getByRole('textbox', { name: 'Current Address' }).fill('bengaluru');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('bengaluru');
  await page.getByRole('button', { name: 'Submit' }).click();

  //asseration
  await expect(page.getByText('Name:Sagar')).toBeVisible();
  await expect(page.getByText('Email:abcd@gmail.com')).toBeVisible();
  await expect(page.getByText('Current Address :bengaluru')).toBeVisible();
  await expect(page.getByText('Permananet Address :bengaluru')).toBeVisible();
});