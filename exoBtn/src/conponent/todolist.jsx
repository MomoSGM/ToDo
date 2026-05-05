import { useState } from 'react'
import TodoForm from './todoform'
import TodoItem from './todoitem'

function TodoList() {
  const [todos, setTodos] = useState([])

  const ajouterTodo = (texte) => {
    const nouveau = { id: Date.now(), texte, completed: false }
    setTodos([...todos, nouveau])
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    )
  }

  const supprimerTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  return (
    <div className="todo-card">
      <h2>Ma liste de tâches</h2>
      <TodoForm onAdd={ajouterTodo} />
      {todos.length === 0 ? (
        <p className="todo-empty">Aucune tâche pour le moment.</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={supprimerTodo}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default TodoList
