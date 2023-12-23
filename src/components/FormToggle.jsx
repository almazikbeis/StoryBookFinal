// FormToggle.js

import React from 'react';
import './FormToggle.css';

const FormToggle = ({ label, checked, onChange }) => {
  return (
    <div className="form-toggle">
      <label>
        {label}
        <input type="checkbox" checked={checked} onChange={onChange} />
      </label>
    </div>
  );
};

export default FormToggle;
