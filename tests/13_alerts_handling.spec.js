// https://the-internet.herokuapp.com/javascript_alerts

// TC001 - JS Alert with Ok button

import { test, expect } from "@playwright/test";

test("TC001 - JS Alert with Ok button ", async ({ page }) => {
  // open url
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  // header element validation
  await expect(page.locator("h3")).toContainText("JavaScript Alerts");

  // button element validation
  await expect(
    page.getByRole("button", { name: "Click for JS Alert" }),
  ).toBeVisible();

  //   page.once('dialog', dialog => {
  //     console.log(`Dialog message: ${dialog.message()}`);
  //     dialog.dismiss().catch(() => {});
  //   });

  // page.on('dialog', dialog => dialog.accept());
  page.on("dialog", (dialog) => dialog.dismiss());

  // Click on the JS Alert Button
  await page.getByRole("button", { name: "Click for JS Alert" }).click();
});
// TC002 - JS Alert with OK and Cancel buttons

test("TC002 - JS Alert with OK and Cancel buttons ", async ({ page }) => {
  // open url
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  // header validation
  await expect(
    page.getByRole("heading", { name: "JavaScript Alerts" }),
  ).toBeVisible();
  // button validation
  await expect(
    page.getByRole("button", { name: "Click for JS Confirm" }),
  ).toBeVisible();

  //   page.once('dialog', dialog => {
  //     console.log(`Dialog message: ${dialog.message()}`);
  //     dialog.dismiss().catch(() => {});
  //   });

  page.on("dialog", (dialog) => dialog.accept()); // click on OK button
  // page.on('dialog', dialog => dialog.dismiss()); // click on the Cancel button

  // click on the JS confirm alert
  await page.getByRole("button", { name: "Click for JS Confirm" }).click();

  await expect(page.getByText("You clicked: Ok")).toBeVisible();
});

// TC003 - JS Alert with prompt, ok and cancel

test("TC003 - JS Alert with prompt, ok and cancel ", async ({ page }) => {
  // open url
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  // button validation
  await expect(
    page.getByRole("button", { name: "Click for JS Prompt" }),
  ).toBeVisible();

  page.on("dialog", async (dialog) => {
    await dialog.accept("Playwright User");
  });

  // click on the button
  await page.getByRole("button", { name: "Click for JS Prompt" }).click();

  await expect(page.getByText("JavaScript Alerts Here are")).toBeVisible();
});
