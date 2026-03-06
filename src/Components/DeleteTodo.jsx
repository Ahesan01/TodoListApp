function DeleteTodo({ id, deleteTodo }) {

  return (
    <button
      className="delete-btn"
      onClick={() => deleteTodo(id)}
    >
      Delete
    </button>
  );
}

export default DeleteTodo;