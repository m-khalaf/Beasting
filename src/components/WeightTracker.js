// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';

// const WeightChart = () => {
//   const [weights, setWeights] = useState([
//     { date: '2020-01-01', weight: 160 },
//     { date: '2020-01-02', weight: 162 },
//     { date: '2020-01-03', weight: 159 },
//     { date: '2020-01-04', weight: 158 },
//     { date: '2020-01-05', weight: 157 },
//     // ... more data points
//   ]);

//   // useEffect(() => {
//   //   // Fetch weight data here and update the state with setWeights
//   // }, []);

//   const data = {
//     labels: weights.map(weight => weight.date),
//     datasets: [
//       {
//         label: 'Weight',
//         data: weights.map(weight => weight.weight),
//         backgroundColor: 'rgba(75,192,192,0.4)',
//         borderColor: 'rgba(75,192,192,1)',
//         pointBackgroundColor: '#fff',
//         pointBorderColor: 'rgba(75,192,192,1)',
//         pointBorderWidth: 1,
//         pointRadius: 5,
//         pointHoverRadius: 8,
//         pointHitRadius: 10
//       }
//     ]
//   };


import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart, Line } from 'react-chartjs-2'
ChartJS.register(...registerables);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My Weight',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const WeightTracker = () => {
  return (
    <div>
      <Line
        data={data}
        width={200}
        height={200}
        options={{ maintainAspectRatio: false }}
        style={{ width: '200px', height: '200px' }}
      />
    </div>
  );
};

export default WeightTracker;
