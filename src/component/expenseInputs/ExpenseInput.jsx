import React, { useState } from "react";
import "./expense.css";

const ExpenseInput = ({ expenseData, setExpenseData, addTask }) => {
  const handleChange = (e) => {
    const { value, name } = e.target;

    setExpenseData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(expenseData);

    setExpenseData((data) => ({
      ...data,
      title: "",
      amount: "",
      date: "",
    }));
  };

  const handleClear = () => {
    setExpenseData((data) => ({
      ...data,
      title: "",
      amount: "",
      date: "",
    }));
  };

  return (
    <div className="expense--inputs">
      <form className="expense--form" onSubmit={handleSubmit}>
        <div className="expense--wrapper">
          <div className="title expense--input">
            <h2 className="expense--title expense-header">Title</h2>
            <input
              type="text"
              id="text"
              className="input"
              name="title"
              value={expenseData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="amount expense--input">
            <h2 className="expense--amount expense-header">Amount</h2>
            <input
              type="number"
              name="amount"
              min="0.01"
              step="0.01"
              id="num"
              className="input"
              onChange={handleChange}
              value={expenseData.amount}
              required
            />
          </div>
          <div className="date expense--input">
            <h2 className="expense--date expense-header">Date</h2>
            <input
              type="date"
              min="2021-01-01"
              max="2023-12-31"
              name="date"
              id="date"
              className="input"
              onChange={handleChange}
              value={expenseData.date}
              required
            />
          </div>
        </div>
        <div className="btns">
          <button type="reset" className="cancel btn" onClick={handleClear}>
            Cancel
          </button>
          <button className="add--expense btn">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseInput;
