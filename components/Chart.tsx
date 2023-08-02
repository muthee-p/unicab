"use client"

import React from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale, Chart } from "chart.js";
import { registerables } from 'chart.js';
Chart.register(...registerables);

Chart.register(CategoryScale);

const AreaChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Rides',
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        data: [10, 20, 25, 30, 40, 35],
      },
      {
        label: 'Earnings',
        backgroundColor: 'rgba(255, 99, 132, 0.4)',
        borderColor: 'rgba(255, 99, 132, 1)',
        data: [150, 250, 200, 350, 300, 450],
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        
        display: true,
       
      },
      y: {
        
        
          display: true,
         
        },
      
    },
  };

  return (
    <div className='md:w-[40rem] md:h-[20rem] w-[20rem] my-8 flex justify-center items-center'>
      <h1></h1>
      <Line data={data} options={options} 
      />
    </div>
  );
};

export default AreaChart;
