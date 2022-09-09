import { useContext } from 'react'
import { ExpenseTrackerContext } from './context/context'
import { incomeCategories, expenseCategories } from './constants/categories'

const useTransactions = (title) => {
    const { transactions } = useContext(ExpenseTrackerContext)
    const filteredTransactions = transactions.filter((transaction) => transaction.type === title)
    const total = filteredTransactions.reduce((total, currentValue) => total += currentValue.amount, 0)
    const categories = title === 'Income' ? incomeCategories : expenseCategories
    filteredTransactions.forEach((transaction) => {
        const category = categories.find((category) => category.name === transaction.category)
        if (category) category.amount += transaction.amount
    })

    const filteredCategories = categories.filter((category) => category.amount > 0)
    const chartData = {
        datasets: [{
          data: filteredCategories.map((category) => category.amount),
          backgroundColor: filteredCategories.map((category) => category.color ),
        }],
        labels: filteredCategories.map((category) => category.name),
    }
    return { total, chartData }
}

export default useTransactions