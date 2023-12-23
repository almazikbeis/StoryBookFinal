
import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ value }) => {
  return (
    <div className="progress-bar">
      <div style={{ width: `${value}%` }} className="progress-bar-fill"></div>
    </div>
  );
};

export default ProgressBar;
