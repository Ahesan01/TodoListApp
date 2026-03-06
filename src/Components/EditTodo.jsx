function EditTodo({ id, editTodo }) {

  const handleEdit = () => {

    const updatedTask = prompt("Edit task");

    if (!updatedTask) return;

    editTodo(id, updatedTask);
  };

  return (
    <button
      className="edit-btn"
      onClick={handleEdit}
    >
      Edit
    </button>
  );
}

export default EditTodo;