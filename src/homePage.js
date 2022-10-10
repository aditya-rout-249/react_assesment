import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Todolist from "./todolist";
import RegisterForm from "./registerPage";
import "./styles.css";
import { Button, FormControl, TextField } from "@mui/material";

class App extends Component {
  // React States
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        email: "",
        password: "",
        taskList: [],
      },
      isloggedIn: false,
    };
  }

  // User Authentication Function
  handleSubmit = (event) => {
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
        this.setState({
          isloggedIn: true,
          currentUser: {
            email: email.value,
            password: userData.password,
            taskList: userData.tasklist,
          },
        });
      }
    } else {
      // Username not found
      alert("User Not found");
    }
  };

  //LoginForm Component
  loginForm = (
    <div style={{ marginTop: 200, marginLeft: 600 }}>
      <FormControl
        onSubmit={this.handleSubmit}
        sx={{ border: 1, borderRadius: 2 }}
      >
        <img src="./UserLogin.jpg" alt="User Login" />
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
          type="Submit"
        >
          Login
        </Button>

        <br />

        <Button variant="contained">
          <Link to="/registerPage">Register</Link>
        </Button>
      </FormControl>
    </div>
  );

  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path="/registerPage" element={<RegisterForm />}></Route>
          <Route
            exact
            path="/todolist"
            element={
              <Todolist
                email={this.state.currentUser.email}
                isLoggedIn={this.state.isloggedIn}
                todolist={this.state.currentUser.taskList}
                password={this.state.currentUser.password}
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              this.state.isloggedIn ? (
                <Link to="/todolist">Todolist</Link>
              ) : (
                <>{this.loginForm}</>
              )
            }
          ></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
