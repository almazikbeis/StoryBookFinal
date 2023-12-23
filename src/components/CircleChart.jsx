
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const CircleChart = ({ data, options }) => {
  return <Doughnut data={data} options={options} />;
};

CircleChart.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

export default CircleChart;
