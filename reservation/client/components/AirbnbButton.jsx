import React from 'react';

const buttonStyle = {
  backgroundColor: '#914669',
  color: '#fff',
  borderColor: 'transparent',
  borderRadius: '4px',
  borderWidth: '2px',
  fontSize: '16px',
  fontWeight: '500',
  padding: '10px 8px',
  lineHeight: '26px',
  cursor: 'pointer',
  width: '100%'
};

const AirbnbButton = (props) => (
  <button type="submit" style={buttonStyle}>
    {props.name}
  </button>
);

export default AirbnbButton;