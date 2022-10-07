import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./styles.css"

class RegisterForm extends Component {
  // react States
  constructor(props){
    super(props);
    this.state ={
      password : '',
      email : '',
      isSubmitted:false,
      };
    };

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
        this.setState({isSubmitted:true});
        localStorage.setItem(email.value,JSON.stringify({password:password.value,tasklist:[]}));
        alert(" User Registered successfully");
    };
  };

  render () {
    return (
      <div className="App">
        {this.state.isSubmitted
        ?<div>Registered Successfully</div>
        :(<div>
          <h1> Registeration Form</h1>
            <form onSubmit ={this.handleSubmit}>
              <TextField required id='outlined' multiline  label='Email' type = "email" name = "email" placeholder='Email'/><br/>
              <br/>
              <TextField required id='outlined' multiline label='Password' type = "password" name = "password" placeholder='Password'/>
              <br/>
              <Button type="Submit" onClick={this.handleSubmit}>Register</Button>
            </form>
        </div>)
       };
      </div>
    );
   };
};
export default RegisterForm;    