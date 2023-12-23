// Collapse.js

import React, { useState } from 'react';
import './Collapse.css';

const Collapse = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`collapse ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2>{title}</h2>
      </div>
      {isCollapsed && <div className="collapse-content">{content}</div>}
    </div>
  );
};

export default Collapse;
