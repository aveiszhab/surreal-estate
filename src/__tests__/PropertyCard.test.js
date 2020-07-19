import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const props = {
    title: "2 bedroom period property",
    type: "flat",
    bathrooms: 2,
    bedrooms: 2,
    price: 2500000,
    city: "Leeds",
    email: "j.d.Smith@gmail.com",
  };

  const setUp = () => {
    const { asFragment, getByText, getByRole, getByTestId } = render(
      <PropertyCard {...props} />
    );

    return {
      asFragment: asFragment(),
      title: getByText(/period property/i),
      "type-city": getByText(/flat/i),
      bathrooms: getByTestId(/bathrooms/i),
      bedrooms: getByTestId(/bedrooms/i),
      price: getByText("2500000"),
      email: getByRole("link"),
    };
  };

  let renderedComponent;

  beforeEach(() => {
    renderedComponent = setUp();
  });

  it("to match the PropertyCard snapshot", () => {
    expect(renderedComponent.asFragment).toMatchSnapshot();
  });

  it("renders correctly", () => {
    expect(renderedComponent.title).toHaveTextContent(
      "2 bedroom period property"
    );
    expect(renderedComponent["type-city"]).toHaveTextContent("flat - Leeds");
    expect(renderedComponent.bedrooms).toHaveTextContent("2");
    expect(renderedComponent.bathrooms).toHaveTextContent("2");
    expect(renderedComponent.price).toHaveTextContent("2500000");
    expect(renderedComponent.email).toHaveAttribute("href");
  });
});
