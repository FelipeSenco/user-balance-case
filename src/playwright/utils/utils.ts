import { Page } from "@playwright/test";

export const playwrightLogin = async (page: Page) => {
  await page.goto("http://localhost:3000"); //we start at home page so the login will redirect back there
  await page.goto("http://localhost:3000/login");
  const usernameInput = page.getByTestId("username-input");
  const passwordInput = page.getByTestId("password-input");
  const loginButton = page.getByTestId("login-button");

  await usernameInput.fill("admin");
  await passwordInput.fill("123");

  await loginButton.click();
  await page.getByTestId("welcome-message").waitFor(); //after redirect back to home page we know login worked
};
