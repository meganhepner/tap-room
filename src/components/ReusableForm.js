import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props){
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name of Beer' />
        <input
          type='text'
          name='brand'
          placeholder='Brand Name' />
        <input
          type='number'
          name='price'
          placeholder='Price per Pint' />
        <input
          type='number'
          name='alcoholContent'
          placeholder='ABV' />
        <input
          type='number'
          name='kegSize'
          placeholder='Pints in Keg' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;