import { useState } from "react";

/*
 Component: AddTodo
 Purpose: Handle adding new todo tasks
 Receives addTodo function from App via props
*/

function AddTodo({ addTodo }) {

  const [task, setTask] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!task.trim()) return;

    addTodo(task);

    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button>Add</button>

    </form>
  );
}

export default AddTodo;