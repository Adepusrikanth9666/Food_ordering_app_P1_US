import React from "react";
import App from "../App";

// Import necessary libraries and components
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Import necessary libraries and components
// Describe block for all tests related to the App component
describe("App() App method", () => {
  // Happy path tests
  describe("Happy Paths", () => {
    it("should render the welcome message", () => {
      // Render the App component
      render(<App />);

      // Assert that the welcome message is displayed
      expect(
        screen.getByText("Hello welcome to react project")
      ).toBeInTheDocument();
    });
  });

  // Edge case tests
  describe("Edge Cases", () => {
    it("should handle rendering without crashing", () => {
      // Render the App component
      render(<App />);

      // Assert that the component renders without throwing an error
      expect(
        screen.getByText("Hello welcome to react project")
      ).toBeInTheDocument();
    });

    // Since the component is simple and does not take any props or state,
    // there are no additional edge cases to test.
  });
});
