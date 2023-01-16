import React from "react";
import "./filter.css";

const Filter = ({ setFilterByYear, filterByYear }) => {
  const handleYear = (e) => {
    const { value, name } = e.target;
    setFilterByYear((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="filter">
      <div className="filter-by-year">Filter By Year</div>
      <select
        id="year"
        className="years"
        value={filterByYear.year}
        name="year"
        onChange={handleYear}
      >
        <option value="">--Select All--</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
};

export default Filter;
