/*
page.getByAltText() - To locate elements by their alt text.
page.getByLabel() - To locate elements by their label text.
page.getByPlaceholder() - To locate elements by their placeholder text.
page.getByRole() - To locate elements by their role (e.g., button, link, etc.).
page.getByTestId() - To locate elements by their test ID.

page.getByText() - To locate elements by their text content.
page.getByTitle() - To locate elements by their title attribute.
page.getByRole() - To locate elements by their role (e.g., button, link, etc.).
page.getByClass() - To locate elements by their class name.
*/

import { test, expect } from '@playwright/test';
test('Built-in Locators', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Using built-in locators to interact with elements on the page

    //1. getByAltText()     
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible(); // Verify that the logo is visible
    await logo.click(); // Click on the logo

    //2. getByPlaceholder() - Locating the username input field by its placeholder text
    const usernameInput = await page.getByPlaceholder('Username');
    await expect(usernameInput).toBeVisible(); // Verify that the username input field is visible
    await usernameInput.fill('Admin'); // Fill in the username input field   
    
    await page.getByPlaceholder('Password').fill('admin123'); // Fill in the password input field

    //3. getByRole() - Locating the login button by its role
    await page.getByRole('button', { type: 'submit' }).click(); // Click on the login button

    const name= await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    console.log(`Logged in as: ${name}`); // Log the name of the logged
    await expect(await page.getByText(name)).toBeVisible(); // Verify that the name is visible




})
