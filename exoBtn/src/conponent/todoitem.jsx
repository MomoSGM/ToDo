function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item${todo.completed ? ' completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className="todo-texte">{todo.texte}</span>
      <button className="todo-delete" onClick={() => onDelete(todo.id)}>
        Supprimer
      </button>
    </li>
  )
}

export default TodoItem
