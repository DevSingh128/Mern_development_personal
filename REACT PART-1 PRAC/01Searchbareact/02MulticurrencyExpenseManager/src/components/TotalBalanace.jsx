import React from 'react';
import { useExpense } from '../context/ExpenseContext';

function TotalBalance() {
  const { expense } = useExpense();
  const total = expense.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0); 

  return (
    <div className="container" style={{ textAlign: 'center', backgroundColor: '#eef2ff' }}>
      <h2 style={{ margin: 0 }}>Total Balance</h2>
      <h1 style={{ color: '#4f46e5', fontSize: '3rem' }}>
        ${total.toFixed(2)}
      </h1>
    </div>
  );
}

export default TotalBalance;