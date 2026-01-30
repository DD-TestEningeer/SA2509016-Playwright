

// CSS Selectors 

import {test, expect} from '@playwright/test'

test("TC001 - CSS Selectors", async({page})=>{

    // open the url
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    // find the username input using css selector with id 
  const usernameInput=  await page.locator("#username").fill("student");

  // find the password input using css selector with id
  const passwordInput = await page.locator("#password").fill("Password123");

  // find the submit button using css selector with class name 
  const submitButton = await page.locator(".btn").click();


  // find the "Logged In Successfully" message element
  const messageElement = await page.locator("h1");
  await expect(messageElement).toBeVisible();





});