import { useState } from "react";

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
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button className="add-btn">Add</button>

    </form>
  );
}

export default AddTodo;