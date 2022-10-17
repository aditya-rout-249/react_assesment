import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Todolist from "./taskList";
import RegisterForm from "./registerPage";
import { Button, FormControl, TextField } from "@mui/material";
import { logingin, selectlogin } from "../Redux/reducers/LoginSlice";
import { getUsers } from "../Redux/reducers/taskListSlice";
import { useSelector, useDispatch } from "react-redux";

function Loginform() {
  // React States
  const { email, isLoggedIn } = useSelector(selectlogin);
  const userData = useSelector(getUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Function to Navigate to Register Page
  const useNavigateToRegisterPage = () => {
    navigate("/registerPage");
  };

  // User Authentication Function
  const HandleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
    let { email, password } = document.forms[0];

    // Find user login info

    const currentUser = userData[email.value];
    // Compare user info
    if (currentUser) {
      if (currentUser.password !== password.value) {
        // Invalid password
        alert("Invalid Password");
      } else {
        // Setting up user data to be used in
        dispatch(logingin({ ...currentUser, email: email.value }));
        navigate("/taskList");
      }
    } else {
      // Username not found
      alert("User Not found");
    }
  };

  //LoginForm Component
  const loginForm = (
    <div style={{ marginTop: 200, marginLeft: 600 }}>
      <form onSubmit={HandleSubmit}>
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
          element={<Todolist email={email} isLoggedIn={isLoggedIn} />}
        />
        <Route exact path="/" element={loginForm} />
      </Routes>
    </div>
  );
}

export default Loginform;
