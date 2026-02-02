

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_open

import { test, expect } from '@playwright/test';

test('Open New Window Tab (side)', async ({ page1 }) => {


    // open url 
  await page1.goto('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_open');  
  
  // validate the button visibility   
  await expect(page1.locator('iframe[name="iframeResult"]').contentFrame().getByRole('button', { name: 'Try it' })).toBeVisible();

  const page2Promise = page1.waitForEvent('popup');

  // click on the button 
  await page1.locator('iframe[name="iframeResult"]').contentFrame().getByRole('button', { name: 'Try it' }).click();

  const page2 = await page2Promise;

  await expect(page2.getByRole('heading', { name: 'Learn to Code' })).toBeVisible();



// driver.get("url") => page1 => driver
// click on the link => page2 new tab





});