import React from 'react'

const ExpenseItem = ({ expense, deleteExpense }) => {
  const styles = {
    item: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px',
      borderBottom: '1px solid #ccc',
    },
    deleteButton: {
      padding: '5px 10px',
      backgroundColor: '#f44336',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
  }

  return (
    <div style={styles.item}>
      <span>
        {expense.description}: ₹{expense.amount.toFixed(2)}
      </span>
      <button
        style={styles.deleteButton}
        onClick={() => deleteExpense(expense.id)}
      >
        Delete
      </button>
    </div>
  )
}

export default ExpenseItem
