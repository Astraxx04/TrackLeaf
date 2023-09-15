import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Chart = ({ items }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!items || items.length === 0) return;

    const categoryCounts = {};
    items.forEach((item) => {
      if (categoryCounts[item.category]) {
        categoryCounts[item.category]++;
      } else {
        categoryCounts[item.category] = 1;
      }
    });

    const chartData = {
      labels: Object.keys(categoryCounts),
      datasets: [
        {
          data: Object.values(categoryCounts),
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            // Add more colors if needed
          ],
        },
      ],
    };

    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: chartData,
    });
  }, [items]);

  return <canvas ref={chartRef} width="400" height="400" />;
};

export default Chart;
