import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  

  const saveExpenseDataHandler = (enteredData) => {
    const Data = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(Data);
  };

  let [content, setContent] = useState(1);

  const changeContent = () => {
    setContent(0);
  };
  const changeContent1 = () =>{
      setContent(1);
  }
  

  if (content === 0) {
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onChangeContent={changeContent1}/>
      </div>
    );
  }
  if (content === 1) {
    return <div className="new-expense"> <button onClick={changeContent}> Yeni Harcama Ekle </button> </div>;
  }
};

export default NewExpense;
