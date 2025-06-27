import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  await page.getByRole('link', { name: 'Computers' }).click();
  await page.locator('iframe[src="https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/g/turnstile/if/ov2/av0/rcv/gy1qe/0x4AAAAAAADnPIDROrmt1Wwj/light/fbE/new/normal/auto/"]').contentFrame().locator('body').click();
  await page.goto('https://demo.nopcommerce.com/computers');
  await page.locator('iframe[src="https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/g/turnstile/if/ov2/av0/rcv/k7y82/0x4AAAAAAADnPIDROrmt1Wwj/light/fbE/new/normal/auto/"]').contentFrame().locator('body').click();
  await page.goto('https://demo.nopcommerce.com/computers');
});