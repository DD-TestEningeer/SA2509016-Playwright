

// Web Actions 
// fill data, click on the button

import {test, expect} from '@playwright/test'

test("Web Actions", async ({page})=>{

    // open page
    await page.goto("https://dd-demo-tau.vercel.app/playwright-practice2.html");

    // click() => button/links    
    // await page.getByRole('button', { name: 'Button (getByRole)' }).click();

    await page.getByRole('button', { name: 'Button (getByRole)' }).click();

    // byText
   const paragraphText = await page.getByText("This is a sample paragraph for testing getByText locator.");
 
   await expect(paragraphText).toBeVisible();

   // by using xpath 
  const paragraphElement = await page.locator('//p[@id="textPara"]');
  const actualText =  paragraphElement.textContent();  

  // by using css selector 
  const inputElement = await page.locator('#nameInput').fill("DemoUser");

  // by using alt text 
  await page.getByAltText('Sample Logo');

  // checkbox
  await page.locator('#css-terms').check()
  await page.locator('#css-terms').uncheck()

  // drop-down list 
  await page.locator('#css-gender').selectOption({label : "Male"});
  // element.selectOption(['red', 'green', 'blue']);


  


});