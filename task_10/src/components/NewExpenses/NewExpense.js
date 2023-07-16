
import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [IsEditing, setIsEditing]=useState(false)
  const onSaveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }
  const setIsEditingHandler=()=>{
    setIsEditing(true)
  }
  const stopEditingHandler=()=>{
    setIsEditing(false)
  }
  return (
    <div className='new-expense'>
    {!IsEditing && <button onClick={setIsEditingHandler}>Add New Expenses</button>}
     {IsEditing &&<ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}
     onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
