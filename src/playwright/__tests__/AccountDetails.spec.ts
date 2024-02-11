import { test, expect } from "@playwright/test";
import { playwrightLogin } from "../utils/utils";

test.describe("Account Details page", () => {
  test("Should edit savings currency amount correctly", async ({ page }) => {
    const random_number = Math.floor(Math.random() * (5000 - 500 + 1)) + 500;

    await playwrightLogin(page);

    await page.goto("http://localhost:3000/account-details/1");

    await page.getByTestId("edit-savings-currency-button").click();

    await page
      .getByTestId("edit-savings-currency-input")
      .fill(random_number.toString());

    await page.getByTestId("edit-savings-currency-ok").click();

    const newAmount = await page
      .getByTestId("account-details-savings")
      .getByText(random_number.toString())
      .textContent();

    expect(newAmount).toBe(random_number.toString());
  });

  test("Should edit checking currency amount correctly", async ({ page }) => {
    const random_number = Math.floor(Math.random() * (5000 - 500 + 1)) + 500;

    await playwrightLogin(page);

    await page.goto("http://localhost:3000/account-details/1");

    await page.getByTestId("edit-checking-currency-button").click();

    await page
      .getByTestId("edit-checking-currency-input")
      .fill(random_number.toString());

    await page.getByTestId("edit-checking-currency-ok").click();

    const newAmount = await page
      .getByTestId("account-details-checking")
      .getByText(random_number.toString())
      .textContent();

    expect(newAmount).toBe(random_number.toString());
  });

  test("Should transfer from checking to savings correctly", async ({
    page,
  }) => {
    const transferAmount = "100";

    await playwrightLogin(page);

    await page.goto("http://localhost:3000/account-details/1");

    const currentSavings = await page
      .getByTestId("account-details-savings-amount")
      .textContent();

    const currentChecking = await page
      .getByTestId("account-details-checking-amount")
      .textContent();

    await page.getByTestId("transfer-to-savings-button").click();
    await page.getByTestId("transfer-to-savings-input").fill(transferAmount);
    await page.getByTestId("transfer-to-savings-ok").click();

    const newSavingsAmount = (
      parseInt(currentSavings) + parseInt(transferAmount)
    ).toString();

    const newCheckingAmount = (
      parseInt(currentChecking) - parseInt(transferAmount)
    ).toString();

    const newSavings = page
      .getByTestId("account-details-savings")
      .getByText(newSavingsAmount);

    const newChecking = page
      .getByTestId("account-details-checking")
      .getByText(newCheckingAmount);

    await newSavings.waitFor();
    await newChecking.waitFor();

    expect(newSavings).toBeDefined();
    expect(newChecking).toBeDefined();
  });

  test("Should transfer from savings to checking correctly", async ({
    page,
  }) => {
    const transferAmount = "100";

    await playwrightLogin(page);

    await page.goto("http://localhost:3000/account-details/1");

    const currentSavings = await page
      .getByTestId("account-details-savings-amount")
      .textContent();

    const currentChecking = await page
      .getByTestId("account-details-checking-amount")
      .textContent();

    await page.getByTestId("transfer-to-checking-button").click();
    await page.getByTestId("transfer-to-checking-input").fill(transferAmount);
    await page.getByTestId("transfer-to-checking-ok").click();

    const newSavingsAmount = (
      parseInt(currentSavings) - parseInt(transferAmount)
    ).toString();

    const newCheckingAmount = (
      parseInt(currentChecking) + parseInt(transferAmount)
    ).toString();

    const newSavings = page
      .getByTestId("account-details-savings")
      .getByText(newSavingsAmount);

    const newChecking = page
      .getByTestId("account-details-checking")
      .getByText(newCheckingAmount);

    await newSavings.waitFor();
    await newChecking.waitFor();

    await page.waitForTimeout(2000);

    expect(newSavings).toBeDefined();
    expect(newChecking).toBeDefined();
  });
});
