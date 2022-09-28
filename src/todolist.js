import react ,{Component} from 'react'
import Header from "./Header";
import ToDoList from "./ToDoList";
import Row from "./listentry"

class todolist extends Component {
    constructor(props){
			super(props);
			this.state={
				todolist : props.list,
				email : props.email,
        password : props.password

			}
			this.createlist.bind(this)
			this.addTask.bind(this)
		}
		
		createlist = () =>{
    list = []
    todolist.array.forEach(element => {
			list.push(<Row value={element}></Row>)
		});
		return list;
		};

		
	
		 
	
		addTask = (userInput) => {
			let copy = [...this.toDoList];
			copy.push(userInput)
		  localStorage.setItem(this.email,[this.password,copy])	
			this.setState(todolist=copy)
			list.push(<Row value={userInput}></Row>)
		  ;
		}
	render(){
		return (
			<div className="App">
				<h1>TodoList</h1>
				<ul>{createlist()}</ul>
				<input id="newtask"></input>
				<button onClick={this.addTask(document.getElementById("newtask"))}> Add Task <button/>
			</div>
		);
	}
}

export default todolist;