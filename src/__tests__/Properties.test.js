import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Properties from "../components/Properties";

describe("Properties", () => {
  it("renders correctly to match the Properties snapshot", () => {
    const { asFragment } = render(
      <Router>
        <Properties />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
