import React from "react";
import { Task } from "./types";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  startEditing: (id: number) => void;
  updateTask: (id: number, newText: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  toggleTask,
  deleteTask,
  startEditing,
  updateTask,
}) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          startEditing={startEditing}
          updateTask={updateTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
