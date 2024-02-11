import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import AccountDetails from "@/app/account-details/AccountDetails";

// Mock user data
const mockAccountDetails = {
  id: 1,
  Name: "John Doe",
  Email: "john.doe@example.com",
  SavingsBalance: 1000,
  CheckingBalance: 500,
};

describe("AccountDetails Component", () => {
  test("Renders account details correctly", () => {
    render(<AccountDetails accountDetails={mockAccountDetails} />);

    // Check if the component renders the user's name
    expect(screen.getByTestId("account-details-name")).toHaveTextContent(
      "Name: John Doe"
    );

    // Check if the component renders the user's email
    expect(screen.getByTestId("account-details-email")).toHaveTextContent(
      "Email: john.doe@example.com"
    );

    // Check if the component renders the user's savings balance
    expect(screen.getByTestId("account-details-savings")).toHaveTextContent(
      "Savings Balance: $1000"
    );

    // Check if the component renders the user's checking balance
    expect(screen.getByTestId("account-details-checking")).toHaveTextContent(
      "Checking Balance: $500"
    );
  });
});
