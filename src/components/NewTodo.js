import { useState } from "react";

export function NewTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;
    addTodo(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="todo__form">
      <div className="form__row">
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          id="input"
          className="input"
          type="text"
          placeholder="Add new task"
        ></input>
      </div>
      <div className="cta">
        <button className="add__btn"> Add Task</button>
      </div>
    </form>
  );
}
