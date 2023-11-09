import React from 'react';
import PropTypes from 'prop-types';

function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;

  return (
    <div className="id-card">
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <div>
        <strong>Last Name:</strong> {lastName}
      </div>
      <div>
        <strong>First Name:</strong> {firstName}
      </div>
      <div>
        <strong>Gender:</strong> {gender}
      </div>
      <div>
        <strong>Height:</strong> {height} cm
      </div>
      <div>
        <strong>Birth:</strong> {birth.toDateString()}
      </div>
    </div>
  );
}

IdCard.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  gender: PropTypes.oneOf(['male', 'female']).isRequired,
  height: PropTypes.number.isRequired,
  birth: PropTypes.instanceOf(Date).isRequired,
  picture: PropTypes.string.isRequired,
};

export default IdCard;