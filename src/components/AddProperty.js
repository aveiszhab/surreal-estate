import React, { useState } from "react";
import "../styles/AddProperty.css";
import { postProperty } from "../requests/requests";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: 0,
      bathrooms: 0,
      price: 0,
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    postProperty(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="AddProperty">
      <form onSubmit={handleAddProperty}>
        <div className="title">
          <label className="label" htmlFor="title">
            Title:
            <input
              className="input"
              type="text"
              placeholder="Property tagline"
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <div className="city-select">
          <label className="label" htmlFor="city">
            Location:
            <select
              className="select"
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
        </div>

        <div className="type-select">
          <label className="label" htmlFor="type">
            Property type:
            <select
              className="select"
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>

        <div className="bedrooms">
          <label className="label" htmlFor="bedrooms">
            Number of Bedrooms:
            <input
              className="input"
              type="number"
              placeholder="Number of bedrooms"
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <div className="bathrooms">
          <label className="label" htmlFor="bathrooms">
            Number of Bathrooms:
            <input
              className="input"
              type="number"
              placeholder="Number of bathrooms"
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <div className="price">
          <label className="label" htmlFor="price">
            Price:
            <input
              className="input"
              type="number"
              placeholder="Price of the property"
              id="price"
              name="price"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <div className="email">
          <label className="label" htmlFor="email">
            Contact email address:
            <input
              className="input"
              type="email"
              placeholder="e.g: john.smith@email.co.uk"
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <button className="add-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
