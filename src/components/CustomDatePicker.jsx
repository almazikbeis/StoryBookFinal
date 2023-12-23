
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';

const CustomDatePicker = ({ selectedDate, onChange, placeholderText, ...rest }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      placeholderText={placeholderText || 'Select a date'}
      {...rest}
    />
  );
};

CustomDatePicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  placeholderText: PropTypes.string,
};

export default CustomDatePicker;
