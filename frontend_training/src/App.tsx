import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EditPage from "./EditPage";

export type Task = {
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
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: true };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function handleDoEdit(id: string): void {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isEdit: true };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function handleCancel(id: string): void {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isEdit: false };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function handleUpdate(id: string, taskTitle: string): void {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: taskTitle, isEdit: false };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <>
      <h1>TODOアプリ</h1>
      <div id="input-form">
        <input
          id="task-form"
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
          {tasks
            .filter((task) => !task.isComplete)
            .map((task, index) => (
              <div id="task" key={index}>
                {task.isEdit ? (
                  <EditPage
                    key={index}
                    task={task}
                    onCancel={handleCancel}
                    onUpdate={handleUpdate}
                  />
                ) : (
                  <>
                    <li onClick={() => handleDoEdit(task.id)}>{task.title}</li>
                    <button
                      id="Complete-task-button"
                      onClick={() => handleCompleteTask(task.id)}
                    >
                      完了
                    </button>
                  </>
                )}
              </div>
            ))}
        </ul>
      </div>
    </>
  );
}

export default App;
