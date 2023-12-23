
import React from 'react';
import './List.css';

const List = ({ items }) => {
  return (
    <ul className="custom-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
