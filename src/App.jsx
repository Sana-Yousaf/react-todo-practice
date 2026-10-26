import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: task, done: false }]);
    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <div className="app">
      <h1>My To-Do List</h1>
      <div className="input-row">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          placeholder="Add a task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((t) => (
          <li
            key={t.id}
            className={t.done ? "done" : ""}
            onClick={() => toggleTodo(t.id)}
          >
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;