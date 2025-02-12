import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Task = {
  title: string;
  id: string;
  isComplete: boolean;
  isEdit: boolean;
};

function App() {
  const [task, setTask] = useState({
    title: "",
    id: "",
    isComplete: false,
    isEdit: false,
  });
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(): void {
    if (task.title === "") {
      return;
    }
    setTasks([...tasks, task]);
    setTask({ title: "", id: "", isComplete: false, isEdit: false });
  }

  function handleCompleteTask(id: string): void {
    tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = true;
      }
      setTasks(tasks.filter((task) => task.isComplete === false));
    });
  }

  return (
    <>
      <h1>TODOアプリ</h1>
      <div id="input-form">
        <input
          value={task.title}
          onChange={(e) =>
            setTask({
              title: e.target.value,
              id: uuidv4(),
              isComplete: false,
              isEdit: false,
            })
          }
        ></input>
        <button id="add-task-button" onClick={handleAddTask}>
          追加
        </button>
      </div>
      <div id="task-list-area">
        <ul>
          {tasks.map((task, index) => (
            <div id="task" key={index}>
              <li>{task.title}</li>
              <button
                id="Complete-task-button"
                onClick={() => handleCompleteTask(task.id)}
              >
                完了
              </button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
