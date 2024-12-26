import React from "react";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import "./Dashboard.css";

// Register necessary Chart.js components
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ExpenseChart = ({ filter }) => {
  const pieData = {
    labels: ["Food", "Travel", "Entertainment", "Other"],
    datasets: [
      {
        label: "Expenses by Category",
        data: [300, 200, 150, 100],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"],
      },
    ],
  };

  const barData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Weekly Expenses",
        data: [400, 300, 200, 350],
        backgroundColor: "#36a2eb",
      },
    ],
  };

  return (
    <div className="expense-chart">
      <h3>Expense Breakdown ({filter})</h3>
      <div className="chart-container">
        <div className="chart-container__pie">
          <Pie data={pieData} />
        </div>
        <div className="chart-container__bar">
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseChart;
