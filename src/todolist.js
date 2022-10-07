import React , { Component } from 'react'

class Todolist extends Component {
  // Initiating Object Constructor
  constructor (props) {
	  super(props);
	  this.state = {
		  count : props.todolist.length,
		  value : '',
	    todolist : props.todolist,
	    email : props.email,
      password : props.password
	  };
	};

	handleChange = (event) => {
		this.setState({ value :event.target.value})
	};

  // Function to add task
  onAddTask = (userInput) => {

	  // new todo object
		const obj = {
		name: userInput,
		id: this.state.count+1,
		};
    console.log("called")
		let copy = this.state.todolist;
		copy.push(obj);
		
		localStorage.setItem(this.state.email, JSON.stringify({ password: this.state.password, tasklist: copy}));
		this.setState({
			 todolist: copy,
		   count : this.state.count+1
			 });
	};
  
  //Function To delete Task	
  onDeleteTask = (itemId) => {
	  this.setState({
	    todolist: [...this.state.todolist].filter((id) => id.id !== itemId),
	  });
	  localStorage.setItem(this.state.email, JSON.stringify({password: this.state.password,tasklist:this.state.todolist}))
  };	

	/**/
  
  // Rendering Todolist Component
  render () {
		const mylist = this.state.todolist.map((todo) => (
			<li key = {todo.id}>
			{todo.name}
			<button onClick = {() => this.onDeleteTask(todo.id)}>Remove</button>
			</li>
		));
	return (
		<div className="App">

		{this.props.isLoggedIn?
		<>
		<h1>TodoList</h1>
		 <ul>{mylist}</ul>
		 <input onChange = {this.handleChange}></input>
		 <button onClick = { () => this.onAddTask( this.state.value )}> Add Task </button>
	 </>
	 :<h1>Please Log in</h1>
	};
		</div>
		);
	};
};

export default  Todolist;