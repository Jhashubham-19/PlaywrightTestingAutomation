import {test, expect} from '@playwright/test';

test('Locating Multiple Elements', async ({ page }) => {
    await page.goto("https://demoblaze.com/index.html");
    const links = await page.$$('a'); // Get all elements with tag name 'a'

    //using for each loop to iterate through the elements
    /*
    for (const link of links) {
        const text = await link.textContent();  // Get the text content of each element
        console.log(text);
    }
    */

   await page.waitForSelector("//div[@id='tbodyid']//div//h4/a"); // Wait for the elements to be present in the DOM
    const products = await page.$$("//div[@id='tbodyid']//div//h4/a"); // Get all elements with class 'card-title
    for( const product of products) {
        const productName = await product.textContent(); // Get the text content of each product
        console.log(productName)
    }

})
