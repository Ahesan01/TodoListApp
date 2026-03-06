import DeleteTodo from "./DeleteTodo";

/*
 Component: TodoItem
 Purpose: Display single todo item
*/

function TodoItem({ todo, deleteTodo }) {

  return (

    <li>

      {todo.task}

      <DeleteTodo id={todo.id} deleteTodo={deleteTodo} />

    </li>

  );

}

export default TodoItem;