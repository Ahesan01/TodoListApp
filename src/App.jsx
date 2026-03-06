/* eslint-disable react-hooks/set-state-in-effect */
import './App.css'
import { useState, useEffect } from "react";
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import { getTodos, saveTodos } from "./utils/localStorage";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
    setTodos(getTodos());
  }, []);

  const addTodo = (task) => {

    const newTodo = {
      id: Date.now(),
      task
    };

    const updatedTodos = [...todos, newTodo];

    setTodos(updatedTodos);

    saveTodos(updatedTodos);
  };

  return (
    <>
      <div style={{padding:"30px"}}>

      <h1>Todo App</h1>

      <TodoForm addTodo={addTodo}/>

      <TodoList todos={todos}/>

    </div>
    </>
  )
}

export default App
