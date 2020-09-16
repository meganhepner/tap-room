import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.kegList.map((keg) =>
        <Keg 
          whenKegClicked = {props.onKegSelection}
          whenKegDecrementClicked = {props.decrementKeg}
          name={keg.name}
          brand={keg.brand}
          price={parseInt(keg.price)}
          alcoholContent={parseInt(keg.alcoholContent)}
          kegSize={parseInt(keg.kegSize)}
          id = {keg.id}
          key={keg.id} />
      )}
      <hr/>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  decrementKeg: PropTypes.func,
};

export default KegList;