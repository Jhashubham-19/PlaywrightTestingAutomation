import {expect, test} from '@playwright/test';

test('Soft Assertions', async ({page}) => {
    await page.goto("https://demoblaze.com/index.html");

    /*
    // Hard Assertion
    await expect(page).toHaveTitle('STORE121');
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    await expect(page.locator('.navbar-brand')).toBeVisible();

    */

     // Using Soft Assertions
     // Soft assertions allow the test to continue even if an assertion fails.
     // This is useful for reporting multiple failures in a single test run.
     // If any soft assertion fails, it will be reported at the end of the test run.
    
    // Soft Assertion
     
     await expect.soft(page).toHaveTitle('STORE121');
     await expect.soft(page).toHaveURL('https://demoblaze.com/index.html');
     await expect.soft(page.locator('.navbar-brand')).toBeVisible();
})