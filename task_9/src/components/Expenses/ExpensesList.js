import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h3 className='expenses-list__fallback'>No Expenses found</h3>;
  }
 
  if (props.items.length === 1) {
    return (
      <div>
       <ul className='expenses-list'>
          {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </ul>
        <h3 className='expenses-list__fallback'>Only single Expense here. Please add more...</h3>
      </div>
    );
  }
 
  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;