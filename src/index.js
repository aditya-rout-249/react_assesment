import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegisterForm from "./registerPage";
import './index.css';
import App from './homePage.js';
import Todolist from './todolist'

import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
      <div>
      <Router>
      <button><Link to='/registerPage'>Register</Link></button>
      <Routes>
      <Route path='/' element={<App/>} ></Route>
      <Route  path='/todolist' element={<Todolist/>}></Route>
      <Route path='/registerPage' element={<RegisterForm/>}></Route>
      </Routes>  
      </Router>
      </div>
     
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
