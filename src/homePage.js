import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegisterForm from "./registerPage";
import "./styles.css";

class App extends Component {
  // React States
  constructor(props){
    super(props);
    this.state = {
      password : "",
      email : "",
      setErrorMessages: "",
      currentUser: "",
      IsSubmitted: false
    };
    this.errors.bind(this);
    this.handleSubmit.bind(this);
    this.renderErrorMessage.bind(this);
    this.loginForm.bind(this);
    
  };

  // User Login info
 

 errors = {
    email: "invalid email",
    password: "invalid password",
  };

 handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { email, password } = document.forms[0];

    // Find user login info
    const userData = JSON.parse(localStorage.getItem(email))


    // Compare user info
    if (userData) {
      if (userData[0] !== password.value) {
        // Invalid password
        this.setState({setErrorMessages:{ name: "password", message: this.state.errors.password }});
      } else {
        this.setState({
          setIsSubmitted:true,
          userData
        });
        
      }
    } else {
      // Username not found
      this.setState({setErrorMessages:{ name: "email", message: this.state.errors.email }});
    }
  };

  // Generate JSX code for error message
  renderErrorMessage = (name) =>
    name === this.state.seterrorMessages.name && (
      <div className="error">{this.state.setErrorMessages.message}</div>
    );

  // JSX code for login form
  loginForm = (
    <div className="form">
      <form onSubmit={this.handleSubmit}>
        <div className="input-container">
          <label>email</label>
          <input type="text" name="email" value={this.email} required />
          {this.renderErrorMessage("email")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" value={this.state.password} required />
          {this.renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <button type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );

  //Route for registration form
  
render(){
return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {this.state.isSubmitted ? <div>User is successfully logged in</div> : <loginForm/>}
      </div>
      <Routes>
        <Route path = '/registerPage' element = {<RegisterForm/>}></Route>
      </Routes>
      <Router>
        <button type="button">
          <Link to={"/registerPage"} className="nav-link">
            Register
          </Link>
        </button>
      </Router>
    </div>
  );
};
};

export default App;
