import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;

  // Define the inline style based on the provided color values.
  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };

  return (
    <div className="box" style={boxStyle}>
      <p>rgb({r}, {g}, {b})</p>
    </div>
  );
}

export default BoxColor;