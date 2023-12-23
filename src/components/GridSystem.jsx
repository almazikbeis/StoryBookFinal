// GridSystem.js

import React from 'react';
import PropTypes from 'prop-types';


const GridSystem = ({ children, columns, gap, justifyItems, alignItems }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: columns || 'repeat(auto-fill, minmax(250px, 1fr))',
    gridGap: gap || '20px',
    justifyItems: justifyItems || 'stretch',
    alignItems: alignItems || 'stretch',
  };

  return <div className="grid-system" style={gridStyle}>{children}</div>;
};

GridSystem.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.string,
  gap: PropTypes.string,
  justifyItems: PropTypes.string,
  alignItems: PropTypes.string,
};

export default GridSystem;
