import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  const setUp = () => {
    const { asFragment, getByRole } = render(
      <Router>
        <NavBar />
      </Router>
    );

    return {
      asFragment: asFragment(),
      logo: getByRole("img", { name: /logo/i }),
      linkToProperties: getByRole("link", {
        name: /View Properties/i,
      }),
      linkToAddProperty: getByRole("link", {
        name: /Add Property/i,
      }),
    };
  };

  let renderedComponent;

  beforeEach(() => {
    renderedComponent = setUp();
  });

  it("renders correctly to match the NavBar snapshot", () => {
    expect(renderedComponent.asFragment).toMatchSnapshot();
  });

  it("renders logo correctly", () => {
    expect(renderedComponent.logo).toHaveClass("navbar-logo");
    expect(renderedComponent.logo).toHaveAttribute(
      "src",
      expect.stringContaining("MyLogo")
    );
    expect(renderedComponent.logo).toHaveAttribute(
      "alt",
      expect.stringContaining("logo")
    );
  });

  it("renders properties link properly", () => {
    expect(renderedComponent.linkToProperties).toHaveAttribute("href", "/");
  });

  it("renders add property link properly", () => {
    expect(renderedComponent.linkToAddProperty).toHaveAttribute(
      "href",
      "/add-property"
    );
  });
});
