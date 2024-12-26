import React, { useState, useEffect } from "react";
import "./ExpenseModal.css";

const ExpenseModal = ({ expense, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    date: "",
    category: "",
    amount: "",
    note: "",
  });

  useEffect(() => {
    if (expense) {
      setFormData({
        date: expense.date || "",
        category: expense.category || "",
        amount: expense.amount || "",
        note: expense.note || "",
      });
    } else {
      setFormData({
        date: "",
        category: "",
        amount: "",
        note: "",
      });
    }
  }, [expense]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.date || !formData.category || !formData.amount) {
      alert("Please fill in all required fields!");
      return;
    }

    onSave({
      ...formData,
      amount: parseFloat(formData.amount), 
    });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{expense ? "Edit Expense" : "Add Expense"}</h2>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="E.g., Food, Travel"
        />
        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="E.g., 100"
        />
        <label>Note:</label>
        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          placeholder="Add a note (optional)"
        ></textarea>
        <div className="modal-actions">
          <button onClick={handleSubmit}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseModal;
