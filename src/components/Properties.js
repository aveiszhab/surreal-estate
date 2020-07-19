import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import { listProperty } from "../requests/requests";
import Alert from "./Alert";
import "../styles/Properties.css";

const Properties = () => {
  const initialState = {
    properties: [],
    alert: {
      message: "",
      success: false,
    },
  };

  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    setAlert({ message: "", isSuccess: false });
    listProperty(setProperties, setAlert);
  }, []);

  return (
    <div className="properties">
      <Alert message={alert.message} success={alert.isSuccess} />
      {properties.map((property) => (
        <PropertyCard key={property._id} {...property} />
      ))}
    </div>
  );
};

export default Properties;
