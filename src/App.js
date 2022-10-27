import React from "react";
import TaskList from "./components/taskList";
import { Routes, Route } from "react-router-dom";
import RegisterForm from "./Pages/registerPage";
import LoginPage from "./Pages/loginpage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/registerPage" element={<RegisterForm />} />
        <Route
          exact
          path="/taskList"
          element={<TaskList/>}
        />
        <Route exact path="/" element={<LoginPage />} />
      </Routes>
      <LoginPage/>
    </div>
  );
}

export default App;
