import React from 'react';
import './App.css';
import ThemeButton from "./ThemeButton";

export default class  App extends React.Component {
    constructor(props){
	super(props);
	this.state = {
	    theme: "secondary",
	    message: "Ready"
	}
    }

    handleEvent = (event)=>{
	console.log(event);

	if( event.type === 'mousedown'){
	    this.setState({
		message: 'Down'
	    });
	}else if( event.type === 'mouseup'){
	    this.setState({
		message: 'Up'
	    });
	}
    }

    handleClick = (event)=>{
	console.log(`App: Type: ${event.type} ` +
		    `Target: ${event.target.tagName} ` +
		    `CurrentTaget: ${event.currentTarget.tagName}`);
	
    }

    selectTheme = (theme)=>{
	this.setState({
	    theme: theme,
	    message: `Theme: ${theme}`
	});
    }

    render(){
	return (
	    <div className="m-2" onClick={ this.handleClick }>
		<div className="h4 bg-primary text-white text-center p-2">
		    { this.state.message }
		</div>
		<div className="text-center" onClick={  this.handleClick }>
		    <ThemeButton theme="primary" callback={ this.selectTheme }/>
		    <ThemeButton theme="danger" callback={ this.selectTheme } />
		</div>
	    </div>
	);
    }
}
