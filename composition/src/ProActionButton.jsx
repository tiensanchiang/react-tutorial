import React from "react";
import ProModeContext from './ProModeContext';

export default class ProActionButton extends React.Component{
    
    constructor(props){
	super(props);
	this.state = {
	    clickCount:0
	}
    }

    handleClick = ()=>{
	this.setState({
	    clickCount: this.state.clickCount+1
	});
	this.props.callback();
    }
    
    getClasses = (mode)=>{
	let col = mode? this.props.theme: "danger";
	return `btn btn-${col} m-2`;
    }
    
    render = ()=>{
	return (
	    <ProModeContext.Consumer>
	    {
		contextData=>{
		    if(this.state.clickCount > 1){
			throw new Error("Click Count Error");
		    }
		    return (
			<button className={ this.getClasses(contextData.proMode) }
			disabled={ !contextData.proMode }
			onClick={ this.handleClick }>
			{ this.props.text }
			</button>
		    )
		}
	    }
	    </ProModeContext.Consumer>
	);
    }
}
