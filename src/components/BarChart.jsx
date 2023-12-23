
import React from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const BarChart = ({ data, options }) => {
  return <Bar data={data} options={options} />;
};

BarChart.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

export default BarChart;
