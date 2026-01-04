import TodoItem from "./TodoItem";

export default function TodoList({ todos, ...actions }) {
  if (todos.length === 0) {
    return <p>No todos found</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} {...actions} />
      ))}
    </ul>
  );
}
