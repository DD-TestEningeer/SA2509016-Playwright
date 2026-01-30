



import {test, expect} from '@playwright/test'

test("TC001 - Xpath Selectors", async({page})=>{

    // open the url
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    // find the username input using xpath 
    await page.locator('//input[@id="username"]').fill("student");

    // find the password input using xpath 
    await page.locator('//input[@name="password"]').fill("Password123");

    // find the submit button using xpath 
    await page.locator('//button[text()="Submit"]').click();

    // find the success message 
    const successMessage =  await page.locator('//p[@class="has-text-align-center"]/strong');

    await expect(successMessage).toBeVisible();


});