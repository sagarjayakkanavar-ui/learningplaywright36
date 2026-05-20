import { test, expect } from '@playwright/test';
import SauceDemoPage from '../pages/SauceDemoPage';

test.describe('Sauce Demo E2E Tests', () => {
  let saucePage;

  test.beforeEach(async ({ page }) => {
    // Initialize the page object
    saucePage = new SauceDemoPage(page);
  });

  test('Complete purchase flow - login, add to cart, and checkout', async () => {
    // Step 1: Navigate to application
    await saucePage.navigateToApplication();

    // Step 2: Login with standard user credentials
    await saucePage.login('standard_user', 'secret_sauce');

    // Step 3: Add product to cart
    await saucePage.addProductToCart();

    // Step 4: Navigate to shopping cart
    await saucePage.goToCart();

    // Step 5: Verify cart header is visible
    expect(await saucePage.isCartHeaderVisible()).toBe(true);

    // Step 6: Click on cart title
    await saucePage.clickCartTitle();

    // Step 7: Verify cart title is visible
    expect(await saucePage.isCartTitleVisible()).toBe(true);

    // Step 8: Proceed to checkout
    await saucePage.proceedToCheckout();

    // Step 9: Fill checkout information
    await saucePage.fillCheckoutInfo('sagar', 'j', '345352');

    // Step 10: Continue to checkout overview
    await saucePage.continueCheckout();

    // Step 11: Complete the purchase
    await saucePage.finishPurchase();

    // Step 12: Verify order completion
    expect(await saucePage.isOrderCompleted()).toBe(true);
  });
});