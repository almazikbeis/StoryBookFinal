
import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const LineChart = ({ data, options }) => {
  return <Line data={data} options={options} />;
};

LineChart.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

export default LineChart;
