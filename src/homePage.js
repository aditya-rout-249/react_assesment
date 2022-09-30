import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./styles.css";
import Todolist from "./todolist";
class App extends Component {
  // React States  
    state = {
      password : "",
      email : "",
      currentUser:{
        email:"",
        passwword:"",
        taskList:[]
      },
      isloggedin:false,
      setErrorMessages:{
        name:"",
        message:""
      },
      errors : {
          email: "invalid email",
          password: "invalid password",
      }  
    };

 handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { email, password } = document.forms[0];
    
    // Find user login info
    const userData = JSON.parse(localStorage.getItem(email.value))
    
    // Compare user info
    if (userData) {
      if (userData.password !== password.value) {
        // Invalid password
        alert("Invalid Password")
      } else {
        // Setting up user data to be used in 
        this.setState({
          isloggedin:true,
          currentUser:{
            email:email.value,
            password:userData.password,
            taskList:userData.tasklist
          }
        });
      }
    } else {
      console.log("called")
      // Username not found
      this.setState({setErrorMessages:{ name: email, message: this.state.errors.email }});
    }
  };


  

render(){ 
  return (
    <div className="App">
      
      {this.state.isloggedin?
      <div>Logged in Successfully
        <Link to='/todolist' Component={<Todolist List={this.state.currentUser.taskList}/>}>Get to do list</Link>
      </div>

      :(<div><h1> Login Form</h1>
      <form onSubmit ={this.handleSubmit}>
        <input type="email" name="email"></input>
        <input type="passwaord" name="password"></input>
        <button type="Submit" onClick={this.handleSubmit}>Login</button>
        
      </form></div>)}
    </div>
  );
 };
};

export default App;
