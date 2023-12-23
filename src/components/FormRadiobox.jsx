// FormRadiobox.js

import React from 'react';
import './FormRadiobox.css';

const FormRadiobox = ({ label, value, checked, onChange }) => {
  return (
    <div className="form-radiobox">
      <label>
        <input type="radio" value={value} checked={checked} onChange={onChange} />
        {label}
      </label>
    </div>
  );
};

export default FormRadiobox;
