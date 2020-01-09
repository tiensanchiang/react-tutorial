import React from "react";

export default class ActionButton extends React.Component{

    render(){
	console.log(`Render ActionButton: (${this.props.text}) Component`);
	return (
	    <button className="btn btn-primary m-2"
	      onClick={ this.props.callback }>
	    { this.props.text }
	    </button>
	);
    }
}
