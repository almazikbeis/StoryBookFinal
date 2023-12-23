
import React from 'react';
import PropTypes from 'prop-types';


const Text = ({ type, color, children, ...rest }) => {
  const Tag = type || 'div';

  const textStyle = {
    color: color || '#333',
  };

  return <Tag className={`custom-text ${type}`} style={textStyle} {...rest}>{children}</Tag>;
};

Text.propTypes = {
  type: PropTypes.oneOf(['div', 'span', 'h1', 'h2', 'h3', 'p', 'small']),
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Text;
