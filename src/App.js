
import React, { useState } from 'react';
import Spin from './components/Spin';
import Divider from './components/Divider';
import Image from './components/Image';
import Text from './components/Text';
import UserProfileImage from './components/UserProfileImage';
import CustomDatePicker from './components/DateTimePicker';
import GridSystem from './components/GridSystem';

import './App.css';

const stockData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Stock Price',
      data: [150, 155, 140, 160, 150, 165],
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      fill: false,
    },
  ],
};

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="app-container">
      <h1>Stock Analytics Dashboard</h1>

      <Divider type="horizontal" color="#007bff" text="Stock Overview" />

      <GridSystem columns="1fr 2fr" gap="20px">
        <div>
          <Text type="h2" color="#333">Analyst Profile</Text>
          <UserProfileImage
            src="https://example.com/analyst-profile.jpg"
            alt="Analyst"
            size="80px"
          />
          <Text type="p" color="#777">
            John Doe is a seasoned financial analyst with expertise in stock market trends and analysis.
          </Text>
        </div>

        <div>
          <Text type="h2" color="#333">Stock Price Trends</Text>
          <CustomDatePicker
            selectedDate={selectedDate}
            onChange={handleDateChange}
            placeholderText="Select a date"
          />
        
        </div>
      </GridSystem>

      <Divider type="horizontal" color="#007bff" text="Market Activity" />

      <GridSystem columns="repeat(auto-fill, minmax(250px, 1fr))" gap="20px">
        <div>
          <Text type="h3" color="#333">Top Gainers</Text>
          <Image
            src="https://example.com/top-gainers.jpg"
            alt="Top Gainers"
            width="100%"
            height="150px"
          />
        </div>

        <div>
          <Text type="h3" color="#333">Market News</Text>
          <Text type="p" color="#777">
            Stay updated with the latest market news and insights.
          </Text>
        </div>
      </GridSystem>

      <Divider type="horizontal" color="#007bff" text="Analyst Insights" />

      <GridSystem columns="1fr 1fr 1fr" gap="20px">
        <div>
          <Text type="h3" color="#333">Earnings Report</Text>
          <Spin size="50px" color="#007bff" />
        </div>

        <div>
          <Text type="h3" color="#333">Market Analysis</Text>
          <Image
            src="https://example.com/market-analysis.jpg"
            alt="Market Analysis"
            width="100%"
            height="120px"
          />
        </div>

        <div>
          <Text type="h3" color="#333">Financial Forecast</Text>
          <Text type="p" color="#777">
            Get insights into the future financial forecast of key stocks.
          </Text>
        </div>
      </GridSystem>
    </div>
  );
};

export default App;
