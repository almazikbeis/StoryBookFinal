
import React from 'react';

const PasswordInput = ({ label, placeholder, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="password" placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default PasswordInput;
