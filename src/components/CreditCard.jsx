import React from 'react';
import PropTypes from 'prop-types';

function CreditCard(props) {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
  const displayLastFourDigits = (number) => {
    return '•••• •••• •••• ' + number.slice(-4);
  };
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    padding: '20px',
    borderRadius: '15px',
    display: 'inline-block',
    margin: '10px',
    width: '300px',
  };

  const logoStyle = {
    width: '60px',
    float: 'right',
};
  return (
    <div style={cardStyle}>
    <img
        src={type === 'Visa' ? '/src/assets/images/visa.png' : '/src/assets/images/master-card.svg'}
        alt={type}
        style={logoStyle}
      />
      <div>
        <p>{displayLastFourDigits(number)}</p>
        <p>
          Expires {expirationMonth}/{expirationYear}
        </p>
        <p>{bank}</p>
        <p>{owner}</p>
      </div>
    </div>
  );
}

CreditCard.propTypes = {
  type: PropTypes.oneOf(["Visa", "Master Card"]).isRequired,
  number: PropTypes.string.isRequired,
  expirationMonth: PropTypes.number.isRequired,
  expirationYear: PropTypes.number.isRequired,
  bank: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CreditCard;