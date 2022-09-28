import React, { Component } from 'react';
import "./styles.css"

class RegisterForm extends Component {
  // react States
  constructor(props){
    super(props);
    this.setErrorMessages= "";
    this.setIsSubmitted=false;
    this.state ={
      password : "",
      email : "",
      setErrorMessages: "",
      setIsSubmitted: false
    };
    this.errors.bind(this);
    this.handleSubmit.bind(this);
    this.renderErrorMessage.bind(this);
    this.registrationForm.bind(this);
  };
  
  errors = {
    email: "username already exist",
  };

  handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { email, password } = document.forms[0];

    // Find user login info
    const userData = localStorage.getItem(email)

    // Compare user info
    if (userData) {
      if (userData != null) {
        // user already exist
        this.setErrorMessages({ name: email, message: this.errors.email });
      } else {
        this.setIsSubmitted(true);
        localStorage.setItem(email,[password.value,[]])
        alert(" User Registered successfully")
      };
    };
  };

  // Generate JSX code for error message
  renderErrorMessage = (name) =>
    name === this.state.setErrorMessages.name && (
      <div className="error">{this.state.setErrorMessages.message}</div>
    );
    registrationForm = (
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
              {this.renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
              
            </div>
            <div className="button-container">
              <button type="submit">Register</button>
            </div>
          
          </form>
        </div>
      );
     render(){
      return (
        <div className="app">
          <div className="login-form">
            <div className="title">Register</div>
            {this.state.setIsSubmitted ? <div>User is successfully registered</div> : this.registrationForm}
          </div>
        </div>
      );
  };
}
export default RegisterForm;    