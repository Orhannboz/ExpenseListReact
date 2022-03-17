import react from "react";
import './ExpensesList.css'
import './ExpenseItem'
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props =>{

    
    
    if(props.item.length === 0){
      return <h2 className="expenses-list__fallback"> HARCAMA BULUNAMADI </h2>
      }

return (
 <ul className="expenses-list">
     {props.item.map((x) => (
       
        <ExpenseItem
          title={x.title}
          amount={x.amount}
          date={x.date}
          key={x.id}
        ></ExpenseItem>
        
      ))}
      
     </ul>
);
}

export default ExpensesList ;