import React, { useState , useRef } from 'react';
import { useExpense } from '../context/ExpenseContext';

function AddExpense(){
    const [name,setname] = useState("")
    const [amount,setamount] = useState("")
    const inputRef = useRef(null);

    const {addExpense} = useExpense()
    const handlesubmit = (e) => {
        e.preventDefault();
        if(!name || !amount) return;
        const newentry = {
            id : Date.now(),
            name: name,
            amount: Number(amount)
        }
        addExpense(newentry)
        setname("")
        setamount("")
        inputRef.current.focus()
    }
    
    return(
        <div className="container">
            <form onSubmit={handlesubmit}>
                <h3>Add new expense</h3>
                <input 
                ref = {inputRef}
                type="text" 
                placeholder="What did you buy?" 
                className="search-input text-black text-xs"
                value={name}
                onChange={(e) => setname(e.target.value)}
                />
                <input 
                type="number" 
                placeholder="How much?" 
                className="search-input text-black text-xs"
                value={amount}
                onChange={(e) => setamount(e.target.value)}
                />

                <button type="submit" className="title bg-red-600 text-black text-xs" style={{cursor: 'pointer'}}>
                Add to List
                </button>
            </form>
        </div>
    )
}

export default AddExpense