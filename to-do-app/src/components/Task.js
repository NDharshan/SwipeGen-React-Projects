import React from 'react'

const Task = ({ task, toggleComplete, deleteTask }) => {
  const styles = {
    task: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px',
      borderBottom: '1px solid #ccc',
    },
    taskText: {
      textDecoration: task.completed ? 'line-through' : 'none',
      color: task.completed ? '#888' : '#333',
    },
    buttonGroup: {
      display: 'flex',
      gap: '10px',
    },
    button: {
      padding: '5px 10px',
      fontSize: '0.9rem',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    completeButton: {
      backgroundColor: '#4caf50',
    },
    deleteButton: {
      backgroundColor: '#f44336',
    },
  }
  return (
    <div style={styles.task}>
      <span style={styles.taskText}>{task.text}</span>
      <div style={styles.buttonGroup}>
        <button
          style={{ ...styles.button, ...styles.completeButton }}
          onClick={() => toggleComplete(task.id)}
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>

        <button
          style={{ ...styles.button, ...styles.deleteButton }}
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Task
