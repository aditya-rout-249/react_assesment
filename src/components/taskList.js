import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Task from "./task";
function TaskList({ email, isLoggedIn }) {
  // Initiating Object Constructor
  const userData = JSON.parse(localStorage.getItem(email));
  const [value, setValue] = useState();
  const [taskList, setTaskList] = useState(userData.tasklist);

  const [date, setDate] = useState(new Date());
  const [status, setStatus] = useState(isLoggedIn);
  
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => tick(), 1000);
  }, []);
  const tick = () => {
    setDate(new Date());
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // Function to add task
  const onAddTask = (taskValue) => {
    // new todo object
    const task = {
      name: taskValue,
      id: new Date(),
    };

    localStorage.setItem(
      email,
      JSON.stringify({
        password: userData.password,
        tasklist: [...taskList, task],
      })
    );
    setTaskList([...taskList, task]);
  };

  const clearAll = () => {
    setTaskList([]);
    userData.tasklist = [];
    localStorage.setItem(email, JSON.stringify(userData));
  };

  //Logout Function
  const logout = () => {
    setStatus(false);
    navigate('/')
  };

  //Function To delete Task
  const onDeleteTask = (itemId) => {
    setTaskList([...taskList].filter((id) => id.id !== itemId));
    userData.tasklist = [...taskList].filter((id) => id.id !== itemId);
    localStorage.setItem(email, JSON.stringify(userData));
  };

  return (
    <div className="App">
      {status ? (
        <>
          <h1>TodoList</h1>
          <h2 style={{ marginLeft: 300 }}> {date.toLocaleTimeString()}</h2>
          <ul>
            {taskList.map((task) => (
              <Task task={task} onDeleteTask={onDeleteTask} />
            ))}
          </ul>
          <TextField onChange={handleChange} />
          <br />
          <Button onClick={() => onAddTask(value)}> Add Task </Button>
          <br />
          <Button onClick={() => logout()}>Logout</Button>
          <br />
          <Button onClick={() => clearAll()}>clearAll</Button>
        </>
      ) : (
        <h1>Please Log in</h1>
      )}
      ;
    </div>
  );
}

export default TaskList;