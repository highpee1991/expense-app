import React from "react";
import ExpenseDate from "../date/ExpenseDate";
import "./expenseList.css";
import { FaTrash } from "react-icons/fa";

const ExpenseList = ({ expenseList, handleDelete, filterYear }) => {
  // const expenseData = expenseList.map((list) => {
  //   const dataItem = (
  //     <div key={list.id} className="main--wrapper">
  //       <div className="itemListWrapper">
  //         <div className="date--item all--list">
  //           <div className="date-item-gotten">
  //             <div className="itemList--date">
  //               <ExpenseDate date={list.date} />
  //             </div>
  //           </div>
  //           <div className="item--gotten all--list">
  //             <div className="item">{list.item}</div>
  //           </div>
  //         </div>
  //         <div className="amounts all--list">
  //           <div className="amount--gotten">{list.amount}</div>

  //           <div className="del" onClick={() => handleDelete(list.id)}>
  //             D
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );

  //   return dataItem;
  // });

  const expenseData = expenseList
    .filter((expenseFilter) => expenseFilter.date.includes(filterYear))
    .map((list) => {
      const dataItem = (
        <div key={list.id} className="main--wrapper">
          <div className="itemListWrapper">
            <div className="date--item all--list">
              <div className="date-item-gotten">
                <div className="itemList--date">
                  <ExpenseDate date={list.date} />
                </div>
              </div>
              <div className="item--gotten all--list">
                <div className="item">{list.item}</div>
              </div>
            </div>
            <div className="amounts all--list">
              <div className="amount--gotten">{list.amount}</div>

              <div className="del" onClick={() => handleDelete(list.id)}>
                <FaTrash />
              </div>
            </div>
          </div>
        </div>
      );

      return dataItem;
    });

  const displayResult =
    expenseData.length === 0 ? (
      <h2 className="no--expense">No expense found for the selected year</h2>
    ) : (
      expenseData
    );

  return expenseList.length === 0 ? (
    <h2 className="no--expense">
      You have deleted all expense, please add new expense
    </h2>
  ) : (
    displayResult
  );
};

export default ExpenseList;
