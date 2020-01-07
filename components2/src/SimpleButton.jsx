import React from "react"

export default class SimpleButton extends React.Component {
    constructor(props){
	super(props);
	this.state = {
	    counter:0,
	    hasButtonBeenClicked:false
	};
    }

    handleClick = ()=>{
	/*	this.setState({ hasButtonBeenClicked:true, counter: this.state.counter+1}); */
	
	/**DO NOT WORK
	this.setState({ counter: this.state.counter+1 });
	this.setState({ hasButtonBeenClicked: this.state.counter>0 }); 
	*/

	/** WORK
	this.setState({ counter: this.state.counter+1 },
		      ()=>{
			  this.setState({ hasButtonBeenClicked: this.state.counter>0 })
		      });
	this.setState({ hasButtonBeenClicked: this.state.counter>0 }); 
	*/

	/** DO NOT WORK
	for(let i=0; i<5; i++){
	    this.setState({ counter: this.state.counter+1 });
	}
	this.setState({ hasButtonBeenClicked: this.state.counter>0 }); 	
	*/

	/** WORK
	for(let i=0; i<5; i++){
	    this.setState((state,props)=>({counter: state.counter+1}));
	}
	this.setState({ hasButtonBeenClicked: this.state.counter>0 }); 	
	*/
	
	this.props.callback();
    }

    render = ()=>{
	return (
	    <button className={ this.props.className }
		onClick={ this.handleClick } disabled={ this.props.disabled}>
		{ this.props.text } { this.state.counter }
		{ this.state.hasButtonBeenClicked &&
		  <div>Button Clicked!</div>
		}
		
	    </button>
	);
    }
}
