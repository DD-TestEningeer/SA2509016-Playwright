// Locators in Playwright

// 1) Locate by role
// The page.getByRole()

import { test, expect } from "@playwright/test";

test("1) Locate by role", async ({ page }) => {
  // open url
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  // find the "Login" header using role

  const loginHeader = await page.getByRole("heading", { name: "Login" });
  await expect(loginHeader).toBeVisible();

  // find the username input
  const usernameInput = await page.getByRole("textbox", { name: "Username" });
  await expect(usernameInput).toBeVisible();

  // find the Password input box
  const passwordInput = await page.getByRole("textbox", { name: "Password" });
  await expect(passwordInput).toBeVisible();

  // find the  Login  button
  const loginButton = await page.getByRole("button", { name: " Login " });
  await expect(loginButton).toBeVisible();
});



test("2) Locate by text", async ({ page }) => {
  // open url
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

//   // find the "Login" header using text
//   const loginHeader = await page.getByText("Login");
//   await expect(loginHeader).toBeVisible();

  // find the username label
  const usernameLabel = await page.getByText("Username");
  await expect(usernameLabel).toBeVisible();

  // find the Password label
  const passwordLabel = await page.getByText("Password");
  await expect(passwordLabel).toBeVisible();

  // find the  Login  button
  const loginButton = await page.getByText(" Login ");
  await expect(loginButton).toBeVisible();

});



test("3) Locate by label", async ({ page }) => {
  // open url
  await page.goto("https://dd-demo-tau.vercel.app/textbox.html");

 // find the full name label using element label text

 // manual wait 
 await page.waitForTimeout(5000);


 // username

 const fullNameLabel = await page.getByLabel("Full Name:");

 await expect(fullNameLabel).toBeVisible();

// Email:
 const emailLabel = await page.getByLabel("Email:");

 await expect(emailLabel).toBeVisible();




});



test("4) Locate by placeholder", async ({ page }) => {
  // open url
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );


  // Username Input using placeholder value => "Username"

  const usernameInput = await page.getByPlaceholder("Username")
   await expect(usernameInput).toBeVisible();

   // Password
  const passwordInput = await page.getByPlaceholder("Password");
     await expect(passwordInput).toBeVisible();

});
