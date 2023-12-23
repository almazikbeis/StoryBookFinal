
import React from 'react';
import PropTypes from 'prop-types';


const UserProfileImage = ({ src, alt, size }) => {
  const imageStyle = {
    width: size || '40px',
    height: size || '40px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '10px',
  };

  return <img className="user-profile-image" src={src} alt={alt} style={imageStyle} />;
};

UserProfileImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default UserProfileImage;
