import { useState } from 'react'

function TodoForm({ onAdd }) {
  const [texte, setTexte] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const valeur = texte.trim()
    if (valeur === '') return
    onAdd(valeur)
    setTexte('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
        placeholder="Nouvelle tâche..."
      />
      <button type="submit">Ajouter</button>
    </form>
  )
}

export default TodoForm
