import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Task from "./task";
import { selectlogin } from "../Redux/reducers/LoginSlice";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/reducers/LoginSlice";
import { getUsers, saveUserStatus } from "../Redux/reducers/taskListSlice";
function TaskList() {
  const dispatch = useDispatch();
  // Initiating Object Constructor
  const { email, isLoggedIn, taskList } = useSelector(selectlogin);
  const userData = useSelector(getUsers)[email];
  const [date, setDate] = useState(new Date());
  const [tasklist, setTaskList] = useState(taskList);
  const [value, setValue] = useState("");
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
    const userData = JSON.parse(localStorage.getItem(email));

    // new todo object
    const task = {
      name: taskValue,
      id: new Date(),
    };
    console.log(userData);

    setTaskList([...tasklist, task]);
  };

  const clearAll = () => {
    setTaskList([]);
    userData.tasklist = [];
    localStorage.setItem(email, JSON.stringify(userData));
  };

  //Logout Function
  const Logout = () => {
    const user = { email: email, taskList: tasklist };
    dispatch(logout());
    dispatch(saveUserStatus(user));
    navigate("/");
  };

  //Function To delete Task
  const onDeleteTask = (itemId) => {
    setTaskList([...tasklist].filter((id) => id.id !== itemId));
    userData.tasklist = [...tasklist].filter((id) => id.id !== itemId);
    localStorage.setItem(email, JSON.stringify(userData));
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <h1>TodoList</h1>
          <h2 style={{ marginLeft: 300 }}> {date.toLocaleTimeString()}</h2>
          <ul>
            {tasklist.map((task) => (
              <Task task={task} onDeleteTask={onDeleteTask} />
            ))}
          </ul>
          <TextField onChange={handleChange} />
          <br />
          <Button onClick={() => onAddTask(value)}> Add Task </Button>
          <br />
          <Button onClick={() => Logout()}>Logout</Button>
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
