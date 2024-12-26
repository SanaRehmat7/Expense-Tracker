import React, { useEffect, useRef } from "react";
import { Line, Pie } from "react-chartjs-2";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import "./ReportsPage.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ReportsPage = ({ expenses = [] }) => {
  const chartRef = useRef(null);

  // Generate monthly expense trends and category spending
  const monthlyTrends = Array(12).fill(0);
  const categorySpending = {};

  if (Array.isArray(expenses) && expenses.length > 0) {
    expenses.forEach((expense) => {
      const month = new Date(expense.date).getMonth();
      monthlyTrends[month] += expense.amount;

      const category = expense.category;
      if (category && typeof expense.amount === "number") {
        categorySpending[category] =
          (categorySpending[category] || 0) + expense.amount;
      }
    });
  } else {
    console.log("No valid expenses provided.");
  }

  // Debugging logs
  console.log("Expenses:", expenses);
  console.log("Category Spending:", categorySpending);

  // Prepare data for Pie and Line charts
  const pieData = {
    labels: Object.keys(categorySpending),
    datasets: [
      {
        data: Object.values(categorySpending),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const lineData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Monthly Expenses",
        data: monthlyTrends,
        borderColor: "#4A90E2",
        backgroundColor: "rgba(74, 144, 226, 0.2)",
        fill: true,
      },
    ],
  };

  // Export CSV
  const exportCSV = () => {
    const csvData = expenses
      .map((expense) => `${expense.date},${expense.category},${expense.amount}`)
      .join("\n");
    const blob = new Blob([`Date,Category,Amount\n${csvData}`], {
      type: "text/csv;charset=utf-8;",
    });
    saveAs(blob, "expenses.csv");
  };

  // Export as PNG
  const exportAsImage = async () => {
    const canvas = await html2canvas(chartRef.current);
    const image = canvas.toDataURL("image/png");
    saveAs(image, "expenses_summary.png");
  };

  useEffect(() => {
    return () => {
      Object.values(ChartJS.instances).forEach((chart) => chart.destroy());
    };
  }, []);

  return (
    <div className="reports-page">
      <h2>Reports</h2>
      <div className="chart-container" ref={chartRef}>
        <div className="chart-item">
          <h3>Monthly Expense Trends</h3>
          <Line data={lineData} key={`line-chart-${Date.now()}`} />
        </div>
        <div className="chart-item">
          <h3>Highest Spending Categories</h3>
          {Object.keys(categorySpending).length > 0 ? (
            <Pie data={pieData} key={`pie-chart-${Date.now()}`} />
          ) : (
            <p>No data available for spending categories.</p>
          )}
        </div>
      </div>
      <div className="report-actions">
        <button onClick={exportCSV} className="btn-download">
          Export as CSV
        </button>
        <button onClick={exportAsImage} className="btn-download">
          Download Summary as Image
        </button>
      </div>
    </div>
  );
};

export default ReportsPage;
