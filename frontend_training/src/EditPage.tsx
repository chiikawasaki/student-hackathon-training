import { useState } from "react";
import { Task } from "./App";

type EditPageProps = {
  task: Task;
  onCancel: (id: string) => void;
  onUpdate: (id: string, taskTitle: string) => void;
};

const EditPage: React.FC<EditPageProps> = ({ task, onCancel, onUpdate }) => {
  const [taskTitle, setTaskTitle] = useState(task.title);
  return (
    <div id="edit-task-area">
      <input
        id="edit-task-form"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button id="cancel-button" onClick={() => onCancel(task.id)}>
        キャンセル
      </button>
      <button id="update-button" onClick={() => onUpdate(task.id, taskTitle)}>
        更新
      </button>
    </div>
  );
};

export default EditPage;
