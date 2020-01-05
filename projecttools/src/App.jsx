import React from 'react';
import Display from "./Display"

export default class App extends React.Component{

    constructor(props){
	super(props);
	this.state = {
	    city: "London"
	};
    }

    changeCity = ()=> {
	debugger
	this.setState({ city: this.state.city === "London"? "New York": "London" });
    }
    
    render = ()=> {
	return (
	    <Display value={this.state.city} callback={this.changeCity} />
	)
    }
}
