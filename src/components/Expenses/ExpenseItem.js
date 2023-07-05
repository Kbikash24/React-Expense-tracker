import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [amount, setAmount] = useState(props.amount);

  const deleteExpenseHandler = () => {
    // Logic to delete the expense
    alert('Deleting expense...');
  };

  const changeAmountHandler = () => {
    setAmount(100);
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
};

export default ExpenseItem;
