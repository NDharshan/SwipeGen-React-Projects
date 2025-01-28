import React, { useState } from 'react'
import Task from './Task'

const TaskList = () => {
  const [tasks, setTasks] = useState([])
  const [taskInput, setTaskInput] = useState('')

  const addTask = () => {
    if (taskInput.trim() === '') return
    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    }
    setTasks([...tasks, newTask])
    setTaskInput('')
  }

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      borderRadius: '10px',
      background: 'white',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    inputGroup: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
    },
    input: {
      flex: 1,
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    addButton: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    addButtonHover: {
      backgroundColor: '#0056b3',
    },
  }

  return (
    <div style={styles.container}>
      <h1>To-Do List</h1>
      <div style={styles.inputGroup}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          style={styles.input}
        />
        <button style={styles.addButton} onClick={addTask}>
          Add
        </button>
      </div>
      {tasks.length === 0 ? (
        <p>No tasks yet. Add a task to get started!</p>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  )
}

export default TaskList
