import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [todoTask, setTodoTask] = useState([]);

  function handleAddToList(task) {
    if (task.trim() === "") return;

    setTodoTask((prev) => [...prev, task]);
    setTask("");
  }

  return (
    <>
      <Task task={task} setTask={setTask} onAdd={handleAddToList} />
      <TodoList tasks={todoTask} />
    </>
  );
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

function TodoList({ tasks }) {
  return (
    <div className="todo-list">
      <h2 className="todo-task-label">To-Do Tasks</h2>
      {tasks.map((t, index) => (
        <div key={index} className="task-card">
          <span className="task-text">{t}</span>
          <button className="inprogress-button">Move to in-progress</button>
        </div>
      ))}
    </div>
  );
}
