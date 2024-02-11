import { test, expect } from "@playwright/test";
import { playwrightLogin } from "../utils/utils";

test.describe("Account List page", () => {
  test("Clicking on an item will redirect to Account Details for that item", async ({
    page,
  }) => {
    await playwrightLogin(page);

    const accountListButton = page.getByTestId("account-list-button");

    await accountListButton.click();

    await page.getByTestId("account-list-container").waitFor();

    await page.waitForTimeout(1000);
    await page.getByTestId("manage-button").first().click();

    await page.getByTestId("account-details-container").waitFor();

    expect(page.url()).toContain("account-details");
  });
});
