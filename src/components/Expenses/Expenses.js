import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  //const [filterExpenses, setFilterExpenses] = useState(props.items.filter(x => x.date.getFullYear() === 2022));

  /*const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);*/

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    //setFilterExpenses(props.items.filter(x => x.date.getFullYear() === parseInt(selectedYear)));
  };
  const filterExpenses = props.items.filter(
    (item) => item.date.getFullYear() === parseInt(filteredYear)
  );
    
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedValue={filteredYear}
          onFilterChanged={filterChangeHandler}
        />
        <ExpensesList item={filterExpenses}>
          </ExpensesList>
       
      </Card>
    </div>
  );
};

export default Expenses;
