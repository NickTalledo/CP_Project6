import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Import Chart.js properly

const ExerciseChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    // Render the new chart
    const ctx = chartRef.current.getContext("2d");
    chartInstance = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup the chart instance when the component unmounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} width="400" height="200"></canvas>;
};

export default ExerciseChart;
