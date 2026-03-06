import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";

function TodoItem({ todo, deleteTodo, editTodo }) {

  return (

    <li className="todo-item">

      <span>{todo.task}</span>

      <div className="todo-buttons">

        <EditTodo id={todo.id} editTodo={editTodo} />

        <DeleteTodo id={todo.id} deleteTodo={deleteTodo} />

      </div>

    </li>

  );

}

export default TodoItem;