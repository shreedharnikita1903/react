// MultiLineChart.js
import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MultiLineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const gradient1 = chart.ctx.createLinearGradient(0, 0, 0, 400);
      gradient1.addColorStop(0, 'rgba(75, 192, 192, 0.4)');
      gradient1.addColorStop(1, 'rgba(75, 192, 192, 0)');

      const gradient2 = chart.ctx.createLinearGradient(0, 0, 0, 400);
      gradient2.addColorStop(0, 'rgba(255, 99, 132, 0.4)');
      gradient2.addColorStop(1, 'rgba(255, 99, 132, 0)');

      chart.data.datasets[0].backgroundColor = gradient1;
      chart.data.datasets[1].backgroundColor = gradient2;
      chart.update();
    }
  }, []);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales 2023',
        data: [65, 59, 80, 81, 56, 55],
        fill: true,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointRadius: 5,
        pointHoverRadius: 8,
      },
      {
        label: 'Sales 2022',
        data: [45, 49, 60, 70, 46, 50],
        fill: true,
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointRadius: 5,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Important to set for custom height
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
            weight: 'bold',
          },
          color: '#333',
        },
      },
      title: {
        display: true,
        text: 'Sales Data Comparison (2022 vs 2023)',
        font: {
          size: 18,
          weight: 'bold',
        },
        color: '#111',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(200, 200, 200, 0.3)',
        },
      },
    },
  };

  return (
    <div style={{ height: '300px' }}> {/* Set chart container height to 300px */}
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default MultiLineChart;
