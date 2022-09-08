import React, { useReducer, createContext } from 'react'
import contextReducer from './contextReducer'

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{ amount: 3000, category: 'Salary', type: 'Income', date: '2020-02-20', id: '44c68123-5b86-4cc8-b915-bb9e16cebe6a' }, { amount: 3000, category: 'Rent', type: 'Expense', date: '2020-11-16', id: '33b295b8-a8cb-49f0-8f0d-bb268686de1a' }]

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)
    const balance = transactions.reduce(( total, currValue ) => ( currValue === 'Expense' ? total - currValue.amount : total + currValue.amount), 0)
    // Actions
    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
    }
    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id })
    }
    
    return (
        <ExpenseTrackerContext.Provider value={{ transactions, balance, addTransaction, deleteTransaction }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}