function TodoItem({ todo, deleteTodo }) {

  return (

    <li>

      {todo.task}

      <button onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>

    </li>

  );

}

export default TodoItem;