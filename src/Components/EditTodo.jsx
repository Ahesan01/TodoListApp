/*
 Component: EditTodo
 Purpose: Edit existing todo
*/

function EditTodo({ id, editTodo }) {

  const handleEdit = () => {

    const updatedTask = prompt("Edit task");

    if (!updatedTask) return;

    editTodo(id, updatedTask);

  };

  return (

    <button onClick={handleEdit}>
      Edit
    </button>

  );

}

export default EditTodo;