import 
React , 
{ Component 
} from 'react';
import {
	Routes ,
  Route ,
  Link
} from 'react-router-dom';
//import { withRouter } from 'react-router'
import Todolist from './todolist'
import RegisterForm from "./registerPage";
import './styles.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

class App extends Component {
  // React States 
  constructor (props) {
    super(props);
      this.state = {
        currentUser:{
        email:'',
        password:'',
        taskList:[]
        },
        isloggedIn:false,
      };
  };

  // User Authentication Function
  handleSubmit = (event) => {

    // Prevent page reload
    event.preventDefault();
    let { email, password } = document.forms[0]; 

    // Find user login info
    let userData = JSON.parse(localStorage.getItem(email.value));

    // Compare user info
    if (userData) {
      if (userData.password !== password.value) {

        // Invalid password
        alert("Invalid Password")
      } else {

         // Setting up user data to be used in 
         this.setState({
           isloggedIn:true,
           currentUser:{
           email:email.value,
           password:userData.password,
           taskList:userData.tasklist
          }
        });
  
      }
    } else {

    // Username not found
    alert("User Not found")
  };
};

render() {
  return (
    <div className = "App">
      <Routes>
        <Route exact path = "/registerPage" element={<RegisterForm/>}></Route>
        <Route exact path = '/todolist' element={ <Todolist email={this.state.currentUser.email}  isLoggedIn = {this.state.isloggedIn} todolist = {this.state.currentUser.taskList} password = {this.state.currentUser.password}/>}></Route>
        <Route exact path='/' element={this.state.isloggedIn ? (<Link to='/todolist'>Todolist</Link>):(<div>
          <h1>Login Form</h1>
          <form onSubmit ={this.handleSubmit}>
            <TextField required id='outlined-required' m={20} label='Email'type = "email" name = "email"/><br/><br/>
						
            <TextField required id='outlined-required'   label='password' type = "password" name = "password"/><br/>
            <Button variant="contained" type = "Button" onClick = {this.handleSubmit}>Login</Button> 
          </form>
          <Button variant="outlined"><Link to = "/registerPage">Register</Link></Button>
        </div>)}>
				</Route>
			</Routes>		
    </div>
   );
  };
};

export default App;
