import { TodoItem } from "./TodoItem";

export function TodoList({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="todo__list">
      <h1 className="header"> TO-DO List </h1>
      <ul className="list">
        {todo.length === 0 && "No Todo today 😀"}
        {todo.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}
