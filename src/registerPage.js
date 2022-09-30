import React, { Component } from 'react';
import "./styles.css"

class RegisterForm extends Component {
  // react States
    state ={
      password : "",
      email : "",
      isSubmitted:false,
      };

  handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { email, password } = document.forms[0];

    // Find user login info
    const userData = localStorage.getItem(email.value)
    console.log("here")
    console.log(userData)
    // Compare user info
      if (userData != null) {
      
        // user already exist
        alert("User Already Exist")
      } else {
        this.setState({isSubmitted:true});
        localStorage.setItem(email.value,JSON.stringify({password:password.value,tasklist:[]}))
        alert(" User Registered successfully")
      };
  };

  // Generate JSX code for error message
 
    
     render(){
      return (
      <div className="App">
      {this.state.isSubmitted?<div>Registered Successfully</div>:(<div><h1> Registeration Form</h1>
      <form onSubmit ={this.handleSubmit}>
        <input type="email" name="email"></input>
        <input type="passwaord" name="password"></input>
        <button type="Submit" onClick={this.handleSubmit}>Register</button>
      </form></div>)}
      </div>
      );
  };
}
export default RegisterForm;    