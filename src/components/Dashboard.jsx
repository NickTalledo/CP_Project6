import React from "react";
import ExerciseChart from "./ExerciseChart";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const chartData = {
    labels: ["Strongman", "Strength", "Olympic Weightlifting"],
    datasets: [
      {
        label: "Number of Exercises",
        data: [15, 10, 7],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Exercise Dashboard</h1>
      <Link to="/" className="text-blue-500 mb-4 inline-block">
        &lt; Back to Exercise List
      </Link>
      <ExerciseChart data={chartData} />
    </div>
  );
};

export default Dashboard;
