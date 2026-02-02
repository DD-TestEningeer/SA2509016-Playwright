
// dropdown handling 

import {test, expect} from '@playwright/test'

test("Dropdown Handling with single select ", async ({page}) => {

    // open the url 
    await page.goto("https://dd-demo-tau.vercel.app/web_elements.html");

    // click on dropdown link from left side menu
    await page.locator("//a[@href='#7-dropdown']").click();

    // select the required option

    // select by value 
    await page.locator('//select[@id="dropdownField"]').selectOption("Audi");

        // validate the selected choice 
     const messageElement1 = await page.getByText("Selected Car: Audi");
     await expect(messageElement1).toBeVisible();


     await page.waitForTimeout(5000);

    // select by visible label/text 
      await page.locator('//select[@id="dropdownField"]').selectOption({label: "Tesla"});
    
      // validate the selected choice 
     const messageElement2 = await page.getByText("Selected Car: Tesla");
     await expect(messageElement2).toBeVisible();
});


test("Dropdown Handling with multi-select ", async ({page}) => {

    // open the url 
    await page.goto("https://dd-demo-tau.vercel.app/web_elements.html");

    // click on the multi-selection option from the left side
    await page.locator('//a[@href="#8-multiselect"]').click();

    // select multiple values 
    await page.locator('#multiSelectField').selectOption(['Apple', 'Mango']);

    // validation for the multi-selection
   const selectedMessage = await page.getByText("Selected Fruits: Apple, Mango");
   // css/xpath

   await expect(selectedMessage).toBeVisible();
  
});