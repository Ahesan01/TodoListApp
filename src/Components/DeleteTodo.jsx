/*
 Component: DeleteTodo
 Purpose: Delete a todo item
*/

function DeleteTodo({ id, deleteTodo }) {

  return (
    <button onClick={() => deleteTodo(id)}>
      Delete
    </button>
  );

}

export default DeleteTodo;