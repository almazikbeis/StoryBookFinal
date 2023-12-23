
import React from 'react';
import './MessageBox.css';

const MessageBox = ({ type, text }) => {
  return <div className={`message-box ${type}`}>{text}</div>;
};

export default MessageBox;
