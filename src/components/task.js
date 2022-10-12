import React from "react";
import { Button } from "@mui/material"
const Task = ({ task, onDeleteTask }) => (
    <li key={task.id}>
      {task.name}
      <Button onClick={() => onDeleteTask(task.id)}>Remove</Button>
    </li>
);

export default Task;