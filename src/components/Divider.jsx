// Divider.js

import React from 'react';
import PropTypes from 'prop-types';


const Divider = ({ type, color, text }) => {
  const dividerStyle = {
    height: type === 'vertical' ? '100%' : '1px',
    width: type === 'vertical' ? '1px' : '100%',
    backgroundColor: color || '#ddd',
    margin: type === 'vertical' ? '0 10px' : '15px 0',
    position: 'relative',
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '0 10px',
    backgroundColor: 'white',
  };

  return (
    <div className="divider" style={dividerStyle}>
      {text && <span style={textStyle}>{text}</span>}
    </div>
  );
};

Divider.propTypes = {
  type: PropTypes.oneOf(['horizontal', 'vertical']),
  color: PropTypes.string,
  text: PropTypes.string,
};

export default Divider;
