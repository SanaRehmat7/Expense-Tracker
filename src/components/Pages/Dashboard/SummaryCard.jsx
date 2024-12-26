import React from "react";
import "./Dashboard.css";

const SummaryCard = ({ expenses }) => {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="summary-card">
      <h3>Total Expenses</h3>
      <p className="summary-card__amount">${totalExpenses.toLocaleString()}</p>
    </div>
  );
};

export default SummaryCard;
