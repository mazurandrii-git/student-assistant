function TaskItem({ task }) {
  const completedClass = task.completed ? "completed" : "";

  return (
    <li className={`task-card priority-${task.priority} ${completedClass}`}>
      <span className="task-title">{task.title}</span>
      <span className="task-priority">{task.priority}</span>
    </li>
  );
}

export default TaskItem;