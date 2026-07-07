import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import { TodoProvider, useTodo } from './contexts/Todocontext'
import {Todoform, Todolist} from './components'

function App() {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
    }

    const updateTodo = (id, todo) => {
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
    }

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((prevTodo) => prevTodo.id!==id))
    }
    
    const toggleComplete = (id) => {
        setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo))
    }

    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("todos"))

      if(todos && todos.length>0){
        setTodos(todos)
      }

    },[])

    useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos))
    }, [todos])


  return (
    <TodoProvider value ={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#1E1E24] min-h-screen py-8">
        <div className="w-full max-w-2xl bg-[#25252D] border border-[#2E2E38] mx-auto shadow-xl rounded-xl p-6 text-white">
          <h1 className="text-3xl font-bold text-center mb-8 mt-2 text-slate-100 ">Manage Your To-dos</h1>
          <div className="mb-4">
            <Todoform />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <Todolist todo ={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App

// sm:p-8