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
      <button onClick={ props.onClickingIncrement }>Sell Pint</button>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  kegSize: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  onClickingIncrement: PropTypes.func
}

export default Keg;