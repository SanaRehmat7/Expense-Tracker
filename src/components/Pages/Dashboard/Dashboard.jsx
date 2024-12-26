import React from "react";
import { useOutletContext } from "react-router-dom";
import SummaryCard from "./SummaryCard";
import ExpenseChart from "./ExpenseChart";
import ExpenseModal from "../../ExpenseModal/ExpenseModal";
import TransactionList from "../TransactionList/TransactionList";
import "./Dashboard.css";


const Dashboard = () => {
  const { expenses, onAddExpense, onEditExpense, onDeleteExpense } = useOutletContext();
 // Calculate total expenses
const totalExpenses = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h2>Dashboard</h2>
        <button className="btn-add-expense" onClick={() => onAddExpense({ id: Date.now(), date: "2024-01-03", category: "Misc", amount: Math.floor(Math.random() * 100) + 1,})}>
          + Add Expense
        </button>
      </div>
      <SummaryCard expenses={expenses} />
      <ExpenseChart expenses={expenses} />
      <TransactionList
        expenses={expenses}
        onEdit={onAddExpense}
        onDelete={onDeleteExpense}
      />
    </div>
  );
};

export default Dashboard;


