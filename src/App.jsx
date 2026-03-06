/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import { getTodos, saveTodos } from "./utils/localStorage";
import "./styles.css";

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = getTodos();
    setTodos(storedTodos);
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

    <div className="app-container">

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