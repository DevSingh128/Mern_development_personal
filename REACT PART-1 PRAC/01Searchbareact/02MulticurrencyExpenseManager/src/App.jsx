import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { ExpenseContextProvider } from './context/ExpenseContext'
import AddExpense from './components/AddExpense'
import ExpenseList from './components/ExpenseList'
import TotalBalance from './components/TotalBalanace'


function App() {

  return (
    <ExpenseContextProvider>
      <div className="main-wrapper">
        <h1 className="title">💰 Expense Manager</h1>
        <AddExpense />
        <ExpenseList />
        <TotalBalance/>
      </div>
    </ExpenseContextProvider>
  )
}

export default App
