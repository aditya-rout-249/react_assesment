import React, { useState } from "react";
import { Button, FormControl, TextField } from "@mui/material";

function RegisterForm() {
  // react State
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    let { email, password } = document.forms[0];
    console.log("here")

    // Find user login info
    const userData = localStorage.getItem(email.value);

    // Compare user info
    if (userData !== null) {
      // user already exist
      alert("User Already Exist");
    } else {
     // console.log("here")
      setIsSubmitted(true);
      localStorage.setItem(
        email.value,
        JSON.stringify({ password: password.value, tasklist: [] })
      );
      alert(" User Registered successfully");
    }
  };

  // User Registration form component
  const RegisterForm = (
    <div style={{ marginTop: 200, marginLeft: 600 }}>
      <form onSubmit={handleSubmit}>
        <FormControl
          sx={{ border: 1, borderRadius: 2 }}
        >
          <h6> Registeration Form</h6>
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
      </form>
    </div>
  );

  return (
    <div className="App">
      {isSubmitted ? <div>Registered Successfully</div> : <>{RegisterForm}</>};
    </div>
  );
}

export default RegisterForm;
