import React, {useState} from 'react'

const ExpenseForm = ( { addExpense } ) => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!description || !amount) return
    addExpense({ description, amount: parseFloat(amount), id: Date.now() })
    setDescription('')
    setAmount('')
  }

  const styles = {
    form: {
      marginBottom: '20px',
    },
    inputGroup: {
      display: 'flex',
      gap: '10px',
      marginBottom: '10px',
    },
    input: {
      flex: 1,
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <input
            type="text"
            placeholder="Expense Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Add Expense
        </button>
      </form>
    </div>
  )
}

export default ExpenseForm
