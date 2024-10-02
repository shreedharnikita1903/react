// src/Components/dashboards/SimpleBarChar.jsx

import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const SimpleBarChar = () => {
  const data = {
    series: [
      {
        name: 'Sales',
        data: [120, 150, 180, 220, 270],
      },
    ],
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  };

  return (
    <div>
      <h2>Bar Chart Example</h2>
      <BarChart
        series={data.series}
        categories={data.categories}
        width={500}
        height={300}
      />
    </div>
  );
};

export default SimpleBarChar;
