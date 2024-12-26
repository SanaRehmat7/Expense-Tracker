import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./TransactionList.css";

const TransactionList = ({ expenses, onEdit, onDelete }) => {
  return (
    <div className="transaction-list">
      <h3>Transactions</h3>
      {expenses.length === 0 ? (
        <p>No transactions available.</p>
      ) : (
        <ul className="transaction-items">
          {expenses.map((expense, index) => (
            <li key={expense.id} className="transaction-item">
              <span className="transaction-date">{expense.date}</span>
              <span className="transaction-category">{expense.category}</span>
              <span className="transaction-amount">${expense.amount}</span>
              <div className="transaction-actions">
                <button
                  className="btn-edit"
                  onClick={() => onEdit(expense.id, { ...expense, amount: expense.amount + 10 })}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn-delete"
                  onClick={() => onDelete(expense.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
