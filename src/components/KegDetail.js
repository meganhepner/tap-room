import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg } = props
  
  return(
    <React.Fragment>
      <h2>Keg Details</h2>
      <h3>{keg.brand} {keg.name}</h3>
      <p>Price per pint: {keg.price}</p>
      <p>ABV: {keg.alcoholContent}</p>
      <p>Remaining Pints: {keg.kegSize}</p>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingEdit: PropTypes.func
}

export default KegDetail;