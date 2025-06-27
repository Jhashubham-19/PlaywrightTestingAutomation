import {expect ,test} from '@playwright/test';

test('Assertion Test', async ({page}) => {

    //open app url
    await page.goto("https://demo.nopcommerce.com/register");

    //1) expect(page).toHaveURL()  -- checks if the current page URL matches the expected URL
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

    //2) expect(page).toHaveTitle() -- checks if the current page title matches the expected title
    await expect(page).toHaveTitle("nopCommerce demo store. Register");

    //3) expect(locator).toBeVisible() -- checks if the specified element is visible on the page
    const registerButton = await page.locator("//button[@id='register-button']");
    await expect(registerButton).toBeVisible();

    //4) expect(locator).isEnabled() -- checks if the specified element is enabled (not disabled)
    const searchStoreBox = await page.locator("#small-searchterms");
    await expect(searchStoreBox).toBeEnabled();

    //5) expect(locator).toBeChecked() -- checks if the specified checkbox or radio button is checked
    const maleRadioButton = await page.locator("#gender-male");
    await maleRadioButton.click(); // Click the male radio button
    await expect(maleRadioButton).toBeChecked(); 

    //6) expect(locator).toHaveAttribute() -- checks if the specified element has the expected attribute and value
    const regButton = await page.locator("#register-button");
    await expect(regButton).toHaveAttribute("type", "submit");

    //7) expect(locator).toHaveText() -- checks if the specified element contains the expected text content
    const registerText = await page.locator("//h1[contains(text(),'Register')]");
    await expect(registerText).toHaveText("Register");

    //8) expect(locator)toContainText() -- checks if the specified element contains the expected text content (partial match)
    await expect(registerText).toContainText("Reg");

    //9) expect(locator).toHaveValue() -- checks if the specified input element has the expected value
    const emailInput = await page.locator("#Email");
    await emailInput.fill('test@demo');
    await expect(emailInput).toHaveValue('test@demo');
})