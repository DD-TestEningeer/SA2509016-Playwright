# SA2509016-Playwright

## Playwright Test – Notes

* `import { test, expect } from '@playwright/test';`
  Imports Playwright test runner and assertion library.

* `test`
  Used to define test cases.

* `expect`
  Used for assertions and validations.

* `async`
  Used for handling asynchronous browser actions.

* `await`
  Waits until the current action is completed before moving to the next step.

* `page`
  Represents a browser tab used for navigation and interactions.

* `page.goto()`
  Opens the browser and navigates to the specified URL.

* Test case naming
  Should be unique and descriptive for easy identification.

* Auto-wait
  Playwright automatically waits for elements to be ready before performing actions.

* Typical login flow
  Open URL → Enter username → Enter password → Click login → Verify login success.

* Selenium
  Requires explicit waits and more setup code.

* Cypress
  Has built-in waits and runs inside the browser.

* Playwright
  Supports auto-wait, multiple browsers, and stable execution.
