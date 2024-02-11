// Header.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/app/header";

describe("Header Component", () => {
  test("Renders without crashing", () => {
    render(<Header />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("User Accounts")).toBeInTheDocument();
  });

  test("Has correct links", () => {
    render(<Header />);
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("User Accounts").closest("a")).toHaveAttribute(
      "href",
      "/account-list"
    );
  });
});
