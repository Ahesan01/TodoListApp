import TodoItem from "./TodoItem";

/*
 Component: TodoList
 Purpose: Render list of todos
*/

function TodoList({ todos, deleteTodo }) {

  return (

    <ul>

      {todos.map(todo => (

        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
        />

      ))}

    </ul>

  );

}

export default TodoList;