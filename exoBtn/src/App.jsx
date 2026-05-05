import './App.css'
import MonBouton from './conponent/bouton'
import TodoList from './conponent/todolist'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Ma Todo App</h1>
        <p>Gère tes tâches simplement</p>
      </header>

      <main className="app-main">
        <MonBouton />
        <TodoList />
      </main>
    </div>
  )
}

export default App
