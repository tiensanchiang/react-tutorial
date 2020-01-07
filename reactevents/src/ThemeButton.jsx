import React from "react";

export default class ThemeButton extends React.Component{

    handleClick = (event) => {
	console.log(`ThemeButton: Type: ${event.type} ` +
		    `Target: ${event.target.tagName} ` +
		    `CurrentTaget: ${event.currentTarget.tagName}`);
	this.props.callback(this.props.theme);
    }


    render(){
	return(
	    <span className="m-1" onClick={ this.handleClick }
		  onClickCapture={ this.handleClick}>
		<button className={ `btn btn-${ this.props.theme }` }
			onClick={ this.handleClick }>
		    Select { this.props.theme } Theme
		</button>
	    </span>
	);
    }
}
