import {useState} from 'react';
import Card from '../UI/Card';
import './Expense.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses = ({expenses}) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter((e) => e.date.getFullYear() === Number(filteredYear));

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} filterChangeHandler={filterChangeHandler} />
        <ExpenseChart filteredExpenses={filteredExpenses} />
        <ExpenseList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
