// Drawers.js

import React, { useState } from 'react';
import './Drawers.css';

const Drawers = ({ items }) => {
  const [activeDrawer, setActiveDrawer] = useState(null);

  const handleDrawerClick = (drawer) => {
    setActiveDrawer(activeDrawer === drawer ? null : drawer);
  };

  return (
    <div className="drawers">
      {items.map((item, index) => (
        <div key={index} className={`drawer ${activeDrawer === index ? 'active' : ''}`}>
          <div className="drawer-header" onClick={() => handleDrawerClick(index)}>
            {item.title}
          </div>
          <div className="drawer-content">{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Drawers;
