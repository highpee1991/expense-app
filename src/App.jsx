import { useEffect, useState } from "react";
import "./App.css";
import DummyData from "./component/DummyData";
import ExpenseInput from "./component/expenseInputs/ExpenseInput";
import ExpenseList from "./component/expenseList/ExpenseList";
import Filter from "./component/filter/Filter";

function App() {
  const [expenseList, setExpenseList] = useState(
    JSON.parse(localStorage.getItem("expense")) || DummyData
  );
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
        id: expenseList.length + `e${+1}`,
        date: expenseData.date,
        item: expenseData.title,
        amount: `${formatter.format(expenseData.amount)}`,
      },
    ];

    setExpenseList(copy);
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
        </div>
      </div>
    </div>
  );
}

export default App;
