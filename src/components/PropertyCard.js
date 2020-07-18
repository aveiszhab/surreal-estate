import React from "react";
import "../styles/PropertyCard.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faPoundSign,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import MyLogo from "../MyLogo.png";

const PropertyCard = ({
  title,
  type,
  city,
  bathrooms,
  bedrooms,
  price,
  email,
}) => {
  return (
    <div className="property-card">
      <div className="property-card logo-container">
        <img className="property-card logo" src={MyLogo} alt="logo" />
      </div>
      <div className="property-card title">{title}</div>
      <div className="property-card city-type">{`${type} - ${city}`}</div>
      <div className="property-card bedrooms" data-testid="bedrooms">
        <span>
          <FontAwesomeIcon icon={faBed} />
          {` ${bedrooms}`}
        </span>
      </div>
      <div className="property-card bathrooms" data-testid="bathrooms">
        <span>
          <FontAwesomeIcon icon={faBath} />
          {` ${bathrooms}`}
        </span>
      </div>
      <div className="property-card price">
        <span>
          <FontAwesomeIcon icon={faPoundSign} />
          {` ${price}`}
        </span>
      </div>
      <div className="property-card email">
        <span className="container">
          <a href={`mailto:${email}`}>
            <FontAwesomeIcon id="iconId" icon={faEnvelope} />
          </a>
          Email
        </span>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};
export default PropertyCard;
