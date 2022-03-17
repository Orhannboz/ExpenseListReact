import './ExpenseDate.css'
import React from "react";

const ExpenseDate = (props) => {
  const tarih = props.date;
  const month = tarih.toLocaleString("tr-TR", { month: "long" });
  const day = tarih.toLocaleString("tr-TR", { day: "2-digit" });
  const year = tarih.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month"> {month} </div>
      <div className='expense-date__day'> {day} </div>
      <div className='expense-date__year'> {year} </div>
    </div>
  );
}

export default ExpenseDate;
