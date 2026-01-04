import React, { createContext, useState ,useContext ,useCallback } from "react";

export const ExpenseContext = createContext();
export const ExpenseContextProvider = function expense({children}){
    const [expense , setexpense] = useState([])

    //item from input
    const addExpense = (item) => {
        setexpense((prev) => 
            [item, ...prev]
        )
    }

    //id from input
    const deleteExpense = useCallback((id) => {
    setexpense((prev) => prev.filter((item) => item.id !== id));
    }, []);

    return(
    <ExpenseContext.Provider value={{ expense , addExpense, deleteExpense }}>
      {children}
    </ExpenseContext.Provider>
    );
};

export const useExpense = () => {
  return useContext(ExpenseContext);
};


