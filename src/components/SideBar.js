import React, { useState } from "react";
import "../styles/SideBar.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const { search } = useLocation();
  const history = useHistory();
  const [query, setQuery] = useState("");

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    history.push(newQueryString);
  };

  return (
    <div>
      <h4>Search by Title</h4>
      <form className="search" onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>

      <div className="sidebar-links">
        <h4>Filter by City</h4>
        <Link
          className="sidebar-links-items"
          to={buildQueryString("query", { city: "Manchester" })}
        >
          Manchester
        </Link>

        <Link
          className="sidebar-links-items"
          to={buildQueryString("query", { city: "Leeds" })}
        >
          Leeds
        </Link>

        <Link
          className="sidebar-links-items"
          to={buildQueryString("query", { city: "Sheffield" })}
        >
          Sheffield
        </Link>

        <Link
          className="sidebar-links-items"
          to={buildQueryString("query", { city: "Liverpool" })}
        >
          Liverpool
        </Link>

        <h4>Sort by Price</h4>

        <Link
          className="sidebar-links-items"
          to={buildQueryString("sort", { price: +1 })}
        >
          Price Ascending
        </Link>

        <Link
          className="sidebar-links-items"
          to={buildQueryString("sort", { price: -1 })}
        >
          Price Descending
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
