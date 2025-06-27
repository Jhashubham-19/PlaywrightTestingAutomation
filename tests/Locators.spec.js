//const {test, expect}= require('@playwright/test');
import { test, expect    } from '@playwright/test';

test('Locators', async ({ page }) => {
    await  page.goto('https://demoblaze.com/index.html');
    // Using different locators to interact with elements on the page
  await page.locator('a#login2').click(); // Click on the login button
 // await page.click('a#login2'); // other way to click on the login button
 await page.fill('#loginusername','shubhamjha'); // Fill in the username field
 await page.fill('#loginpassword','3155Shub'); // Fill in the password field
 await page.click("//button[normalize-space()='Log in']"); // Submit button using XPath
 await page.waitForTimeout(2000); // Wait for 2 seconds to see the result
 await page.locator('a#logout2').click(); // Click on the logout button
 await page.waitForTimeout(2000); // Wait for 2 seconds to see the result

 //this is another way to click on the login button

})
