import { test, expect } from "@playwright/test";

test("Verify the login scenario", async ({ page }) => {
  // open the url
  await page.goto("https://practicetestautomation.com/practice-test-login/");

  // find the username field
  const usernameInput = await page.getByRole("textbox", { name: "username" }); // find
  await expect(usernameInput).toBeVisible(); // assertion
  usernameInput.fill("student"); // action

  // find the password field
  const passwordInput = await page.getByLabel("Password");
  await expect(passwordInput).toBeVisible();
  passwordInput.fill("Password123");

  // find the Submit button
  const submitButton = await page.getByRole("button", { name: "Submit" });
  await expect(submitButton).toBeVisible();
  submitButton.click();

  // verify the user login success message "Logged In Successfully"
  const successMessage = await page.getByText("Logged In Successfully");
  await expect(successMessage).toBeVisible();
});
