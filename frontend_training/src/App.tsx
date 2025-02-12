import "./App.css";
import { useState } from "react";
function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  function handleAddTask(): void {
    if (task === "") {
      return;
    }
    setTasks([...tasks, task]);
    setTask("");
  }

  return (
    <>
      <h1>TODOアプリ</h1>
      <div id="input-form">
        <input value={task} onChange={(e) => setTask(e.target.value)}></input>
        <button onClick={handleAddTask}>追加</button>
      </div>
      <div id="task-list-area">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
