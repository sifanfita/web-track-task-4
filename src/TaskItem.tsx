import React, { useState } from "react";
import { Task } from "./types";

interface TaskItemProps {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  startEditing: (id: number) => void;
  updateTask: (id: number, newText: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  toggleTask,
  deleteTask,
  startEditing,
  updateTask,
}) => {
  const [editText, setEditText] = useState(task.text);

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateTask(task.id, editText);
  };

  return (
    <li className={`task-item ${task.isCompleted ? "completed" : ""}`}>
      {task.isEditing ? (
        <form onSubmit={handleEditSubmit} className="edit-task-form">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="task-input"
          />
          <button type="submit" className="save-task-button">
            Save
          </button>
        </form>
      ) : (
        <>
          <span onClick={() => toggleTask(task.id)} className="task-text">
            {task.text}
          </span>
          <div className="task-buttons">
            <button
              onClick={() => startEditing(task.id)}
              className="edit-task-button"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="delete-task-button"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TaskItem;
