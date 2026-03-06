import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";
/*
 Component: TodoItem
 Purpose: Display single todo item
*/

function TodoItem({ todo, deleteTodo, editTodo  }) {

  return (

    <li>

      {todo.task}
<EditTodo id={todo.id} editTodo={editTodo} />

      <DeleteTodo id={todo.id} deleteTodo={deleteTodo} />

    </li>

  );

}

export default TodoItem;