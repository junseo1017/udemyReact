import {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({stopEditingHandler, onSaveExpenseData}) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   });
  const titleChangeHandler = (evt) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: evt.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: evt.target.value};
    // });
    setEnteredTitle(evt.target.value);
  };
  const amountChangeHandler = (evt) => {
    setEnteredAmount(evt.target.value);
  };

  const dateChangeHandler = (evt) => {
    setEnteredDate(evt.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    onSaveExpenseData(expenseData);
    setEnteredAmount('');
    setEnteredTitle('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={enteredAmount} onChange={amountChangeHandler} min='0.01' step='0.01' />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={enteredDate} onChange={dateChangeHandler} min='2019-01-01' max='2022-12-31' />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={stopEditingHandler}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
