import { useState } from "react";

export default function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [desc, setDesc] = useState(todo.description);

  const saveEdit = () => {
    editTodo(todo.id, title, desc);
    setIsEditing(false);
  };

  return (
    <li className={todo.completed ? "completed" : ""}>
      {isEditing ? (
        <>
          <input value={title} onChange={e => setTitle(e.target.value)} />
          <input value={desc} onChange={e => setDesc(e.target.value)} />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <span onClick={() => toggleTodo(todo.id)}>
            {todo.title}
          </span>
          <small>{todo.description}</small>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
}
