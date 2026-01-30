import { test, expect } from "@playwright/test";

test("File Upload ", async ({ page }) => {
  // page navigation
  await page.goto("https://practice.expandtesting.com/upload");

  // find the choose file element
  await page
    .getByTestId("file-input")
    .setInputFiles("C:\\Users\\hp\\Documents\\StarAgile\\SA2509016\\Playwright_Module\\Playwright_Demo\\tests\\testData.txt");

  // find the upload button and click on it
  await page.getByTestId("file-submit").click();

  // find the header element
  const headerElement = await page.locator("h1");
  await expect(headerElement).toBeVisible();
});
