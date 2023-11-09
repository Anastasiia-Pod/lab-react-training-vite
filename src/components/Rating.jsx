import React from 'react';
import PropTypes from 'prop-types';

function Rating (props){
    const {children} = props;
    const filledStars = Math.round(children);
    const emptyStars = 5 - filledStars;
    const stars = [];
    for (let i = 0; i < filledStars; i++) {
        stars.push('★');
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push('☆');
      }

    return (
      <div className='rating'>
        <h3>{stars.join('')}</h3>
      </div>
    );
  }

Rating.propTypes = {
    children: PropTypes.number.isRequired,
  };
  
  export default Rating;