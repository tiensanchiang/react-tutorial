import React, {Component} from 'react';
import TodoBanner from './TodoBanner';
import TodoCreator from './TodoCreator';
import TodoRow from './TodoRow';
//import logo from './logo.svg';
//import './App.css';

export default class App extends Component {
    constructor(props){
	super(props);
	this.state = {
	    userName: 'Adam',
	    todoItems:[
		{ action: 'Buy Flowers', done: false },
		{ action: 'Get Shoes', done: false },
		{ action: 'Collect Tickets', done: true },
		{ action: 'Call Joe', done: false },
	    ],
//	    newItemText: ''
	}
    }

    updateNewTextValue = (event) => {
	this.setState({
	    newItemText: event.target.value
	})
    }
    
    createNewTodo = (task)=> {
	if(!this.state.todoItems.find(item=>item.action === task )){
	    this.setState({
		todoItems: [...this.state.todoItems,
			    { action: task , done: false }],
	    })
	}
    }
    
    changeStateData = ()=>{
	this.setState({
	    userName: this.state.userName=='Adam'?'Bob':'Adam'
	})
    }

    toggleTodo = (todo) => {
	    
	this.setState({
	    todoItems: this.state.todoItems.map( item =>
		item.action === todo.action?{...item, done: !item.done}:item)
	})
    }


    todoTableRows = () => {
	return this.state.todoItems.map( item =>{
	    return (
		<TodoRow key = {item.action} item = {item} callback={this.toggleTodo} />
	    )
	});
    }

    createTodoRows = () => {
	let rows = []
	this.state.todoItems.forEach( item =>
	    rows.push(<TodoRow key={item.action} item={item} callback={this.toggleTodo} /> )
	)
	return rows
    }
    
    render(){
	return (
	    <div>
		<TodoBanner name={this.state.userName} tasks={this.state.todoItems} />
		<div className="container-fluid">
		    <div className="my-1">
			<TodoCreator callback={this.createNewTodo}/>
			<table className="table table-striped table-bordered">
			    <thead>
				<tr><th>Description</th><th>Done</th></tr>
			    </thead>
			    <tbody>
				{

				    /*this.todoTableRows()
				    this.state.todoItems.map(item=>
					<TodoRow key={item.action} item={item} callback={this.toggleTodo} />
				       )*/
				    this.createTodoRows()
				}
				    
				    
			    </tbody>
			</table>
		    </div>
		</div>
		<button className="btn btn-primary m-2"
			onClick={this.changeStateData}>
		    Change
		</button>
	    </div>
	)
    };
}

//export default App;
