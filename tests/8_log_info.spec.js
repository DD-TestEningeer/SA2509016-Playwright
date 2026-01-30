

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

// fist step
  await test.step('Step 1) Open Url', async () => {  
    
    await page.goto("https://dd-demo-tau.vercel.app/register.html");
  });


  // verify the header text 

  await test.step("Step 2: Verify the header text", async ()=>{


  const headerElement =  await page.getByRole('heading', { name: 'Register Page' });

//   const actText = headerElement.textContent();
  await expect(headerElement).toHaveText("Register Page");


  });


});