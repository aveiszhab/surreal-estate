import React from "react";
import "../styles/Alert.css";
import PropTypes from "prop-types";

const Alert = ({ message }) => {
  return <div>{message}</div>;
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Alert;
