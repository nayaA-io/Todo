import "./App.css";
import { useState, useEffect } from "react";
import { NewTodoForm } from "./components/NewTodo";
import { TodoList } from "./components/TodoList";

export default function App() {
  const [todo, setToDo] = useState(() => {
    const sessVal = sessionStorage.getItem("ITEMS");
    if (sessVal == null) return [];

    return JSON.parse(sessVal);
  });

  useEffect(() => {
    sessionStorage.setItem("ITEMS", JSON.stringify(todo));
  }, [todo]);

  function addTodo(title) {
    setToDo((currentTodo) => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setToDo((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === id) {
          todo.completed = completed;
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setToDo((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="App">
      <div className="container">
        <NewTodoForm addTodo={addTodo} />
        <TodoList todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}
