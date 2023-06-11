import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enterdTitle, setEnteredTitle] = useState('');
    const [enterdAmount, setEnterdAmount] = useState('');
    const [enterdDate, setEnterdDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enterdTitle: '',
    //     enterdAmount: '',
    //     enterdDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterdTitle: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enterdTitle: event.target.value };
        //  });
    };

    const amounChangeHandler = (event) => {
        setEnterdAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterdAmount: event.target.value,
        // })
    };

    const dateChangeHandler = (event) => {
        setEnterdDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterdDate: event.target.value,
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enterdTitle,
            amount: enterdAmount,
            date: new Date(enterdDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnterdAmount('');
        setEnterdDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>내용</label>
                    <input type='text' value={enterdTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>비용</label>
                    <input type='number' min='0.01' step='0.01' value={enterdAmount} onChange={amounChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>날짜</label>
                    <input type='date' min='2018-01-01' max='2025-12-31' value={enterdDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>취소</button>
                <button type='submit'>추가</button>
            </div>
        </form>
    )
};

export default ExpenseForm;
