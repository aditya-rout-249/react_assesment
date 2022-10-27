import React from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, register } from "../Redux/reducers/taskListSlice";
import { useDispatch, useSelector } from "react-redux";

function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(getUsers);

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    let { email, password } = document.forms[0];
    dispatch(register({ email: email.value, password: password.value }));

    // Find user login info
    const currentUser = userData[email.value];

    // Compare user info
    if (currentUser !== null) {
      // user already exist
      alert("User Already Exist");
    } else {
      let newUser = { email: email.value, password: password.value };
      dispatch(register(newUser));
      alert(" User Registered successfully");
      navigate("/");
    }
  };

  
  

  return (
    <div className="App">
      <RegisterForm handleSubmit ={handleSubmit}/>
    </div>
  );
}

export default RegisterForm;
