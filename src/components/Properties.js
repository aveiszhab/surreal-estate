import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import SideBar from "./SideBar";
import Alert from "./Alert";
import { listProperty, filterProperties } from "../requests/requests";

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

  const { search } = useLocation();

  useEffect(() => {
    setAlert({ message: "", isSuccess: false });
    filterProperties(search, setProperties, setAlert);
  }, [search]);

  return (
    <div className="full-page">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="properties">
        <Alert message={alert.message} success={alert.isSuccess} />
        {properties.map((property) => (
          <PropertyCard key={property._id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
