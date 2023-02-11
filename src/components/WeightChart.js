import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

export default function WeightChart () {
  const chartContainer = useRef(null);

  useEffect(() => {
    const ctx = chartContainer.current.getContext("2d");
    const weightData = {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Weight Progression",
          data: [150, 145, 140, 135],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1
        }
      ]
    };
    const chartOptions = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    };
    new Chart(ctx, {
      type: "line",
      data: weightData,
      options: chartOptions
    });
  }, []);

  return (
    <canvas
      ref={chartContainer}
      style={{ width: "80%", height: "50%" }}
    ></canvas>
  );
};

