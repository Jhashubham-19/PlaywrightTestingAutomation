// @ts-check
import { test, expect } from '@playwright/test';

test('Launch browser and navigate to a Home  Page', async ({ browser }) => {
  // Launch a new browser context
  const context = await browser.newContext();

  // Create a new page in the context
  const page = await context.newPage();

  // Navigate to a specific URL
  await page.goto('https://demoblaze.com/index.html');

  const pageTitle= await page.title();
    console.log(`Page title is:`, pageTitle);
    await expect(pageTitle).toBe('STORE');

  // Verify that the page has loaded by checking the title
 const pageURL = await page.url();
 console.log(`Page URL is:`, pageURL);
  await expect(page).toHaveURL('https://demoblaze.com/index.html');

  // Close the context
  await context.close();
});
