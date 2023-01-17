import React from "react";
import "./expenseDate.css";

const ExpenseDate = ({ date }) => {
  //  the newDate is needed to stop fullyear is not a function erroe
  date = new Date(date);
  const month = date.toLocaleString("en-UK", { month: "long" });
  const day = date.toLocaleString("en-UK", { day: "2-digit" });
  const year = date.getFullYear();

  // i received error of type error fullyear is not a function using the below code

  // const month = date.toLocaleString("en-UK", { month: "long" });
  // const day = date.toLocaleString("en-UK", { day: "2-digit" });
  // const year = new Date().getFullYear();

  return (
    <div className="expense---date">
      <div className="expense--date_month dates">{month}</div>
      <div className="expense--date_day dates">{day}</div>
      <div className="expense--date_year dates">{year}</div>
    </div>
  );
};

export default ExpenseDate;
