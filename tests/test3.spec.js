import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tutorialsninja.com/');
  await page.getByRole('link', { name: 'https://tutorialsninja.com/' }).click();
  await page.getByRole('link', { name: 'Desktops', exact: true }).click();
  await page.getByText('PC (0) Mac (1) Show').click();
  await page.getByRole('button', { name: ' Add to Cart' }).click();
  await page.getByRole('link', { name: ' Shopping Cart' }).click();
  await page.getByRole('link', { name: 'Continue Shopping' }).click();
});