import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import MyLogo from "../MyLogo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={MyLogo} alt="logo" />
      <h2>Surreal Estate</h2>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-property">Add Property Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
