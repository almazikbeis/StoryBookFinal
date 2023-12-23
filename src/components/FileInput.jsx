
import React from 'react';

const FileInput = ({ label, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="file" onChange={onChange} />
    </div>
  );
};

export default FileInput;
