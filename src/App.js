import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [todoList, addToList] = useState([]);

  function handleAddToList(task) {
    if (task.trim() === "") return;

    addToList((prev) => [...prev, task]);
    setTask("");
  }

  return <Task task={task} setTask={setTask} onAdd={handleAddToList} />;
}

function Task({ task, setTask, onAdd }) {
  return (
    <div className="task-container">
      <label className="task-label">Enter Task :</label>
      <input
        className="task-input"
        type="text"
        placeholder="Enter To do Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="task-button" onClick={() => onAdd(task)}>
        Add Task
      </button>
    </div>
  );
}
