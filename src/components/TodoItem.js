export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li className={`list__item ${completed ? "completed" : ""}`}>
      <label className="list__label">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="del__btn btn-danger">
        Delete
      </button>
    </li>
  );
}
