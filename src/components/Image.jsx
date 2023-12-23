
import React from 'react';
import PropTypes from 'prop-types';


const Image = ({ src, alt, rounded, circle, width, height }) => {
  const imageStyle = {
    borderRadius: rounded ? '8px' : circle ? '50%' : '0',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    width: width || '100%',
    height: height || 'auto',
  };

  return <img className="custom-image" src={src} alt={alt} style={imageStyle} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Image;
