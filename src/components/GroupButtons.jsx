

import React from 'react';
import './GroupButtons.css';

const GroupButtons = ({ buttons, onSelect }) => {
  return (
    <div className="group-buttons">
      {buttons.map((button) => (
        <button key={button.value} onClick={() => onSelect(button)}>
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default GroupButtons;
