
import React from 'react';
import './Slider.css';

const Slider = ({ value, onChange }) => {
  return (
    <div className="slider">
      <input type="range" value={value} onChange={onChange} />
      <span>{value}</span>
    </div>
  );
};

export default Slider;
