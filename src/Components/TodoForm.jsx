import { useState } from "react";

function TodoForm({ addTodo }) {

  const [task, setTask] = useState("");

//   Function to add the task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    addTodo(task);
    setTask("");
  };

  return (

    <form onSubmit={handleSubmit}>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button>Add</button>

    </form>

  );
}

export default TodoForm;