
import React from 'react';

const EmailInput = ({ label, placeholder, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="email" placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default EmailInput;
