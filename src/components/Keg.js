import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return(
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>{props.brand} - {props.name}</h3>
        <p>Price per pint:{props.price}</p>
        <p>ABV:{props.alcoholContent}</p>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;