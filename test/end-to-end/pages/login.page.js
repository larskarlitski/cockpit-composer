// cockpit login credentials
class LoginPage {
  constructor() {
    this.username = process.env.COCKPIT_USERNAME || "root";
    this.password = process.env.COCKPIT_PASSWORD || "foobar";
  }

  // Cockpit login page
  loadingCockpitLoginPage() {
    const selector = '[id="badge"]';
    browser.waitUntil(
      () => browser.isVisible(selector),
      timeout,
      `Loading Cockpit Login page fail by waiting for selector ${selector}`
    );
  }

  get usernameBox() {
    const selector = 'input[id="login-user-input"]';
    browser.waitUntil(
      () => browser.hasFocus(selector),
      timeout,
      `Username input box in Cockpit Login page cannot get focused by selector ${selector}`
    );
    return $(selector);
  }

  get passwordBox() {
    const selector = 'input[id="login-password-input"]';
    browser.waitUntil(
      () => browser.isVisible(selector),
      timeout,
      `Password input box in Cockpit Login page cannot be found by selector ${selector}`
    );
    return $(selector);
  }

  get authorizedCheckbox() {
    const selector = '[id="authorized-input"]';
    browser.waitUntil(
      () => browser.isVisible(selector),
      timeout,
      `Authorized input checkbox in Cockpit Login page cannot be found by selector ${selector}`
    );
    return $(selector);
  }

  get loginButton() {
    const selector = 'button[id="login-button"]';
    browser.waitUntil(
      () => browser.isVisible(selector),
      timeout,
      `Login button in Cockpit Login page cannot be found by selector ${selector}`
    );
    return $(selector);
  }

  // Image Builder iframe
  get imageBuilderIframe() {
    const selector = 'iframe[name="cockpit1:localhost/composer"]';
    browser.waitUntil(
      () => browser.isExisting(selector),
      timeout,
      `Image Builder iframe cannot be found by selector ${selector}`
    );
    return $(selector).value;
  }
}

module.exports = new LoginPage();
