

import React, { useState, useEffect } from 'react';


const Spin = ({ size, color, duration }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 10) % 360);
    }, duration || 100);

    return () => clearInterval(interval);
  }, [duration]);

  const spinnerStyle = {
    width: size || '30px',
    height: size || '30px',
    border: `4px solid ${color || 'rgba(0, 123, 255, 0.3)'}`,
    borderTop: `4px solid ${color || '#007bff'}`,
    transform: `rotate(${rotation}deg)`,
  };

  return <div className="spin" style={spinnerStyle}></div>;
};

export default Spin;
