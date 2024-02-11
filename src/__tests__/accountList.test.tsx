import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AccountList } from "@/app/account-list/AccountList";
import { useRouter } from "next/navigation";

// Mock useRouter
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();

// Setup mock for useRouter before each test
beforeEach(() => {
  (useRouter as jest.Mock).mockReturnValue({
    push: mockPush,
    pathname: "/",
    query: {},
    // add any other router properties/methods your component uses
  });
});

const mockAccounts = [
  {
    id: 1,
    Name: "John Doe",
    Email: "john@example.com",
    SavingsBalance: 1000,
    CheckingBalance: 500,
  },
  {
    id: 2,
    Name: "Jane Doe",
    Email: "jane@example.com",
    SavingsBalance: 1500,
    CheckingBalance: 750,
  },
];

describe("AccountList", () => {
  test("Renders correctly with accounts", async () => {
    render(<AccountList accountList={mockAccounts} />);

    await waitFor(() => {
      expect(screen.getByTestId("account-list-container")).toBeInTheDocument();
      expect(screen.getAllByTestId("account-list-item").length).toBe(
        mockAccounts.length
      );
      expect(screen.getByText(mockAccounts[0].Name)).toBeInTheDocument();
      expect(screen.getByText(mockAccounts[1].Name)).toBeInTheDocument();
    });
  });

  test("Handles no accounts", async () => {
    render(<AccountList accountList={[]} />);

    await waitFor(() => {
      expect(screen.getByTestId("account-list-container")).toBeInTheDocument();
      expect(screen.queryByTestId("account-list-item")).toBeNull();
    });
  });
});
