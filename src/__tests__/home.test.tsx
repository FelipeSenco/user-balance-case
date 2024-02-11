import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";
import * as utils from "@/utils";

const mockHasSession = jest.fn();

// Use jest.spyOn to spy on the actual utils module and mock its implementation
jest.spyOn(utils, "hasSession").mockImplementation(mockHasSession);

describe("Home Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Renders welcome message", () => {
    mockHasSession.mockReturnValue(false);
    render(<Home />);
    expect(screen.getByTestId("welcome-message")).toBeInTheDocument();
  });

  test("Displays login link when not logged in", () => {
    mockHasSession.mockReturnValue(false);
    render(<Home />);
    expect(screen.getByTestId("welcome-login")).toBeInTheDocument();
    expect(screen.getByText("Login")).toHaveAttribute("href", "/login");
  });

  test("Displays logged in message when logged in", () => {
    mockHasSession.mockReturnValue(true);
    render(<Home />);
    expect(screen.getByTestId("welcome-loggedin")).toBeInTheDocument();
  });
});
