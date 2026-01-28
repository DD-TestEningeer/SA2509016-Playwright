

// import 

import test from '@playwright/test'


test("TC001- Open Google url", async ({page})=>{
    // open the url 
   await  page.goto("https://www.google.com");

});