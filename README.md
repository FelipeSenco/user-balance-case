# User Account Balance Demo

## Description

The "User Account Balance Demo" is a web application built with React, TypeScript, and Next.js, utilizing SQLite for data storage. It simulates a banking interface where users can log in, view account balances, and perform transactions such as transfers between savings and checking accounts.

## Technologies Used

- React
- TypeScript
- Next.js
- SQLite

## Prerequisites

- Node.js version 18.18.0
- npm version 9.8.1

## Installation

1. Clone the repository to your local machine.
2. Navigate to the repository directory in your terminal.
3. Run the following commands:

   ```bash
   npm install
   npm run build
   npm run start
   ```

4. The application will be running on [http://localhost:3000](http://localhost:3000).

## Usage

1. Visit [http://localhost:3000](http://localhost:3000) in your web browser.
2. Click on the "Login" link and sign in using the mock credentials:

- Username: `admin`
- Password: `123`

3. Once logged in, navigate to the "User Accounts" tab to view a list of accounts (if still redirects to login page, refresh the browser it should pick up the admin session).
4. Click on the "Manage" button next to an account to view its details.
5. In the account details page, you can:

- Edit the currency amount for Savings and Checking accounts by clicking on the respective "Edit" button.
- Transfer funds between Savings and Checking accounts using the "Transfer" buttons.

## Running Tests

### Jest Tests

To run the Jest tests, follow these steps:

1. Open your terminal.
2. Navigate to the project directory.
3. Run the command:

   ```bash
   npm run jest-test
   ```

Jest will execute the tests and include a test coverage report in the terminal results.

### Playwright End-to-End Tests

To run the Playwright end-to-end tests, perform the following steps:

1. First, install the Playwright browsers by running:

   ```bash
   npx playwright install
   ```

2. Then, to execute the Playwright tests, run:

   ```bash
   npm run playwright-test
   ```

Playwright will open browser instances and run the end-to-end tests, allowing you to see the actions being performed in real-time.
