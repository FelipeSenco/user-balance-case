import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AccountDetails from "@/app/account-details/AccountDetails";

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

    expect(screen.getByTestId("account-details-name")).toHaveTextContent(
      "Name: John Doe"
    );

    expect(screen.getByTestId("account-details-email")).toHaveTextContent(
      "Email: john.doe@example.com"
    );

    expect(screen.getByTestId("account-details-savings")).toHaveTextContent(
      "Savings Balance: $1000"
    );

    expect(screen.getByTestId("account-details-checking")).toHaveTextContent(
      "Checking Balance: $500"
    );
  });
});
