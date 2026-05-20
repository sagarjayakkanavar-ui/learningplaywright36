const { test, expect } = require('@playwright/test');

test.describe('Practice Test Automation - Login Tests', () => {
  const baseURL = 'https://practicetestautomation.com/practice-test-login/';

  test('Test case 1: Positive LogIn test', async ({ page }) => {
    // Open page
    await page.goto(baseURL);

    // Type username student into Username field
    await page.locator('#username').fill('student');

    // Type password Password123 into Password field
    await page.locator('#password').fill('Password123');

    // Push Submit button
    await page.locator('#submit').click();

    // Verify new page URL contains practicetestautomation.com/logged-in-successfully/
    await expect(page).toHaveURL(/logged-in-successfully/);

    // Verify new page contains expected text ('Congratulations' or 'successfully logged in')
    await expect(page.locator('body')).toContainText(/Congratulations|successfully logged in/i);

    // Verify button Log out is displayed on the new page
    const logoutButton = page.locator('a:has-text("Log out")');
    await expect(logoutButton).toBeVisible();
  });

  test('Test case 2: Negative username test', async ({ page }) => {
    // Open page
    await page.goto(baseURL);

    // Type username incorrectUser into Username field
    await page.locator('#username').fill('incorrectUser');

    // Type password Password123 into Password field
    await page.locator('#password').fill('Password123');

    // Push Submit button
    await page.locator('#submit').click();

    // Verify error message is displayed
    const errorMessage = page.locator('#error');
    await expect(errorMessage).toBeVisible();

    // Verify error message text is Your username is invalid!
    await expect(errorMessage).toContainText('Your username is invalid!');
  });

  test('Test case 3: Negative password test', async ({ page }) => {
    // Open page
    await page.goto(baseURL);

    // Type username student into Username field
    await page.locator('#username').fill('student');

    // Type password incorrectPassword into Password field
    await page.locator('#password').fill('incorrectPassword');

    // Push Submit button
    await page.locator('#submit').click();

    // Verify error message is displayed
    const errorMessage = page.locator('#error');
    await expect(errorMessage).toBeVisible();

    // Verify error message text is Your password is invalid!
    await expect(errorMessage).toContainText('Your password is invalid!');
  });
});
