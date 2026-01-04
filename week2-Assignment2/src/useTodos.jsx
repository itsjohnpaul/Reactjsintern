import { useEffect, useState } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, description) => {
    setTodos(prev => [
      ...prev,
      { id: Date.now(), title, description, completed: false  }
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(todo => todo.id === id ? { ...todo, completed: !todo.completed }: todo)
    );
  };

  const editTodo = (id, newTitle, newDesc) => {
    setTodos(prev =>
      prev.map(todo =>    todo.id === id ? { ...todo, title: newTitle, description: newDesc } : todo )
    );
  };

  return {todos,addTodo,deleteTodo,toggleTodo,editTodo };
}
