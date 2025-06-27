import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('shubhamjha');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('3155Shub');
  await page.getByRole('button', { name: 'Log in' }).click();
});