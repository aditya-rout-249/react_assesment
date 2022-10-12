import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Todolist from "./taskList";
import RegisterForm from "./registerPage";
import { Button, FormControl, TextField } from "@mui/material";

function Loginform() {
  // React States
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
    taskList: "",
  });
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const navigate = useNavigate();

  //Function to Navigate to Register Page
  const useNavigateToRegisterPage = () => {
    navigate("/registerPage");
  };

  // User Authentication Function
  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
    let { email, password } = document.forms[0];

    // Find user login info
    let userData = JSON.parse(localStorage.getItem(email.value));

    // Compare user info
    if (userData) {
      if (userData.password !== password.value) {
        // Invalid password
        alert("Invalid Password");
      } else {
        // Setting up user data to be used in
        setCurrentUser({
          email: email.value,
          password: userData.password,
          taskList: userData.tasklist,
        });
        setisLoggedIn(true);
        navigate('/taskList')
      }
    } else {
      // Username not found
      alert("User Not found");
    }
  };

  //LoginForm Component
  const loginForm = (
    <div style={{ marginTop: 200, marginLeft: 600 }}>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ border: 1, borderRadius: 2 }}>
          <img
            src="/home/aryan_249/my-app/src/UserLogin.jpg"
            alt="User Login"
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            type="email"
            name="email"
            style={{ margin: 20 }}
          />

          <TextField
            required
            id="outlined-required"
            label="password"
            type="password"
            name="password"
            style={{ margin: 20 }}
          />

          <Button
            style={{ marginLeft: 20, marginRight: 20 }}
            variant="contained"
            type="submit"
          >
            Login
          </Button>

          <br />

          <Button
            type="button"
            variant="contained"
            onClick={useNavigateToRegisterPage}
          >
            Register
          </Button>
        </FormControl>
      </form>
    </div>
  );

  return (
    <div className="App">
      <Routes>
        <Route exact path="/registerPage" element={<RegisterForm />} />
        <Route
          exact
          path="/taskList"
          element={
            <Todolist email={currentUser.email} isLoggedIn={isLoggedIn} />
          }
        />
        <Route exact path="/" element={loginForm} />
      </Routes>
    </div>
  );
}

export default Loginform;
