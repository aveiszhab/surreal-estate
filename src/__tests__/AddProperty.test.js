import React from "react";
import { render } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
  const setUp = () => {
    const { asFragment } = render(<AddProperty />);

    return {
      asFragment: asFragment(),
    };
  };

  let renderedComponent;

  beforeEach(() => {
    renderedComponent = setUp();
  });

  it("renders correctly to match the NavBar snapshot", () => {
    expect(renderedComponent.asFragment).toMatchSnapshot();
  });
});
