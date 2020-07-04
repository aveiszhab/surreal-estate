import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  it("renders correctly to match the NavBar snapshot", () => {
    const { asFragment } = render(
      <Router>
        <NavBar />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders logo correctly", () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    const logo = screen.getByRole("img", { name: /logo/i });

    expect(logo).toHaveClass("navbar-logo");
    expect(logo).toHaveAttribute("src", expect.stringContaining("surreal"));
    expect(logo).toHaveAttribute("alt", expect.stringContaining("logo"));
  });

  it("renders properties link properly", () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    const logo = screen.getByRole("link", { name: /View Properties/i });

    expect(logo).toHaveAttribute("href", "/");
  });

  it("renders add property link properly", () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    const logo = screen.getByRole("link", { name: /Add Property/i });

    expect(logo).toHaveAttribute("href", "/add-property");
  });
});
