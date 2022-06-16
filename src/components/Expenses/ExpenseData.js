import './ExpenseDate.css';

const ExpenseDate = ({date}) => {
  const month = date.toLocaleString('en-US', {month: 'long'}).slice(0, 3);
  const day = date.toLocaleString('en-US', {day: '2-digit'});
  const year = date.getFullYear();
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense_date__year'>{year}</div>
      <div className='expense_date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
