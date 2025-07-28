import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [todoTasks, setTodoTasks] = useState([]);

  const [inProgressTasks, setInProgressTasks] = useState([]);

  const [completedTasks, setTasksToCompleted] = useState([]);

  function handleAddToList(task) {
    if (task.trim() === "") return;

    setTodoTasks((prev) => [...prev, task]);
    setTask("");
  }

  function moveToInProgress(taskIndex) {
    const task = todoTasks[taskIndex];
    setInProgressTasks((prev) => [...prev, task]);
    setTodoTasks((prev) => prev.filter((_, i) => i !== taskIndex));
  }

  function moveToCompleted(taskIndex) {
    const task = inProgressTasks[taskIndex];
    setTasksToCompleted((prev) => [...prev, task]);
    setInProgressTasks((prev) => prev.filter((_, i) => i !== taskIndex));
  }

  return (
    <>
      <Task task={task} setTask={setTask} onAdd={handleAddToList} />
      <TodoList tasks={todoTasks} onMove={moveToInProgress} />
      <InProgressList tasks={inProgressTasks} onMove={moveToCompleted} />
      <CompletedList tasks={completedTasks} />
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

function TodoList({ tasks, onMove }) {
  const [inProgressTask, setTaskInProgress] = useState([]);

  function handleSetTaskInProgress(task) {
    setTaskInProgress((prev) => [...prev, task]);
    inProgressTask();
  }
  return (
    <div className="todo-list">
      <h2 className="todo-task-label">To-Do Tasks</h2>
      {tasks.map((t, index) => (
        <div key={index} className="task-card">
          <span className="task-text">{t}</span>
          <button className="inprogress-button" onClick={() => onMove(index)}>
            Move to in-progress
          </button>
        </div>
      ))}
    </div>
  );
}

function InProgressList({ tasks, onMove }) {
  return (
    <div className="todo-list">
      <h2 className="todo-task-label">In Progress Tasks</h2>
      {tasks.map((t, index) => (
        <div key={index} className="task-card">
          <span className="task-text">{t}</span>
          <button className="complete-button" onClick={() => onMove(index)}>
            Move to completed
          </button>
        </div>
      ))}
    </div>
  );
}

function CompletedList({ tasks }) {
  return (
    <div className="todo-list">
      <h2 className="todo-task-label">Completed Tasks</h2>
      {tasks.map((t, index) => (
        <div key={index} className="task-card">
          <span className="task-text">{t}</span>
        </div>
      ))}
    </div>
  );
}
