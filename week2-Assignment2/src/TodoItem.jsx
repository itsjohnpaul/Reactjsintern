import { useState } from "react";

export default function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [desc, setDesc] = useState(todo.description);

  const saveEdit = () => {
    if (title.trim() === "") return;
    editTodo(todo.id, title, desc);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <div className="edit-box">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button onClick={saveEdit}>Save</button>
        </div>
      ) : (
        <div className="view-box">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />

          <div className="text">
            <span className="title">{todo.title}</span>
            {todo.description && (
              <small className="desc">{todo.description}</small>
            )}
          </div>

          <div className="actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      )}
    </li>
  );
}
