
import React from 'react';
import './ListGroup.css';

const ListGroup = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ListGroup;
