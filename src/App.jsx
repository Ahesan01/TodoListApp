/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/TodoItem";
import TodoList from "./Components/TodoList";
import { getTodos, saveTodos } from "./utils/localStorage";

/*
 App Component
 Responsible for:
 - Managing todo state
 - Passing functions to child components
*/

function App() {

  const [todos, setTodos] = useState([]);

  // Load todos on first render
  useEffect(() => {
    setTodos(getTodos());
  }, []);

  // Add todo logic
  const addTodo = (task) => {

    const newTodo = {
      id: Date.now(),
      task
    };

    const updatedTodos = [...todos, newTodo];

    setTodos(updatedTodos);

    saveTodos(updatedTodos);
  };

  const deleteTodo = (id) => {

  const updatedTodos = todos.filter(todo => todo.id !== id);

  setTodos(updatedTodos);

  saveTodos(updatedTodos);

};

const editTodo = (id, updatedTask) => {

  const updatedTodos = todos.map(todo =>
    todo.id === id ? { ...todo, task: updatedTask } : todo
  );

  setTodos(updatedTodos);

  saveTodos(updatedTodos);

};

  return (

    <div style={{ padding: "30px" }}>

      <h1>Todo App</h1>

      <AddTodo addTodo={addTodo} />

<TodoList
  todos={todos}
  deleteTodo={deleteTodo}
  editTodo={editTodo}
/>

    </div>

  );
}

export default App;