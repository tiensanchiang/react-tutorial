import React from 'react';
import './App.css';
import List from "./List";
import Message from "./Message";

export default class App extends React.Component{

    constructor(props){
	super(props);
	this.state = {
	    counter: 0
	}
    }

    incrementCounter = ()=>{
	this.setState({ counter : this.state.counter + 1});
    }
    
    render(){
	console.log("Render App Component");
	
	return (
	    <div className="container text-center">
		<div className="row p-2">
		    <div className="col-6">
			<Message message={`Counter: ${this.state.counter}`}
				 callback={ this.incrementCounter }
				 text="Increment Counter" />
		    </div>
		    <div className="col-6">
			<List/>
		    </div>
		</div>
	    </div>
	);
    }

}
