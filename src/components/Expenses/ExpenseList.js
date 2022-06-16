import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = ({filteredExpenses}) => {
  if (filteredExpenses.length === 0) {
    return <h2 className='expenses-list__fallback'>there is nothing to show you</h2>;
  }
  return (
    <ul className='expenses-list'>
      {filteredExpenses.map((e) => {
        return <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />;
      })}
    </ul>
  );
};
export default ExpenseList;
