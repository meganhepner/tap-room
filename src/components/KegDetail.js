import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg } = props
  
  return(
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{props.brand} {props.name}</h3>
      <p>Price per pint:{props.price}</p>
      <p>ABV:{props.alcoholContent}</p>
      <button onClick={props.onClickingEdit}>Update Keg</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingEdit: PropTypes.func
}

export default KegDetail;