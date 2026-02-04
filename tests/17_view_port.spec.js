


import {test, expect} from '@playwright/test'

// assertions 

test.use({
  viewport: { width: 900, height: 400 },
});

test("Playwright View Port Demo ", async ({page})=>{

    // open url 
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // url validation 
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    // title validation
    const expTitle = "OrangeHRM";
    await expect(page).toHaveTitle(expTitle);

    // logo validation 
    const logoElement = await page.getByAltText('company-branding');
    await expect(logoElement).toBeVisible();

    // header validation 
    const headerElement = await page.getByRole('heading', {label : "Login"});
    await expect(headerElement).toHaveText('Login'); // complete text match
    await expect(headerElement).toContainText('Log'); // partial match

    // Username input field validation 
    const usernameInputElement = await page.getByPlaceholder('Username');
    await expect(usernameInputElement).toBeVisible();
    await expect(usernameInputElement).toBeEditable();

    await usernameInputElement.screenshot({path : "usernameInputElement_Screenshot.png"});


    // action 
    usernameInputElement.clear();
    usernameInputElement.fill("Admin");

     // Password input field validation 
    const passwordInputElement = await page.getByPlaceholder('Password');

    await expect(passwordInputElement).toBeVisible();
    await expect(passwordInputElement).toBeEditable();

    // action 
    passwordInputElement.clear();
    passwordInputElement.fill("admin123");

    // Login button validation 
    const loginButton = await page.locator('//button[@type="submit"]');

    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();
    
    // action 
    loginButton.click();

    // verify that user navigates to the dashboard page 
        //url validation 
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

        // dashboard header element 
        const dashboardHeaderElement = await page.locator('.oxd-topbar-header-breadcrumb-module');

        // validations 
        await expect(dashboardHeaderElement).toBeVisible();
        await expect(dashboardHeaderElement).toContainText('Dashboard');

            // Full page screenshot
        await page.screenshot({ path: 'Dashboard_Page_Full_Screenshot.png' });

});