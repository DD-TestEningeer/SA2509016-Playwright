
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1769792021802&no_sw_cr=1');
  await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Test Automation');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3DTest%2BAutomation%26sca_esv%3Db7582afb3eadf454%26source%3Dhp%26ei%3DE-J8acSnD929juMP0_fciA4%26iflsig%3DAFdpzrgAAAAAaXzwIxUJ7eYuSozfCY-GKd1_EYdLGvgU%26ved%3D0ahUKEwiE_YiF3bOSAxXdnmMGHdM7F-EQ4dUDCBY%26uact%3D5%26oq%3DTest%2BAutomation%26gs_lp%3DEgdnd3Mtd2l6Ig9UZXN0IEF1dG9tYXRpb24yCxAAGIAEGLEDGIMBMggQABiABBixAzIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESKE0UM8LWMYhcAF4AJABAJgBmgGgAbkNqgEEMy4xMrgBA8gBAPgBAZgCEKACtg6oAgrCAgoQABgDGOoCGI8BwgIOEAAYgAQYsQMYgwEYigXCAggQLhiABBixA8ICBRAuGIAEwgIREC4YgAQYsQMY0QMYgwEYxwHCAg4QLhiABBixAxjRAxjHAcICBxAAGIAEGAqYAw3xBSOuZGPW63GMkgcEMS4xNaAHo2GyBwQwLjE1uAepDsIHCDAuMS4xMi4zyAdigAgA%26sclient%3Dgws-wiz%26sei%3DPuJ8aeK6CuPv4-EPiNb6sAY&q=EgRnyGX1GL7E88sGIjDMxrPd-8zToqLLpsq1AbUDO-Prv6RmrsT9TyhQFHMNTodRTKX8Fq-s8ijgtkPGUYgyAVJaAUM');
  await page.locator('iframe[name="a-56drqghkztwa"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
});