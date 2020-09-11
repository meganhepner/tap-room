import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

function Keg(props) {
  return(
    <React.Fragment>
      <h3>{props.brand} {props.name}</h3>
      <p>Price per pint:{props.price}</p>
      <p>ABV:{props.alcoholContent}</p>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number
}