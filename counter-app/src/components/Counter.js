import { useState } from 'react'
import React from 'react'

function Counter() {
  let [count, setCount] = useState(0)

  const increment = () => setCount(count++)
  const decrement = () => setCount(count--)
  const reset = () => setCount(0)

  const styles = {
    container: {
      textAlign: 'center',
      background: 'white',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      fontSize: '2rem',
      color: '#333',
    },
    count: {
      fontSize: '3rem',
      margin: '20px 0',
      color: '#007bff',
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1rem',
      color: 'white',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonDisabled: {
      backgroundColor: '#ccc',
      cursor: 'not-allowed',
    },
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Counter App</h1>
      <h2 style={styles.count}>{count}</h2>

      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={increment}>
          Increment
        </button>
        <button
          style={{
            ...styles.button,
            ...(count <= 0 ? styles.buttonDisabled : {}),
          }}
          onClick={decrement}
          disabled={count <= 0}
        >
          Decrement
        </button>
        <button style={styles.button} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter
