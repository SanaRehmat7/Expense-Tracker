import React, { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import ExpenseModal from "../ExpenseModal/ExpenseModal";
import "./Home.css";

const Home = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, date: "2024-01-01", category: "Food", amount: 50 },
    { id: 2, date: "2024-02-15", category: "Travel", amount: 120 },
  ]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  // Add or Update Expense
    const handleSaveExpense = (expense) => {
    if (editingExpense) {
      setExpenses((prevExpenses) =>
        prevExpenses.map((item) =>
          item.id === editingExpense.id ? { ...expense, amount: parseFloat(expense.amount) } : item
        )
      );
    } else {
      setExpenses((prevExpenses) => [
        ...prevExpenses,
        { ...expense, amount: parseFloat(expense.amount), id: Date.now() },
      ]);
    }
    setEditingExpense(null);
    setModalOpen(false);
  };
  

  // Open Modal for Adding
  const handleAddExpense = () => {
    setEditingExpense(null);
    setModalOpen(true);
  };

  // Open Modal for Editing
  const handleEditExpense = (id) => {
    const expenseToEdit = expenses.find((expense) => expense.id === id);
    setEditingExpense(expenseToEdit);
    setModalOpen(true);
  };

  // Delete Expense
  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="home">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="content">
        <Outlet
          context={{
            expenses,
            onAddExpense: handleAddExpense,
            onEditExpense: handleEditExpense,
            onDeleteExpense: handleDeleteExpense,
          }}
        />
      </main>
      {isModalOpen && (
        <ExpenseModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSave={handleSaveExpense}
          expense={editingExpense}
        />
      )}
    </div>
  );
};

export default Home;
