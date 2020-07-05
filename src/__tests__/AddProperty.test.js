import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
  const setUp = () => {
    const { asFragment, getByLabelText, getByRole } = render(<AddProperty />);

    return {
      asFragment: asFragment(),
      addButton: getByRole("button", { name: /add/i }),
      title: getByLabelText(/title/i),
      email: getByLabelText(/email/i),
      city: getByLabelText(/location/i),
      type: getByLabelText(/type/i),
      bedrooms: getByLabelText(/bedroom/i),
      bathrooms: getByLabelText(/bathroom/i),
      price: getByLabelText(/price/i),
    };
  };

  const mockHandleFieldChange = (field, value) => {
    fireEvent.change(field, {
      target: { value },
    });
  };

  let renderedComponent;

  beforeEach(() => {
    renderedComponent = setUp();
  });
  describe("renders correctly", () => {
    it("to match the AddProperty snapshot", () => {
      expect(renderedComponent.asFragment).toMatchSnapshot();
    });

    it("title", () => {
      expect(renderedComponent.title).toHaveClass("input");
      expect(renderedComponent.title).toHaveAttribute("type", "text");
      expect(renderedComponent.title).toHaveAttribute("id", "title");
      expect(renderedComponent.title).toHaveAttribute("name", "title");
    });

    it("city", () => {
      expect(renderedComponent.city).toHaveClass("select");
      expect(renderedComponent.city).toHaveAttribute("id", "city");
      expect(renderedComponent.city).toHaveAttribute("name", "city");
    });

    it("type", () => {
      expect(renderedComponent.type).toHaveClass("select");
      expect(renderedComponent.type).toHaveAttribute("id", "type");
      expect(renderedComponent.type).toHaveAttribute("name", "type");
    });

    it("bedrooms", () => {
      expect(renderedComponent.bedrooms).toHaveClass("input");
      expect(renderedComponent.bedrooms).toHaveAttribute("type", "number");
      expect(renderedComponent.bedrooms).toHaveAttribute("id", "bedrooms");
      expect(renderedComponent.bedrooms).toHaveAttribute("name", "bedrooms");
    });

    it("bathrooms", () => {
      expect(renderedComponent.bathrooms).toHaveClass("input");
      expect(renderedComponent.bathrooms).toHaveAttribute("type", "number");
      expect(renderedComponent.bathrooms).toHaveAttribute("id", "bathrooms");
      expect(renderedComponent.bathrooms).toHaveAttribute("name", "bathrooms");
    });

    it("price", () => {
      expect(renderedComponent.price).toHaveClass("input");
      expect(renderedComponent.price).toHaveAttribute("type", "number");
      expect(renderedComponent.price).toHaveAttribute("id", "price");
      expect(renderedComponent.price).toHaveAttribute("name", "price");
    });

    it("email", () => {
      expect(renderedComponent.email).toHaveClass("input");
      expect(renderedComponent.email).toHaveAttribute("type", "email");
      expect(renderedComponent.email).toHaveAttribute("id", "email");
      expect(renderedComponent.email).toHaveAttribute("name", "email");
    });

    it("add button", () => {
      expect(renderedComponent.addButton).toHaveClass("add-button");
      expect(renderedComponent.addButton).toBeEnabled();
      expect(renderedComponent.addButton).toHaveAttribute("type", "submit");
      expect(renderedComponent.addButton).toHaveTextContent(/add/i);
    });
  });

  describe("form fields works correctly onChange", () => {
    it("title", () => {
      expect(renderedComponent.title.value).toBe("");
      mockHandleFieldChange(renderedComponent.title, "Bungalow in Leeds");
      expect(renderedComponent.title.value).toBe("Bungalow in Leeds");
    });

    it("city", () => {
      expect(renderedComponent.city.value).toBe("Manchester");
      mockHandleFieldChange(renderedComponent.city, "Leeds");
      expect(renderedComponent.city.value).toBe("Leeds");
    });

    it("type", () => {
      expect(renderedComponent.type.value).toBe("Flat");
      mockHandleFieldChange(renderedComponent.type, "Bungalow");
      expect(renderedComponent.type.value).toBe("Bungalow");
    });

    it("bedrooms", () => {
      expect(renderedComponent.bedrooms.value).toBe("0");
      mockHandleFieldChange(renderedComponent.bedrooms, "3");
      expect(renderedComponent.bedrooms.value).toBe("3");
    });

    it("bathrooms", () => {
      expect(renderedComponent.bathrooms.value).toBe("0");
      mockHandleFieldChange(renderedComponent.bathrooms, "2");
      expect(renderedComponent.bathrooms.value).toBe("2");
    });

    it("price", () => {
      expect(renderedComponent.price.value).toBe("0");
      mockHandleFieldChange(renderedComponent.price, "200000");
      expect(renderedComponent.price.value).toBe("200000");
    });

    it("email", () => {
      expect(renderedComponent.email.value).toBe("");
      mockHandleFieldChange(renderedComponent.email, "John.Smith@gmail@com");
      expect(renderedComponent.email.value).toBe("John.Smith@gmail@com");
    });
  });
});
