import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root")).render(<Main />);

function Main() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      setTasks([...tasks, title]);
      setTitle("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = tasks.filter((_, i) => i !== index);
    setTasks(newTodos);
  };

  return (
    <div>
      <h1>Simple To-Do List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={title}
          onChange={handleInputChange}
          placeholder="Add a new todo..."
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {tasks.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
