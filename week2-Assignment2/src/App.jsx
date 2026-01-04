import { useState } from "react";
import useTodos from "./useTodos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Filters from "./Filters";
import "./App.css";

export default function App() {
  const { todos, addTodo, deleteTodo, toggleTodo, editTodo } = useTodos();
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredTodos = todos
    .filter(todo => {
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
      return true;
    })
    .filter(todo =>
      todo.title.toLowerCase().includes(search.toLowerCase())
    );

  const activeCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="app">
      <h2>Todo App</h2>
      <p>Active tasks: {activeCount}</p>
      

      <TodoForm addTodo={addTodo} />

      <Filters
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
      />

      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />
    </div>
  );
}
