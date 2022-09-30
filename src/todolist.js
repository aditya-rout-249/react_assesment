import React ,{Component} from 'react'
import Row from "./listentry"

class Todolist extends Component {
    constructor(props){
			super(props);
			this.state={
        // list : [],
				// todolist : props.list,
				email : "props.email",
        password :" props.password",
			}
		}
		
		createlist = () =>{
    const list = new Array();
    this.state.todolist.forEach(element => {
		list.push(<Row value={element}></Row>)
		});
		return list;
		};

		addTask = (userInput) => {
			let copy = this.state.todolist;
			copy.push(userInput)
			console.log(this.state.email)
		  localStorage.setItem("aryan@gmail.com", JSON.stringify(this.state.email,{password: this.state.password,tasklist:copy}))
			this.setState({todolist:copy})
	
			this.state.list.push(<Row value={userInput}></Row>);
		};

	render(){
		return (
			<div className="App">
				<h1>TodoList</h1>
				<ul>{this.createlist()}</ul>
				<input id="newtask"></input>
				<button onClick={this.addTask(document.getElementById("newtask"))}> Add Task </button>
			</div>
		);
	}
}

export default new Todolist;