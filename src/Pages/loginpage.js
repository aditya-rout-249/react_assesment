import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/loginForm";
import { login } from "../Redux/reducers/LoginSlice";
import { selectUsers } from "../Redux/reducers/taskListSlice";
import { useSelector, useDispatch } from "react-redux";

function LoginPage() {
  
  const userData = useSelector(selectUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Function to Navigate to Register Page
  const handleRegister = () => {
    navigate("/registerPage");
  };

  // User Authentication Function
  const handleSubmit = (event) => {
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
        dispatch(login({  email: email.value }));
        navigate("/taskList");
      }
    } else {
      // Username not found
      alert("User Not found");
    }
  };

  
  return (
    <div>
    <LoginForm handleSubmit={handleSubmit} handleRegister={handleRegister}/>
    </div>
  );
}

export default LoginPage;
