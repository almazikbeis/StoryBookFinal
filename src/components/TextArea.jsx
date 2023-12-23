
import React from 'react';

const FormTextarea = ({ label, placeholder, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <textarea placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default Textarea;
