import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>hi</p>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
