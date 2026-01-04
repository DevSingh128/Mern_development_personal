import React from 'react';
import { useExpense } from '../context/ExpenseContext';

function ExpenseList(){
    const {expense,deleteExpense} = useExpense();

    return(
        <div className="container" style={{ marginTop: '20px' }}>
            <h2 className="title">Your Expenses</h2>
            <div className="user-list">
                {expense.length === 0 ? (
                    <p style={{ textAlign: 'center' }}>No expenses added yet!</p>
                ) : (
                    expense.map((item) => (
                        <div key={item.id} className="user-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3 style={{ margin: 0 }}>{item.name}</h3>
                                <p style={{ margin: 0, color: '#666' }}>${item.amount}</p>
                            </div>
                            <button 
                                onClick={() => deleteExpense(item.id)}
                                className="bg-red-600 text-white"
                                style={{ padding: '5px 10px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
                            >
                                Delete
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default ExpenseList