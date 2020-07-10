import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("displays an error message", () => {
    const { getByText } = render(<Alert message="Error!" />);
    expect(getByText(/error/i).textContent).toContain("Error");
  });
});
