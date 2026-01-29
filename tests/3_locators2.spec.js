

import {test, expect} from '@playwright/test'


test("5) getByAltText()", async ({page})=>{

// open url 
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

// find the element using alternative text => img tag // image tab
const logoElement = await page.getByAltText("company-branding");
await expect(logoElement).toBeVisible();

await page.waitForTimeout(10000);




});


// page.getByTitle() 


test("6) getByTitle()", async ({page})=>{

// open url 
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


// a tag with title attribute

// <a title ="Home" href="/home.html"> Home Page <a/>
await page.getByTitle("Home");



});

// page.getByTestId() 


test("7) getByTestId()", async ({page})=>{

// open url 
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

// <button data-testid="directions">Itinéraire</button>

await page.getByTestId("directions");



});
