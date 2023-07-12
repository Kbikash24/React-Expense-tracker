import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title);
  const [EnteredAmount, setEnteredAmount] = useState(props.amount);
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  const handleEnteredAmount = () => {
    setEnteredAmount(100);
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${EnteredAmount}</div>
        
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={handleEnteredAmount}>Change Amount</button>
    </Card>
  );
}

export default ExpenseItem;