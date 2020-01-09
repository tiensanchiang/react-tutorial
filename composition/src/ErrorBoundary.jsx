import React from "react";

export default class ErrorBoundary extends React.Component{

    constructor(props){
	super(props);
	this.state = {
	    errorThrown: false
	}
    }

    componentDidCatch = (error, info)=>{
	this.setState({ errorThrown: true });
    }

    render = ()=> {
	if( this.state.errorThrown ){
	    return(
		<h3 className="bg-danger text-white text-center m-2 p-2">
		    Error Detected
		</h3>
	    )
	}else{
	    return this.props.children;
	}
    }
}
