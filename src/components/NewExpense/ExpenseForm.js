import react, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");
  /*const [userInput, setUsterInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });*/
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /*setUserInput((prevState) => {
        return {...prevState, enteredTitle: event.target.value}
    });*/
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /*setUsterInput((prevState) => {
        return {...prevState, enteredAmount: event.target.value}
    });*/
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /*setUsterInput((prevState) => {
        return {...prevState, enteredDate: event.target.value}
    });*/
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if(enteredTitle.length == 0 || EnteredAmount == 0){
        alert("Bir harcamanın adı veya tutarı boş bırakılamaz");
    } else{
    const Data = {
      title: enteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate),
    };
    props.onSaveExpenseData(Data);
    setEnteredAmount("");
    setEnteredDate(new Date(null));
    setEnteredTitle("");
  }
  };

  const onchangecontent = () => {
     props.onChangeContent(1);
  }
    
    
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense_control">
          <label>Harcama adı</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense_control">
          <label>Tutar</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={EnteredAmount}
          />
        </div>
        <div className="new-expense_control">
          <label>Tarih</label>
          <input
            type="date"
            min="2015-01-01"
            max="2025-12-31"
            onChange={dateChangeHandler}
            value={EnteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Harcama Ekle </button>
        <button onClick={onchangecontent}> Cancel </button>
      </div>
    </form>
  );
   
    
};

export default ExpenseForm;
