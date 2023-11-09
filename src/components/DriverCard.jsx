import React from 'react';
import PropTypes from 'prop-types';

function DriverCard(props) {
  const { name, rating, img, car } = props;
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;

  // Create an array to hold the star icons
  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push('★');
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push('☆');
  }

  const cardStyle = {
    backgroundColor: '#0b487d',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
    width: '900px',
  };

  const imageStyle = {
    width: '110px',
    height: '110px',
    borderRadius: '50%',
    marginRight: '20px',
  };

  return (
    <div className="driverCard" style={cardStyle}>
      <img src={img} alt={name} style={imageStyle} />
      <div>
        <h2>{name}</h2>
        <p>{stars.join('')}</p>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

DriverCard.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  car: PropTypes.shape({
    model: PropTypes.string.isRequired,
    licensePlate: PropTypes.string.isRequired,
  }).isRequired,
};

export default DriverCard;