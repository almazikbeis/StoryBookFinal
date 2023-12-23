
import React from 'react';

const NumberInput = ({ label, placeholder, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="number" placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default NumberInput;
