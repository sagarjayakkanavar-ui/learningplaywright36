// Page Object Model for Sauce Demo Application
class SauceDemoPage {
  constructor(page) {
    this.page = page;
    
    // Login Page Locators
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    
    // Product Page Locators
    this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
    
    // Cart Page Locators
    this.cartHeader = page.locator('[data-test="secondary-header"]');
    this.cartTitle = page.locator('[data-test="title"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    
    // Checkout Information Page Locators
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    
    // Checkout Overview Page Locators
    this.finishButton = page.locator('[data-test="finish"]');
    
    // Order Completion Page Locators
    this.completeHeader = page.locator('[data-test="complete-header"]');
  }

  /**
   * Navigate to Sauce Demo application
   */
  async navigateToApplication() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  /**
   * Login with provided credentials
   * @param {string} username - Username to login
   * @param {string} password - Password to login
   */
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  /**
   * Add product to cart
   */
  async addProductToCart() {
    await this.addToCartButton.click();
  }

  /**
   * Navigate to shopping cart
   */
  async goToCart() {
    await this.shoppingCartLink.click();
  }

  /**
   * Verify cart header is visible
   */
  async isCartHeaderVisible() {
    return await this.cartHeader.isVisible();
  }

  /**
   * Verify cart title is visible
   */
  async isCartTitleVisible() {
    return await this.cartTitle.isVisible();
  }

  /**
   * Click on cart title
   */
  async clickCartTitle() {
    await this.cartTitle.click();
  }

  /**
   * Proceed to checkout
   */
  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  /**
   * Fill checkout information
   * @param {string} firstName - First name
   * @param {string} lastName - Last name
   * @param {string} postalCode - Postal code
   */
  async fillCheckoutInfo(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  /**
   * Click continue button on checkout info page
   */
  async continueCheckout() {
    await this.continueButton.click();
  }

  /**
   * Complete the purchase
   */
  async finishPurchase() {
    await this.finishButton.click();
  }

  /**
   * Verify order completion
   */
  async isOrderCompleted() {
    return await this.completeHeader.isVisible();
  }
}

module.exports = SauceDemoPage;
