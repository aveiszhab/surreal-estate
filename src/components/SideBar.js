import React, { useState } from "react";
import "../styles/SideBar.css";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";

const SideBar = () => {
  const { search } = useLocation();
  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };
  return (
    <div>
      <h2>Filter by City</h2>
      <div className="sidebar-links">
        <div className="sidebar-links-items">
          <Link to={buildQueryString("query", { city: "Manchester" })}>
            Manchester
          </Link>
        </div>
        <div className="sidebar-links-items">
          <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
        </div>
        <div className="sidebar-links-items">
          <Link to={buildQueryString("query", { city: "Sheffield" })}>
            Sheffield
          </Link>
        </div>
        <div className="sidebar-links-items">
          <Link to={buildQueryString("query", { city: "Liverpool" })}>
            Liverpool
          </Link>
        </div>
      </div>
      <h2>Sort by Price</h2>
      <div className="sidebar-links">
        <div className="sidebar-links-items">
          <Link to={buildQueryString("sort", { price: +1 })}>
            Price Ascending
          </Link>
        </div>
        <div className="sidebar-links-items">
          <Link to={buildQueryString("sort", { price: -1 })}>
            Price Descending
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
