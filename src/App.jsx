import { useEffect, useState } from "react";
import "./App.css";
import DummyData from "./component/DummyData";
import ExpenseInput from "./component/expenseInputs/ExpenseInput";
import ExpenseList from "./component/expenseList/ExpenseList";
import Filter from "./component/filter/Filter";
import uuid from "react-uuid";

function App() {
  const [expenseList, setExpenseList] = useState(
    JSON.parse(localStorage.getItem("expense")) || DummyData
  );

  console.log(expenseList);
  const [expenseData, setExpenseData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const [filterByYear, setFilterByYear] = useState({
    year: "",
  });

  useEffect(() => {
    localStorage.setItem("expense", JSON.stringify(expenseList));
  }, [expenseList]);

  const handleDelete = (id) => {
    const filter = expenseList.filter((data) => data.id !== id);

    setExpenseList(filter);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  console.log();

  const addTask = () => {
    let copy = [...expenseList];

    copy = [
      ...copy,
      {
        id: uuid(),
        date: expenseData.date,
        item: expenseData.title,
        amount: `${formatter.format(expenseData.amount)}`,
      },
    ];

    setExpenseList(copy);
  };

  const TotalPrice = () => {
    const filterExpenseAmount = expenseList
      .filter((li) => li.date.includes(filterByYear.year))
      .map((lis) => lis.amount);

    const removeAmountSign = filterExpenseAmount.map((li) =>
      li.replace("$", "").replace(",", "")
    );

    const convertToNumbers = removeAmountSign.map(Number);

    return convertToNumbers;
  };

  const sumTotal = (arr) => {
    if (arr.length === 0) {
      return "";
    }
    return arr.reduce((a, b) => a + b);
  };

  return (
    <div className="app">
      <h1 className="app--header">EXPENSE TRACKER</h1>
      <ExpenseInput
        addTask={addTask}
        expenseData={expenseData}
        setExpenseData={setExpenseData}
      />
      <div className="order--item">
        <div className="expense--app">
          <Filter
            setFilterByYear={setFilterByYear}
            filterByYear={filterByYear}
          />
          <ExpenseList
            expenseList={expenseList}
            filterYear={filterByYear.year}
            handleDelete={handleDelete}
          />

          {sumTotal(TotalPrice()) && (
            <div className="expenseTotal">
              <div className="expense--year">
                Sum Total Price for{" "}
                {filterByYear.year === ""
                  ? "All Year"
                  : `Year ${filterByYear.year}`}
              </div>

              <div className="expense-total-value">
                {formatter.format(sumTotal(TotalPrice()))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
