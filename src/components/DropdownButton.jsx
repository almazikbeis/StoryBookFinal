// DropdownButton.js

import React, { useState } from 'react';
import './DropdownButton.css';

const DropdownButton = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="dropdown-button">
      <button>{selectedOption.label}</button>
      <ul>
        {options.map((option) => (
          <li key={option.value} onClick={() => handleSelect(option)}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownButton;
