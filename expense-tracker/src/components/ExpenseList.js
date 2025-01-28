import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({ expenses, deleteExpense }) => {
  const totalAmount = expenses.reduce(
    (total, expense) => total + expense.amount,
    0,
  )
  const styles = {
    container: {
      marginBottom: '20px',
    },
    total: {
      textAlign: 'right',
      fontWeight: 'bold',
      marginTop: '10px',
    },
  }

  return (
    <div style={styles.container}>
      {expenses.length === 0 ? (
        <p>No expenses yet. Add an expense to get started!</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            deleteExpense={deleteExpense}
          />
        ))
      )}
      <p style={styles.total}>Total: ₹{totalAmount.toFixed(2)}</p>
    </div>
  )
}

export default ExpenseList
