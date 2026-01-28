// @ts-check

// import statement
import { test, expect } from '@playwright/test';

// test => test cases
// expect => assertions
// async => non-sync 
// await => It will wait to complete certain action
// goto() => page navigation / open browser and navigate to the url




// Test Case 1
test("TC001- Open the google url", async ({page})=>{

 await page.goto("https://www.google.com");

});











// Auto-wait => wait automatically until the element is visible

// step 1 - open url 
// step 2 - enter username
// step 3 - enter password 
// step 4 - click on the login button 
// step 5 - verify user login success

// selenium 
/*

// step 1 - open url 
driver.get("url");

// step 2 - enter username
driver.findElement(xpath).sendKeys("username")

// step 3 - enter password 
driver.findElement(xpath).sendKeys("password")

// step 4 - click on the login button 
driver.findElement(xpath).click()

// step 5 - verify user login success
driver.findElement(xpath).getText()
*/


// cypress 
/*

// step 1 - open url 
cy.visit("url");

// step 2 - enter username
cy.get(xpath).sendKeys("username")

// step 3 - enter password 
cy.get(xpath).sendKeys("password")

// step 4 - click on the login button 
cy.get(xpath).click()

// step 5 - verify user login success
cy.get(xpath).getText()
*/

