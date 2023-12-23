
import React from 'react';

const DateTimePicker = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="datetime-local" value={value} onChange={onChange} />
    </div>
  );
};

export default DateTimePicker;
