import React from 'react';
import PropTypes from 'prop-types';

function Random (props){
    const {min,max} = props;

    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
      <div className='random'>
        <h3 className='randText'>Random value between {min} and {max}: </h3>
        {randomValue}
      </div>
    );
  }

Random.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  };
  
  export default Random;
