import { useEffect, useState } from 'react'
import { Todoprovider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos , settodos] = useState([])

  //dont want to delete old todo item thats why use prev to make new list maintaining data
  const addTodo = (todo) => {
    settodos((prev) => [{id: Date.now(), ...todo},...prev])
  }

  const updatedTodo = (id,todo) => {
    //prevtodo is the element for checking only + used ternary operator
    settodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    settodos((prev) => prev.filter((prevTodo) => (prevTodo.id !== id)))
  }

  const toggleComplete = (id) => {
    settodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo , completed: !prevTodo.completed} : prevTodo))
  }

  //to done the changes done by settodos
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length !== 0){
      settodos(todos)
    }
  },[todos])

  //to any input store in local storage
  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos))
  },[todos])


  return (
    <Todoprovider value={{todos,addTodo,updatedTodo,deleteTodo,toggleComplete}}>
      <div className="fixed inset-0 bg-opacity-100 flex items-center justify-center z-50">
        <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => {
                          <div key={todo.id} className = 'w-full'>
                            <TodoItem todo={todo}/>
                          </div> 
                        })}
                    </div>
                </div>
       </div>
      </div>
      
    </Todoprovider>
  )
}

export default App
