// Card.js

import React from 'react';
import './Card.css';

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div>{content}</div>
    </div>
  );
};

export default Card;
