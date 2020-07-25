import React from "react";
import { render, wait, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "../components/SideBar";

describe("SideBar", () => {
  const setUp = () => {
    const { asFragment, getByRole } = render(
      <Router>
        <SideBar />
      </Router>
    );

    return {
      asFragment: asFragment(),
      filterHeading: getByRole("heading", { name: /filter/i }),
      sortHeading: getByRole("heading", { name: /sort/i }),
      manchester: getByRole("link", { name: /manchester/i }),
      leeds: getByRole("link", { name: /leeds/i }),
      sheffield: getByRole("link", { name: /sheffield/i }),
      liverpool: getByRole("link", { name: /liverpool/i }),
      ascending: getByRole("link", { name: /ascending/i }),
      descending: getByRole("link", { name: /descending/i }),
      searchButton: getByRole("button", { name: /search/i }),
      resetButton: getByRole("button", { name: /clear/i }),
      searchInput: getByRole("textbox", { name: /search-input/i }),
    };
  };

  let renderedComponent;

  beforeEach(() => {
    renderedComponent = setUp();
  });

  it("renders correctly to match the SideBar snapshot", () => {
    expect(renderedComponent.asFragment).toMatchSnapshot();
  });

  it("renders correctly", () => {
    expect(renderedComponent.filterHeading).toHaveTextContent("Filter by City");
    expect(renderedComponent.sortHeading).toHaveTextContent("Sort by Price");

    expect(renderedComponent.manchester).toHaveTextContent("Manchester");
    expect(renderedComponent.manchester).toHaveAttribute(
      "href",
      '/?query={"city":"Manchester"}'
    );
    expect(renderedComponent.sheffield).toHaveTextContent("Sheffield");
    expect(renderedComponent.sheffield).toHaveAttribute(
      "href",
      '/?query={"city":"Sheffield"}'
    );

    expect(renderedComponent.leeds).toHaveTextContent("Leeds");
    expect(renderedComponent.leeds).toHaveAttribute(
      "href",
      '/?query={"city":"Leeds"}'
    );

    expect(renderedComponent.liverpool).toHaveTextContent("Liverpool");
    expect(renderedComponent.liverpool).toHaveAttribute(
      "href",
      '/?query={"city":"Liverpool"}'
    );

    expect(renderedComponent.ascending).toHaveTextContent(/ascending/i);
    expect(renderedComponent.ascending).toHaveAttribute(
      "href",
      '/?sort={"price":1}'
    );

    expect(renderedComponent.descending).toHaveTextContent(/descending/i);
    expect(renderedComponent.descending).toHaveAttribute(
      "href",
      '/?sort={"price":-1}'
    );

    expect(renderedComponent.searchButton).toHaveClass("search-button");
    expect(renderedComponent.searchButton).toBeEnabled();

    expect(renderedComponent.resetButton).toHaveClass("reset-button");
    expect(renderedComponent.resetButton).toBeEnabled();

    expect(renderedComponent.searchInput).toHaveClass("search-input");
  });
});
