import React, { Component } from "react";
import { Button, FormControl, TextField } from "@mui/material";
import "./styles.css";

class RegisterForm extends Component {
  // react States
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      isSubmitted: false,
    };
  }

  handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    let { email, password } = document.forms[0];

    // Find user login info
    const userData = localStorage.getItem(email.value);

    // Compare user info
    if (userData !== null) {
      // user already exist
      alert("User Already Exist");
    } else {
      this.setState({ isSubmitted: true });
      localStorage.setItem(
        email.value,
        JSON.stringify({ password: password.value, tasklist: [] })
      );
      alert(" User Registered successfully");
    }
  };

  RegisterForm = (
    <div style={{ marginTop: 200, marginLeft: 600 }}>
      <FormControl
        onSubmit={this.handleSubmit}
        sx={{ border: 1, borderRadius: 2 }}
      >
        <h1> Registeration Form</h1>
        <TextField
          required
          id="outlined"
          multiline
          label="Email"
          type="email"
          name="email"
          placeholder="Email"
          style={{ margin: 10 }}
        />
        <TextField
          required
          id="outlined"
          multiline
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
          style={{ margin: 10 }}
        />
        <br />
        <Button
          type="Submit"
          variant="contained"
          style={{ marginLeft: 40, marginRight: 40 }}
        >
          Register
        </Button>
      </FormControl>
    </div>
  );

  render() {
    console.log(this.props);
    return (
      <div className="App">
        {this.state.isSubmitted ? (
          <div>Registered Successfully</div>
        ) : (
          <>{this.RegisterForm}</>
        )}
        ;
      </div>
    );
  }
}
export default RegisterForm;
