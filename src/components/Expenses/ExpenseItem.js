import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import React, { useState } from "react";
const ExpenseItem = (props) => {
 
  const tarih = props.date;

  const expenseAmount = props.amount;

  return (
    <li>
    <Card className="expense-item">
      <div>
        <ExpenseDate date={tarih} />
      </div>
      <div className="expense-item__description">
        <h2> {props.title} </h2>
        <div className="expense-item__price">{expenseAmount} TL</div>
        
      </div>
      
    </Card>
    </li>
  );
};

export default ExpenseItem;
