const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d']
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f']

export const incomeCategories = [
  { name: 'Business', amount: 0, color: incomeColors[0] },
  { name: 'Investments', amount: 0, color: incomeColors[1] },
  { name: 'Extra income', amount: 0, color: incomeColors[2] },
  { name: 'Deposits', amount: 0, color: incomeColors[3] },
  { name: 'Lottery', amount: 0, color: incomeColors[4] },
  { name: 'Gifts', amount: 0, color: incomeColors[5] },
  { name: 'Salary', amount: 0, color: incomeColors[6] },
  { name: 'Savings', amount: 0, color: incomeColors[7] },
  { name: 'Rental income', amount: 0, color: incomeColors[8] },
]

export const expenseCategories = [
  { name: 'Bills', amount: 0, color: expenseColors[0] },
  { name: 'Car', amount: 0, color: expenseColors[1] },
  { name: 'Clothes', amount: 0, color: expenseColors[2] },
  { name: 'Travel', amount: 0, color: expenseColors[3] },
  { name: 'Food', amount: 0, color: expenseColors[4] },
  { name: 'Shopping', amount: 0, color: expenseColors[5] },
  { name: 'House', amount: 0, color: expenseColors[6] },
  { name: 'Rent', amount: 0, color: expenseColors[6] },
  { name: 'Entertainment', amount: 0, color: expenseColors[7] },
  { name: 'Phone', amount: 0, color: expenseColors[8] },
  { name: 'Pets', amount: 0, color: expenseColors[9] },
  { name: 'Other', amount: 0, color: expenseColors[10] },
]

export const resetCategories = () => {
  incomeCategories.forEach((category) => category.amount = 0)
  expenseCategories.forEach((category) => category.amount = 0)
}
