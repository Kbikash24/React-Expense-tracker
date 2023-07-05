import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';



  const deleteExpenseHandler = () => {
    
    alert('Deleting expense...');
  };

  

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={deleteExpenseHandler}>Delete Expense</button>
      <button onClick={changeAmountHandler}>Change Amount</button>
    </Card>
  );


export default ExpenseItem;
